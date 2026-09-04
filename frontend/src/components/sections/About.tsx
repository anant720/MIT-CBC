"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const items = [
    { num: "01", title: "LEARN", desc: "Workshops, talks and hands-on sessions." },
    { num: "02", title: "BUILD", desc: "Projects, experiments and technical work." },
    { num: "03", title: "COMPETE", desc: "CTFs, challenges, teams and competitions." }
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 relative border-t border-cbc-grey/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-anton text-5xl md:text-8xl text-cbc-offwhite uppercase mb-12"
        >
          So, What is CBC?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cbc-grey text-lg md:text-xl leading-relaxed max-w-lg"
          >
            We are the official student-led technology club of MIT ADT University, focused on understanding how systems work — and learning how to build, break and secure them.
          </motion.div>
          
          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div 
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group border-b border-cbc-grey/20 pb-8 cursor-default"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-anton text-cbc-blue text-4xl md:text-6xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {item.num} —
                  </span>
                  <div>
                    <h3 className="font-anton text-3xl md:text-4xl text-cbc-offwhite uppercase mb-2 group-hover:glitch-text" data-text={item.title}>
                      {item.title}
                    </h3>
                    <p className="text-cbc-grey font-mono text-sm tracking-wide">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <Link href="/about" className="text-cbc-blue font-mono text-sm tracking-[0.2em] hover:text-cbc-offwhite transition-colors">
                [ LEARN MORE ABOUT CBC ]
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
