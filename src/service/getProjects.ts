import NotionService from "@/service/NotionService";

async function getProjects() {
  try {
    const notionService = new NotionService();
    const projects = await notionService.getProjects();

    return projects;
  } catch (error) {
    throw error;
  }
}

export default getProjects;
