"""Database connection management with error handling"""
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
import logging

logger = logging.getLogger(__name__)

try:
    # Try relative imports first (when run as module)
    from app.core.config import settings
except ImportError:
    # Fall back to absolute imports (when run from project root)
    from backend.app.core.config import settings

# Global database references
client: AsyncIOMotorClient = None
db: AsyncIOMotorDatabase = None

async def get_db() -> AsyncIOMotorDatabase:
    """Get the current database instance"""
    return db

async def connect_to_db():
    """
    Connect to MongoDB on application startup
    Does NOT crash app if connection fails - allows graceful degradation
    """
    try:
        global client, db
        logger.info(f"🔗 Connecting to MongoDB at: {settings.MONGODB_URL}")
        
        client = AsyncIOMotorClient(settings.MONGODB_URL, serverSelectionTimeoutMS=5000)
        db = client[settings.DATABASE_NAME]
        
        # Test the connection
        await db.command("ping")
        
        logger.info("✅ MongoDB connection successful")
    except Exception as e:
        logger.warning(f"⚠️ MongoDB connection failed: {e}")
        logger.warning("🚀 Application will run WITHOUT database - implement graceful fallback")
        # Application continues without database

async def disconnect_from_db():
    """
    Disconnect from MongoDB on application shutdown
    """
    try:
        global client
        if client:
            client.close()
            logger.info("✅ MongoDB disconnected")
    except Exception as e:
        logger.error(f"❌ Error disconnecting from MongoDB: {e}")


