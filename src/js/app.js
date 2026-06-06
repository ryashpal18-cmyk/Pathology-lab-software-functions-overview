// ── ELECTRON IPC ──
const ipc = (typeof require !== 'undefined') ? require('electron').ipcRenderer : null;
async function call(ch, data) {
  if (ipc) return await ipc.invoke(ch, data);
  return demo[ch] || (typeof demo[ch] === 'number' ? demo[ch] : []);
}

// ── DEMO DATA (browser fallback) ──
const demo = {
  'get-patients': [
    {id:1,patient_id:'PAT001',name:'Ramesh Kumar',age:45,gender:'Male',phone:'9876543210',address:'Gandhi Nagar, Delhi',ref_doctor:'Dr. Sharma',created_at:'2025-06-01'},
    {id:2,patient_id:'PAT002',name:'Sunita Devi',age:32,gender:'Female',phone:'9812345678',address:'Lajpat Nagar',ref_doctor:'Dr. Gupta',created_at:'2025-06-02'},
    {id:3,patient_id:'PAT003',name:'Mohan Lal',age:58,gender:'Male',phone:'9845612378',address:'Rohini Sector 3',ref_doctor:'Dr. Verma',created_at:'2025-06-03'},
    {id:4,patient_id:'PAT004',name:'Priya Singh',age:28,gender:'Female',phone:'9871234560',address:'Dwarka Sector 10',ref_doctor:'Dr. Sharma',created_at:'2025-06-04'},
  ],
  'get-tests': [
    {id:1,name:'Complete Blood Count (CBC)',category:'Hematology',price:300,unit:'cells/μL',normal_range:'See parameters',method:'Automated'},
    {id:2,name:'Blood Glucose Fasting',category:'Biochemistry',price:80,unit:'mg/dL',normal_range:'70-100',method:'Photometry'},
    {id:3,name:'Thyroid Stimulating Hormone (TSH)',category:'Endocrinology',price:500,unit:'mIU/L',normal_range:'0.4-4.0',method:'ELISA'},
    {id:4,name:'Liver Function Test (LFT)',category:'Biochemistry',price:600,unit:'various',normal_range:'See report',method:'Automated'},
    {id:5,name:'Kidney Function Test (KFT)',category:'Biochemistry',price:550,unit:'mg/dL',normal_range:'See report',method:'Automated'},
    {id:6,name:'Urine Routine Examination',category:'Microbiology',price:100,unit:'-',normal_range:'Normal',method:'Dipstick'},
    {id:7,name:'HbA1c (Glycated Hemoglobin)',category:'Biochemistry',price:400,unit:'%',normal_range:'< 5.7',method:'HPLC'},
    {id:8,name:'Lipid Profile',category:'Biochemistry',price:500,unit:'mg/dL',normal_range:'See report',method:'Automated'},
  ],
  'get-bills': [
    {id:1,bill_no:'BILL001',patient_id:'PAT001',total:1200,discount:100,paid:1100,due:0,status:'Paid',created_at:'2025-06-01'},
    {id:2,bill_no:'BILL002',patient_id:'PAT002',total:800,discount:0,paid:500,due:300,status:'Partial',created_at:'2025-06-02'},
    {id:3,bill_no:'BILL003',patient_id:'PAT003',total:1500,discount:200,paid:0,due:1300,status:'Pending',created_at:'2025-06-03'},
  ],
  'get-doctors': [
    {id:1,name:'Dr. Rahul Sharma',clinic:'City Clinic',phone:'9870001234',specialization:'General Physician',commission:10},
    {id:2,name:'Dr. Priya Gupta',clinic:'Health First Hospital',phone:'9870005678',specialization:'Gynecologist',commission:8},
    {id:3,name:'Dr. Ajay Verma',clinic:'Verma Medical Center',phone:'9870009999',specialization:'Cardiologist',commission:12},
  ],
  'get-samples': [
    {id:1,sample_id:'SMP-001',patient_id:'PAT001',test_name:'CBC',tube_type:'EDTA Purple',collected_by:'Rajesh',status:'Processing',condition:'Normal',created_at:'2025-06-01'},
    {id:2,sample_id:'SMP-002',patient_id:'PAT002',test_name:'Blood Glucose',tube_type:'Grey Cap',collected_by:'Rajesh',status:'Ready',condition:'Normal',created_at:'2025-06-02'},
  ],
  'get-users': [
    {id:1,name:'Admin User',username:'admin',role:'Super Admin',active:1,last_login:'2025-06-04'},
    {id:2,name:'Rajesh Kumar',username:'rajesh.lab',role:'Lab Technician',active:1,last_login:'2025-06-04'},
    {id:3,name:'Priya Receptionist',username:'priya.rec',role:'Receptionist',active:1,last_login:'2025-06-03'},
  ],
  'get-stats': {patients:127,bills:89,revenue:184500,pending:23400,today_patients:8,today_revenue:18450},
};

// ── NAVIGATION ──
const pageTitles = {
  dashboard:'Dashboard',patients:'Patient Registration',tests:'Test Management',
  billing:'Billing & Payment',reports:'Lab Reports',doctors:'Doctor / Referral Management',
  samples:'Sample Management',mis:'MIS Reports',users:'Users & Roles',
  settings:'Settings',backup:'Backup & Restore'
};

function navigate(page) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.page === page));
  document.getElementById('page-title').textContent = pageTitles[page] || page;
  document.getElementById('breadcrumb').textContent = `Home / ${pageTitles[page] || page}`;
  const container = document.getElementById('page-container');
  container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:180px;color:var(--text-muted)">⏳ Loading...</div>';
  setTimeout(() => pages[page] ? pages[page]() : (container.innerHTML = `<div class="card"><div class="card-title">${pageTitles[page]}</div><p style="color:var(--text-muted);margin-top:10px">Module ready...</p></div>`), 60);
}

// ── UTILS ──
function fmt(n) { return '₹' + Number(n||0).toLocaleString('en-IN'); }
function fmtDate(d) { return d ? d.split('T')[0] : '-'; }
function updateDate() {
  const now = new Date();
  document.getElementById('topbar-date').textContent = now.toLocaleDateString('hi-IN', {weekday:'short',year:'numeric',month:'short',day:'numeric'});
}
updateDate(); setInterval(updateDate, 60000);

function showToast(msg, type='info') {
  const t = document.getElementById('toast');
  t.textContent = msg; t.className = `toast ${type} show`;
  setTimeout(() => t.classList.remove('show'), 3200);
}
function openModal(title, html) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() { document.getElementById('modal-overlay').classList.remove('open'); }

function filterTable(tbodyId, q) {
  document.querySelectorAll(`#${tbodyId} tr`).forEach(r => {
    r.style.display = r.textContent.toLowerCase().includes(q.toLowerCase()) ? '' : 'none';
  });
}

// ════════════════════════════════════════
// PAGES
// ════════════════════════════════════════
const pages = {};

// ── DASHBOARD ──
pages.dashboard = async function() {
  const [stats, patients] = await Promise.all([call('get-stats'), call('get-patients')]);
  document.getElementById('page-container').innerHTML = `
    <div class="stats-grid">
      <div class="stat-card blue"><div class="stat-icon">👤</div><div class="stat-value">${stats.patients}</div><div class="stat-label">Total Patients</div><div class="stat-change up">↑ Aaj: ${stats.today_patients} naye</div></div>
      <div class="stat-card green"><div class="stat-icon">💰</div><div class="stat-value">${fmt(stats.revenue)}</div><div class="stat-label">Total Revenue</div><div class="stat-change up">↑ Aaj: ${fmt(stats.today_revenue)}</div></div>
      <div class="stat-card orange"><div class="stat-icon">📋</div><div class="stat-value">${stats.bills}</div><div class="stat-label">Total Bills</div><div class="stat-change up">↑ Growing</div></div>
      <div class="stat-card red"><div class="stat-icon">⏳</div><div class="stat-value">${fmt(stats.pending)}</div><div class="stat-label">Pending Dues</div><div class="stat-change down">↓ Collection needed</div></div>
    </div>
    <div class="quick-grid">
      <button class="quick-btn q1" onclick="navigate('patients')"><span class="q-icon">➕</span>New Patient Register</button>
      <button class="quick-btn q2" onclick="navigate('billing')"><span class="q-icon">🧾</span>Create New Bill</button>
      <button class="quick-btn q3" onclick="navigate('reports')"><span class="q-icon">🖨️</span>Print Report</button>
      <button class="quick-btn q4" onclick="navigate('samples')"><span class="q-icon">🧫</span>Sample Entry</button>
    </div>
    <div class="dash-grid">
      <div class="card">
        <div class="card-header">
          <div><div class="card-title">Recent Patients</div><div class="card-sub">Naye registered patients</div></div>
          <button class="btn btn-outline btn-sm" onclick="navigate('patients')">Sab Dekho →</button>
        </div>
        <div class="table-wrap"><table>
          <thead><tr><th>Patient ID</th><th>Naam</th><th>Umra</th><th>Phone</th><th>Ref. Doctor</th><th>Date</th></tr></thead>
          <tbody>${patients.slice(0,5).map(p=>`
            <tr>
              <td><span class="bp bi">${p.patient_id}</span></td>
              <td><b>${p.name}</b></td>
              <td>${p.age} yr / ${p.gender}</td>
              <td>${p.phone}</td>
              <td>${p.ref_doctor||'-'}</td>
              <td>${fmtDate(p.created_at)}</td>
            </tr>`).join('')}
          </tbody>
        </table></div>
      </div>
      <div class="card">
        <div class="card-title mb16">📌 Aaj Ka Summary</div>
        <div class="act-item"><div class="act-icon" style="background:#dbeafe">🧪</div><div><div class="act-text">12 Tests Pending</div><div class="act-time">Result entry baki hai</div></div></div>
        <div class="act-item"><div class="act-icon" style="background:#d1fae5">✅</div><div><div class="act-text">8 Reports Ready</div><div class="act-time">Delivery ke liye tayar</div></div></div>
        <div class="act-item"><div class="act-icon" style="background:#fee2e2">🚨</div><div><div class="act-text">3 Critical Values</div><div class="act-time">Turant dhyan chahiye</div></div></div>
        <div class="act-item"><div class="act-icon" style="background:#ede9fe">🏠</div><div><div class="act-text">5 Home Collections</div><div class="act-time">Aaj ke liye schedule</div></div></div>
        <div class="act-item"><div class="act-icon" style="background:#fef3c7">💳</div><div><div class="act-text">${fmt(stats.pending)} Due</div><div class="act-time">Collection pending</div></div></div>
      </div>
    </div>`;
};

// ── PATIENTS ──
pages.patients = async function() {
  const patients = await call('get-patients');
  document.getElementById('page-container').innerHTML = `
    <div class="card">
      <div class="card-header">
        <div><div class="card-title">Patient Registration</div><div class="card-sub">${patients.length} total patients</div></div>
        <div style="display:flex;gap:10px">
          <div class="search-bar"><span>🔍</span><input type="text" placeholder="Naam, phone ya ID se dhundo..." oninput="filterTable('ptbody',this.value)"/></div>
          <button class="btn btn-primary" onclick="openAddPatient()">➕ Naya Patient</button>
        </div>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Patient ID</th><th>Naam</th><th>Umra/Gender</th><th>Phone</th><th>Address</th><th>Ref. Doctor</th><th>Date</th><th>Actions</th></tr></thead>
        <tbody id="ptbody">
          ${patients.length===0?'<tr><td colspan="8" class="t-empty">Koi patient nahi mila. Pehla patient register karo ➕</td></tr>':
          patients.map(p=>`
            <tr>
              <td><span class="bp bi">${p.patient_id}</span></td>
              <td><b>${p.name}</b></td>
              <td>${p.age} yr / ${p.gender}</td>
              <td>📞 ${p.phone}</td>
              <td>${p.address||'-'}</td>
              <td>${p.ref_doctor||'-'}</td>
              <td>${fmtDate(p.created_at)}</td>
              <td><div style="display:flex;gap:5px">
                <button class="btn btn-outline btn-sm" onclick="viewPatient(${p.id},'${p.name}')">👁 View</button>
                <button class="btn btn-success btn-sm" onclick="navigate('billing')">🧾 Bill</button>
              </div></td>
            </tr>`).join('')}
        </tbody>
      </table></div>
    </div>`;
};

function openAddPatient() {
  openModal('➕ Naya Patient Register Karo', `
    <div class="form-grid">
      <div class="fg"><label>Pura Naam *</label><input type="text" id="p-name" placeholder="Patient ka naam"/></div>
      <div class="fg"><label>Phone *</label><input type="tel" id="p-phone" placeholder="10 digit mobile"/></div>
      <div class="fg"><label>Umra *</label><input type="number" id="p-age" placeholder="Age in years" min="0" max="120"/></div>
      <div class="fg"><label>Gender *</label><select id="p-gender"><option value="">-- Select --</option><option>Male</option><option>Female</option><option>Other</option></select></div>
      <div class="fg full"><label>Address</label><input type="text" id="p-addr" placeholder="Pura address"/></div>
      <div class="fg"><label>Ref. Doctor</label><input type="text" id="p-doc" placeholder="Dr. Naam"/></div>
      <div class="fg"><label>Email (Optional)</label><input type="email" id="p-email" placeholder="email@example.com"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="savePatient()">💾 Patient Save Karo</button>
    </div>`);
}
async function savePatient() {
  const name=document.getElementById('p-name').value.trim();
  const phone=document.getElementById('p-phone').value.trim();
  const age=document.getElementById('p-age').value;
  const gender=document.getElementById('p-gender').value;
  if(!name||!phone||!age||!gender){showToast('Sab * fields bharo!','error');return;}
  const r=await call('add-patient',{name,phone,age:parseInt(age),gender,address:document.getElementById('p-addr').value,ref_doctor:document.getElementById('p-doc').value});
  closeModal(); showToast(`Patient registered! ID: ${r.patient_id||'PAT-NEW'}`,'success');
  setTimeout(()=>pages.patients(),400);
}
function viewPatient(id,name) {
  openModal(`👤 ${name} – Patient Details`, `
    <div style="text-align:center;padding:20px">
      <div style="font-size:60px;margin-bottom:12px">👤</div>
      <div style="font-size:18px;font-weight:700;margin-bottom:4px">${name}</div>
      <div style="color:var(--text-muted);font-size:13px;margin-bottom:20px">Patient ID details</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div style="padding:14px;background:var(--bg);border-radius:10px"><div style="font-size:11px;color:var(--text-muted);font-weight:700">TESTS</div><div style="font-size:18px;font-weight:800;margin-top:4px">3</div></div>
      <div style="padding:14px;background:var(--bg);border-radius:10px"><div style="font-size:11px;color:var(--text-muted);font-weight:700">BILLS</div><div style="font-size:18px;font-weight:800;margin-top:4px">2</div></div>
    </div>
    <div class="modal-footer"><button class="btn btn-primary" onclick="closeModal()">Close</button></div>`);
}

// ── TESTS ──
pages.tests = async function() {
  const tests = await call('get-tests');
  const cats = [...new Set(tests.map(t=>t.category))];
  document.getElementById('page-container').innerHTML = `
    <div class="card">
      <div class="card-header">
        <div><div class="card-title">Test Management</div><div class="card-sub">${tests.length} tests configured</div></div>
        <div style="display:flex;gap:10px">
          <div class="search-bar"><span>🔍</span><input type="text" placeholder="Test dhundo..." oninput="filterTable('testbody',this.value)"/></div>
          <button class="btn btn-primary" onclick="openAddTest()">➕ Test Add Karo</button>
        </div>
      </div>
      <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:16px">
        <button class="btn btn-outline btn-sm" onclick="filterTestCat('')">All</button>
        ${cats.map(c=>`<button class="btn btn-outline btn-sm" onclick="filterTestCat('${c}')">${c}</button>`).join('')}
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Test Naam</th><th>Category</th><th>Price</th><th>Unit</th><th>Normal Range</th><th>Method</th><th>Actions</th></tr></thead>
        <tbody id="testbody">
          ${tests.map(t=>`
            <tr data-cat="${t.category}">
              <td><b>${t.name}</b></td>
              <td><span class="bp bpu">${t.category}</span></td>
              <td><b style="color:var(--primary-light)">${fmt(t.price)}</b></td>
              <td>${t.unit||'-'}</td>
              <td>${t.normal_range||'-'}</td>
              <td>${t.method||'-'}</td>
              <td><div style="display:flex;gap:5px">
                <button class="btn btn-outline btn-sm">✏️ Edit</button>
                <button class="btn btn-danger btn-sm">🗑</button>
              </div></td>
            </tr>`).join('')}
        </tbody>
      </table></div>
    </div>`;
};
function filterTestCat(cat) {
  document.querySelectorAll('#testbody tr').forEach(r=>r.style.display=(!cat||r.dataset.cat===cat)?'':'none');
}
function openAddTest() {
  openModal('➕ Naya Test Add Karo', `
    <div class="form-grid">
      <div class="fg full"><label>Test Naam *</label><input type="text" id="t-name" placeholder="e.g. Complete Blood Count"/></div>
      <div class="fg"><label>Category *</label><select id="t-cat"><option>Hematology</option><option>Biochemistry</option><option>Microbiology</option><option>Endocrinology</option><option>Immunology</option><option>Pathology</option><option>Radiology</option><option>Other</option></select></div>
      <div class="fg"><label>Price (₹) *</label><input type="number" id="t-price" placeholder="0" min="0"/></div>
      <div class="fg"><label>Unit</label><input type="text" id="t-unit" placeholder="mg/dL, g/L, etc."/></div>
      <div class="fg"><label>Normal Range</label><input type="text" id="t-range" placeholder="e.g. 70-100"/></div>
      <div class="fg"><label>Method</label><select id="t-method"><option>Automated</option><option>Photometry</option><option>ELISA</option><option>HPLC</option><option>Manual</option><option>Dipstick</option><option>PCR</option></select></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="saveTest()">💾 Test Save Karo</button>
    </div>`);
}
async function saveTest() {
  const name=document.getElementById('t-name').value.trim();
  const price=document.getElementById('t-price').value;
  if(!name||!price){showToast('Naam aur Price required!','error');return;}
  await call('add-test',{name,price:parseFloat(price),category:document.getElementById('t-cat').value,unit:document.getElementById('t-unit').value,normal_range:document.getElementById('t-range').value,method:document.getElementById('t-method').value});
  closeModal(); showToast('Test successfully add ho gaya!','success');
  setTimeout(()=>pages.tests(),400);
}

// ── BILLING ──
pages.billing = async function() {
  const bills = await call('get-bills');
  const collected = bills.reduce((s,b)=>s+(b.paid||0),0);
  const pending = bills.reduce((s,b)=>s+(b.due||0),0);
  document.getElementById('page-container').innerHTML = `
    <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat-card blue"><div class="stat-icon">🧾</div><div class="stat-value">${bills.length}</div><div class="stat-label">Total Bills</div></div>
      <div class="stat-card green"><div class="stat-icon">✅</div><div class="stat-value">${fmt(collected)}</div><div class="stat-label">Amount Collected</div></div>
      <div class="stat-card red"><div class="stat-icon">⏳</div><div class="stat-value">${fmt(pending)}</div><div class="stat-label">Pending Dues</div></div>
    </div>
    <div class="card">
      <div class="card-header">
        <div><div class="card-title">Billing & Payment</div><div class="card-sub">Sab bills aur transactions</div></div>
        <div style="display:flex;gap:10px">
          <div class="search-bar"><span>🔍</span><input type="text" placeholder="Bill ya patient dhundo..." oninput="filterTable('billbody',this.value)"/></div>
          <button class="btn btn-primary" onclick="openNewBill()">➕ Naya Bill</button>
        </div>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Bill No</th><th>Patient ID</th><th>Total</th><th>Discount</th><th>Paid</th><th>Due</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
        <tbody id="billbody">
          ${bills.map(b=>`
            <tr>
              <td><b>${b.bill_no}</b></td>
              <td>${b.patient_id}</td>
              <td>${fmt(b.total)}</td>
              <td style="color:var(--success)">-${fmt(b.discount)}</td>
              <td><b style="color:var(--success)">${fmt(b.paid)}</b></td>
              <td><b style="color:${b.due>0?'var(--danger)':'var(--text-muted)'}">${fmt(b.due)}</b></td>
              <td><span class="bp ${b.status==='Paid'?'bs':b.status==='Partial'?'bw':'bd'}">${b.status}</span></td>
              <td>${fmtDate(b.created_at)}</td>
              <td><div style="display:flex;gap:5px">
                <button class="btn btn-outline btn-sm" onclick="printBill('${b.bill_no}')">🖨 Print</button>
                ${b.due>0?`<button class="btn btn-success btn-sm" onclick="collectDue('${b.bill_no}',${b.due})">💳 Due</button>`:''}
              </div></td>
            </tr>`).join('')}
        </tbody>
      </table></div>
    </div>`;
};
function openNewBill() {
  openModal('🧾 Naya Bill Banao', `
    <div class="form-grid">
      <div class="fg"><label>Patient ID *</label><input type="text" id="b-pat" placeholder="PAT001"/></div>
      <div class="fg"><label>Total Amount (₹) *</label><input type="number" id="b-tot" placeholder="0" oninput="calcBill()"/></div>
      <div class="fg"><label>Discount (₹)</label><input type="number" id="b-disc" placeholder="0" oninput="calcBill()"/></div>
      <div class="fg"><label>Amount Paid (₹)</label><input type="number" id="b-paid" placeholder="0" oninput="calcBill()"/></div>
      <div class="fg"><label>Due Amount (₹)</label><input type="number" id="b-due" placeholder="0" readonly/></div>
      <div class="fg"><label>Payment Status</label><select id="b-stat"><option>Paid</option><option>Partial</option><option>Pending</option></select></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="saveBill()">💾 Bill Generate Karo</button>
    </div>`);
}
function calcBill() {
  const tot=parseFloat(document.getElementById('b-tot')?.value)||0;
  const disc=parseFloat(document.getElementById('b-disc')?.value)||0;
  const paid=parseFloat(document.getElementById('b-paid')?.value)||0;
  const due=document.getElementById('b-due');
  if(due) due.value=Math.max(0,tot-disc-paid);
}
async function saveBill() {
  const patient_id=document.getElementById('b-pat').value.trim();
  const total=parseFloat(document.getElementById('b-tot').value)||0;
  if(!patient_id||total<=0){showToast('Patient ID aur Amount required!','error');return;}
  const disc=parseFloat(document.getElementById('b-disc').value)||0;
  const paid=parseFloat(document.getElementById('b-paid').value)||0;
  const due=Math.max(0,total-disc-paid);
  const r=await call('add-bill',{patient_id,total,discount:disc,paid,due,status:document.getElementById('b-stat').value});
  closeModal(); showToast(`Bill ban gaya! No: ${r.bill_no||'BILL-NEW'}`,'success');
  setTimeout(()=>pages.billing(),400);
}
function printBill(n) { showToast(`${n} print ho raha hai...`,'info'); window.print(); }
function collectDue(n,due) { showToast(`${n} – Due collection: ${fmt(due)}`,'info'); }

// ── REPORTS ──
pages.reports = async function() {
  document.getElementById('page-container').innerHTML = `
    <div class="card">
      <div class="card-header">
        <div class="card-title">Lab Reports</div>
        <button class="btn btn-primary" onclick="openResultEntry()">➕ Result Enter Karo</button>
      </div>
      <div class="tabs">
        <div class="tab active" onclick="setTab(this)">⏳ Pending (12)</div>
        <div class="tab" onclick="setTab(this)">✅ Ready (8)</div>
        <div class="tab" onclick="setTab(this)">🚨 Critical (3)</div>
        <div class="tab" onclick="setTab(this)">📋 All Reports</div>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Bill No</th><th>Patient</th><th>Test</th><th>Result</th><th>Flag</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
        <tbody>
          <tr><td>BILL001</td><td>Ramesh Kumar</td><td>CBC</td><td>Hb: 11.2 g/dL</td><td><span class="f-low">↓ LOW</span></td><td><span class="bp bw">Pending</span></td><td>2025-06-01</td><td><button class="btn btn-primary btn-sm">🖨 Print</button></td></tr>
          <tr><td>BILL002</td><td>Sunita Devi</td><td>TSH</td><td>8.5 mIU/L</td><td><span class="f-high">↑ HIGH</span></td><td><span class="bp bs">Ready</span></td><td>2025-06-02</td><td><button class="btn btn-primary btn-sm">🖨 Print</button></td></tr>
          <tr><td>BILL003</td><td>Mohan Lal</td><td>Blood Glucose</td><td>420 mg/dL</td><td><span class="f-crit">*** CRITICAL</span></td><td><span class="bp bd">Critical</span></td><td>2025-06-03</td><td><button class="btn btn-primary btn-sm">🖨 Print</button></td></tr>
          <tr><td>BILL004</td><td>Priya Singh</td><td>Lipid Profile</td><td>Chol: 185 mg/dL</td><td><span class="f-normal">✓ Normal</span></td><td><span class="bp bs">Ready</span></td><td>2025-06-04</td><td><button class="btn btn-primary btn-sm">🖨 Print</button></td></tr>
        </tbody>
      </table></div>
    </div>`;
};
function setTab(el) { document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active')); el.classList.add('active'); }
function openResultEntry() {
  openModal('🔬 Lab Result Enter Karo', `
    <div class="form-grid">
      <div class="fg"><label>Bill Number *</label><input type="text" placeholder="BILL001"/></div>
      <div class="fg"><label>Test *</label><select><option>CBC</option><option>Blood Glucose</option><option>TSH</option><option>LFT</option><option>KFT</option></select></div>
      <div class="fg full"><label>Result *</label><textarea placeholder="Result values yahan likhein..."></textarea></div>
      <div class="fg"><label>Flag</label><select><option>Normal</option><option>High ↑</option><option>Low ↓</option><option>Critical ***</option></select></div>
      <div class="fg"><label>Verified By</label><input type="text" placeholder="Lab Technician naam"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="closeModal();showToast('Result save ho gaya!','success')">💾 Save & Verify</button>
    </div>`);
}

// ── DOCTORS ──
pages.doctors = async function() {
  const docs = await call('get-doctors');
  document.getElementById('page-container').innerHTML = `
    <div class="card">
      <div class="card-header">
        <div><div class="card-title">Doctor / Referral Management</div><div class="card-sub">${docs.length} doctors registered</div></div>
        <button class="btn btn-primary" onclick="openAddDoctor()">➕ Doctor Add Karo</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Naam</th><th>Clinic/Hospital</th><th>Phone</th><th>Specialization</th><th>Commission %</th><th>Referrals</th><th>Actions</th></tr></thead>
        <tbody>${docs.map(d=>`
          <tr>
            <td><b>👨‍⚕️ ${d.name}</b></td>
            <td>${d.clinic}</td>
            <td>📞 ${d.phone}</td>
            <td><span class="bp bpu">${d.specialization}</span></td>
            <td><b>${d.commission}%</b></td>
            <td><span class="bp bi">${Math.floor(Math.random()*25)+3} patients</span></td>
            <td><div style="display:flex;gap:5px">
              <button class="btn btn-outline btn-sm">📊 Report</button>
              <button class="btn btn-outline btn-sm">✏️ Edit</button>
            </div></td>
          </tr>`).join('')}
        </tbody>
      </table></div>
    </div>`;
};
function openAddDoctor() {
  openModal('➕ Doctor / Referral Add Karo', `
    <div class="form-grid">
      <div class="fg"><label>Doctor Naam *</label><input type="text" id="d-name" placeholder="Dr. Full Name"/></div>
      <div class="fg"><label>Clinic / Hospital</label><input type="text" id="d-clinic" placeholder="Clinic naam"/></div>
      <div class="fg"><label>Phone *</label><input type="tel" id="d-phone" placeholder="10 digit"/></div>
      <div class="fg"><label>Specialization</label><select id="d-spec"><option>General Physician</option><option>Cardiologist</option><option>Gynecologist</option><option>Orthopedic</option><option>Pediatrician</option><option>Dermatologist</option><option>Neurologist</option><option>Other</option></select></div>
      <div class="fg"><label>Commission %</label><input type="number" id="d-comm" placeholder="0" min="0" max="100"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="saveDoctor()">💾 Doctor Save Karo</button>
    </div>`);
}
async function saveDoctor() {
  const name=document.getElementById('d-name').value.trim();
  if(!name){showToast('Doctor naam required!','error');return;}
  await call('add-doctor',{name,clinic:document.getElementById('d-clinic').value,phone:document.getElementById('d-phone').value,specialization:document.getElementById('d-spec').value,commission:parseFloat(document.getElementById('d-comm').value)||0});
  closeModal(); showToast('Doctor successfully add ho gaya!','success');
  setTimeout(()=>pages.doctors(),400);
}

// ── SAMPLES ──
pages.samples = async function() {
  const samples = await call('get-samples');
  document.getElementById('page-container').innerHTML = `
    <div class="card">
      <div class="card-header">
        <div><div class="card-title">Sample Management</div><div class="card-sub">${samples.length} samples aaj</div></div>
        <button class="btn btn-primary" onclick="openSample()">➕ Naya Sample</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Sample ID</th><th>Patient</th><th>Test</th><th>Tube Type</th><th>Collected By</th><th>Condition</th><th>Status</th><th>Time</th><th>Actions</th></tr></thead>
        <tbody>${samples.map(s=>`
          <tr>
            <td><b>${s.sample_id}</b></td>
            <td>${s.patient_id}</td>
            <td>${s.test_name}</td>
            <td><span class="bp bd">${s.tube_type}</span></td>
            <td>${s.collected_by}</td>
            <td>${s.condition}</td>
            <td><span class="bp ${s.status==='Ready'?'bs':s.status==='Processing'?'bw':'bi'}">${s.status}</span></td>
            <td>${fmtDate(s.created_at)}</td>
            <td><button class="btn btn-outline btn-sm">🏷 Label Print</button></td>
          </tr>`).join('')}
          ${samples.length===0?'<tr><td colspan="9" class="t-empty">Koi sample nahi hai. Naya sample add karo.</td></tr>':''}
        </tbody>
      </table></div>
    </div>`;
};
function openSample() {
  openModal('🧫 Naya Sample Register Karo', `
    <div class="form-grid">
      <div class="fg"><label>Patient ID *</label><input type="text" placeholder="PAT001"/></div>
      <div class="fg"><label>Test *</label><select><option>CBC</option><option>Blood Glucose</option><option>LFT</option><option>TSH</option><option>KFT</option><option>Lipid Profile</option></select></div>
      <div class="fg"><label>Tube Type</label><select><option>EDTA (Purple Cap)</option><option>Grey Cap</option><option>Red Cap</option><option>Yellow Cap (SST)</option><option>Green Cap</option><option>Blue Cap</option></select></div>
      <div class="fg"><label>Collected By</label><input type="text" placeholder="Technician naam"/></div>
      <div class="fg"><label>Collection Time</label><input type="time"/></div>
      <div class="fg"><label>Sample Condition</label><select><option>Normal</option><option>Hemolyzed</option><option>Lipemic</option><option>Insufficient</option><option>Clotted</option></select></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="closeModal();showToast('Sample register ho gaya! Label print ho raha hai...','success')">💾 Register & Print Label</button>
    </div>`);
}

// ── MIS REPORTS ──
pages.mis = function() {
  document.getElementById('page-container').innerHTML = `
    <div class="card mb20">
      <div class="card-title mb16">📈 MIS Report Generate Karo</div>
      <div class="form-grid3">
        <div class="fg"><label>Report Type</label><select id="mis-type">
          <option>Daily Collection Report</option><option>Test-wise Revenue</option>
          <option>Doctor-wise Referral</option><option>Pending / Dues Report</option>
          <option>Month-wise Comparison</option><option>Tax / GST Report</option>
          <option>Cancellation Report</option><option>Sample Collection Report</option>
        </select></div>
        <div class="fg"><label>From Date</label><input type="date"/></div>
        <div class="fg"><label>To Date</label><input type="date"/></div>
      </div>
      <div style="margin-top:14px;display:flex;gap:10px">
        <button class="btn btn-primary" onclick="showToast('Report generate ho rahi hai...','info')">📊 Report Generate</button>
        <button class="btn btn-outline" onclick="showToast('Excel mein export ho raha hai...','info')">📥 Export Excel</button>
        <button class="btn btn-outline" onclick="window.print()">🖨 Print</button>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card blue"><div class="stat-icon">📅</div><div class="stat-value">₹18,450</div><div class="stat-label">Aaj Ki Collection</div></div>
      <div class="stat-card green"><div class="stat-icon">📆</div><div class="stat-value">₹1,24,800</div><div class="stat-label">Is Mahine Ki</div></div>
      <div class="stat-card orange"><div class="stat-icon">📊</div><div class="stat-value">₹9,84,500</div><div class="stat-label">Is Saal Ki</div></div>
      <div class="stat-card red"><div class="stat-icon">🧾</div><div class="stat-value">₹23,400</div><div class="stat-label">GST Payable</div></div>
    </div>
    <div class="card">
      <div class="card-title mb16">📊 Top Tests By Revenue</div>
      <div class="table-wrap"><table>
        <thead><tr><th>Test Naam</th><th>Count</th><th>Revenue</th><th>%</th></tr></thead>
        <tbody>
          <tr><td><b>CBC</b></td><td>45</td><td>${fmt(13500)}</td><td><div style="display:flex;align-items:center;gap:8px"><div style="height:6px;width:80%;background:var(--bg);border-radius:10px"><div style="height:100%;width:28%;background:var(--primary-light);border-radius:10px"></div></div>28%</div></td></tr>
          <tr><td><b>LFT</b></td><td>32</td><td>${fmt(19200)}</td><td><div style="display:flex;align-items:center;gap:8px"><div style="height:6px;width:80%;background:var(--bg);border-radius:10px"><div style="height:100%;width:40%;background:var(--success);border-radius:10px"></div></div>40%</div></td></tr>
          <tr><td><b>TSH</b></td><td>28</td><td>${fmt(14000)}</td><td><div style="display:flex;align-items:center;gap:8px"><div style="height:6px;width:80%;background:var(--bg);border-radius:10px"><div style="height:100%;width:29%;background:var(--warning);border-radius:10px"></div></div>29%</div></td></tr>
        </tbody>
      </table></div>
    </div>`;
};

// ── USERS ──
pages.users = async function() {
  const users = await call('get-users');
  document.getElementById('page-container').innerHTML = `
    <div class="card">
      <div class="card-header">
        <div><div class="card-title">Users & Role Management</div><div class="card-sub">${users.length} users registered</div></div>
        <button class="btn btn-primary" onclick="openAddUser()">➕ User Add Karo</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Naam</th><th>Username</th><th>Role</th><th>Permissions</th><th>Last Login</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>${users.map(u=>`
          <tr>
            <td><b>${u.name}</b></td>
            <td><code>${u.username}</code></td>
            <td><span class="bp ${u.role==='Super Admin'?'bd':u.role==='Lab Technician'?'bi':'bw'}">${u.role}</span></td>
            <td>${u.role==='Super Admin'?'All Access':u.role==='Lab Technician'?'Reports, Results':'Patients, Billing'}</td>
            <td>${u.last_login?fmtDate(u.last_login):'-'}</td>
            <td><span class="bp ${u.active?'bs':'bd'}">${u.active?'Active':'Inactive'}</span></td>
            <td><div style="display:flex;gap:5px">
              <button class="btn btn-outline btn-sm">✏️ Edit</button>
              <button class="btn btn-danger btn-sm">🔒 Disable</button>
            </div></td>
          </tr>`).join('')}
        </tbody>
      </table></div>
    </div>`;
};
function openAddUser() {
  openModal('➕ Naya User Add Karo', `
    <div class="form-grid">
      <div class="fg"><label>Pura Naam *</label><input type="text" placeholder="User ka naam"/></div>
      <div class="fg"><label>Username *</label><input type="text" placeholder="login username"/></div>
      <div class="fg"><label>Password *</label><input type="password" placeholder="Strong password"/></div>
      <div class="fg"><label>Confirm Password *</label><input type="password" placeholder="Password repeat karo"/></div>
      <div class="fg"><label>Role *</label><select><option>Receptionist</option><option>Lab Technician</option><option>Doctor</option><option>Admin</option><option>Super Admin</option></select></div>
      <div class="fg"><label>Phone</label><input type="tel" placeholder="10 digit"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="closeModal();showToast('User successfully add ho gaya!','success')">💾 User Save Karo</button>
    </div>`);
}

// ── SETTINGS ──
pages.settings = function() {
  document.getElementById('page-container').innerHTML = `
    <div class="dash-grid">
      <div>
        <div class="card mb20">
          <div class="card-title mb16">🏥 Lab Profile Settings</div>
          <div class="form-grid">
            <div class="fg full"><label>Lab Naam *</label><input type="text" value="City Pathology Lab"/></div>
            <div class="fg full"><label>Address</label><textarea>123, Medical Colony, City - 400001</textarea></div>
            <div class="fg"><label>Phone</label><input type="tel" value="9876543210"/></div>
            <div class="fg"><label>Email</label><input type="email" value="lab@example.com"/></div>
            <div class="fg"><label>NABL Number</label><input type="text" placeholder="NABL-XXXX"/></div>
            <div class="fg"><label>GST Number</label><input type="text" placeholder="22AAAAA0000A1Z5"/></div>
            <div class="fg"><label>Doctor In-charge</label><input type="text" placeholder="Dr. Naam (MD Pathology)"/></div>
            <div class="fg"><label>Registration No.</label><input type="text" placeholder="Lab registration number"/></div>
          </div>
          <div style="margin-top:14px"><button class="btn btn-primary" onclick="showToast('Settings save ho gayi!','success')">💾 Save Settings</button></div>
        </div>
        <div class="card">
          <div class="card-title mb16">📱 Integrations</div>
          ${[['📱','SMS Integration','Report ready par SMS','Disabled'],['💬','WhatsApp','PDF reports WhatsApp par','Disabled'],['📧','Email SMTP','Auto email reports','Disabled'],['🖨️','Default Printer','Printer configuration','HP LaserJet'],['🏷️','Barcode Scanner','USB barcode reader','Connected']].map(([i,l,d,v])=>`
            <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;background:var(--bg);border-radius:10px;margin-bottom:8px">
              <div><div style="font-weight:600;font-size:13.5px">${i} ${l}</div><div style="font-size:11px;color:var(--text-muted)">${d} – <b>${v}</b></div></div>
              <button class="btn btn-outline btn-sm" onclick="showToast('${l} configure kar rahe hain...','info')">Configure</button>
            </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="card-title mb16">⚙️ Software Options</div>
        ${[['Auto-print on save','Reports auto print','checked'],['SMS on report ready','SMS bhejo jab ready ho','checked'],['GST enabled','Bills mein GST add karo',''],['Show normal range','Report mein range dikhao','checked'],['Digital signature','Reports par sign',''],['NABL format','NABL compliant format',''],['Home collection','Home sample collection','checked'],['Auto backup','Daily auto backup','checked']].map(([l,d,c])=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--bg);border-radius:10px;margin-bottom:7px">
            <div><div style="font-size:13px;font-weight:600">${l}</div><div style="font-size:11px;color:var(--text-muted)">${d}</div></div>
            <input type="checkbox" ${c} style="width:18px;height:18px;cursor:pointer;accent-color:var(--accent)"/>
          </div>`).join('')}
      </div>
    </div>`;
};

// ── BACKUP ──
pages.backup = function() {
  document.getElementById('page-container').innerHTML = `
    <div class="dash-grid">
      <div class="card">
        <div class="card-title mb16">💾 Backup & Restore</div>
        <div style="display:flex;flex-direction:column;gap:14px">
          <div style="padding:24px;background:linear-gradient(135deg,#dbeafe,#bfdbfe);border-radius:14px;text-align:center">
            <div style="font-size:48px;margin-bottom:10px">💾</div>
            <div style="font-weight:700;font-size:15px;margin-bottom:4px">Manual Backup Create Karo</div>
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:14px">Apna pura database backup karo</div>
            <button class="btn btn-primary" onclick="showToast('Backup create ho raha hai...','info')">📥 Backup Now</button>
          </div>
          <div style="padding:24px;background:linear-gradient(135deg,#d1fae5,#a7f3d0);border-radius:14px;text-align:center">
            <div style="font-size:48px;margin-bottom:10px">🔄</div>
            <div style="font-weight:700;font-size:15px;margin-bottom:4px">Purana Data Restore Karo</div>
            <div style="font-size:12px;color:var(--text-muted);margin-bottom:14px">Backup file se data wapas lao</div>
            <button class="btn btn-success" onclick="showToast('Backup file select karo...','info')">📤 Restore Data</button>
          </div>
          <div style="padding:16px;background:var(--bg);border-radius:12px">
            <div style="font-weight:600;font-size:13px;margin-bottom:10px">⚙️ Auto Backup Settings</div>
            ${[['Daily auto backup','Har din subah 6 baje','checked'],['Weekly backup','Har Sunday','checked'],['Cloud backup','Google Drive sync','']].map(([l,d,c])=>`
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
                <div><div style="font-size:12.5px;font-weight:600">${l}</div><div style="font-size:11px;color:var(--text-muted)">${d}</div></div>
                <input type="checkbox" ${c} style="width:16px;height:16px;accent-color:var(--accent)"/>
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-title mb16">📋 Backup History</div>
        ${['2025-06-04 06:00','2025-06-03 06:00','2025-06-02 06:00','2025-06-01 06:00','2025-05-31 06:00'].map(d=>`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;background:var(--bg);border-radius:10px;margin-bottom:8px">
            <div>
              <div style="font-weight:600;font-size:13px">💾 Backup_${d.replace(/[: ]/g,'_')}.db</div>
              <div style="font-size:11px;color:var(--text-muted)">${d} &bull; ${(Math.random()*4+2).toFixed(1)} MB &bull; Auto</div>
            </div>
            <div style="display:flex;gap:5px">
              <button class="btn btn-outline btn-sm" onclick="showToast('Restore ho raha hai...','info')">🔄 Restore</button>
              <button class="btn btn-danger btn-sm" onclick="showToast('Backup delete ho gaya','info')">🗑</button>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
};

function openNotifications() {
  openModal('🔔 Notifications', `
    <div style="display:flex;flex-direction:column;gap:10px">
      <div class="act-item"><div class="act-icon" style="background:#fee2e2">🚨</div><div><div class="act-text">Critical: Mohan Lal – Blood Glucose 420 mg/dL</div><div class="act-time">5 minute pehle</div></div></div>
      <div class="act-item"><div class="act-icon" style="background:#d1fae5">✅</div><div><div class="act-text">8 Reports ready for delivery</div><div class="act-time">20 minute pehle</div></div></div>
      <div class="act-item"><div class="act-icon" style="background:#fef3c7">💳</div><div><div class="act-text">Pending dues: ₹23,400 collection needed</div><div class="act-time">1 ghante pehle</div></div></div>
      <div class="act-item"><div class="act-icon" style="background:#ede9fe">🏠</div><div><div class="act-text">5 home collections aaj scheduled hain</div><div class="act-time">Subah se</div></div></div>
    </div>
    <div class="modal-footer"><button class="btn btn-primary" onclick="closeModal()">Close</button></div>`);
}

// ── INIT ──
navigate('dashboard');
