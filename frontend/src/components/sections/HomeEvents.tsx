"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { format } from "date-fns";
import { getEvents } from "@/lib/api";

type Event = {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  category: string;
};

export default function HomeEvents() {
  const [displayEvents, setDisplayEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const events = await getEvents();
        // Sort events by date, newest first
        const sortedEvents = events.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        // Show max 2 events on the homepage
        setDisplayEvents(sortedEvents.slice(0, 2));
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchEvents();
  }, []);

  if (loading || displayEvents.length === 0) {
    return null;
  }

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 bg-cbc-ink border-t border-cbc-grey/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-baseline justify-between mb-16"
        >
          <div className="flex items-baseline gap-4">
            <h2 className="font-anton text-4xl md:text-5xl text-cbc-offwhite uppercase">Latest Events</h2>
            <span className="font-anton text-3xl md:text-4xl text-cbc-blue">/</span>
          </div>
          <Link href="/events" className="hidden sm:block text-cbc-grey hover:text-cbc-offwhite transition-colors font-mono text-xs uppercase tracking-widest border-b border-cbc-grey/30 hover:border-cbc-offwhite pb-1">
            View All Events →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayEvents.map((event, idx) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-cbc-grey/20 p-8 hover:border-cbc-blue transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-cbc-blue font-mono text-xs tracking-widest uppercase mb-4">{event.category}</div>
                <h3 className="font-anton text-3xl text-cbc-offwhite uppercase mb-4">{event.title}</h3>
                <p className="text-cbc-grey font-mono text-sm leading-relaxed mb-8 line-clamp-3">
                  {event.description}
                </p>
              </div>
              
              <div className="flex justify-between items-end border-t border-cbc-grey/20 pt-6">
                <div>
                  <div className="text-cbc-offwhite font-mono text-sm tracking-wider">{format(new Date(event.date), "MMM dd, yyyy")}</div>
                  <div className="text-cbc-grey font-mono text-xs tracking-widest mt-1 uppercase">{event.time} | {event.location}</div>
                </div>
                <Link href={`/events/${event.slug}`} className="text-cbc-grey group-hover:text-cbc-blue transition-colors font-mono text-xs tracking-widest uppercase">
                  Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center sm:hidden">
          <Link href="/events" className="inline-block text-cbc-grey hover:text-cbc-offwhite transition-colors font-mono text-xs uppercase tracking-widest border border-cbc-grey/30 px-6 py-3">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
