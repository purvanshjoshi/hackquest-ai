import asyncio
import sys
sys.path.insert(0, 'D:\\hackathon\\hackquest-ai\\backend')

from pymongo import MongoClient
from bson.objectid import ObjectId
from datetime import datetime
import hashlib

def create_user():
    try:
        client = MongoClient('mongodb://localhost:27017')
        db = client['hackquest']
        users = db['users']
        
        # Check if user exists
        existing = users.find_one({'email': 'test@example.com'})
        if existing:
            print('✅ User already exists')
            client.close()
            return
        
        # Simple password hash (for testing)
        password_hash = hashlib.sha256('password123'.encode()).hexdigest()
        
        # Create test user
        user_doc = {
            '_id': ObjectId(),
            'email': 'test@example.com',
            'username': 'testuser',
            'password_hash': password_hash,
            'full_name': 'Test User',
            'avatar_url': None,
            'github_username': None,
            'skills': [],
            'bio': 'Test account',
            'created_at': datetime.utcnow(),
            'updated_at': datetime.utcnow(),
            'is_active': True,
        }
        
        result = users.insert_one(user_doc)
        print('✅ Test user created successfully!')
        print('📧 Email: test@example.com')
        print('🔐 Password: password123')
        
        client.close()
    except Exception as e:
        print(f'❌ Error: {e}')

if __name__ == "__main__":
    create_user()
