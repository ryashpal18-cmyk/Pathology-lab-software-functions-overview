# 🔬 PathLab Pro – Pathology Lab Management Software

> Electron.js se bana complete Pathology Lab Management System  
> GitHub se **automatic Windows EXE** build hota hai!

---

## ✅ Features

| Module | Description |
|--------|-------------|
| 📊 Dashboard | Stats, quick actions, aaj ka summary |
| 👤 Patient Registration | Register, search, history |
| 🧪 Test Management | Test master, categories, pricing |
| 💰 Billing & Payment | Bills, receipts, dues, GST |
| 📋 Lab Reports | Result entry, auto flags, print |
| 👨‍⚕️ Doctor / Referral | Commission tracking |
| 🧫 Sample Management | Barcode, tube type, status |
| 📈 MIS Reports | Daily, monthly, tax reports |
| 🔐 Users & Roles | Multi-user, role-based access |
| ⚙️ Settings | Lab profile, SMS, WhatsApp |
| 💾 Backup & Restore | Auto + manual backup |

---

## 🚀 GitHub se EXE Kaise Banayein

### Method 1 – GitHub Actions (Recommended ✅)

1. Is folder ka sara content GitHub par upload karo
2. **Actions tab** mein jayein
3. **"Build PathLab Pro EXE"** workflow automatic chalega
4. Build complete hone par **Artifacts** section mein EXE download karo

```
GitHub Repo → Actions → Latest Run → Artifacts → Download EXE
```

### Method 2 – Local Windows PC par

```bash
# Node.js install karo: https://nodejs.org
npm install
npm run build
# dist/ folder mein EXE milega
```

---

## 📁 Project Structure

```
pathlab/
├── main.js                    ← Electron main + IPC + SQLite DB
├── package.json               ← Build config
├── .github/workflows/
│   └── build.yml              ← Auto EXE builder
└── src/
    ├── index.html             ← UI shell
    ├── css/style.css          ← Complete styles
    ├── js/app.js              ← All pages + logic
    └── assets/icon.ico        ← App icon (replace karo)
```

---

## 🖼️ Icon Setup

1. Koi bhi 256×256 PNG lo (lab logo)
2. Convert to .ico: https://convertio.co/png-ico/
3. Save as: `src/assets/icon.ico`

---

## 🗄️ Database

- **SQLite** (better-sqlite3) – fully offline
- Data: `%APPDATA%/pathology-lab-management/pathlab.db`
- No server needed

---

## 💻 Requirements

- Windows 10/11 (64-bit)
- RAM: 4GB minimum
- Storage: 200MB

---

**Made with ❤️ for Indian Pathology Labs**
