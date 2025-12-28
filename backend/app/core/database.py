"""MongoDB async database connection and management"""
import logging
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase, AsyncIOMotorCollection
from pymongo.errors import ServerSelectionTimeoutError
from contextlib import asynccontextmanager
from app.core.config import settings

logger = logging.getLogger(__name__)

# Global database instances
_db: AsyncIOMotorDatabase | None = None
_client: AsyncIOMotorClient | None = None
_pinecone_index = None


def get_pinecone_index():
    """Get or initialize Pinecone index (lazy initialization)"""
    global _pinecone_index
    
    if _pinecone_index is None:
        try:
            from pinecone import Pinecone
            api_key = settings.pinecone_api_key.strip()
            pc = Pinecone(api_key=api_key)
            _pinecone_index = pc.Index(settings.pinecone_index)
            logger.info(f"✅ Pinecone initialized for index: {settings.pinecone_index}")
        except Exception as e:
            logger.error(f"❌ Pinecone initialization error: {e}")
            return None
    
    return _pinecone_index


# Alias for backward compatibility
pinecone_index = None  # Will be set on first access via get_pinecone_index()


async def init_db() -> AsyncIOMotorDatabase:
    """Initialize MongoDB connection"""
    global _db, _client
    
    try:
        _client = AsyncIOMotorClient(
            settings.mongodb_url,
            serverSelectionTimeoutMS=5000,
            connectTimeoutMS=10000,
            retryWrites=True,
        )
        
        # Verify connection
        await _client.admin.command('ping')
        _db = _client[settings.mongodb_db]
        
        logger.info(f"✅ Connected to MongoDB: {settings.mongodb_db}")
        await _create_indexes()
        return _db
        
    except ServerSelectionTimeoutError as e:
        logger.error(f"❌ Failed to connect to MongoDB: {e}")
        raise
    except Exception as e:
        logger.error(f"❌ Database initialization error: {e}")
        raise


async def close_db():
    """Close MongoDB connection"""
    global _client, _db
    
    if _client:
        _client.close()
        _db = None
        logger.info("✅ MongoDB connection closed")


def get_db() -> AsyncIOMotorDatabase:
    """Get database instance"""
    if _db is None:
        raise RuntimeError("Database not initialized. Call init_db() first.")
    return _db


@asynccontextmanager
async def get_db_context():
    """Context manager for database operations"""
    db = get_db()
    try:
        yield db
    except Exception as e:
        logger.error(f"Database operation error: {e}")
        raise


async def _create_indexes():
    """Create database indexes for performance"""
    db = get_db()
    
    try:
        # Users collection indexes
        users = db["users"]
        await users.create_index("email", unique=True)
        await users.create_index("username", unique=True)
        await users.create_index("github_username", sparse=True)
        
        # Hackathons collection indexes
        hackathons = db["hackathons"]
        await hackathons.create_index("platform_id", unique=True)
        await hackathons.create_index("platform")
        await hackathons.create_index("difficulty")
        await hackathons.create_index("required_skills")
        
        # Submissions collection indexes
        submissions = db["submissions"]
        await submissions.create_index("user_id")
        await submissions.create_index("hackathon_id")
        await submissions.create_index([("user_id", 1), ("hackathon_id", 1)], unique=True)
        await submissions.create_index("status")
        
        # Matches collection indexes
        matches = db["matches"]
        await matches.create_index("user_id")
        await matches.create_index("hackathon_id")
        await matches.create_index([("user_id", 1), ("hackathon_id", 1)], unique=True)
        
        logger.info("✅ Database indexes created successfully")
        
    except Exception as e:
        logger.warning(f"Index creation warning (may already exist): {e}")


# Collection helpers
class Collections:
    """Easy access to database collections"""
    
    @staticmethod
    def users() -> AsyncIOMotorCollection:
        return get_db()["users"]
    
    @staticmethod
    def hackathons() -> AsyncIOMotorCollection:
        return get_db()["hackathons"]
    
    @staticmethod
    def submissions() -> AsyncIOMotorCollection:
        return get_db()["submissions"]
    
    @staticmethod
    def matches() -> AsyncIOMotorCollection:
        return get_db()["matches"]
    
    @staticmethod
    def embeddings() -> AsyncIOMotorCollection:
        return get_db()["embeddings"]
    
    @staticmethod
    def scrape_log() -> AsyncIOMotorCollection:
        return get_db()["scrape_log"]