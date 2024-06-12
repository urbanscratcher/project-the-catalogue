import { getAbout } from "@/service/Notion";
import { Render } from "@9gustin/react-notion-render";

async function AboutLoader() {
  const post = await getAbout();
  return <Render blocks={post} simpleTitles />;
}

export default AboutLoader;
