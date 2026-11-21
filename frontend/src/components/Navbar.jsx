import React from 'react';
import { 
  Sparkles, 
  Languages, 
  ShieldCheck, 
  User, 
  LogOut, 
  FileText, 
  CheckCircle2, 
  BarChart3, 
  Search, 
  Sliders, 
  MessageSquare,
  MapPin,
  GitCompare,
  BrainCircuit,
  BookOpen,
  Users,
  BookOpenCheck
} from 'lucide-react';
import { SUPPORTED_LANGUAGES, bhashini } from '../services/bhashiniService';

export default function Navbar({ 
  user, 
  activeTab, 
  setActiveTab, 
  currentLang, 
  setCurrentLang, 
  onLogout,
  onOpenDossier,
  onOpenVerifier,
  onOpenPassbook
}) {
  const t = (k) => bhashini.t(k, currentLang);

  const navItems = [
    { id: 'dashboard', label: t('dashboard'), icon: Sparkles },
    { id: 'match', label: t('matchStudio'), icon: Search },
    { id: 'family', label: t('familyOptimizer'), icon: Users },
    { id: 'clarify', label: t('clarify'), icon: BrainCircuit },
    { id: 'compare', label: t('compare'), icon: GitCompare },
    { id: 'whatif', label: t('whatif'), icon: Sliders },
    { id: 'whatsapp', label: t('whatsapp'), icon: MessageSquare },
    { id: 'csc', label: t('csc'), icon: MapPin },
    { id: 'directory', label: t('directory'), icon: BookOpen },
    { id: 'analytics', label: t('analytics'), icon: BarChart3 }
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 shadow-2xl backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Title */}
          <div 
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-all">
              🇮🇳
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {t('brandTitle')}
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  v2.5 Full Suite
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block truncate max-w-[280px]">
                {t('brandSub')}
              </p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5">
            
            {/* Multilingual Bhashini Selector */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all shadow-inner">
              <Languages className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <select
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                className="bg-transparent text-xs text-slate-200 font-bold focus:outline-none cursor-pointer pr-1"
                aria-label="Select Regional Language"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-slate-900 text-slate-100 font-semibold">
                    {lang.native} ({lang.name})
                  </option>
                ))}
              </select>
            </div>

            {/* Yojana Passbook Button (New Standout Feature) */}
            <button
              onClick={onOpenPassbook}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer hover:scale-105"
            >
              <BookOpenCheck className="w-4 h-4 text-slate-950" />
              <span className="hidden sm:inline">{t('passbookBtn')}</span>
              <span className="sm:hidden">{t('passbook')}</span>
            </button>

            {/* Document Verifier CTA */}
            <button
              onClick={onOpenVerifier}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-all shadow-sm cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('verifyDocs')}</span>
            </button>

            {/* Citizen Dossier Modal Trigger */}
            <button
              onClick={onOpenDossier}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-semibold text-amber-300 transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('dossier')}</span>
            </button>

            {/* User Profile Badge & Logout */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs font-bold text-white leading-none">
                  {user?.name || 'Citizen'}
                </span>
                <span className="text-[10px] text-amber-400/90 font-mono">
                  {user?.role || 'Citizen'}
                </span>
              </div>

              <button
                onClick={onLogout}
                title={t('signOut')}
                className="p-2 rounded-xl bg-slate-900 hover:bg-red-500/20 hover:text-red-400 text-slate-400 border border-slate-800 transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Horizontal Navigation Tabs */}
        <nav className="flex items-center gap-1.5 overflow-x-auto py-2.5 scrollbar-none border-t border-slate-800/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10 font-extrabold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
