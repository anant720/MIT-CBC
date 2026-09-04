import { getMembers } from "@/lib/api";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamPage from "@/components/team/TeamPage";

export const metadata = { title: "Team | MIT CBC", description: "Meet the people behind MIT CBC." };
export const revalidate = 300;

export default async function Team() {
  let members: any[] = [];
  try { members = await getMembers(); } catch (e) { members = []; }
  return (
    <main className="min-h-screen bg-cbc-ink text-cbc-offwhite pt-32">
      <Navigation />
      <div className="pb-32">
        <TeamPage members={members} />
      </div>
      <Footer />
    </main>
  );
}
