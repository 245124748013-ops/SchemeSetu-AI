"""
SchemeSetu AI - Standalone Universal Search Module (Backend Mirror)
"""
import sys
import os

backend_dir = os.path.dirname(__file__)
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
    orch = get_orchestrator()
    return orch.search(query, profile=profile, top_k=top_k)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        query_text = " ".join(sys.argv[1:])
    else:
        query_text = "scheme for SC ST woman owned micro business in Telangana"
    res = search(query_text, top_k=5)
    print("Found", len(res["schemes"]), "schemes for:", query_text)
    for idx, s in enumerate(res["schemes"], 1):
        print(f"{idx}. {s['name']} ({s['level']} - {s['state']}) - {s['combined_confidence']}%")
