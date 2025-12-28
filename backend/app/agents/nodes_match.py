from app.core.database import get_pinecone_index
import logging

logger = logging.getLogger(__name__)

# Mock hackathons for development/fallback
MOCK_HACKATHONS = [
    {
        "id": "hack_001",
        "score": 0.95,
        "title": "TechVision Hackathon 2025",
        "ps": "Build AI-powered solutions for real-world problems using cutting-edge ML and web technologies"
    },
    {
        "id": "hack_002", 
        "score": 0.88,
        "title": "Web3 Innovation Challenge",
        "ps": "Create decentralized applications that revolutionize digital identity and data ownership"
    },
    {
        "id": "hack_003",
        "score": 0.85,
        "title": "FullStack Excellence Summit",
        "ps": "Build scalable full-stack applications with React, TypeScript, and modern backend frameworks"
    }
]

async def match_hackathons_node(state):
    print("---SEARCHING FOR PERFECT HACKATHONS---")
    
    # Get Pinecone index (lazy initialization)
    pinecone_index = get_pinecone_index()
    
    if not pinecone_index:
        print("⚠️ Pinecone index not available, using mock hackathons for demo")
        # Return mock matches as fallback
        return {"candidate_matches": MOCK_HACKATHONS}
    
    user_dna_text = f"{state['github_summary']} Skills: {', '.join(state['skills'])}"
    # Lazy-load vector engine on first use
    from app.utils.vectorizer import get_vector_engine
    vector_engine = get_vector_engine()
    query_vector = vector_engine.get_embedding(user_dna_text)

    # Search Pinecone for the top 5 matches
    results = pinecone_index.query(
        vector=query_vector,
        top_k=5,
        include_metadata=True
    )

    matches = []
    for res in results['matches']:
        matches.append({
            "id": res['id'],
            "score": res['score'],
            "title": res['metadata']['title'],
            "ps": res['metadata']['problem_statement']
        })

    # If no matches found, use mock data
    if not matches:
        print("⚠️ No matches found in Pinecone, using mock hackathons for demo")
        return {"candidate_matches": MOCK_HACKATHONS}

    return {"candidate_matches": matches}