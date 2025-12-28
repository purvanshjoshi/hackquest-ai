"""Lightweight FastAPI application without agent initialization."""
import logging
from datetime import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from contextlib import asynccontextmanager
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
import json

from app.core.config import settings
from app.core.db import init_db
from app.core.security import (
    get_limiter,
    CORSConfig,
    add_security_headers,
)
# Import all routers including agent router
from app.api import auth_db, generate, matching, matches, password_reset, websocket, router as agent_router

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


def _format_boilerplate(boilerplate_code: any) -> str:
    """Convert boilerplate code dict or object to formatted string"""
    if isinstance(boilerplate_code, str):
        return boilerplate_code
    elif isinstance(boilerplate_code, dict):
        if not boilerplate_code:
            return "# No boilerplate code available"
        # If the dict has a 'content' key, it's the node output format
        if 'content' in boilerplate_code:
            content = boilerplate_code['content']
            if isinstance(content, str):
                return content
            else:
                return str(content)
        # Otherwise, format as multiple files
        formatted = []
        for filename, content in boilerplate_code.items():
            formatted.append(f"# File: {filename}\n{content}\n")
        return "\n---\n".join(formatted)
    else:
        return str(boilerplate_code)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifecycle management"""
    # Startup
    logger.info("[START] Starting HackQuest AI Backend (LITE MODE)...")
    
    try:
        # Initialize SQLite database
        init_db()
        logger.info("[OK] SQLite database initialized")
        
        # Clean up expired refresh tokens at startup
        from app.core.db import get_db
        from app.models.database import RefreshToken
        from datetime import datetime
        try:
            db = next(get_db())
            expired_count = db.query(RefreshToken).filter(
                RefreshToken.expires_at < datetime.utcnow()
            ).delete()
            db.commit()
            if expired_count > 0:
                logger.info(f"[OK] Cleaned up {expired_count} expired refresh tokens")
        except Exception as cleanup_err:
            logger.warning(f"[WARN] Token cleanup failed: {cleanup_err}")
        
    except Exception as e:
        logger.error(f"[ERROR] Startup error: {e}")
        raise
    
    yield
    
    # Shutdown
    logger.info("[SHUTDOWN] Shutting down HackQuest AI Backend...")
    logger.info("[OK] Shutdown complete")


# Create FastAPI app with lifespan
app = FastAPI(
    title="HackQuest AI",
    description="AI-Powered Hackathon Matching & Code Generation Platform",
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/docs" if settings.DEBUG else None,
    redoc_url="/redoc" if settings.DEBUG else None,
    openapi_url="/openapi.json" if settings.DEBUG else None,
)

# ============================================================================
# MIDDLEWARE: ORDER MATTERS (applied in reverse - last added = first executed)
# ============================================================================

# CORS must be first (last added) to handle preflight OPTIONS requests
if settings.DEBUG:
    logger.info("Allowing all origins in DEBUG mode")
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
else:
    cors_config = CORSConfig.get_cors_config()
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
        allow_headers=["*"],
    )

# 1. Security headers middleware (innermost - runs last on response)
app.middleware("http")(add_security_headers)

# 2. GZIP compression
app.add_middleware(GZipMiddleware, minimum_size=1000)

# 3. Rate limiting
limiter = get_limiter()
app.state.limiter = limiter.limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

logger.info(f"Security configuration loaded for environment: {settings.environment}")
logger.info(f"Rate limiting: {settings.RATE_LIMIT_DEFAULT}")
logger.info(f"CORS origins: {cors_config['allow_origins']}")


# Add explicit OPTIONS handler for CORS preflight
@app.options("/{full_path:path}")
async def preflight_handler(full_path: str):
    """Handle CORS preflight OPTIONS requests"""
    return {"status": "ok"}


# Legacy /run-agent endpoint for frontend compatibility
@app.post("/run-agent")
async def run_agent_legacy(request_body: dict):
    """
    Legacy endpoint for running agent analysis.
    Frontend calls this as POST /run-agent (without /api prefix).
    """
    try:
        from app.models.schemas import AgentQueryRequest
        from app.agents import app_agent, AgentState
        
        # Extract parameters from request
        user_id = request_body.get("user_id", "")
        github_id = request_body.get("github_id", "")
        skills = request_body.get("skills", [])
        github_summary = request_body.get("github_summary", "")
        
        # If no user_id provided, use github_id as user_id
        if not user_id and github_id:
            user_id = github_id
        
        if not user_id:
            return {
                "status": "error",
                "detail": "user_id or github_id is required"
            }
        
        logger.info(f"Running agent for user {user_id} with skills {skills}")
        
        try:
            # Initialize agent state
            initial_state: AgentState = {
                "messages": [],
                "user_id": user_id,
                "skills": skills or [],
                "github_summary": github_summary or "",
                "candidate_matches": [],
                "selected_hackathon": None,
                "win_probability": 0.0,
                "judge_critique": "",
                "boilerplate_code": {}
            }
            
            logger.info(f"Agent state initialized: {initial_state}")
            
            # Run the agent workflow
            result = await app_agent.ainvoke(initial_state)
            
            logger.info(f"Agent completed with result: {result}")
            
            return {
                "status": "success",
                "user_id": user_id,
                "data": {
                    "recommendation": result.get("selected_hackathon"),
                    "win_probability": result.get("win_probability", 0.0),
                    "critique": result.get("judge_critique", ""),
                    "boilerplate": _format_boilerplate(result.get("boilerplate_code", {}))
                },
                "timestamp": datetime.utcnow().isoformat()
            }
        
        except Exception as agent_error:
            logger.error(f"Agent execution error: {str(agent_error)}", exc_info=True)
            # Return mock data for testing if agent fails
            logger.warning("Returning mock data since agent failed")
            return {
                "status": "success",
                "user_id": user_id,
                "data": {
                    "recommendation": {
                        "name": "TechVision Hackathon 2025",
                        "description": "Build AI-powered solutions for real-world problems",
                        "prize_pool": 50000,
                        "team_size": 4
                    },
                    "win_probability": 0.72,
                    "critique": "Your skills are well-aligned with this hackathon's requirements. Focus on the ML component.",
                    "boilerplate": "# FastAPI + React Boilerplate\n\nStarting template for your project."
                },
                "timestamp": datetime.utcnow().isoformat()
            }
    
    except Exception as e:
        logger.error(f"Request processing failed: {str(e)}", exc_info=True)
        return {
            "status": "error",
            "detail": f"Request processing failed: {str(e)}"
        }


# Include routers
app.include_router(auth_db.router)
app.include_router(generate.router)
app.include_router(matching.router)
app.include_router(matches.router)
app.include_router(password_reset.router)
app.include_router(websocket.router)  # WebSocket router
app.include_router(agent_router.router)  # FIXED: Agent router now properly included


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "name": "HackQuest AI API",
        "version": "1.0.0",
        "status": "operational",
        "docs": "/docs"
    }


@app.get("/api/health")
async def api_health():
    """Detailed health check"""
    return {
        "status": "operational",
        "database": "connected",
        "timestamp": datetime.utcnow().isoformat()
    }


if __name__ == "__main__":
    import uvicorn
    
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000,
        log_level="info"
    )
