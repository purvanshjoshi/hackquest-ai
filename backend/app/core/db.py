"""Database connection management with error handling"""
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
import logging
import certifi

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
    Supports both local MongoDB and MongoDB Atlas (SRV)
    Does NOT crash app if connection fails - allows graceful degradation
    """
    try:
        global client, db
        logger.info(f"🔗 Connecting to MongoDB...")
        logger.info(f"   URL format: {('Atlas SRV' if 'mongodb+srv' in settings.MONGODB_URL else 'Standard MongoDB')}")
        logger.info(f"   Database: {settings.DATABASE_NAME}")
        
        # Create connection kwargs
        connection_kwargs = {
            "serverSelectionTimeoutMS": 30000,  # Increased from 10s to 30s
            "connectTimeoutMS": 30000,
            "socketTimeoutMS": 30000,
            "retryWrites": True,
        }
        
        # For MongoDB Atlas SRV URIs, ensure proper TLS configuration
        if 'mongodb+srv' in settings.MONGODB_URL:
            # PyMongo/Motor recognizes these parameters for TLS
            connection_kwargs["tls"] = True
            connection_kwargs["tlsCAFile"] = certifi.where()
            connection_kwargs["tlsAllowInvalidCertificates"] = True
            connection_kwargs["tlsAllowInvalidHostnames"] = True
            logger.warning(f"   ⚠️  TLS certificate validation DISABLED (debug mode)")
            logger.info(f"   TLS CA File: {certifi.where()}")
        
        logger.info(f"   Connection timeout: {connection_kwargs['connectTimeoutMS']}ms")
        logger.info(f"   Server selection timeout: {connection_kwargs['serverSelectionTimeoutMS']}ms")
        
        # Motor automatically handles:
        # - TLS/SSL (mongodb+srv includes TLS by default)
        # - Replica set discovery
        # - Connection pooling
        client = AsyncIOMotorClient(
            settings.MONGODB_URL,
            **connection_kwargs
        )
        
        # Test the connection with a ping
        await client.admin.command("ping")
        db = client[settings.DATABASE_NAME]
        
        logger.info("✅ MongoDB connection successful")
        logger.info(f"   Database: {settings.DATABASE_NAME}")
        
    except Exception as e:
        logger.error(f"❌ MongoDB connection failed: {type(e).__name__}: {str(e)}")
        logger.warning("⚠️ Application will run WITHOUT database - queries may fail")
        # Application continues without database - graceful degradation

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


