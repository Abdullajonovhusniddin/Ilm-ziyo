import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import styles from './Page.module.css';
import { Handshake, Link, Globe, Star } from 'lucide-react';

const Partners = () => {
  const { t } = useLanguage();
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t('Hamkorlarimiz')}</h1>
        <p className={styles.pageDescription}>Maktab bilan rasmiy ishlaydigan barcha korxona va tizimlar.</p>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Handshake size={24} /></div>
           <h3>Payme / Click</h3>
           <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>To'lov tizimlari</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>Faol holatda</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Globe size={24} color="var(--success)" /></div>
           <h3>EduOn</h3>
           <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--success)', marginTop: '0.5rem' }}>Ta'lim platformasi</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>Integratsiya qilingan</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Link size={24} color="var(--accent)" /></div>
           <h3>Zoom</h3>
           <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--accent)', marginTop: '0.5rem' }}>Online darslar</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>Pro litsenziya</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Star size={24} color="var(--warning)" /></div>
           <h3>Uzum Nasiya</h3>
           <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>Muddatli to'lov</p>
           <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>Kelishuv jarayonida</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
