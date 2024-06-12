import getMarkdown from "@/service/getMarkdown";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

async function ProjectDetailLoader({ url }: { url: string }) {
  const text = await getMarkdown(url);
  return (
    <Markdown
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      remarkPlugins={[remarkGfm]}
    >
      {text}
    </Markdown>
  );
}

export default ProjectDetailLoader;
