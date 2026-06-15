import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import styles from './Page.module.css';
import { Users, Briefcase, FileText, TrendingUp } from 'lucide-react';

const HR = () => {
  const { t } = useLanguage();
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t('HR boʻlimi')}</h1>
        <p className={styles.pageDescription}>{t("Xodimlar, ish haqi va vakansiyalarni boshqarish.")}</p>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Users size={24} /></div>
           <h3>{t('Jami xodimlar')}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>{t("45 ta")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Briefcase size={24} color="var(--success)" /></div>
           <h3>{t('Faol Vakansiyalar')}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)', marginTop: '0.5rem' }}>{t("3 ta joy ochiq")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><FileText size={24} color="var(--warning)" /></div>
           <h3>{t('Oylik hisobotlar')}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>{t("Tayyorlanmoqda")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><TrendingUp size={24} color="var(--accent)" /></div>
           <h3>{t("Xodimlar o'sishi")}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)', marginTop: '0.5rem' }}>{t("+5% joriy oyda")}</p>
        </div>
      </div>
    </div>
  );
};

export default HR;
