"use client";

import { type ReactNode, createContext, useState, useContext } from "react";

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

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "kr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
