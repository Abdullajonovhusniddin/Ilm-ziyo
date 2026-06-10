import React from 'react';
import styles from './Page.module.css';
import { Users, Briefcase, FileText, TrendingUp } from 'lucide-react';

const HR = () => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>HR boʻlimi</h1>
        <p className={styles.pageDescription}>Xodimlar, ish haqi va vakansiyalarni boshqarish.</p>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Users size={24} /></div>
           <h3>Jami xodimlar</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>45 ta</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Briefcase size={24} color="var(--success)" /></div>
           <h3>Faol Vakansiyalar</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)', marginTop: '0.5rem' }}>3 ta joy ochiq</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><FileText size={24} color="var(--warning)" /></div>
           <h3>Oylik hisobotlar</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>Tayyorlanmoqda</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><TrendingUp size={24} color="var(--accent)" /></div>
           <h3>Xodimlar o'sishi</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)', marginTop: '0.5rem' }}>+5% joriy oyda</p>
        </div>
      </div>
    </div>
  );
};

export default HR;
