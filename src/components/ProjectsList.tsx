import getProjects from "@/service/getProjects";
import ProjectDetailItem from "./ProjectDetailItem";

async function ProjectsList() {
  const projects = await getProjects();

  if (!projects.data) {
    return <p>No Projects :(</p>;
  }

  const excludedProjects = projects.data.filter((_: any, i: number) => i >= 2);

  return (
    <ol className="grid lg:grid-cols-3 gap-0 items-center justify-center">
      {excludedProjects.map((post: any, idx: number) => (
        <ProjectDetailItem key={post.id} post={post} idx={idx} />
      ))}
    </ol>
  );
}

export default ProjectsList;
