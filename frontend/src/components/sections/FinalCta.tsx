"use client";
import { motion } from "framer-motion";

export default function FinalCta() {
  return (
    <section className="py-40 px-6 md:px-12 relative border-t border-cbc-grey/20 bg-cbc-ink text-center flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-cbc-grey font-mono text-sm tracking-[0.2em] mb-6 uppercase">
          STILL HERE?
        </div>
        <h2 className="font-anton text-6xl md:text-9xl text-cbc-offwhite uppercase mb-16 leading-[0.9]">
          COME BUILD <br className="hidden md:block" />
          <span className="text-cbc-blue glitch-text" data-text="WITH US.">WITH US.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#join" className="bg-cbc-offwhite text-cbc-ink px-8 py-4 font-anton text-2xl uppercase hover:bg-cbc-blue hover:text-cbc-offwhite transition-colors">
            [ JOIN CBC ]
          </a>
          <a href="#events" className="border border-cbc-grey/30 text-cbc-offwhite px-8 py-4 font-anton text-2xl uppercase hover:border-cbc-offwhite transition-colors">
            [ EXPLORE EVENTS ]
          </a>
        </div>
      </motion.div>
    </section>
  );
}
