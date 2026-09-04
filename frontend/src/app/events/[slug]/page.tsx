import { getEvent } from "@/lib/api";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventDetail from "@/components/events/EventDetail";
import { notFound } from "next/navigation";

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let event: any = null;
  try { event = await getEvent(slug); } catch { return notFound(); }
  return (
    <main className="min-h-screen bg-cbc-ink text-cbc-offwhite pt-32 pb-24">
      <Navigation />
      <EventDetail event={event} />
      <Footer />
    </main>
  );
}