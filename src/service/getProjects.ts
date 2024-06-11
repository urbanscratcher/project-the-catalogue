import NotionService from "@/service/NotionService";

async function getProjects() {
  try {
    const notionService = new NotionService();
    const projects = await notionService.getProjects();

    console.log(projects);

    return projects;
  } catch (error) {
    throw error;
  }
}

export default getProjects;
