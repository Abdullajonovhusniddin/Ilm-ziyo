import React from 'react';
import styles from './Page.module.css';
import { BookOpen, Users, GraduationCap, Calendar, Clock, Award } from 'lucide-react';

const Education = () => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Oʻquv boʻlimi</h1>
        <p className={styles.pageDescription}>Darslar, o'quvchilar va ta'lim jarayonini boshqarish.</p>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><BookOpen size={24} /></div>
           <h3>Sinflar</h3>
           <p>15 ta faol sinf</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Users size={24} /></div>
           <h3>Guruhlar</h3>
           <p>32 ta guruh dars o'tmoqda</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><GraduationCap size={24} /></div>
           <h3>O'qituvchilar</h3>
           <p>24 ta malakali ustozlar</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Calendar size={24} /></div>
           <h3>Dars jadvali</h3>
           <p>Haftalik taqsimot va xonalar bandligi</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Clock size={24} /></div>
           <h3>Davomat</h3>
           <p>Bugungi kelganlar: 92%</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Award size={24} /></div>
           <h3>Sertifikatlar</h3>
           <p>Bitiruvchilar va natijalar</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
