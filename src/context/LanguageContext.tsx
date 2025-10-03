// src/context/LanguageContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ru";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};

const resolveInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "ru";

  const stored = window.localStorage.getItem("app-language");
  if (stored === "en" || stored === "ru") {
    return stored;
  }

  const htmlLang = document.documentElement.lang;
  return htmlLang === "en" ? "en" : "ru";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => resolveInitialLanguage());

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    window.localStorage.setItem("app-language", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
