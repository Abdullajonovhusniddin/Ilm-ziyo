import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './Layout.module.css';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { Moon, Sun, Globe } from 'lucide-react';
import ManagementDrawer from './ManagementDrawer';

const Layout = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [managementOpen, setManagementOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar onOpenManagement={() => setManagementOpen(true)} />
      <ManagementDrawer isOpen={managementOpen} onClose={() => setManagementOpen(false)} />
      
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.actions}>
            <button onClick={toggleLanguage} className={styles.actionBtn}>
              <Globe size={20} />
              <span>{language === 'uz' ? 'UZ' : 'EN'}</span>
            </button>
            <button onClick={toggleTheme} className={styles.actionBtn}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>QA</div>
            <div>
              <p className={styles.userName}>Super Admin</p>
              <p className={styles.userRole}>Boshqaruvchi</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
