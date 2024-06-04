"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { useContext, useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

function Page({ params }: { params: { slug: string } }) {
  const [text, setText] = useState("");
  const slug = params.slug;
  const { language } = useContext(LanguageContext);
  const isSlugProjects = slug.startsWith("project");

  const url = isSlugProjects
    ? language == "en"
      ? `https://raw.githubusercontent.com/urbanscratcher/${slug}/main/README.md`
      : `https://raw.githubusercontent.com/urbanscratcher/${slug}/main/README_KR.md`
    : language == "en"
    ? `/assets/${slug}.md`
    : `/assets/${slug}_kr.md`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        try {
          return res.text();
        } catch (e) {
          console.log("error!");
          return "";
        }
      })
      .then((t) => {
        setText(t);
      });
  }, [url]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [text]);

  return (
    <section className="prose max-w-3xl mx-auto prose-code:before:content-none prose-code:after:content-none prose-h1:text-7xl prose-h1:break-words prose-h2:text-3xl prose-h1:text-center prose-h1:font-normal prose-h1:leading-tight prose-h1:tracking-wide prose-code:bg-gray-200 prose-code:px-[6px] prose-code:py-[2px] prose-code:rounded-[4px] prose-h2:tracking-wide prose-code:text-base">
      <Markdown
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
      >
        {text}
      </Markdown>
    </section>
  );
}

export default Page;
