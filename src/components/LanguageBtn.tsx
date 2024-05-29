"use client";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

function LanguageBtn() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const handleToggle = () => {
    toggleLanguage();
  };

  return (
    <p
      className="hover:cursor-pointer hover:underline uppercase"
      onClick={handleToggle}
    >
      {language}
    </p>
  );
}

export default LanguageBtn;
