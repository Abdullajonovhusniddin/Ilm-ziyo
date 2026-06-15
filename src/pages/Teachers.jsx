import React from 'react';
import styles from './Page.module.css';
import { Users, GraduationCap, Award, BookOpen } from 'lucide-react';

const Teachers = () => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Ustozlar boʻlimi</h1>
        <p className={styles.pageDescription}>Malakali o'qituvchilar va ularning dars jadvallari.</p>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Users size={24} /></div>
           <h3>Jami ustozlar</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>24 ta</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><GraduationCap size={24} color="var(--success)" /></div>
           <h3>Oliy toifali</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)', marginTop: '0.5rem' }}>12 ta</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><BookOpen size={24} color="var(--warning)" /></div>
           <h3>Faol darslar</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>45 ta dars o'tilmoqda</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Award size={24} color="var(--accent)" /></div>
           <h3>Reytingi eng yuqori</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)', marginTop: '0.5rem' }}>Matematika va IT</p>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
