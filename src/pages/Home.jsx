import React from 'react';
import styles from './Page.module.css';
import { Users, CreditCard, UserPlus, Activity } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t('Bosh sahifa')}</h1>
        <p className={styles.pageDescription}>{t('Umumiy ko\'rsatkichlar')} va statistika paneli.</p>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardIcon}><Users size={24} /></div>
          <h3>{t('Jami o\'quvchilar')}</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>1,245 ta</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}><Activity size={24} /></div>
          <h3>{t('Faollik ko\'rsatkichi')}</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)', marginTop: '0.5rem' }}>85%</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}><CreditCard size={24} color="var(--success)" /></div>
          <h3>{t('Joriy oydagi to\'lovlar')}</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)', marginTop: '0.5rem' }}>14.2M UZS</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}><UserPlus size={24} color="var(--warning)" /></div>
          <h3>{t('Yangi kelib qo\'shilganlar')}</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>45 ta joriy oyda</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
