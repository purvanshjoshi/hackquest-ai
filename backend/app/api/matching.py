"""Hackathon matching and recommendation endpoints."""
from fastapi import APIRouter, HTTPException, Depends, status, Header
from sqlalchemy.orm import Session
from datetime import datetime
from typing import List, Optional
import json
import uuid
import jwt

from app.core.db import get_db
from app.core.config import settings
from app.models.hackathon_models import Hackathon, HackathonMatch, UserSkills
from app.models.database import User
from app.models.schemas import (
    HackathonResponse,
    HackathonMatchResponse,
    MatchScore,
    UpdateProfileRequest,
    CodeGenerationRequest,
    CodeGenerationResponse,
    SearchRequest,
    SearchResponse,
    HackathonCreateRequest
)

router = APIRouter(prefix="/api", tags=["matching"])


def get_token(token: Optional[str] = None) -> str:
    """Extract JWT token from query parameter."""
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="No token provided"
        )
    return token


def verify_token_simple(token: str) -> dict:
    """Simple token verification."""
    try:
        payload = jwt.decode(token, settings.secret_key, algorithms=[settings.JWT_ALGORITHM])
        return payload
    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )


def calculate_skill_match(user_skills: List[str], required_skills: List[str]) -> float:
    """Calculate skill match percentage (0-100)."""
    if not required_skills:
        return 100.0
    
    matching_skills = set(user_skills) & set(required_skills)
    return (len(matching_skills) / len(required_skills)) * 100.0


def calculate_difficulty_match(user_avg_exp: float, difficulty: str) -> float:
    """Calculate difficulty match based on experience (0-100)."""
    difficulty_levels = {
        "beginner": 0,
        "intermediate": 3,
        "advanced": 5,
        "expert": 8
    }
    
    required_exp = difficulty_levels.get(difficulty.lower(), 3)
    
    if user_avg_exp == 0:
        return 50.0 if difficulty == "beginner" else 30.0
    
    if user_avg_exp >= required_exp:
        return 100.0
    
    return 50.0 + (user_avg_exp / required_exp) * 50.0


@router.get("/matching/recommendations")
async def get_hackathon_recommendations(
    token: Optional[str] = None,
    authorization: Optional[str] = Header(None),
    limit: int = 10,
    db: Session = Depends(get_db)
):
    """Get personalized hackathon recommendations for user."""
    
    # Extract token from Authorization header or query parameter
    final_token = token
    if not final_token and authorization:
        # Extract from "Bearer <token>"
        if authorization.startswith("Bearer "):
            final_token = authorization[7:]
    
    # Validate token
    if not final_token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="No token provided"
        )
    
    # Verify token
    payload = verify_token_simple(final_token)
    user_id = payload.get("sub")
    
    # Get user
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    # Get user skills
    user_skills = []
    user_db_skills = db.query(UserSkills).filter(UserSkills.user_id == user.id).all()
    
    if user_db_skills:
        user_skills = [s.skill_name for s in user_db_skills]
    else:
        try:
            user_skills = json.loads(user.skills) if user.skills else []
        except:
            user_skills = []
    
    # Get available hackathons
    hackathons = db.query(Hackathon).filter(Hackathon.is_active == True).limit(limit * 2).all()
    
    matches = []
    for hackathon in hackathons:
        try:
            required_skills = json.loads(hackathon.required_skills) if hackathon.required_skills else []
        except:
            required_skills = []
        
        skill_match = calculate_skill_match(user_skills, required_skills)
        difficulty_match = calculate_difficulty_match(2.5, hackathon.difficulty or "intermediate")
        overall_score = (skill_match * 0.7 + difficulty_match * 0.3)
        
        matches.append({
            "id": hackathon.id,
            "title": hackathon.title,
            "description": hackathon.description,
            "platform": hackathon.platform,
            "difficulty": hackathon.difficulty,
            "location": hackathon.location,
            "required_skills": required_skills,
            "match_score": overall_score,
            "skill_match": skill_match,
            "difficulty_match": difficulty_match,
            "prize_pool": hackathon.prize_pool,
            "reasoning": f"Skill match: {skill_match:.0f}%, Difficulty fit: {difficulty_match:.0f}%"
        })
    
    # Sort by score
    matches.sort(key=lambda x: x["match_score"], reverse=True)
    return matches[:limit]


@router.post("/profile/update")
async def update_user_profile(
    update: UpdateProfileRequest,
    token: Optional[str] = None,
    db: Session = Depends(get_db)
):
    """Update user profile information."""
    
    # Validate token
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="No token provided"
        )
    
    # Verify token
    payload = verify_token_simple(token)
    user_id = payload.get("sub")
    
    # Get user
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    # Update fields
    if update.username:
        user.username = update.username
    if update.full_name:
        user.full_name = update.full_name
    if update.bio:
        user.bio = update.bio
    if update.avatar_url:
        user.avatar_url = update.avatar_url
    
    # Update skills
    if update.skills:
        user.skills = json.dumps(update.skills)
        
        db.query(UserSkills).filter(UserSkills.user_id == user.id).delete()
        
        for skill in update.skills:
            skill_record = UserSkills(
                id=str(uuid.uuid4()),
                user_id=user.id,
                skill_name=skill,
                proficiency="intermediate"
            )
            db.add(skill_record)
    
    user.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(user)
    
    return {
        "success": True,
        "message": "Profile updated successfully",
        "user": {
            "id": user.id,
            "email": user.email,
            "username": user.username,
            "full_name": user.full_name,
            "bio": user.bio,
            "avatar_url": user.avatar_url,
            "skills": json.loads(user.skills) if user.skills else []
        }
    }


@router.post("/hackathons")
async def create_hackathon(
    hackathon: HackathonCreateRequest,
    db: Session = Depends(get_db)
):
    """Create a new hackathon."""
    
    new_hackathon = Hackathon(
        id=str(uuid.uuid4()),
        title=hackathon.title,
        description=hackathon.description,
        platform=hackathon.platform,
        difficulty=hackathon.difficulty,
        required_skills=json.dumps(hackathon.required_skills),
        prize_pool=str(hackathon.prize_pool),
        location=hackathon.location,
        is_active=True
    )
    db.add(new_hackathon)
    db.commit()
    db.refresh(new_hackathon)
    
    return {
        "id": new_hackathon.id,
        "title": new_hackathon.title,
        "description": new_hackathon.description,
        "platform": new_hackathon.platform,
        "difficulty": new_hackathon.difficulty,
        "location": new_hackathon.location,
        "required_skills": json.loads(new_hackathon.required_skills) if new_hackathon.required_skills else [],
        "prize_pool": new_hackathon.prize_pool
    }


@router.post("/hackathons/search")
async def search_hackathons(
    search: SearchRequest,
    db: Session = Depends(get_db)
):
    """Search hackathons by query, difficulty, and skills."""
    from sqlalchemy import or_
    
    query_filter = [
        Hackathon.title.ilike(f"%{search.query}%"),
        Hackathon.description.ilike(f"%{search.query}%"),
        Hackathon.platform.ilike(f"%{search.query}%")
    ]
    
    results = db.query(Hackathon).filter(or_(*query_filter))
    
    if search.difficulty:
        results = results.filter(Hackathon.difficulty == search.difficulty)
    
    if search.min_prize:
        results = results.filter(Hackathon.prize_pool.ilike(f"%{search.min_prize}%"))
    
    total = results.count()
    results = results.offset(search.offset or 0).limit(search.limit or 20).all()
    
    return SearchResponse(
        results=[
            {
                "id": h.id,
                "title": h.title,
                "platform": h.platform,
                "difficulty": h.difficulty,
                "location": h.location,
                "required_skills": json.loads(h.required_skills) if h.required_skills else [],
                "prize_pool": h.prize_pool
            }
            for h in results
        ],
        total=total,
        limit=search.limit or 20,
        offset=search.offset or 0
    )

