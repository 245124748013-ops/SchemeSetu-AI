"""
Agentic AI Orchestrator Layer
Plans execution steps, triggers rule filtering, semantic vector matching, RAG clause retrieval,
synthesizes plain-language explanations, and computes combined confidence scores.
Includes natural language query parsing with intent-aware ranking.
"""
import json
import os
import re
from typing import Dict, Any, List, Optional
from rule_engine import RuleEngine
from semantic_engine import SemanticEngine
from vector_rag import VectorRAGStore
from query_parser import QueryParser

class AgentOrchestrator:
    def __init__(self):
        db_path = os.path.join(os.path.dirname(__file__), "schemes_database.json")
        with open(db_path, "r", encoding="utf-8") as f:
            self.schemes = json.load(f)
        self.scheme_lookup = {s["id"]: s for s in self.schemes}
        self.rule_engine = RuleEngine(self.schemes)
        self.semantic_engine = SemanticEngine(self.schemes)
        self.vector_rag = VectorRAGStore(self.schemes)
        self.query_parser = QueryParser()

    def search(self, query: str, profile: Optional[Dict[str, Any]] = None, top_k: int = 10) -> Dict[str, Any]:
        """
        Unified search endpoint for free-text natural language queries.
        Extracts implicit profile attributes and intent, filters out stop words,
        and routes through the 4-layer AI engine.
        """
        parsed_profile, clean_tokens, intent = self.query_parser.parse_query(query, profile)
        
        # Execute discovery with intent-aware scoring
        discovery_result = self.orchestrate_discovery(parsed_profile, search_intent=intent, clean_tokens=clean_tokens)
        
        ranked = discovery_result.get("ranked_schemes", [])[:top_k]
        
        return {
            "query": query,
            "parsed_profile": parsed_profile,
            "detected_intent": intent,
            "clean_tokens": clean_tokens,
            "total_matches": discovery_result.get("eligible_matches_count", len(ranked)),
            "schemes": ranked,
            "execution_trace": discovery_result.get("execution_trace", [])
        }

    def orchestrate_discovery(self, profile: Dict[str, Any], search_intent: Optional[Dict[str, Any]] = None, clean_tokens: Optional[List[str]] = None) -> Dict[str, Any]:
        trace = []
        user_gender = profile.get("gender", "All")
        user_occ = profile.get("occupation", "All")
        has_conflict = False
        conflict_msg = ""

        if user_gender == "Male" and "women" in user_occ.lower():
            has_conflict = True
            conflict_msg = "Validation Error: You selected Gender as 'Male', but Main Occupation is set to 'Women Entrepreneur'. Male applicants are not eligible for women-exclusive welfare & entrepreneurship schemes."
            trace.append({
                "step": 1,
                "name": "Profile Conflict Error",
                "status": "error",
                "details": conflict_msg
            })

        # Step 1: Constraint & Profile Validation
        trace.append({
            "step": 1,
            "name": "Profile Ingestion & Normalization",
            "status": "completed",
            "details": f"Parsed profile: Age={profile.get('age')}, Income=Rs. {profile.get('income', 0):,}, Category={profile.get('category')}, Gender={profile.get('gender')}, Occupation={profile.get('occupation')}, State={profile.get('state', 'National')}"
        })

        # Step 2: Deterministic Rule-Based Cutoff Filter
        rule_evals = self.rule_engine.filter_all(profile)
        eligible_count = sum(1 for r in rule_evals if r["is_eligible"])
        trace.append({
            "step": 2,
            "name": "Rule-Based Deterministic Cutoff Evaluation",
            "status": "completed",
            "details": f"Filtered {len(self.schemes)} central/state schemes against strict cutoffs. Shortlisted {eligible_count} candidate schemes."
        })

        # Step 3: Semantic Vector Similarity & Sector Alignment
        user_occ = profile.get("occupation", "All")
        user_state = profile.get("state")
        user_gender = profile.get("gender", "All")
        user_cat = profile.get("category", "General")
        
        profile_query = f"{user_occ} {user_gender} {user_cat} looking for government support, loans, grants, livelihood and subsidies in {user_state or ''}"
        if clean_tokens:
            profile_query += " " + " ".join(clean_tokens)
        
        all_evaluated = []
        for r in rule_evals:
            s_id = r["scheme_id"]
            scheme = self.scheme_lookup[s_id]
            rule_score = r["rule_score"]
            semantic_score = self.semantic_engine.compute_similarity(profile_query, s_id)
            
            scheme_occs = scheme.get("eligibility_criteria", {}).get("occupations", ["All"])
            scheme_cat = scheme.get("category", "")
            scheme_cat_lower = scheme_cat.lower()
            scheme_name_lower = scheme["name"].lower()
            scheme_summary_lower = scheme.get("summary", "").lower()
            scheme_benefit_lower = scheme.get("financial_benefit", "").lower()
            target_ben_lower = scheme.get("target_beneficiary", "").lower()
            
            # --- Sector & Profession Alignment Calculation ---
            sector_bonus = 0.0
            is_core_sector = False
            is_primary_profession_match = False
            
            # Core Category Matching
            if user_occ == "Farmer":
                if "Agriculture" in scheme_cat or "Fisheries" in scheme_cat:
                    is_primary_profession_match = True
                    sector_bonus += 36.0
                    is_core_sector = True
                elif "Clean Energy" in scheme_cat and ("solar" in scheme_name_lower or "pump" in scheme_name_lower or "feeder" in scheme_name_lower):
                    is_primary_profession_match = True
                    sector_bonus += 32.0
                    is_core_sector = True
                elif "Women" in scheme_cat or "Social Security" in scheme_cat:
                    # Non-agricultural social safety net for women farmer households
                    sector_bonus += 4.0
            elif user_occ in ["Student", "Youth"]:
                if "Education" in scheme_cat or "Skill" in scheme_cat:
                    is_primary_profession_match = True
                    sector_bonus += 36.0
                    is_core_sector = True
            elif user_occ in ["Women Entrepreneur", "Homemaker"]:
                if user_gender == "Female":
                    if "Women" in scheme_cat:
                        is_primary_profession_match = True
                        sector_bonus += 36.0
                        is_core_sector = True
                    elif "MSME" in scheme_cat:
                        is_primary_profession_match = True
                        sector_bonus += 28.0
                        is_core_sector = True
                    elif "Banking" in scheme_cat or "Credit" in scheme_cat:
                        is_primary_profession_match = True
                        sector_bonus += 24.0
                        is_core_sector = True
                else:
                    # Male applicant with Women Entrepreneur selection is penalized / disqualified
                    sector_bonus -= 40.0
            elif user_occ == "Artisan":
                if "Handloom" in scheme_cat or "Textile" in scheme_cat or "Artisan" in scheme_name_lower or "vishwakarma" in scheme_name_lower:
                    is_primary_profession_match = True
                    sector_bonus += 36.0
                    is_core_sector = True
            elif user_occ == "Street Vendor":
                if "Vendor" in scheme_name_lower or "svanidhi" in scheme_name_lower:
                    is_primary_profession_match = True
                    sector_bonus += 36.0
                    is_core_sector = True
            elif user_occ == "MSME Owner":
                if "MSME" in scheme_cat or "Entrepreneur" in scheme_cat:
                    is_primary_profession_match = True
                    sector_bonus += 36.0
                    is_core_sector = True
            elif user_occ == "Daily Wage Worker":
                if "Labour" in scheme_cat or "Social Security" in scheme_cat or "Awas" in scheme_name_lower:
                    is_primary_profession_match = True
                    sector_bonus += 30.0
                    is_core_sector = True
            elif user_occ == "Senior Citizen":
                if "Pension" in scheme_name_lower or "Old Age" in scheme_name_lower or "Senior Citizen" in scheme_occs:
                    is_primary_profession_match = True
                    sector_bonus += 36.0
                    is_core_sector = True

            # Specific occupation named in target list (excluding generic "All")
            specific_occs = [o.lower() for o in scheme_occs if o != "All"]
            if user_occ.lower() in specific_occs or any(user_occ.lower() in o for o in specific_occs):
                if not is_primary_profession_match:
                    sector_bonus += 8.0
                is_core_sector = True

            # State priority bonus (Citizen's resident state)
            is_own_state = False
            if user_state and user_state not in ["National / All India", "All India", "National"]:
                if scheme.get("level") == "State" and scheme.get("state") == user_state:
                    sector_bonus += 25.0
                    is_own_state = True
                elif scheme.get("level") == "Central":
                    sector_bonus += 12.0
                else:
                    # Different state scheme - severe penalty
                    sector_bonus -= 50.0

            # Affirmative action priority bonus (SC/ST/Women)
            if user_gender == "Female":
                if "Women" in scheme_cat or "women" in target_ben_lower or "female" in target_ben_lower:
                    sector_bonus += 8.0
            if user_cat in ["SC", "ST"]:
                if "SC" in target_ben_lower or "st" in target_ben_lower or "dalit" in scheme_name_lower or "tribal" in scheme_name_lower:
                    sector_bonus += 15.0

            # --- Intent-Specific Penalties and Boosts ---
            if search_intent:
                # 1. Micro Business / Entrepreneurship intent
                if search_intent.get("is_micro_business"):
                    if "MSME" in scheme_cat or "Entrepreneur" in scheme_cat or "loan" in scheme_benefit_lower or "grant" in scheme_benefit_lower:
                        sector_bonus += 25.0
                        is_core_sector = True
                    # Disqualify completely unrelated non-business schemes
                    if "Education & Student Aid" in scheme_cat or "scholarship" in scheme_name_lower:
                        sector_bonus -= 60.0
                    if "Art & Culture" in scheme_cat or "performing" in scheme_name_lower:
                        sector_bonus -= 60.0
                    if "Social Welfare & Safety Nets" in scheme_cat and "shelter" in scheme_name_lower:
                        sector_bonus -= 60.0
                    if "export" in scheme_name_lower or "apeda" in scheme_name_lower:
                        sector_bonus -= 50.0

                # 2. Loan / Credit intent
                if search_intent.get("is_loan_or_credit"):
                    if any(term in scheme_benefit_lower or term in scheme_name_lower for term in ["loan", "credit", "mudra", "stand-up", "term loan", "subvention"]):
                        sector_bonus += 30.0
                        is_core_sector = True
                    # Strong penalty against shelter homes, orphanages, old-age homes
                    if any(term in scheme_name_lower or term in scheme_summary_lower for term in ["shelter", "hostel", "swadhar", "destitute", "widow home"]):
                        sector_bonus -= 60.0

                # 3. Grant / Subsidy intent
                if search_intent.get("is_grant_or_subsidy"):
                    if "grant" in scheme_benefit_lower or "subsidy" in scheme_benefit_lower or "dbt" in scheme_benefit_lower:
                        sector_bonus += 20.0
                        is_core_sector = True

                # 4. SC / ST Centric Intent
                if search_intent.get("is_sc_st_centric"):
                    if "dalit" in scheme_name_lower or "sc" in target_ben_lower or "st" in target_ben_lower:
                        sector_bonus += 25.0
                        is_core_sector = True

                # 5. Women Centric Intent
                if search_intent.get("is_women_centric"):
                    if "women" in scheme_cat_lower or "mahila" in scheme_name_lower or "standup" in s_id or "stand-up" in scheme_name_lower:
                        sector_bonus += 20.0
                        is_core_sector = True

            # Direct Clean Token Match Boost (Search Query Precision)
            is_direct_token_match = False
            if clean_tokens:
                for token in clean_tokens:
                    tok_lower = token.lower()
                    if len(tok_lower) >= 3:
                        if tok_lower in scheme_name_lower or tok_lower in s_id.lower():
                            sector_bonus += 60.0
                            is_core_sector = True
                            is_primary_profession_match = True
                            is_exact_intent = True
                            is_direct_token_match = True
                        elif tok_lower in scheme_summary_lower or tok_lower in scheme_benefit_lower:
                            sector_bonus += 25.0
                            is_core_sector = True

            # Flagship scheme bonus (quality bonus)
            is_flagship = any("flagship" in t.lower() for t in scheme.get("tags", [])) or (not s_id.startswith("central-gov-") and not s_id.startswith("state-"))
            if is_flagship:
                sector_bonus += 6.0

            # Special Flagship Match Direct Boost
            if user_cat in ["SC", "ST"] and user_state == "Telangana" and s_id == "dalit-bandhu-telangana":
                sector_bonus += 40.0
                is_core_sector = True
            if (user_gender == "Female" or user_cat in ["SC", "ST"]) and s_id == "standup-india-flagship":
                sector_bonus += 35.0
                is_core_sector = True
            if (user_occ in ["Women Entrepreneur", "MSME Owner", "Entrepreneur"]) and s_id == "pmegp-flagship":
                sector_bonus += 30.0
                is_core_sector = True
            if (user_occ in ["Women Entrepreneur", "MSME Owner", "Entrepreneur"]) and s_id == "pm-mudra-flagship":
                sector_bonus += 28.0
                is_core_sector = True

            # Determine exact intent match
            is_exact_intent = False
            if search_intent:
                if search_intent.get("is_loan_or_credit"):
                    if any(term in scheme_benefit_lower or term in scheme_name_lower for term in ["loan", "credit", "mudra", "stand-up", "term loan", "subvention", "margin money", "soft loan"]):
                        is_exact_intent = True
                elif search_intent.get("is_micro_business"):
                    if "MSME" in scheme_cat or any(term in scheme_benefit_lower or term in scheme_name_lower for term in ["dalit bandhu", "stand-up", "pmegp", "mudra", "micro-enterprise", "startup", "margin money", "capital subsidy"]):
                        is_exact_intent = True

            # Combined Confidence Score Formula
            if is_direct_token_match:
                combined_confidence = 99.0
            elif not r["is_eligible"]:
                combined_confidence = round(max(10.0, min(45.0, (0.25 * rule_score) + (0.20 * semantic_score) + (sector_bonus * 0.2))), 1)
            else:
                raw_score = (0.40 * rule_score) + (0.25 * semantic_score) + sector_bonus
                combined_confidence = round(min(99.0, max(50.0, raw_score)), 1)

            all_evaluated.append({
                "scheme_id": scheme["id"],
                "name": scheme["name"],
                "ministry": scheme["ministry"],
                "category": scheme["category"],
                "level": scheme["level"],
                "state": scheme.get("state") or (scheme.get("eligibility_criteria", {}).get("states", ["All"])[0] if scheme.get("eligibility_criteria", {}).get("states") else "All India"),
                "occupations": scheme.get("eligibility_criteria", {}).get("occupations", ["All"]),
                "eligibility_criteria": scheme.get("eligibility_criteria", {}),
                "summary": scheme["summary"],
                "financial_benefit": scheme.get("financial_benefit", ""),
                "combined_confidence": combined_confidence,
                "rule_score": rule_score,
                "semantic_score": semantic_score,
                "is_core_sector": is_core_sector,
                "is_primary_profession_match": is_primary_profession_match,
                "is_exact_intent": is_exact_intent,
                "is_own_state": is_own_state,
                "is_flagship": is_flagship,
                "is_eligible": r["is_eligible"],
                "passed_criteria": r["passed_criteria"],
                "failed_criteria": r["failed_criteria"],
                "required_documents": scheme.get("required_documents", []),
                "application_process": scheme.get("application_process", ""),
                "official_portal_url": scheme.get("official_portal_url", scheme.get("portal_url", "")),
                "_rule_eval": r,
                "_raw_scheme": scheme
            })

        # Step 4: Re-ranking and Balanced Sector Selection
        if clean_tokens:
            eligible_schemes = [
                s for s in all_evaluated 
                if s["is_eligible"] or any(t.lower() in s["name"].lower() or t.lower() in s["scheme_id"].lower() for t in clean_tokens if len(t) >= 3)
            ]
        else:
            eligible_schemes = [s for s in all_evaluated if s["is_eligible"]]
        
        # Deduplicate schemes by name
        unique_eligible = []
        seen_names = set()
        for sc in sorted(eligible_schemes, key=lambda x: x["combined_confidence"], reverse=True):
            clean_name = sc["name"].strip().lower()
            if clean_name not in seen_names:
                seen_names.add(clean_name)
                unique_eligible.append(sc)

        # Split into resident state schemes and central schemes
        state_schemes = [s for s in unique_eligible if s["level"] == "State" and (user_state in [s["state"], "All India", "National / All India"] or user_state is None)]
        central_schemes = [s for s in unique_eligible if s["level"] == "Central"]
        
        state_schemes.sort(key=lambda x: (1 if x.get("is_exact_intent") else 0, 1 if x.get("is_primary_profession_match") else 0, 1 if x["is_core_sector"] else 0, x["combined_confidence"]), reverse=True)
        central_schemes.sort(key=lambda x: (1 if x.get("is_exact_intent") else 0, 1 if x.get("is_primary_profession_match") else 0, 1 if x["is_core_sector"] else 0, x["combined_confidence"]), reverse=True)

        # Build balanced top recommendations
        balanced_top = []
        max_len = max(len(state_schemes), len(central_schemes)) if (state_schemes or central_schemes) else 0
        for i in range(max_len):
            if i < len(central_schemes):
                balanced_top.append(central_schemes[i])
            if i < len(state_schemes):
                balanced_top.append(state_schemes[i])
            if len(balanced_top) >= 50:
                break

        # Re-sort final recommendations by exact intent, primary profession, core sector, and combined_confidence
        balanced_top.sort(key=lambda x: (1 if x.get("is_exact_intent") else 0, 1 if x.get("is_primary_profession_match") else 0, 1 if x["is_core_sector"] else 0, x["combined_confidence"]), reverse=True)

        # Fast JIT RAG clause retrieval & explanation for final shortlisted schemes
        for sc in balanced_top:
            top_clauses = self.vector_rag.search_clauses(profile_query, scheme_id=sc["scheme_id"], top_k=2)
            sc["retrieved_clauses"] = [c["clause_text"] for c in top_clauses]
            sc["personalized_explanation"] = self._generate_personalized_explanation(profile, sc["_raw_scheme"], sc["_rule_eval"], sc["combined_confidence"])
            sc.pop("_rule_eval", None)
            sc.pop("_raw_scheme", None)

        trace.append({
            "step": 3,
            "name": "Vector RAG Clause Retrieval & Semantic Embeddings",
            "status": "completed",
            "details": f"Retrieved specific clause chunks and computed vector cosine similarities for candidate schemes across {len(self.schemes)} total database schemes."
        })

        trace.append({
            "step": 4,
            "name": "Agentic Re-Ranking & Confidence Score Synthesis",
            "status": "completed",
            "details": f"Applied multi-factor score synthesis with sector-first ranking. Shortlisted {len(balanced_top)} diverse high-relevance schemes ({len([s for s in balanced_top if s['level'] == 'State'])} State + {len([s for s in balanced_top if s['level'] == 'Central'])} Central)."
        })

        return {
            "profile": profile,
            "has_conflict": has_conflict,
            "conflict_message": conflict_msg,
            "execution_trace": trace,
            "total_evaluated": len(self.schemes),
            "eligible_matches_count": len(unique_eligible),
            "ranked_schemes": balanced_top
        }

    def _generate_personalized_explanation(self, profile, scheme, rule_eval, score):
        name = profile.get("name", "Citizen")
        age = profile.get("age", 30)
        occ = profile.get("occupation", "Applicant")
        cat = profile.get("category", "General")
        gender = profile.get("gender", "Individual")
        
        if rule_eval["is_eligible"]:
            reasons = ", ".join(rule_eval["passed_criteria"][:2])
            return f"Hello {name}, as a {gender} {occ} aged {age} from {cat} category, you are a prime beneficiary for {scheme['name']}. You qualify because {reasons.lower()}. You can claim up to {scheme.get('financial_benefit', 'the maximum eligible government assistance')} with simplified digital documentation."
        else:
            issue = rule_eval["failed_criteria"][0] if rule_eval["failed_criteria"] else "specific eligibility restrictions"
            return f"Notice for {name}: While your profile as {occ} has high semantic relevance ({score}%), you currently do not meet standard rule cutoff: {issue}."
