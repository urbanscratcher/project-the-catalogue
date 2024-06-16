import getProjects from "@/service/getProjects";
import ProjectDetailItem from "./ProjectDetailItem";

async function ProjectsLoader() {
  const projects = await getProjects();

  if (!projects.data) {
    return <p>No Projects :(</p>;
  }

  const excludedProjects = projects.data.filter(
    (p: any) => p?.link !== "" && p?.link
  );

  return (
    <ol className="grid lg:grid-cols-2 xl:grid-cols-3 gap-0 items-center justify-center">
      {excludedProjects.map((post: any, idx: number) => (
        <ProjectDetailItem key={post.id} post={post} idx={idx} />
      ))}
    </ol>
  );
}

export default ProjectsLoader;
