"""Pydantic models for API request/response validation"""
from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List, Dict, Any
from datetime import datetime
from enum import Enum


class SkillEnum(str, Enum):
    """Supported programming skills"""
    PYTHON = "python"
    JAVASCRIPT = "javascript"
    TYPESCRIPT = "typescript"
    JAVA = "java"
    CPP = "cpp"
    CSHARP = "csharp"
    GO = "go"
    RUST = "rust"
    KOTLIN = "kotlin"
    SWIFT = "swift"
    REACT = "react"
    VUE = "vue"
    ANGULAR = "angular"
    FASTAPI = "fastapi"
    DJANGO = "django"
    NODEJS = "nodejs"
    SQL = "sql"
    MONGODB = "mongodb"
    AWS = "aws"
    GCP = "gcp"
    DOCKER = "docker"
    KUBERNETES = "kubernetes"
    ML = "machine_learning"
    AI = "artificial_intelligence"


class DifficultyEnum(str, Enum):
    """Hackathon difficulty levels"""
    BEGINNER = "beginner"
    INTERMEDIATE = "intermediate"
    ADVANCED = "advanced"
    EXPERT = "expert"


class PlatformEnum(str, Enum):
    """Hackathon platforms"""
    DEVPOST = "devpost"
    UNSTOP = "unstop"
    HACKEREARTH = "hackerearth"
    DEVFOLIO = "devfolio"
    SIH = "sih"
    GITHUB = "github"
    MAJOR_LEAGUE = "major_league_hacking"


class StatusEnum(str, Enum):
    """User/submission status"""
    ACTIVE = "active"
    INACTIVE = "inactive"
    BANNED = "banned"


class SubmissionStatusEnum(str, Enum):
    """Submission status"""
    DRAFT = "draft"
    SUBMITTED = "submitted"
    JUDGING = "judging"
    ACCEPTED = "accepted"
    REJECTED = "rejected"
    WINNER = "winner"


# ==================== AUTH SCHEMAS ====================

class RegisterRequest(BaseModel):
    """User registration request"""
    email: EmailStr
    password: str = Field(..., min_length=8)
    username: str = Field(..., min_length=3, max_length=50)
    full_name: Optional[str] = None
    avatar_url: Optional[str] = None


class LoginRequest(BaseModel):
    """User login request"""
    email: EmailStr
    password: str


class RefreshTokenRequest(BaseModel):
    """Refresh token request - FIXED: proper schema for type validation"""
    refresh_token: str = Field(..., min_length=1, description="Valid JWT refresh token")


class TokenResponse(BaseModel):
    """JWT token response"""
    access_token: str
    refresh_token: Optional[str] = None
    token_type: str = "bearer"
    user: Optional[Any] = None


class UserResponse(BaseModel):
    """User response"""
    id: str
    email: str
    username: str
    full_name: Optional[str] = None
    avatar_url: Optional[str] = None
    skills: List[str] = []
    bio: Optional[str] = None


class VerifyTokenRequest(BaseModel):
    """Token verification request"""
    token: str


class OAuthRequest(BaseModel):
    """OAuth login request"""
    email: str
    username: Optional[str] = None
    full_name: Optional[str] = None
    avatar_url: Optional[str] = None


# ==================== USER SCHEMAS ====================

class UserProfile(BaseModel):
    """User profile data"""
    id: str
    email: str
    username: str
    full_name: str
    avatar_url: Optional[str] = None
    bio: Optional[str] = None
    skills: List[SkillEnum] = []
    github_username: Optional[str] = None
    github_profile_url: Optional[str] = None
    github_stars: int = 0
    github_repos: int = 0
    github_followers: int = 0
    hackathons_participated: int = 0
    hackathons_won: int = 0
    win_rate: float = 0.0
    status: StatusEnum = StatusEnum.ACTIVE
    created_at: datetime
    updated_at: datetime


class UpdateProfileRequest(BaseModel):
    """Update user profile"""
    username: Optional[str] = None
    full_name: Optional[str] = None
    bio: Optional[str] = None
    avatar_url: Optional[str] = None
    skills: Optional[List[str]] = None
    github_username: Optional[str] = None


class UserProfileResponse(BaseModel):
    """User profile API response"""
    success: bool
    data: UserProfile
    message: str


# ==================== HACKATHON SCHEMAS ====================

class HackathonBase(BaseModel):
    """Base hackathon data"""
    title: str
    description: str
    platform: PlatformEnum
    start_date: datetime
    end_date: datetime
    prize_pool: int = 0
    difficulty: DifficultyEnum
    theme: str
    required_skills: List[SkillEnum] = []
    location: Optional[str] = None
    is_remote: bool = True
    registration_link: str
    platform_id: str


class HackathonCreateRequest(BaseModel):
    """Create hackathon request"""
    title: str
    description: str
    platform: str
    prize_pool: int = 0
    difficulty: str
    required_skills: List[str] = []
    location: Optional[str] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    theme: Optional[str] = None
    is_remote: Optional[bool] = None
    registration_link: Optional[str] = None
    platform_id: Optional[str] = None


class HackathonMatch(BaseModel):
    """Hackathon match data"""
    id: str
    title: str
    description: str
    platform: PlatformEnum
    difficulty: DifficultyEnum
    skills_match: float  # 0-1
    win_probability: float  # 0-1
    prize_pool: int
    matched_skills: List[str]
    missing_skills: List[str]
    start_date: datetime
    end_date: datetime
    registration_link: str
    theme: str


class HackathonDetailResponse(BaseModel):
    """Detailed hackathon response"""
    success: bool
    data: HackathonMatch
    message: str


class HackathonListResponse(BaseModel):
    """List of hackathons response"""
    success: bool
    data: List[HackathonMatch]
    total: int
    message: str


# ==================== MATCH SCHEMAS ====================

class MatchRequest(BaseModel):
    """Request to find matches"""
    user_id: str
    filters: Optional[Dict[str, Any]] = None
    limit: int = 10


class FindMatchesResponse(BaseModel):
    """Find matches response"""
    success: bool
    data: List[HackathonMatch]
    total_matches: int
    message: str


class MatchStats(BaseModel):
    """Match statistics"""
    total_candidates: int
    avg_win_probability: float
    best_match_title: str
    best_win_probability: float


# ==================== CODE GENERATION SCHEMAS ====================

class GenerateCodeRequest(BaseModel):
    """Request to generate boilerplate code"""
    hackathon_id: str
    problem_statement: str
    selected_skills: List[SkillEnum] = []
    framework: Optional[str] = "fastapi"


class GeneratedCode(BaseModel):
    """Generated code response"""
    backend_code: str
    frontend_code: str
    docker_compose: str
    requirements_txt: str
    package_json: str


class GenerateCodeResponse(BaseModel):
    """Code generation response"""
    success: bool
    data: GeneratedCode
    download_url: str
    message: str


# ==================== JUDGING SCHEMAS ====================

class JudgingCriteria(BaseModel):
    """Judging criteria"""
    innovation: float  # 0-1
    completeness: float  # 0-1
    code_quality: float  # 0-1
    design: float  # 0-1
    presentation: float  # 0-1


class SimulateJudgingRequest(BaseModel):
    """Request to simulate judging"""
    submission_id: str
    submission_description: str
    code_snippet: Optional[str] = None


class JudgingFeedback(BaseModel):
    """Judge feedback"""
    criteria: JudgingCriteria
    overall_score: float  # 0-100
    strengths: List[str]
    improvements: List[str]
    verdict: str


class SimulateJudgingResponse(BaseModel):
    """Simulated judging response"""
    success: bool
    data: JudgingFeedback
    estimated_rank: int
    estimated_win_probability: float
    message: str


# ==================== SUBMISSION SCHEMAS ====================

class SubmissionBase(BaseModel):
    """Base submission data"""
    hackathon_id: str
    user_id: str
    title: str
    description: str
    repository_url: str
    demo_url: Optional[str] = None
    technologies: List[SkillEnum] = []


class SubmissionCreate(SubmissionBase):
    """Create submission"""
    problem_statement: str


class Submission(SubmissionBase):
    """Full submission data"""
    id: str
    status: SubmissionStatusEnum
    judge_feedback: Optional[JudgingFeedback] = None
    score: Optional[float] = None
    created_at: datetime
    updated_at: datetime


class SubmissionResponse(BaseModel):
    """Submission API response"""
    success: bool
    data: Submission
    message: str


class SubmissionsListResponse(BaseModel):
    """List of submissions response"""
    success: bool
    data: List[Submission]
    total: int
    message: str


# ==================== AGENT SCHEMAS ====================

class AgentRequest(BaseModel):
    """Request to run agent pipeline"""
    user_id: str
    action: str  # "find_matches", "generate_code", "judge_submission"
    payload: Dict[str, Any]


class AgentResponse(BaseModel):
    """Agent pipeline response"""
    success: bool
    data: Dict[str, Any]
    error: Optional[str] = None
    execution_time: float


# ==================== MATCHING SCHEMAS ====================

class HackathonResponse(BaseModel):
    """Hackathon response"""
    id: str
    title: str
    description: Optional[str] = None
    platform: str
    url: Optional[str] = None
    difficulty: str
    required_skills: List[str] = []
    prize_pool: Optional[str] = None
    location: Optional[str] = None
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    is_active: bool = True


class MatchScore(BaseModel):
    """Match score details"""
    overall_score: float
    skill_match: float
    difficulty_match: float
    reasoning: Optional[str] = None


class HackathonMatchResponse(BaseModel):
    """Hackathon match response"""
    hackathon: HackathonResponse
    match_score: MatchScore
    is_applied: bool = False


class PasswordResetRequest(BaseModel):
    """Password reset request"""
    email: str


class PasswordResetConfirm(BaseModel):
    """Password reset confirmation"""
    token: str
    new_password: str = Field(..., min_length=8)


# ==================== CODE GENERATION SCHEMAS ====================

class CodeGenerationRequest(BaseModel):
    """Code generation request"""
    prompt: str
    language: str = "python"
    framework: Optional[str] = None
    requirements: Optional[List[str]] = None


class CodeGenerationResponse(BaseModel):
    """Code generation response"""
    code: str
    language: str
    explanation: Optional[str] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)


# ==================== SEARCH SCHEMAS ====================

class SearchRequest(BaseModel):
    """Search request"""
    query: str
    difficulty: Optional[str] = None
    min_prize: Optional[int] = None
    filters: Optional[Dict[str, Any]] = None
    limit: int = 20
    offset: int = 0


class SearchResponse(BaseModel):
    """Search response"""
    results: List[Dict[str, Any]]
    total: int
    limit: int
    offset: int


# ==================== ERROR SCHEMAS ====================

class ErrorResponse(BaseModel):
    """Error response"""
    success: bool = False
    error: str
    details: Optional[Dict[str, Any]] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class ValidationError(BaseModel):
    """Validation error response"""
    success: bool = False
    error: str = "Validation Error"
    fields: Dict[str, List[str]]
    timestamp: datetime = Field(default_factory=datetime.utcnow)

# ==================== AGENT WORKFLOW SCHEMAS ====================

class AgentQueryRequest(BaseModel):
    """Request for agent analysis and matching"""
    user_id: str
    skills: Optional[List[str]] = []
    github_summary: Optional[str] = None
    experience_level: Optional[str] = "intermediate"


class HackathonInfo(BaseModel):
    """Hackathon information"""
    id: str
    title: str
    ps: str  # Problem Statement
    score: Optional[float] = None
    difficulty: Optional[str] = None
    platform: Optional[str] = None
    prize_pool: Optional[int] = None


class AgentResponse(BaseModel):
    """Agent workflow response"""
    status: str
    user_id: str
    selected_hackathon: Optional[HackathonInfo] = None
    win_probability: float = 0.0
    judge_critique: Optional[str] = None
    boilerplate_code: Optional[Dict[str, str]] = None
    timestamp: Optional[str] = None