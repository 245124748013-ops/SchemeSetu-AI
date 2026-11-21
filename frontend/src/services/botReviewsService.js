// 100% Comprehensive WhatsApp AI Friend Answer Reviews & Ratings Service
// Stores which answers have been given, how many stars each answer received, and calculates the most-rated answer.

export const INITIAL_RATED_ANSWERS = [
  {
    id: 'ans_mudra_limits',
    schemeId: 'pmmy',
    question: "What are the loan limits under Pradhan Mantri Mudra Yojana (PMMY) and is collateral required?",
    answer: "Pradhan Mantri Mudra Yojana offers institutional credit without collateral in 4 categories: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), Tarun (₹5 Lakh to ₹10 Lakh), and Tarun Plus (₹10 Lakh to ₹20 Lakh). All loans have zero collateral or third-party guarantee requirement with subsidized interest.",
    schemeName: "Pradhan Mantri Mudra Yojana (PMMY)",
    category: "MSME & Business Loans",
    totalRatings: 189, // Most Rated Answer!
    averageRating: 4.9,
    starBreakdown: { 5: 168, 4: 16, 3: 5, 2: 0, 1: 0 },
    reviews: [
      { author: "Ramesh K. (MSME Owner)", stars: 5, comment: "Accurate loan limits with 0 collateral rule!", time: "Today" },
      { author: "Ananya M. (Vendor)", stars: 5, comment: "Helped me choose Tarun Plus category easily.", time: "Yesterday" }
    ],
    updatedAt: "Just now"
  },
  {
    id: 'ans_pm_kisan_dbt',
    schemeId: 'pm-kisan',
    question: "How to complete e-KYC for PM-KISAN ₹2,000 installment and what are eligibility rules?",
    answer: "PM Kisan Samman Nidhi credits ₹6,000/year in 3 equal ₹2,000 tranches via DBT. Eligibility requires valid cultivable land records seeded with Aadhaar. e-KYC can be completed via OTP on pmkisan.gov.in or biometric authentication at any CSC center. Institutional landholders and income-tax payers are excluded.",
    schemeName: "PM Kisan Samman Nidhi (PM-KISAN)",
    category: "Agriculture & Farmers",
    totalRatings: 168,
    averageRating: 4.8,
    starBreakdown: { 5: 142, 4: 21, 3: 4, 2: 1, 1: 0 },
    reviews: [
      { author: "Govindappa (Farmer)", stars: 5, comment: "Easy e-KYC steps for farmer DBT installments.", time: "2 days ago" }
    ],
    updatedAt: "2 days ago"
  },
  {
    id: 'ans_gruha_lakshmi',
    schemeId: 'gruha-lakshmi',
    question: "Who is eligible for Karnataka Gruha Lakshmi ₹2,000 monthly DBT and what documents are required?",
    answer: "Gruha Lakshmi provides ₹2,000/month to women heads of families registered as head in BPL, APL, or Antyodaya ration cards. Required documents: Ration Card, Woman's Aadhaar, Husband's Aadhaar, and Aadhaar-seeded active bank account. Tax-paying women or women whose husbands pay IT/GST are excluded.",
    schemeName: "Karnataka Gruha Lakshmi Scheme",
    category: "Women Empowerment",
    totalRatings: 161,
    averageRating: 4.9,
    starBreakdown: { 5: 145, 4: 13, 3: 3, 2: 0, 1: 0 },
    reviews: [
      { author: "Lakshmi Bai (Homemaker)", stars: 5, comment: "Clear ration card & Aadhaar seeding rules.", time: "Today" }
    ],
    updatedAt: "Today"
  },
  {
    id: 'ans_pmegp_subsidy',
    schemeId: 'pmegp',
    question: "How much capital subsidy can I receive under PMEGP for manufacturing and service units?",
    answer: "Under PMEGP, rural general beneficiaries receive 25% subsidy, while rural special category (SC/ST/OBC/Women/Ex-Servicemen) receive 35% margin money subsidy on project costs up to ₹50 Lakhs (manufacturing) and ₹20 Lakhs (services). Urban subsidy is 15% (general) and 25% (special).",
    schemeName: "Prime Minister Employment Generation Programme (PMEGP)",
    category: "Employment & Subsidy",
    totalRatings: 154,
    averageRating: 4.9,
    starBreakdown: { 5: 138, 4: 12, 3: 4, 2: 0, 1: 0 },
    reviews: [
      { author: "Suresh P. (Artisan)", stars: 5, comment: "Clear breakdown of 35% rural special subsidy.", time: "1 day ago" }
    ],
    updatedAt: "1 day ago"
  },
  {
    id: 'ans_ayushman_cover',
    schemeId: 'ab-pmjay',
    question: "What medical treatments are covered under Ayushman Bharat ₹5 Lakh health card?",
    answer: "Ayushman Bharat PM-JAY provides ₹5,00,000 cashless health insurance per family per year for secondary and tertiary care. It covers 1,949 medical packages, pre-existing diseases from day 1, diagnostics, medicines, and 15-day post-hospitalization costs at 27,000+ empaneled private and govt hospitals.",
    schemeName: "Ayushman Bharat - PM Jan Arogya Yojana",
    category: "Health & Insurance",
    totalRatings: 147,
    averageRating: 4.9,
    starBreakdown: { 5: 135, 4: 10, 3: 2, 2: 0, 1: 0 },
    reviews: [
      { author: "Meena S. (Citizen)", stars: 5, comment: "Cashless hospital coverage details are very reassuring.", time: "3 days ago" }
    ],
    updatedAt: "3 days ago"
  },
  {
    id: 'ans_dalit_bandhu',
    schemeId: 'dalit-bandhu',
    question: "Is Telangana Dalit Bandhu a bank loan or a direct financial grant?",
    answer: "Dalit Bandhu is a 100% direct, non-repayable grant of ₹10,00,000 (₹10 Lakhs) per eligible Scheduled Caste (SC) family. It has zero bank loan component, zero interest, and zero collateral requirement. Beneficiaries have complete freedom to select their enterprise.",
    schemeName: "Telangana Dalit Bandhu Scheme",
    category: "SC Welfare & Entrepreneurship",
    totalRatings: 139,
    averageRating: 4.9,
    starBreakdown: { 5: 128, 4: 9, 3: 2, 2: 0, 1: 0 },
    reviews: [
      { author: "Kavitha R. (Entrepreneur)", stars: 5, comment: "Confirmed ₹10 Lakh 100% grant without loan burden.", time: "Today" }
    ],
    updatedAt: "Today"
  }
];

const STORAGE_KEY = 'schemesetu_answer_ratings_ledger';

export function getAllRatedAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return INITIAL_RATED_ANSWERS;
    }
    const stored = JSON.parse(raw);
    if (!Array.isArray(stored) || stored.length === 0) {
      return INITIAL_RATED_ANSWERS;
    }
    return stored;
  } catch (e) {
    return INITIAL_RATED_ANSWERS;
  }
}

export function saveAllRatedAnswers(answers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch (e) {}
}

export function getMostRatedAnswer(answers = getAllRatedAnswers()) {
  if (!answers || answers.length === 0) return null;
  return answers.reduce((max, curr) => (curr.totalRatings > max.totalRatings ? curr : max), answers[0]);
}

export function recordAnswerRating({
  id,
  question,
  answer,
  schemeName = "Government Welfare Scheme",
  category = "Welfare Scheme",
  stars,
  reviewText = ""
}) {
  const list = getAllRatedAnswers();
  const existingIdx = list.findIndex(a => a.id === id || (question && a.question && a.question.toLowerCase().trim() === question.toLowerCase().trim()));

  if (existingIdx !== -1) {
    const item = { ...list[existingIdx] };
    const prevUserRating = item.userRating;

    item.userRating = stars;
    if (reviewText) {
      item.userReview = reviewText;
      item.reviews = [
        { author: "You (Citizen)", stars, comment: reviewText, time: "Just now" },
        ...(item.reviews || []).filter(r => r.author !== "You (Citizen)")
      ];
    }

    // Update counts if this is first rating or change
    if (!prevUserRating) {
      item.totalRatings = (item.totalRatings || 0) + 1;
      item.starBreakdown = item.starBreakdown || { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
      item.starBreakdown[stars] = (item.starBreakdown[stars] || 0) + 1;
    } else if (prevUserRating !== stars) {
      item.starBreakdown = item.starBreakdown || { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
      if (item.starBreakdown[prevUserRating] > 0) {
        item.starBreakdown[prevUserRating] -= 1;
      }
      item.starBreakdown[stars] = (item.starBreakdown[stars] || 0) + 1;
    }

    // Recalculate average rating
    const totalVotes = Object.values(item.starBreakdown).reduce((a, b) => a + b, 0);
    const weightedSum = Object.entries(item.starBreakdown).reduce((acc, [strStar, count]) => acc + Number(strStar) * count, 0);
    item.averageRating = totalVotes > 0 ? Number((weightedSum / totalVotes).toFixed(1)) : 5.0;
    item.updatedAt = "Just now";

    list[existingIdx] = item;
    saveAllRatedAnswers(list);
    return item;
  } else {
    // New answer added dynamically
    const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    breakdown[stars] = 1;
    const newItem = {
      id: id || `ans_${Date.now()}`,
      question: question || "Custom Welfare Scheme Query",
      answer: answer || "AI Counselor Answer",
      schemeName: schemeName || "General Welfare",
      category,
      totalRatings: 1,
      averageRating: Number(stars.toFixed(1)),
      starBreakdown: breakdown,
      userRating: stars,
      userReview: reviewText || null,
      reviews: reviewText ? [{ author: "You (Citizen)", stars, comment: reviewText, time: "Just now" }] : [],
      updatedAt: "Just now"
    };

    const updatedList = [newItem, ...list];
    saveAllRatedAnswers(updatedList);
    return newItem;
  }
}
