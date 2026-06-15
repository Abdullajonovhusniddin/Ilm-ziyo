const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find all instances of {t('...')} and change them to {t("...")} if they contain unescaped single quotes
  // We'll just replace all {t('...')} with {t("...")} carefully.
  // Actually, it's easier to find specific strings from my translations list that contain single quotes.
  
  const toFix = [
    "Darslar, o'quvchilar va ta'lim jarayonini boshqarish.",
    "32 ta guruh dars o'tmoqda",
    "O'qituvchilar",
    "Xodimlar o'sishi",
    "Bu bo'lim ustida ish olib borilmoqda."
  ];

  toFix.forEach(str => {
    // Escape the string for regex
    const escapedStr = str.replace(/[.*+?^$\\{\\}()|[\\]\\\\]/g, '\\\\$&');
    const regex = new RegExp(`\\{t\\('${escapedStr}'\\)\\}`, 'g');
    content = content.replace(regex, `{t("${str}")}`);
  });

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Fixed quotes.');
