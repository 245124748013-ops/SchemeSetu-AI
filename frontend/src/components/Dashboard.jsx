import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  Award, 
  FileCheck2, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Volume2, 
  Layers, 
  Building2, 
  Coins, 
  Sliders,
  MessageSquare,
  Search,
  Landmark,
  Flag,
  MapPin,
  Users,
  BookOpenCheck,
  Download,
  ShieldCheck
} from 'lucide-react';
import { bhashini } from '../services/bhashiniService';
import { getSafePortalUrl, getNationalMirrorUrl } from '../services/schemesData';
import { DEMO_PERSONAS } from '../services/personas';
import VoiceReader from './VoiceReader';

export default function Dashboard({ 
  user, 
  profile, 
  setProfile, 
  matchingResults, 
  setActiveTab, 
  onRunDiscovery,
  isAnalyzing, 
  currentLang = 'en',
  onOpenPassbook
}) {
  const t = (k) => bhashini.t(k, currentLang);
  const [levelFilter, setLevelFilter] = useState('ALL'); // 'ALL' | 'Central' | 'State'
  
  const rawSchemes = matchingResults?.ranked_schemes || [];
  const localizedSchemes = rawSchemes.map(s => bhashini.getLocalizedScheme(s, currentLang));
  const topEligible = localizedSchemes.filter(s => s.is_eligible);
  const eligibleCount = topEligible.length;

  const centralEligible = topEligible.filter(s => s.level === 'Central' || s.level === 'Centrally Sponsored').length;
  const stateEligible = topEligible.filter(s => s.level === 'State').length;

  const filteredRecommendations = useMemo(() => {
    return topEligible.filter(s => {
      if (levelFilter === 'Central') return s.level === 'Central' || s.level === 'Centrally Sponsored';
      if (levelFilter === 'State') return s.level === 'State';
      return true;
    }).slice(0, 3);
  }, [topEligible, levelFilter]);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Welcome & Persona Status Banner */}
      <div className="relative glass-panel rounded-3xl p-6 md:p-8 border border-slate-700/60 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-3xl">{user?.avatar || '🇮🇳'}</span>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
                  {t('welcome')}, {profile?.name || user?.name || 'Citizen'}!
                </h1>
                <p className="text-xs md:text-sm text-slate-300">
                  <span className="text-amber-400 font-semibold">{bhashini.getOccupationName(profile?.occupation, currentLang)}</span> • <span className="text-emerald-400 font-semibold">{bhashini.getCategoryName(profile?.category, currentLang)}</span> • <span className="text-cyan-300 font-semibold">🚩 {bhashini.getStateName(profile?.state, currentLang)}</span>
                </p>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-400 pt-1">
              {t('layerPipelineSub')}
            </p>
          </div>

          {/* Quick Action CTA buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <button
              onClick={() => setActiveTab('match')}
              disabled={isAnalyzing}
              className="py-3 px-5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-xs md:text-sm shadow-xl shadow-amber-500/20 flex items-center gap-2 transition-all transform active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>{isAnalyzing ? t('analyzingText') : t('refineMatchBtn')}</span>
            </button>

            <button
              onClick={onOpenPassbook}
              className="py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs md:text-sm shadow-lg shadow-emerald-600/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <BookOpenCheck className="w-4 h-4" />
              <span>{t('passbook')}</span>
            </button>

            <button
              onClick={() => setActiveTab('whatsapp')}
              className="py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs md:text-sm border border-slate-700 flex items-center gap-2 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>{t('askWhatsappBtn')}</span>
            </button>
          </div>
        </div>

        {/* Quick Switch Persona Bar */}
        <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-3 overflow-x-auto pb-1">
          <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap uppercase tracking-wider">
            {t('switchPersona')}
          </span>
          {DEMO_PERSONAS.map((p) => {
            const isActive = profile?.name === p.name;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setProfile(p.profile);
                  onRunDiscovery(p.profile);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
                    : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                <span>{p.avatar}</span>
                <span>{bhashini.getPersonaName(p.name, currentLang)}</span>
                <span className="text-[10px] opacity-75 font-normal">({bhashini.getStateName(p.profile.state, currentLang)})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Metric KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        
        {/* Card 1: Eligible Schemes Breakdown */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between hover:border-amber-500/40 transition-all">
          <div className="space-y-1">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t('qualifiedSchemes')}</div>
            <div className="text-3xl font-black text-amber-400">{eligibleCount}</div>
            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <span className="text-amber-300 font-semibold">🏛️ {centralEligible} {t('centralCount')}</span> • 
              <span className="text-cyan-300 font-semibold">🚩 {stateEligible} {t('stateCount')}</span>
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Award className="w-6 h-6" />
          </div>
        </div>

        {/* Card 2: Potential Financial Assistance */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between hover:border-emerald-500/40 transition-all">
          <div className="space-y-1">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t('maxAssistance')}</div>
            <div className="text-3xl font-black text-emerald-400">₹50 {t('lakhs')}</div>
            <div className="text-[11px] text-slate-400">{t('flagshipKpiSchemes')}</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Coins className="w-6 h-6" />
          </div>
        </div>

        {/* Card 3: Match Confidence */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between hover:border-sky-500/40 transition-all">
          <div className="space-y-1">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t('topMatchConfidence')}</div>
            <div className="text-3xl font-black text-sky-400">
              {topEligible[0]?.combined_confidence || 96.4}%
            </div>
            <div className="text-[11px] text-slate-400">{t('hybridRuleText')}</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        {/* Card 4: Document Readiness */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between hover:border-purple-500/40 transition-all">
          <div className="space-y-1">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{t('docReadiness')}</div>
            <div className="text-3xl font-black text-purple-400">100%</div>
            <div className="text-[11px] text-slate-400">{t('directDbtText')}</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <FileCheck2 className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* Standout Feature Spotlight Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Feature Banner 1: Yojana Passbook */}
        <div 
          onClick={onOpenPassbook}
          className="p-6 rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/40 hover:border-amber-400 shadow-xl flex flex-col justify-between group cursor-pointer transition-all hover:scale-[1.01]"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <BookOpenCheck className="w-3.5 h-3.5" /> {t('oneClickExport')}
              </span>
              <span className="text-xs font-bold text-slate-400">{t('printReadyPdf')}</span>
            </div>
            <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors">
              {t('passbookSpotlightTitle')}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t('passbookSpotlightDesc')}
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-amber-400">
            <span>{t('downloadPassbook')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Feature Banner 2: Family Optimizer */}
        <div 
          onClick={() => setActiveTab('family')}
          className="p-6 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/40 hover:border-cyan-400 shadow-xl flex flex-col justify-between group cursor-pointer transition-all hover:scale-[1.01]"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> {t('multiMemberMaximizer')}
              </span>
              <span className="text-xs font-bold text-slate-400">{t('householdWealth')}</span>
            </div>
            <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
              {t('familySpotlightTitle')}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t('familySpotlightDesc')}
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-cyan-400">
            <span>{t('exploreFamilyOptimizer')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

      </div>

      {/* Top Recommendations with Central / State Toggle */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              {t('topRecommendedTitle')}
            </h3>
            <p className="text-xs text-slate-400">{t('topRecommendedSub')}</p>
          </div>

          {/* Quick Level Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setLevelFilter('ALL')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                levelFilter === 'ALL' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('allSchemes')} ({eligibleCount})
            </button>
            <button
              onClick={() => setLevelFilter('Central')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                levelFilter === 'Central' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              🏛️ {t('centralGovt')} ({centralEligible})
            </button>
            <button
              onClick={() => setLevelFilter('State')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                levelFilter === 'State' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              🚩 {t('stateGovt')} ({stateEligible})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredRecommendations.map((scheme) => {
            const isState = scheme.level === 'State';
            const stateLabel = scheme.state || (scheme.states && scheme.states[0] !== 'All' ? scheme.states[0] : 'State');
            return (
              <div
                key={scheme.scheme_id}
                className={`glass-card p-5 rounded-2xl border flex flex-col justify-between hover:shadow-xl transition-all relative overflow-hidden group ${
                  isState ? 'border-cyan-500/30 hover:border-cyan-400 bg-gradient-to-b from-slate-900/90 to-cyan-950/20' : 'border-slate-800 hover:border-amber-500/50'
                }`}
              >
                <div className="space-y-3">
                  {/* Header badges */}
                  <div className="flex items-start justify-between gap-2">
                    {isState ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                        <Flag className="w-3 h-3" />
                        <span>🚩 {t('stateGovt')}: {bhashini.getStateName(stateLabel, currentLang)}</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                        <Landmark className="w-3 h-3" />
                        <span>🏛️ {t('centralGovt')}</span>
                      </span>
                    )}

                    <div className="flex items-center gap-1.5">
                      <VoiceReader 
                        text={`${scheme.name}. ${scheme.summary}. ${t('benefit')}: ${scheme.financial_benefit}`} 
                        currentLang={currentLang}
                        label={t('listenAudio')}
                      />
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {scheme.combined_confidence}%
                      </span>
                    </div>
                  </div>

                  {/* Scheme Name */}
                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                    {scheme.name}
                  </h4>

                  <p className="text-xs text-slate-300 line-clamp-3">
                    {scheme.summary}
                  </p>

                  {/* Financial Benefit Highlight */}
                  {scheme.financial_benefit && (
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                      <span className="text-slate-400 font-medium">{t('benefit')}: </span>
                      <span className="text-emerald-400 font-bold">{scheme.financial_benefit}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Apply & Explore Actions */}
                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveTab('match')}
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 cursor-pointer"
                  >
                    {t('viewDetails')}
                  </button>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    <a
                      href={getSafePortalUrl(scheme)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-md shadow-amber-500/10 cursor-pointer"
                      title="Official Department Portal"
                    >
                      <span>{t('applyNow')}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}