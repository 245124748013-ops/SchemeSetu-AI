import React, { useState, useEffect } from 'react';
import { 
  Sliders, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Unlock, 
  ArrowRight,
  Landmark,
  Flag,
  MapPin
} from 'lucide-react';
import { hybridEngine } from '../services/hybridEngine';
import { bhashini } from '../services/bhashiniService';

export default function WhatIfSimulator({ initialProfile, onSelectScheme, currentLang = 'hi' }) {
  const t = (k) => bhashini.t(k, currentLang);
  const [simAge, setSimAge] = useState(initialProfile?.age || 34);
  const [simIncome, setSimIncome] = useState(initialProfile?.income || 120000);
  const [simCategory, setSimCategory] = useState(initialProfile?.category || 'SC');
  const [simGender, setSimGender] = useState(initialProfile?.gender || 'Female');
  const [simOccupation, setSimOccupation] = useState(initialProfile?.occupation || 'Women Entrepreneur');
  const [simLand, setSimLand] = useState(initialProfile?.land_holding_acres || 0);
  const [simState, setSimState] = useState(initialProfile?.state || 'Karnataka');

  const [simResults, setSimResults] = useState([]);

  const stateList = [
    'Karnataka',
    'Telangana',
    'Andhra Pradesh',
    'Tamil Nadu',
    'Maharashtra',
    'Uttar Pradesh',
    'Gujarat',
    'Punjab',
    'Kerala',
    'West Bengal',
    'Madhya Pradesh',
    'Rajasthan',
    'Delhi'
  ];

  useEffect(() => {
    const tempProfile = {
      name: initialProfile?.name || 'Citizen',
      age: simAge,
      income: simIncome,
      category: simCategory,
      gender: simGender,
      occupation: simOccupation,
      has_land: simLand > 0,
      land_holding_acres: simLand,
      state: simState
    };

    hybridEngine.runAgenticDiscovery(tempProfile).then(res => {
      setSimResults(res.ranked_schemes || []);
    });
  }, [simAge, simIncome, simCategory, simGender, simOccupation, simLand, simState]);

  const eligibleSchemes = simResults.filter(s => s.is_eligible);
  const lockedSchemes = simResults.filter(s => !s.is_eligible);

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Sliders className="w-5 h-5 text-amber-400" />
          {t('whatif')}
        </h2>
        <p className="text-xs md:text-sm text-slate-400 pt-1">
          Adjust demographic sliders and change resident state in real time to see how Central and State welfare grants dynamically unlock.
        </p>
      </div>

      {/* Grid: Controls on Left, Real-time Scheme Impact on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Interactive Sliders Panel */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
            Simulate Parameter Changes
          </h3>

          {/* State Selector */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {t('stateDomicile')}:
              </span>
              <span className="text-cyan-400 font-bold">🚩 {simState}</span>
            </div>
            <select
              value={simState}
              onChange={(e) => setSimState(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              {stateList.map(st => (
                <option key={st} value={st}>🚩 {st}</option>
              ))}
            </select>
            <div className="text-[10px] text-slate-500">
              Switch state to see state-exclusive schemes unlock (e.g. Karnataka: Gruha Lakshmi, Telangana: Dalit Bandhu, Maharashtra: Ladki Bahin).
            </div>
          </div>

          {/* Slider 1: Annual Income */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">{t('annualIncome')}:</span>
              <span className="text-amber-400 font-bold">₹{Number(simIncome).toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1500000"
              step="25000"
              value={simIncome}
              onChange={(e) => setSimIncome(parseInt(e.target.value, 10))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>₹0 (BPL)</span>
              <span>₹2.5L (Ladki Bahin/Cheyutha)</span>
              <span>₹15L+</span>
            </div>
          </div>

          {/* Slider 2: Age */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">{t('age')}:</span>
              <span className="text-emerald-400 font-bold">{simAge} Yrs</span>
            </div>
            <input
              type="range"
              min="10"
              max="80"
              step="1"
              value={simAge}
              onChange={(e) => setSimAge(parseInt(e.target.value, 10))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>10 yrs</span>
              <span>18 (PMEGP/Yuva Nidhi)</span>
              <span>80 yrs</span>
            </div>
          </div>

          {/* Selector 3: Social Category */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-300">{t('category')}:</div>
            <div className="grid grid-cols-3 gap-2">
              {['General', 'OBC', 'SC', 'ST', 'EWS', 'Minority'].map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSimCategory(cat)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    simCategory === cat
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Selector 4: Occupation */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-300">{t('occupation')}:</div>
            <select
              value={simOccupation}
              onChange={(e) => setSimOccupation(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="Women Entrepreneur">Women Entrepreneur</option>
              <option value="Homemaker">Homemaker (Family Head)</option>
              <option value="Farmer">Farmer / Cultivator</option>
              <option value="Artisan">Artisan / Traditional Craft</option>
              <option value="Street Vendor">Street Vendor / Thela</option>
              <option value="MSME Owner">MSME Enterprise Owner</option>
              <option value="Student">Graduate Student / Youth</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>

          {/* Slider 5: Landholding */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">{t('landHolding')}:</span>
              <span className="text-sky-400 font-bold">{simLand} Acres</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={simLand}
              onChange={(e) => setSimLand(parseFloat(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0 (Landless)</span>
              <span>2.5 Acres</span>
              <span>10 Acres</span>
            </div>
          </div>

        </div>

        {/* Right Real-time Qualified vs Locked Output */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Section 1: Unlocked & Eligible Schemes */}
          <div className="glass-panel p-6 rounded-3xl border border-emerald-500/40 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
                <Unlock className="w-5 h-5" />
                <span>Unlocked Schemes ({eligibleSchemes.length})</span>
              </h3>
              <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                100% Eligible
              </span>
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {eligibleSchemes.map((s) => {
                const isState = s.level === 'State';
                return (
                  <div
                    key={s.scheme_id}
                    className={`p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                      isState
                        ? 'bg-gradient-to-r from-slate-900 to-cyan-950/30 border-cyan-500/40'
                        : 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/50'
                    }`}
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        {isState ? (
                          <span className="px-2 py-0.2 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            🚩 State: {s.state || simState}
                          </span>
                        ) : (
                          <span className="px-2 py-0.2 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            🏛️ Central
                          </span>
                        )}
                        <span className="text-[10px] text-slate-400">{s.category}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white">{s.name}</h4>
                      <p className="text-xs text-emerald-400 font-semibold">{s.financial_benefit}</p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-mono font-bold text-amber-400">
                        {s.combined_confidence}%
                      </div>
                      <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> Qualified
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Locked Schemes */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-400 flex items-center gap-2">
              <Lock className="w-5 h-5 text-red-400" />
              <span>Currently Locked Schemes ({lockedSchemes.length})</span>
            </h3>

            <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1">
              {lockedSchemes.slice(0, 8).map((s) => (
                <div
                  key={s.scheme_id}
                  className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3 text-xs opacity-75"
                >
                  <div className="space-y-0.5">
                    <div className="text-slate-300 font-bold">{s.name}</div>
                    <div className="text-[11px] text-red-400">
                      Reason: {s.failed_criteria?.[0] || 'Cutoff exceeded'}
                    </div>
                  </div>

                  <span className="px-2 py-1 rounded-xl bg-red-500/10 text-red-400 font-semibold text-[10px] border border-red-500/20 flex-shrink-0">
                    Locked
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}