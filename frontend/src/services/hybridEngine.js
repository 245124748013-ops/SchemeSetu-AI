import { SCHEMES_DATABASE } from './schemesData.js';
import { API_BASE } from '../config.js';

// Tokenizer and cosine similarity implementation
function tokenize(text) {
  if (!text) return [];
  const stopwords = new Set([
    'the', 'a', 'an', 'in', 'on', 'for', 'to', 'and', 'or', 'is', 'of', 'with', 'by',
    'at', 'from', 'as', 'into', 'through', 'during', 'including', 'per', 'all', 'are', 'be'
  ]);
  const tokens = text.toLowerCase().match(/\w+/g) || [];
  return tokens.filter(t => !stopwords.has(t) && t.length > 1);
}

function getFrequency(tokens) {
  const freq = {};
  for (const t of tokens) {
    freq[t] = (freq[t] || 0) + 1;
  }
  return freq;
}

function cosineSimilarity(vec1, vec2) {
  const keys = new Set([...Object.keys(vec1), ...Object.keys(vec2)]);
  let dotProduct = 0;
  let mag1 = 0;
  let mag2 = 0;

  for (const k of keys) {
    const v1 = vec1[k] || 0;
    const v2 = vec2[k] || 0;
    dotProduct += v1 * v2;
    mag1 += v1 * v1;
    mag2 += v2 * v2;
  }

  const denominator = Math.sqrt(mag1) * Math.sqrt(mag2);
  if (!denominator) return 0;
  return dotProduct / denominator;
}

export class HybridMatchingEngine {
  constructor(schemes = SCHEMES_DATABASE) {
    this.schemes = schemes;
    this.schemeDocs = {};
    this.buildIndex();
  }

  buildIndex() {
    for (const s of this.schemes) {
      const stateStr = (s.eligibility_criteria?.states || []).join(' ');
      const occStr = (s.eligibility_criteria?.occupations || []).join(' ');
      const docText = `${s.name} ${s.summary} ${s.category} ${s.level} ${stateStr} ${occStr} ${s.target_beneficiary} ${(s.tags || []).join(' ')} ${(s.rag_clauses || []).join(' ')}`;
      const tokens = tokenize(docText);
      this.schemeDocs[s.id] = getFrequency(tokens);
    }
  }

  evaluateRules(profile, scheme) {
    const criteria = scheme.eligibility_criteria || {};
    const passed = [];
    const failed = [];
    let scorePoints = 0;
    let totalChecks = 0;

    let stateDisqualified = false;
    let genderDisqualified = false;
    let occupationDisqualified = false;
    let landDisqualified = false;

    // 1. State Domicile Check (Strict for State schemes)
    const userState = profile.state;
    const allowedStates = criteria.states || ['All'];
    const isStateScheme = scheme.level === 'State';
    totalChecks += 1;
    if (allowedStates.includes('All') || ['National / All India', 'All India', 'National', 'All', undefined, null, ''].includes(userState) || (userState && allowedStates.includes(userState))) {
      passed.push(`Resident of '${userState || 'All India'}' satisfies domicile requirement`);
      scorePoints += 1;
    } else {
      stateDisqualified = true;
      failed.push(`Scheme is exclusive to residents of ${allowedStates.join(', ')} (User resides in ${userState || 'Other'})`);
    }

    // 2. Gender Check (Strict for Women-exclusive schemes)
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
    } else {
      const uLower = userOcc.toLowerCase();
      for (const o of allowedOccs) {
        const oLower = o.toLowerCase();
        if (uLower.includes(oLower) || oLower.includes(uLower)) {
          occMatched = true;
          break;
        }
        if (['senior citizen', 'elderly', 'retired', 'senior'].includes(uLower)) {
          if (['senior citizen', 'elderly', 'retired', 'pensioner', 'all', 'unemployed', 'universal'].some(x => oLower.includes(x))) {
            occMatched = true;
            break;
          }
        }
        if (uLower === 'homemaker' && ['women entrepreneur', 'self employed', 'unemployed', 'women', 'all'].includes(oLower)) {
          occMatched = true;
          break;
        }
        if (uLower === 'women entrepreneur' && ['homemaker', 'self employed', 'msme owner', 'women', 'all'].includes(oLower)) {
          occMatched = true;
          break;
        }
        if (uLower === 'student' && ['youth', 'unemployed', 'student', 'all'].includes(oLower)) {
          occMatched = true;
          break;
        }
        if (uLower === 'farmer' && ['cultivator', 'smallholder', 'agriculture', 'all'].includes(oLower)) {
          occMatched = true;
          break;
        }
        if (uLower === 'artisan' && ['weaver', 'craftsperson', 'handloom', 'all'].includes(oLower)) {
          occMatched = true;
          break;
        }
      }
    }

    // Senior citizen age override
    const userAge = profile.age !== undefined && profile.age !== null ? profile.age : 30;
    if (userAge >= 60) {
      const schemeNameLower = (scheme.name || '').toLowerCase();
      const schemeCatLower = (scheme.category || '').toLowerCase();
      const targetLower = (scheme.target_beneficiary || '').toLowerCase();
      if (schemeNameLower.includes('pension') || schemeNameLower.includes('old age') || schemeNameLower.includes('vaya') || schemeNameLower.includes('senior') || schemeCatLower.includes('social security') || targetLower.includes('senior')) {
        occMatched = true;
      }
    }

    if (occMatched) {
      passed.push(`Occupation '${userOcc}' matches target beneficiary profile`);
      scorePoints += 1;
    } else {
      if (!allowedOccs.includes('All')) {
        occupationDisqualified = true;
      }
      failed.push(`Targeted primarily for ${allowedOccs.slice(0, 3).join(', ')} (User is ${userOcc})`);
    }

    // 4. Landholding Check (Strict for Agriculture schemes)
    if (criteria.land_ownership_required) {
      totalChecks += 1;
      const hasLand = profile.has_land || (profile.land_holding_acres && profile.land_holding_acres > 0) || (userOcc.toLowerCase().includes('farmer'));
      if (hasLand) {
        passed.push('Agricultural landholding verified (Smallholder / Cultivator)');
        scorePoints += 1;
      } else {
        landDisqualified = true;
        failed.push('Requires cultivable agricultural land title');
      }
    }

    // 5. Age Check
    if (userAge !== undefined && userAge !== null) {
      totalChecks += 1;
      const minAge = criteria.min_age !== undefined ? criteria.min_age : 0;
      const maxAge = criteria.max_age !== undefined ? criteria.max_age : 120;
      if (userAge >= minAge && userAge <= maxAge) {
        passed.push(`Age ${userAge} falls within eligible bracket (${minAge}-${maxAge} yrs)`);
        scorePoints += 1;
      } else {
        failed.push(`Age ${userAge} is outside eligible bracket (${minAge}-${maxAge} yrs)`);
      }
    }

    // 6. Income Check
    const userIncome = profile.income !== undefined && profile.income !== null ? profile.income : profile.annual_income;
    const maxIncome = criteria.max_annual_income;
    if (userIncome !== undefined && userIncome !== null) {
      totalChecks += 1;
      if (maxIncome === null || maxIncome === undefined) {
        passed.push('No upper income limit constraint');
        scorePoints += 1;
      } else if (userIncome <= maxIncome) {
        passed.push(`Annual income ₹${Number(userIncome).toLocaleString('en-IN')} is within cutoff of ₹${Number(maxIncome).toLocaleString('en-IN')}`);
        scorePoints += 1;
      } else {
        failed.push(`Annual income ₹${Number(userIncome).toLocaleString('en-IN')} exceeds cutoff of ₹${Number(maxIncome).toLocaleString('en-IN')}`);
      }
    }

    // 7. Social Category Check
    const userCat = profile.category || 'General';
    const allowedCats = criteria.social_categories || ['General', 'OBC', 'SC', 'ST', 'EWS', 'Minority'];
    totalChecks += 1;
    if (allowedCats.includes(userCat)) {
      passed.push(`Category '${userCat}' is covered`);
      scorePoints += 1;
    } else {
      failed.push(`Category '${userCat}' not in targeted list (${allowedCats.join(', ')})`);
    }

    const ruleScore = Math.round((scorePoints / Math.max(totalChecks, 1)) * 1000) / 10;
    
    // Strict disqualifications
    const isEligible = (stateDisqualified || genderDisqualified || occupationDisqualified || landDisqualified)
      ? false 
      : (failed.length === 0 || (failed.length <= 1 && ruleScore >= 80));

    return {
      ruleScore,
      isEligible,
      passedCriteria: passed,
      failedCriteria: failed
    };
  }

  computeSemanticScore(profileQuery, schemeId) {
    const queryTokens = tokenize(profileQuery);
    const expanded = [...queryTokens];
    const qLower = profileQuery.toLowerCase();

    if (qLower.includes('farmer') || qLower.includes('kisan') || qLower.includes('crop') || qLower.includes('agri') || qLower.includes('land')) {
      expanded.push('pmkisan', 'agriculture', 'kisan', 'crop', 'land', 'irrigation', 'subsidy', 'rythu', 'shetkari', 'krishak', 'borewell');
    }
    if (qLower.includes('woman') || qLower.includes('female') || qLower.includes('mahila') || qLower.includes('girl') || qLower.includes('homemaker')) {
      expanded.push('women', 'shg', 'standup', 'sukanya', 'gruha', 'lakshmi', 'urimai', 'ladki', 'bahin', 'kanya', 'kudumbashree', 'empowerment', 'bhandar', 'cheyutha');
    }
    if (qLower.includes('business') || qLower.includes('msme') || qLower.includes('startup') || qLower.includes('shop') || qLower.includes('enterprise')) {
      expanded.push('loan', 'mudra', 'pmegp', 'subsidy', 'working capital', 'credit', 'enterprise', 'udyam', 'dalit', 'bandhu', 'odop', 'seed');
    }
    if (qLower.includes('artisan') || qLower.includes('craft') || qLower.includes('carpenter') || qLower.includes('weaver')) {
      expanded.push('vishwakarma', 'toolkit', 'stipend', 'handicraft', 'trade', 'traditional', 'odop', 'weaver', 'mistri');
    }
    if (qLower.includes('vendor') || qLower.includes('thela') || qLower.includes('hawker')) {
      expanded.push('svanidhi', 'street vendor', 'working capital', 'urban', 'cashback', 'thela');
    }
    if (qLower.includes('student') || qLower.includes('youth') || qLower.includes('college') || qLower.includes('graduate')) {
      expanded.push('scholarship', 'tuition', 'post matric', 'pmkvy', 'skill', 'training', 'free', 'yuva', 'nidhi', 'pudhumai');
    }

    const queryVec = getFrequency(expanded);
    const docVec = this.schemeDocs[schemeId] || {};
    const sim = cosineSimilarity(queryVec, docVec);

    const score = sim > 0.05 ? Math.min(100, Math.round((sim * 135 + 20) * 10) / 10) : Math.round(sim * 1000) / 10;
    return score;
  }

  retrieveRAGClauses(query, schemeId, topK = 2) {
    const scheme = this.schemes.find(s => s.id === schemeId);
    if (!scheme || !scheme.rag_clauses) return [];
    
    const queryTokens = new Set(tokenize(query));
    const scoredClauses = scheme.rag_clauses.map(clause => {
      const clauseTokens = new Set(tokenize(clause));
      let intersection = 0;
      for (const t of queryTokens) {
        if (clauseTokens.has(t)) intersection++;
      }
      const relevance = Math.min(99, Math.round((intersection / Math.max(queryTokens.size, 1)) * 100 + 70));
      return { clause, relevance };
    });

    scoredClauses.sort((a, b) => b.relevance - a.relevance);
    return scoredClauses.slice(0, topK).map(sc => sc.clause);
  }

  generateExplanation(profile, scheme, ruleResult, combinedScore) {
    const name = profile.name || 'Citizen';
    const age = profile.age || 30;
    const occ = profile.occupation || 'Applicant';
    const cat = profile.category || 'General';
    const gender = profile.gender || 'Individual';
    const state = profile.state || 'India';
    const isStateScheme = scheme.level === 'State';

    if (ruleResult.isEligible) {
      const topReasons = ruleResult.passedCriteria.slice(0, 2).join('; ');
      const govtText = isStateScheme ? `Government of ${scheme.eligibility_criteria?.states?.[0] || state}` : 'Government of India (Central)';
      return `Dear ${name}, as a ${gender} ${occ} residing in ${state} (${cat} category), you are fully eligible for ${scheme.name} funded by ${govtText}. Verified: ${topReasons}. You can receive ${scheme.financial_benefit || 'specified welfare benefits'} directly via DBT transfer or nodal departments.`;
    } else {
      const reason = ruleResult.failedCriteria[0] || 'specific qualification criteria';
      return `Notice for ${name}: While ${scheme.name} is a high-value program, you currently do not meet the qualification rule: ${reason}.`;
    }
  }

  async runAgenticDiscovery(profile) {
    try {
      const response = await fetch(`${API_BASE}/api/match`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile)
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (err) {
      console.log('Using embedded hybrid engine:', err);
    }

    const trace = [];
    trace.push({
      step: 1,
      name: 'Profile Ingestion & Normalization',
      status: 'completed',
      details: `Normalized citizen profile: Age=${profile.age}, Income=₹${Number(profile.income || 0).toLocaleString('en-IN')}, Category=${profile.category}, Gender=${profile.gender}, Occupation=${profile.occupation}, Resident State=${profile.state || 'National'}`
    });

    const profileQuery = `${profile.occupation || ''} ${profile.gender || ''} ${profile.category || ''} looking for loan subsidy grant welfare livelihood in ${profile.state || ''}`;

    const rankedSchemes = [];
    let eligibleCount = 0;

    for (const scheme of this.schemes) {
      const ruleResult = this.evaluateRules(profile, scheme);
      if (ruleResult.isEligible) eligibleCount++;

      const semanticScore = this.computeSemanticScore(profileQuery, scheme.id);

      // Targeted Profession Priority Boost
      let occBonus = 0;
      let isPrimaryProfessionMatch = false;
      const userOcc = (profile.occupation || '').toLowerCase();
      const critOccs = (scheme.eligibility_criteria?.occupations || []).map(o => o.toLowerCase());
      const sCat = scheme.category || '';
      const sName = (scheme.name || '').toLowerCase();

      if (userOcc.includes('farmer')) {
        if (sCat.includes('Agriculture') || sCat.includes('Fisheries')) {
          isPrimaryProfessionMatch = true;
          occBonus += 16.0;
        } else if (sCat.includes('Clean Energy') && (sName.includes('solar') || sName.includes('pump') || sName.includes('feeder'))) {
          isPrimaryProfessionMatch = true;
          occBonus += 12.0;
        }
      } else if (userOcc.includes('artisan')) {
        if (sCat.includes('Handloom') || sCat.includes('Textile') || sName.includes('artisan') || sName.includes('vishwakarma')) {
          isPrimaryProfessionMatch = true;
          occBonus += 16.0;
        }
      } else if (userOcc.includes('vendor')) {
        if (sName.includes('vendor') || sName.includes('svanidhi')) {
          isPrimaryProfessionMatch = true;
          occBonus += 16.0;
        }
      } else if (userOcc.includes('student') || userOcc.includes('youth')) {
        if (sCat.includes('Education') || sCat.includes('Skill')) {
          isPrimaryProfessionMatch = true;
          occBonus += 16.0;
        }
      } else if (profile.gender !== 'Male' && (userOcc.includes('homemaker') || userOcc.includes('women'))) {
        if (sCat.includes('Women') || scheme.target_beneficiary?.toLowerCase().includes('women')) {
          isPrimaryProfessionMatch = true;
          occBonus += 16.0;
        }
      } else if (userOcc.includes('msme') || userOcc.includes('entrepreneur')) {
        if (sCat.includes('MSME') || sCat.includes('Entrepreneur')) {
          isPrimaryProfessionMatch = true;
          occBonus += 16.0;
        }
      }

      if (critOccs.includes(userOcc) || critOccs.some(o => o.includes(userOcc))) {
        occBonus += 6.0;
      }

      // Affirmative / Gender / Category bonus
      let catBonus = 0;
      if (profile.gender === 'Female' && (scheme.category.includes('Women') || scheme.target_beneficiary.toLowerCase().includes('women'))) {
        catBonus += 5.0;
      }
      if (['SC', 'ST'].includes(profile.category) && (scheme.target_beneficiary.includes('SC') || scheme.target_beneficiary.includes('ST'))) {
        catBonus += 5.0;
      }

      // Domicile exact match bonus for State Schemes
      if (scheme.level === 'State' && scheme.eligibility_criteria?.states?.includes(profile.state)) {
        catBonus += 6.0;
      }

      // Hybrid Confidence Formula: 55% Rule + 40% Semantic + Profession Bonus + Affirmative Bonus
      const combinedConfidence = Math.min(99.4, Math.round(((0.55 * ruleResult.ruleScore) + (0.40 * semanticScore) + occBonus + catBonus) * 10) / 10);

      const retrievedClauses = this.retrieveRAGClauses(profileQuery, scheme.id, 2);
      const explanation = this.generateExplanation(profile, scheme, ruleResult, combinedConfidence);

      const stateName = (scheme.eligibility_criteria && scheme.eligibility_criteria.states && scheme.eligibility_criteria.states[0] !== 'All') ? scheme.eligibility_criteria.states[0] : 'All India';

      rankedSchemes.push({
        scheme_id: scheme.id,
        name: scheme.name,
        ministry: scheme.ministry,
        category: scheme.category,
        level: scheme.level || 'Central',
        state: stateName,
        states: scheme.eligibility_criteria?.states || ['All'],
        occupations: scheme.eligibility_criteria?.occupations || ['All'],
        target_beneficiary: scheme.target_beneficiary,
        summary: scheme.summary,
        financial_benefit: scheme.financial_benefit,
        combined_confidence: combinedConfidence,
        rule_score: ruleResult.ruleScore,
        semantic_score: semanticScore,
        is_eligible: ruleResult.isEligible,
        is_primary_profession_match: isPrimaryProfessionMatch,
        passed_criteria: ruleResult.passedCriteria,
        failed_criteria: ruleResult.failedCriteria,
        required_documents: scheme.required_documents || [],
        application_process: scheme.application_mode || scheme.application_process || '',
        official_portal_url: scheme.portal_url || scheme.official_portal_url || '',
        application_deadline: scheme.application_deadline || 'Active Enrollment',
        tags: scheme.tags || [],
        retrieved_clauses: retrievedClauses,
        personalized_explanation: explanation
      });
    }

    rankedSchemes.sort((a, b) => {
      if (a.is_eligible !== b.is_eligible) return b.is_eligible ? 1 : -1;
      const aPri = a.is_primary_profession_match ? 1 : 0;
      const bPri = b.is_primary_profession_match ? 1 : 0;
      if (aPri !== bPri) return bPri - aPri;
      return b.combined_confidence - a.combined_confidence;
    });

    trace.push({
      step: 2,
      name: 'Profession & Deterministic Cutoff Evaluation',
      status: 'completed',
      details: `Screened ${this.schemes.length} schemes strictly for profession: "${profile.occupation || 'All'}" in state "${profile.state || 'All'}". Qualified ${eligibleCount} tailored schemes.`
    });

    trace.push({
      step: 3,
      name: 'Vector RAG Clause Retrieval & Semantic Embeddings',
      status: 'completed',
      details: `Retrieved specific official gazette & guideline clauses tailored to ${profile.occupation || 'profession'}.`
    });

    trace.push({
      step: 4,
      name: 'Agentic Re-Ranking & Profession Tailoring',
      status: 'completed',
      details: `Synthesized multi-factor scores. Top matched program for ${profile.occupation}: "${rankedSchemes[0]?.name}" (${rankedSchemes[0]?.combined_confidence}%).`
    });

    const hasConflict = (profile.gender === 'Male' && (profile.occupation || '').toLowerCase().includes('women'));
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
    };
  }
}

export const hybridEngine = new HybridMatchingEngine();