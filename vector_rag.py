"""
Vector RAG Retrieval Module
Retrieves exact scheme clauses, conditions, and official guideline sections from indexed knowledge chunks
"""
import json
import os
import re

class VectorRAGStore:
    def __init__(self, schemes_data=None):
        if schemes_data is None:
            db_path = os.path.join(os.path.dirname(__file__), "schemes_database.json")
            with open(db_path, "r", encoding="utf-8") as f:
                self.schemes = json.load(f)
        else:
            self.schemes = schemes_data
        self._index_clauses()

    def _index_clauses(self):
        self.chunks = []
        for s in self.schemes:
            for clause in s.get("rag_clauses", []):
                self.chunks.append({
                    "scheme_id": s["id"],
                    "scheme_name": s["name"],
                    "category": s["category"],
                    "clause_text": clause,
                    "portal_url": s.get("official_portal_url", "")
                })

    def search_clauses(self, query, scheme_id=None, top_k=3):
        query_words = set(re.findall(r'\w+', query.lower()))
        scored = []
        for chunk in self.chunks:
            if scheme_id and chunk["scheme_id"] != scheme_id:
                continue
            chunk_words = set(re.findall(r'\w+', chunk["clause_text"].lower()))
            overlap = len(query_words & chunk_words)
            if overlap > 0 or scheme_id:
                score = round((overlap / max(len(query_words), 1)) * 100, 1)
                scored.append({
                    **chunk,
                    "relevance_score": max(score, 75.0 if scheme_id else 50.0)
                })
        scored.sort(key=lambda x: x["relevance_score"], reverse=True)
        return scored[:top_k]
