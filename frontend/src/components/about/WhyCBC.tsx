"use client";
import { motion } from "framer-motion";

export default function WhyCBC() {
  const sequence = [
    { num: "01", text: "LEARN" },
    { num: "02", text: "EXPERIMENT" },
    { num: "03", text: "BREAK" },
    { num: "04", text: "UNDERSTAND" },
    { num: "05", text: "BUILD" }
  ];

  return (
    <section className="py-32 px-6 md:px-12 relative border-b border-cbc-grey/20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
        
        {/* Left Side: Statement */}
        <div className="md:w-1/2 md:sticky md:top-32 self-start">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-anton text-6xl md:text-9xl text-cbc-offwhite uppercase leading-none mb-12 glitch-text"
            data-text="WHY CBC?"
          >
            WHY<br />
            CBC?
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-cbc-blue font-mono text-lg md:text-xl font-bold uppercase tracking-widest leading-relaxed">
              Technology is easier to use than it is to understand.
            </p>
            <p className="text-cbc-grey font-mono text-sm md:text-base leading-relaxed max-w-md">
              CBC exists to create a space where students can go deeper — from understanding how systems work to building projects, exploring security and solving problems together.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Visual Sequence */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="flex flex-col items-start gap-12 relative">
            {/* Connecting line */}
            <div className="absolute left-[3px] top-4 bottom-4 w-px bg-cbc-grey/20" />
            
            {sequence.map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 30, x: 10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-center gap-8 group cursor-crosshair relative z-10"
              >
                {/* Node indicator */}
                <div className="w-2 h-2 bg-cbc-ink border border-cbc-blue group-hover:bg-cbc-blue transition-colors rounded-full shrink-0" />
                
                <div className="flex flex-col">
                  <span className="text-cbc-grey/50 font-mono text-xs tracking-widest mb-1 group-hover:text-cbc-blue transition-colors">
                    SEQ / {step.num}
                  </span>
                  <span className="font-anton text-5xl md:text-7xl text-cbc-offwhite uppercase group-hover:text-cbc-blue group-hover:scale-105 transform origin-left transition-all">
                    {step.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
