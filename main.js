const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let db;
function initDB() {
  try {
    const Database = require('better-sqlite3');
    const dbPath = path.join(app.getPath('userData'), 'pathlab.db');
    db = new Database(dbPath);
    db.exec(`
      CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patient_id TEXT UNIQUE, name TEXT, age INTEGER, gender TEXT,
        phone TEXT, address TEXT, ref_doctor TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS tests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT, category TEXT, price REAL,
        normal_range TEXT, unit TEXT, method TEXT
      );
      CREATE TABLE IF NOT EXISTS bills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        bill_no TEXT UNIQUE, patient_id TEXT,
        total REAL, discount REAL, paid REAL, due REAL,
        status TEXT DEFAULT 'Pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS reports (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        bill_no TEXT, test_id INTEGER, result TEXT,
        flag TEXT, status TEXT DEFAULT 'Pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS doctors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT, clinic TEXT, phone TEXT,
        specialization TEXT, commission REAL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS samples (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sample_id TEXT UNIQUE, patient_id TEXT, test_name TEXT,
        tube_type TEXT, collected_by TEXT, status TEXT DEFAULT 'Collected',
        condition TEXT DEFAULT 'Normal',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT, username TEXT UNIQUE, password TEXT,
        role TEXT DEFAULT 'Receptionist', active INTEGER DEFAULT 1,
        last_login DATETIME
      );
    `);
    // Insert default admin if not exists
    const admin = db.prepare('SELECT id FROM users WHERE username=?').get('admin');
    if (!admin) {
      db.prepare('INSERT INTO users (name,username,password,role) VALUES (?,?,?,?)')
        .run('Admin User', 'admin', 'admin123', 'Super Admin');
    }
  } catch (e) {
    console.log('DB init error:', e.message);
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1400, height: 900, minWidth: 1024, minHeight: 700,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
    show: false,
    title: 'PathLab Pro – Pathology Lab Management'
  });
  win.loadFile('src/index.html');
  win.once('ready-to-show', () => win.show());
  win.setMenuBarVisibility(false);
}

app.whenReady().then(() => { initDB(); createWindow(); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

// ── IPC HANDLERS ──
const safe = (fn) => { try { return fn(); } catch(e) { return null; } };

ipcMain.handle('get-patients', () => safe(() => db.prepare('SELECT * FROM patients ORDER BY created_at DESC').all()) || []);
ipcMain.handle('add-patient', (e, p) => {
  if (!db) return { success: false };
  const pid = 'PAT' + Date.now();
  db.prepare('INSERT INTO patients (patient_id,name,age,gender,phone,address,ref_doctor) VALUES (?,?,?,?,?,?,?)')
    .run(pid, p.name, p.age, p.gender, p.phone, p.address, p.ref_doctor);
  return { success: true, patient_id: pid };
});
ipcMain.handle('get-tests', () => safe(() => db.prepare('SELECT * FROM tests ORDER BY category,name').all()) || []);
ipcMain.handle('add-test', (e, t) => {
  if (!db) return { success: false };
  db.prepare('INSERT INTO tests (name,category,price,normal_range,unit,method) VALUES (?,?,?,?,?,?)')
    .run(t.name, t.category, t.price, t.normal_range, t.unit, t.method);
  return { success: true };
});
ipcMain.handle('get-bills', () => safe(() => db.prepare('SELECT * FROM bills ORDER BY created_at DESC').all()) || []);
ipcMain.handle('add-bill', (e, b) => {
  if (!db) return { success: false };
  const billNo = 'BILL' + Date.now();
  db.prepare('INSERT INTO bills (bill_no,patient_id,total,discount,paid,due,status) VALUES (?,?,?,?,?,?,?)')
    .run(billNo, b.patient_id, b.total, b.discount, b.paid, b.due, b.status);
  return { success: true, bill_no: billNo };
});
ipcMain.handle('get-doctors', () => safe(() => db.prepare('SELECT * FROM doctors ORDER BY name').all()) || []);
ipcMain.handle('add-doctor', (e, d) => {
  if (!db) return { success: false };
  db.prepare('INSERT INTO doctors (name,clinic,phone,specialization,commission) VALUES (?,?,?,?,?)')
    .run(d.name, d.clinic, d.phone, d.specialization, d.commission);
  return { success: true };
});
ipcMain.handle('get-samples', () => safe(() => db.prepare('SELECT * FROM samples ORDER BY created_at DESC').all()) || []);
ipcMain.handle('add-sample', (e, s) => {
  if (!db) return { success: false };
  const sid = 'SMP-' + String(Date.now()).slice(-6);
  db.prepare('INSERT INTO samples (sample_id,patient_id,test_name,tube_type,collected_by,status,condition) VALUES (?,?,?,?,?,?,?)')
    .run(sid, s.patient_id, s.test_name, s.tube_type, s.collected_by, 'Collected', s.condition);
  return { success: true, sample_id: sid };
});
ipcMain.handle('get-users', () => safe(() => db.prepare('SELECT id,name,username,role,active,last_login FROM users').all()) || []);
ipcMain.handle('add-user', (e, u) => {
  if (!db) return { success: false };
  db.prepare('INSERT INTO users (name,username,password,role) VALUES (?,?,?,?)')
    .run(u.name, u.username, u.password, u.role);
  return { success: true };
});
ipcMain.handle('get-stats', () => {
  if (!db) return { patients:0, bills:0, revenue:0, pending:0 };
  return {
    patients: db.prepare('SELECT COUNT(*) as c FROM patients').get().c,
    bills: db.prepare('SELECT COUNT(*) as c FROM bills').get().c,
    revenue: db.prepare('SELECT COALESCE(SUM(paid),0) as s FROM bills').get().s,
    pending: db.prepare('SELECT COALESCE(SUM(due),0) as s FROM bills WHERE due>0').get().s,
    today_patients: db.prepare("SELECT COUNT(*) as c FROM patients WHERE date(created_at)=date('now')").get().c,
    today_revenue: db.prepare("SELECT COALESCE(SUM(paid),0) as s FROM bills WHERE date(created_at)=date('now')").get().s,
  };
});
ipcMain.handle('search-patients', (e, q) => {
  if (!db) return [];
  return db.prepare('SELECT * FROM patients WHERE name LIKE ? OR phone LIKE ? OR patient_id LIKE ? ORDER BY created_at DESC')
    .all(`%${q}%`, `%${q}%`, `%${q}%`);
});
