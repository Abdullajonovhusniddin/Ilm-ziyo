import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import styles from './Page.module.css';
import { CreditCard, AlertCircle, Clock, Award } from 'lucide-react';

const Sales = () => {
  const { t } = useLanguage();
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t('Sotuv boʻlimi')}</h1>
        <p className={styles.pageDescription}>{t("To'lovlar, qarzdorliklar va moliyaviy holat bo'yicha hisobotlar.")}</p>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><CreditCard size={24} /></div>
           <h3>{t("To'lov qilganlar")}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)', marginTop: '0.5rem' }}>{t("845 ta o'quvchi")}</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>{t("Joriy oy uchun to'liq to'langan")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><AlertCircle size={24} color="var(--danger)" /></div>
           <h3>{t("Qarzdorlar")}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--danger)', marginTop: '0.5rem' }}>{t("120 ta o'quvchi")}</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>{t("Umumiy qarz: 35 mln so'm")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Clock size={24} color="var(--warning)" /></div>
           <h3>{t("To'lovi yaqinlashganlar")}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>{t("45 ta o'quvchi")}</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>{t("Keyingi 3 kun ichida to'lashi kerak")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Award size={24} color="var(--accent)" /></div>
           <h3>{t("Byudjet yutganlar")}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)', marginTop: '0.5rem' }}>{t("15 ta o'quvchi")}</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>{t("100% grant asosida o'qiydi")}</p>
        </div>
      </div>
    </div>
  );
};

export default Sales;
