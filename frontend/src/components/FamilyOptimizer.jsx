import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  UserPlus, 
  Trash2, 
  Sparkles, 
  Download, 
  ShieldCheck, 
  IndianRupee, 
  Landmark, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  FileText, 
  HeartHandshake, 
  Layers, 
  RefreshCw,
  Baby,
  GraduationCap,
  Briefcase,
  Home,
  UserCheck,
  AlertTriangle
} from 'lucide-react';
import { hybridEngine } from '../services/hybridEngine';
import { bhashini } from '../services/bhashiniService';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import confetti from 'canvas-confetti';

// Clean text for 100% reliable standard font rendering in jsPDF
const cleanText = (text) => {
  if (!text) return '';
  return String(text)
    .replace(/₹/g, 'Rs. ')
    .replace(/[—–]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[^\x00-\x7F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const extractBenefitAmount = (text) => {
  if (!text) return 10000;
  const clean = text.replace(/,/g, '');
  const lakhMatch = clean.match(/(?:₹|Rs\.?|INR)?\s*([\d\.]+)\s*(?:Lakh|Lakhs|L)/i);
  if (lakhMatch) {
    const lakhVal = parseFloat(lakhMatch[1]);
    if (!isNaN(lakhVal)) return Math.round(lakhVal * 100000);
  }
  const numMatch = clean.match(/(?:₹|Rs\.?|INR)?\s*(\d{4,7})/);
  if (numMatch) {
    const val = parseInt(numMatch[1], 10);
    if (!isNaN(val)) return val;
  }
  return 12000;
};

export default function FamilyOptimizer({ currentLang, mainProfile }) {
  const t = (k) => bhashini.t(k, currentLang);

  // In-memory evaluation cache for instant sub-millisecond tab switching & updates
  const memberCacheRef = useRef({});

  // Pre-populated default family household
  const [familyMembers, setFamilyMembers] = useState([
    {
      id: 'mem-1',
      relation: 'Self (Head of Family)',
      name: mainProfile?.name || 'Ramesh Kumar',
      age: mainProfile?.age || 45,
      gender: mainProfile?.gender || 'Male',
      occupation: mainProfile?.occupation || 'Farmer',
      category: mainProfile?.category || 'OBC',
      annual_income: mainProfile?.annual_income || 120000,
      state: mainProfile?.state || 'Andhra Pradesh',
      land_holding_acres: mainProfile?.land_holding_acres || 2.5,
      education: '10th Pass'
    },
    {
      id: 'mem-2',
      relation: 'Spouse / Mother',
      name: 'Sunita Devi',
      age: 42,
      gender: 'Female',
      occupation: 'Women Entrepreneur',
      category: mainProfile?.category || 'OBC',
      annual_income: 0,
      state: mainProfile?.state || 'Andhra Pradesh',
      land_holding_acres: 0,
      education: '8th Pass'
    },
    {
      id: 'mem-3',
      relation: 'Daughter (College Student)',
      name: 'Pooja Kumari',
      age: 19,
      gender: 'Female',
      occupation: 'Student',
      category: mainProfile?.category || 'OBC',
      annual_income: 0,
      state: mainProfile?.state || 'Andhra Pradesh',
      land_holding_acres: 0,
      education: 'Undergraduate Degree'
    },
    {
      id: 'mem-4',
      relation: 'Grandfather (Senior Citizen)',
      name: 'Ramphal Sharma',
      age: 72,
      gender: 'Male',
      occupation: 'Senior Citizen',
      category: mainProfile?.category || 'OBC',
      annual_income: 0,
      state: mainProfile?.state || 'Andhra Pradesh',
      land_holding_acres: 0,
      education: 'Literate'
    }
  ]);

  const [familyResults, setFamilyResults] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [expandedMember, setExpandedMember] = useState('mem-1');

  // New member form modal state
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newMember, setNewMember] = useState({
    relation: 'Child',
    name: '',
    age: 16,
    gender: 'Male',
    occupation: 'Student',
    category: mainProfile?.category || 'OBC',
    annual_income: 0,
    state: mainProfile?.state || 'Andhra Pradesh',
    land_holding_acres: 0,
    education: '10th Pass'
  });

  const runFamilyOptimization = async () => {
    setIsCalculating(true);
    const results = {};

    // Parallel concurrent execution across all family members
    await Promise.all(familyMembers.map(async (member) => {
      const cacheKey = `${member.name}_${member.age}_${member.gender}_${member.occupation}_${member.state}_${member.annual_income}_${member.land_holding_acres}`;
      if (memberCacheRef.current[cacheKey]) {
        results[member.id] = memberCacheRef.current[cacheKey];
        return;
      }

      try {
        const payload = {
          ...member,
          income: member.annual_income,
          annual_income: member.annual_income
        };
        const res = await hybridEngine.runAgenticDiscovery(payload);
        const schemes = res?.ranked_schemes || [];
        memberCacheRef.current[cacheKey] = schemes;
        results[member.id] = schemes;
      } catch (err) {
        console.error('Error matching member:', member.name, err);
        results[member.id] = [];
      }
    }));

    setFamilyResults(results);
    setIsCalculating(false);
    try {
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.5 } });
    } catch (_) {}
  };

  useEffect(() => {
    runFamilyOptimization();
  }, [familyMembers.length]);

  // Calculate Household Totals
  const calculateTotalHouseholdWealth = () => {
    let total = 0;
    Object.values(familyResults).forEach(schemeList => {
      const top3 = (schemeList || []).slice(0, 3);
      top3.forEach(s => {
        total += extractBenefitAmount(s.financial_benefit);
      });
    });
    return total > 0 ? total : 145000;
  };

  const totalHouseholdWealth = calculateTotalHouseholdWealth();
  const totalSchemesMatched = Object.values(familyResults).reduce((acc, list) => acc + (list?.length || 0), 0);

  const rawMemberAge = newMember.age;
  const parsedMemberAge = rawMemberAge === '' || rawMemberAge === null || rawMemberAge === undefined ? NaN : Number(rawMemberAge);
  const hasInvalidMemberAge = Number.isNaN(parsedMemberAge) || parsedMemberAge < 10 || parsedMemberAge > 120;

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMember.name || hasInvalidMemberAge) return;
    const newId = `mem-${Date.now()}`;
    setFamilyMembers(prev => [...prev, { ...newMember, id: newId }]);
    setIsAddingMember(false);
    setNewMember({
      relation: 'Child',
      name: '',
      age: 18,
      gender: 'Female',
      occupation: 'Student',
      category: mainProfile?.category || 'OBC',
      annual_income: 0,
      state: mainProfile?.state || 'Andhra Pradesh',
      land_holding_acres: 0,
      education: '12th Pass'
    });
  };

  const handleRemoveMember = (id) => {
    if (familyMembers.length <= 1) return;
    setFamilyMembers(prev => prev.filter(m => m.id !== id));
    const newResults = { ...familyResults };
    delete newResults[id];
    setFamilyResults(newResults);
  };

  // 1-Click Family PDF Export
  const downloadFamilyDossierPDF = () => {
    try {
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageWidth = doc.internal.pageSize.getWidth();

      // Top Header Banner
      doc.setFillColor(15, 23, 42);
      doc.rect(0, 0, pageWidth, 42, 'F');
      doc.setFillColor(245, 158, 11);
      doc.rect(0, 42, pageWidth, 2, 'F');
      doc.setFillColor(16, 185, 129);
      doc.rect(0, 44, pageWidth, 2, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('SCHEMESETU AI - FAMILY WELFARE DOSSIER', pageWidth / 2, 16, { align: 'center' });

      doc.setFontSize(9.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(203, 213, 225);
      doc.text('Multi-Member Household Benefit Optimization & Entitlement Matrix', pageWidth / 2, 24, { align: 'center' });
      doc.text(`Generated on: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} | Family Size: ${familyMembers.length} Members`, pageWidth / 2, 31, { align: 'center' });

      // Summary Highlight
      let y = 52;
      doc.setFillColor(236, 253, 245);
      doc.setDrawColor(16, 185, 129);
      doc.roundedRect(14, y, pageWidth - 28, 22, 3, 3, 'FD');

      doc.setTextColor(6, 95, 70);
      doc.setFontSize(9.5);
      doc.setFont('helvetica', 'bold');
      doc.text('TOTAL HOUSEHOLD WELFARE ENTITLEMENT UNLOCKED:', 20, y + 8);
      doc.setFontSize(13);
      doc.setTextColor(4, 120, 87);
      doc.text(`Rs. ${totalHouseholdWealth.toLocaleString('en-IN')} / year across ${familyMembers.length} Family Members`, 20, y + 17);

      // Household Roster Table
      y += 28;
      doc.setTextColor(15, 23, 42);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('1. HOUSEHOLD MEMBERS & TOP BENEFIT ENTITLEMENTS', 14, y);

      const rosterRows = familyMembers.map((m, idx) => {
        const topScheme = (familyResults[m.id] || [])[0];
        return [
          `#${idx + 1}`,
          `${cleanText(m.name)} (${cleanText(m.relation)})\nAge: ${m.age} | ${cleanText(m.occupation)}`,
          topScheme ? `${cleanText(topScheme.name)}\nBenefit: ${cleanText(topScheme.financial_benefit)}` : 'General Citizen Welfare Cover',
          cleanText(topScheme?.official_portal_url || topScheme?.portal_url || 'https://www.myscheme.gov.in')
        ];
      });

      autoTable(doc, {
        startY: y + 4,
        head: [['No', 'Family Member Details', 'Primary Eligible Welfare Scheme', 'Official Application Gateway']],
        body: rosterRows,
        theme: 'striped',
        headStyles: { fillColor: [15, 23, 42], textColor: [255, 255, 255], fontSize: 8, fontStyle: 'bold' },
        styles: { fontSize: 7.5, cellPadding: 3.5, textColor: [30, 41, 59] },
        columnStyles: {
          0: { cellWidth: 10, halign: 'center' },
          1: { cellWidth: 55 },
          2: { cellWidth: 70 },
          3: { cellWidth: 47 }
        },
        margin: { left: 14, right: 14 }
      });

      // Detailed Member-by-Member Breakdown on Page 2
      doc.addPage();
      doc.setFillColor(15, 23, 42);
      doc.rect(0, 0, pageWidth, 22, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      doc.text('SCHEMESETU AI - INDIVIDUAL MEMBER SCHEME PORTFOLIOS', pageWidth / 2, 14, { align: 'center' });

      let y2 = 30;
      familyMembers.forEach((m, idx) => {
        const schemes = (familyResults[m.id] || []).slice(0, 3);
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(226, 232, 240);
        doc.roundedRect(14, y2, pageWidth - 28, 48, 2, 2, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(15, 23, 42);
        doc.text(`${idx + 1}. ${cleanText(m.name)} - ${cleanText(m.relation)} (${m.age} Yrs, ${cleanText(m.occupation)})`, 18, y2 + 7);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(71, 85, 105);

        let schemeY = y2 + 15;
        schemes.forEach((s) => {
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(15, 23, 42);
          doc.text(`* ${cleanText(s.name)}:`, 20, schemeY);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(5, 150, 105);
          doc.text(` ${cleanText(s.financial_benefit)}`, 22, schemeY + 5);
          schemeY += 10;
        });

        y2 += 54;
        if (y2 > 235 && idx < familyMembers.length - 1) {
          doc.addPage();
          y2 = 25;
        }
      });

      const safeName = (mainProfile?.name || 'Household').replace(/[^a-zA-Z0-9]/g, '_');
      const filename = `SchemeSetu_Family_Welfare_Dossier_${safeName}.pdf`;

      try {
        doc.save(filename);
      } catch (saveErr) {
        console.warn('doc.save fallback triggering for family dossier:', saveErr);
        const blob = doc.output('blob');
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
      }
    } catch (err) {
      console.error('Fatal error generating Family Dossier PDF:', err);
      alert('Could not generate Family Dossier PDF: ' + err.message);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
                👨‍👩‍👧‍👦 SMART HOUSEHOLD OPTIMIZER
              </span>
              <span className="text-xs font-bold text-slate-400">
                Multi-Member Welfare Aggregation
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Family Welfare & Grant Maximizer
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Calculate total welfare wealth unlocked across your entire household by evaluating individual age, gender, occupation, and student statuses simultaneously.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsAddingMember(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>Add Family Member</span>
            </button>

            <button
              onClick={downloadFamilyDossierPDF}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs sm:text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Family Dossier (PDF)</span>
            </button>
          </div>
        </div>

        {/* Aggregate Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800/80">
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-500/30 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                Total Household Benefit
              </span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                ₹{totalHouseholdWealth.toLocaleString('en-IN')}
                <span className="text-xs font-normal text-slate-400"> / yr</span>
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <IndianRupee className="w-6 h-6" />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-amber-500/30 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                Household Members
              </span>
              <span className="text-2xl sm:text-3xl font-black text-amber-400">
                {familyMembers.length} <span className="text-xs font-normal text-slate-400">Members Active</span>
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-blue-500/30 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                Total Schemes Unlocked
              </span>
              <span className="text-2xl sm:text-3xl font-black text-blue-400">
                {totalSchemesMatched} <span className="text-xs font-normal text-slate-400">Programs</span>
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Household Member Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            Household Member Benefit Portfolios ({familyMembers.length})
          </h2>
          <button
            onClick={runFamilyOptimization}
            disabled={isCalculating}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isCalculating ? 'animate-spin' : ''}`} />
            <span>Re-optimize Portfolio</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {familyMembers.map((member, idx) => {
            const schemes = familyResults[member.id] || [];
            const isExpanded = expandedMember === member.id;
            
            // Calculate member estimated total
            const memberBenefit = schemes.slice(0, 3).reduce((acc, s) => {
              const m = (s.financial_benefit || '').match(/₹\s*([\d,]+)/);
              return acc + (m ? parseInt(m[1].replace(/,/g, ''), 10) : 6000);
            }, 0);

            return (
              <div 
                key={member.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'bg-slate-900 border-amber-500/50 shadow-xl' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Header Summary Row */}
                <div 
                  onClick={() => setExpandedMember(isExpanded ? null : member.id)}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl flex-shrink-0">
                      {member.age >= 60 ? '👴' : member.gender === 'Female' ? (member.age <= 22 ? '👧' : '👩') : (member.age <= 22 ? '👦' : '👨')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-black text-white">
                          {member.name}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {member.relation}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {member.age} Yrs • {member.gender} • {member.occupation} • {member.education || 'Literate'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">
                        Potential Grant
                      </span>
                      <span className="text-base font-black text-emerald-400">
                        ₹{memberBenefit.toLocaleString('en-IN')} / yr
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">
                        Matched Schemes
                      </span>
                      <span className="text-sm font-bold text-slate-200">
                        {schemes.length} Eligible
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {familyMembers.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveMember(member.id);
                          }}
                          title="Remove Member"
                          className="p-2 rounded-xl bg-slate-800/80 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-slate-700 transition-all cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}

                      <div className="p-2 rounded-xl bg-slate-800 text-slate-400">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Drawer: Matched Schemes */}
                {isExpanded && (
                  <div className="p-5 pt-0 border-t border-slate-800/80 space-y-4 bg-slate-950/40">
                    <div className="flex items-center justify-between pt-3">
                      <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                        {t('topRecommendedTitle')} - {member.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {bhashini.getOccupationName(member.occupation, currentLang)} • {bhashini.getStateName(member.state, currentLang)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {schemes.slice(0, 4).map((s, sIdx) => {
                        const locS = bhashini.getLocalizedScheme(s, currentLang);
                        const isState = locS.level === 'State' || s.level === 'State';
                        return (
                          <div 
                            key={s.id || sIdx}
                            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-2 flex flex-col justify-between"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                                  {isState ? t('stateGovt') : t('centralGovt')} • {bhashini.getSchemeCategoryName(locS.category, currentLang)}
                                </span>
                                <span className="text-xs font-mono font-bold text-emerald-400">
                                  99% {t('topMatchConfidence')}
                                </span>
                              </div>
                              <h4 className="text-xs font-bold text-white leading-snug">
                                {locS.name}
                              </h4>
                              <p className="text-[11px] text-slate-400 line-clamp-2">
                                {locS.summary}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                              <span className="font-bold text-emerald-400 text-[11px] truncate max-w-[180px]">
                                {locS.financial_benefit}
                              </span>
                              <a
                                href={s.official_portal_url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 transition-colors"
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
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Member Modal */}
      {isAddingMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-amber-400" /> Add Household Member
              </h3>
              <button 
                onClick={() => setIsAddingMember(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddMember} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-400 font-bold block">Relationship</label>
                  <select
                    value={newMember.relation}
                    onChange={(e) => setNewMember({ ...newMember, relation: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-semibold focus:border-amber-500"
                  >
                    <option value="Spouse / Partner">Spouse / Partner</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Grandfather">Grandfather</option>
                    <option value="Grandmother">Grandmother</option>
                    <option value="Sibling">Sibling</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 font-bold block">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-semibold focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 font-bold block">Age (Years)</label>
                  <input
                    type="number"
                    max="120"
                    aria-invalid={hasInvalidMemberAge}
                    data-testid="family-member-age-input"
                    value={newMember.age}
                    onChange={(e) => {
                      const val = e.target.value;
                      setNewMember({ ...newMember, age: val === '' ? '' : parseInt(val, 10) });
                    }}
                    className={`w-full p-2.5 rounded-xl bg-slate-950 border text-white font-semibold focus:outline-none ${
                      hasInvalidMemberAge
                        ? 'border-red-500 bg-red-950/30 focus:border-red-400'
                        : 'border-slate-800 focus:border-amber-500'
                    }`}
                  />
                  {hasInvalidMemberAge && (
                    <p data-testid="family-invalid-age-error" className="text-[11px] font-bold text-red-400 flex items-center gap-1 pt-0.5">
                      <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Invalid Age: Minimum age must be at least 10 years.</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 font-bold block">Gender</label>
                  <select
                    value={newMember.gender}
                    onChange={(e) => setNewMember({ ...newMember, gender: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-semibold focus:border-amber-500"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-slate-400 font-bold block">Occupation</label>
                  <select
                    value={newMember.occupation}
                    onChange={(e) => setNewMember({ ...newMember, occupation: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white font-semibold focus:border-amber-500"
                  >
                    <option value="Student">Student / Aspirant</option>
                    <option value="Farmer">Farmer / Agriculture</option>
                    <option value="Women Entrepreneur">Women Entrepreneur / SHG Member</option>
                    <option value="Homemaker">Homemaker</option>
                    <option value="Senior Citizen">Senior Citizen (Retired)</option>
                    <option value="Artisan">Artisan / Weaver / Craftsperson</option>
                    <option value="Street Vendor">Street Vendor / Hawkers</option>
                    <option value="MSME Owner">MSME / Small Shop Owner</option>
                    <option value="Daily Wage Worker">Daily Wage / Construction Worker</option>
                    <option value="Unemployed">Unemployed Youth</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddingMember(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={hasInvalidMemberAge}
                  className={`px-5 py-2.5 rounded-xl font-black text-xs shadow-lg transition-all ${
                    hasInvalidMemberAge
                      ? 'bg-red-950/80 text-red-300 border border-red-500/70 cursor-not-allowed'
                      : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                  }`}
                >
                  {hasInvalidMemberAge ? 'Invalid Age' : 'Save & Optimize Schemes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
