import React from 'react';
import styles from './Page.module.css';
import { Monitor, Video, Laptop, Speaker, Router, Server } from 'lucide-react';

const Technical = () => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Texnik boʻlim</h1>
        <p className={styles.pageDescription}>Markazdagi barcha texnik qurilmalar va jihozlar holati.</p>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Monitor size={24} /></div>
           <h3>Televizorlar</h3>
           <p>12 ta faol, 1 ta ta'mirda</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Video size={24} /></div>
           <h3>Proyektorlar</h3>
           <p>8 ta faol qurilma</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Laptop size={24} /></div>
           <h3>Kompyuterlar</h3>
           <p>45 ta ishchi holatda</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Speaker size={24} /></div>
           <h3>Audio tizimlar</h3>
           <p>5 ta faol dinamiklar</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Router size={24} /></div>
           <h3>Tarmoq qurilmalari</h3>
           <p>Router va Switchlar (Barchasi onlayn)</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Server size={24} /></div>
           <h3>Serverlar</h3>
           <p>Asosiy server ishlamoqda, 99.9% Uptime</p>
        </div>
      </div>
    </div>
  );
};

export default Technical;
