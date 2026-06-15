import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './Layout.module.css';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { Moon, Sun, Globe, Menu } from 'lucide-react';
import ManagementDrawer from './ManagementDrawer';

const Layout = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [managementOpen, setManagementOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.layout}>
      {isMobileMenuOpen && (
        <div 
          className={styles.mobileOverlay} 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}
      <Sidebar 
        onOpenManagement={() => setManagementOpen(true)} 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <ManagementDrawer isOpen={managementOpen} onClose={() => setManagementOpen(false)} />
      
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <button 
              className={styles.menuBtn} 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
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
              <p className={styles.userRole}>{t('Boshqaruvchi')}</p>
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
