"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-24 overflow-hidden border-b border-cbc-grey/20">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full flex-grow relative z-10">
        
        {/* Top Technical Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between text-cbc-grey text-xs tracking-[0.2em] mb-12"
        >
          <div>
            CBC / 002<br />
            WHO WE ARE
          </div>
          <div className="text-right mt-4 md:mt-0">
            SYSTEM / 02<br />
            NODE: CBC<br />
            FILE / ABOUT
          </div>
        </motion.div>

        {/* Main Typography */}
        <div className="flex-grow flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-anton text-8xl md:text-[14rem] leading-[0.8] uppercase text-cbc-offwhite cursor-crosshair tracking-tight -ml-2 flex flex-col"
          >
            <span className="block glitch-text" data-text="ABOUT">ABOUT</span>
            <span className="block glitch-text text-cbc-blue" data-text="CBC">CBC</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 md:mt-12 flex flex-col gap-2"
          >
            <h2 className="font-anton text-2xl md:text-4xl uppercase text-cbc-blue leading-none tracking-widest">
              Cyber Security
            </h2>
            <h2 className="font-anton text-2xl md:text-4xl uppercase text-cbc-offwhite leading-none tracking-widest">
              & Blockchain Club
            </h2>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mt-16 gap-12"
        >
          <p className="text-cbc-grey max-w-md text-sm md:text-base leading-relaxed">
            MIT CBC is the official student-led technology club of MIT ADT University, focused on learning, building, researching and competing in cybersecurity.
          </p>
          <div className="font-anton text-right uppercase text-cbc-blue/80 text-xl md:text-3xl leading-none">
            NOT JUST A CLUB.<br />
            <span className="text-cbc-offwhite">A TECHNICAL COMMUNITY.</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none border-x border-cbc-grey/10 max-w-[90vw] mx-auto opacity-30" />
      <div className="absolute inset-y-0 left-3/4 w-px bg-cbc-blue/20 pointer-events-none hidden md:block" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-cbc-grey/10 pointer-events-none hidden md:block" />
    </section>
  );
}
