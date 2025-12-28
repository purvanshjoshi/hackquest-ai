"""FastAPI application entry point with production-grade security."""
import logging
from datetime import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from contextlib import asynccontextmanager
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded

from app.core.config import settings
from app.core.db import init_db
from app.core.security import (
    get_limiter,
    CORSConfig,
    add_security_headers,
)
from app.api import auth_db, generate, matching, password_reset, router, websocket

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifecycle management"""
    # Startup
    logger.info("[START] Starting HackQuest AI Backend...")
    
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
    docs_url="/docs" if settings.DEBUG else None,  # Hide docs in production
    redoc_url="/redoc" if settings.DEBUG else None,
    openapi_url="/openapi.json" if settings.DEBUG else None,
)

# ============================================================================
# MIDDLEWARE: ORDER MATTERS
# ============================================================================

# 1. Security headers middleware (innermost - runs last on response)
app.middleware("http")(add_security_headers)

# 2. GZIP compression
app.add_middleware(GZipMiddleware, minimum_size=1000)

# 3. Rate limiting
limiter = get_limiter()
app.state.limiter = limiter.limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# 4. CORS (should be near outermost for security)
if settings.DEBUG:
    logger.info("Allowing all origins in DEBUG mode")
    cors_config = {
        "allow_origins": ["*"],
        "allow_credentials": True,
        "allow_methods": ["*"],
        "allow_headers": ["*"],
    }
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
        **cors_config
    )

logger.info(f"Security configuration loaded for environment: {settings.environment}")
logger.info(f"Rate limiting: {settings.RATE_LIMIT_DEFAULT}")
logger.info(f"CORS origins: {cors_config['allow_origins']}")

# Include routers
app.include_router(auth_db.router)
app.include_router(generate.router)
app.include_router(matching.router)
app.include_router(password_reset.router)
app.include_router(router.router)  # Agent router
app.include_router(websocket.router)  # WebSocket router


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
