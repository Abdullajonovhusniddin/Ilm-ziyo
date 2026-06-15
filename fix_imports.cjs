const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if it uses useLanguage
  if (content.includes('useLanguage()') && !content.includes('../components/LanguageProvider')) {
    // Need to add import
    // Let's insert it after the first line (or any react import)
    const lines = content.split('\n');
    const importLineIndex = lines.findIndex(line => line.startsWith('import '));
    lines.splice(importLineIndex + 1, 0, "import { useLanguage } from '../components/LanguageProvider';");
    content = lines.join('\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed import in ${file}`);
  }
});
