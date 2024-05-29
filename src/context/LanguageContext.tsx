"use client";

import { createContext, useEffect, useState, type ReactNode } from "react";

type Language = "en" | "kr";
type LanguageContextProps = {
  language: Language;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  toggleLanguage: () => {},
});

function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage === "en" || storedLanguage === "kr") {
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "kr" : "en"));
    localStorage.setItem("language", language);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
