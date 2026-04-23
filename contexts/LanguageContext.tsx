'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import translations, { Lang } from '@/lib/translations';

// Use the English shape as the canonical type; cast Tamil to it
type Translations = typeof translations['en'];

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: Translations;
}

const LanguageContext = createContext<LangCtx>({
  lang: 'en',
  setLang: () => {},
  tr: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'ta' || saved === 'en') setLang(saved);
  }, []);

  const handleSetLang = (l: Lang) => {
    localStorage.setItem('lang', l);
    setLang(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, tr: translations[lang] as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
