// ════════════════════════════════════════════════════════
// TEST MASTER – Har test ke parameters defined hain
// ════════════════════════════════════════════════════════
const TEST_MASTER = {

  "CBC": {
    fullName: "Complete Blood Count",
    category: "Hematology",
    parameters: [
      { name: "Hemoglobin (Hb)",        unit: "g/dL",      male: "13.0 - 17.0",  female: "12.0 - 15.0" },
      { name: "RBC Count",              unit: "mill/cumm", male: "4.5 - 5.5",    female: "3.8 - 4.8"   },
      { name: "WBC Count",              unit: "cells/cumm",male: "4000 - 11000", female: "4000 - 11000" },
      { name: "Platelet Count",         unit: "lakhs/cumm",male: "1.5 - 4.5",    female: "1.5 - 4.5"   },
      { name: "PCV / Hematocrit (HCT)", unit: "%",         male: "40 - 50",      female: "36 - 46"      },
      { name: "MCV",                    unit: "fL",        male: "80 - 100",     female: "80 - 100"     },
      { name: "MCH",                    unit: "pg",        male: "27 - 32",      female: "27 - 32"      },
      { name: "MCHC",                   unit: "g/dL",      male: "31.5 - 34.5",  female: "31.5 - 34.5"  },
      { name: "RDW-CV",                 unit: "%",         male: "11.5 - 14.5",  female: "11.5 - 14.5"  },
      { name: "Neutrophils",            unit: "%",         male: "40 - 70",      female: "40 - 70"      },
      { name: "Lymphocytes",            unit: "%",         male: "20 - 40",      female: "20 - 40"      },
      { name: "Monocytes",              unit: "%",         male: "2 - 10",       female: "2 - 10"       },
      { name: "Eosinophils",            unit: "%",         male: "1 - 6",        female: "1 - 6"        },
      { name: "Basophils",              unit: "%",         male: "0 - 1",        female: "0 - 1"        },
    ]
  },

  "LFT": {
    fullName: "Liver Function Test",
    category: "Biochemistry",
    parameters: [
      { name: "Total Bilirubin",        unit: "mg/dL",  male: "0.2 - 1.2",   female: "0.2 - 1.2"  },
      { name: "Direct Bilirubin",       unit: "mg/dL",  male: "0.0 - 0.4",   female: "0.0 - 0.4"  },
      { name: "Indirect Bilirubin",     unit: "mg/dL",  male: "0.1 - 0.8",   female: "0.1 - 0.8"  },
      { name: "SGOT (AST)",             unit: "U/L",    male: "10 - 40",     female: "10 - 35"     },
      { name: "SGPT (ALT)",             unit: "U/L",    male: "7 - 56",      female: "7 - 45"      },
      { name: "Alkaline Phosphatase",   unit: "U/L",    male: "44 - 147",    female: "44 - 147"    },
      { name: "Total Protein",          unit: "g/dL",   male: "6.3 - 8.2",   female: "6.3 - 8.2"   },
      { name: "Albumin",                unit: "g/dL",   male: "3.5 - 5.0",   female: "3.5 - 5.0"   },
      { name: "Globulin",               unit: "g/dL",   male: "2.3 - 3.5",   female: "2.3 - 3.5"   },
      { name: "A/G Ratio",              unit: "ratio",  male: "1.0 - 2.2",   female: "1.0 - 2.2"   },
      { name: "GGT",                    unit: "U/L",    male: "10 - 71",     female: "6 - 42"      },
    ]
  },

  "KFT": {
    fullName: "Kidney Function Test",
    category: "Biochemistry",
    parameters: [
      { name: "Blood Urea",             unit: "mg/dL",  male: "15 - 45",     female: "15 - 40"    },
      { name: "Serum Creatinine",       unit: "mg/dL",  male: "0.7 - 1.3",   female: "0.6 - 1.1"  },
      { name: "Uric Acid",              unit: "mg/dL",  male: "3.5 - 7.2",   female: "2.6 - 6.0"  },
      { name: "Sodium (Na+)",           unit: "mEq/L",  male: "136 - 145",   female: "136 - 145"  },
      { name: "Potassium (K+)",         unit: "mEq/L",  male: "3.5 - 5.1",   female: "3.5 - 5.1"  },
      { name: "Chloride (Cl-)",         unit: "mEq/L",  male: "98 - 107",    female: "98 - 107"   },
      { name: "Calcium",                unit: "mg/dL",  male: "8.6 - 10.0",  female: "8.6 - 10.0" },
      { name: "Phosphorus",             unit: "mg/dL",  male: "2.5 - 4.5",   female: "2.5 - 4.5"  },
      { name: "BUN/Creatinine Ratio",   unit: "ratio",  male: "10 - 20",     female: "10 - 20"    },
    ]
  },

  "LIPID": {
    fullName: "Lipid Profile",
    category: "Biochemistry",
    parameters: [
      { name: "Total Cholesterol",      unit: "mg/dL",  male: "< 200",       female: "< 200"      },
      { name: "Triglycerides",          unit: "mg/dL",  male: "< 150",       female: "< 150"      },
      { name: "HDL Cholesterol",        unit: "mg/dL",  male: "> 40",        female: "> 50"       },
      { name: "LDL Cholesterol",        unit: "mg/dL",  male: "< 100",       female: "< 100"      },
      { name: "VLDL Cholesterol",       unit: "mg/dL",  male: "5 - 40",      female: "5 - 40"     },
      { name: "LDL/HDL Ratio",          unit: "ratio",  male: "< 3.5",       female: "< 3.5"      },
      { name: "Total Chol/HDL Ratio",   unit: "ratio",  male: "< 5.0",       female: "< 4.5"      },
    ]
  },

  "THYROID": {
    fullName: "Thyroid Function Test",
    category: "Endocrinology",
    parameters: [
      { name: "TSH",                    unit: "mIU/L",  male: "0.4 - 4.0",   female: "0.4 - 4.0"  },
      { name: "T3 (Triiodothyronine)",  unit: "ng/dL",  male: "80 - 200",    female: "80 - 200"   },
      { name: "T4 (Thyroxine)",         unit: "μg/dL",  male: "5.1 - 14.1",  female: "5.1 - 14.1" },
      { name: "Free T3",                unit: "pg/mL",  male: "2.3 - 4.2",   female: "2.3 - 4.2"  },
      { name: "Free T4",                unit: "ng/dL",  male: "0.8 - 1.8",   female: "0.8 - 1.8"  },
    ]
  },

  "DIABETES": {
    fullName: "Diabetes Profile",
    category: "Biochemistry",
    parameters: [
      { name: "Blood Glucose Fasting",  unit: "mg/dL",  male: "70 - 100",    female: "70 - 100"   },
      { name: "Blood Glucose PP",       unit: "mg/dL",  male: "< 140",       female: "< 140"      },
      { name: "HbA1c",                  unit: "%",      male: "< 5.7",       female: "< 5.7"      },
      { name: "Insulin Fasting",        unit: "μIU/mL", male: "2.6 - 24.9",  female: "2.6 - 24.9" },
    ]
  },

  "URINE_RE": {
    fullName: "Urine Routine Examination",
    category: "Microbiology",
    parameters: [
      { name: "Colour",                 unit: "",       male: "Pale Yellow",  female: "Pale Yellow" },
      { name: "Appearance",             unit: "",       male: "Clear",        female: "Clear"       },
      { name: "Reaction (pH)",          unit: "",       male: "5.0 - 8.0",    female: "5.0 - 8.0"  },
      { name: "Specific Gravity",       unit: "",       male: "1.010 - 1.030",female:"1.010 - 1.030"},
      { name: "Protein",                unit: "",       male: "Nil",          female: "Nil"         },
      { name: "Glucose",                unit: "",       male: "Nil",          female: "Nil"         },
      { name: "Ketones",                unit: "",       male: "Nil",          female: "Nil"         },
      { name: "Blood",                  unit: "",       male: "Nil",          female: "Nil"         },
      { name: "Bilirubin",              unit: "",       male: "Nil",          female: "Nil"         },
      { name: "Urobilinogen",           unit: "",       male: "Normal",       female: "Normal"      },
      { name: "Nitrites",               unit: "",       male: "Nil",          female: "Nil"         },
      { name: "Pus Cells (WBC)",        unit: "/hpf",   male: "0 - 5",        female: "0 - 5"      },
      { name: "RBC",                    unit: "/hpf",   male: "0 - 2",        female: "0 - 2"      },
      { name: "Epithelial Cells",       unit: "/hpf",   male: "0 - 5",        female: "0 - 5"      },
      { name: "Casts",                  unit: "",       male: "Nil",          female: "Nil"         },
      { name: "Crystals",               unit: "",       male: "Nil",          female: "Nil"         },
      { name: "Bacteria",               unit: "",       male: "Nil",          female: "Nil"         },
    ]
  },

  "BLOOD_GLUCOSE": {
    fullName: "Blood Glucose",
    category: "Biochemistry",
    parameters: [
      { name: "Blood Glucose",          unit: "mg/dL",  male: "70 - 100",    female: "70 - 100"   },
    ]
  },

  "WIDAL": {
    fullName: "Widal Test",
    category: "Serology",
    parameters: [
      { name: "S. Typhi O",             unit: "titre",  male: "< 1:80",      female: "< 1:80"     },
      { name: "S. Typhi H",             unit: "titre",  male: "< 1:80",      female: "< 1:80"     },
      { name: "S. Paratyphi AO",        unit: "titre",  male: "< 1:80",      female: "< 1:80"     },
      { name: "S. Paratyphi BH",        unit: "titre",  male: "< 1:80",      female: "< 1:80"     },
    ]
  },

};

// ── FLAG LOGIC ──
function getFlag(value, range, unit) {
  if (!value || !range) return '';
  const v = parseFloat(value);
  if (isNaN(v)) return '';
  // Range formats: "70 - 100", "< 200", "> 40", "< 5.7"
  if (range.includes(' - ')) {
    const [lo, hi] = range.split(' - ').map(x => parseFloat(x.trim()));
    if (v < lo) return 'LOW';
    if (v > hi) return 'HIGH';
    return 'NORMAL';
  }
  if (range.startsWith('< ')) {
    const hi = parseFloat(range.replace('< ', ''));
    return v >= hi ? 'HIGH' : 'NORMAL';
  }
  if (range.startsWith('> ')) {
    const lo = parseFloat(range.replace('> ', ''));
    return v <= lo ? 'LOW' : 'NORMAL';
  }
  return '';
}

// ── PRINT SETTINGS (localStorage se load/save) ──
let printSettings = JSON.parse(localStorage.getItem('printSettings') || JSON.stringify({
  pageWidth: 210,   // mm
  pageHeight: 297,  // mm (A4 default)
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 10,
  marginRight: 10,
  fontSize: 11,
  headerHeight: 30,
  footerHeight: 20,
  showLogo: true,
  showNormalRange: true,
  showFlag: true,
  showSignature: true,
  labName: 'City Pathology Lab',
  labAddress: '123, Medical Colony, City - 400001',
  labPhone: '9876543210',
  labDoctor: 'Dr. A.K. Sharma MD (Pathology)',
  labEmail: 'lab@example.com',
  labNABL: '',
}));

function savePrintSettings() { localStorage.setItem('printSettings', JSON.stringify(printSettings)); }
function loadPrintSettings() {
  const s = printSettings;
  document.getElementById('ps-width').value = s.pageWidth;
  document.getElementById('ps-height').value = s.pageHeight;
  document.getElementById('ps-mt').value = s.marginTop;
  document.getElementById('ps-mb').value = s.marginBottom;
  document.getElementById('ps-ml').value = s.marginLeft;
  document.getElementById('ps-mr').value = s.marginRight;
  document.getElementById('ps-fs').value = s.fontSize;
  document.getElementById('ps-lab').value = s.labName;
  document.getElementById('ps-addr').value = s.labAddress;
  document.getElementById('ps-phone').value = s.labPhone;
  document.getElementById('ps-doctor').value = s.labDoctor;
  document.getElementById('ps-email').value = s.labEmail;
  document.getElementById('ps-nabl').value = s.labNABL;
}

// ── DEMO DATA ──
const demoPatients = [
  { id:'PAT001', name:'Ramesh Kumar', age:45, gender:'Male', phone:'9876543210', ref_doctor:'Dr. Sharma', address:'Gandhi Nagar, Delhi' },
  { id:'PAT002', name:'Sunita Devi', age:32, gender:'Female', phone:'9812345678', ref_doctor:'Dr. Gupta', address:'Lajpat Nagar, Delhi' },
  { id:'PAT003', name:'Mohan Lal', age:58, gender:'Male', phone:'9845612378', ref_doctor:'Dr. Verma', address:'Rohini Sector 3' },
];

const demoBills = [
  { bill_no:'BILL001', patient_id:'PAT001', tests:['CBC','LFT'], total:900, discount:100, paid:800, due:0, status:'Paid', payment_mode:'Cash', date:'2025-06-01' },
  { bill_no:'BILL002', patient_id:'PAT002', tests:['THYROID','DIABETES'], total:900, discount:0, paid:500, due:400, status:'Partial', payment_mode:'UPI', date:'2025-06-02' },
  { bill_no:'BILL003', patient_id:'PAT003', tests:['CBC','KFT','LIPID'], total:1350, discount:150, paid:0, due:1200, status:'Pending', payment_mode:'', date:'2025-06-03' },
];

const testPrices = { CBC:300, LFT:600, KFT:550, LIPID:500, THYROID:500, DIABETES:400, URINE_RE:100, BLOOD_GLUCOSE:80, WIDAL:200 };

// Demo saved results
let savedResults = JSON.parse(localStorage.getItem('pathlab_results') || '{}');

// ════════════════════════════════════════════════════════
// PAGES
// ════════════════════════════════════════════════════════

// ── REPORT ENTRY PAGE ──
function renderReportEntry() {
  const ipc = window.require ? window.require('electron').ipcRenderer : null;

  document.getElementById('page-container').innerHTML = `
    <div class="card mb20">
      <div class="card-header">
        <div><div class="card-title">📋 Report Entry</div><div class="card-sub">Test results enter karo – sab parameters ke saath</div></div>
        <div style="display:flex;gap:10px">
          <div class="search-bar"><span>🔍</span><input type="text" placeholder="Bill No ya Patient naam..." id="re-search" oninput="filterReportList(this.value)"/></div>
        </div>
      </div>

      <!-- BILL LIST -->
      <div class="table-wrap"><table>
        <thead><tr><th>Bill No</th><th>Patient</th><th>Tests</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
        <tbody id="report-bill-list">
          ${demoBills.map(b => {
            const pat = demoPatients.find(p=>p.id===b.patient_id)||{};
            const allDone = b.tests.every(t => savedResults[b.bill_no]?.[t]);
            return `<tr>
              <td><b>${b.bill_no}</b></td>
              <td><b>${pat.name||'-'}</b><br><span style="font-size:11px;color:var(--text-muted)">${pat.age||''} yr / ${pat.gender||''}</span></td>
              <td>${b.tests.map(t=>`<span class="bp bpu" style="margin:1px">${t}</span>`).join('')}</td>
              <td><span class="bp ${allDone?'bs':'bw'}">${allDone?'✅ Complete':'⏳ Pending'}</span></td>
              <td>${b.date}</td>
              <td><div style="display:flex;gap:5px">
                <button class="btn btn-primary btn-sm" onclick="openResultEntry('${b.bill_no}')">✏️ Enter Result</button>
                ${allDone?`<button class="btn btn-outline btn-sm" onclick="printReport('${b.bill_no}')">🖨 Print</button>`:''}
              </div></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table></div>
    </div>`;
}

// ── OPEN RESULT ENTRY MODAL ──
function openResultEntry(billNo) {
  const bill = demoBills.find(b=>b.bill_no===billNo);
  const pat = demoPatients.find(p=>p.id===bill.patient_id)||{};
  if(!savedResults[billNo]) savedResults[billNo]={};

  let testsHtml = '';
  bill.tests.forEach(testKey => {
    const test = TEST_MASTER[testKey];
    if(!test) return;
    const saved = savedResults[billNo][testKey] || {};
    testsHtml += `
      <div style="margin-bottom:24px">
        <div style="background:linear-gradient(135deg,var(--primary-light),var(--accent2));color:#fff;padding:10px 16px;border-radius:10px 10px 0 0;font-weight:700;font-size:14px">
          🧪 ${test.fullName} (${testKey})
        </div>
        <div style="border:1.5px solid var(--border);border-top:none;border-radius:0 0 10px 10px;overflow:hidden">
          <table style="width:100%;border-collapse:collapse;font-size:13px">
            <thead>
              <tr style="background:#f4f8fc">
                <th style="padding:9px 14px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);width:35%">Parameter</th>
                <th style="padding:9px 14px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);width:20%">Result</th>
                <th style="padding:9px 14px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);width:15%">Unit</th>
                <th style="padding:9px 14px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);width:20%">Normal Range (${pat.gender||'M/F'})</th>
                <th style="padding:9px 14px;text-align:center;font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--text-muted);width:10%">Flag</th>
              </tr>
            </thead>
            <tbody>
              ${test.parameters.map((p,i) => {
                const range = pat.gender==='Female' ? p.female : p.male;
                const savedVal = saved[p.name]||'';
                return `<tr style="border-bottom:1px solid #f0f4f8">
                  <td style="padding:8px 14px;font-weight:500">${p.name}</td>
                  <td style="padding:8px 14px">
                    <input type="text" 
                      id="res_${testKey}_${i}" 
                      value="${savedVal}"
                      placeholder="Value"
                      style="width:100%;padding:6px 10px;border:1.5px solid var(--border);border-radius:7px;font-size:13px;font-family:var(--font)"
                      oninput="autoFlag('${testKey}',${i},'${range}','${pat.gender||'Male'}')"
                    />
                  </td>
                  <td style="padding:8px 14px;color:var(--text-muted);font-size:12px">${p.unit}</td>
                  <td style="padding:8px 14px;color:var(--text-muted);font-size:12px">${range}</td>
                  <td style="padding:8px 14px;text-align:center" id="flag_${testKey}_${i}">
                    ${savedVal ? getFlagBadge(getFlag(savedVal, range, p.unit)) : '—'}
                  </td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  });

  openModal(`✏️ Result Entry – ${pat.name} (${billNo})`, `
    <div style="background:var(--bg);border-radius:10px;padding:14px;margin-bottom:20px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;font-size:12px">
      <div><div style="color:var(--text-muted);font-size:10px;text-transform:uppercase;font-weight:700">Patient</div><div style="font-weight:700;margin-top:3px">${pat.name}</div></div>
      <div><div style="color:var(--text-muted);font-size:10px;text-transform:uppercase;font-weight:700">Age/Gender</div><div style="font-weight:700;margin-top:3px">${pat.age} yr / ${pat.gender}</div></div>
      <div><div style="color:var(--text-muted);font-size:10px;text-transform:uppercase;font-weight:700">Bill No</div><div style="font-weight:700;margin-top:3px">${billNo}</div></div>
      <div><div style="color:var(--text-muted);font-size:10px;text-transform:uppercase;font-weight:700">Ref. Doctor</div><div style="font-weight:700;margin-top:3px">${pat.ref_doctor}</div></div>
    </div>
    <div id="tests-entry-area">${testsHtml}</div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-success" onclick="saveResults('${billNo}')">💾 Save All Results</button>
      <button class="btn btn-primary" onclick="saveAndPrint('${billNo}')">🖨 Save & Print</button>
    </div>
  `);

  // Make modal wider
  document.getElementById('modal-box').style.maxWidth = '900px';
}

function autoFlag(testKey, idx, range, gender) {
  const val = document.getElementById(`res_${testKey}_${idx}`).value;
  const flag = getFlag(val, range, '');
  const flagEl = document.getElementById(`flag_${testKey}_${idx}`);
  if(flagEl) flagEl.innerHTML = val ? getFlagBadge(flag) : '—';
}

function getFlagBadge(flag) {
  if(!flag||flag==='NORMAL') return '<span style="color:#06d6a0;font-weight:700;font-size:12px">✓ N</span>';
  if(flag==='HIGH') return '<span style="color:#ef476f;font-weight:800;font-size:12px">↑ H</span>';
  if(flag==='LOW') return '<span style="color:#0077b6;font-weight:800;font-size:12px">↓ L</span>';
  return '—';
}

function saveResults(billNo) {
  const bill = demoBills.find(b=>b.bill_no===billNo);
  if(!savedResults[billNo]) savedResults[billNo]={};
  bill.tests.forEach(testKey => {
    const test = TEST_MASTER[testKey]; if(!test) return;
    if(!savedResults[billNo][testKey]) savedResults[billNo][testKey]={};
    test.parameters.forEach((p,i) => {
      const el = document.getElementById(`res_${testKey}_${i}`);
      if(el) savedResults[billNo][testKey][p.name] = el.value;
    });
  });
  localStorage.setItem('pathlab_results', JSON.stringify(savedResults));
  showToast('✅ Results save ho gaye!', 'success');
}

function saveAndPrint(billNo) {
  saveResults(billNo);
  closeModal();
  setTimeout(()=>printReport(billNo), 400);
}

// ════════════════════════════════════════════════════════
// PRINT REPORT
// ════════════════════════════════════════════════════════
function printReport(billNo) {
  const bill = demoBills.find(b=>b.bill_no===billNo);
  const pat = demoPatients.find(p=>p.id===bill.patient_id)||{};
  const results = savedResults[billNo]||{};
  const s = printSettings;

  let testsHtml = '';
  bill.tests.forEach(testKey => {
    const test = TEST_MASTER[testKey]; if(!test) return;
    const testResults = results[testKey]||{};
    testsHtml += `
      <div class="test-section">
        <div class="test-header">${test.fullName}</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Result</th>
              <th>Unit</th>
              ${s.showNormalRange?'<th>Normal Range</th>':''}
              ${s.showFlag?'<th>Flag</th>':''}
            </tr>
          </thead>
          <tbody>
            ${test.parameters.map(p => {
              const range = pat.gender==='Female' ? p.female : p.male;
              const val = testResults[p.name]||'';
              const flag = val ? getFlag(val, range, p.unit) : '';
              const flagStyle = flag==='HIGH'?'color:#c0392b;font-weight:800':flag==='LOW'?'color:#2980b9;font-weight:800':'color:#27ae60;font-weight:700';
              const rowStyle = flag==='HIGH'?'background:#fff5f5':flag==='LOW'?'background:#f0f8ff':'';
              return `<tr style="${rowStyle}">
                <td>${p.name}</td>
                <td style="font-weight:600;${flag&&flag!=='NORMAL'?flagStyle:''}">${val||'—'}</td>
                <td>${p.unit}</td>
                ${s.showNormalRange?`<td>${range}</td>`:''}
                ${s.showFlag?`<td style="${flagStyle}">${flag==='HIGH'?'↑ HIGH':flag==='LOW'?'↓ LOW':val?'Normal':''}</td>`:''}
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>`;
  });

  const printWin = window.open('','_blank','width=900,height=700');
  printWin.document.write(`<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<title>Report – ${pat.name}</title>
<style>
  @page { size: ${s.pageWidth}mm ${s.pageHeight}mm; margin: ${s.marginTop}mm ${s.marginRight}mm ${s.marginBottom}mm ${s.marginLeft}mm; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family: Arial, sans-serif; font-size: ${s.fontSize}pt; color: #000; }

  .report-header { border-bottom: 2.5px solid #1a3a5c; padding-bottom: 10px; margin-bottom: 12px; display:flex; justify-content:space-between; align-items:center; }
  .lab-info .lab-name { font-size: ${s.fontSize+6}pt; font-weight:800; color:#1a3a5c; }
  .lab-info .lab-detail { font-size:${s.fontSize-1}pt; color:#555; margin-top:2px; line-height:1.5; }
  .report-title { font-size:${s.fontSize+3}pt; font-weight:800; color:#1a3a5c; text-align:right; }

  .patient-box { background:#f0f6ff; border:1px solid #c0d4e8; border-radius:6px; padding:10px 14px; margin-bottom:12px; display:grid; grid-template-columns:repeat(4,1fr); gap:6px; }
  .patient-box .pf { }
  .patient-box .pk { font-size:${s.fontSize-2}pt; color:#666; text-transform:uppercase; font-weight:700; letter-spacing:.5px; }
  .patient-box .pv { font-size:${s.fontSize}pt; font-weight:700; margin-top:2px; }

  .test-section { margin-bottom:14px; }
  .test-header { background:#1a3a5c; color:#fff; padding:7px 12px; font-size:${s.fontSize+1}pt; font-weight:700; border-radius:4px 4px 0 0; }
  .report-table { width:100%; border-collapse:collapse; }
  .report-table th { background:#e8f0f8; padding:6px 10px; font-size:${s.fontSize-1}pt; text-align:left; font-weight:700; text-transform:uppercase; letter-spacing:.5px; color:#1a3a5c; border:1px solid #c0d4e8; }
  .report-table td { padding:5px 10px; border:1px solid #d9e6f2; font-size:${s.fontSize}pt; vertical-align:middle; }
  .report-table tr:nth-child(even) td { background:#f8fbff; }

  .report-footer { margin-top:20px; border-top:1.5px solid #1a3a5c; padding-top:12px; display:flex; justify-content:space-between; align-items:flex-end; }
  .signature-box { text-align:center; min-width:140px; }
  .signature-line { border-top:1.5px solid #000; margin-top:35px; padding-top:5px; font-size:${s.fontSize-1}pt; font-weight:700; }
  .note { font-size:${s.fontSize-2}pt; color:#666; font-style:italic; }

  .report-meta { display:flex; justify-content:space-between; font-size:${s.fontSize-1}pt; color:#555; margin-bottom:10px; }
  .flag-note { margin-top:10px; font-size:${s.fontSize-1}pt; color:#555; background:#fffbf0; border:1px solid #fde68a; padding:6px 10px; border-radius:4px; }
</style>
</head><body>

  <!-- HEADER -->
  <div class="report-header">
    <div class="lab-info">
      <div class="lab-name">${s.labName}</div>
      <div class="lab-detail">
        📍 ${s.labAddress}<br>
        📞 ${s.labPhone}${s.labEmail?' &nbsp;|&nbsp; ✉ '+s.labEmail:''}${s.labNABL?' &nbsp;|&nbsp; NABL: '+s.labNABL:''}
      </div>
    </div>
    <div class="report-title">
      LAB REPORT<br>
      <span style="font-size:${s.fontSize}pt;font-weight:400;color:#555">Bill No: ${billNo}</span>
    </div>
  </div>

  <!-- PATIENT INFO -->
  <div class="patient-box">
    <div class="pf"><div class="pk">Patient Name</div><div class="pv">${pat.name}</div></div>
    <div class="pf"><div class="pk">Age / Gender</div><div class="pv">${pat.age} Yrs / ${pat.gender}</div></div>
    <div class="pf"><div class="pk">Ref. Doctor</div><div class="pv">${pat.ref_doctor||'—'}</div></div>
    <div class="pf"><div class="pk">Report Date</div><div class="pv">${bill.date}</div></div>
    <div class="pf"><div class="pk">Patient ID</div><div class="pv">${pat.id}</div></div>
    <div class="pf"><div class="pk">Phone</div><div class="pv">${pat.phone}</div></div>
    <div class="pf"><div class="pk">Address</div><div class="pv">${pat.address||'—'}</div></div>
    <div class="pf"><div class="pk">Sample Type</div><div class="pv">Blood / Serum</div></div>
  </div>

  <!-- TESTS -->
  ${testsHtml}

  <!-- FLAG NOTE -->
  <div class="flag-note">
    <b>Flag Key:</b> &nbsp; <span style="color:#c0392b;font-weight:700">↑ HIGH</span> &nbsp;|&nbsp; <span style="color:#2980b9;font-weight:700">↓ LOW</span> &nbsp;|&nbsp; <span style="color:#27ae60;font-weight:700">Normal</span> &nbsp;&nbsp; * Report ke baare mein apne doctor se salah lein.
  </div>

  <!-- FOOTER / SIGNATURE -->
  ${s.showSignature ? `
  <div class="report-footer">
    <div class="note">Yeh report computer generated hai.<br>Kisi bhi jaanch ke liye clinic se sampark karein.</div>
    <div class="signature-box">
      <div class="signature-line">${s.labDoctor}<br><span style="font-weight:400;font-size:${s.fontSize-2}pt">Lab In-charge</span></div>
    </div>
  </div>` : ''}

</body></html>`);

  printWin.document.close();
  setTimeout(()=>{ printWin.focus(); printWin.print(); }, 600);
}

// ════════════════════════════════════════════════════════
// PRINT INVOICE
// ════════════════════════════════════════════════════════
function printInvoice(billNo) {
  const bill = demoBills.find(b=>b.bill_no===billNo);
  const pat = demoPatients.find(p=>p.id===bill.patient_id)||{};
  const s = printSettings;

  const payIcon = bill.payment_mode==='UPI'?'📱':bill.payment_mode==='Card'?'💳':'💵';

  const printWin = window.open('','_blank','width=700,height=600');
  printWin.document.write(`<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<title>Invoice – ${billNo}</title>
<style>
  @page { size: ${s.pageWidth}mm ${s.pageHeight}mm; margin: ${s.marginTop}mm ${s.marginRight}mm ${s.marginBottom}mm ${s.marginLeft}mm; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family: Arial, sans-serif; font-size: ${s.fontSize}pt; color:#000; }

  .inv-header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid #1a3a5c; padding-bottom:12px; margin-bottom:14px; }
  .lab-name { font-size:${s.fontSize+6}pt; font-weight:800; color:#1a3a5c; }
  .lab-detail { font-size:${s.fontSize-1}pt; color:#555; margin-top:3px; line-height:1.6; }
  .inv-title { text-align:right; }
  .inv-title h2 { font-size:${s.fontSize+5}pt; font-weight:800; color:#1a3a5c; }
  .inv-title p { font-size:${s.fontSize-1}pt; color:#555; margin-top:3px; }

  .pat-box { background:#f0f6ff; border:1px solid #c0d4e8; border-radius:6px; padding:10px 14px; margin-bottom:14px; display:grid; grid-template-columns:1fr 1fr; gap:4px; }
  .pat-row { display:flex; gap:8px; font-size:${s.fontSize}pt; }
  .pat-k { color:#555; min-width:100px; font-weight:600; }
  .pat-v { font-weight:700; }

  .inv-table { width:100%; border-collapse:collapse; margin-bottom:14px; }
  .inv-table th { background:#1a3a5c; color:#fff; padding:8px 12px; font-size:${s.fontSize}pt; text-align:left; }
  .inv-table th:last-child, .inv-table td:last-child { text-align:right; }
  .inv-table td { padding:8px 12px; border-bottom:1px solid #d9e6f2; font-size:${s.fontSize}pt; }
  .inv-table tr:last-child td { border:none; }

  .totals { margin-left:auto; width:260px; }
  .tot-row { display:flex; justify-content:space-between; padding:5px 0; font-size:${s.fontSize}pt; border-bottom:1px solid #d9e6f2; }
  .tot-row.final { font-size:${s.fontSize+1}pt; font-weight:800; color:#1a3a5c; border-bottom:none; padding-top:8px; }
  .tot-row.due { color:#c0392b; font-weight:800; }
  .tot-row.paid-row { color:#27ae60; font-weight:700; }

  .payment-box { margin-top:12px; padding:10px 14px; background:#f0fff4; border:1px solid #a7f3d0; border-radius:6px; font-size:${s.fontSize}pt; }
  .footer-note { margin-top:16px; font-size:${s.fontSize-2}pt; color:#777; text-align:center; border-top:1px solid #ddd; padding-top:10px; }
  .stamp-area { display:flex; justify-content:space-between; align-items:flex-end; margin-top:20px; }
  .sig-line { text-align:center; }
  .sig-line div { border-top:1px solid #000; margin-top:30px; padding-top:4px; font-size:${s.fontSize-1}pt; }
</style>
</head><body>

  <div class="inv-header">
    <div>
      <div class="lab-name">${s.labName}</div>
      <div class="lab-detail">📍 ${s.labAddress}<br>📞 ${s.labPhone}</div>
    </div>
    <div class="inv-title">
      <h2>INVOICE / RECEIPT</h2>
      <p>Bill No: <b>${billNo}</b></p>
      <p>Date: ${bill.date}</p>
    </div>
  </div>

  <div class="pat-box">
    <div class="pat-row"><span class="pat-k">Patient Name:</span><span class="pat-v">${pat.name}</span></div>
    <div class="pat-row"><span class="pat-k">Patient ID:</span><span class="pat-v">${pat.id}</span></div>
    <div class="pat-row"><span class="pat-k">Age / Gender:</span><span class="pat-v">${pat.age} Yrs / ${pat.gender}</span></div>
    <div class="pat-row"><span class="pat-k">Phone:</span><span class="pat-v">${pat.phone}</span></div>
    <div class="pat-row"><span class="pat-k">Address:</span><span class="pat-v">${pat.address}</span></div>
    <div class="pat-row"><span class="pat-k">Ref. Doctor:</span><span class="pat-v">${pat.ref_doctor||'—'}</span></div>
  </div>

  <table class="inv-table">
    <thead><tr><th>#</th><th>Test Name</th><th>Category</th><th>Amount (₹)</th></tr></thead>
    <tbody>
      ${bill.tests.map((t,i)=>`
        <tr>
          <td>${i+1}</td>
          <td><b>${TEST_MASTER[t]?.fullName||t}</b></td>
          <td>${TEST_MASTER[t]?.category||'—'}</td>
          <td>₹${testPrices[t]||0}</td>
        </tr>`).join('')}
    </tbody>
  </table>

  <div style="display:flex;justify-content:flex-end">
    <div class="totals">
      <div class="tot-row"><span>Subtotal</span><span>₹${bill.total}</span></div>
      <div class="tot-row"><span>Discount</span><span style="color:#27ae60">- ₹${bill.discount}</span></div>
      <div class="tot-row final"><span>Net Payable</span><span>₹${bill.total - bill.discount}</span></div>
      <div class="tot-row paid-row"><span>${payIcon} Paid (${bill.payment_mode||'—'})</span><span>₹${bill.paid}</span></div>
      ${bill.due>0?`<div class="tot-row due"><span>⚠️ Due Amount</span><span>₹${bill.due}</span></div>`:''}
    </div>
  </div>

  ${bill.paid>0?`
  <div class="payment-box">
    ✅ <b>Payment Received:</b> ₹${bill.paid} via <b>${bill.payment_mode||'Cash'}</b>
    ${bill.due>0?`&nbsp;&nbsp; | &nbsp;&nbsp; ⚠️ <b style="color:#c0392b">Remaining Due: ₹${bill.due}</b>`:''}
  </div>`:''}

  <div class="stamp-area">
    <div style="font-size:${s.fontSize-1}pt;color:#777">
      Thank you for choosing ${s.labName}!<br>
      Report ke liye dobaara ayen.
    </div>
    <div class="sig-line">
      <div>Authorized Signatory<br><span style="font-weight:400">${s.labName}</span></div>
    </div>
  </div>

  <div class="footer-note">
    Yeh computer-generated invoice hai. Kisi bhi problem ke liye sampark karein: ${s.labPhone}
  </div>

</body></html>`);
  printWin.document.close();
  setTimeout(()=>{ printWin.focus(); printWin.print(); }, 600);
}

// ── PRINT SETTINGS PAGE ──
function renderPrintSettings() {
  document.getElementById('page-container').innerHTML = `
    <div class="dash-grid">
      <div>
        <!-- PAGE SIZE -->
        <div class="card mb20">
          <div class="card-title mb16">📐 Custom Print Size</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
            <div class="fg"><label>Page Width (mm)</label><input type="number" id="ps-width" placeholder="210"/></div>
            <div class="fg"><label>Page Height (mm)</label><input type="number" id="ps-height" placeholder="297"/></div>
            <div class="fg"><label>Margin Top (mm)</label><input type="number" id="ps-mt" placeholder="10"/></div>
            <div class="fg"><label>Margin Bottom (mm)</label><input type="number" id="ps-mb" placeholder="10"/></div>
            <div class="fg"><label>Margin Left (mm)</label><input type="number" id="ps-ml" placeholder="10"/></div>
            <div class="fg"><label>Margin Right (mm)</label><input type="number" id="ps-mr" placeholder="10"/></div>
            <div class="fg"><label>Font Size (pt)</label><input type="number" id="ps-fs" placeholder="11" min="8" max="14"/></div>
          </div>
          <!-- QUICK SIZE BUTTONS -->
          <div class="section-sub mb16">⚡ Quick Size Select</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">
            <button class="btn btn-outline btn-sm" onclick="setSize(210,297)">A4 (210×297)</button>
            <button class="btn btn-outline btn-sm" onclick="setSize(148,210)">A5 (148×210)</button>
            <button class="btn btn-outline btn-sm" onclick="setSize(80,200)">Thermal 80mm</button>
            <button class="btn btn-outline btn-sm" onclick="setSize(210,148)">A4 Landscape</button>
            <button class="btn btn-outline btn-sm" onclick="setSize(216,279)">Letter (US)</button>
          </div>
        </div>

        <!-- LAB DETAILS -->
        <div class="card">
          <div class="card-title mb16">🏥 Lab Header Details</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
            <div class="fg full" style="grid-column:1/-1"><label>Lab Naam *</label><input type="text" id="ps-lab" placeholder="City Pathology Lab"/></div>
            <div class="fg full" style="grid-column:1/-1"><label>Address</label><input type="text" id="ps-addr" placeholder="123, Medical Colony, City"/></div>
            <div class="fg"><label>Phone</label><input type="text" id="ps-phone" placeholder="9876543210"/></div>
            <div class="fg"><label>Email</label><input type="email" id="ps-email" placeholder="lab@example.com"/></div>
            <div class="fg"><label>Doctor In-charge</label><input type="text" id="ps-doctor" placeholder="Dr. Name MD Pathology"/></div>
            <div class="fg"><label>NABL Number (optional)</label><input type="text" id="ps-nabl" placeholder="NABL-XXXX"/></div>
          </div>
        </div>
      </div>

      <!-- PREVIEW + OPTIONS -->
      <div>
        <div class="card mb20">
          <div class="card-title mb16">⚙️ Print Options</div>
          ${[['showNormalRange','Normal Range dikhao','Har parameter ke saath range'],
             ['showFlag','Auto Flag dikhao','HIGH/LOW/Normal automatically'],
             ['showSignature','Doctor Signature area','Report ke neeche signature box'],
             ['showLogo','Lab Logo show karo','Header mein logo (agar upload ho)']
            ].map(([k,l,d])=>`
            <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:var(--bg);border-radius:10px;margin-bottom:8px">
              <div><div style="font-size:13.5px;font-weight:600">${l}</div><div style="font-size:11px;color:var(--text-muted)">${d}</div></div>
              <input type="checkbox" id="ps-${k}" ${printSettings[k]?'checked':''} style="width:18px;height:18px;cursor:pointer;accent-color:var(--accent)" onchange="printSettings['${k}']=this.checked"/>
            </div>`).join('')}
        </div>

        <!-- PREVIEW BOX -->
        <div class="card">
          <div class="card-title mb16">👁 Size Preview</div>
          <div style="display:flex;justify-content:center;align-items:center;min-height:200px;background:var(--bg);border-radius:10px;padding:20px">
            <div id="size-preview" style="background:#fff;border:2px solid var(--primary-light);position:relative;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--primary-light);box-shadow:0 4px 16px rgba(0,0,0,.1)">
              A4
            </div>
          </div>
          <div style="text-align:center;font-size:12px;color:var(--text-muted);margin-top:8px" id="size-label">210mm × 297mm</div>
        </div>

        <button class="btn btn-primary" style="width:100%;margin-top:14px" onclick="applyPrintSettings()">💾 Settings Save Karo</button>
      </div>
    </div>`;

  loadPrintSettings();
  updatePreview();

  // Live preview update
  ['ps-width','ps-height'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', updatePreview);
  });
}

function setSize(w,h) {
  document.getElementById('ps-width').value = w;
  document.getElementById('ps-height').value = h;
  updatePreview();
}

function updatePreview() {
  const w = parseInt(document.getElementById('ps-width')?.value)||210;
  const h = parseInt(document.getElementById('ps-height')?.value)||297;
  const maxW = 140, maxH = 180;
  const scale = Math.min(maxW/w, maxH/h);
  const pw = Math.round(w*scale), ph = Math.round(h*scale);
  const prev = document.getElementById('size-preview');
  const lbl = document.getElementById('size-label');
  if(prev) { prev.style.width=pw+'px'; prev.style.height=ph+'px'; prev.textContent=`${w}×${h}`; }
  if(lbl) lbl.textContent = `${w}mm × ${h}mm`;
}

function applyPrintSettings() {
  printSettings.pageWidth  = parseInt(document.getElementById('ps-width').value)||210;
  printSettings.pageHeight = parseInt(document.getElementById('ps-height').value)||297;
  printSettings.marginTop    = parseInt(document.getElementById('ps-mt').value)||10;
  printSettings.marginBottom = parseInt(document.getElementById('ps-mb').value)||10;
  printSettings.marginLeft   = parseInt(document.getElementById('ps-ml').value)||10;
  printSettings.marginRight  = parseInt(document.getElementById('ps-mr').value)||10;
  printSettings.fontSize  = parseInt(document.getElementById('ps-fs').value)||11;
  printSettings.labName   = document.getElementById('ps-lab').value;
  printSettings.labAddress= document.getElementById('ps-addr').value;
  printSettings.labPhone  = document.getElementById('ps-phone').value;
  printSettings.labDoctor = document.getElementById('ps-doctor').value;
  printSettings.labEmail  = document.getElementById('ps-email').value;
  printSettings.labNABL   = document.getElementById('ps-nabl').value;
  savePrintSettings();
  showToast('✅ Print settings save ho gayi!', 'success');
}

function filterReportList(q) {
  document.querySelectorAll('#report-bill-list tr').forEach(r => {
    r.style.display = r.textContent.toLowerCase().includes(q.toLowerCase()) ? '' : 'none';
  });
}
