"use client";
import { motion } from "framer-motion";

export default function EventsHero() {
  return (
    <section className="relative px-6 md:px-12 pb-24 md:pb-32 border-b border-cbc-grey/20">
      <div className="max-w-7xl mx-auto pt-12 md:pt-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-cbc-blue font-mono text-sm tracking-[0.3em] uppercase mb-6"
            >
              [ DOSSIER: HAPPENINGS ]
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="font-anton text-6xl md:text-9xl text-cbc-offwhite uppercase leading-[0.9] glitch-text"
              data-text="THE CBC"
            >
              THE CBC
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-anton text-6xl md:text-9xl text-cbc-grey uppercase leading-[0.9] glitch-text"
              data-text="EVENTS."
            >
              EVENTS.
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-cbc-grey font-mono text-sm uppercase tracking-widest max-w-xs md:text-right"
          >
            Workshops, talks, and hands-on sessions. We meet to break, build, and secure.
          </motion.div>
        </div>

      </div>
    </section>
  );
}
