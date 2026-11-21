with open('frontend/src/services/hybridEngine.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Gender check
old_gender = """    // 2. Gender Check (Strict for Women-exclusive schemes)
    const userGender = profile.gender || 'All';
    const allowedGenders = criteria.gender || ['All'];
    totalChecks += 1;
    if (allowedGenders.includes('All') || allowedGenders.includes(userGender)) {
      passed.push(`Gender '${userGender}' satisfies target criteria`);
      scorePoints += 1;
    } else {
      genderDisqualified = true;
      failed.push(`Scheme restricted to ${allowedGenders.join(', ')} (User is ${userGender})`);
    }

    // 3. Occupation / Profession Check (Strict for specialized schemes)
    const userOcc = profile.occupation || 'All';
    const allowedOccs = criteria.occupations || ['All'];
    totalChecks += 1;

    let occMatched = false;
    if (allowedOccs.includes('All') || allowedOccs.includes(userOcc)) {
      occMatched = true;
    } else {"""

new_gender = """    // 2. Gender Check (Strict for Women-exclusive schemes)
    const userGender = profile.gender || 'All';
    const allowedGenders = criteria.gender || ['All'];
    totalChecks += 1;

    const schemeNameLower = (scheme.name || '').toLowerCase();
    const schemeCatLower = (scheme.category || '').toLowerCase();
    const targetBenLower = (scheme.target_beneficiary || '').toLowerCase();

    const isWomenExclusive = (
      (allowedGenders.includes('Female') && !allowedGenders.includes('Male') && !allowedGenders.includes('All')) ||
      schemeCatLower.includes('women') ||
      schemeNameLower.includes('mahila') ||
      schemeNameLower.includes('gruha lakshmi') ||
      schemeNameLower.includes('ladli behna') ||
      schemeNameLower.includes('ladki bahin') ||
      schemeNameLower.includes('shakti scheme') ||
      schemeNameLower.includes('women only') ||
      schemeNameLower.includes('women entrepreneur') ||
      targetBenLower.includes('women only') ||
      (scheme.name === 'Stand-Up India Scheme' && userGender === 'Male' && !['SC', 'ST'].includes(profile.category))
    );

    if (userGender === 'Male' && isWomenExclusive) {
      genderDisqualified = true;
      failed.push(`Scheme is strictly restricted to Women beneficiaries (User is Male)`);
    } else if (allowedGenders.includes('All') || allowedGenders.includes(userGender)) {
      passed.push(`Gender '${userGender}' satisfies target criteria`);
      scorePoints += 1;
    } else {
      genderDisqualified = true;
      failed.push(`Scheme restricted to ${allowedGenders.join(', ')} (User is ${userGender})`);
    }

    // 3. Occupation / Profession Check (Strict for specialized schemes)
    const userOcc = profile.occupation || 'All';
    const allowedOccs = criteria.occupations || ['All'];
    totalChecks += 1;

    let occMatched = false;
    if (userGender === 'Male' && userOcc.toLowerCase().includes('women')) {
      occupationDisqualified = true;
      failed.push("Profile Conflict Error: Male applicants cannot apply under 'Women Entrepreneur' category");
      occMatched = false;
    } else if (allowedOccs.includes('All') || allowedOccs.includes(userOcc)) {
      occMatched = true;
    } else {"""

content = content.replace(old_gender, new_gender, 1)

# Prevent bonus for women entrepreneur if user is male
old_bonus = "} else if ((userOcc.includes('homemaker') || userOcc.includes('women')) && (critOccs.includes('homemaker') || critOccs.includes('women entrepreneur'))) {\n        occBonus += 8.0;\n      }"
new_bonus = "} else if (profile.gender !== 'Male' && (userOcc.includes('homemaker') || userOcc.includes('women')) && (critOccs.includes('homemaker') || critOccs.includes('women entrepreneur'))) {\n        occBonus += 8.0;\n      }"
content = content.replace(old_bonus, new_bonus, 1)

# Add conflict flags in runAgenticDiscovery
old_ret = """    return {
      profile,
      execution_trace: trace,
      total_evaluated: this.schemes.length,
      eligible_matches_count: eligibleCount,
      ranked_schemes: rankedSchemes
    };"""

new_ret = """    const hasConflict = (profile.gender === 'Male' && (profile.occupation || '').toLowerCase().includes('women'));
    const conflictMsg = hasConflict
      ? "Validation Error: You selected Gender as 'Male', but Main Occupation is set to 'Women Entrepreneur'. Male applicants are not eligible for women-exclusive welfare & entrepreneurship schemes."
      : "";

    return {
      profile,
      has_conflict: hasConflict,
      conflict_message: conflictMsg,
      execution_trace: trace,
      total_evaluated: this.schemes.length,
      eligible_matches_count: eligibleCount,
      ranked_schemes: rankedSchemes
    };"""

content = content.replace(old_ret, new_ret, 1)

with open('frontend/src/services/hybridEngine.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated frontend/src/services/hybridEngine.js successfully!")
