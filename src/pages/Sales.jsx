import React from 'react';
import styles from './Page.module.css';
import { CreditCard, AlertCircle, Clock, Award } from 'lucide-react';

const Sales = () => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Sotuv boʻlimi</h1>
        <p className={styles.pageDescription}>To'lovlar, qarzdorliklar va moliyaviy holat bo'yicha hisobotlar.</p>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><CreditCard size={24} /></div>
           <h3>To'lov qilganlar</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)', marginTop: '0.5rem' }}>845 ta o'quvchi</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>Joriy oy uchun to'liq to'langan</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><AlertCircle size={24} color="var(--danger)" /></div>
           <h3>Qarzdorlar</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--danger)', marginTop: '0.5rem' }}>120 ta o'quvchi</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>Umumiy qarz: 35 mln so'm</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Clock size={24} color="var(--warning)" /></div>
           <h3>To'lovi yaqinlashganlar</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>45 ta o'quvchi</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>Keyingi 3 kun ichida to'lashi kerak</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Award size={24} color="var(--accent)" /></div>
           <h3>Byudjet yutganlar</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)', marginTop: '0.5rem' }}>15 ta o'quvchi</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>100% grant asosida o'qiydi</p>
        </div>
      </div>
    </div>
  );
};

export default Sales;
