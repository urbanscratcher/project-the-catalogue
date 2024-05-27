"use client";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

function Page({ params }: { params: { slug: string } }) {
  const [url, setUrl] = useState("");
  const slug = params.slug;

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/urbanscratcher/${slug}/main/README.md`;
    fetch(url)
      .then((res) => res.text())
      .then((t) => {
        setUrl(t);
      });
  }, [slug]);

  return (
    <>
      <Markdown>{url}</Markdown>
    </>
  );
}

export default Page;
