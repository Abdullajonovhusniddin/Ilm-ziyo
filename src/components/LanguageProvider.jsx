import React, { createContext, useContext, useState, useEffect } from 'react';

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

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
