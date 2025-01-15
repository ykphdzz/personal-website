import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SectionTitleProps {
  translationKey: string;
  className?: string;
}

export function SectionTitle({ translationKey, className = '' }: SectionTitleProps) {
  const { t } = useLanguage();

  return (
    <div className={`max-w-2xl mx-auto mt-20 mb-8 ${className}`}>
      <h2 className="text-3xl font-bold text-center text-[#313d44]">
        {t(translationKey)}
      </h2>
    </div>
  );
} 