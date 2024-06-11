"use client";
import i18nConfig from "@/i18nConfig";
import { useCurrentLocale } from "next-i18n-router/client";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function About() {
  const [text, setText] = useState("");
  const locale = useCurrentLocale(i18nConfig);

  const url = locale == "en" ? "/assets/about.md" : "/assets/about_kr.md";

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((t) => {
        setText(t);
      });
  }, [url]);

  return (
    <div className="markdown prose py-12 max-w-3xl mx-auto prose-code:before:content-none prose-code:after:content-none prose-h1:text-7xl prose-h1:break-words prose-h2:text-3xl prose-h1:text-center prose-h1:font-normal prose-h1:leading-tight prose-h1:tracking-wide prose-code:px-[6px] prose-code:py-[2px] prose-code:rounded-[4px] prose-h2:tracking-wide prose-code:text-base prose-code:bg-gray-200 px-4">
      <Markdown>{text}</Markdown>
    </div>
  );
}

export default About;
