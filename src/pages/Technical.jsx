import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import styles from './Page.module.css';
import { Monitor, Video, Laptop, Speaker, Router, Server } from 'lucide-react';

const Technical = () => {
  const { t } = useLanguage();
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t('Texnik boʻlim')}</h1>
        <p className={styles.pageDescription}>{t("Markazdagi barcha texnik qurilmalar va jihozlar holati.")}</p>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Monitor size={24} /></div>
           <h3>{t("Televizorlar")}</h3>
           <p>{t("12 ta faol, 1 ta ta'mirda")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Video size={24} /></div>
           <h3>{t("Proyektorlar")}</h3>
           <p>{t("8 ta faol qurilma")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Laptop size={24} /></div>
           <h3>{t("Kompyuterlar")}</h3>
           <p>{t("45 ta ishchi holatda")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Speaker size={24} /></div>
           <h3>{t("Audio tizimlar")}</h3>
           <p>{t("5 ta faol dinamiklar")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Router size={24} /></div>
           <h3>{t("Tarmoq qurilmalari")}</h3>
           <p>{t("Router va Switchlar (Barchasi onlayn)")}</p>
        </div>
        <div className={styles.card}>
           <div className={styles.cardIcon}><Server size={24} /></div>
           <h3>{t("Serverlar")}</h3>
           <p>{t("Asosiy server ishlamoqda, 99.9% Uptime")}</p>
        </div>
      </div>
    </div>
  );
};

export default Technical;
