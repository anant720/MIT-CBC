"use client";
import { motion } from "framer-motion";

export default function HowCBCWorks() {
  const steps = [
    {
      num: "01",
      title: "LEARN",
      desc: "Understand the fundamentals."
    },
    {
      num: "02",
      title: "EXPERIMENT",
      desc: "Try things.\nBreak things.\nAsk questions."
    },
    {
      num: "03",
      title: "BUILD",
      desc: "Turn what you learn\ninto something real."
    },
    {
      num: "04",
      title: "SHARE",
      desc: "Document it.\nTeach someone else.\nMake the next person better."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 relative border-b border-cbc-grey/20 bg-cbc-ink">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-anton text-6xl md:text-9xl text-cbc-offwhite uppercase mb-24 text-center md:text-left leading-none glitch-text"
          data-text="NO ONE LEARNS ALONE."
        >
          NO ONE<br />LEARNS ALONE.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 2) * 0.2 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:mt-32' : ''} group`}
            >
              <div className="border-t border-cbc-grey/30 pt-8 relative">
                {/* Subtle blue signal on hover */}
                <div className="absolute top-0 left-0 w-0 h-px bg-cbc-blue group-hover:w-full transition-all duration-500" />
                
                <div className="flex gap-8 items-start">
                  <div className="font-anton text-7xl md:text-9xl text-cbc-grey/20 group-hover:text-cbc-blue transition-colors leading-[0.8]">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-anton text-4xl md:text-5xl text-cbc-offwhite uppercase mb-6 group-hover:glitch-text" data-text={step.title}>
                      {step.title}
                    </h3>
                    <p className="text-cbc-grey font-mono text-sm tracking-widest uppercase whitespace-pre-line leading-loose">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
