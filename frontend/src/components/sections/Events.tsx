"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getEvents } from "@/lib/api";
import { format } from "date-fns";

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => { getEvents().then(data => setEvents(data.slice(0, 3))).catch(() => {}); }, []);

  return (
    <section id="events" className="py-32 px-6 md:px-12 relative border-t border-cbc-grey/20">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-baseline gap-4 mb-16">
          <h2 className="font-anton text-5xl md:text-8xl text-cbc-offwhite uppercase">Events</h2>
          <span className="font-anton text-4xl md:text-6xl text-cbc-blue">/</span>
        </motion.div>
        <div className="space-y-4">
          {events.length === 0 ? (
            <p className="text-cbc-grey font-mono">No upcoming events right now. Check back soon.</p>
          ) : events.map((event, idx) => (
            <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="group border-b border-cbc-grey/20 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-cbc-blue transition-colors"
            >
              <div className="flex gap-6 items-start">
                <span className="text-cbc-blue font-mono text-xs tracking-widest mt-1">{String(idx+1).padStart(2,"0")}</span>
                <div>
                  <h3 className="font-anton text-2xl md:text-3xl text-cbc-offwhite uppercase">{event.title}</h3>
                  <p className="text-cbc-grey font-mono text-xs mt-1">{event.location} · {event.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span className="font-mono text-sm text-cbc-grey">{format(new Date(event.date), "dd MMM yyyy")}</span>
                <Link href={`/events/${event.slug}`} className="text-cbc-blue font-mono text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">VIEW →</Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 text-center md:text-right">
          <Link href="/events" className="text-cbc-blue font-mono text-sm tracking-[0.2em] hover:text-cbc-offwhite transition-colors">[ VIEW ALL EVENTS ]</Link>
        </motion.div>
      </div>
    </section>
  );
}

