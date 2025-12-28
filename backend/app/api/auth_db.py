"""Authentication endpoints with SQLite persistence and security hardening."""
from fastapi import APIRouter, HTTPException, Depends, status, Header, Request, Query
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from datetime import datetime, timedelta
from typing import Optional
import jwt
import bcrypt
import uuid
import secrets
import json
import logging

from app.core.config import settings
from app.core.db import get_db
from app.core.security import get_limiter, TokenValidator, log_security_event
from app.core.oauth import GoogleOAuthClient, GitHubOAuthClient
from app.models.database import User, RefreshToken
from app.models.schemas import (
    RegisterRequest,
    LoginRequest,
    RefreshTokenRequest,
    TokenResponse,
    UserResponse,
    OAuthRequest
)

router = APIRouter(prefix="/api/auth", tags=["auth"])
logger = logging.getLogger(__name__)

# Get rate limiter
limiter = get_limiter()


def hash_password(password: str) -> str:
    """Hash a password using bcrypt."""
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')


def verify_password(plain: str, hashed: str) -> bool:
    """Verify a password against hash."""
    return bcrypt.checkpw(plain.encode('utf-8'), hashed.encode('utf-8'))


def parse_skills(skills_str: str) -> list:
    """Parse skills from JSON string to list."""
    if not skills_str:
        return []
    try:
        return json.loads(skills_str)
    except (json.JSONDecodeError, TypeError):
        return []


def build_user_response(user: User) -> UserResponse:
    """Build UserResponse from User model."""
    return UserResponse(
        id=user.id,
        email=user.email,
        username=user.username,
        full_name=user.full_name,
        avatar_url=user.avatar_url,
        skills=parse_skills(user.skills),
        bio=user.bio
    )


def create_access_token(user_id: str, expires_delta: Optional[timedelta] = None) -> str:
    """Create JWT access token."""
    if expires_delta is None:
        expires_delta = timedelta(hours=24)
    
    expire = datetime.utcnow() + expires_delta
    payload = {
        "sub": user_id,
        "exp": expire,
        "iat": datetime.utcnow(),
        "type": "access"
    }
    
    token = jwt.encode(
        payload,
        settings.secret_key,
        algorithm="HS256"
    )
    return token


def create_refresh_token(user_id: str, expires_delta: Optional[timedelta] = None) -> str:
    """Create JWT refresh token."""
    if expires_delta is None:
        expires_delta = timedelta(days=7)
    
    expire = datetime.utcnow() + expires_delta
    payload = {
        "sub": user_id,
        "exp": expire,
        "iat": datetime.utcnow(),
        "type": "refresh"
    }
    
    token = jwt.encode(
        payload,
        settings.secret_key,
        algorithm="HS256"
    )
    return token


def verify_token(token: str) -> dict:
    """Verify and decode JWT token."""
    try:
        payload = jwt.decode(
            token,
            settings.secret_key,
            algorithms=["HS256"]
        )
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token has expired"
        )
    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )


@router.post("/register", response_model=TokenResponse)
@limiter.limiter.limit(settings.RATE_LIMIT_AUTH)  # 10/minute for auth
async def register(req: RegisterRequest, request: Request, db: Session = Depends(get_db)):
    """Register a new user with rate limiting protection against brute force."""
    # Check if user already exists
    existing = db.query(User).filter(
        (User.email == req.email) | (User.username == req.username)
    ).first()
    
    if existing:
        log_security_event(
            "registration_failed",
            {"email": req.email, "reason": "already_exists"},
            severity="WARNING"
        )
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email or username already registered"
        )
    
    # Create new user
    user_id = str(uuid.uuid4())
    user = User(
        id=user_id,
        email=req.email,
        username=req.username,
        password_hash=hash_password(req.password),
        full_name=req.full_name,
        avatar_url=req.avatar_url
    )
    
    try:
        db.add(user)
        db.commit()
        db.refresh(user)
        
        log_security_event(
            "user_registered",
            {"user_id": user_id, "email": req.email}
        )
    except IntegrityError:
        db.rollback()
        log_security_event(
            "registration_failed",
            {"email": req.email, "reason": "database_error"},
            severity="WARNING"
        )
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User creation failed - email or username may be taken"
        )
    
    # Create tokens
    access_token = create_access_token(user_id)
    refresh_token = create_refresh_token(user_id)
    
    # Store refresh token in database
    db_refresh = RefreshToken(
        user_id=user_id,
        token=refresh_token,
        expires_at=datetime.utcnow() + timedelta(days=7)
    )
    db.add(db_refresh)
    db.commit()
    
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        token_type="bearer",
        user=build_user_response(user)
    )


@router.post("/login", response_model=TokenResponse)
@limiter.limiter.limit(settings.RATE_LIMIT_AUTH)  # 10/minute for auth
async def login(req: LoginRequest, request: Request, db: Session = Depends(get_db)):
    """Login a user with rate limiting protection against brute force attacks."""
    user = db.query(User).filter(User.email == req.email).first()
    
    if not user or not verify_password(req.password, user.password_hash):
        # Log failed attempt without exposing which field failed
        log_security_event(
            "login_failed",
            {"email": req.email, "ip": request.client.host, "reason": "invalid_credentials"},
            severity="WARNING"
        )
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    if not user.is_active:
        log_security_event(
            "login_failed",
            {"user_id": user.id, "reason": "account_disabled"},
            severity="WARNING"
        )
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User account is disabled"
        )
    
    # Create tokens
    access_token = create_access_token(user.id)
    refresh_token = create_refresh_token(user.id)
    
    # Store refresh token
    db_refresh = RefreshToken(
        user_id=user.id,
        token=refresh_token,
        expires_at=datetime.utcnow() + timedelta(days=7)
    )
    db.add(db_refresh)
    db.commit()
    
    log_security_event(
        "user_login",
        {"user_id": user.id, "email": req.email}
    )
    
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        token_type="bearer",
        user=build_user_response(user)
    )


@router.get("/oauth/authorize/github")
async def github_authorize():
    """Generate GitHub OAuth authorization URL."""
    try:
        auth_url = GitHubOAuthClient.get_authorization_url(settings.GITHUB_REDIRECT_URI)
        return {"authorization_url": auth_url}
    except Exception as e:
        logger.error(f"GitHub authorization URL generation error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to generate authorization URL"
        )


@router.get("/oauth/authorize/google")
async def google_authorize():
    """Generate Google OAuth authorization URL."""
    try:
        auth_url = GoogleOAuthClient.get_authorization_url(settings.GOOGLE_REDIRECT_URI)
        return {"authorization_url": auth_url}
    except Exception as e:
        logger.error(f"Google authorization URL generation error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to generate authorization URL"
        )


@router.post("/oauth/callback/github", response_model=TokenResponse)
@limiter.limiter.limit(settings.RATE_LIMIT_AUTH)
async def github_oauth_callback(
    code: str = Query(...),
    request: Request = None,
    db: Session = Depends(get_db)
):
    """Handle GitHub OAuth callback with authorization code."""
    try:
        # Exchange authorization code for access token
        token_data = await GitHubOAuthClient.get_access_token(code, settings.GITHUB_REDIRECT_URI)
        if not token_data:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Failed to exchange authorization code"
            )
        
        # Get user info from GitHub
        user_info = await GitHubOAuthClient.get_user_info(token_data.get("access_token"))
        if not user_info:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Failed to retrieve user information"
            )
        
        email = user_info.get("email")
        if not email:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Could not retrieve email from GitHub"
            )
        
        # Find or create user
        user = db.query(User).filter(User.email == email).first()
        if not user:
            user_id = str(uuid.uuid4())
            user = User(
                id=user_id,
                email=email,
                username=user_info.get("login", email.split('@')[0]),
                full_name=user_info.get("name"),
                avatar_url=user_info.get("avatar_url"),
                password_hash=hash_password(secrets.token_urlsafe(32))
            )
            db.add(user)
            try:
                db.commit()
                db.refresh(user)
                log_security_event(
                    "github_oauth_signup",
                    {"user_id": user_id, "email": email}
                )
            except IntegrityError:
                db.rollback()
                user = db.query(User).filter(User.email == email).first()
        else:
            # Update user info from GitHub
            user.username = user_info.get("login", user.username)
            user.full_name = user_info.get("name", user.full_name)
            user.avatar_url = user_info.get("avatar_url", user.avatar_url)
            db.commit()
            db.refresh(user)
            log_security_event(
                "github_oauth_login",
                {"user_id": user.id, "email": email}
            )
        
        # Create tokens
        access_token = create_access_token(user.id)
        refresh_token = create_refresh_token(user.id)
        
        # Store refresh token
        db_refresh = RefreshToken(
            user_id=user.id,
            token=refresh_token,
            expires_at=datetime.utcnow() + timedelta(days=7)
        )
        db.add(db_refresh)
        db.commit()
        
        return TokenResponse(
            access_token=access_token,
            refresh_token=refresh_token,
            token_type="bearer",
            user=build_user_response(user)
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"GitHub OAuth callback error: {e}")
        log_security_event(
            "github_oauth_error",
            {"error": str(e)},
            severity="ERROR"
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="OAuth authentication failed"
        )


@router.post("/oauth/callback/google", response_model=TokenResponse)
@limiter.limiter.limit(settings.RATE_LIMIT_AUTH)
async def google_oauth_callback(
    code: str = Query(...),
    request: Request = None,
    db: Session = Depends(get_db)
):
    """Handle Google OAuth callback with authorization code."""
    try:
        # Exchange authorization code for access token
        token_data = await GoogleOAuthClient.get_access_token(code, settings.GOOGLE_REDIRECT_URI)
        if not token_data:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Failed to exchange authorization code"
            )
        
        # Get user info from Google
        user_info = await GoogleOAuthClient.get_user_info(token_data.get("access_token"))
        if not user_info:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Failed to retrieve user information"
            )
        
        email = user_info.get("email")
        if not email:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Could not retrieve email from Google"
            )
        
        # Find or create user
        user = db.query(User).filter(User.email == email).first()
        if not user:
            user_id = str(uuid.uuid4())
            user = User(
                id=user_id,
                email=email,
                username=user_info.get("name", email.split('@')[0]).replace(" ", ""),
                full_name=user_info.get("name"),
                avatar_url=user_info.get("picture"),
                password_hash=hash_password(secrets.token_urlsafe(32))
            )
            db.add(user)
            try:
                db.commit()
                db.refresh(user)
                log_security_event(
                    "google_oauth_signup",
                    {"user_id": user_id, "email": email}
                )
            except IntegrityError:
                db.rollback()
                user = db.query(User).filter(User.email == email).first()
        else:
            # Update user info from Google
            user.full_name = user_info.get("name", user.full_name)
            user.avatar_url = user_info.get("picture", user.avatar_url)
            db.commit()
            db.refresh(user)
            log_security_event(
                "google_oauth_login",
                {"user_id": user.id, "email": email}
            )
        
        # Create tokens
        access_token = create_access_token(user.id)
        refresh_token = create_refresh_token(user.id)
        
        # Store refresh token
        db_refresh = RefreshToken(
            user_id=user.id,
            token=refresh_token,
            expires_at=datetime.utcnow() + timedelta(days=7)
        )
        db.add(db_refresh)
        db.commit()
        
        return TokenResponse(
            access_token=access_token,
            refresh_token=refresh_token,
            token_type="bearer",
            user=build_user_response(user)
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Google OAuth callback error: {e}")
        log_security_event(
            "google_oauth_error",
            {"error": str(e)},
            severity="ERROR"
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="OAuth authentication failed"
        )


@router.post("/oauth/github", response_model=TokenResponse)
async def github_oauth(req: OAuthRequest, db: Session = Depends(get_db)):
    """GitHub OAuth callback - create or update user. (Legacy endpoint)"""
    user = db.query(User).filter(User.email == req.email).first()
    
    if not user:
        user_id = str(uuid.uuid4())
        user = User(
            id=user_id,
            email=req.email,
            username=req.username or req.email.split('@')[0],
            password_hash=hash_password(secrets.token_urlsafe(32)),
            full_name=req.full_name,
            avatar_url=req.avatar_url
        )
        db.add(user)
        db.commit()
        db.refresh(user)
    
    # Create tokens
    access_token = create_access_token(user.id)
    refresh_token = create_refresh_token(user.id)
    
    # Store refresh token
    db_refresh = RefreshToken(
        user_id=user.id,
        token=refresh_token,
        expires_at=datetime.utcnow() + timedelta(days=7)
    )
    db.add(db_refresh)
    db.commit()
    
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        token_type="bearer",
        user=build_user_response(user)
    )


@router.post("/oauth/google", response_model=TokenResponse)
async def google_oauth(req: OAuthRequest, db: Session = Depends(get_db)):
    """Google OAuth callback - create or update user. (Legacy endpoint)"""
    user = db.query(User).filter(User.email == req.email).first()
    
    if not user:
        user_id = str(uuid.uuid4())
        user = User(
            id=user_id,
            email=req.email,
            username=req.username or req.email.split('@')[0],
            password_hash=hash_password(secrets.token_urlsafe(32)),
            full_name=req.full_name,
            avatar_url=req.avatar_url
        )
        db.add(user)
        db.commit()
        db.refresh(user)
    
    # Create tokens
    access_token = create_access_token(user.id)
    refresh_token = create_refresh_token(user.id)
    
    # Store refresh token
    db_refresh = RefreshToken(
        user_id=user.id,
        token=refresh_token,
        expires_at=datetime.utcnow() + timedelta(days=7)
    )
    db.add(db_refresh)
    db.commit()
    
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        token_type="bearer",
        user=build_user_response(user)
    )


@router.get("/me", response_model=UserResponse)
async def get_current_user(
    token: Optional[str] = None,
    authorization: Optional[str] = Header(None),
    db: Session = Depends(get_db)
):
    """Get current user profile with authentication enforcement."""
    # Extract token from Authorization header or query parameter
    final_token = token
    if not final_token and authorization:
        # Extract from "Bearer <token>"
        if authorization.startswith("Bearer "):
            final_token = authorization[7:]
    
    if not final_token:
        log_security_event(
            "auth_failure",
            {"endpoint": "/api/auth/me", "reason": "no_token"},
            severity="WARNING"
        )
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="No token provided",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Validate token using secure token validator
    payload = TokenValidator.validate_access_token(final_token)
    user_id = payload.get("sub")
    
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return build_user_response(user)



@router.post("/refresh", response_model=TokenResponse)
@limiter.limiter.limit(settings.RATE_LIMIT_AUTH)  # 10/minute for auth
async def refresh_access_token(
    req: RefreshTokenRequest,  # FIXED: proper Pydantic model instead of dict
    request: Request,
    db: Session = Depends(get_db)
):
    """Refresh access token using refresh token with rate limiting."""
    try:
        refresh_token = req.refresh_token
        if not refresh_token:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="refresh_token is required"
            )
        
        # Use secure token validator
        payload = TokenValidator.validate_refresh_token(refresh_token)
        
        user_id = payload.get("sub")
        user = db.query(User).filter(User.id == user_id).first()
        
        if not user:
            log_security_event(
                "refresh_failed",
                {"reason": "user_not_found"},
                severity="WARNING"
            )
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found"
            )
        
        new_access_token = create_access_token(user_id)
        new_refresh_token = create_refresh_token(user_id)
        
        # Store new refresh token
        db_refresh = RefreshToken(
            user_id=user.id,
            token=new_refresh_token,
            expires_at=datetime.utcnow() + timedelta(days=7)
        )
        db.add(db_refresh)
        db.commit()
        
        log_security_event(
            "token_refreshed",
            {"user_id": user_id}
        )
        
        return TokenResponse(
            access_token=new_access_token,
            refresh_token=new_refresh_token,
            token_type="bearer",
            user=build_user_response(user)
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Token refresh error: {e}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token refresh failed"
        )


# ADDED: Helper function to cleanup expired refresh tokens (task #10)
async def cleanup_expired_tokens(db: Session) -> int:
    """
    Delete expired refresh tokens from database.
    Call this periodically to prevent token bloat.
    """
    try:
        result = db.query(RefreshToken).filter(
            RefreshToken.expires_at < datetime.utcnow()
        ).delete()
        db.commit()
        if result > 0:
            logger.info(f"Cleaned up {result} expired refresh tokens")
        return result
    except Exception as e:
        logger.error(f"Error cleaning up expired tokens: {e}")
        db.rollback()
        return 0
