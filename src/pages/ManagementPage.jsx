import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Page.module.css';
import { Plus, BookOpen, Home as HomeIcon, User, Shield, Trash2, GraduationCap } from 'lucide-react';
import SlideDrawer from '../components/SlideDrawer';

// Asosiy mock ma'lumotlar (Refresh berganda o'chadi, sahifalar aro saqlanadi)
const mockData = {
  sinflar: [
    { id: 1, name: 'Matematika 5-sinf', duration: '1 yil', price: 'Bepul' },
    { id: 2, name: 'Fizika 9-sinf', duration: '1 yil', price: 'Bepul' }
  ],
  xonalar: [
    { id: 1, name: 'Zoom 1-xona', capacity: '100', type: 'Vebinar' },
    { id: 2, name: 'Telegram guruh', capacity: 'Cheksiz', type: 'Chat' }
  ],
  talabalar: [
    { id: 1, name: 'Aliyev Vali', extra1: '9-sinf', extra2: 'Aktiv' },
    { id: 2, name: 'Karimova Nargiza', extra1: '5-sinf', extra2: 'Aktiv' }
  ],
  ustozlar: [
    { id: 1, name: 'Qodirov Jamshid', extra1: 'Matematika', extra2: '+998901112233' },
    { id: 2, name: 'Azizova Dilnoza', extra1: 'Ingliz tili', extra2: '+998934445566' }
  ],
  adminlar: [
    { id: 1, name: 'Rustamov Sardor', extra1: 'Bosh admin', extra2: '+998901234567' },
    { id: 2, name: 'Tohirova Malika', extra1: 'Moderator', extra2: '+998931112233' }
  ]
};

const ManagementPage = () => {
  const { section } = useParams();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [, setForceUpdate] = useState(0); 

  const [name, setName] = useState('');
  const [extra1, setExtra1] = useState(''); 
  const [extra2, setExtra2] = useState(''); 

  const title = section ? section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ') : '';
  
  const isSinflar = section === 'sinflar';
  const isXonalar = section === 'xonalar';
  const isTalabalar = section === 'talabalar';
  const isUstozlar = section === 'ustozlar';
  const isAdminlar = section === 'adminlar';

  const hasSpecificFeature = isSinflar || isXonalar || isTalabalar || isUstozlar || isAdminlar;
  const currentData = mockData[section] || [];

  const handleOpenDrawer = () => {
    setName('');
    setExtra1('');
    setExtra2('');
    setDrawerOpen(true);
  };

  const handleSave = () => {
    if (!name) return;
    
    const newItem = { id: Date.now(), name };
    if (isSinflar) {
      newItem.duration = extra1 || '-';
      newItem.price = extra2 || '-';
    } else if (isXonalar) {
      newItem.capacity = extra1 || '-';
      newItem.type = extra2 || '-';
    } else {
      newItem.extra1 = extra1 || '-';
      newItem.extra2 = extra2 || '-';
    }

    if (!mockData[section]) {
      mockData[section] = [];
    }
    mockData[section].push(newItem);
    
    setDrawerOpen(false);
    setForceUpdate(prev => prev + 1);
  };

  const handleDelete = (id) => {
    if (mockData[section]) {
      mockData[section] = mockData[section].filter(item => item.id !== id);
      setForceUpdate(prev => prev + 1);
    }
  };

  const getIcon = () => {
    if (isSinflar) return <BookOpen size={24} />;
    if (isXonalar) return <HomeIcon size={24} />;
    if (isTalabalar) return <User size={24} />;
    if (isUstozlar) return <GraduationCap size={24} />;
    if (isAdminlar) return <Shield size={24} />;
    return <BookOpen size={24} />;
  };

  return (
    <div>
      <div className={styles.pageHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className={styles.pageTitle}>{title} boshqaruvi</h1>
          <p className={styles.pageDescription}>Bu yerda {title} bo'yicha barcha ma'lumotlar va sozlamalar boshqariladi.</p>
        </div>
        
        {hasSpecificFeature && (
          <button 
            onClick={handleOpenDrawer}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'var(--accent)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: '600', border: 'none', cursor: 'pointer' }}
          >
            <Plus size={20} />
            Yangi qo'shish
          </button>
        )}
      </div>

      <div className={styles.cardContainer}>
        {hasSpecificFeature ? (
          currentData.length > 0 ? (
            currentData.map(item => (
              <div key={item.id} className={styles.card} style={{ position: 'relative' }}>
                <div className={styles.cardIcon}>
                   {getIcon()}
                </div>
                <h3>{item.name}</h3>
                {isSinflar && (
                  <>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Davomiyligi: <strong style={{ color: 'var(--text-main)'}}>{item.duration}</strong></p>
                    <p style={{ fontSize: '0.875rem' }}>Narxi: <strong style={{ color: 'var(--text-main)'}}>{item.price}</strong></p>
                  </>
                )}
                {isXonalar && (
                  <>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Sig'imi: <strong style={{ color: 'var(--text-main)'}}>{item.capacity} kishi</strong></p>
                    <p style={{ fontSize: '0.875rem' }}>Turi: <strong style={{ color: 'var(--text-main)'}}>{item.type}</strong></p>
                  </>
                )}
                {(isTalabalar || isUstozlar || isAdminlar) && (
                  <>
                     <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>{isTalabalar ? "Sinfi" : isUstozlar ? "Fani" : "Lavozimi"}: <strong style={{ color: 'var(--text-main)'}}>{item.extra1}</strong></p>
                     <p style={{ fontSize: '0.875rem' }}>{isTalabalar ? "Holati" : "Telefon"}: <strong style={{ color: 'var(--text-main)'}}>{item.extra2}</strong></p>
                  </>
                )}
                <button onClick={() => handleDelete(item.id)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#ff4d4f', cursor: 'pointer', padding: '0.25rem' }} title="O'chirish">
                   <Trash2 size={20} />
                </button>
              </div>
            ))
          ) : (
            <p style={{ color: 'var(--text-muted)' }}>Hech qanday ma'lumot yo'q.</p>
          )
        ) : (
          <div className={styles.card}>
             <h3>Ma'lumotlar bazasi</h3>
             <p>Tez kunda ishga tushadi...</p>
          </div>
        )}
      </div>

      {hasSpecificFeature && (
        <SlideDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} title={`Yangi qo'shish (${title})`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--secondary)' }}>
                {isTalabalar || isUstozlar || isAdminlar ? "F.I.SH." : "Nomi"}
              </label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Kiriting..." style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-main)', outline: 'none' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--secondary)' }}>
                {isSinflar ? "Davomiyligi (oy)" : isXonalar ? "Sig'imi (kishi)" : isTalabalar ? "Sinfi" : isUstozlar ? "Fani" : "Lavozimi"}
              </label>
              <input value={extra1} onChange={(e) => setExtra1(e.target.value)} type="text" placeholder="Kiriting..." style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-main)', outline: 'none' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--secondary)' }}>
                {isSinflar ? "Narxi (UZS)" : isXonalar ? "Xona turi" : isTalabalar ? "Holati" : "Telefon raqam"}
              </label>
              <input value={extra2} onChange={(e) => setExtra2(e.target.value)} type="text" placeholder="Kiriting..." style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--text-main)', outline: 'none' }} />
            </div>
            
            <button onClick={handleSave} style={{ padding: '0.75rem', background: 'var(--accent)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: '600', marginTop: '1rem', border: 'none', cursor: 'pointer' }}>
              Saqlash
            </button>
          </div>
        </SlideDrawer>
      )}
    </div>
  );
};

export default ManagementPage;
