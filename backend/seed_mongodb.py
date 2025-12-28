"""Seed MongoDB with sample hackathon data"""
import asyncio
from pymongo import MongoClient
from datetime import datetime
from bson.objectid import ObjectId

async def seed_mongodb():
    """Seed MongoDB with sample hackathons and users"""
    
    # Connect to MongoDB
    client = MongoClient('mongodb://localhost:27017')
    db = client['hackquest']
    
    # Sample hackathons
    hackathons_data = [
        {
            "_id": ObjectId(),
            "platform_id": "sih-ai-01",
            "title": "SIH: AI-based Crop Prediction",
            "platform": "Smart India Hackathon",
            "ps": "Develop an AI model to predict crop yield based on soil and weather data using Python and IoT sensors.",
            "difficulty": "Hard",
            "required_skills": ["Python", "Machine Learning", "IoT"],
            "prize_pool": 500000,
            "date_start": datetime(2025, 3, 1),
            "date_end": datetime(2025, 3, 3),
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "_id": ObjectId(),
            "platform_id": "devpost-web3-02",
            "title": "Web3 Security Shield",
            "platform": "DevPost",
            "ps": "Build a real-time dashboard to monitor smart contract vulnerabilities using React, ethers.js, and Solidity.",
            "difficulty": "Hard",
            "required_skills": ["React", "Solidity", "Web3.js"],
            "prize_pool": 250000,
            "date_start": datetime(2025, 2, 15),
            "date_end": datetime(2025, 2, 17),
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "_id": ObjectId(),
            "platform_id": "unstop-fintech-03",
            "title": "FinTech Payment Gateway",
            "platform": "Unstop",
            "ps": "Create a high-speed payment reconciliation engine using FastAPI, Redis, and PostgreSQL.",
            "difficulty": "Medium",
            "required_skills": ["FastAPI", "Redis", "PostgreSQL"],
            "prize_pool": 300000,
            "date_start": datetime(2025, 4, 1),
            "date_end": datetime(2025, 4, 3),
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "_id": ObjectId(),
            "platform_id": "hackerrank-ml-04",
            "title": "Computer Vision for Medical Imaging",
            "platform": "HackerRank",
            "ps": "Build a CNN model to detect anomalies in chest X-rays using TensorFlow and PyTorch.",
            "difficulty": "Hard",
            "required_skills": ["TensorFlow", "PyTorch", "Computer Vision"],
            "prize_pool": 150000,
            "date_start": datetime(2025, 5, 10),
            "date_end": datetime(2025, 5, 12),
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "_id": ObjectId(),
            "platform_id": "mlh-fullstack-05",
            "title": "Full Stack Social Network",
            "platform": "MLH",
            "ps": "Build a full-stack social network with real-time notifications using Next.js, Node.js, and MongoDB.",
            "difficulty": "Medium",
            "required_skills": ["Next.js", "Node.js", "MongoDB"],
            "prize_pool": 100000,
            "date_start": datetime(2025, 6, 1),
            "date_end": datetime(2025, 6, 3),
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]
    
    try:
        # Drop existing collections
        db['hackathons'].drop()
        print("✅ Dropped existing hackathons collection")
        
        # Insert hackathons
        result = db['hackathons'].insert_many(hackathons_data)
        print(f"✅ Inserted {len(result.inserted_ids)} hackathons")
        
        # Create indexes
        db['hackathons'].create_index('platform_id', unique=True)
        db['hackathons'].create_index('platform')
        db['hackathons'].create_index('difficulty')
        db['hackathons'].create_index('required_skills')
        print("✅ Created indexes")
        
        # Verify data
        count = db['hackathons'].count_documents({})
        print(f"✅ Total hackathons in database: {count}")
        
        print("\n📋 Sample hackathons:")
        for hackathon in db['hackathons'].find().limit(3):
            print(f"  - {hackathon['title']} ({hackathon['platform']})")
        
        print("\n✅ MongoDB seeding completed successfully!")
        
    except Exception as e:
        print(f"❌ Error seeding database: {e}")
        import traceback
        traceback.print_exc()
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(seed_mongodb())
