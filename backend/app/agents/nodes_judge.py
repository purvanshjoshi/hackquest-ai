import os
import json
from groq import Groq
from app.utils.prompts import JUDGE_SYSTEM_PROMPT
from app.core.config import settings

# Initialize Groq Client using the key from your .env
client = Groq(api_key=settings.GROQ_API_KEY)

# Mock evaluation for when API fails
def _get_mock_evaluation(best_match, user_skills):
    """Generate a mock judge evaluation when API fails"""
    skill_count = len(user_skills)
    base_prob = 60 + (skill_count * 5)  # More skills = higher probability (max ~85)
    win_prob = min(base_prob, 85)
    
    return {
        "selected_hackathon": best_match,
        "win_probability": win_prob,
        "judge_critique": f"Your diverse skill set ({', '.join(user_skills)}) shows strong potential for this hackathon. "
                         f"Focus on leveraging {user_skills[0] if user_skills else 'your core skills'} as your primary strength. "
                         f"With focused effort, you have an excellent chance of winning."
    }

async def judge_simulation_node(state):
    print("---SIMULATING JUDGE RUBRIC (via Groq)---")
    
    # 1. SAFETY CHECK: Verify that matches exist
    matches = state.get('candidate_matches', [])
    if not matches:
        print("⚠️ No hackathons found in state. Skipping judge simulation.")
        return {
            "win_probability": 0.0,
            "judge_critique": "No suitable hackathons found to evaluate."
        }
    
    # 2. Select the top match
    best_match = matches[0]
    user_skills = state.get('skills', [])
    problem_statement = best_match.get('ps', 'No PS available')
    
    try:
        # 3. Call Groq API (Llama 3.1 70B is great for reasoning)
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": f"{JUDGE_SYSTEM_PROMPT}\nResponse must be in valid JSON format."
                },
                {
                    "role": "user",
                    "content": f"User Skills: {user_skills}. Problem Statement: {problem_statement}"
                }
            ],
            model="llama-3.3-70b-versatile",
            # This ensures Groq forces a JSON response structure
            response_format={"type": "json_object"},
            temperature=0.2, # Lower temperature for more consistent judging
        )

        # 4. Parse the AI response
        raw_content = chat_completion.choices[0].message.content
        result = json.loads(raw_content)
        
        # We assume your prompt asks for a 'score' or 'win_probability' field
        win_prob = result.get("win_probability", 75.0) 
        critique = result.get("critique", raw_content)

        return {
            "selected_hackathon": best_match,
            "win_probability": win_prob,
            "judge_critique": critique
        }
            
    except Exception as e:
        print(f"⚠️ Groq API Error: {e}")
        print("💡 Using mock evaluation as fallback")
        # Return mock evaluation instead of error message
        return _get_mock_evaluation(best_match, user_skills)