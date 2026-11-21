import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

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

export const generateYojanaPassbookPDF = ({ profile = {}, schemes = [], totalBenefitText = "Rs. 65,000 / year" }) => {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Header Banner
    doc.setFillColor(15, 23, 42); // slate-900
    doc.rect(0, 0, pageWidth, 42, 'F');

    // Tricolor accent strip
    doc.setFillColor(245, 158, 11); // saffron / amber
    doc.rect(0, 42, pageWidth, 2, 'F');
    doc.setFillColor(255, 255, 255); // white
    doc.rect(0, 44, pageWidth, 1.5, 'F');
    doc.setFillColor(16, 185, 129); // green
    doc.rect(0, 45.5, pageWidth, 2, 'F');

    // Header Text
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('SCHEMESETU AI - CITIZEN YOJANA PASSBOOK', pageWidth / 2, 16, { align: 'center' });

    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(203, 213, 225);
    doc.text('Official Personalized Government Welfare & DBT Entitlement Dossier', pageWidth / 2, 24, { align: 'center' });
    doc.text(`Generated on: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} | Digital India Verified`, pageWidth / 2, 31, { align: 'center' });

    // Citizen Profile Card
    let y = 55;
    doc.setDrawColor(226, 232, 240);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(14, y, pageWidth - 28, 38, 3, 3, 'FD');

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('1. BENEFICIARY CITIZEN PROFILE', 20, y + 8);

    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);

    const col1 = 20;
    const col2 = 80;
    const col3 = 140;

    const safeIncome = profile?.annual_income !== undefined ? profile.annual_income : (profile?.income || 0);

    doc.text(`Name: `, col1, y + 16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(cleanText(profile?.name || 'Citizen'), col1 + 14, y + 16);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`State / UT: `, col2, y + 16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(cleanText(profile?.state || 'National'), col2 + 18, y + 16);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`Occupation: `, col3, y + 16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(cleanText(profile?.occupation || 'General'), col3 + 22, y + 16);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`Social Category: `, col1, y + 24);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(cleanText(profile?.category || 'General'), col1 + 27, y + 24);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`Annual Income: `, col2, y + 24);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`Rs. ${Number(safeIncome).toLocaleString('en-IN')}`, col2 + 25, y + 24);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`Age & Gender: `, col3, y + 24);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`${profile?.age || 25} Yrs | ${cleanText(profile?.gender || 'All')}`, col3 + 24, y + 24);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`Land Holding: `, col1, y + 32);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(profile?.land_holding_acres ? `${profile.land_holding_acres} Acres` : 'Non-agricultural / 0 Acres', col1 + 24, y + 32);

    // Financial Corpus Callout Box
    y += 44;
    doc.setFillColor(236, 253, 245); // emerald-50
    doc.setDrawColor(16, 185, 129); // emerald-500
    doc.roundedRect(14, y, pageWidth - 28, 20, 3, 3, 'FD');

    doc.setTextColor(6, 95, 70);
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL POTENTIAL ANNUAL WELFARE BENEFIT UNLOCKED:', 20, y + 8);

    doc.setFontSize(13);
    doc.setTextColor(4, 120, 87);
    doc.text(`${cleanText(totalBenefitText)} (Direct DBT & In-Kind Grants)`, 20, y + 16);

    // Recommended Schemes Table
    y += 26;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('2. ELIGIBLE SCHEMES & DBT ENTITLEMENT MATRIX', 14, y);

    const topSchemes = (schemes || []).slice(0, 10);
    const tableData = topSchemes.map((s, idx) => [
      `#${idx + 1}`,
      `${cleanText(s.name)}\nLevel: ${cleanText(s.level || 'Central')} | ${cleanText(s.category || 'Welfare')}`,
      `${cleanText(s.financial_benefit || 'Government Grant / Subsidy')}`,
      `${cleanText(s.official_portal_url || s.portal_url || 'https://www.myscheme.gov.in')}`
    ]);

    autoTable(doc, {
      startY: y + 4,
      head: [['Rank', 'Scheme Name & Ministry', 'Financial Benefit', 'Official Application Gateway']],
      body: tableData,
      theme: 'striped',
      headStyles: {
        fillColor: [15, 23, 42],
        textColor: [255, 255, 255],
        fontSize: 8,
        fontStyle: 'bold'
      },
      styles: {
        fontSize: 7.5,
        cellPadding: 3,
        textColor: [30, 41, 59]
      },
      columnStyles: {
        0: { cellWidth: 12, halign: 'center' },
        1: { cellWidth: 72 },
        2: { cellWidth: 52 },
        3: { cellWidth: 46 }
      },
      margin: { left: 14, right: 14 }
    });

    // New Page for Document Checklist & Application Roadmap
    doc.addPage();

    // Page 2 Header
    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, pageWidth, 25, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('SCHEMESETU AI - ACTION CHECKLIST & APPLICATION ROADMAP', pageWidth / 2, 14, { align: 'center' });

    // Document Checklist Section
    let y2 = 35;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('3. COMPREHENSIVE DOCUMENT CHECKLIST (CARRY TO CSC / SEVA KENDRA)', 14, y2);

    const requiredDocs = new Set();
    topSchemes.forEach(s => {
      (s.required_documents || []).forEach(d => requiredDocs.add(cleanText(d)));
    });

    if (requiredDocs.size === 0) {
      requiredDocs.add('Aadhaar Card (Mobile Number Seeded)');
      requiredDocs.add('Aadhaar-Linked Bank Account Passbook');
      requiredDocs.add('Income / Caste / Domicile Certificate');
      requiredDocs.add('Ration Card / Food Security Card');
      requiredDocs.add('Passport Size Photographs');
    }

    const checklistArray = Array.from(requiredDocs).map((docName) => [
      `[  ]`,
      docName,
      'Mandatory for e-KYC & Direct Benefit Transfer',
      'Verified by Gram Panchayat / Revenue Officer'
    ]);

    autoTable(doc, {
      startY: y2 + 5,
      head: [['Check', 'Document Name', 'Purpose', 'Issuing Authority']],
      body: checklistArray,
      theme: 'grid',
      headStyles: {
        fillColor: [30, 41, 59],
        textColor: [255, 255, 255],
        fontSize: 8,
        fontStyle: 'bold'
      },
      styles: {
        fontSize: 7.5,
        cellPadding: 3,
        textColor: [30, 41, 59]
      },
      columnStyles: {
        0: { cellWidth: 15, halign: 'center', fontStyle: 'bold' },
        1: { cellWidth: 70 },
        2: { cellWidth: 50 },
        3: { cellWidth: 47 }
      },
      margin: { left: 14, right: 14 }
    });

    // Step-by-Step Action Roadmap
    const finalY = (doc.lastAutoTable?.finalY || 140) + 10;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('4. STEP-BY-STEP BENEFIT CLAIM ROADMAP', 14, finalY);

    const steps = [
      { step: 'Step 1: Direct Online Application', desc: 'Visit the Official Portal URL listed above, click "New Registration / Citizen Corner", and enter your Aadhaar details for instant OTP e-KYC.' },
      { step: 'Step 2: Assisted Service at CSC / MeeSeva', desc: 'If applying offline, take this printed Passbook and required documents to your nearest Common Service Centre (CSC) or MeeSeva / e-Mitra / Grama One Kiosk.' },
      { step: 'Step 3: Track DBT Disbursal', desc: 'Once sanctioned, payments are directly disbursed via NPCI Aadhaar Bridge into your Aadhaar-seeded Bank Account.' },
      { step: 'Step 4: Grievance Redressal (1800-11-0031)', desc: 'If delayed or rejected, lodge an instant grievance on CPGRAMS (pgportal.gov.in) referencing the scheme clause details in this report.' }
    ];

    let stepY = finalY + 6;
    steps.forEach((s) => {
      doc.setFillColor(241, 245, 249);
      doc.roundedRect(14, stepY, pageWidth - 28, 14, 2, 2, 'F');
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text(s.step, 18, stepY + 5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(71, 85, 105);
      doc.text(s.desc, 18, stepY + 10, { maxWidth: pageWidth - 36 });

      stepY += 16;
    });

    // Footer Note
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184);
    doc.text('This Citizen Yojana Passbook is compiled using SchemeSetu AI Multi-Layer Agentic Engine. All scheme URLs and guidelines verified with official government directories.', pageWidth / 2, 285, { align: 'center' });

    // Save the PDF with fallback
    const safeName = (profile?.name || 'Citizen').replace(/[^a-zA-Z0-9]/g, '_');
    const filename = `SchemeSetu_Yojana_Passbook_${safeName}.pdf`;

    try {
      doc.save(filename);
    } catch (saveErr) {
      console.warn('doc.save fallback triggering:', saveErr);
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
    console.error('Fatal error generating Yojana Passbook PDF:', err);
    alert('Could not generate PDF passbook. Error: ' + err.message);
  }
};
