"""Authentication API endpoints"""
import logging
from datetime import datetime, timedelta
from typing import Optional
import jwt
from fastapi import APIRouter, HTTPException, status, Depends
from passlib.context import CryptContext
from app.models.schemas import (
    RegisterRequest, LoginRequest, TokenResponse, UserResponse
)
from app.core.config import settings
from app.core.database import get_db
from bson.objectid import ObjectId
from motor.motor_asyncio import AsyncDatabase

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/auth", tags=["auth"])

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    """Hash password using bcrypt"""
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify password against hash"""
    return pwd_context.verify(plain_password, hashed_password)


def create_access_token(user_id: str, expires_delta: Optional[timedelta] = None) -> str:
    """Create JWT access token"""
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(hours=24)
    
    payload = {
        "sub": user_id,
        "exp": expire,
        "iat": datetime.utcnow(),
    }
    
    token = jwt.encode(payload, settings.jwt_secret, algorithm="HS256")
    return token


def verify_token(token: str) -> str:
    """Verify JWT token and return user_id"""
    try:
        payload = jwt.decode(token, settings.jwt_secret, algorithms=["HS256"])
        user_id = payload.get("sub")
        if not user_id:
            raise HTTPException(status_code=401, detail="Invalid token")
        return user_id
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


async def get_current_user(token: str, db: AsyncDatabase = Depends(get_db)):
    """Get current authenticated user"""
    try:
        user_id = verify_token(token)
        users = db["users"]
        user = await users.find_one({"_id": ObjectId(user_id)})
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user
    except HTTPException:
        raise


@router.post("/register", response_model=TokenResponse)
async def register(req: RegisterRequest, db: AsyncDatabase = Depends(get_db)):
    """Register new user"""
    try:
        users = db["users"]
        
        # Check if user exists
        existing = await users.find_one({"$or": [{"email": req.email}, {"username": req.username}]})
        if existing:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email or username already registered"
            )
        
        # Create new user
        user_doc = {
            "_id": ObjectId(),
            "email": req.email,
            "username": req.username,
            "password_hash": hash_password(req.password),
            "full_name": req.full_name or req.username,
            "avatar_url": None,
            "github_username": None,
            "skills": [],
            "bio": "",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow(),
            "is_active": True,
        }
        
        result = await users.insert_one(user_doc)
        user_id = str(result.inserted_id)
        
        # Create token
        token = create_access_token(user_id)
        
        logger.info(f"✅ User registered: {req.email}")
        return TokenResponse(
            access_token=token,
            token_type="bearer",
            user={
                "id": user_id,
                "email": req.email,
                "username": req.username,
                "full_name": user_doc["full_name"],
            }
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ Registration error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Registration failed"
        )


@router.post("/login", response_model=TokenResponse)
async def login(req: LoginRequest, db: AsyncDatabase = Depends(get_db)):
    """Login user"""
    try:
        users = db["users"]
        
        # Find user by email
        user = await users.find_one({"email": req.email})
        if not user or not verify_password(req.password, user.get("password_hash", "")):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )
        
        if not user.get("is_active", True):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="User account is disabled"
            )
        
        # Create token
        user_id = str(user["_id"])
        token = create_access_token(user_id)
        
        logger.info(f"✅ User logged in: {req.email}")
        return TokenResponse(
            access_token=token,
            token_type="bearer",
            user={
                "id": user_id,
                "email": user["email"],
                "username": user["username"],
                "full_name": user.get("full_name", user["username"]),
            }
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ Login error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Login failed"
        )


@router.post("/oauth/github", response_model=TokenResponse)
async def github_oauth(code: str, db: AsyncDatabase = Depends(get_db)):
    """GitHub OAuth login"""
    try:
        # TODO: Exchange code for GitHub access token
        # TODO: Get user info from GitHub API
        # For now, create/update user with GitHub info
        
        users = db["users"]
        
        # Mock GitHub user data (replace with real implementation)
        github_user = {
            "login": "github_user",
            "email": f"user@github.com",
            "avatar_url": "",
            "name": "GitHub User"
        }
        
        # Find or create user
        user = await users.find_one({"github_username": github_user["login"]})
        
        if not user:
            user_doc = {
                "_id": ObjectId(),
                "email": github_user["email"],
                "username": github_user["login"],
                "password_hash": None,
                "full_name": github_user["name"],
                "avatar_url": github_user["avatar_url"],
                "github_username": github_user["login"],
                "skills": [],
                "bio": "",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow(),
                "is_active": True,
            }
            result = await users.insert_one(user_doc)
            user_id = str(result.inserted_id)
        else:
            user_id = str(user["_id"])
            # Update user info
            await users.update_one(
                {"_id": user["_id"]},
                {"$set": {"avatar_url": github_user["avatar_url"], "updated_at": datetime.utcnow()}}
            )
        
        token = create_access_token(user_id)
        
        logger.info(f"✅ User logged in via GitHub: {github_user['login']}")
        return TokenResponse(
            access_token=token,
            token_type="bearer",
            user={
                "id": user_id,
                "email": github_user["email"],
                "username": github_user["login"],
                "full_name": github_user["name"],
            }
        )
        
    except Exception as e:
        logger.error(f"❌ GitHub OAuth error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="GitHub authentication failed"
        )


@router.post("/oauth/google", response_model=TokenResponse)
async def google_oauth(id_token: str, db: AsyncDatabase = Depends(get_db)):
    """Google OAuth login"""
    try:
        # TODO: Verify ID token with Google
        # TODO: Get user info from ID token
        
        users = db["users"]
        
        # Mock Google user data (replace with real implementation)
        google_user = {
            "email": "user@google.com",
            "name": "Google User",
            "picture": ""
        }
        
        # Find or create user
        user = await users.find_one({"email": google_user["email"]})
        
        if not user:
            user_doc = {
                "_id": ObjectId(),
                "email": google_user["email"],
                "username": google_user["email"].split("@")[0],
                "password_hash": None,
                "full_name": google_user["name"],
                "avatar_url": google_user.get("picture", ""),
                "github_username": None,
                "skills": [],
                "bio": "",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow(),
                "is_active": True,
            }
            result = await users.insert_one(user_doc)
            user_id = str(result.inserted_id)
        else:
            user_id = str(user["_id"])
        
        token = create_access_token(user_id)
        
        logger.info(f"✅ User logged in via Google: {google_user['email']}")
        return TokenResponse(
            access_token=token,
            token_type="bearer",
            user={
                "id": user_id,
                "email": google_user["email"],
                "username": google_user["email"].split("@")[0],
                "full_name": google_user["name"],
            }
        )
        
    except Exception as e:
        logger.error(f"❌ Google OAuth error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Google authentication failed"
        )


@router.get("/me", response_model=UserResponse)
async def get_me(token: str, db: AsyncDatabase = Depends(get_db)):
    """Get current user info"""
    try:
        user_id = verify_token(token)
        users = db["users"]
        user = await users.find_one({"_id": ObjectId(user_id)})
        
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        return UserResponse(
            id=str(user["_id"]),
            email=user["email"],
            username=user["username"],
            full_name=user.get("full_name"),
            avatar_url=user.get("avatar_url"),
            skills=user.get("skills", []),
            bio=user.get("bio", ""),
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ Get user error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to retrieve user"
        )
async def login(req: LoginRequest):
    """Login user"""
    try:
        # Find user
        user = await Collections.users().find_one({"email": req.email})
        if not user or not verify_password(req.password, user.get("password_hash", "")):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid credentials"
            )
        
        # Generate tokens
        user_id = str(user["_id"])
        access_token = create_access_token(user_id)
        refresh_token = create_access_token(user_id, expires_delta=timedelta(days=7))
        
        logger.info(f"User logged in: {req.email}")
        
        return TokenResponse(
            access_token=access_token,
            refresh_token=refresh_token,
            expires_in=86400
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Login error: {e}")
        raise HTTPException(status_code=500, detail="Login failed")


@router.post("/verify")
async def verify(token: str):
    """Verify token validity"""
    try:
        user_id = verify_token(token)
        return {
            "success": True,
            "user_id": user_id,
            "message": "Token is valid"
        }
    except HTTPException as e:
        return {"success": False, "error": str(e.detail)}


@router.post("/refresh", response_model=TokenResponse)
async def refresh(refresh_token: str):
    """Refresh access token"""
    try:
        user_id = verify_token(refresh_token)
        access_token = create_access_token(user_id)
        new_refresh_token = create_access_token(user_id, expires_delta=timedelta(days=7))
        
        return TokenResponse(
            access_token=access_token,
            refresh_token=new_refresh_token,
            expires_in=86400
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Token refresh error: {e}")
        raise HTTPException(status_code=500, detail="Token refresh failed")


@router.post("/logout")
async def logout():
    """Logout user"""
    return {"success": True, "message": "Logged out successfully"}

