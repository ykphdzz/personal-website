'use client';
import React, { createContext, useContext, useState } from 'react';
import { en } from '../locales/en';
import { zh } from '../locales/zh';

type Language = 'en' | 'zh';
const translations = { en, zh };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    const keys = key.split('.');
    let current: any = translations[language];
    for (const k of keys) {
      current = current[k];
    }
    return current || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
