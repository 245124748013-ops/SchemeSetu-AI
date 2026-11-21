import React, { useState } from 'react';
import { 
  FileCheck2, 
  UploadCloud, 
  CheckCircle2, 
  X, 
  Scan
} from 'lucide-react';
import { bhashini } from '../services/bhashiniService';

export default function DocumentVerifierModal({ profile, onClose, onVerificationComplete, currentLang = 'hi' }) {
  const t = (k) => bhashini.t(k, currentLang);
  const [verifyingDoc, setVerifyingDoc] = useState(null);
  const [uploadedDocs, setUploadedDocs] = useState({
    aadhaar: { status: 'verified', name: 'Aadhaar Card (UIDAI)', confidence: 99.4, extracted: { name: profile?.name || 'Citizen', uid: 'XXXX-XXXX-8921', state: profile?.state || 'National' } },
    income: { status: 'verified', name: 'Income Certificate', confidence: 98.2, extracted: { annual_income: `₹${Number(profile?.income || 120000).toLocaleString('en-IN')}`, authority: 'Tehsildar / Revenue' } }
  });

  const docTypes = [
    { id: 'aadhaar', label: 'Aadhaar Card (UIDAI)', icon: '🪪' },
    { id: 'income', label: 'Income Certificate (Revenue)', icon: '📜' },
    { id: 'caste', label: 'Caste / Community Certificate', icon: '🏛️' },
    { id: 'land', label: 'Land Record (7/12 Extract / Khatauni)', icon: '🌾' },
    { id: 'udyam', label: 'Udyam MSME Registration', icon: '🏭' },
    { id: 'dpr', label: 'Detailed Project Report (DPR)', icon: '📊' }
  ];

  const handleSimulateUpload = (docId) => {
    setVerifyingDoc(docId);
    setTimeout(() => {
      let extractedData = {};
      if (docId === 'caste') extractedData = { category: profile?.category || 'SC/OBC', certNo: 'REV/2024/99120', valid: 'Permanent' };
      if (docId === 'land') extractedData = { holding: `${profile?.land_holding_acres || 2.5} Acres`, surveyNo: '142/2A', landType: 'Cultivable' };
      if (docId === 'udyam') extractedData = { udyamNo: 'UDYAM-02-0049210', enterpriseType: 'Micro Enterprise', activity: 'Manufacturing' };
      if (docId === 'dpr') extractedData = { projectName: 'Micro Enterprise Expansion', cost: '₹15,00,000', dscr: '2.14 (Bankable)' };

      setUploadedDocs(prev => ({
        ...prev,
        [docId]: {
          status: 'verified',
          name: docTypes.find(d => d.id === docId)?.label,
          confidence: Math.round((95 + Math.random() * 4.9) * 10) / 10,
          extracted: extractedData
        }
      }));
      setVerifyingDoc(null);
      if (onVerificationComplete) onVerificationComplete();
    }, 1200);
  };

  const totalVerified = Object.keys(uploadedDocs).filter(k => uploadedDocs[k].status === 'verified').length;
  const readinessPercentage = Math.round((totalVerified / docTypes.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-4xl rounded-3xl border border-slate-700 shadow-2xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Scan className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {t('docVerifierTitle')}
              </h3>
              <p className="text-xs text-slate-400">
                {t('docVerifierSub')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Readiness Summary Bar */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-slate-300">
              {t('docReadiness')}
            </div>
            <div className="text-xs text-slate-400">
              {totalVerified} / {docTypes.length} {currentLang === 'hi' ? 'दस्तावेज़ सत्यापित एवं डिजिटल रूप से तैयार' : 'documents digitally verified'}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-48 h-3 rounded-full bg-slate-950 border border-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${readinessPercentage}%` }}
              ></div>
            </div>
            <span className="text-lg font-black text-amber-400">{readinessPercentage}%</span>
          </div>
        </div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {docTypes.map((doc) => {
            const uploaded = uploadedDocs[doc.id];
            const isVerifying = verifyingDoc === doc.id;

            return (
              <div
                key={doc.id}
                className={`p-4 rounded-2xl border transition-all space-y-3 flex flex-col justify-between ${
                  uploaded?.status === 'verified'
                    ? 'bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{doc.icon}</span>
                    {uploaded?.status === 'verified' ? (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>OCR Verified</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-semibold">
                        Pending
                      </span>
                    )}
                  </div>

                  <h5 className="text-xs font-bold text-white">{doc.label}</h5>

                  {uploaded?.extracted && (
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] font-mono text-slate-300 space-y-1">
                      {Object.entries(uploaded.extracted).map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="text-slate-400">{k}:</span>
                          <span className="text-emerald-300 font-bold">{v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleSimulateUpload(doc.id)}
                  disabled={isVerifying}
                  className={`w-full py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    uploaded?.status === 'verified'
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md'
                  }`}
                >
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>{isVerifying ? 'Scanning OCR...' : uploaded ? 'Re-Scan File' : 'Upload & Scan'}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-800"
          >
            {currentLang === 'hi' ? 'सत्यापन पूर्ण करें' : currentLang === 'en' ? 'Done & Close' : 'Done'}
          </button>
        </div>

      </div>
    </div>
  );
}
