import React from 'react';
import { X, Printer, FileText, CheckCircle2, ExternalLink } from 'lucide-react';
import { bhashini } from '../services/bhashiniService';

export default function SchemeDossierModal({ profile, matchingResults, onClose, currentLang = 'hi' }) {
  const t = (k) => bhashini.t(k, currentLang);
  const eligibleSchemes = (matchingResults?.ranked_schemes || []).filter(s => s.is_eligible);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-4xl rounded-3xl border border-slate-700 shadow-2xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🇮🇳</span>
            <div>
              <h3 className="text-xl font-bold text-white">{t('dossierTitle')}</h3>
              <p className="text-xs text-slate-400">{t('dossierSub')}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t('printDossierBtn')}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Citizen Profile Card */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block">{t('fullName')}:</span>
            <strong className="text-white text-sm">{profile?.name || 'Citizen'}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">{t('age')} & {t('gender')}:</span>
            <strong className="text-white text-sm">{profile?.age || 30} Yrs • {profile?.gender || 'Female'}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">{t('category')} & {t('state')}:</span>
            <strong className="text-white text-sm">{profile?.category || 'OBC'} • {profile?.state || 'National'}</strong>
          </div>
          <div>
            <span className="text-slate-400 block">{t('annualIncome')}:</span>
            <strong className="text-emerald-400 text-sm">₹{Number(profile?.income || 120000).toLocaleString('en-IN')}</strong>
          </div>
        </div>

        {/* Qualified Schemes Table */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-amber-400" />
            {t('qualifiedSchemes')} ({eligibleSchemes.length})
          </h4>

          <div className="space-y-3">
            {eligibleSchemes.map((rawScheme, idx) => {
              const s = bhashini.getLocalizedScheme(rawScheme, currentLang);
              return (
                <div
                  key={s.scheme_id}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h5 className="font-bold text-sm text-amber-300">
                        {idx + 1}. {s.name}
                      </h5>
                      <p className="text-slate-400 text-[11px]">{s.ministry || rawScheme.ministry}</p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-[10px] border border-emerald-500/20">
                      {s.combined_confidence || 90}% Match
                    </span>
                  </div>

                  <p className="text-slate-300 leading-relaxed">{s.summary}</p>

                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 font-semibold">
                    <span className="text-amber-400 font-bold">{t('financialBenefit')}: </span>
                    {s.financial_benefit}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-400">
                      Official Portal: {rawScheme.official_portal_url}
                    </span>
                    <a
                      href={rawScheme.official_portal_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline flex items-center gap-1 font-bold text-xs"
                    >
                      <span>{t('applyNow')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
