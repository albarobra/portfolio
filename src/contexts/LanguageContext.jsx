import React, { createContext, useContext, useState, useEffect } from 'react';
import ja from '../locales/ja.json';
import en from '../locales/en.json';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('ja'); // Default to Japanese
  const [translations, setTranslations] = useState(ja);

  useEffect(() => {
    // Load language preference from localStorage if available
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'ja' || savedLanguage === 'en')) {
      setCurrentLanguage(savedLanguage);
      setTranslations(savedLanguage === 'ja' ? ja : en);
    } else {
      console.log('LanguageContext: using default language (Japanese)');
    }
  }, []);

  const changeLanguage = (language) => {
    if (language === 'ja' || language === 'en') {
      setCurrentLanguage(language);
      setTranslations(language === 'ja' ? ja : en);
      localStorage.setItem('language', language);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Return the key if translation not found
      }
    }
    
    return value;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    isJapanese: currentLanguage === 'ja',
    isEnglish: currentLanguage === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
