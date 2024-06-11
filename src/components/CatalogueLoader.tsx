import getProjects from "@/service/getProjects";
import CatalogueItem from "./CatalogueItem";

async function CatalogueLoader() {
  const projects = await getProjects();

  if (!projects.data || projects.data.length <= 0) {
    return <p>No Projects :(</p>;
  }

  return (
    <>
      {projects.data.map((post: any, idx: number) => (
        <CatalogueItem key={post.id} post={post} idx={idx} />
      ))}
    </>
  );
}

export default CatalogueLoader;
