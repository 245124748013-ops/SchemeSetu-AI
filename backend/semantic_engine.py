"""
Semantic Matching Engine
Computes cosine similarity between user context and scheme embeddings/text
"""
import math
import re
from collections import Counter

class SemanticEngine:
    def __init__(self, schemes_data=None):
        import json, os
        if schemes_data is None:
            db_path = os.path.join(os.path.dirname(__file__), "schemes_database.json")
            with open(db_path, "r", encoding="utf-8") as f:
                self.schemes = json.load(f)
        else:
            self.schemes = schemes_data
        self._build_index()

    def _tokenize(self, text):
        tokens = re.findall(r'\w+', text.lower())
        # stopwords removal
        stopwords = {
            "the", "a", "an", "in", "on", "for", "to", "and", "or", "is", "of", "with", "by", 
            "at", "from", "as", "into", "through", "during", "including", "per", "all", "are", "be"
        }
        return [t for t in tokens if t not in stopwords and len(t) > 1]

    def _build_index(self):
        self.scheme_docs = {}
        for s in self.schemes:
            doc_text = f"{s['name']} {s['summary']} {s['category']} {s['target_beneficiary']} {' '.join(s.get('tags', []))} {' '.join(s.get('rag_clauses', []))}"
            tokens = self._tokenize(doc_text)
            self.scheme_docs[s["id"]] = Counter(tokens)

    def _cosine_similarity(self, vec1, vec2):
        intersection = set(vec1.keys()) & set(vec2.keys())
        numerator = sum([vec1[x] * vec2[x] for x in intersection])
        sum1 = sum([vec1[x] ** 2 for x in vec1.keys()])
        sum2 = sum([vec2[x] ** 2 for x in vec2.keys()])
        denominator = math.sqrt(sum1) * math.sqrt(sum2)
        if not denominator:
            return 0.0
        return float(numerator) / denominator

    def compute_similarity(self, profile_query, scheme_id):
        query_tokens = self._tokenize(profile_query)
        # Add semantic expansion terms based on profile
        expanded = list(query_tokens)
        if "farmer" in query_tokens or "kisan" in query_tokens or "agriculture" in query_tokens:
            expanded.extend(["crop", "land", "cultivation", "kisan", "pmkisan", "irrigation", "agri"])
        if "woman" in query_tokens or "female" in query_tokens or "mahila" in query_tokens:
            expanded.extend(["women", "shg", "standup", "sukanya", "self-help", "maternal"])
        if "business" in query_tokens or "msme" in query_tokens or "shop" in query_tokens or "startup" in query_tokens:
            expanded.extend(["loan", "mudra", "pmegp", "subsidy", "working capital", "credit", "enterprise", "udyam"])
        if "artisan" in query_tokens or "craft" in query_tokens or "carpenter" in query_tokens or "weaver" in query_tokens:
            expanded.extend(["vishwakarma", "toolkit", "stipend", "handicraft", "trade", "traditional"])
        if "vendor" in query_tokens or "thela" in query_tokens or "hawker" in query_tokens:
            expanded.extend(["svanidhi", "street vendor", "working capital", "urban", "micro loan"])
        if "student" in query_tokens or "youth" in query_tokens or "college" in query_tokens:
            expanded.extend(["scholarship", "tuition", "post matric", "pmkvy", "skill", "training", "free"])

        query_vec = Counter(expanded)
        doc_vec = self.scheme_docs.get(scheme_id, Counter())
        sim = self._cosine_similarity(query_vec, doc_vec)
        # Normalize into a 0 - 100 percentage scale with baseline boost
        score = min(100.0, round(sim * 130 + 15, 1)) if sim > 0.05 else round(sim * 100, 1)
        return score
