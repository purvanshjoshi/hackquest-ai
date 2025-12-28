"""Test all major API endpoints"""
import httpx
import asyncio
import json

# Test user token from previous login
TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzYTBjOWNmMy04MjhjLTRjZmQtYjI0NS01MWMxOWMxNjFjNGEiLCJleHAiOjE3NjY5MzA5NDYsImlhdCI6MTc2Njg0NDU0NiwidHlwZSI6ImFjY2VzcyJ9.OheFhTIwR4B5bKPHqzAyqd4BBtvf3DdmYkJqqDe2Tgo"
USER_ID = "3a0c9cf3-828c-4cfd-b245-51c19c161c4a"

async def test_endpoints():
    headers = {"Authorization": f"Bearer {TOKEN}"}
    
    async with httpx.AsyncClient() as client:
        print("=" * 60)
        print("API ENDPOINT TESTS")
        print("=" * 60)
        
        # Test 1: Health
        print("\n[1] GET /api/health")
        try:
            r = await client.get("http://127.0.0.1:8000/api/health", timeout=5)
            print(f"Status: {r.status_code}")
            if r.status_code != 200:
                print(f"ERROR: {r.text}")
        except Exception as e:
            print(f"FAILED: {e}")
        
        # Test 2: Get Profile
        print("\n[2] GET /api/auth/profile")
        try:
            r = await client.get("http://127.0.0.1:8000/api/auth/profile", headers=headers, timeout=5)
            print(f"Status: {r.status_code}")
            if r.status_code == 200:
                print("SUCCESS: Profile retrieved")
            else:
                print(f"ERROR: {r.text}")
        except Exception as e:
            print(f"FAILED: {e}")
        
        # Test 3: Get Matches
        print("\n[3] GET /api/matching/recommendations")
        try:
            r = await client.get("http://127.0.0.1:8000/api/matching/recommendations", headers=headers, timeout=5)
            print(f"Status: {r.status_code}")
            if r.status_code == 200:
                data = r.json()
                print(f"SUCCESS: Got {len(data.get('data', []))} matches")
            else:
                print(f"ERROR: {r.text}")
        except Exception as e:
            print(f"FAILED: {e}")
        
        # Test 4: Agent Analyze
        print("\n[4] POST /api/agent/analyze")
        try:
            r = await client.post(
                "http://127.0.0.1:8000/api/agent/analyze",
                headers=headers,
                json={
                    "user_id": USER_ID,
                    "skills": ["Python", "FastAPI", "React"],
                    "github_summary": "Full-stack developer"
                },
                timeout=10
            )
            print(f"Status: {r.status_code}")
            if r.status_code == 200:
                print("SUCCESS: Agent analysis started")
            else:
                print(f"ERROR: {r.text}")
        except Exception as e:
            print(f"FAILED: {e}")
        
        # Test 5: Generate Code
        print("\n[5] POST /api/generate/boilerplate")
        try:
            r = await client.post(
                "http://127.0.0.1:8000/api/generate/boilerplate",
                headers=headers,
                json={
                    "language": "python",
                    "problem_statement": "Build a TODO app",
                    "skills": ["Python", "FastAPI"]
                },
                timeout=10
            )
            print(f"Status: {r.status_code}")
            if r.status_code == 200:
                print("SUCCESS: Code generated")
            else:
                print(f"ERROR: {r.text[:200]}")
        except Exception as e:
            print(f"FAILED: {e}")
        
        print("\n" + "=" * 60)

if __name__ == "__main__":
    asyncio.run(test_endpoints())
