"""
SchemeSetu AI - Standalone Universal Search Module
Evaluates natural language queries, parses citizen profile and intent,
and executes the 4-layer AI platform (Rules -> Vectors -> RAG -> Re-Ranking).
"""
import sys
import os
import json

# Ensure backend directory is in python path
backend_dir = os.path.join(os.path.dirname(__file__), "backend")
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from agent_orchestrator import AgentOrchestrator
from query_parser import QueryParser

_orchestrator_instance = None

def get_orchestrator():
    global _orchestrator_instance
    if _orchestrator_instance is None:
        _orchestrator_instance = AgentOrchestrator()
    return _orchestrator_instance

def search(query: str, profile: dict = None, top_k: int = 10):
    """
    Core search entrypoint.
    Usage:
        from search import search
        results = search("scheme for SC ST woman owned micro business in Telangana")
    """
    orch = get_orchestrator()
    return orch.search(query, profile=profile, top_k=top_k)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        query_text = " ".join(sys.argv[1:])
    else:
        query_text = "scheme for SC ST woman owned micro business in Telangana"
        
    print(f"\n=======================================================")
    print(f"SchemeSetu AI - Universal Query Search Engine")
    print(f"Query: \"{query_text}\"")
    print(f"=======================================================\n")
    
    res = search(query_text, top_k=5)
    
    print("[1] Parsed Demographic Profile:")
    for k, v in res["parsed_profile"].items():
        print(f"  * {k}: {v}")
        
    print(f"\n[2] Extracted Non-Stopword Tokens: {res['clean_tokens']}")
    print(f"[3] Detected Intent Flags:")
    for k, v in res["detected_intent"].items():
        if v:
            print(f"  * {k}: True")
            
    print(f"\n[4] 4-Layer Autonomous AI Execution Trace:")
    for step in res["execution_trace"]:
        print(f"  Step {step['step']}: {step['name']} -> {step['details']}")
        
    print(f"\n[5] Top {len(res['schemes'])} Ranked Flagship Schemes:")
    for idx, s in enumerate(res["schemes"], 1):
        print(f"\n--- Result #{idx} [Confidence: {s['combined_confidence']}%] ---")
        print(f"Scheme Name : {s['name']}")
        print(f"Level/State : {s['level']} ({s['state']})")
        print(f"Category    : {s['category']}")
        print(f"Benefit     : {s['financial_benefit']}")
        print(f"Target      : {s.get('eligibility_criteria', {}).get('occupations', ['All'])}")
        print(f"Portal URL  : {s['official_portal_url']}")
        print(f"Explanation : {s.get('personalized_explanation', '')[:140]}...")
