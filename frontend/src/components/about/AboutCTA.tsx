"use client";
import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section className="py-40 px-6 md:px-12 relative bg-cbc-ink flex flex-col justify-between overflow-hidden">
      
      {/* Decorative Top Line */}
      <div className="w-full max-w-7xl mx-auto mb-24 flex justify-between items-center text-cbc-grey/30 font-mono text-xs tracking-[0.2em] uppercase">
        <span className="flex-grow border-t border-cbc-grey/20 mr-4" />
        CBC / 002
        <span className="flex-grow border-t border-cbc-grey/20 ml-4" />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-16 relative z-10">
        
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-anton text-7xl md:text-[10rem] text-cbc-offwhite uppercase leading-[0.8] mb-6 glitch-text"
            data-text="CURIOUS? GOOD."
          >
            CURIOUS?<br />
            <span className="text-cbc-blue">GOOD.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cbc-grey font-mono text-xl tracking-[0.2em] uppercase ml-2"
          >
            Start somewhere.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-6 w-full md:w-auto"
        >
          <a href="/#join" className="bg-cbc-blue text-cbc-offwhite px-10 py-5 font-anton text-2xl uppercase hover:bg-cbc-offwhite hover:text-cbc-ink transition-colors text-center">
            [ JOIN CBC ]
          </a>
          <a href="/#events" className="border border-cbc-grey/30 text-cbc-offwhite px-10 py-5 font-anton text-2xl uppercase hover:border-cbc-offwhite transition-colors text-center">
            [ SEE EVENTS ]
          </a>
        </motion.div>

      </div>

      {/* Technical Ending */}
      <div className="w-full max-w-7xl mx-auto mt-32 flex justify-between text-cbc-grey/30 font-mono text-xs tracking-[0.2em] uppercase border-t border-cbc-grey/20 pt-8">
        <span>CBC / 002</span>
        <span>END OF FILE</span>
      </div>
    </section>
  );
}
