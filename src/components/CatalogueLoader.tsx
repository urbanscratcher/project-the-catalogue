import getProjects from "@/service/getProjects";
import CatalogueItem from "./CatalogueItem";

async function CatalogueLoader() {
  const projects = await getProjects();

  if (!projects.data) {
    return <p>No Projects :(</p>;
  }

  return (
    <>
      {projects.data.map((post: any, i: any) => (
        <CatalogueItem key={post.id} post={post} i={i} />
      ))}
    </>
  );
}

export default CatalogueLoader;
