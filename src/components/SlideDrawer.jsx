import React from 'react';
import { X } from 'lucide-react';
import styles from './SlideDrawer.module.css';

const SlideDrawer = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={onClose} />
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button onClick={onClose} className={styles.closeBtn}><X size={24} /></button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </>
  );
};

export default SlideDrawer;
