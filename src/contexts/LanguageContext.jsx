import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  const t = (key) => {
    const translations = {
      en: {
        'nav.home': 'Home',
        'nav.blog': 'Interest',
        'nav.project': 'Project'
      },
      zh: {
        'nav.home': '首页',
        'nav.blog': '博客',
        'nav.project': '项目'
      }
    };
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageProvider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
} 