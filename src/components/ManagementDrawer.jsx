import React from 'react';
import styles from './ManagementDrawer.module.css';
import { BookOpen, Home as HomeIcon, User, HelpCircle, Shield, Coins, Mail, CheckSquare, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';

const ManagementDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const menuItems = [
    { label: t('Sinflar'), path: 'sinflar', icon: <BookOpen size={20} /> },
    { label: t('Xonalar'), path: 'xonalar', icon: <HomeIcon size={20} /> },
    { label: t('Talabalar'), path: 'talabalar', icon: <User size={20} /> },
    { label: t('Ustozlar'), path: 'ustozlar', icon: <GraduationCap size={20} /> },
    { label: t('Adminlar'), path: 'adminlar', icon: <Shield size={20} /> },
    { label: t('Sabablar'), path: 'sabablar', icon: <HelpCircle size={20} /> },
    { label: t('Rollar'), path: 'rollar', icon: <Shield size={20} /> },
    { label: t('Coin'), path: 'coin', icon: <Coins size={20} /> },
    { label: t('Xabar yuborish'), path: 'xabar-yuborish', icon: <Mail size={20} /> },
    { label: t('Tekshiruv'), path: 'tekshiruv', icon: <CheckSquare size={20} /> },
  ];

  const handleNavigation = (path) => {
    navigate(`/management/${path}`);
    onClose();
  };

  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={onClose} />
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2>{t('BOSHQARUV')}</h2>
        </div>
        <nav className={styles.nav}>
          {menuItems.map((item, idx) => (
             <button key={idx} className={styles.navItem} onClick={() => handleNavigation(item.path)}>
               <span className={styles.icon}>{item.icon}</span>
               <span className={styles.label}>{item.label}</span>
             </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default ManagementDrawer;
