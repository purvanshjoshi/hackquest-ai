"""Database connection management with error handling"""
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
import logging
import ssl
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
        
        # Configure TLS/SSL for MongoDB Atlas
        # Python 3.13 requires explicit SSL context configuration
        ssl_context = ssl.create_default_context(cafile=certifi.where())
        ssl_context.check_hostname = True
        ssl_context.verify_mode = ssl.CERT_REQUIRED
        
        # For Motor/PyMongo with SRV connections, pass tlsCertificateKeyFile if needed
        connection_kwargs = {
            "serverSelectionTimeoutMS": 10000,
            "connectTimeoutMS": 10000,
            "socketTimeoutMS": 5000,
            "retryWrites": True,
        }
        
        # For MongoDB Atlas SRV URIs, ensure TLS is enabled
        if 'mongodb+srv' in settings.MONGODB_URL:
            connection_kwargs["tls"] = True
            connection_kwargs["tlsCAFile"] = certifi.where()
            logger.info(f"   TLS enabled with CA bundle from certifi")
        
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


