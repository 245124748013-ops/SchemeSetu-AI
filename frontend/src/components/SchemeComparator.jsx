import React, { useState } from 'react';
import { 
  GitCompare, 
  Coins, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Landmark,
  Flag,
  MapPin
} from 'lucide-react';
import { SCHEMES_DATABASE } from '../services/schemesData';
import { bhashini } from '../services/bhashiniService';

export default function SchemeComparator({ currentLang = 'hi' }) {
  const t = (k) => bhashini.t(k, currentLang);
  const [schemeId1, setSchemeId1] = useState('pmegp-001');
  const [schemeId2, setSchemeId2] = useState('state-ka-gruha-lakshmi-017');
  const [schemeId3, setSchemeId3] = useState('state-tg-dalit-bandhu-020');

  const raw1 = SCHEMES_DATABASE.find(s => s.id === schemeId1) || SCHEMES_DATABASE[0];
  const raw2 = SCHEMES_DATABASE.find(s => s.id === schemeId2) || SCHEMES_DATABASE[1];
  const raw3 = SCHEMES_DATABASE.find(s => s.id === schemeId3) || SCHEMES_DATABASE[2];

  const s1 = bhashini.getLocalizedScheme(raw1, currentLang);
  const s2 = bhashini.getLocalizedScheme(raw2, currentLang);
  const s3 = bhashini.getLocalizedScheme(raw3, currentLang);

  const getLevelBadge = (raw) => {
    if (raw.level === 'State') {
      const stateRaw = raw.eligibility_criteria?.states?.[0] || 'State';
      const locState = bhashini.getStateName(stateRaw, currentLang);
      const stateBadge = t('stateGovtBadge') || '🚩 రాష్ట్ర ప్రభుత్వం';
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
          <Flag className="w-3 h-3" />
          <span>{stateBadge} ({locState})</span>
        </span>
      );
    }
    const centralBadge = t('centralGovtBadge') || '🏛️ కేంద్ర ప్రభుత్వం';
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
        <Landmark className="w-3 h-3" />
        <span>{centralBadge}</span>
      </span>
    );
  };

  const getSchemeOptionLabel = (s) => {
    const loc = bhashini.getLocalizedScheme(s, currentLang);
    const locState = s.eligibility_criteria?.states?.[0] 
      ? bhashini.getStateName(s.eligibility_criteria.states[0], currentLang) 
      : (t('state') || 'రాష్ట్రం');
    const centralText = t('centralGovt') || 'కేంద్ర ప్రభుత్వం';
    const tag = s.level === 'State' ? `[🚩 ${locState}]` : `[🏛️ ${centralText}]`;
    return `${tag} ${loc.name}`;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <GitCompare className="w-5 h-5 text-amber-400" />
          {t('compareTitle') || t('compare') || 'పథకాల పోలిక'}
        </h2>
        <p className="text-xs md:text-sm text-slate-400 pt-1">
          {t('compareSubtitle') || 'అర్హత, ఆర్థిక గ్రాంట్, రాష్ట్ర పరిధి మరియు కావలసిన పత్రాల ఆధారంగా కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ సంక్షేమ పథకాలను పక్కపక్కనే సరిపోల్చండి.'}
        </p>
      </div>

      {/* Scheme Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-amber-400 flex items-center justify-between">
            <span>{t('schemeNumber') || 'పథకం'} #1:</span>
            {getLevelBadge(raw1)}
          </label>
          <select
            value={schemeId1}
            onChange={(e) => setSchemeId1(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold focus:outline-none focus:border-amber-400 cursor-pointer"
          >
            {SCHEMES_DATABASE.map(s => (
              <option key={s.id} value={s.id}>{getSchemeOptionLabel(s)}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-emerald-400 flex items-center justify-between">
            <span>{t('schemeNumber') || 'పథకం'} #2:</span>
            {getLevelBadge(raw2)}
          </label>
          <select
            value={schemeId2}
            onChange={(e) => setSchemeId2(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold focus:outline-none focus:border-emerald-400 cursor-pointer"
          >
            {SCHEMES_DATABASE.map(s => (
              <option key={s.id} value={s.id}>{getSchemeOptionLabel(s)}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-sky-400 flex items-center justify-between">
            <span>{t('schemeNumber') || 'పథకం'} #3:</span>
            {getLevelBadge(raw3)}
          </label>
          <select
            value={schemeId3}
            onChange={(e) => setSchemeId3(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold focus:outline-none focus:border-sky-400 cursor-pointer"
          >
            {SCHEMES_DATABASE.map(s => (
              <option key={s.id} value={s.id}>{getSchemeOptionLabel(s)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-400">
                <th className="p-4 font-bold uppercase tracking-wider w-1/4">{t('featureParameter') || 'ముఖ్య అంశాలు / వివరాలు'}</th>
                <th className="p-4 font-bold text-amber-400 w-1/4">{s1.name}</th>
                <th className="p-4 font-bold text-emerald-400 w-1/4">{s2.name}</th>
                <th className="p-4 font-bold text-sky-400 w-1/4">{s3.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-200">
              
              <tr>
                <td className="p-4 font-semibold text-slate-400">{t('governmentLevel') || 'ప్రభుత్వ స్థాయి'}</td>
                <td className="p-4">{getLevelBadge(raw1)}</td>
                <td className="p-4">{getLevelBadge(raw2)}</td>
                <td className="p-4">{getLevelBadge(raw3)}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-400">{t('stateJurisdiction') || 'రాష్ట్ర పరిధి / నివాసం'}</td>
                <td className="p-4 font-semibold text-amber-300">
                  {raw1.eligibility_criteria?.states?.map(st => bhashini.getStateName(st, currentLang)).join(', ') || t('allIndia') || 'జాతీయ / భారతదేశం మొత్తం'}
                </td>
                <td className="p-4 font-semibold text-cyan-300">
                  {raw2.eligibility_criteria?.states?.map(st => bhashini.getStateName(st, currentLang)).join(', ') || t('allIndia') || 'జాతీయ / భారతదేశం మొత్తం'}
                </td>
                <td className="p-4 font-semibold text-cyan-300">
                  {raw3.eligibility_criteria?.states?.map(st => bhashini.getStateName(st, currentLang)).join(', ') || t('allIndia') || 'జాతీయ / భారతదేశం మొత్తం'}
                </td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-400">{t('ministryDept') || 'మంత్రిత్వ శాఖ / విభాగం'}</td>
                <td className="p-4">{bhashini.translateMinistry(s1.ministry, currentLang)}</td>
                <td className="p-4">{bhashini.translateMinistry(s2.ministry, currentLang)}</td>
                <td className="p-4">{bhashini.translateMinistry(s3.ministry, currentLang)}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-400">{t('sectorCategory') || 'రంగం / వర్గం'}</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold">{bhashini.getSchemeCategoryName(s1.category, currentLang)}</span></td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">{bhashini.getSchemeCategoryName(s2.category, currentLang)}</span></td>
                <td className="p-4"><span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-bold">{bhashini.getSchemeCategoryName(s3.category, currentLang)}</span></td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-400">{t('financialBenefitSubsidy') || 'ఆర్థిక ప్రయోజనం / సబ్సిడీ'}</td>
                <td className="p-4 text-emerald-300 font-bold">{s1.financial_benefit}</td>
                <td className="p-4 text-emerald-300 font-bold">{s2.financial_benefit}</td>
                <td className="p-4 text-emerald-300 font-bold">{s3.financial_benefit}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-400">{t('targetBeneficiary') || 'లక్షిత లబ్ధిదారులు'}</td>
                <td className="p-4">{bhashini.translateTargetBeneficiary(s1.target_beneficiary, currentLang)}</td>
                <td className="p-4">{bhashini.translateTargetBeneficiary(s2.target_beneficiary, currentLang)}</td>
                <td className="p-4">{bhashini.translateTargetBeneficiary(s3.target_beneficiary, currentLang)}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-400">{t('ageBracket') || 'వయోపరిమితి'}</td>
                <td className="p-4">{raw1.eligibility_criteria?.min_age || 18} - {raw1.eligibility_criteria?.max_age || 65} {t('yearsOld') || 'సంవత్సరాలు'}</td>
                <td className="p-4">{raw2.eligibility_criteria?.min_age || 18} - {raw2.eligibility_criteria?.max_age || 70} {t('yearsOld') || 'సంవత్సరాలు'}</td>
                <td className="p-4">{raw3.eligibility_criteria?.min_age || 18} - {raw3.eligibility_criteria?.max_age || 65} {t('yearsOld') || 'సంవత్సరాలు'}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-400">{t('incomeCutoff') || 'ఆదాయ పరిమితి'}</td>
                <td className="p-4">{raw1.eligibility_criteria?.max_annual_income ? `₹${Number(raw1.eligibility_criteria.max_annual_income).toLocaleString('en-IN')}` : (t('noIncomeCeiling') || 'గరిష్ట పరిమితి లేదు')}</td>
                <td className="p-4">{raw2.eligibility_criteria?.max_annual_income ? `₹${Number(raw2.eligibility_criteria.max_annual_income).toLocaleString('en-IN')}` : (t('noIncomeCeiling') || 'గరిష్ట పరిమితి లేదు')}</td>
                <td className="p-4">{raw3.eligibility_criteria?.max_annual_income ? `₹${Number(raw3.eligibility_criteria.max_annual_income).toLocaleString('en-IN')}` : (t('noIncomeCeiling') || 'గరిష్ట పరిమితి లేదు')}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-400">{t('requiredDocsLabel') || 'కావలసిన పత్రాలు'}</td>
                <td className="p-4">{raw1.required_documents?.length || 5} {t('documentsCount') || 'పత్రాలు'}</td>
                <td className="p-4">{raw2.required_documents?.length || 5} {t('documentsCount') || 'పత్రాలు'}</td>
                <td className="p-4">{raw3.required_documents?.length || 5} {t('documentsCount') || 'పత్రాలు'}</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-400">{t('applicationPortal') || 'దరఖాస్తు పోర్టల్'}</td>
                <td className="p-4">
                  <a href={raw1.portal_url || raw1.official_portal_url} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline flex items-center gap-1 font-bold">
                    <span>{t('applyNow')}</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
                <td className="p-4">
                  <a href={raw2.portal_url || raw2.official_portal_url} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline flex items-center gap-1 font-bold">
                    <span>{t('applyNow')}</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
                <td className="p-4">
                  <a href={raw3.portal_url || raw3.official_portal_url} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline flex items-center gap-1 font-bold">
                    <span>{t('applyNow')}</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
