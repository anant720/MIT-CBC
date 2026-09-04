import { getProjects } from "@/lib/api";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectsPage from "@/components/projects/ProjectsPage";

export const metadata = { title: "Projects | MIT CBC", description: "Projects built by MIT CBC members." };
export const revalidate = 300;

export default async function Projects() {
  let projects: any[] = [];
  try { projects = await getProjects(); } catch (e) { projects = []; }
  return (
    <main className="min-h-screen bg-cbc-ink text-cbc-offwhite pt-32 pb-24">
      <Navigation />
      <ProjectsPage projects={projects} />
      <Footer />
    </main>
  );
}
