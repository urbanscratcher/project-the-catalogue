"use client";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext, useEffect, useState } from "react";
import Markdown from "react-markdown";

function About() {
  const [text, setText] = useState("");

  const { language } = useContext(LanguageContext);

  const url = language == "en" ? "/assets/about.md" : "/assets/about_kr.md";

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((t) => {
        setText(t);
      });
  }, [url]);

  return (
    <div className="markdown prose py-12 max-w-3xl mx-auto">
      <Markdown>{text}</Markdown>
    </div>
  );
}

export default About;
