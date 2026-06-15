import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('qorakol_language') || 'uz';
  });

  useEffect(() => {
    localStorage.setItem('qorakol_language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'uz' ? 'en' : 'uz'));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
