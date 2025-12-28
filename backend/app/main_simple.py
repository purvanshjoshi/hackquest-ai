"""FastAPI application - Simplified for testing"""
import logging
from datetime import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.core.config import settings

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
    logger.info("🚀 Starting HackQuest AI Backend...")
    
    # Clean up expired refresh tokens at startup
    try:
        from app.core.db import get_db
        from app.models.database import RefreshToken
        from datetime import datetime
        db = next(get_db())
        expired_count = db.query(RefreshToken).filter(
            RefreshToken.expires_at < datetime.utcnow()
        ).delete()
        db.commit()
        if expired_count > 0:
            logger.info(f"Cleaned up {expired_count} expired refresh tokens")
    except Exception as cleanup_err:
        logger.warning(f"Token cleanup skipped: {cleanup_err}")
    
    logger.info("✅ Application started")
    
    yield
    
    # Shutdown
    logger.info("🛑 Shutting down HackQuest AI Backend...")
    logger.info("✅ Shutdown complete")


# Create FastAPI app with lifespan
app = FastAPI(
    title="HackQuest AI",
    description="AI-Powered Hackathon Matching & Code Generation Platform",
    version="1.0.0",
    lifespan=lifespan
)

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
from app.api.auth_simple import router as auth_router
app.include_router(auth_router)

# Health check endpoints
@app.get("/")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "HackQuest AI Backend",
        "version": "1.0.0",
        "environment": settings.debug
    }


@app.get("/api/health")
async def api_health():
    """Detailed health check"""
    return {
        "status": "operational",
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
