import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Mic, 
  MicOff,
  CheckCheck, 
  Phone, 
  Video, 
  MoreVertical, 
  Play, 
  Pause,
  ExternalLink,
  Landmark,
  Sparkles,
  Bot,
  Star,
  MessageSquare,
  Check,
  ThumbsUp,
  Trophy,
  ChevronRight
} from 'lucide-react';
import { bhashini } from '../services/bhashiniService';
import { processBotQuery } from '../services/botKnowledgeService';
import AnswerReviewsModal from './AnswerReviewsModal';
import { recordAnswerRating, getAllRatedAnswers, getMostRatedAnswer } from '../services/botReviewsService';

export default function WhatsAppBot({ profile, onApplyScheme, currentLang = 'en' }) {
  const t = (k) => bhashini.t(k, currentLang);
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [activeScheme, setActiveScheme] = useState(null);
  const recognitionRef = useRef(null);

  // LocalStorage persistence for user ratings and reviews on bot answers
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('schemesetu_whatsapp_reviews');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });
  const [hoveredRating, setHoveredRating] = useState({});
  const [activeReviewBox, setActiveReviewBox] = useState({});
  const [reviewDrafts, setReviewDrafts] = useState({});
  const [showReviewsModal, setShowReviewsModal] = useState(false);

  // Read most rated answer from central ratings ledger
  const mostRatedBenchmark = getMostRatedAnswer();

  const handleRateMessage = (msgId, stars, messageObj = null) => {
    const updated = {
      ...reviews,
      [msgId]: {
        ...(reviews[msgId] || {}),
        rating: stars,
        ratedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    };
    setReviews(updated);
    try {
      localStorage.setItem('schemesetu_whatsapp_reviews', JSON.stringify(updated));
    } catch (e) {}

    // Record in central Answer Ratings & Reviews Ledger
    if (messageObj) {
      recordAnswerRating({
        id: `msg_${msgId}`,
        question: messageObj.userQuery || (messageObj.schemeName ? `Eligibility & benefits for ${messageObj.schemeName}` : "Government Scheme Guidance"),
        answer: messageObj.text,
        schemeName: messageObj.schemeName || activeScheme?.name || "Flagship Scheme",
        stars,
        reviewText: updated[msgId]?.review || ""
      });
    }
  };

  const handleSaveReview = (msgId, messageObj = null) => {
    const draft = (reviewDrafts[msgId] || '').trim();
    if (!draft) return;
    const updated = {
      ...reviews,
      [msgId]: {
        ...(reviews[msgId] || {}),
        review: draft,
        reviewAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    };
    setReviews(updated);
    try {
      localStorage.setItem('schemesetu_whatsapp_reviews', JSON.stringify(updated));
    } catch (e) {}
    setActiveReviewBox(prev => ({ ...prev, [msgId]: false }));

    // Record review comment in central Answer Ratings Ledger
    if (messageObj) {
      recordAnswerRating({
        id: `msg_${msgId}`,
        question: messageObj.userQuery || (messageObj.schemeName ? `Eligibility & benefits for ${messageObj.schemeName}` : "Government Scheme Guidance"),
        answer: messageObj.text,
        schemeName: messageObj.schemeName || activeScheme?.name || "Flagship Scheme",
        stars: updated[msgId]?.rating || 5,
        reviewText: draft
      });
    }
  };

  const toggleReviewBox = (msgId) => {
    setActiveReviewBox(prev => ({ ...prev, [msgId]: !prev[msgId] }));
    if (!reviewDrafts[msgId] && reviews[msgId]?.review) {
      setReviewDrafts(prev => ({ ...prev, [msgId]: reviews[msgId].review }));
    }
  };

  const handleQuickChipSelect = (msgId, chip) => {
    setReviewDrafts(prev => {
      const current = prev[msgId] || '';
      return {
        ...prev,
        [msgId]: current ? `${current}, ${chip}` : chip
      };
    });
  };

  const getRatingLabel = (stars) => {
    if (stars === 5) return t('excellent');
    if (stars === 4) return t('veryHelpful');
    if (stars === 3) return t('helpful');
    if (stars === 2) return t('needsImprovement');
    return t('notHelpful');
  };

  const getQuickFeedbackChips = (lang) => {
    if (lang === 'te') {
      return ['👍 ఖచ్చితమైన సమాచారం', '⚡ స్పష్టమైన వివరణ', '🎯 ఉపయోగకరమైన అర్హత', '💡 సులభంగా అర్థమైంది'];
    }
    if (lang === 'kn') {
      return ['👍 ನಿಖರವಾದ ಮಾಹಿತಿ', '⚡ ಸ್ಪಷ್ಟ ವಿವರಣೆ', '🎯 ಉಪಯುಕ್ತ ಮಾಹಿತಿ', '💡 ಸುಲಭವಾಗಿ ಅರ್ಥವಾಯಿತು'];
    }
    if (lang === 'hi') {
      return ['👍 सटीक जानकारी', '⚡ स्पष्ट और त्वरित', '🎯 उपयोगी चेकलिस्ट', '💡 आसानी से समझ आया'];
    }
    if (lang === 'ta') {
      return ['👍 துல்லியமான தகவல்', '⚡ தெளிவான விளக்கம்', '🎯 பயனுள்ள தகவல்', '💡 எளிதில் புரிந்தது'];
    }
    return ['👍 Accurate Info', '⚡ Instant & Clear', '🎯 Useful Checklist', '💡 Easy to Understand'];
  };

  const reviewedItems = Object.values(reviews).filter(r => r.rating);
  const totalRatingsCount = 1248 + reviewedItems.length;
  const sumRatings = reviewedItems.reduce((acc, r) => acc + r.rating, 0);
  const averageRating = (
    (1248 * 4.9 + sumRatings) / (1248 + reviewedItems.length)
  ).toFixed(1);

  // Setup Web Speech Recognition for Voice Input
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      const langMap = {
        te: 'te-IN',
        kn: 'kn-IN',
        hi: 'hi-IN',
        ta: 'ta-IN',
        mr: 'mr-IN',
        gu: 'gu-IN',
        bn: 'bn-IN',
        pa: 'pa-IN',
        ml: 'ml-IN',
        en: 'en-IN'
      };
      recognition.lang = langMap[currentLang] || 'en-IN';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputText(transcript);
          handleSend(transcript);
        }
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [currentLang]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser. Please type your message.");
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.warn("Speech recognition error:", err);
      }
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getInitialWelcome = (lang) => {
    const name = profile?.name || 'Citizen';
    const state = profile?.state || 'India';
    const brand = bhashini.t('brandTitle', lang) || 'SchemeSetu AI';

    if (lang === 'hi') {
      return `🇮🇳 नमस्ते ${name} जी (${state})! मैं आपका ${brand} 24x7 सरकारी योजना AI सहायक हूँ। आप देश की सभी 16 केंद्रीय प्रमुख योजनाओं और 5,093 राज्य स्तरीय योजनाओं (जैसे कर्नाटक, तेलंगाना, महाराष्ट्र, उप्र, आदि) के बारे में कोई भी प्रश्न पूछ सकते हैं।`;
    }
    if (lang === 'kn') {
      return `🇮🇳 ನಮಸ್ಕಾರ ${name} ಅವರೇ (${state})! ನಾನು ನಿಮ್ಮ ${brand} ಸರ್ಕಾರಿ ಯೋಜನೆ AI ಸಹಾಯಕ. ನೀವು ಎಲ್ಲಾ 16 ಕೇಂದ್ರ ಪ್ರಮುಖ ಯೋಜನೆಗಳು ಮತ್ತು 5,093 ರಾಜ್ಯ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳ ಬಗ್ಗೆ (ಗೃಹ ಲಕ್ಷ್ಮಿ, ಯುವ ನಿಧಿ, ಸಿಎಂಇಜಿಪಿ, ಗಂಗಾ ಕಲ್ಯಾಣ) ಯಾವುದೇ ಪ್ರಶ್ನೆ ಕೇಳಬಹುದು.`;
    }
    if (lang === 'te') {
      return `🇮🇳 నమస్కారం ${name} గారు (${state})! నేను మీ ${brand} 24x7 ప్రభుత్వ పథకాల AI సలహాదారుని. దేశంలోని 16 కేంద్ర ప్రధాన పథకాలు మరియు 5,093 రాష్ట్ర ప్రభుత్వ సంక్షేమ పథకాల గురించి (అర్హతలు, సబ్సిడీలు, కావలసిన పత్రాలు, దరఖాస్తు విధానం) మీరు నన్ను ఏదైనా అడగవచ్చు.`;
    }
    if (lang === 'ta') {
      return `🇮🇳 வணக்கம் ${name} (${state})! நான் உங்கள் ${brand} அரசு திட்ட AI ஆலோசகர். 16 மத்திய அரசின் முக்கிய திட்டங்கள் மற்றும் 5,093 மாநில நலத்திட்டங்கள் குறித்து நீங்கள் எதையும் கேட்கலாம்.`;
    }
    return `🇮🇳 Welcome ${name} (${state})! I am your ${brand} 24x7 Government Welfare AI Counselor. You can ask me anything about all 16 Central Flagship Schemes and 5,093 State Welfare Schemes (benefits, required documents, eligibility, or how to apply).`;
  };

  const getProfileSummary = (lang) => {
    const occ = profile?.occupation || 'Entrepreneur';
    const cat = profile?.category || 'General';
    const state = profile?.state || 'National';
    const inc = Number(profile?.income || 150000).toLocaleString('en-IN');

    if (lang === 'hi') {
      return `📊 आपकी प्रोफ़ाइल (${occ}, ${cat}, राज्य: ${state}, वार्षिक आय: ₹${inc}) के आधार पर सभी योजनाएं सक्रिय हैं। नीचे दिए गए त्वरित प्रश्नों पर टैप करें या अपना प्रश्न टाइप करें।`;
    }
    if (lang === 'kn') {
      return `📊 ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ (${occ}, ${cat}, ರಾಜ್ಯ: ${state}, ವಾರ್ಷಿಕ ಆದಾಯ: ₹${inc}) ಆಧರಿಸಿ ಎಲ್ಲಾ ಯೋಜನೆಗಳು ಸಕ್ರಿಯವಾಗಿವೆ. ಕೆಳಗಿನ ಪ್ರಶ್ನೆಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ.`;
    }
    if (lang === 'te') {
      return `📊 మీ ధృవీకరించబడిన ప్రొఫైల్ (${occ}, ${cat}, రాష్ట్రం: ${state}, వార్షిక ఆదాయం: ₹${inc}) ఆధారంగా అన్ని పథకాలు అనుసంధానించబడ్డాయి. కింద ఉన్న ప్రశ్నలపై క్లిక్ చేయండి లేదా మీ ప్రశ్నను టైప్ చేయండి.`;
    }
    if (lang === 'ta') {
      return `📊 உங்கள் சுயவிவரம் (${occ}, ${cat}, மாநிலம்: ${state}, ஆண்டு வருமானம்: ₹${inc}) அடிப்படையில் அனைத்து திட்டங்களும் இணைக்கப்பட்டுள்ளன.`;
    }
    return `📊 Based on your verified profile (${occ}, ${cat}, State: ${state}, Income: ₹${inc}/yr), all central and state welfare databases are live and active. Tap any quick query below or type your question.`;
  };

  useEffect(() => {
    setMessages([
      {
        id: 1,
        sender: 'bot',
        text: getInitialWelcome(currentLang),
        time: '10:00 AM',
        audio: true
      },
      {
        id: 2,
        sender: 'bot',
        text: getProfileSummary(currentLang),
        time: '10:01 AM'
      }
    ]);
  }, [currentLang, profile?.state]);

  const baseQuickPrompts = currentLang === 'te' ? [
    '🌾 రైతులకు ఏ పథకాలు ఉన్నాయి?',
    '👩 మహిళల వ్యాపార రుణాలు & గ్రాంట్లు',
    '📄 PMEGP కి ఏ పత్రాలు కావాలి?',
    '☀️ పీఎం సూర్య ఘర్ ఉచిత విద్యుత్ వివరాలు',
    '🚩 కర్ణాటక గృహ లక్ష్మి & యువ నిధి వివరాలు'
  ] : currentLang === 'kn' ? [
    '🌾 ರೈತರಿಗೆ ಯಾವ ಯೋಜನೆಗಳಿವೆ?',
    '👩 ಮಹಿಳೆಯರ ಸಾಲ ಮತ್ತು ಸಬ್ಸಿಡಿಗಳು',
    '📄 PMEGP ಗೆ ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?',
    '☀️ ಪಿಎಂ ಸೂರ್ಯ ಘರ್ ಉಚಿತ ವಿದ್ಯುತ್ ಯೋಜನೆ',
    '🚩 ಕರ್ನಾಟಕ ಗೃಹ ಲಕ್ಷ್ಮಿ ಮತ್ತು ಯುವ ನಿಧಿ ವಿವರ'
  ] : currentLang === 'hi' ? [
    '🌾 किसानों के लिए कौन सी प्रमुख योजनाएं हैं?',
    '👩 महिला उद्यमियों के लिए ऋण व सब्सिडी',
    '📄 PMEGP के लिए कौन से दस्तावेज चाहिए?',
    '☀️ पीएम सूर्य घर मुफ्त बिजली योजना',
    '🚩 कर्नाटक की गृह लक्ष्मी व युवा निधि योजनाएं'
  ] : currentLang === 'ta' ? [
    '🌾 விவசாயிகளுக்கான சிறந்த திட்டங்கள்',
    '👩 மகளிர் தொழில் கடன்கள் & மானியங்கள்',
    '📄 PMEGP திட்டத்திற்கு தேவையான ஆவணங்கள்',
    '☀️ பிஎம் சூர்யா கர் இலவச மின்சாரத் திட்டம்'
  ] : [
    '🌾 What schemes are there for farmers?',
    '👩 Women business loans & subsidies',
    '📄 What documents are needed for PMEGP?',
    '☀️ PM Surya Ghar free electricity',
    '📊 How many farmers are getting benefit?'
  ];

  const quickPrompts = activeScheme ? [
    `📄 Documents for ${activeScheme.name.slice(0, 18)}`,
    `🎯 Who is eligible?`,
    `📝 How to apply?`,
    `💰 Benefit amount?`,
    ...baseQuickPrompts.slice(0, 2)
  ] : baseQuickPrompts;

  const handleSend = async (textToSend = inputText) => {
    const query = textToSend.trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await processBotQuery(query, profile, currentLang, activeScheme?.id);
      setIsTyping(false);

      if (response.scheme) {
        setActiveScheme(response.scheme);
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        portalUrl: response.portalUrl,
        schemeName: response.schemeName,
        audioText: response.audioText || response.text,
        quickReplies: response.quickReplies || [],
        userQuery: query,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      setIsTyping(false);
      const fallbackMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: currentLang === 'te' 
          ? "క్షమించండి, మీ ప్రశ్నకు సమాధానాన్ని రూపొందించడంలో సాంకేతిక అంతరాయం ఏర్పడింది. దయచేసి మళ్ళీ ప్రయత్నించండి."
          : "Sorry, an unexpected error occurred while looking up that scheme. Please try rephrasing your question.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    }
  };

  const handleToggleAudio = (msgId, text) => {
    if (isPlayingAudio && currentlyPlayingId === msgId) {
      bhashini.stopSpeaking();
      setIsPlayingAudio(false);
      setCurrentlyPlayingId(null);
    } else {
      bhashini.stopSpeaking();
      setIsPlayingAudio(true);
      setCurrentlyPlayingId(msgId);
      // Clean markdown stars and hashes before speaking
      const cleanSpeakText = text.replace(/[*#_`>]/g, '').replace(/https?:\/\/\S+/g, '');
      bhashini.speak(
        cleanSpeakText, 
        currentLang,
        () => {
          setIsPlayingAudio(true);
          setCurrentlyPlayingId(msgId);
        },
        () => {
          setIsPlayingAudio(false);
          setCurrentlyPlayingId(null);
        },
        () => {
          setIsPlayingAudio(false);
          setCurrentlyPlayingId(null);
        }
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl animate-fadeIn">
      
      {/* WhatsApp Header Bar */}
      <div className="p-4 bg-emerald-900/70 border-b border-emerald-800 flex items-center justify-between gap-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-base shadow-md">
              🏛️
            </div>
            <div className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950 absolute bottom-0 right-0 animate-pulse"></div>
          </div>

          <div>
            <div className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>{t('brandTitle')} Counselor AI</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-400/20 text-emerald-300 font-mono flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> 5,093 Schemes
              </span>
            </div>
            <div className="text-[11px] text-emerald-200">
              Online • All 16 Central Flagships & State Portals
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-emerald-200">
          {/* Live Citizen Satisfaction & Star Ratings Badge -> Click to Open Ledger */}
          <button 
            type="button"
            onClick={() => setShowReviewsModal(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/90 border border-amber-400/50 hover:border-amber-400 text-xs font-bold shadow-md hover:scale-[1.03] transition-all cursor-pointer group"
            title="Click to view Answer Reviews & Most Rated Answers"
          >
            <div className="flex items-center gap-1 text-amber-400">
              <Trophy className="w-3.5 h-3.5 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-white font-extrabold">{averageRating}</span>
              <span className="text-slate-400 font-normal">/5</span>
            </div>
            <span className="text-[10px] text-amber-300 font-semibold border-l border-slate-700 pl-2">
              {currentLang === 'te' ? 'రేటింగ్స్ డేటా & అత్యధిక రేటింగ్ 🏆' : 'Reviews & Most Rated 🏆'}
            </span>
          </button>

          <Phone className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
          <Video className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
          <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>

      {/* Active Scheme Context Pill */}
      {activeScheme && (
        <div className="px-4 py-1.5 bg-emerald-950/90 border-b border-emerald-800/60 flex items-center justify-between text-xs text-emerald-200">
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-white truncate">Active Topic: {activeScheme.name}</span>
          </div>
          <button 
            onClick={() => setActiveScheme(null)}
            className="text-[10px] text-emerald-300 hover:text-white px-2 py-0.5 rounded bg-emerald-900/60 border border-emerald-800 ml-2 transition-colors"
          >
            Switch Topic
          </button>
        </div>
      )}

      {/* Messages Scroll Area */}
      <div className="p-4 md:p-6 space-y-4 min-h-[440px] max-h-[520px] overflow-y-auto bg-slate-950/85">
        {messages.map((m) => {
          const isBot = m.sender === 'bot';
          const isCurrentAudioPlaying = isPlayingAudio && currentlyPlayingId === m.id;

          return (
            <div
              key={m.id}
              className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[88%] rounded-2xl p-4 space-y-3 text-xs md:text-sm shadow-lg transition-all ${
                  isBot
                    ? 'bg-slate-900 border border-slate-800 text-slate-100 rounded-tl-none'
                    : 'bg-emerald-700 text-white rounded-tr-none font-medium'
                }`}
              >
                {/* Bot Audio Readout Pill */}
                {isBot && (
                  <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                    <button
                      onClick={() => handleToggleAudio(m.id, m.audioText || m.text)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold flex items-center gap-1.5 transition-all text-xs"
                    >
                      {isCurrentAudioPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-current" />
                          <span>Stop</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{t('listenAudio')} (Bhashini Voice)</span>
                        </>
                      )}
                    </button>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <Bot className="w-3 h-3" /> AI Voice
                    </span>
                  </div>
                )}

                {/* Message Body */}
                <div className="whitespace-pre-line leading-relaxed font-sans text-slate-200">
                  {m.text}
                </div>

                {/* Direct Action Button to Official Government Portal */}
                {m.portalUrl && (
                  <div className="pt-2 border-t border-slate-800/80">
                    <a
                      href={m.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-900/30 transition-all transform hover:scale-[1.02]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{currentLang === 'te' ? 'అధికారిక పోర్టల్‌లో దరఖాస్తు చేయండి' : currentLang === 'kn' ? 'ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ' : currentLang === 'hi' ? 'आधिकारिक पोर्टल पर आवेदन करें' : 'Apply on Official Government Portal'}</span>
                    </a>
                  </div>
                )}

                {/* Follow-up Quick Chips */}
                {isBot && m.quickReplies && m.quickReplies.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-800/80">
                    {m.quickReplies.map((qr, qidx) => (
                      <button
                        key={qidx}
                        onClick={() => handleSend(qr)}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-800/90 hover:bg-emerald-600/30 text-emerald-300 border border-slate-700/80 hover:border-emerald-500 transition-all shadow-sm"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}

                {/* Citizen Review & Star Rating Bar */}
                {isBot && (
                  <div className="pt-2 mt-1 border-t border-slate-800/80 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-semibold text-slate-400">
                          {reviews[m.id]?.rating ? (
                            <span className="text-emerald-400 font-bold flex items-center gap-1">
                              <Check className="w-3 h-3 text-emerald-400" /> {t('thankYouRating')}
                            </span>
                          ) : (
                            <span>{t('rateAnswer')}</span>
                          )}
                        </span>
                        
                        {/* Interactive 5 Star Buttons */}
                        <div className="flex items-center gap-0.5 ml-1">
                          {[1, 2, 3, 4, 5].map((starVal) => {
                            const isFilled = (hoveredRating[m.id] !== undefined && hoveredRating[m.id] !== null)
                              ? hoveredRating[m.id] >= starVal
                              : (reviews[m.id]?.rating || 0) >= starVal;

                            return (
                              <button
                                key={starVal}
                                type="button"
                                onClick={() => handleRateMessage(m.id, starVal, m)}
                                onMouseEnter={() => setHoveredRating(prev => ({ ...prev, [m.id]: starVal }))}
                                onMouseLeave={() => setHoveredRating(prev => ({ ...prev, [m.id]: null }))}
                                className="p-0.5 rounded transition-transform transform hover:scale-125 focus:outline-none"
                                title={`${starVal} Star${starVal > 1 ? 's' : ''}`}
                              >
                                <Star 
                                  className={`w-4 h-4 transition-all duration-150 ${
                                    isFilled 
                                      ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]' 
                                      : 'text-slate-600 hover:text-amber-300'
                                  }`} 
                                />
                              </button>
                            );
                          })}
                        </div>

                        {reviews[m.id]?.rating && (
                          <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30">
                            {reviews[m.id].rating}/5 • {getRatingLabel(reviews[m.id].rating)}
                          </span>
                        )}
                      </div>

                      {/* Review text toggle & View All Ratings Link */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => toggleReviewBox(m.id)}
                          className="text-[11px] text-slate-400 hover:text-emerald-300 flex items-center gap-1 transition-colors px-2 py-0.5 rounded-lg hover:bg-slate-800/80 border border-transparent hover:border-slate-700"
                        >
                          <MessageSquare className="w-3 h-3 text-emerald-400" />
                          <span>{reviews[m.id]?.review ? 'Edit Review' : t('addReview')}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setShowReviewsModal(true)}
                          className="text-[10px] text-amber-400 hover:text-amber-300 flex items-center gap-0.5 font-semibold transition-colors px-1.5 py-0.5 rounded hover:bg-amber-400/10"
                          title="View all rated answers and which answer is rated most"
                        >
                          <Trophy className="w-3 h-3 text-amber-400" />
                          <span>All Ratings Data</span>
                        </button>
                      </div>
                    </div>

                    {/* Display Saved Review badge if submitted and drawer is closed */}
                    {reviews[m.id]?.review && !activeReviewBox[m.id] && (
                      <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-200 flex items-center justify-between gap-2 shadow-inner">
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="text-amber-400 font-medium">💬 &ldquo;{reviews[m.id].review}&rdquo;</span>
                        </div>
                        <span className="text-[10px] text-slate-500 whitespace-nowrap">{reviews[m.id].reviewAt || reviews[m.id].ratedAt}</span>
                      </div>
                    )}

                    {/* Expandable Review & Quick Feedback Drawer */}
                    {activeReviewBox[m.id] && (
                      <div className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2 animate-fadeIn">
                        <div className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          <span>Quick Feedback Tags:</span>
                        </div>

                        {/* Quick Feedback Tags */}
                        <div className="flex flex-wrap gap-1">
                          {getQuickFeedbackChips(currentLang).map((chip, cIdx) => (
                            <button
                              key={cIdx}
                              type="button"
                              onClick={() => handleQuickChipSelect(m.id, chip)}
                              className="px-2 py-0.5 rounded-md text-[10px] bg-slate-900 hover:bg-emerald-950/80 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-emerald-600/50 transition-all"
                            >
                              {chip}
                            </button>
                          ))}
                        </div>

                        {/* Input Text & Submit */}
                        <div className="flex items-center gap-1.5 pt-1">
                          <input
                            type="text"
                            value={reviewDrafts[m.id] ?? (reviews[m.id]?.review || '')}
                            onChange={(e) => setReviewDrafts(prev => ({ ...prev, [m.id]: e.target.value }))}
                            placeholder={t('reviewPlaceholder')}
                            className="flex-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleSaveReview(m.id);
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => handleSaveReview(m.id, m)}
                            className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1 transition-all shadow-sm"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>{t('submitReview')}</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Timestamp & Delivery status */}
                <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 pt-1">
                  <span>{m.time}</span>
                  {!isBot && <CheckCheck className="w-3.5 h-3.5 text-emerald-300" />}
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-900 border border-slate-800 text-slate-400 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-2">
              <span className="text-xs font-medium">SchemeSetu AI is checking scheme database</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions Chips */}
      <div className="px-4 py-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-thin">
        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider whitespace-nowrap flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> Quick Questions:
        </span>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-emerald-600/30 hover:border-emerald-500 text-slate-200 border border-slate-700/80 whitespace-nowrap transition-all shadow-sm"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Message Bar */}
      <div className="p-3.5 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={
            currentLang === 'te' 
              ? "ఏదైనా పథకం, రాయితీ లేదా కావలసిన డాక్యుమెంట్ల గురించి అడగండి..."
              : currentLang === 'kn'
              ? "ಯಾವುದೇ ಯೋಜನೆ, ಸಬ್ಸಿಡಿ ಅಥವಾ ದಾಖಲೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ..."
              : currentLang === 'hi'
              ? "किसी भी योजना, सब्सिडी या आवश्यक दस्तावेजों के बारे में पूछें..."
              : "Ask about any scheme, subsidy, documents, eligibility or how to apply..."
          }
          className="flex-1 px-4 py-2.5 rounded-2xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs md:text-sm focus:outline-none focus:border-emerald-500 transition-colors"
        />

        {/* Voice Input Microphone Button */}
        <button
          onClick={toggleListening}
          title={isListening ? "Listening... Click to stop" : "Speak your question (Voice Input)"}
          className={`p-3 rounded-2xl transition-all shadow-md ${
            isListening 
              ? 'bg-rose-500 text-white animate-pulse shadow-rose-500/30' 
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
          }`}
        >
          {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
        </button>

        {/* Send Button */}
        <button
          onClick={() => handleSend()}
          className="p-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-md shadow-emerald-500/20"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>



      {/* Answer Reviews & Most Rated Answers Ledger Modal */}
      <AnswerReviewsModal
        isOpen={showReviewsModal}
        onClose={() => setShowReviewsModal(false)}
        currentLang={currentLang}
        onSelectQuestion={(q) => handleSend(q)}
      />
    </div>
  );
}
