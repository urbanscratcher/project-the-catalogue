"use client";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

function LanguageBtn() {
  const { language, toggleLanguage } = useContext(LanguageContext);

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
