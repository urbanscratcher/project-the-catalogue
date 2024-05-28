"use client";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext, useEffect, useState } from "react";
import Markdown from "react-markdown";

function Page({ params }: { params: { slug: string } }) {
  const [text, setText] = useState("");
  const slug = params.slug;
  const { language } = useContext(LanguageContext);
  const url =
    language == "en"
      ? `https://raw.githubusercontent.com/urbanscratcher/${slug}/main/README.md`
      : `https://raw.githubusercontent.com/urbanscratcher/${slug}/main/README_KR.md`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((t) => {
        setText(t);
      });
  }, [slug, url]);

  return (
    <section className="markdown prose max-w-3xl mx-auto">
      <Markdown>{text}</Markdown>
    </section>
  );
}

export default Page;
