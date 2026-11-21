import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Award, 
  Building2, 
  Users,
  ShieldCheck
} from 'lucide-react';
import { SCHEMES_DATABASE } from '../services/schemesData';
import { bhashini } from '../services/bhashiniService';

export default function AnalyticsView({ currentLang = 'hi' }) {
  const t = (k) => bhashini.t(k, currentLang);

  const categoriesCount = SCHEMES_DATABASE.reduce((acc, s) => {
    acc[s.category] = (acc[s.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-amber-400" />
          {t('analyticsTitle')}
        </h2>
        <p className="text-xs md:text-sm text-slate-400 pt-1">
          {t('analyticsSub')}
        </p>
      </div>

      {/* Top 3 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <div className="text-xs text-slate-400 uppercase font-semibold">{t('totalIndexed')}</div>
          <div className="text-3xl font-black text-amber-400 mt-1">{SCHEMES_DATABASE.length}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">{t('indexedSchemesText')}</div>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <div className="text-xs text-slate-400 uppercase font-semibold">{t('maxAssistance')}</div>
          <div className="text-3xl font-black text-emerald-400 mt-1">₹1 Crore</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Stand-Up India & PMEGP</div>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <div className="text-xs text-slate-400 uppercase font-semibold">Language Reach</div>
          <div className="text-3xl font-black text-sky-400 mt-1">10 Languages</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Bhashini Multilingual AI Engine</div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Sectoral Allocation */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Building2 className="w-4 h-4 text-amber-400" />
            {currentLang === 'hi' ? 'क्षेत्रवार योजना वितरण' : currentLang === 'te' ? 'రంగాల వారీగా పథకాలు' : currentLang === 'ta' ? 'துறை வாரியான திட்டங்கள்' : currentLang === 'kn' ? 'ವಲಯವಾರು ಯೋಜನೆಗಳು' : currentLang === 'ml' ? 'മേഖല തിരിച്ചുള്ള പദ്ധതികൾ' : currentLang === 'gu' ? 'ક્ષેત્રવાર યોજનાઓ' : currentLang === 'pa' ? 'ਖੇਤਰ ਅਨੁਸਾਰ ਸਕੀਮਾਂ' : currentLang === 'mr' ? 'क्षेत्रनिहाय योजना' : currentLang === 'bn' ? 'ক্ষেত্রভিত্তিক যোজনা' : 'Sectoral Scheme Distribution'}
          </h3>

          <div className="space-y-3">
            {Object.entries(categoriesCount).map(([cat, count], idx) => {
              const pct = Math.round((count / SCHEMES_DATABASE.length) * 100);
              return (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span className="text-slate-300">{cat}</span>
                    <span className="text-amber-400">{count} ({pct}%)</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Scoring Architecture Insights */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            {t('layerPipelineTitle')}
          </h3>

          <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="font-bold text-amber-400">1. {currentLang === 'hi' ? 'सख्त नियम इंजन (55% भार)' : 'Deterministic Rules (55%)'}</div>
              <p className="text-slate-400">Evaluates hard constraints: age bracket, annual family income ceilings, gender mandates, and landholding thresholds.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="font-bold text-sky-400">2. {currentLang === 'hi' ? 'सिमेंटिक वेक्टर RAG (40% भार)' : 'Semantic RAG (40%)'}</div>
              <p className="text-slate-400">Computes cosine similarity against tokenized knowledge chunks, synonyms, and targeted sector goals.</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="font-bold text-emerald-400">3. {currentLang === 'hi' ? 'सकारात्मक सामाजिक बोनस (+5%)' : 'Affirmative Action Bonus (+5%)'}</div>
              <p className="text-slate-400">Special affirmative boosts for Women Entrepreneurs, SC/ST, and rural Gram Panchayat applicants.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
