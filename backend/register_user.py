"""Register test user via API"""
import httpx
import asyncio

async def register_test_user():
    async with httpx.AsyncClient() as client:
        try:
            # Delete existing user first
            from pymongo import MongoClient
            client_db = MongoClient('mongodb://localhost:27017')
            db = client_db['hackquest']
            users = db['users']
            users.delete_one({'email': 'test@example.com'})
            client_db.close()
            print("✅ Old user deleted")
            
            # Register new user via API
            response = await client.post(
                "http://127.0.0.1:8000/api/auth/register",
                json={
                    "email": "test@example.com",
                    "username": "testuser",
                    "password": "password123",
                    "full_name": "Test User"
                },
                timeout=10
            )
            
            print(f"Status: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                print(f"\n✅ USER REGISTRATION SUCCESSFUL!")
                print(f"Token: {data.get('access_token', 'N/A')[:50]}...")
                print(f"User ID: {data.get('user', {}).get('id')}")
                print(f"Email: {data.get('user', {}).get('email')}")
                return True
            else:
                print(f"\n❌ REGISTRATION FAILED!")
                print(f"Error: {response.text}")
                return False
                    
        except Exception as e:
            print(f"❌ Error: {e}")
            return False

if __name__ == "__main__":
    asyncio.run(register_test_user())
