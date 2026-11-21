"""
Rule-Based Eligibility Module
Evaluates deterministic cutoffs (occupation, gender, state domicile, landownership, age, annual income, social category)
"""
import json
import os

class RuleEngine:
    def __init__(self, schemes_data=None):
        if schemes_data is None:
            db_path = os.path.join(os.path.dirname(__file__), "schemes_database.json")
            with open(db_path, "r", encoding="utf-8") as f:
                self.schemes = json.load(f)
        else:
            self.schemes = schemes_data

    def evaluate_profile(self, profile, scheme):
        criteria = scheme.get("eligibility_criteria", {})
        passed = []
        failed = []
        score_points = 0
        total_checks = 0

        # Hard cutoff flags
        state_disqualified = False
        gender_disqualified = False
        occupation_disqualified = False
        land_disqualified = False

        # 1. State Domicile check (Strict hard cutoff for State Government Schemes)
        user_state = profile.get("state")
        allowed_states = criteria.get("states", ["All"])
        is_state_scheme = scheme.get("level") == "State"
        
        total_checks += 1
        if "All" in allowed_states or user_state in ["National / All India", "All India", "National", "All", None, ""] or (user_state and user_state in allowed_states):
            passed.append(f"Resident state '{user_state or 'All India'}' satisfies domicile requirement")
            score_points += 1
        else:
            state_disqualified = True
            failed.append(f"Scheme is restricted to residents of {', '.join(allowed_states)} (User resides in {user_state or 'Other'})")

        # 2. Gender check (Strict hard cutoff for Women-exclusive schemes)
        user_gender = profile.get("gender", "All")
        allowed_genders = criteria.get("gender", ["All"])
        total_checks += 1

        scheme_name_lower = scheme.get("name", "").lower()
        scheme_cat_lower = scheme.get("category", "").lower()
        target_ben_lower = scheme.get("target_beneficiary", "").lower()

        # Strict identification of women-exclusive schemes
        is_women_exclusive = (
            ("Female" in allowed_genders and "Male" not in allowed_genders and "All" not in allowed_genders) or
            "women" in scheme_cat_lower or
            "mahila" in scheme_name_lower or
            "gruha lakshmi" in scheme_name_lower or
            "ladli behna" in scheme_name_lower or
            "ladki bahin" in scheme_name_lower or
            "shakti scheme" in scheme_name_lower or
            "women only" in target_ben_lower or
            "women entrepreneur" in scheme_name_lower or
            (scheme.get("name") == "Stand-Up India Scheme" and user_gender == "Male" and profile.get("category") not in ["SC", "ST"])
        )

        if user_gender == "Male" and is_women_exclusive:
            gender_disqualified = True
            failed.append(f"Scheme is strictly restricted to Women beneficiaries (User is Male)")
        elif "All" in allowed_genders or user_gender in allowed_genders:
            passed.append(f"Gender '{user_gender}' matches eligible categories ({', '.join(allowed_genders)})")
            score_points += 1
        else:
            gender_disqualified = True
            failed.append(f"Scheme is restricted to {', '.join(allowed_genders)} (User is {user_gender})")

        # 3. Occupation / Profession check (Strict hard cutoff for specialized schemes)
        user_occ = profile.get("occupation", "All")
        allowed_occs = criteria.get("occupations", ["All"])
        total_checks += 1
        
        # Immediate conflict check: Male citizen cannot select Women Entrepreneur
        if user_gender == "Male" and "women" in user_occ.lower():
            occupation_disqualified = True
            failed.append("Profile Conflict Error: Male applicants cannot apply under 'Women Entrepreneur' category")
            occ_matches = False
        else:
            occ_matches = False
        if "All" in allowed_occs or user_occ in allowed_occs:
            occ_matches = True
        else:
            # Semantic aliases:
            # 'Homemaker' matches 'Women Entrepreneur', 'Self Employed' in SHG schemes
            # 'Farmer' matches 'Cultivator', 'Smallholder'
            # 'Artisan' matches 'Weaver', 'Craftsperson'
            # 'Student' matches 'Youth', 'Unemployed'
            u_lower = user_occ.lower()
            for o in allowed_occs:
                o_lower = o.lower()
                if u_lower in o_lower or o_lower in u_lower:
                    occ_matches = True
                    break
                if u_lower in ['senior citizen', 'elderly', 'retired', 'senior']:
                    if any(x in o_lower for x in ['senior citizen', 'elderly', 'retired', 'pensioner', 'all', 'unemployed', 'universal']):
                        occ_matches = True
                        break
                if u_lower == 'homemaker' and o_lower in ['women entrepreneur', 'self employed', 'unemployed', 'women', 'all']:
                    occ_matches = True
                    break
                if u_lower == 'women entrepreneur' and o_lower in ['homemaker', 'self employed', 'msme owner', 'women', 'all']:
                    occ_matches = True
                    break
                if u_lower == 'student' and o_lower in ['youth', 'unemployed', 'student', 'all']:
                    occ_matches = True
                    break
                if u_lower == 'farmer' and o_lower in ['cultivator', 'smallholder', 'agriculture', 'all']:
                    occ_matches = True
                    break
                if u_lower == 'artisan' and o_lower in ['weaver', 'craftsperson', 'handloom', 'all']:
                    occ_matches = True
                    break

        # Senior citizen age override
        user_age = profile.get("age", 30)
        if user_age and user_age >= 60:
            if "pension" in scheme.get("name", "").lower() or "old age" in scheme.get("name", "").lower() or "vaya" in scheme.get("name", "").lower() or "senior" in scheme.get("name", "").lower() or "senior" in scheme.get("target_beneficiary", "").lower():
                occ_matches = True

        if occ_matches:
            passed.append(f"Occupation '{user_occ}' matches target beneficiary profile")
            score_points += 1
        else:
            if "All" not in allowed_occs:
                occupation_disqualified = True
            failed.append(f"Targeted primarily for {', '.join(allowed_occs[:3])} (User is {user_occ})")

        # 4. Land ownership check (Strict cutoff for agriculture irrigation / input schemes)
        if criteria.get("land_ownership_required"):
            total_checks += 1
            has_land = profile.get("has_land", False) or (profile.get("land_holding_acres", 0) and profile.get("land_holding_acres", 0) > 0) or (user_occ == "Farmer")
            if has_land:
                passed.append("Agricultural landholding verified (Smallholder / Cultivator)")
                score_points += 1
            else:
                land_disqualified = True
                failed.append("Requires cultivable agricultural land title")

        # 5. Age check
        if user_age is not None:
            total_checks += 1
            min_age = criteria.get("min_age", 0)
            max_age = criteria.get("max_age", 120)
            if min_age <= user_age <= max_age:
                passed.append(f"Age {user_age} falls within eligible bracket ({min_age}-{max_age} yrs)")
                score_points += 1
            else:
                failed.append(f"Age {user_age} is outside eligible range ({min_age}-{max_age} yrs)")

        # 6. Income check
        user_income = profile.get("income") if profile.get("income") is not None else profile.get("annual_income")
        max_income = criteria.get("max_annual_income")
        if user_income is not None:
            total_checks += 1
            if max_income is None:
                passed.append("No income ceiling restriction for this scheme")
                score_points += 1
            elif user_income <= max_income:
                passed.append(f"Annual income Rs. {user_income:,} is under cutoff of Rs. {max_income:,}")
                score_points += 1
            else:
                failed.append(f"Annual income Rs. {user_income:,} exceeds ceiling of Rs. {max_income:,}")

        # 7. Social category check
        user_cat = profile.get("category", "General")
        allowed_cats = criteria.get("social_categories", ["General", "OBC", "SC", "ST", "EWS", "Minority"])
        total_checks += 1
        if user_cat in allowed_cats:
            passed.append(f"Category '{user_cat}' is eligible")
            score_points += 1
        else:
            failed.append(f"Category '{user_cat}' is not covered (Eligible: {', '.join(allowed_cats)})")

        rule_score = round((score_points / max(total_checks, 1)) * 100, 1)
        
        # Determine overall eligibility
        if state_disqualified or gender_disqualified or occupation_disqualified or land_disqualified:
            is_eligible = False
        else:
            is_eligible = len(failed) == 0 or (len(failed) <= 1 and rule_score >= 80)

        return {
            "scheme_id": scheme["id"],
            "scheme_name": scheme["name"],
            "is_eligible": is_eligible,
            "rule_score": rule_score,
            "passed_criteria": passed,
            "failed_criteria": failed
        }

    def filter_all(self, profile):
        results = []
        for scheme in self.schemes:
            eval_res = self.evaluate_profile(profile, scheme)
            results.append(eval_res)
        return results