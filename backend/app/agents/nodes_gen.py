import json
from groq import Groq
from app.core.config import settings
from app.utils.prompts import GENERATOR_PROMPT

# Initialize the Groq client once
client = Groq(api_key=settings.GROQ_API_KEY)

# Mock boilerplate for when API fails
def _get_mock_boilerplate(selected_match, user_skills):
    """Generate mock boilerplate code when API fails"""
    tech_stack = ", ".join(user_skills[:3]) if user_skills else "React, Node.js, PostgreSQL"
    
    return {
        "boilerplate_code": {
            "content": f"""# {selected_match.get('title', 'Hackathon')} - Project Boilerplate

## Overview
This is a starter template optimized for winning {selected_match.get('title', 'the hackathon')}.

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Backend**: Node.js with Express/FastAPI
- **Stack**: {tech_stack}

## Project Structure
```
project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   └── package.json
├── backend/
│   ├── app.py / server.js
│   ├── models/
│   ├── routes/
│   └── requirements.txt / package.json
└── docker-compose.yml
```

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install` / `pip install -r requirements.txt`
3. Configure environment variables in `.env`
4. Run development server: `npm run dev`
5. Open http://localhost:3000 in your browser

## Key Features
- ✅ Responsive design with Tailwind CSS
- ✅ Authentication & Authorization
- ✅ Real-time updates with WebSockets
- ✅ Database integration
- ✅ API documentation with Swagger

## Deployment
Ready to deploy on Vercel, Netlify, Heroku, or AWS.

Good luck! 🚀
"""
        }
    }

async def generate_boilerplate_node(state):
    print("---GENERATING WINNING BOILERPLATE (via Groq)---")
    
    # 1. Safety Check
    selected_match = state.get('selected_hackathon')
    if not selected_match:
        return {"boilerplate_code": {"content": "// No hackathon selected for generation."}}
    
    selected_ps = selected_match.get('ps', 'No Problem Statement')
    user_skills = state.get('skills', [])
    
    # 2. Construct the prompt
    prompt = f"{GENERATOR_PROMPT}\nProblem Statement: {selected_ps}\nUser Stack: {user_skills}"
    
    try:
        # 3. Request code generation from Groq
        # Llama-3.3-70b is currently the top-tier model on Groq for coding
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "system", 
                    "content": "You are an expert software architect. Output only clean, functional code."
                },
                {
                    "role": "user", 
                    "content": prompt
                }
            ],
            model="llama-3.3-70b-versatile",
            temperature=0.3, # Low temperature for precise code output
            max_tokens=2048,
        )

        code_result = chat_completion.choices[0].message.content
        
        return {"boilerplate_code": {"content": code_result}}

    except Exception as e:
        print(f"⚠️ Groq Generation Error: {e}")
        print("💡 Using mock boilerplate as fallback")
        # Return mock boilerplate instead of error message
        return _get_mock_boilerplate(selected_match, user_skills)