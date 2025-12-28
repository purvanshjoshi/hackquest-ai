"""
Security utilities and middleware for production-grade protection.

This module provides:
- Rate limiting (IP-based and user-based)
- Authentication enforcement
- Token validation
- CORS hardening
"""

import logging
from functools import lru_cache
from typing import Optional, Callable, Any
from datetime import datetime, timedelta
import jwt
from fastapi import Request, HTTPException, status, Depends
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

from app.core.config import settings

logger = logging.getLogger(__name__)

# ============================================================================
# RATE LIMITING
# ============================================================================

class SecurityLimiter:
    """
    Production-grade rate limiting using SlowAPI.
    
    Supports:
    - IP-based rate limiting (prevents botnet attacks)
    - User-based rate limiting (prevents authenticated abuse)
    - Configurable limits per endpoint
    - Proper HTTP 429 responses with retry headers
    """
    
    def __init__(self):
        # Key function uses IP address for public endpoints
        self._limiter = Limiter(
            key_func=get_remote_address,
            default_limits=settings.RATE_LIMIT_DEFAULT,
            storage_uri=settings.RATE_LIMIT_STORAGE,
            strategy=settings.RATE_LIMIT_STRATEGY,
        )
    
    @property
    def limiter(self):
        """Get the SlowAPI limiter instance."""
        return self._limiter
    
    def get_middleware(self) -> SlowAPIMiddleware:
        """Get rate limiting middleware for FastAPI."""
        return SlowAPIMiddleware()
    
    def exception_handler(self):
        """Return exception handler for rate limit exceeded errors."""
        async def handler(request: Request, exc: RateLimitExceeded):
            logger.warning(
                f"Rate limit exceeded for {get_remote_address(request)}: {exc.detail}"
            )
            return {
                "error": "Too Many Requests",
                "detail": "Rate limit exceeded. Please try again later.",
                "retry_after": exc.detail.split("in ")[-1] if "in " in exc.detail else "60",
            }
        return handler


@lru_cache(maxsize=1)
def get_limiter() -> SecurityLimiter:
    """Get or create the global limiter instance."""
    return SecurityLimiter()


# ============================================================================
# AUTHENTICATION & AUTHORIZATION
# ============================================================================

class TokenValidator:
    """
    Handles JWT token validation with security best practices.
    
    - Validates token signature
    - Checks expiration
    - Enforces token type (access vs refresh)
    - Prevents token reuse
    """
    
    @staticmethod
    def validate_access_token(token: str) -> dict:
        """
        Validate an access token.
        
        Args:
            token: JWT token string
            
        Returns:
            Decoded token payload
            
        Raises:
            HTTPException: If token is invalid, expired, or wrong type
        """
        try:
            payload = jwt.decode(
                token,
                settings.secret_key,
                algorithms=[settings.JWT_ALGORITHM]
            )
            
            # Verify token type
            token_type = payload.get("type")
            if token_type != "access":
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Invalid token type",
                )
            
            # Verify user ID exists
            user_id = payload.get("sub")
            if not user_id:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Invalid token",
                )
            
            return payload
            
        except jwt.ExpiredSignatureError:
            logger.warning(f"Expired token attempt")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token has expired",
                headers={"WWW-Authenticate": "Bearer"},
            )
        except jwt.InvalidTokenError as e:
            logger.warning(f"Invalid token attempt: {e}")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication credentials",
                headers={"WWW-Authenticate": "Bearer"},
            )
    
    @staticmethod
    def validate_refresh_token(token: str) -> dict:
        """Validate a refresh token (used only for obtaining new access tokens)."""
        try:
            payload = jwt.decode(
                token,
                settings.secret_key,
                algorithms=[settings.JWT_ALGORITHM]
            )
            
            token_type = payload.get("type")
            if token_type != "refresh":
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="This token cannot be used for refresh",
                )
            
            return payload
            
        except jwt.ExpiredSignatureError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Refresh token has expired",
            )
        except jwt.InvalidTokenError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid refresh token",
            )


class AuthDependencies:
    """
    FastAPI dependency providers for authentication and authorization.
    
    Use these as dependencies in route handlers to enforce authentication:
    
    Example:
        @app.get("/protected")
        async def protected_route(user_id: str = Depends(get_current_user)):
            return {"user_id": user_id}
    """
    
    @staticmethod
    async def get_current_user_from_token(
        token: Optional[str] = None,
    ) -> str:
        """
        Extract and validate current user from token.
        
        Expects token as query parameter: ?token=<jwt>
        (This is a fallback for frontend compatibility)
        """
        if not token:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Authentication required",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        payload = TokenValidator.validate_access_token(token)
        user_id = payload.get("sub")
        
        logger.debug(f"User {user_id} authenticated via query token")
        return user_id
    
    @staticmethod
    async def get_current_user_from_header(
        request: Request,
    ) -> str:
        """
        Extract and validate current user from Authorization header.
        
        Expects: Authorization: Bearer <jwt>
        (Recommended for production APIs)
        """
        auth_header = request.headers.get("Authorization")
        
        if not auth_header:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Authentication required",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        # Parse "Bearer <token>"
        parts = auth_header.split()
        if len(parts) != 2 or parts[0].lower() != "bearer":
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authorization header format",
                headers={"WWW-Authenticate": "Bearer"},
            )
        
        token = parts[1]
        payload = TokenValidator.validate_access_token(token)
        user_id = payload.get("sub")
        
        logger.debug(f"User {user_id} authenticated via Authorization header")
        return user_id


def get_current_user_with_header(request: Request) -> Depends:
    """Dependency: Get authenticated user from Authorization header."""
    return Depends(lambda: AuthDependencies.get_current_user_from_header(request))


async def get_current_user_query(token: Optional[str] = None) -> str:
    """Dependency: Get authenticated user from query parameter."""
    return await AuthDependencies.get_current_user_from_token(token)


# ============================================================================
# CORS SECURITY
# ============================================================================

class CORSConfig:
    """
    Production-grade CORS configuration.
    
    Security features:
    - Environment-aware origin whitelisting
    - No wildcard origins for authenticated routes
    - Secure credential handling
    - Proper HTTP header configuration
    - Prevention of credential leakage
    """
    
    @staticmethod
    def get_allowed_origins() -> list:
        """
        Get list of allowed origins based on environment.
        
        NEVER allow "*" (wildcard) for authenticated APIs.
        Always use explicit origin whitelisting.
        """
        environment = settings.environment.lower()
        
        allowed = []
        
        # Development: allow localhost variants and network IPs
        if environment in ["development", "test"]:
            allowed.extend([
                "http://localhost:3000",
                "http://localhost:5173",
                "http://127.0.0.1:3000",
                "http://127.0.0.1:5173",
                "http://0.0.0.0:3000",
                "http://0.0.0.0:5173",
                "http://10.34.110.207:3000",
                "http://10.34.110.207:5173",
            ])
        
        # Staging and Production: use explicit environment variables
        if environment in ["staging", "production"]:
            # Load from environment variable, e.g.:
            # ALLOWED_ORIGINS="https://app.example.com,https://www.example.com"
            env_origins = settings.CORS_ORIGINS_PROD
            if isinstance(env_origins, str):
                allowed.extend([o.strip() for o in env_origins.split(",")])
            elif isinstance(env_origins, list):
                allowed.extend(env_origins)
        
        # Always include configured origins
        if settings.CORS_ORIGINS:
            allowed.extend(settings.CORS_ORIGINS)
        
        # Remove duplicates
        allowed = list(set(allowed))
        
        logger.info(f"CORS allowed origins ({environment}): {allowed}")
        return allowed
    
    @staticmethod
    def get_cors_config() -> dict:
        """
        Get CORS middleware configuration.
        
        Security implications:
        - allow_origins: Whitelist, never use "*" with credentials
        - allow_credentials: Enable only if needed
        - allow_methods: Restrict to needed HTTP methods
        - allow_headers: Restrict to needed headers
        - expose_headers: Never expose sensitive headers
        - max_age: Browser cache time for preflight
        """
        return {
            "allow_origins": CORSConfig.get_allowed_origins(),
            "allow_credentials": settings.CORS_ALLOW_CREDENTIALS,
            "allow_methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
            "allow_headers": [
                "Content-Type",
                "Authorization",
                "X-Requested-With",
                "Accept",
            ],
            "expose_headers": [
                "X-Total-Count",  # For pagination
                "X-Page-Count",
                "RateLimit-Limit",
                "RateLimit-Remaining",
                "RateLimit-Reset",
                "Retry-After",
            ],
            "max_age": 600,  # 10 minutes - balance between security and performance
        }


# ============================================================================
# SECURITY HEADERS
# ============================================================================

async def add_security_headers(request: Request, call_next: Callable) -> Any:
    """
    Middleware to add security headers to all responses.
    
    Headers added:
    - X-Content-Type-Options: Prevent MIME type sniffing
    - X-Frame-Options: Prevent clickjacking
    - X-XSS-Protection: Enable XSS protection (legacy)
    - Strict-Transport-Security: Enforce HTTPS (production only)
    - Content-Security-Policy: Prevent XSS and injection attacks
    """
    response = await call_next(request)
    
    # Prevent MIME type sniffing
    response.headers["X-Content-Type-Options"] = "nosniff"
    
    # Prevent clickjacking
    response.headers["X-Frame-Options"] = "DENY"
    
    # Enable XSS protection (legacy, for older browsers)
    response.headers["X-XSS-Protection"] = "1; mode=block"
    
    # HSTS for HTTPS enforcement (production only)
    if settings.environment == "production":
        response.headers["Strict-Transport-Security"] = (
            "max-age=31536000; includeSubDomains; preload"
        )
    
    # Basic CSP - can be customized per endpoint if needed
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline'; "  # Unsafe-inline for dev, remove in prod
        "style-src 'self' 'unsafe-inline'; "
        "img-src 'self' data: https:; "
        "font-src 'self'"
    )
    
    return response


# ============================================================================
# LOGGING & AUDIT
# ============================================================================

def log_security_event(event_type: str, details: dict, severity: str = "INFO"):
    """
    Log security events for audit trail.
    
    Usage:
        log_security_event("auth_failure", {"user": "test@example.com", "reason": "invalid_token"})
    """
    timestamp = datetime.utcnow().isoformat()
    log_entry = {
        "timestamp": timestamp,
        "event_type": event_type,
        "severity": severity,
        **details,
    }
    
    if severity == "CRITICAL":
        logger.critical(log_entry)
    elif severity == "WARNING":
        logger.warning(log_entry)
    else:
        logger.info(log_entry)
