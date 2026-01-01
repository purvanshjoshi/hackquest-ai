"""Application configuration using environment variables with pydantic_settings"""
from pydantic_settings import BaseSettings
from functools import lru_cache
import logging

logger = logging.getLogger(__name__)

class Settings(BaseSettings):
    """Application settings loaded from environment variables with sensible defaults"""
    
    # ==================== DATABASE CONFIGURATION ====================
    MONGODB_URL: str = "mongodb://localhost:27017"
    DATABASE_NAME: str = "hackquest"
    MONGODB_DB: str = "hackquest"  # Keep for backwards compatibility
    
    # ==================== REDIS CONFIGURATION ====================
    REDIS_URL: str = "redis://localhost:6379"
    
    # ==================== EXTERNAL API KEYS ====================
    GROQ_API_KEY: str = ""
    PINECONE_API_KEY: str = ""
    PINECONE_INDEX: str = "hackquest-index"
    PINECONE_ENV: str = "us-east-1"  # For backwards compatibility
    
    # ==================== SECURITY CONFIGURATION ====================
    SECRET_KEY: str = "change-me-in-production-use-strong-secure-key"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # ==================== APPLICATION CONFIGURATION ====================
    DEBUG: bool = False
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    ENVIRONMENT: str = "development"
    PROJECT_NAME: str = "HackQuest AI"
    VERSION: str = "1.0.0"
    
    class Config:
        """Pydantic config - allows extra fields from .env"""
        env_file = ".env"
        case_sensitive = True
        extra = "ignore"  # Allow extra fields from .env but ignore them

@lru_cache()
def get_settings() -> Settings:
    """Get cached settings instance - called once per app lifetime"""
    return Settings()

# Initialize settings at module load time
settings = get_settings()
logger.info("✅ Settings loaded successfully")
