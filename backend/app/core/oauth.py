"""OAuth integration for Google and GitHub authentication."""
import httpx
import json
import logging
from typing import Optional, Dict, Any
from urllib.parse import urlencode
from app.core.config import settings

logger = logging.getLogger(__name__)


class GoogleOAuthClient:
    """Google OAuth 2.0 client for authentication."""
    
    OAUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"
    TOKEN_URL = "https://oauth2.googleapis.com/token"
    USER_INFO_URL = "https://openidconnect.googleapis.com/v1/userinfo"
    
    @staticmethod
    def get_authorization_url(redirect_uri: str) -> str:
        """Generate Google OAuth authorization URL."""
        params = {
            "client_id": settings.GOOGLE_CLIENT_ID,
            "redirect_uri": redirect_uri,
            "response_type": "code",
            "scope": "openid email profile",
            "access_type": "offline",
            "prompt": "consent"
        }
        return f"{GoogleOAuthClient.OAUTH_URL}?{urlencode(params)}"
    
    @staticmethod
    async def get_access_token(code: str, redirect_uri: str) -> Optional[Dict[str, Any]]:
        """Exchange authorization code for access token."""
        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    GoogleOAuthClient.TOKEN_URL,
                    data={
                        "client_id": settings.GOOGLE_CLIENT_ID,
                        "client_secret": settings.GOOGLE_CLIENT_SECRET,
                        "code": code,
                        "grant_type": "authorization_code",
                        "redirect_uri": redirect_uri
                    }
                )
                response.raise_for_status()
                return response.json()
        except Exception as e:
            logger.error(f"Failed to get Google access token: {e}")
            return None
    
    @staticmethod
    async def get_user_info(access_token: str) -> Optional[Dict[str, Any]]:
        """Get user info from Google using access token."""
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(
                    GoogleOAuthClient.USER_INFO_URL,
                    headers={"Authorization": f"Bearer {access_token}"}
                )
                response.raise_for_status()
                return response.json()
        except Exception as e:
            logger.error(f"Failed to get Google user info: {e}")
            return None


class GitHubOAuthClient:
    """GitHub OAuth 2.0 client for authentication."""
    
    OAUTH_URL = "https://github.com/login/oauth/authorize"
    TOKEN_URL = "https://github.com/login/oauth/access_token"
    USER_INFO_URL = "https://api.github.com/user"
    
    @staticmethod
    def get_authorization_url(redirect_uri: str) -> str:
        """Generate GitHub OAuth authorization URL."""
        params = {
            "client_id": settings.GITHUB_CLIENT_ID,
            "redirect_uri": redirect_uri,
            "scope": "user:email",
            "allow_signup": "true"
        }
        return f"{GitHubOAuthClient.OAUTH_URL}?{urlencode(params)}"
    
    @staticmethod
    async def get_access_token(code: str) -> Optional[Dict[str, Any]]:
        """Exchange authorization code for access token."""
        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    GitHubOAuthClient.TOKEN_URL,
                    data={
                        "client_id": settings.GITHUB_CLIENT_ID,
                        "client_secret": settings.GITHUB_CLIENT_SECRET,
                        "code": code
                    },
                    headers={"Accept": "application/json"}
                )
                response.raise_for_status()
                return response.json()
        except Exception as e:
            logger.error(f"Failed to get GitHub access token: {e}")
            return None
    
    @staticmethod
    async def get_user_info(access_token: str) -> Optional[Dict[str, Any]]:
        """Get user info from GitHub using access token."""
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(
                    GitHubOAuthClient.USER_INFO_URL,
                    headers={
                        "Authorization": f"Bearer {access_token}",
                        "Accept": "application/vnd.github.v3+json"
                    }
                )
                response.raise_for_status()
                user_data = response.json()
                
                # Get primary email if not public
                if not user_data.get("email"):
                    email_response = await client.get(
                        f"{GitHubOAuthClient.USER_INFO_URL}/emails",
                        headers={
                            "Authorization": f"Bearer {access_token}",
                            "Accept": "application/vnd.github.v3+json"
                        }
                    )
                    if email_response.status_code == 200:
                        emails = email_response.json()
                        primary = next((e for e in emails if e.get("primary")), None)
                        if primary:
                            user_data["email"] = primary.get("email")
                
                return user_data
        except Exception as e:
            logger.error(f"Failed to get GitHub user info: {e}")
            return None
