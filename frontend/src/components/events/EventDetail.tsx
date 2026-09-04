"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { format } from "date-fns";

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

export default function EventDetail({ event }: { event: Event }) {
  const isPast = new Date(event.date) < new Date();

  return (
    <section className="relative px-6 md:px-12 pb-24 border-b border-cbc-grey/20">
      <div className="max-w-4xl mx-auto pt-12 md:pt-24">
        
        <Link href="/events" className="inline-block text-cbc-blue font-mono text-xs tracking-widest uppercase mb-12 hover:text-cbc-offwhite transition-colors">
          ← BACK TO EVENTS
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-cbc-grey/20 p-8 md:p-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cbc-grey/5 to-transparent relative"
        >
          {isPast && (
            <div className="absolute top-0 right-0 bg-cbc-grey text-cbc-ink font-mono text-xs font-bold px-3 py-1 uppercase tracking-widest">
              Archived
            </div>
          )}
          
          <div className="text-cbc-blue font-mono text-sm tracking-[0.2em] uppercase mb-6">
            [ EVENT DOSSIER : {event.category} ]
          </div>
          
          <h1 className="font-anton text-5xl md:text-7xl text-cbc-offwhite uppercase leading-tight mb-12 glitch-text" data-text={event.title}>
            {event.title}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-cbc-grey/20 py-8 mb-12">
            <div>
              <div className="text-cbc-grey text-[10px] tracking-[0.2em] font-mono uppercase mb-2">DATE</div>
              <div className="text-cbc-offwhite font-mono">{format(new Date(event.date), "MMMM dd, yyyy")}</div>
            </div>
            <div>
              <div className="text-cbc-grey text-[10px] tracking-[0.2em] font-mono uppercase mb-2">TIME</div>
              <div className="text-cbc-offwhite font-mono">{event.time}</div>
            </div>
            <div>
              <div className="text-cbc-grey text-[10px] tracking-[0.2em] font-mono uppercase mb-2">LOCATION</div>
              <div className="text-cbc-offwhite font-mono">{event.location}</div>
            </div>
            <div>
              <div className="text-cbc-grey text-[10px] tracking-[0.2em] font-mono uppercase mb-2">STATUS</div>
              <div className={`font-mono ${isPast ? "text-cbc-grey" : "text-cbc-blue"}`}>
                {isPast ? "CONCLUDED" : "SCHEDULED"}
              </div>
            </div>
          </div>

          <div className="text-cbc-grey text-lg leading-relaxed font-mono">
            {event.description}
          </div>

          {!isPast && (
            <div className="mt-16">
              <button className="bg-cbc-blue text-cbc-ink font-mono font-bold px-8 py-4 uppercase tracking-[0.2em] hover:bg-cbc-offwhite transition-colors w-full md:w-auto text-sm">
                Register for Event
              </button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
