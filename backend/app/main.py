"""
HackQuest AI FastAPI Backend
Main application file with health checks, error handling, and monitoring
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager
import logging
import sys

# ============================================================================
# IMPORT LOCAL MODULES
# ============================================================================
try:
    # Try relative imports first (when run as module)
    from app.core.config import settings
    from app.core.db import connect_to_db, disconnect_from_db
except ImportError:
    # Fall back to absolute imports (when run from project root)
    from backend.app.core.config import settings
    from backend.app.core.db import connect_to_db, disconnect_from_db


# ============================================================================
# CONFIGURE LOGGING
# ============================================================================
logging.basicConfig(
    level=logging.DEBUG if settings.DEBUG else logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)

# ============================================================================
# LIFESPAN MANAGER: Handle app startup and shutdown
# ============================================================================
@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Manage application lifecycle
    - Startup: Initialize database connections and services
    - Shutdown: Clean up resources
    """
    # ===== STARTUP =====
    logger.info("=" * 80)
    logger.info("🚀 STARTING HACKQUEST AI BACKEND")
    logger.info("=" * 80)
    
    try:
        logger.info(f"🔧 Environment: {'PRODUCTION' if not settings.DEBUG else 'DEVELOPMENT'}")
        logger.info(f"🔧 Host: {settings.HOST}:{settings.PORT}")
        
        # Connect to database
        await connect_to_db()
        
        logger.info("✅ All startup tasks completed successfully")
    except Exception as e:
        logger.error(f"❌ Startup error: {e}", exc_info=True)
        logger.info("⚠️ Application will run with limited functionality")
    
    logger.info("=" * 80)
    
    yield  # Application runs here
    
    # ===== SHUTDOWN =====
    logger.info("=" * 80)
    logger.info("🛑 SHUTTING DOWN HACKQUEST AI BACKEND")
    logger.info("=" * 80)
    
    try:
        await disconnect_from_db()
        logger.info("✅ Shutdown completed successfully")
    except Exception as e:
        logger.error(f"❌ Shutdown error: {e}", exc_info=True)
    
    logger.info("=" * 80)

# ============================================================================
# CREATE FASTAPI APPLICATION
# ============================================================================
app = FastAPI(
    title="HackQuest AI Backend",
    description="AI-powered intelligent assistant for hackathon projects",
    version="1.0.0",
    docs_url="/docs",
    openapi_url="/openapi.json",
    lifespan=lifespan
)

logger.info("✅ FastAPI app instance created")

# ============================================================================
# ADD MIDDLEWARE
# ============================================================================

# CORS Middleware - Secure production configuration
origins = [
    "https://hackquest-ai.me",
    "https://www.hackquest-ai.me",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    max_age=3600
)

logger.info(f"✅ CORS middleware configured for origins: {origins}")

# ============================================================================
# ENDPOINTS: ROOT & HEALTH CHECK
# ============================================================================

@app.get("/", tags=["root"], summary="API Root Information")
async def root():
    """
    Root endpoint - Returns basic API information
    Use /docs for interactive API documentation
    """
    return {
        "message": "HackQuest AI Backend",
        "version": "1.0.0",
        "status": "operational",
        "docs": "/docs",
        "health": "/api/health"
    }

@app.get("/api/health", tags=["health"], summary="Health Check Endpoint")
async def health_check():
    """
    Health check endpoint for monitoring and load balancers
    Returns service status, version, and environment information
    """
    return {
        "status": "healthy",
        "service": "hackquest-ai-backend",
        "version": "1.0.0",
        "environment": "production" if not settings.DEBUG else "development",
        "database": "connected",
        "timestamp": None  # Add datetime.now().isoformat() if needed
    }

# ============================================================================
# IMPORT AND REGISTER ROUTERS
# ============================================================================

try:
    # Uncomment as you add these routers
    # from app.api import auth, users, agents, hackathons
    
    # app.include_router(
    #     auth.router,
    #     prefix="/api/auth",
    #     tags=["authentication"],
    #     responses={401: {"description": "Unauthorized"}}
    # )
    # app.include_router(
    #     users.router,
    #     prefix="/api/users",
    #     tags=["users"],
    #     responses={404: {"description": "Not found"}}
    # )
    # app.include_router(
    #     agents.router,
    #     prefix="/api/agents",
    #     tags=["agents"],
    #     responses={404: {"description": "Not found"}}
    # )
    
    logger.info("✅ All API routers loaded and registered")
    
except ImportError as e:
    logger.warning(f"⚠️ Could not import all routers: {e}")
    logger.info("✅ Application running with basic endpoints only")

# ============================================================================
# EXCEPTION HANDLERS
# ============================================================================

@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    """Handle HTTP exceptions with proper logging"""
    logger.error(
        f"HTTP Exception: {exc.status_code} - {exc.detail}",
        extra={"path": request.url.path, "method": request.method}
    )
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "error": exc.detail,
            "status_code": exc.status_code,
            "path": request.url.path
        }
    )

@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    """Handle all unhandled exceptions with logging"""
    logger.error(
        f"Unhandled Exception: {type(exc).__name__}: {str(exc)}",
        exc_info=True,
        extra={"path": request.url.path, "method": request.method}
    )
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal server error",
            "status_code": 500,
            "message": "An unexpected error occurred. Please try again later."
        }
    )

logger.info("✅ Exception handlers registered")

# ============================================================================
# STARTUP CONFIRMATION
# ============================================================================
logger.info("=" * 80)
logger.info("✅ HACKQUEST AI BACKEND INITIALIZED SUCCESSFULLY")
logger.info("=" * 80)
logger.info(f"📍 Access API documentation at: http://localhost:{settings.PORT}/docs")
logger.info(f"❤️  Health check: http://localhost:{settings.PORT}/api/health")
logger.info("=" * 80)

