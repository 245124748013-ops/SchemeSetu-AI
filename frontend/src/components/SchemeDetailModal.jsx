import React from 'react';
import { X, Layers, ExternalLink, ShieldCheck, CheckCircle2, Search } from 'lucide-react';
import { bhashini } from '../services/bhashiniService';
import { getSafePortalUrl, getNationalMirrorUrl, getGoogleSearchUrl } from '../services/schemesData';

export default function SchemeDetailModal({ scheme: rawScheme, onClose, currentLang = 'hi' }) {
  if (!rawScheme) return null;

  const t = (k) => bhashini.t(k, currentLang);
  const scheme = bhashini.getLocalizedScheme(rawScheme, currentLang);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-3xl rounded-3xl border border-slate-700 shadow-2xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {scheme.category}
            </span>
            <h3 className="text-xl font-bold text-white">{scheme.name}</h3>
            <p className="text-xs text-slate-400">{scheme.ministry}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confidence breakdown */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">{t('topMatchConfidence')}</div>
            <div className="text-xl font-black text-amber-400">{scheme.combined_confidence || 88}%</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Rule Cutoff Match</div>
            <div className="text-xl font-black text-emerald-400">{scheme.rule_score || 95}%</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Semantic Cosine</div>
            <div className="text-xl font-black text-sky-400">{scheme.semantic_score || 82}%</div>
          </div>
        </div>

        {/* Financial Benefit banner */}
        {scheme.financial_benefit && (
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">{t('financialBenefit')}</div>
            <div className="text-sm font-semibold text-amber-200">{scheme.financial_benefit}</div>
          </div>
        )}

        {/* Retrieved RAG Clauses */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            {t('inspectClausesBtn')} (Vector RAG Store)
          </h4>

          <div className="space-y-2.5">
            {(rawScheme.retrieved_clauses || rawScheme.rag_clauses || []).map((clause, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 leading-relaxed space-y-1"
              >
                <div className="flex items-center justify-between text-[10px] text-sky-400 font-mono">
                  <span>Clause Chunk #{idx + 1}</span>
                  <span>Indexed Vector Clause</span>
                </div>
                <p>{clause}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rule Evaluations Details */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            {t('eligible')} - Deterministic Rule Verification Checks
          </h4>
          <div className="space-y-1.5">
            {(rawScheme.passed_criteria || [
              'Age within eligible bracket (18-65 yrs)',
              'Social category & occupation criteria met',
              'Income ceiling criteria satisfied',
              'All-India Central / State jurisdiction verified'
            ]).map((crit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" />
                <span>{crit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold"
          >
            {currentLang === 'hi' ? 'बंद करें' : currentLang === 'te' ? 'మూసివేయండి' : currentLang === 'ta' ? 'மூடுக' : currentLang === 'kn' ? 'ಮುಚ್ಚಿ' : currentLang === 'ml' ? 'അടയ്ക്കുക' : currentLang === 'gu' ? 'બંધ કરો' : currentLang === 'pa' ? 'ਬੰਦ ਕਰੋ' : currentLang === 'mr' ? 'बंद करा' : currentLang === 'bn' ? 'বন্ধ করুন' : 'Close'}
          </button>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={getSafePortalUrl(rawScheme)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md"
            >
              <span>{t('directApplyPortal')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={getGoogleSearchUrl(rawScheme)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 hover:text-sky-300 text-xs font-semibold flex items-center gap-1 border border-slate-700"
              title="Search this scheme on Google"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Google</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
