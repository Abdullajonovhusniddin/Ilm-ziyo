import React, { useState } from 'react';
import styles from './Page.module.css';
import { Gift, Plus } from 'lucide-react';
import SlideDrawer from '../components/SlideDrawer';

const Gifts = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <div className={styles.pageHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className={styles.pageTitle}>Sovgʻalar</h1>
          <p className={styles.pageDescription}>O'quvchilar uchun yig'ilgan coinlarga sovg'alar.</p>
        </div>
        <button 
          onClick={() => setDrawerOpen(true)}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'var(--accent)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: '600', border: 'none', cursor: 'pointer' }}
        >
          <Plus size={20} />
          Sovg'a qo'shish
        </button>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Gift size={24} /></div>
           <h3>Noutbuk (MacBook)</h3>
           <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>10,000 Coin</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Gift size={24} /></div>
           <h3>Qorakol Futbolkasi</h3>
           <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>500 Coin</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Gift size={24} /></div>
           <h3>O'quv qurollari to'plami</h3>
           <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>200 Coin</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Gift size={24} /></div>
           <h3>Maxsus Kitoblar</h3>
           <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--warning)', marginTop: '0.5rem' }}>150 Coin</p>
        </div>
      </div>

      <SlideDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} title="Yangi sovg'a qo'shish">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--secondary)' }}>Sovg'a nomi</label>
            <input type="text" placeholder="Masalan: Qalam" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-main)', outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--secondary)' }}>Narxi (Coin)</label>
            <input type="number" placeholder="100" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-main)', outline: 'none' }} />
          </div>
          <button style={{ padding: '0.75rem', background: 'var(--accent)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: '600', marginTop: '1rem', border: 'none', cursor: 'pointer' }}>
            Saqlash
          </button>
        </div>
      </SlideDrawer>
    </div>
  );
};

export default Gifts;
