import React, { useState } from 'react';
import styles from './Page.module.css';
import { DollarSign, TrendingDown, ArrowUpRight, Plus } from 'lucide-react';
import SlideDrawer from '../components/SlideDrawer';

const Finance = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <div className={styles.pageHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className={styles.pageTitle}>Moliya nazorati boʻlimi</h1>
          <p className={styles.pageDescription}>Kirim va chiqimlarni nazorat qilish.</p>
        </div>
        <button 
          onClick={() => setDrawerOpen(true)}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'var(--accent)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: '600', border: 'none', cursor: 'pointer' }}
        >
          <Plus size={20} />
          Xarajat qo'shish
        </button>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><DollarSign size={24} /></div>
           <h3>Umumiy kirim</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)', marginTop: '0.5rem' }}>+ 450 mln</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><TrendingDown size={24} color="var(--danger)" /></div>
           <h3>Umumiy chiqim</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--danger)', marginTop: '0.5rem' }}>- 120 mln</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><ArrowUpRight size={24} color="var(--primary)" /></div>
           <h3>Sof foyda</h3>
           <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>330 mln</p>
        </div>
      </div>

      <SlideDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} title="Xarajat yoki Kirim qo'shish">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--secondary)' }}>Turi</label>
            <select style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-main)', outline: 'none' }}>
              <option>Kirim</option>
              <option>Chiqim</option>
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--secondary)' }}>Summa (so'm)</label>
            <input type="number" placeholder="1000000" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-main)', outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--secondary)' }}>Izoh</label>
            <textarea placeholder="Nima uchun..." rows={3} style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-main)', outline: 'none', resize: 'none' }} />
          </div>
          <button style={{ padding: '0.75rem', background: 'var(--accent)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: '600', marginTop: '1rem', border: 'none', cursor: 'pointer' }}>
            Saqlash
          </button>
        </div>
      </SlideDrawer>
    </div>
  );
};

export default Finance;
