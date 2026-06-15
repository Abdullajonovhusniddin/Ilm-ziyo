import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';
import styles from './Page.module.css';
import { Gift, Plus } from 'lucide-react';
import SlideDrawer from '../components/SlideDrawer';

const Gifts = () => {
  const { t } = useLanguage();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <div className={styles.pageHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className={styles.pageTitle}>{t('Sovgʻalar')}</h1>
          <p className={styles.pageDescription}>{t("O'quvchilar uchun yig'ilgan coinlarga sovg'alar.")}</p>
        </div>
        <button
          onClick={() => setDrawerOpen(true)}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'var(--accent)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: '600', border: 'none', cursor: 'pointer' }}
        >
          <Plus size={20} />
          {t("Sovg'a qo'shish")}
        </button>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardIcon}><Gift size={24} /></div>
          <h3>{t("MacBook")}</h3>
          <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>10,000 Coin</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}><Gift size={24} /></div>
          <h3>{t("Futbolka maktabniki")}</h3>
          <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>500 Coin</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}><Gift size={24} /></div>
          <h3>{t("O'quv qurollari to'plami")}</h3>
          <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>200 Coin</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}><Gift size={24} /></div>
          <h3>{t("Maxsus Kitoblar")}</h3>
          <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>150 Coin</p>
        </div>
      </div>

      <SlideDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} title={t("Yangi sovg'a qo'shish")}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--secondary)' }}>{t("Sovg'a nomi")}</label>
            <input type="text" placeholder="Masalan: Qalam" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-main)', outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--secondary)' }}>{t("Narxi (Coin)")}</label>
            <input type="number" placeholder="100" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-main)', outline: 'none' }} />
          </div>
          <button style={{ padding: '0.75rem', background: 'var(--accent)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: '600', marginTop: '1rem', border: 'none', cursor: 'pointer' }}>
            {t("Saqlash")}
          </button>
        </div>
      </SlideDrawer>
    </div>
  );
};

export default Gifts;
