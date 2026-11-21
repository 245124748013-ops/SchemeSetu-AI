import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import { DEMO_PERSONAS } from './services/personas';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProfileForm from './components/ProfileForm';
import AgentVisualizer from './components/AgentVisualizer';
import SchemeCards from './components/SchemeCards';
import SchemeDetailModal from './components/SchemeDetailModal';
import WhatsAppBot from './components/WhatsAppBot';
import WhatIfSimulator from './components/WhatIfSimulator';
import SchemeDirectory from './components/SchemeDirectory';
import AnalyticsView from './components/AnalyticsView';
import SchemeDossierModal from './components/SchemeDossierModal';
import DocumentVerifierModal from './components/DocumentVerifierModal';
import SchemeComparator from './components/SchemeComparator';
import CSCLocator from './components/CSCLocator';
import ClarifyingQuestionsAgent from './components/ClarifyingQuestionsAgent';
import FamilyOptimizer from './components/FamilyOptimizer';
import YojanaPassbookModal from './components/YojanaPassbookModal';
import { hybridEngine } from './services/hybridEngine';
import { bhashini } from './services/bhashiniService';
import confetti from 'canvas-confetti';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentProfile, setCurrentProfile] = useState(DEMO_PERSONAS[0].profile);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentLang, setCurrentLang] = useState('en'); // Default English, supports dynamic multilingual switching
  const [matchingResults, setMatchingResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [inspectedScheme, setInspectedScheme] = useState(null);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [isVerifierOpen, setIsVerifierOpen] = useState(false);
  const [isPassbookOpen, setIsPassbookOpen] = useState(false);

  const handleLoginSuccess = (userObj) => {
    setCurrentUser(userObj);
    setCurrentProfile(userObj.profile);
    executeDiscovery(userObj.profile);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setMatchingResults(null);
    setActiveTab('dashboard');
  };

  const executeDiscovery = async (profileData = currentProfile) => {
    setIsAnalyzing(true);
    try {
      const results = await hybridEngine.runAgenticDiscovery(profileData);
      setMatchingResults(results);
    } catch (err) {
      console.error('Discovery error:', err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (!currentUser) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} currentLang={currentLang} setCurrentLang={setCurrentLang} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Navbar */}
      <Navbar
        user={currentUser}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        onLogout={handleLogout}
        onOpenDossier={() => setIsDossierOpen(true)}
        onOpenVerifier={() => setIsVerifierOpen(true)}
        onOpenPassbook={() => setIsPassbookOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Tab 1: Dashboard */}
        {activeTab === 'dashboard' && (
          <Dashboard
            user={currentUser}
            profile={currentProfile}
            setProfile={setCurrentProfile}
            matchingResults={matchingResults}
            setActiveTab={setActiveTab}
            onRunDiscovery={executeDiscovery}
            isAnalyzing={isAnalyzing}
            currentLang={currentLang}
            onOpenPassbook={() => setIsPassbookOpen(true)}
          />
        )}

        {/* Tab 2: Scheme Matching Studio */}
        {activeTab === 'match' && (
          <div className="space-y-8 animate-fadeIn">
            <ProfileForm
              profile={currentProfile}
              setProfile={setCurrentProfile}
              onRunDiscovery={executeDiscovery}
              isAnalyzing={isAnalyzing}
              currentLang={currentLang}
            />

            <AgentVisualizer
              trace={matchingResults?.execution_trace || []}
              isAnalyzing={isAnalyzing}
              currentLang={currentLang}
            />

            <SchemeCards
              schemes={matchingResults?.ranked_schemes || []}
              profile={currentProfile}
              onInspectClauses={(s) => setInspectedScheme(s)}
              onOpenPassbook={() => setIsPassbookOpen(true)}
              currentLang={currentLang}
            />
          </div>
        )}

        {/* Tab 3: Family Welfare Optimizer */}
        {activeTab === 'family' && (
          <FamilyOptimizer
            currentLang={currentLang}
            mainProfile={currentProfile}
          />
        )}

        {/* Tab 4: Agentic Clarifying Questions */}
        {activeTab === 'clarify' && (
          <ClarifyingQuestionsAgent
            profile={currentProfile}
            setProfile={setCurrentProfile}
            onRunDiscovery={executeDiscovery}
            currentLang={currentLang}
          />
        )}

        {/* Tab 5: Scheme Comparator */}
        {activeTab === 'compare' && (
          <SchemeComparator currentLang={currentLang} />
        )}

        {/* Tab 6: What-If Simulator */}
        {activeTab === 'whatif' && (
          <WhatIfSimulator
            initialProfile={currentProfile}
            onSelectScheme={(s) => setInspectedScheme(s)}
            currentLang={currentLang}
          />
        )}

        {/* Tab 7: WhatsApp AI Counselor */}
        {activeTab === 'whatsapp' && (
          <WhatsAppBot
            profile={currentProfile}
            onApplyScheme={(s) => window.open(s.official_portal_url, '_blank')}
            currentLang={currentLang}
          />
        )}

        {/* Tab 8: CSC Locator */}
        {activeTab === 'csc' && (
          <CSCLocator profile={currentProfile} currentLang={currentLang} />
        )}

        {/* Tab 9: All Schemes Directory */}
        {activeTab === 'directory' && (
          <SchemeDirectory
            onInspectClauses={(s) => setInspectedScheme(s)}
            currentLang={currentLang}
          />
        )}

        {/* Tab 10: Analytics & Insights */}
        {activeTab === 'analytics' && (
          <AnalyticsView currentLang={currentLang} />
        )}

      </main>

      {/* RAG Clause Detail Modal */}
      {inspectedScheme && (
        <SchemeDetailModal
          scheme={inspectedScheme}
          onClose={() => setInspectedScheme(null)}
          currentLang={currentLang}
        />
      )}

      {/* Citizen Scheme Dossier Modal */}
      {isDossierOpen && (
        <SchemeDossierModal
          profile={currentProfile}
          matchingResults={matchingResults}
          onClose={() => setIsDossierOpen(false)}
          currentLang={currentLang}
        />
      )}

      {/* Personal Yojana Passbook Modal (New Feature) */}
      {isPassbookOpen && (
        <YojanaPassbookModal
          profile={currentProfile}
          matchingResults={matchingResults}
          onClose={() => setIsPassbookOpen(false)}
          currentLang={currentLang}
        />
      )}

      {/* AI Document Verifier Modal */}
      {isVerifierOpen && (
        <DocumentVerifierModal
          profile={currentProfile}
          onClose={() => setIsVerifierOpen(false)}
          onVerificationComplete={() => executeDiscovery(currentProfile)}
          currentLang={currentLang}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-6 text-center text-xs text-slate-400 space-y-1">
        <p>🇮🇳 <strong>{bhashini.t('brandTitle', currentLang)}</strong> • {bhashini.t('brandSub', currentLang)}</p>
        <p>myscheme.gov.in Compatible • Bhashini Regional Speech & Voice Powered • 4-Layer Agentic Architecture</p>
      </footer>

    </div>
  );
}
