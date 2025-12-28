"""Agent integration router for hackathon matching workflow."""
import logging
import json
from fastapi import APIRouter, HTTPException, status, WebSocket
from typing import Optional
from datetime import datetime

from app.agents import app_agent, AgentState
from app.models.schemas import (
    AgentQueryRequest,
    AgentResponse,
    HackathonMatchResponse
)
from app.core.config import settings

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/agent", tags=["agent"])


@router.post("/analyze", response_model=AgentResponse)
async def analyze_user(request: AgentQueryRequest):
    """
    Analyze user profile and find matching hackathons.
    Runs the complete agent workflow.
    """
    try:
        if not request.user_id:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="user_id is required"
            )
        
        # Initialize agent state
        initial_state: AgentState = {
            "messages": [],
            "user_id": request.user_id,
            "skills": request.skills or [],
            "github_summary": request.github_summary or "",
            "candidate_matches": [],
            "selected_hackathon": None,
            "win_probability": 0.0,
            "judge_critique": "",
            "boilerplate_code": {}
        }
        
        logger.info(f"Starting agent workflow for user {request.user_id}")
        
        # Run the agent workflow
        result = await app_agent.ainvoke(initial_state)
        
        logger.info(f"Agent workflow completed for user {request.user_id}")
        
        return AgentResponse(
            status="success",
            user_id=request.user_id,
            selected_hackathon=result.get("selected_hackathon"),
            win_probability=result.get("win_probability", 0.0),
            judge_critique=result.get("judge_critique", ""),
            boilerplate_code=result.get("boilerplate_code", {}),
            timestamp=datetime.utcnow().isoformat()
        )
    
    except Exception as e:
        logger.error(f"Agent analysis failed: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Agent analysis failed: {str(e)}"
        )


@router.post("/run-agent")
async def run_agent(request: AgentQueryRequest):
    """
    Legacy endpoint for running agent analysis.
    Maps to /api/agent/analyze for backward compatibility.
    """
    try:
        if not request.user_id:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="user_id is required"
            )
        
        # Initialize agent state
        initial_state: AgentState = {
            "messages": [],
            "user_id": request.user_id,
            "skills": request.skills or [],
            "github_summary": request.github_summary or "",
            "candidate_matches": [],
            "selected_hackathon": None,
            "win_probability": 0.0,
            "judge_critique": "",
            "boilerplate_code": {}
        }
        
        logger.info(f"Running agent for user {request.user_id}")
        
        # Run the agent workflow
        result = await app_agent.ainvoke(initial_state)
        
        logger.info(f"Agent completed for user {request.user_id}")
        
        return {
            "status": "success",
            "user_id": request.user_id,
            "selected_hackathon": result.get("selected_hackathon"),
            "win_probability": result.get("win_probability", 0.0),
            "judge_critique": result.get("judge_critique", ""),
            "boilerplate_code": result.get("boilerplate_code", {}),
            "timestamp": datetime.utcnow().isoformat()
        }
    
    except Exception as e:
        logger.error(f"Agent run failed: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Agent run failed: {str(e)}"
        )


@router.get("/hackathons/{user_id}/matches")
async def get_user_matches(
    user_id: str,
    limit: int = 5
):
    """
    Get top matching hackathons for a user.
    """
    try:
        if not user_id:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="user_id is required"
            )
        
        logger.info(f"Fetching matches for user {user_id}")
        
        # In production, this would query the database for cached results
        # For now, return a placeholder
        return {
            "user_id": user_id,
            "matches": [],
            "total": 0,
            "timestamp": datetime.utcnow().isoformat()
        }
    
    except Exception as e:
        logger.error(f"Failed to fetch matches: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch matches: {str(e)}"
        )


@router.post("/matches/score")
async def score_match(
    user_id: str,
    hackathon_id: str
):
    """
    Score a specific user-hackathon match.
    """
    try:
        if not user_id or not hackathon_id:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="user_id and hackathon_id are required"
            )
        
        logger.info(f"Scoring match: user={user_id}, hackathon={hackathon_id}")
        
        # Placeholder implementation
        return {
            "user_id": user_id,
            "hackathon_id": hackathon_id,
            "score": 75.0,
            "compatibility": "high",
            "timestamp": datetime.utcnow().isoformat()
        }
    
    except Exception as e:
        logger.error(f"Failed to score match: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to score match: {str(e)}"
        )


@router.websocket("/ws/agent/{user_id}")
async def websocket_agent(websocket: WebSocket, user_id: str):
    """
    WebSocket endpoint for streaming agent workflow execution.
    """
    await websocket.accept()
    
    try:
        logger.info(f"WebSocket connected for user {user_id}")
        
        while True:
            # Receive data from client
            data = await websocket.receive_json()
            
            event_type = data.get("event")
            
            if event_type == "start_analysis":
                skills = data.get("skills", [])
                github_summary = data.get("github_summary", "")
                
                await websocket.send_json({
                    "event": "status",
                    "message": "Starting hackathon analysis...",
                    "progress": 0
                })
                
                # Initialize and run agent
                initial_state: AgentState = {
                    "messages": [],
                    "user_id": user_id,
                    "skills": skills,
                    "github_summary": github_summary,
                    "candidate_matches": [],
                    "selected_hackathon": None,
                    "win_probability": 0.0,
                    "judge_critique": "",
                    "boilerplate_code": {}
                }
                
                try:
                    result = await app_agent.ainvoke(initial_state)
                    
                    await websocket.send_json({
                        "event": "analysis_complete",
                        "selected_hackathon": result.get("selected_hackathon"),
                        "win_probability": result.get("win_probability", 0.0),
                        "judge_critique": result.get("judge_critique", ""),
                        "boilerplate_code": result.get("boilerplate_code", {}),
                        "progress": 100
                    })
                
                except Exception as e:
                    logger.error(f"Agent error: {str(e)}")
                    await websocket.send_json({
                        "event": "error",
                        "message": f"Analysis failed: {str(e)}"
                    })
            
            elif event_type == "ping":
                await websocket.send_json({"event": "pong"})
    
    except Exception as e:
        logger.error(f"WebSocket error for user {user_id}: {str(e)}")
    finally:
        logger.info(f"WebSocket disconnected for user {user_id}")

