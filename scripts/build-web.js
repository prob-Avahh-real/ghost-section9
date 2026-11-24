const fs = require('fs');
const p = require('path');
const root = p.join(__dirname, '..');
const www = p.join(root, 'www');
if (!fs.existsSync(www)) fs.mkdirSync(www, { recursive: true });
fs.copyFileSync(p.join(root, 'index.html'), p.join(www, 'index.html'));
if (!fs.existsSync(p.join(www, 'index.html'))) process.exit(1);
console.log('✅ www/index.html ready');
