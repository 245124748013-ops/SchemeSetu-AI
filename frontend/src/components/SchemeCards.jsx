import React, { useState, useMemo } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  Volume2, 
  VolumeX, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Coins, 
  Layers, 
  Sparkles,
  Filter,
  MapPin,
  Landmark,
  Flag,
  Briefcase,
  UserCheck,
  Search,
  BookOpenCheck,
  FileDown,
  AlertTriangle
} from 'lucide-react';
import { bhashini, SCHEME_TRANSLATIONS } from '../services/bhashiniService';
import { getSafePortalUrl, getNationalMirrorUrl, getGoogleSearchUrl } from '../services/schemesData';
import VoiceReader from './VoiceReader';

export const OCCUPATION_OPTIONS = [
  { id: 'ALL', label: 'All Occupations', icon: '🌟' },
  { id: 'Farmer', label: 'Farmers & Agriculture', icon: '👨‍🌾' },
  { id: 'Artisan', label: 'Artisans & Weavers', icon: '🛠️' },
  { id: 'Street Vendor', label: 'Street Vendors & Hawkers', icon: '🛒' },
  { id: 'Student', label: 'Students & Youth', icon: '👨‍🎓' },
  { id: 'Women Entrepreneur', label: 'Women & Homemakers', icon: '👩' },
  { id: 'MSME Owner', label: 'MSME & Small Business', icon: '💼' }
];

export function getProfessionBadge(occupations = []) {
  if (!occupations || occupations.length === 0 || occupations.includes('All')) {
    return { label: 'Universal / All Occupations', icon: '🌐', color: 'bg-slate-800 text-slate-300 border-slate-700' };
  }
  const occStr = occupations.join(' ').toLowerCase();
  if (occStr.includes('farmer') || occStr.includes('cultivator') || occStr.includes('smallholder')) {
    return { label: 'Farmers & Agriculture', icon: '🌾', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40' };
  }
  if (occStr.includes('artisan') || occStr.includes('weaver') || occStr.includes('craft')) {
    return { label: 'Artisans & Craftsmen', icon: '🛠️', color: 'bg-amber-500/15 text-amber-300 border-amber-500/40' };
  }
  if (occStr.includes('vendor') || occStr.includes('hawker')) {
    return { label: 'Street Vendors', icon: '🛒', color: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/40' };
  }
  if (occStr.includes('student') || occStr.includes('youth')) {
    return { label: 'Students & Youth', icon: '🎓', color: 'bg-blue-500/15 text-blue-300 border-blue-500/40' };
  }
  if (occStr.includes('women') || occStr.includes('homemaker')) {
    return { label: 'Women & SHGs', icon: '👩', color: 'bg-rose-500/15 text-rose-300 border-rose-500/40' };
  }
  if (occStr.includes('msme') || occStr.includes('entrepreneur') || occStr.includes('self employed')) {
    return { label: 'MSME & Enterprise', icon: '💼', color: 'bg-purple-500/15 text-purple-300 border-purple-500/40' };
  }
  return { label: occupations[0], icon: '💼', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40' };
}

export default function SchemeCards({ 
  schemes = [], 
  profile = {},
  onInspectClauses, 
  onOpenPassbook,
  currentLang = 'hi' 
}) {
  const t = (k) => bhashini.t(k, currentLang);
  const [expandedId, setExpandedId] = useState(null);
  const [speakingSchemeId, setSpeakingSchemeId] = useState(null);
  const [checkedDocs, setCheckedDocs] = useState({});
  const [levelFilter, setLevelFilter] = useState('ALL'); // 'ALL' | 'Central' | 'State'
  const [stateFilter, setStateFilter] = useState(profile?.state || 'ALL');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [occupationFilter, setOccupationFilter] = useState('ALL');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleSpeak = (scheme) => {
    const loc = bhashini.getLocalizedScheme(scheme, currentLang);
    if (speakingSchemeId === scheme.scheme_id) {
      bhashini.stopSpeaking();
      setSpeakingSchemeId(null);
    } else {
      bhashini.stopSpeaking();
      setSpeakingSchemeId(scheme.scheme_id);

      const schemeState = scheme.state || (scheme.states && scheme.states[0] !== 'All' ? scheme.states[0] : null);
      const stateNameLoc = schemeState ? bhashini.getStateName(schemeState, currentLang) : '';
      const levelText = scheme.level === 'State' 
        ? `${t('stateGovt')}${stateNameLoc ? ': ' + stateNameLoc : ''}` 
        : t('centralGovt');
      
      const benefitText = loc.financial_benefit ? `${t('financialBenefit')} ${loc.financial_benefit}` : '';
      const textToSpeak = `${loc.name}. ${levelText}. ${loc.summary}. ${benefitText}`;
      
      bhashini.speak(
        textToSpeak, 
        currentLang,
        () => setSpeakingSchemeId(scheme.scheme_id),
        () => setSpeakingSchemeId(null),
        () => setSpeakingSchemeId(null)
      );
    }
  };

  const toggleDoc = (schemeId, docName) => {
    const key = `${schemeId}_${docName}`;
    setCheckedDocs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Distinct states from schemes
  const stateOptions = useMemo(() => {
    const states = new Set();
    schemes.forEach(s => {
      if (s.state && s.state !== 'All India' && s.state !== 'All') {
        states.add(s.state);
      }
      if (s.states && Array.isArray(s.states)) {
        s.states.forEach(st => {
          if (st !== 'All') states.add(st);
        });
      }
    });
    return Array.from(states).sort();
  }, [schemes]);

  // Categories
  const categoryOptions = useMemo(() => {
    const cats = new Set();
    schemes.forEach(s => {
      if (s.category) cats.add(s.category);
    });
    return Array.from(cats).sort();
  }, [schemes]);

  // Filtered schemes
  const filteredSchemes = useMemo(() => {
    return schemes.filter(s => {
      // Must be eligible for qualified recommendations
      if (s.is_eligible === false) return false;

      // Level check
      if (levelFilter === 'Central' && s.level !== 'Central' && s.level !== 'Centrally Sponsored') return false;
      if (levelFilter === 'State' && s.level !== 'State') return false;

      // State check
      if (stateFilter !== 'ALL') {
        if (s.level === 'State') {
          const schemeStates = s.states || [s.state];
          if (!schemeStates.includes('All') && !schemeStates.includes(stateFilter)) {
            return false;
          }
        }
      }

      // Occupation check
      if (occupationFilter !== 'ALL') {
        const occs = s.occupations || s.eligibility_criteria?.occupations || ['All'];
        if (!occs.includes('All')) {
          const oTarget = occupationFilter.toLowerCase();
          const matches = occs.some(o => {
            const ol = o.toLowerCase();
            if (ol.includes(oTarget) || oTarget.includes(ol)) return true;
            if (oTarget === 'farmer' && (ol.includes('cultivator') || ol.includes('smallholder'))) return true;
            if (oTarget === 'artisan' && (ol.includes('weaver') || ol.includes('craft'))) return true;
            if (oTarget === 'student' && (ol.includes('youth') || ol.includes('unemployed'))) return true;
            if (oTarget === 'women entrepreneur' && (ol.includes('homemaker') || ol.includes('women') || ol.includes('self employed'))) return true;
            return false;
          });
          if (!matches) return false;
        }
      }

      // Category check
      if (categoryFilter !== 'ALL' && s.category !== categoryFilter) {
        return false;
      }

      return true;
    });
  }, [schemes, levelFilter, stateFilter, occupationFilter, categoryFilter]);

  const centralCount = schemes.filter(s => s.is_eligible !== false && (s.level === 'Central' || s.level === 'Centrally Sponsored')).length;
  const stateCount = schemes.filter(s => s.is_eligible !== false && s.level === 'State').length;

  if (!schemes || schemes.length === 0) {
    return (
      <div className="glass-panel p-8 rounded-3xl text-center space-y-3">
        <p className="text-slate-400 text-sm">{t('analyzingText')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Profile Conflict Error Notice for Male with Women Entrepreneur */}
      {profile?.gender === 'Male' && (profile?.occupation || '').toLowerCase().includes('women') && (
        <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-red-950/80 via-red-900/40 to-slate-900 border-2 border-red-500 shadow-xl flex items-start gap-3 text-red-200 animate-fadeIn">
          <div className="p-2 rounded-xl bg-red-500/20 text-red-400 border border-red-500/40 flex-shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5 animate-pulse text-red-400" />
          </div>
          <div className="space-y-1">
            <div className="font-extrabold text-sm text-red-200 flex items-center gap-2">
              <span>{t('genderOccupationMismatchTitle')}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/30 text-red-200 font-bold border border-red-500/50">
                {t('invalidSelection')}
              </span>
            </div>
            <p className="text-xs text-red-200/90 leading-relaxed">
              {t('genderOccupationMismatchMsg')}
            </p>
          </div>
        </div>
      )}

      {/* Header & Filter Controls Bar */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              {t('qualifiedSchemes')} ({filteredSchemes.length} / {schemes.length})
            </h3>
            <p className="text-xs text-slate-400">
              {t('hybridRuleText')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Level Toggle Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setLevelFilter('ALL')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  levelFilter === 'ALL'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🌟 {t('allSchemes')}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/30">
                  {schemes.length}
                </span>
              </button>

              <button
                onClick={() => setLevelFilter('Central')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  levelFilter === 'Central'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Landmark className="w-3.5 h-3.5" />
                <span>{t('centralSchemes')}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/30">
                  {centralCount}
                </span>
              </button>

              <button
                onClick={() => setLevelFilter('State')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  levelFilter === 'State'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{t('stateSchemes')}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/30">
                  {stateCount}
                </span>
              </button>
            </div>

            {/* 1-Click Yojana Passbook PDF Export Button */}
            {onOpenPassbook && (
              <button
                onClick={onOpenPassbook}
                className="px-3.5 py-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
                title="Download complete Citizen Yojana Passbook PDF with document checklists and QR codes"
              >
                <BookOpenCheck className="w-4 h-4" />
                <span>{t('passbookBtn')}</span>
              </button>
            )}
          </div>
        </div>

        {/* Secondary Filters: State, Profession & Category */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
          
          {/* Profession Dropdown Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
              {t('profession')}:
            </span>
            <select
              value={occupationFilter}
              onChange={(e) => setOccupationFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {OCCUPATION_OPTIONS.map(opt => (
                <option key={opt.id} value={opt.id}>
                  {opt.icon} {opt.id === 'ALL' ? t('allProfessions') : bhashini.getOccupationName(opt.id, currentLang)}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Filter for Citizen's Own Profession */}
          {profile?.occupation && (
            <button
              onClick={() => setOccupationFilter(occupationFilter === profile.occupation ? 'ALL' : profile.occupation)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                occupationFilter === profile.occupation
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              <span>🎯 {t('myProfession')} ({bhashini.getOccupationName(profile.occupation, currentLang)})</span>
            </button>
          )}

          {/* State Dropdown Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {t('selectState')}:
            </span>
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="ALL">🌐 {t('allStates')}</option>
              {stateOptions.map(st => (
                <option key={st} value={st}>🚩 {bhashini.getStateName(st, currentLang)}</option>
              ))}
            </select>
          </div>

          {/* Quick Filter for Citizen's Own State */}
          {profile?.state && profile.state !== 'National / All India' && (
            <button
              onClick={() => setStateFilter(stateFilter === profile.state ? 'ALL' : profile.state)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                stateFilter === profile.state
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              <span>🎯 {t('myState')} ({bhashini.getStateName(profile.state, currentLang)})</span>
            </button>
          )}

          {/* Category Filter */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              {t('category')}:
            </span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="ALL">{t('allCategories')}</option>
              {categoryOptions.map(cat => (
                <option key={cat} value={cat}>{bhashini.getSchemeCategoryName(cat, currentLang)}</option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Scheme Cards List */}
      <div className="space-y-4">
        {filteredSchemes.length === 0 ? (
          <div className="glass-panel p-8 rounded-3xl border-2 border-slate-800 text-center space-y-4 bg-slate-900/40">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-7 h-7 text-amber-400" />
            </div>
            <div className="space-y-1 max-w-lg mx-auto">
              <h4 className="text-base font-bold text-white">
                {profile?.gender === 'Male' && (profile?.occupation || '').toLowerCase().includes('women')
                  ? t('genderOccupationMismatchTitle')
                  : "No Schemes Found for Current Filters"}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {profile?.gender === 'Male' && (profile?.occupation || '').toLowerCase().includes('women')
                  ? t('genderOccupationMismatchMsg')
                  : "No eligible government welfare schemes match the selected level, state, or occupation filters. Try clearing or expanding your filter selection."}
              </p>
            </div>
          </div>
        ) : (
          filteredSchemes.map((rawScheme, index) => {
          const scheme = bhashini.getLocalizedScheme(rawScheme, currentLang);
          const isExpanded = expandedId === scheme.scheme_id;
          const isSpeaking = speakingSchemeId === scheme.scheme_id;
          const docs = scheme.required_documents || [];
          const checkedCount = docs.filter(d => checkedDocs[`${scheme.scheme_id}_${d}`]).length;
          const docsPercent = docs.length > 0 ? Math.round((checkedCount / docs.length) * 100) : 100;
          const isStateScheme = rawScheme.level === 'State';
          const schemeState = rawScheme.state || (rawScheme.states && rawScheme.states[0] !== 'All' ? rawScheme.states[0] : null);

          // Regional explanation if available
          let finalExplanation = scheme.personalized_explanation;
          if (currentLang !== 'en' && SCHEME_TRANSLATIONS[scheme.scheme_id]?.[currentLang]?.explanation) {
            finalExplanation = SCHEME_TRANSLATIONS[scheme.scheme_id][currentLang].explanation;
          }

          return (
            <div
              key={scheme.scheme_id}
              className={`glass-panel rounded-3xl border transition-all duration-200 overflow-hidden ${
                scheme.is_eligible 
                  ? isStateScheme 
                    ? 'border-cyan-500/40 hover:border-cyan-400 shadow-xl bg-gradient-to-br from-slate-900/90 to-cyan-950/20' 
                    : 'border-slate-800 hover:border-amber-500/50 shadow-xl'
                  : 'border-red-900/30 opacity-75 hover:opacity-100 bg-slate-950/70'
              }`}
            >
              {/* Main Card Header */}
              <div className="p-6 space-y-4">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  {/* Title & Ministry */}
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
                        {t('rank')} #{index + 1}
                      </span>

                      {/* Prominent Central vs State Govt Badge */}
                      {isStateScheme ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm">
                          <Flag className="w-3.5 h-3.5 text-cyan-400" />
                          <span>🚩 {schemeState ? `${t('stateGovt')}: ${bhashini.getStateName(schemeState, currentLang)}` : t('stateGovt')}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm">
                          <Landmark className="w-3.5 h-3.5 text-amber-400" />
                          <span>🏛️ {t('centralGovt')}</span>
                        </span>
                      )}

                      {/* Prominent Target Profession / Occupation Badge */}
                      {(() => {
                        const occBadge = bhashini.getProfessionBadge(rawScheme.occupations || rawScheme.eligibility_criteria?.occupations, currentLang);
                        return (
                          <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold border shadow-sm ${occBadge.color}`}>
                            <span>{occBadge.icon}</span>
                            <span>{occBadge.label}</span>
                          </span>
                        );
                      })()}

                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800/80 text-slate-300 border border-slate-700">
                        {bhashini.getSchemeCategoryName(scheme.category, currentLang)}
                      </span>

                      {scheme.is_eligible ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {t('eligible')}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/30">
                          <XCircle className="w-3.5 h-3.5" /> {t('cutoffExceeded')}
                        </span>
                      )}
                    </div>

                    <h4 className="text-xl font-extrabold text-white flex items-center gap-2">
                      {scheme.name}
                    </h4>

                    <div className="text-xs text-slate-400 font-medium">
                      🏛️ {scheme.ministry}
                    </div>

                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                      {scheme.summary}
                    </p>
                  </div>

                  {/* Confidence Score Pill */}
                  <div className="flex-shrink-0 flex md:flex-col items-center justify-between md:items-end gap-3 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 min-w-[160px]">
                    <div className="text-left md:text-right">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {t('topMatchConfidence')}
                      </div>
                      <div className="text-2xl font-black text-amber-400">
                        {scheme.combined_confidence}%
                      </div>
                    </div>

                    {/* Speech synthesis button */}
                    <button
                      onClick={() => handleSpeak(scheme)}
                      className={`p-2.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-bold ${
                        isSpeaking
                          ? 'bg-red-500/20 text-red-300 border-red-500 animate-pulse'
                          : 'bg-slate-800 hover:bg-slate-700 text-amber-400 border-slate-700'
                      }`}
                      title={t('listenAudio')}
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      <span>{isSpeaking ? t('stopAudio') : t('listenAudio')}</span>
                    </button>
                  </div>

                </div>

                {/* Financial Benefit Highlighting Banner */}
                {scheme.financial_benefit && (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-emerald-950/20 border border-emerald-500/30 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        <Coins className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                          {t('financialBenefit')}
                        </div>
                        <div className="text-sm md:text-base font-extrabold text-white">
                          {scheme.financial_benefit}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap flex-shrink-0">
                      <a
                        href={getSafePortalUrl(rawScheme)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/10 transition-transform active:scale-95 flex-shrink-0"
                        title="Official Scheme Gateway & Application Details"
                      >
                        <span>{t('directApplyPortal')}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      
                      {rawScheme.dept_portal_url && rawScheme.dept_portal_url !== getSafePortalUrl(rawScheme) && (
                        <a
                          href={rawScheme.dept_portal_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-1 border border-slate-700/80 transition-colors flex-shrink-0"
                          title="State / Ministry Department Official Portal"
                        >
                          <Building2 className="w-3 h-3 text-cyan-400" />
                          <span>{rawScheme.level === 'State' ? `${bhashini.getStateName(rawScheme.state, currentLang) || t('stateLabel')} ${t('dept')}` : t('ministry')}</span>
                        </a>
                      )}

                      <a
                        href={getGoogleSearchUrl(rawScheme)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 hover:text-sky-300 font-semibold text-xs flex items-center gap-1 border border-slate-700/80 transition-colors flex-shrink-0"
                        title="Search exact official notification on Google"
                      >
                        <Search className="w-3 h-3" />
                        <span>Google</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Personalized AI Explanation Box */}
                {finalExplanation && (
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/90 text-xs space-y-1">
                    <div className="font-bold text-amber-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {t('aiExplanation')}
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {finalExplanation}
                    </p>
                  </div>
                )}

                {/* Card Action Toggles */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleExpand(scheme.scheme_id)}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-400" />
                      <span>{t('viewDocsBtn')} ({docs.length})</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => onInspectClauses(rawScheme)}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-300 font-semibold flex items-center gap-1.5 border border-slate-800 transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-sky-400" />
                      <span>{t('inspectClausesBtn')}</span>
                    </button>
                  </div>

                  {docs.length > 0 && (
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span>{t('docReadiness')}:</span>
                      <div className="w-24 h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300"
                          style={{ width: `${docsPercent}%` }}
                        />
                      </div>
                      <span className="font-mono font-bold text-emerald-400">{docsPercent}%</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Expandable Document Checklist Section */}
              {isExpanded && (
                <div className="p-6 bg-slate-950/90 border-t border-slate-800/80 space-y-4 animate-fadeIn">
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-400" />
                      {t('docsChecklist')} ({checkedCount}/{docs.length})
                    </h5>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {docs.map((docName, dIdx) => {
                        const isChecked = checkedDocs[`${scheme.scheme_id}_${docName}`];
                        return (
                          <div
                            key={dIdx}
                            onClick={() => toggleDoc(scheme.scheme_id, docName)}
                            className={`p-2.5 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={!!isChecked}
                              onChange={() => {}}
                              className="rounded border-slate-700 text-amber-500 focus:ring-amber-500"
                            />
                            <span className="text-xs">{docName}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Application Process Guidance */}
                  {scheme.application_process && (
                    <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs space-y-1">
                      <div className="font-bold text-slate-300">
                        {t('applicationSteps')}:
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        {scheme.application_process}
                      </p>
                    </div>
                  )}
                </div>
              )}

            </div>
          );
        })
        )}
      </div>

    </div>
  );
}