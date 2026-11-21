import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Building2, 
  ExternalLink, 
  Coins, 
  Award,
  ChevronRight,
  ChevronLeft,
  Filter,
  Landmark,
  Flag,
  MapPin,
  Briefcase,
  Layers,
  Sparkles,
  Loader2
} from 'lucide-react';
import { SCHEMES_DATABASE, getSafePortalUrl, getNationalMirrorUrl, getGoogleSearchUrl } from '../services/schemesData';
import { bhashini } from '../services/bhashiniService';
import { getProfessionBadge, OCCUPATION_OPTIONS } from './SchemeCards';
import { API_BASE } from '../config.js';

export const ALL_INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export default function SchemeDirectory({ onInspectClauses, currentLang = 'hi' }) {
  const t = (k) => bhashini.t(k, currentLang);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('ALL'); // 'ALL' | 'Central' | 'State'
  const [stateFilter, setStateFilter] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedOccupation, setSelectedOccupation] = useState('ALL');
  
  // Pagination & Server-side state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(24);
  const [serverData, setServerData] = useState(null);
  const [statsData, setStatsData] = useState({
    total_schemes: 5093,
    central_schemes: 540,
    state_schemes: 4553
  });
  const [isLoading, setIsLoading] = useState(false);

  // Fetch real-time stats on mount
  useEffect(() => {
    fetch(`${API_BASE}/api/schemes/stats`)
      .then(r => r.json())
      .then(d => {
        if (d && d.total_schemes) {
          setStatsData(d);
        }
      })
      .catch(() => {
        // Fallback to initial stats
      });
  }, []);

  // Fetch paginated schemes from server or use client filter
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    const queryParams = new URLSearchParams({
      page: currentPage.toString(),
      limit: pageSize.toString()
    });

    if (searchTerm.trim()) queryParams.set('q', searchTerm.trim());
    if (levelFilter !== 'ALL') queryParams.set('level', levelFilter);
    if (stateFilter !== 'ALL') queryParams.set('state', stateFilter);
    if (selectedCategory !== 'All') queryParams.set('category', selectedCategory);
    if (selectedOccupation !== 'ALL') queryParams.set('occupation', selectedOccupation);

    const debounceTimer = setTimeout(() => {
      fetch(`${API_BASE}/api/schemes/search?${queryParams.toString()}`)
        .then(r => {
          if (!r.ok) throw new Error('Network error');
          return r.json();
        })
        .then(res => {
          if (isMounted) {
            setServerData(res);
            setIsLoading(false);
          }
        })
        .catch(() => {
          if (isMounted) {
            // Client-side fallback if backend is offline
            setServerData(null);
            setIsLoading(false);
          }
        });
    }, 200);

    return () => {
      isMounted = false;
      clearTimeout(debounceTimer);
    };
  }, [searchTerm, levelFilter, stateFilter, selectedCategory, selectedOccupation, currentPage, pageSize]);

  // Reset page when filters change
  const handleFilterChange = (setter, val) => {
    setter(val);
    setCurrentPage(1);
  };

  // Extract distinct categories
  const categories = useMemo(() => {
    const cats = new Set([
      'All', 
      'Agriculture & Rural Development', 
      'Women & Family Welfare', 
      'MSME & Entrepreneurship', 
      'Education & Student Aid', 
      'Social Welfare & Safety Nets', 
      'Healthcare & Social Security', 
      'Clean Energy & Subsidies',
      'Skill & Employment'
    ]);
    SCHEMES_DATABASE.forEach(s => {
      if (s.category) cats.add(s.category);
    });
    return Array.from(cats);
  }, []);

  // Client-side fallback filtered list if serverData is null
  const clientFilteredSchemes = useMemo(() => {
    return SCHEMES_DATABASE.filter(rawScheme => {
      if (levelFilter === 'Central' && rawScheme.level !== 'Central' && rawScheme.level !== 'Centrally Sponsored') return false;
      if (levelFilter === 'State' && rawScheme.level !== 'State') return false;
      if (stateFilter !== 'ALL') {
        const schemeStates = rawScheme.eligibility_criteria?.states || [];
        if (rawScheme.level === 'State' && !schemeStates.includes('All') && !schemeStates.includes(stateFilter)) return false;
      }
      if (selectedCategory !== 'All' && rawScheme.category !== selectedCategory) return false;
      if (selectedOccupation !== 'ALL') {
        const occs = rawScheme.eligibility_criteria?.occupations || ['All'];
        if (!occs.includes('All')) {
          const oTarget = selectedOccupation.toLowerCase();
          const matches = occs.some(o => o.toLowerCase().includes(oTarget));
          if (!matches) return false;
        }
      }
      if (searchTerm.trim()) {
        const stopwords = new Set(['scheme', 'schemes', 'yojana', 'for', 'in', 'of', 'and', 'a', 'an', 'the', 'to', 'is', 'with', 'owned', 'by']);
        const tokens = (searchTerm.toLowerCase().match(/\w+/g) || []).filter(t => !stopwords.has(t) && t.length > 1);
        if (tokens.length > 0) {
          const docText = `${rawScheme.name} ${rawScheme.summary} ${rawScheme.category} ${rawScheme.ministry} ${(rawScheme.tags || []).join(' ')}`.toLowerCase();
          const matches = tokens.some(t => docText.includes(t));
          if (!matches) return false;
        }
      }
      return true;
    });
  }, [searchTerm, levelFilter, stateFilter, selectedOccupation, selectedCategory]);

  const displayedSchemes = serverData 
    ? serverData.schemes 
    : clientFilteredSchemes.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const totalSchemesCount = serverData ? serverData.total : clientFilteredSchemes.length;
  const totalPages = serverData ? serverData.total_pages : Math.ceil(clientFilteredSchemes.length / pageSize) || 1;

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Directory Header & Controls */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-amber-400" />
              <span>{t('directory')}</span>
              <span className="text-sm px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30">
                {totalSchemesCount.toLocaleString()} {totalSchemesCount === 1 ? 'Scheme' : 'Schemes'} Found
              </span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400 pt-1">
              National Repository: <strong className="text-white">{statsData.total_schemes.toLocaleString()} Total Verified Schemes</strong> ({statsData.central_schemes} Central + {statsData.state_schemes.toLocaleString()} State across all 36 States & UTs)
            </p>
          </div>

          {/* Scheme Level Toggle Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-800 self-start lg:self-auto">
            <button
              onClick={() => handleFilterChange(setLevelFilter, 'ALL')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                levelFilter === 'ALL'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>🌟 {t('allSchemes')}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/40">
                {statsData.total_schemes.toLocaleString()}
              </span>
            </button>

            <button
              onClick={() => handleFilterChange(setLevelFilter, 'Central')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                levelFilter === 'Central'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>{t('centralSchemes')}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/40">
                {statsData.central_schemes}
              </span>
            </button>

            <button
              onClick={() => handleFilterChange(setLevelFilter, 'State')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                levelFilter === 'State'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              <span>{t('stateSchemes')}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/40">
                {statsData.state_schemes.toLocaleString()}
              </span>
            </button>
          </div>
        </div>

        {/* Search Input and Sub-filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 pt-1">
          {/* Full-text search bar */}
          <div className="sm:col-span-2 lg:col-span-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleFilterChange(setSearchTerm, e.target.value)}
              placeholder="Search by keyword, scheme name, subsidy, profession (e.g. solar, drip, loan, tailoring, kisan)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs md:text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Profession Dropdown */}
          <div className="lg:col-span-3">
            <select
              value={selectedOccupation}
              onChange={(e) => handleFilterChange(setSelectedOccupation, e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs md:text-sm focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {OCCUPATION_OPTIONS.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.icon} {opt.label}</option>
              ))}
            </select>
          </div>

          {/* State Dropdown */}
          <div className="lg:col-span-2">
            <select
              value={stateFilter}
              onChange={(e) => handleFilterChange(setStateFilter, e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs md:text-sm focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              <option value="ALL">🌐 All 36 States & UTs</option>
              {ALL_INDIAN_STATES.map(st => (
                <option key={st} value={st}>🚩 {st}</option>
              ))}
            </select>
          </div>

          {/* Category Dropdown */}
          <div className="lg:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => handleFilterChange(setSelectedCategory, e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs md:text-sm focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c === 'All' ? '📂 All Categories' : c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Loading state indicator */}
      {isLoading && (
        <div className="flex items-center justify-center py-12 text-amber-400 gap-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="text-sm font-semibold">Searching 5,093+ schemes...</span>
        </div>
      )}

      {/* Grid of Schemes */}
      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedSchemes.map((rawScheme) => {
            const scheme = bhashini.getLocalizedScheme(rawScheme, currentLang);
            const isStateScheme = rawScheme.level === 'State';
            const schemeState = rawScheme.state || rawScheme.eligibility_criteria?.states?.[0] || 'State';
            const occBadge = getProfessionBadge(rawScheme.eligibility_criteria?.occupations);

            return (
              <div
                key={rawScheme.id}
                className={`glass-card p-6 rounded-3xl border transition-all flex flex-col justify-between group ${
                  isStateScheme 
                    ? 'border-cyan-500/30 hover:border-cyan-400 bg-gradient-to-b from-slate-900/90 to-cyan-950/20 shadow-lg' 
                    : 'border-slate-800 hover:border-amber-500/50 shadow-md'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {scheme.category || rawScheme.category}
                      </span>

                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${occBadge.color}`}>
                        <span>{occBadge.icon}</span>
                        <span>{occBadge.label}</span>
                      </span>
                    </div>

                    {isStateScheme ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/40">
                        <Flag className="w-3 h-3" />
                        <span>{schemeState !== 'All' ? schemeState : t('stateGovt')}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40">
                        <Landmark className="w-3 h-3" />
                        <span>{t('centralGovt')}</span>
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                    {scheme.name}
                  </h4>

                  <div className="text-[11px] text-slate-400 font-medium line-clamp-1">
                    🏛️ {rawScheme.ministry}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {scheme.summary}
                  </p>

                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-[10px] text-amber-400 font-bold uppercase">{t('benefit')}</div>
                    <div className="text-xs font-semibold text-emerald-400 line-clamp-2">{scheme.financial_benefit}</div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onInspectClauses(rawScheme)}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>{t('inspectClausesBtn')}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    <a
                      href={getSafePortalUrl(rawScheme)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-md shadow-amber-500/10 transition-transform active:scale-95"
                      title="Official Department Portal"
                    >
                      <span>{t('applyNow')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={getGoogleSearchUrl(rawScheme)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 hover:text-sky-300 font-semibold text-[11px] flex items-center gap-1 border border-slate-700/80"
                      title="Open in Google"
                    >
                      <Search className="w-3 h-3" />
                      <span>Google</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && displayedSchemes.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">No schemes matched your exact filters</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Try broadening your search term or selecting "All 36 States & UTs" to explore the full repository of 5,093 schemes.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setLevelFilter('ALL');
              setStateFilter('ALL');
              setSelectedCategory('All');
              setCurrentPage(1);
            }}
            className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-all"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Pagination Footer Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-slate-900/80 border border-slate-800">
          <div className="text-xs text-slate-400">
            Showing <strong className="text-white">{((currentPage - 1) * pageSize) + 1}</strong> to <strong className="text-white">{Math.min(currentPage * pageSize, totalSchemesCount).toLocaleString()}</strong> of <strong className="text-amber-400">{totalSchemesCount.toLocaleString()}</strong> schemes
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page number indicators */}
            <div className="flex items-center gap-1 text-xs">
              <span className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-black">
                {currentPage}
              </span>
              <span className="text-slate-500">/</span>
              <span className="px-2 py-1 text-slate-400 font-semibold">
                {totalPages.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}