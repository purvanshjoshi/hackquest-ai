"""Code generation API endpoint with agent integration."""
import logging
import json
from fastapi import APIRouter, HTTPException, status
from datetime import datetime
from typing import Optional, Dict, Any

from app.models.schemas import CodeGenerationRequest, CodeGenerationResponse
from app.core.config import settings
from groq import Groq

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/generate", tags=["generation"])

# Initialize Groq client for code generation
groq_client = Groq(api_key=settings.GROQ_API_KEY)

# Lazy-loaded agent to prevent heavy startup
_agent_cache = None


def get_agent():
    """Lazy-load agent only when needed."""
    global _agent_cache
    if _agent_cache is None:
        try:
            from app.agents import app_agent
            _agent_cache = app_agent
            logger.info("Agent loaded on-demand")
        except Exception as e:
            logger.error(f"Failed to load agent: {e}")
            raise
    return _agent_cache


def generate_code_with_llm(prompt: str, language: str = "python", framework: Optional[str] = None) -> str:
    """Generate code using LLM (placeholder for actual implementation)."""
    code_templates = {
        "python": {
            None: f"""# Generated Python code
# Prompt: {prompt}

def main():
    # Your implementation here
    pass

if __name__ == "__main__":
    main()""",
            "flask": f"""# Generated Flask app
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/endpoint', methods=['POST'])
def endpoint():
    # Implementation: {prompt}
    data = request.json
    return jsonify({{"status": "success"}})

if __name__ == '__main__':
    app.run(debug=True)""",
            "django": f"""# Generated Django view
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(["POST"])
def api_endpoint(request):
    # Implementation: {prompt}
    return JsonResponse({{"status": "success"}})""",
            "fastapi": f"""# Generated FastAPI application
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class RequestData(BaseModel):
    # Define your request schema here
    data: str

@app.post("/api/endpoint")
async def endpoint(request: RequestData):
    # Implementation: {prompt}
    return {{"status": "success", "data": request.data}}

@app.get("/health")
async def health():
    return {{"status": "healthy"}}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)"""
        },
        "javascript": {
            None: f"""// Generated JavaScript code
// Prompt: {prompt}

function main() {{
  // Your implementation here
}}

main();""",
            "react": f"""// Generated React component
import React, {{ useState }} from 'react';

function Component() {{
  const [state, setState] = useState(null);
  // Implementation: {prompt}
  return <div>Component</div>;
}}

export default Component;""",
            "express": f"""// Generated Express server
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/endpoint', (req, res) => {{
  // Implementation: {prompt}
  res.json({{ status: 'success' }});
}});

app.listen(3000);""",
        },
        "typescript": {
            None: f"""// Generated TypeScript code
// Prompt: {prompt}

interface Data {{
  // Define your types here
}}

function main(): void {{
  // Your implementation here
}}

main();""",
        },
    }
    
    language = language.lower()
    framework = framework.lower() if framework else None
    
    if language in code_templates:
        templates = code_templates[language]
        if framework in templates:
            return templates[framework]
        else:
            return templates[None]
    
    return f"""# Generated code
# Language: {language}
# Framework: {framework}
# Prompt: {prompt}
# Code generation not yet implemented for this combination"""


async def generate_boilerplate_with_groq(problem_statement: str, skills: list) -> Dict[str, str]:
    """Generate boilerplate code using Groq API."""
    try:
        prompt = f"""Generate a complete FastAPI + React boilerplate starter code for this hackathon problem.
        
Problem Statement: {problem_statement}

Available Skills: {', '.join(skills)}

Provide the following files:
1. FastAPI backend main.py with basic endpoints
2. React TypeScript component
3. Docker Compose configuration
4. Requirements.txt
5. Package.json

Format the output as JSON with keys: backend, frontend, docker_compose, requirements, package_json"""
        
        response = groq_client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert full-stack developer. Generate clean, production-ready boilerplate code."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            model="llama-3.3-70b-versatile",
            temperature=0.3,
            max_tokens=4096,
            response_format={"type": "json_object"}
        )
        
        content = response.choices[0].message.content
        boilerplate = json.loads(content)
        
        return boilerplate
    
    except Exception as e:
        logger.error(f"Error generating boilerplate with Groq: {e}")
        return {
            "backend": "# Error generating code",
            "frontend": "// Error generating code",
            "docker_compose": "# Error generating code",
            "requirements": "# Error generating code",
            "package_json": "{}"
        }


@router.post("/code", response_model=CodeGenerationResponse)
async def generate_code(request: CodeGenerationRequest):
    """Generate code from natural language prompt."""
    if not request.prompt or len(request.prompt.strip()) == 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Prompt cannot be empty"
        )
    
    try:
        # Generate code
        code = generate_code_with_llm(
            request.prompt,
            request.language,
            request.framework
        )
        
        explanation = f"""Generated {request.language.capitalize()} code {f"using {request.framework}" if request.framework else ""}.
Based on prompt: "{request.prompt}"

This is a template implementation. For production use, integrate with:
- OpenAI GPT-4 Code Interpreter
- Claude 3.5 Sonnet
- Open-source models (CodeLlama, Mistral)
"""
        
        return CodeGenerationResponse(
            code=code,
            language=request.language,
            explanation=explanation,
            timestamp=datetime.utcnow()
        )
    
    except Exception as e:
        logger.error(f"Code generation error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Code generation failed: {str(e)}"
        )


@router.post("/boilerplate")
async def generate_boilerplate(
    request: CodeGenerationRequest
):
    """Generate complete boilerplate for a hackathon."""
    try:
        user_id = request.user_id if hasattr(request, 'user_id') else "anonymous"
        problem_statement = request.problem_statement
        skills = request.skills if hasattr(request, 'skills') else []
        
        if not problem_statement:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="problem_statement is required"
            )
        
        logger.info(f"Generating boilerplate for user {user_id}")
        
        boilerplate = await generate_boilerplate_with_groq(problem_statement, skills or [])
        
        return {
            "success": True,
            "user_id": user_id,
            "boilerplate": boilerplate,
            "timestamp": datetime.utcnow().isoformat()
        }
    
    except Exception as e:
        logger.error(f"Boilerplate generation error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Boilerplate generation failed: {str(e)}"
        )


@router.post("/download/{submission_id}")
async def download_boilerplate(submission_id: str):
    """Download generated boilerplate as ZIP."""
    try:
        # Placeholder for ZIP generation
        return {
            "success": True,
            "download_url": f"/api/generate/files/{submission_id}.zip",
            "message": "Download link generated"
        }
    
    except Exception as e:
        logger.error(f"Download error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Download failed: {str(e)}"
        )


@router.post("/code/explain")
async def explain_code(code: str):
    """Explain existing code using LLM."""
    if not code or len(code.strip()) == 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Code cannot be empty"
        )
    
    try:
        response = groq_client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert code reviewer. Provide clear explanations of code functionality."
                },
                {
                    "role": "user",
                    "content": f"Explain this code in detail:\n\n{code}"
                }
            ],
            model="llama-3.3-70b-versatile",
            temperature=0.5,
            max_tokens=2048
        )
        
        explanation = response.choices[0].message.content
        
        return {
            "success": True,
            "explanation": explanation,
            "timestamp": datetime.utcnow().isoformat()
        }
    
    except Exception as e:
        logger.error(f"Code explanation error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Explanation failed: {str(e)}"
        )


@router.post("/code/optimize")
async def optimize_code(code: str):
    """Optimize code for performance."""
    if not code or len(code.strip()) == 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Code cannot be empty"
        )
    
    try:
        response = groq_client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert performance optimization specialist. Provide actionable optimization suggestions."
                },
                {
                    "role": "user",
                    "content": f"Optimize this code for performance and readability:\n\n{code}"
                }
            ],
            model="llama-3.3-70b-versatile",
            temperature=0.3,
            max_tokens=2048
        )
        
        optimizations = response.choices[0].message.content
        
        return {
            "success": True,
            "optimizations": optimizations,
            "timestamp": datetime.utcnow().isoformat()
        }
    
    except Exception as e:
        logger.error(f"Code optimization error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Optimization failed: {str(e)}"
        )
