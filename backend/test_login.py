"""Test login API"""
import httpx
import json

async def test_login():
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                "http://127.0.0.1:8000/api/auth/login",
                json={
                    "email": "test@example.com",
                    "password": "password123"
                },
                timeout=10
            )
            
            print(f"Status: {response.status_code}")
            print(f"Response: {response.text}")
            
            if response.status_code == 200:
                data = response.json()
                print(f"\n✅ LOGIN SUCCESSFUL!")
                print(f"Token: {data.get('access_token', 'N/A')[:50]}...")
                print(f"User: {data.get('user')}")
            else:
                print(f"\n❌ LOGIN FAILED!")
                try:
                    error = response.json()
                    print(f"Error: {error}")
                except:
                    print(f"Error body: {response.text}")
                    
        except Exception as e:
            print(f"❌ Connection error: {e}")

if __name__ == "__main__":
    import asyncio
    asyncio.run(test_login())
