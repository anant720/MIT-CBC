"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full flex-grow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between text-cbc-grey text-xs tracking-[0.2em] mb-12"
        >
          <div>CBC / 01<br />MIT<br />PUNE</div>
          <div className="text-right mt-4 md:mt-0">
            STATUS: <span className="text-cbc-green">ACTIVE</span><br />NETWORK: CBC
          </div>
        </motion.div>

        <div className="flex-grow flex flex-col justify-center group">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-anton text-7xl md:text-[12rem] leading-[0.85] uppercase text-cbc-offwhite glitch-text cursor-crosshair"
            data-text="MIT CBC"
          >MIT CBC</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-6 md:mt-12">
            <h2 className="font-anton text-3xl md:text-5xl uppercase text-cbc-blue leading-none">Cyber Security</h2>
            <h2 className="font-anton text-3xl md:text-5xl uppercase text-cbc-offwhite leading-none">& Blockchain Club</h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mt-12 gap-8"
        >
          <p className="text-cbc-grey max-w-sm text-sm leading-relaxed">A student-led community at MIT ADT University building, breaking and understanding technology.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href="#about" className="border border-cbc-grey/30 px-6 py-3 text-cbc-offwhite text-xs tracking-[0.2em] uppercase hover:bg-cbc-offwhite hover:text-cbc-ink transition-all text-center">[ Explore CBC ]</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWi8icz6RRxoSFCQ3GfF1okBh2WJg996ddF-EJBj7jHyQYjg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="bg-cbc-blue px-6 py-3 text-cbc-offwhite text-xs tracking-[0.2em] uppercase hover:bg-cbc-offwhite hover:text-cbc-ink transition-all text-center">[ Join The Club ]</a>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 pointer-events-none border-x border-cbc-grey/10 max-w-[90vw] mx-auto opacity-30" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-cbc-grey/5 pointer-events-none hidden md:block" />
    </section>
  );
}
