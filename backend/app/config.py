"""
Production-ready configuration for HackQuest AI backend
"""
import os
from typing import Optional
from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    """Application settings loaded from environment variables"""
    
    # Environment
    environment: str = os.getenv("ENVIRONMENT", "development")
    debug: bool = os.getenv("DEBUG", "False").lower() == "true"
    log_level: str = os.getenv("LOG_LEVEL", "info")
    
    # Database
    database_url: str = os.getenv(
        "DATABASE_URL", 
        "sqlite+aiosqlite:///./test.db"
    )
    db_echo: bool = os.getenv("DB_ECHO", "False").lower() == "true"
    db_pool_size: int = int(os.getenv("DB_POOL_SIZE", "20"))
    db_max_overflow: int = int(os.getenv("DB_MAX_OVERFLOW", "10"))
    
    # Security
    secret_key: str = os.getenv(
        "SECRET_KEY", 
        "dev-secret-key-change-in-production"
    )
    jwt_secret: str = os.getenv(
        "JWT_SECRET", 
        "dev-jwt-secret-change-in-production"
    )
    jwt_algorithm: str = os.getenv("JWT_ALGORITHM", "HS256")
    jwt_expiration_hours: int = int(os.getenv("JWT_EXPIRATION_HOURS", "24"))
    
    # API Configuration
    api_host: str = os.getenv("API_HOST", "0.0.0.0")
    api_port: int = int(os.getenv("API_PORT", "8000"))
    api_workers: int = int(os.getenv("API_WORKERS", "4"))
    api_timeout: int = int(os.getenv("API_TIMEOUT", "60"))
    
    # CORS
    frontend_url: str = os.getenv("FRONTEND_URL", "http://localhost:5174")
    frontend_url_alt: Optional[str] = os.getenv("FRONTEND_URL_ALT")
    
    # API Keys
    groq_api_key: Optional[str] = os.getenv("GROQ_API_KEY")
    pinecone_api_key: Optional[str] = os.getenv("PINECONE_API_KEY")
    pinecone_environment: Optional[str] = os.getenv("PINECONE_ENVIRONMENT")
    
    # Rate Limiting
    rate_limit_enabled: bool = os.getenv("RATE_LIMIT_ENABLED", "True").lower() == "true"
    rate_limit_requests: int = int(os.getenv("RATE_LIMIT_REQUESTS", "100"))
    rate_limit_period: int = int(os.getenv("RATE_LIMIT_PERIOD", "60"))
    
    # Azure Configuration
    azure_storage_account: Optional[str] = os.getenv("AZURE_STORAGE_ACCOUNT")
    azure_storage_key: Optional[str] = os.getenv("AZURE_STORAGE_KEY")
    azure_keyvault_url: Optional[str] = os.getenv("AZURE_KEYVAULT_URL")
    
    class Config:
        env_file = ".env"
        case_sensitive = False


@lru_cache()
def get_settings() -> Settings:
    """Get cached settings instance"""
    return Settings()


# Initialize on module load
settings = get_settings()

# Validate critical settings in production
if settings.environment == "production":
    if settings.secret_key == "dev-secret-key-change-in-production":
        raise ValueError("SECRET_KEY must be changed in production!")
    if settings.jwt_secret == "dev-jwt-secret-change-in-production":
        raise ValueError("JWT_SECRET must be changed in production!")
    if not settings.groq_api_key:
        print("⚠️  Warning: GROQ_API_KEY not set - using mock fallbacks")
