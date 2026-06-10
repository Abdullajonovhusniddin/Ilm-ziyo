import React from 'react';
import styles from './Page.module.css';
import { Activity, Users, TrendingUp, DollarSign, BookOpen, UserPlus } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Bosh sahifa</h1>
        <p className={styles.pageDescription}>Umumiy statistika va ma'lumotlar</p>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardIcon}><Users size={24} /></div>
          <h3>Jami o'quvchilar</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>1,245 ta</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}><Activity size={24} /></div>
          <h3>Faollik ko'rsatkichi</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)', marginTop: '0.5rem' }}>85%</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}><TrendingUp size={24} /></div>
          <h3>O'sish</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)', marginTop: '0.5rem' }}>+120 ta</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}><DollarSign size={24} /></div>
          <h3>Oylik tushum</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>450 mln</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}><BookOpen size={24} /></div>
          <h3>Faol guruhlar</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>32 ta</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}><UserPlus size={24} /></div>
          <h3>Yangi yozilganlar</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>45 ta joriy oyda</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
