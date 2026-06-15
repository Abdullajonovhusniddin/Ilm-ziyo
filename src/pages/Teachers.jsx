import React from 'react';
import styles from './Page.module.css';
import { Users, GraduationCap, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const Teachers = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t('Ustozlar boʻlimi')}</h1>
        <p className={styles.pageDescription}>{t("Malakali o'qituvchilar va ularning dars jadvallari.")}</p>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Users size={24} /></div>
           <h3>{t('Jami ustozlar')}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>24 {t('ta')}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><GraduationCap size={24} color="var(--success)" /></div>
           <h3>{t('Oliy toifali')}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)', marginTop: '0.5rem' }}>12 {t('ta')}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><BookOpen size={24} color="var(--warning)" /></div>
           <h3>{t('Faol darslar')}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>45 {t("ta dars o'tilmoqda")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Award size={24} color="var(--accent)" /></div>
           <h3>{t('Reytingi eng yuqori')}</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)', marginTop: '0.5rem' }}>{t('Matematika va IT')}</p>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
