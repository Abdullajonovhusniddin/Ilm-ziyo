import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import styles from './Page.module.css';
import { BookOpen, Users, GraduationCap, Calendar, Clock, Award } from 'lucide-react';

const Education = () => {
  const { t } = useLanguage();
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t('Oʻquv boʻlimi')}</h1>
        <p className={styles.pageDescription}>{t("Darslar, o'quvchilar va ta'lim jarayonini boshqarish.")}</p>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><BookOpen size={24} /></div>
           <h3>{t('Sinflar')}</h3>
           <p>{t('15 ta faol sinf')}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Users size={24} /></div>
           <h3>{t('Guruhlar')}</h3>
           <p>{t("32 ta guruh dars o'tmoqda")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><GraduationCap size={24} /></div>
           <h3>{t("O'qituvchilar")}</h3>
           <p>{t('24 ta malakali ustozlar')}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Calendar size={24} /></div>
           <h3>{t('Dars jadvali')}</h3>
           <p>{t('Haftalik taqsimot va xonalar bandligi')}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Clock size={24} /></div>
           <h3>{t('Davomat')}</h3>
           <p>{t('Bugungi kelganlar: 92%')}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Award size={24} /></div>
           <h3>{t('Sertifikatlar')}</h3>
           <p>{t('Bitiruvchilar va natijalar')}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
