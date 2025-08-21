import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, isJapanese, isEnglish } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (language) => {
    changeLanguage(language);
    setIsOpen(false);
  };

  const languages = [
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-tertiary hover:bg-opacity-80 rounded-lg text-white font-medium transition-all duration-200 shadow-md shadow-primary"
        title="Language Settings"
      >
        <span className="text-sm">
          {isJapanese ? "🇯🇵" : "🇺🇸"}
        </span>
        <span className="text-xs font-bold">
          {isJapanese ? "JA" : "EN"}
        </span>
        <svg 
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-32 bg-tertiary rounded-lg shadow-lg shadow-primary z-50"
        >
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm text-white hover:bg-opacity-80 transition-colors duration-200 flex items-center gap-2 ${
                    currentLanguage === lang.code ? 'bg-opacity-80' : ''
                  }`}
                >
                  <span className="text-sm">{lang.flag}</span>
                  <span className="text-xs font-medium">{lang.name}</span>
                  {currentLanguage === lang.code && (
                    <span className="ml-auto text-xs">✓</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
