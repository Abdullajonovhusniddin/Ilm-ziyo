import React from 'react';
import styles from './Management.module.css';
import { BookOpen, Home as HomeIcon, User, HelpCircle, Shield, Coins, Mail, CheckSquare } from 'lucide-react';

const Management = () => {
  const menuItems = [
    { label: 'Kurslar', icon: <BookOpen size={20} /> },
    { label: 'Xonalar', icon: <HomeIcon size={20} /> },
    { label: 'Xodimlar', icon: <User size={20} /> },
    { label: 'Sabablar', icon: <HelpCircle size={20} /> },
    { label: 'Rollar', icon: <Shield size={20} /> },
    { label: 'Coin', icon: <Coins size={20} /> },
    { label: 'Xabar yuborish', icon: <Mail size={20} /> },
    { label: 'Tekshiruv', icon: <CheckSquare size={20} /> },
  ];

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.header}>
          <h2>Boshqaruv</h2>
        </div>
        <nav className={styles.nav}>
          {menuItems.map((item, idx) => (
            <button key={idx} className={styles.navItem}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      <main className={styles.content}>
        <div className={styles.placeholder}>
          <h3>Boshqaruv paneli</h3>
          <p>Chap tomondagi menyudan kerakli bo'limni tanlang.</p>
        </div>
      </main>
    </div>
  );
};

export default Management;
