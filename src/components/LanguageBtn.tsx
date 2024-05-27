"use client";
import { useLanguage } from "@/context/LanguageContext";

function LanguageBtn() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <p
      className="hover:cursor-pointer hover:underline uppercase"
      onClick={() => toggleLanguage()}
    >
      {language}
    </p>
  );
}

export default LanguageBtn;
