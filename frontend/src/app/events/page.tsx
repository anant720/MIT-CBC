import { getEvents } from "@/lib/api";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventsHero from "@/components/events/EventsHero";
import EventList from "@/components/events/EventList";

export const metadata = { title: "Events | MIT CBC", description: "Upcoming and past events at the MIT CBC." };
export const revalidate = 60;

export default async function EventsPage() {
  let events: any[] = [];
  try { events = await getEvents(); } catch (e) { events = []; }
  const now = new Date();
  const upcomingEvents = events.filter((e: any) => new Date(e.date) >= now);
  const pastEvents = events.filter((e: any) => new Date(e.date) < now);
  return (
    <main className="min-h-screen bg-cbc-ink text-cbc-offwhite selection:bg-cbc-blue selection:text-cbc-ink pt-32 pb-24">
      <Navigation />
      <EventsHero />
      <EventList upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
      <Footer />
    </main>
  );
}
