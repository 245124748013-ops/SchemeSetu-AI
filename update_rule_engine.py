with open('backend/rule_engine.py', 'r', encoding='utf-8') as f:
    content = f.read()

old_block = """        # 2. Gender check (Strict hard cutoff for Women-exclusive schemes)
        user_gender = profile.get("gender", "All")
        allowed_genders = criteria.get("gender", ["All"])
        total_checks += 1
        if "All" in allowed_genders or user_gender in allowed_genders:
            passed.append(f"Gender '{user_gender}' matches eligible categories ({', '.join(allowed_genders)})")
            score_points += 1
        else:
            gender_disqualified = True
            failed.append(f"Scheme is restricted to {', '.join(allowed_genders)} (User is {user_gender})")"""

new_block = """        # 2. Gender check (Strict hard cutoff for Women-exclusive schemes)
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
            failed.append(f"Scheme is restricted to {', '.join(allowed_genders)} (User is {user_gender})")"""

# Also update occupation check
old_occ = """        # 3. Occupation / Profession check (Strict hard cutoff for specialized schemes)
        user_occ = profile.get("occupation", "All")
        allowed_occs = criteria.get("occupations", ["All"])
        total_checks += 1
        
        occ_matches = False"""

new_occ = """        # 3. Occupation / Profession check (Strict hard cutoff for specialized schemes)
        user_occ = profile.get("occupation", "All")
        allowed_occs = criteria.get("occupations", ["All"])
        total_checks += 1
        
        # Immediate conflict check: Male citizen cannot select Women Entrepreneur
        if user_gender == "Male" and "women" in user_occ.lower():
            occupation_disqualified = True
            failed.append("Profile Conflict Error: Male applicants cannot apply under 'Women Entrepreneur' category")
            occ_matches = False
        else:
            occ_matches = False"""

content = content.replace(old_block, new_block, 1)
content = content.replace(old_occ, new_occ, 1)

with open('backend/rule_engine.py', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated backend/rule_engine.py successfully!")
