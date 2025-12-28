"""Reset users and register test user"""
from pymongo import MongoClient
import httpx
import asyncio

async def main():
    # Delete all users
    client = MongoClient('mongodb://localhost:27017')
    db = client['hackquest']
    users = db['users']
    
    result = users.delete_many({})
    print(f"Deleted {result.deleted_count} users from database")
    client.close()
    
    # Register fresh test user via API
    async with httpx.AsyncClient() as http_client:
        try:
            response = await http_client.post(
                "http://127.0.0.1:8000/api/auth/register",
                json={
                    "email": "test@example.com",
                    "username": "testuser",
                    "password": "password123",
                    "full_name": "Test User"
                },
                timeout=10
            )
            
            if response.status_code == 200:
                print("\n[SUCCESS] User registered!")
                data = response.json()
                print(f"Email: {data['user']['email']}")
                print(f"Username: {data['user']['username']}")
                print(f"Token: {data['access_token'][:50]}...")
                
                # Now test login
                print("\n[TESTING] Login with new user...")
                login_response = await http_client.post(
                    "http://127.0.0.1:8000/api/auth/login",
                    json={
                        "email": "test@example.com",
                        "password": "password123"
                    },
                    timeout=10
                )
                
                if login_response.status_code == 200:
                    print("[SUCCESS] Login works!")
                    login_data = login_response.json()
                    print(f"Token: {login_data['access_token'][:50]}...")
                else:
                    print(f"[FAILED] Login failed: {login_response.status_code}")
                    print(login_response.text)
            else:
                print(f"[FAILED] Registration failed: {response.status_code}")
                print(response.text)
        except Exception as e:
            print(f"[ERROR] {e}")

if __name__ == "__main__":
    asyncio.run(main())
