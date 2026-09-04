"use client";
import { motion } from "framer-motion";

export default function Network() {
  const categories = [
    {
      num: "01",
      title: "SECURITY",
      items: ["Web", "Networks", "Systems", "Cryptography", "Reverse Engineering"]
    },
    {
      num: "02",
      title: "RESEARCH",
      items: ["Experiment", "Analyze", "Break", "Understand"]
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 relative border-t border-cbc-grey/20 bg-cbc-ink">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-anton text-5xl md:text-8xl text-cbc-offwhite uppercase mb-16"
        >
          The CBC Network
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="border-t border-cbc-grey/20 pt-8"
            >
              <div className="text-cbc-blue font-mono text-xs tracking-[0.2em] mb-4">
                {category.num} / {category.title}
              </div>
              <ul className="space-y-4 mb-12">
                {category.items.map((item, i) => (
                  <li key={i} className="font-anton text-3xl md:text-5xl text-cbc-offwhite uppercase hover:text-cbc-blue transition-colors cursor-crosshair">
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-block text-cbc-grey text-xs tracking-[0.2em] hover:text-cbc-offwhite transition-colors">
                [ EXPLORE → ]
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
