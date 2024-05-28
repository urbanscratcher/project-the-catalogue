import { redirectProjects } from "@/action/redirectAction";

async function HomePage() {
  await redirectProjects();

  return;
}

export default HomePage;
