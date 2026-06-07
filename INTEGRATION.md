# PathLab Pro – Report & Invoice System Integration Guide

## Kaise Add Karein Existing Software Mein:

### Step 1 – reports.js copy karo
`src/js/reports.js` → apne project ke `src/js/` folder mein

### Step 2 – index.html mein script add karo
```html
<!-- app.js ke BAAD add karo -->
<script src="js/reports.js"></script>
```

### Step 3 – Sidebar mein 2 nav items add karo
```html
<a class="nav-item" data-page="report-entry" onclick="navigate('report-entry')">
  <span>📋</span> Report Entry
</a>
<a class="nav-item" data-page="print-settings" onclick="navigate('print-settings')">
  <span>🖨️</span> Print Settings
</a>
```

### Step 4 – app.js mein navigate() function mein add karo
```javascript
// pageTitles object mein add karo:
'report-entry': 'Report Entry',
'print-settings': 'Print Settings',

// pages object mein add karo:
pages['report-entry'] = renderReportEntry;
pages['print-settings'] = renderPrintSettings;
```

### Step 5 – Billing page mein Print Invoice button add karo
```javascript
// Bill table mein har row ke actions mein:
<button onclick="printInvoice('${b.bill_no}')">🧾 Invoice</button>
```

## Test Master Mein Naya Test Add Karna:
```javascript
"MY_TEST": {
  fullName: "My Custom Test",
  category: "Biochemistry",
  parameters: [
    { name: "Parameter 1", unit: "mg/dL", male: "10 - 50", female: "10 - 45" },
    { name: "Parameter 2", unit: "U/L",   male: "5 - 30",  female: "5 - 25"  },
  ]
}
```
