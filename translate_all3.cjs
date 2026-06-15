const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src', 'pages');

const translations = [
    'Moliya nazorati boʻlimi',
    'Kirim va chiqimlarni nazorat qilish.',
    'Xarajat qo\'shish',
    'Umumiy kirim',
    '+ 450 mln',
    'Umumiy chiqim',
    '- 120 mln',
    'Sof foyda',
    '330 mln',
    'Xarajat yoki Kirim qo\'shish',
    'Turi',
    'Kirim',
    'Chiqim',
    'Summa (so\'m)',
    'Izoh',
    'Markazdagi barcha texnik qurilmalar va jihozlar holati.',
    'Televizorlar',
    '12 ta faol, 1 ta ta\'mirda',
    'Proyektorlar',
    '8 ta faol qurilma',
    'Kompyuterlar',
    '45 ta ishchi holatda',
    'Audio tizimlar',
    '5 ta faol dinamiklar',
    'Tarmoq qurilmalari',
    'Router va Switchlar (Barchasi onlayn)',
    'Serverlar',
    'Asosiy server ishlamoqda, 99.9% Uptime',
    'Xodimlar, ish haqi va vakansiyalarni boshqarish.',
    'Jami xodimlar',
    '45 ta',
    'Faol Vakansiyalar',
    '3 ta joy ochiq',
    'Oylik hisobotlar',
    'Tayyorlanmoqda',
    'Xodimlar o\'sishi',
    '+5% joriy oyda',
    'Biz bilan hamkorlik qilayotgan tashkilotlar.',
    'O\'quvchilar uchun sovg\'alar va rag\'batlantirish tizimi.',
    'To\'lovlar, qarzdorliklar va moliyaviy holat bo\'yicha hisobotlar.',
    'To\'lov qilganlar',
    '845 ta o\'quvchi',
    'Joriy oy uchun to\'liq to\'langan',
    'Qarzdorlar',
    '120 ta o\'quvchi',
    'Umumiy qarz: 35 mln so\'m',
    'To\'lovi yaqinlashganlar',
    '45 ta o\'quvchi',
    'Keyingi 3 kun ichida to\'lashi kerak',
    'Byudjet yutganlar',
    '15 ta o\'quvchi',
    '100% grant asosida o\'qiydi',
    'Tez kunda ishga tushiriladi...'
];

const filesToUpdate = ['Finance.jsx', 'Technical.jsx', 'HR.jsx', 'Partners.jsx', 'Gifts.jsx', 'Sales.jsx'];

filesToUpdate.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    translations.forEach(str => {
      // replace >str< with >{t("str")}<
      const target = '>' + str + '<';
      const replacement = '>{t("' + str.replace(/"/g, '\\"') + '")}<';
      
      if (!content.includes(`t("${str}")`)) {
          content = content.split(target).join(replacement);
      }
    });

    if (file === 'Finance.jsx') {
        content = content.split('title="Xarajat yoki Kirim qo\'shish"').join('title={t("Xarajat yoki Kirim qo\'shish")}');
    }

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Translations applied safely!');
