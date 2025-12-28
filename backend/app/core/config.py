from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator
from typing import Optional, List
import os
import logging

logger = logging.getLogger(__name__)


class Settings(BaseSettings):
    # --- Project Metadata ---
    PROJECT_NAME: str = "HackQuest AI"
    DEBUG: bool = os.getenv("DEBUG", "False").lower() == "true"
    VERSION: str = "1.0.0"
    environment: str = os.getenv("ENVIRONMENT", "development")
    port: int = int(os.getenv("PORT", "8000"))
    
    # --- Databases ---
    MONGODB_URL: str = "mongodb://localhost:27017"
    DATABASE_NAME: str = "hackquest"
    
    # --- JWT Auth ---
    secret_key: str = os.getenv("SECRET_KEY", "change-this-in-production")
    JWT_ALGORITHM: str = "HS256"
    JWT_EXPIRATION: int = int(os.getenv("JWT_EXPIRATION", "86400"))  # 24 hours
    
    # --- CORS ---
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://localhost:5174",  # Added for dynamic Vite port
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",  # Added for dynamic Vite port
        "http://127.0.0.1:3000",
        "http://10.34.110.207:5173",
        "http://10.34.110.207:5174",  # Added for dynamic Vite port
        "http://10.34.110.207:3000",
    ]
    CORS_ORIGINS_PROD: List[str] = []  # Set via environment: CORS_ORIGINS_PROD="https://app.com,https://www.app.com"
    CORS_ALLOW_CREDENTIALS: bool = True
    
    # --- Rate Limiting ---
    # Default: 100 requests per minute per IP
    RATE_LIMIT_DEFAULT: str = os.getenv("RATE_LIMIT_DEFAULT", "100/minute")
    # Storage for rate limit state (memory, redis, etc.)
    RATE_LIMIT_STORAGE: str = os.getenv("RATE_LIMIT_STORAGE", "memory://")
    # Strategy: fixed-window or moving-window
    RATE_LIMIT_STRATEGY: str = os.getenv("RATE_LIMIT_STRATEGY", "fixed-window")
    
    # Per-endpoint rate limits (can be customized)
    RATE_LIMIT_AUTH: str = "10/minute"  # Stricter for auth endpoints
    RATE_LIMIT_API: str = "100/minute"  # Standard for API endpoints
    RATE_LIMIT_UPLOAD: str = "5/minute"  # Stricter for upload endpoints
    
    # --- LLM & AI ---
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "test-key-replace-in-production")
    PINECONE_API_KEY: str = os.getenv("PINECONE_API_KEY", "test-key-replace-in-production")
    PINECONE_INDEX: str = "hackathons"
    
    # --- OAuth Configuration ---
    GOOGLE_CLIENT_ID: str = os.getenv("GOOGLE_CLIENT_ID", "")
    GOOGLE_CLIENT_SECRET: str = os.getenv("GOOGLE_CLIENT_SECRET", "")
    GITHUB_CLIENT_ID: str = os.getenv("GITHUB_CLIENT_ID", "")
    GITHUB_CLIENT_SECRET: str = os.getenv("GITHUB_CLIENT_SECRET", "")
    
    # OAuth Redirect URIs - Support both 5173 and dynamic port 5174
    GOOGLE_REDIRECT_URI: str = os.getenv("GOOGLE_REDIRECT_URI", "http://localhost:5174/auth/google/callback")
    GITHUB_REDIRECT_URI: str = os.getenv("GITHUB_REDIRECT_URI", "http://localhost:5174/auth/github/callback")
    
    # --- Security ---
    # Enforce HTTPS in production
    ENFORCE_HTTPS: bool = os.getenv("ENFORCE_HTTPS", "true").lower() == "true" if environment == "production" else False
    # Enable authentication on all protected routes
    REQUIRE_AUTH: bool = os.getenv("REQUIRE_AUTH", "true").lower() == "true"
    
    # --- Pydantic Config ---
    model_config = SettingsConfigDict(extra="ignore")
    
    @field_validator('GROQ_API_KEY', mode='after')
    @classmethod
    def validate_groq_key(cls, v: str) -> str:
        """Validate GROQ_API_KEY is not using default test key in production."""
        if v == "test-key-replace-in-production":
            logger.warning("⚠️  GROQ_API_KEY is using default test key - code generation may fail in production")
        return v
    
    @field_validator('secret_key', mode='after')
    @classmethod
    def validate_secret_key(cls, v: str) -> str:
        """Validate SECRET_KEY is not using default in production."""
        if v == "change-this-in-production":
            logger.warning("⚠️  SECRET_KEY is using default value - MUST change in production!")
        if len(v) < 32:
            logger.warning(f"⚠️  SECRET_KEY is only {len(v)} chars - recommend 32+ chars for security")
        return v
    
    def validate_oauth_config(self) -> None:
        """Validate OAuth configuration if OAuth features are enabled."""
        if not self.GOOGLE_CLIENT_ID and not self.GITHUB_CLIENT_ID:
            logger.warning("⚠️  No OAuth providers configured - Google and GitHub login will be unavailable")
        
        if self.GOOGLE_CLIENT_ID and not self.GOOGLE_CLIENT_SECRET:
            logger.warning("⚠️  Google CLIENT_ID set but SECRET is missing - Google OAuth will fail")
        
        if self.GITHUB_CLIENT_ID and not self.GITHUB_CLIENT_SECRET:
            logger.warning("⚠️  GitHub CLIENT_ID set but SECRET is missing - GitHub OAuth will fail")


# Create settings instance and run validation
settings = Settings()
settings.validate_oauth_config()

logger.info(f"✅ Configuration loaded for {settings.environment} environment")
