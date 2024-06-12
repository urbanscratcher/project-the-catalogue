import getAbout from "@/service/getAbout";
import Markdown from "react-markdown";

async function AboutLoader({ url }: { url: string }) {
  const text = await getAbout(url);

  return (
    <div className="markdown prose py-12 max-w-3xl mx-auto prose-code:before:content-none prose-code:after:content-none prose-h1:text-7xl prose-h1:break-words prose-h2:text-3xl prose-h1:text-center prose-h1:font-normal prose-h1:leading-tight prose-h1:tracking-wide prose-code:px-[6px] prose-code:py-[2px] prose-code:rounded-[4px] prose-h2:tracking-wide prose-code:text-base prose-code:bg-gray-200 px-4">
      <Markdown>{text}</Markdown>
    </div>
  );
}

export default AboutLoader;
