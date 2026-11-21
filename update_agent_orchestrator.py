with open('backend/agent_orchestrator.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Update sector bonus for Women Entrepreneur to only apply if user is Female
old_bonus = """            elif user_occ in ["Women Entrepreneur", "Homemaker"]:
                if "Women" in scheme_cat:
                    sector_bonus += 28.0
                    is_core_sector = True
                elif "MSME" in scheme_cat:
                    sector_bonus += 18.0
                    is_core_sector = True"""

new_bonus = """            elif user_occ in ["Women Entrepreneur", "Homemaker"]:
                if user_gender == "Female":
                    if "Women" in scheme_cat:
                        sector_bonus += 28.0
                        is_core_sector = True
                    elif "MSME" in scheme_cat:
                        sector_bonus += 18.0
                        is_core_sector = True
                else:
                    # Male applicant with Women Entrepreneur selection is penalized / disqualified
                    sector_bonus -= 30.0"""

content = content.replace(old_bonus, new_bonus, 1)

# Also check for conflict at beginning of orchestrate_discovery
old_trace = """        trace = []
        # Step 1: Constraint & Profile Validation"""

new_trace = """        trace = []
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

        # Step 1: Constraint & Profile Validation"""

content = content.replace(old_trace, new_trace, 1)

# Return has_conflict in orchestrate_discovery result
old_ret = """        return {
            "profile": profile,
            "execution_trace": trace,
            "total_evaluated": len(self.schemes),
            "eligible_matches_count": eligible_count,
            "ranked_schemes": all_evaluated[:50]
        }"""

new_ret = """        return {
            "profile": profile,
            "has_conflict": has_conflict,
            "conflict_message": conflict_msg,
            "execution_trace": trace,
            "total_evaluated": len(self.schemes),
            "eligible_matches_count": eligible_count,
            "ranked_schemes": all_evaluated[:50]
        }"""

content = content.replace(old_ret, new_ret, 1)

with open('backend/agent_orchestrator.py', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated backend/agent_orchestrator.py successfully!")
