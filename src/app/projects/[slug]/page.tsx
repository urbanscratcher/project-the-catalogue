"use client";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function Page({ params }: { params: { slug: string } }) {
  const [text, setText] = useState("");
  const slug = params.slug;

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/urbanscratcher/${slug}/main/README.md`;
    fetch(url)
      .then((res) => res.text())
      .then((t) => {
        console.log(t);
        setText(t);
      });
  }, [slug]);

  return (
    <section className="markdown prose max-w-xl mx-auto py-12">
      <Markdown>{text}</Markdown>
    </section>
  );
}

export default Page;
