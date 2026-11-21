import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Cpu, 
  Filter, 
  Database, 
  BrainCircuit
} from 'lucide-react';
import { bhashini } from '../services/bhashiniService';

export default function AgentVisualizer({ trace = [], isAnalyzing = false, currentLang = 'hi' }) {
  const t = (k) => bhashini.t(k, currentLang);

  const stepLabels = {
    hi: ['प्रोफाइल व मानदंड पार्सिंग', 'सख्त नियम कटऑफ जांच', 'सिमेंटिक वेक्टर व RAG खोज', 'AI स्कोर फ्यूजन व रैंकिंग'],
    kn: ['ಪ್ರೊಫೈಲ್ ಪಾರ್ಸಿಂಗ್', 'ನಿಯಮಗಳ ಪರಿಶೀಲನೆ', 'ಸೆಮ್ಯಾಂಟಿಕ್ RAG ಹುಡುಕಾಟ', 'AI ಸ್ಕೋರ್ ಫ್ಯೂಷನ್'],
    ml: ['പ്രൊഫൈൽ വിശകലനം', 'റൂൾ പരിശോധന', 'സെമാന്റിക് RAG തിരച്ചിൽ', 'AI സ്കോർ ഫ്യൂഷൻ'],
    gu: ['પ્રોફાઇલ પૂર્વાવલોકન', 'નિયમ ચકાસણી', 'સિમેન્ટિક RAG શોધ', 'AI સ્કોર ફ્યુઝન'],
    pa: ['ਪ੍ਰੋਫਾਈਲ ਜਾਂਚ', 'ਨਿਯਮ ਪੜਤਾਲ', 'ਸਿਮੈਂਟਿਕ RAG ਖੋਜ', 'AI ਸਕੋਰ ਰੈਂਕਿੰਗ'],
    te: ['ప్రొఫైల్ విశ్లేషణ', 'నిబంధనల తనిಖీ', 'సెమాంటిక్ RAG శోధన', 'AI స్కోర్ ఫ్యూజన్'],
    ta: ['சுயவிவர பகுப்பாய்வு', 'விதி சரிபார்ப்பு', 'RAG தேடல்', 'AI தரவரிசை'],
    mr: ['माहिती विश्लेषण', 'नियम पडताळणी', 'सिमेंटिक RAG शोध', 'AI स्कोअर रँकिंग'],
    bn: ['প্রোফাইল বিশ্লেষণ', 'নিয়ম যাচাই', 'সিমান্টিক RAG অনুসন্ধান', 'AI স্কোর র‍্যাঙ্কিং'],
    en: ['Constraint & Profile Parsing', 'Deterministic Rule Cutoffs', 'Semantic Vector & RAG Retrieval', 'Score Fusion & Re-Ranking']
  };

  const labels = stepLabels[currentLang] || stepLabels['hi'];

  const steps = [
    { step: 1, name: labels[0], icon: Filter, color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30' },
    { step: 2, name: labels[1], icon: Cpu, color: 'text-sky-400', bgColor: 'bg-sky-500/10', borderColor: 'border-sky-500/30' },
    { step: 3, name: labels[2], icon: Database, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
    { step: 4, name: labels[3], icon: BrainCircuit, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' }
  ];

  return (
    <div className="glass-panel p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-amber-400" />
            {t('layerPipelineTitle')}
          </h3>
          <p className="text-xs text-slate-400">{t('layerPipelineSub')}</p>
        </div>

        {isAnalyzing ? (
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold animate-pulse">
            <Clock className="w-3.5 h-3.5 animate-spin" />
            <span>{t('analyzingText')}</span>
          </span>
        ) : (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Pipeline Active</span>
          </span>
        )}
      </div>

      {/* Steps visual flow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
        {steps.map((st) => {
          const Icon = st.icon;
          const traceItem = trace.find(tItem => tItem.step === st.step);
          const isDone = Boolean(traceItem);

          return (
            <div
              key={st.step}
              className={`p-4 rounded-2xl border transition-all ${
                isDone 
                  ? `${st.bgColor} ${st.borderColor}`
                  : 'bg-slate-900/60 border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${st.color}`}>
                  Step 0{st.step}
                </span>
                {isDone ? (
                  <CheckCircle2 className={`w-4 h-4 ${st.color}`} />
                ) : (
                  <div className="w-3 h-3 rounded-full border border-slate-700"></div>
                )}
              </div>

              <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                <Icon className={`w-3.5 h-3.5 ${st.color}`} />
                <span>{st.name}</span>
              </div>

              <p className="text-[11px] text-slate-400 leading-snug">
                {traceItem?.action || (isAnalyzing ? 'Processing...' : 'Ready')}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
