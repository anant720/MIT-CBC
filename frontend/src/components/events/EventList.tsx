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

export default function EventList({ upcomingEvents, pastEvents }: { upcomingEvents: Event[], pastEvents: Event[] }) {
  return (
    <section className="relative px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* Left Column: Upcoming */}
        <div className="md:w-2/3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-baseline gap-4 mb-16"
          >
            <h2 className="font-anton text-4xl md:text-6xl text-cbc-offwhite uppercase">Upcoming</h2>
            <span className="font-anton text-3xl md:text-5xl text-cbc-blue">/</span>
          </motion.div>

          {upcomingEvents.length === 0 ? (
            <div className="text-cbc-grey font-mono text-sm tracking-widest uppercase py-12 border-y border-cbc-grey/20">
              No upcoming events scheduled. Check back soon.
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {upcomingEvents.map((event, idx) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative border border-cbc-grey/20 bg-cbc-ink hover:border-cbc-blue transition-colors"
                >
                  <Link href={`/events/${event.slug}`} className="block p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-start gap-8 justify-between">
                      <div>
                        <div className="text-cbc-blue font-mono text-xs tracking-widest uppercase mb-4">
                          {event.category}
                        </div>
                        <h3 className="font-anton text-3xl md:text-5xl text-cbc-offwhite uppercase mb-4 group-hover:glitch-text" data-text={event.title}>
                          {event.title}
                        </h3>
                        <p className="text-cbc-grey font-mono text-sm max-w-lg mb-8 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-row md:flex-col gap-8 md:gap-4 md:text-right shrink-0 border-t md:border-t-0 border-cbc-grey/20 pt-8 md:pt-0">
                        <div>
                          <div className="text-cbc-grey text-[10px] tracking-[0.2em] font-mono uppercase mb-1">DATE</div>
                          <div className="text-cbc-offwhite font-mono tracking-wider">{format(new Date(event.date), "MMM dd, yyyy")}</div>
                        </div>
                        <div>
                          <div className="text-cbc-grey text-[10px] tracking-[0.2em] font-mono uppercase mb-1">TIME</div>
                          <div className="text-cbc-offwhite font-mono tracking-wider">{event.time}</div>
                        </div>
                        <div>
                          <div className="text-cbc-grey text-[10px] tracking-[0.2em] font-mono uppercase mb-1">LOC</div>
                          <div className="text-cbc-offwhite font-mono tracking-wider">{event.location}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-cbc-grey font-mono text-xs tracking-[0.2em] uppercase group-hover:text-cbc-blue transition-colors text-right">
                      [ VIEW DETAILS → ]
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Archive */}
        <div className="md:w-1/3 border-t md:border-t-0 md:border-l border-cbc-grey/20 pt-16 md:pt-0 md:pl-16">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-baseline gap-4 mb-12"
          >
            <h2 className="font-anton text-3xl md:text-4xl text-cbc-grey uppercase hover:text-cbc-offwhite transition-colors cursor-crosshair">Archive</h2>
          </motion.div>
          
          <div className="flex flex-col gap-6">
            {pastEvents.length === 0 ? (
              <div className="text-cbc-grey/50 font-mono text-xs tracking-widest uppercase">
                No past events found.
              </div>
            ) : (
              pastEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link href={`/events/${event.slug}`} className="group block border-b border-cbc-grey/10 pb-6 hover:border-cbc-grey/30 transition-colors">
                    <div className="text-cbc-grey font-mono text-[10px] tracking-widest uppercase mb-2 group-hover:text-cbc-blue transition-colors">
                      {format(new Date(event.date), "MM.dd.yyyy")}
                    </div>
                    <h4 className="font-anton text-xl text-cbc-grey uppercase group-hover:text-cbc-offwhite transition-colors">
                      {event.title}
                    </h4>
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
