"use client";
import { motion } from "framer-motion";

export default function AboutAchievements() {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-cbc-grey/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-anton text-4xl md:text-6xl text-cbc-offwhite uppercase mb-4">Our Achievements & Legacy</h2>
          <p className="text-cbc-grey font-mono text-sm max-w-2xl leading-relaxed">
            Over the years, the MIT Cybersecurity and Blockchain Club (CBC) at MIT ADT University has made a significant mark on the global stage. 
            We actively participate in Capture The Flag (CTF) competitions, research, and technical conventions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Nullcon 2023 / nCreeps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border border-cbc-grey/20 p-8 hover:border-cbc-blue transition-colors"
          >
            <div className="text-cbc-blue font-mono text-xs tracking-widest uppercase mb-4">Winja CTF 2023</div>
            <h3 className="font-anton text-3xl text-cbc-offwhite uppercase mb-4">7th Rank Globally</h3>
            <p className="text-cbc-grey font-mono text-sm leading-relaxed mb-6">
              Our formidable CTF Team, <strong>nCreeps</strong>, represented MIT ADT University at the international level at Nullcon Goa 2023. 
              The squad tackled cryptography, reverse engineering, web security, and network analysis, securing the 7th rank amongst 203 teams in total!
            </p>
            <p className="text-cbc-grey/60 font-mono text-xs italic">
              Special thanks to Mr. Rohit Pachlor and Mrs. Deepa Sharma for their continuous support.
            </p>
          </motion.div>

          {/* Nullcon 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-cbc-grey/20 p-8 hover:border-cbc-blue transition-colors"
          >
            <div className="text-cbc-blue font-mono text-xs tracking-widest uppercase mb-4">Winja CTF 2026</div>
            <h3 className="font-anton text-3xl text-cbc-offwhite uppercase mb-4">Top 20 Rank Globally</h3>
            <p className="text-cbc-grey font-mono text-sm leading-relaxed">
              Building on our legacy, a team of eleven students represented CBC at the 16th edition of Nullcon Goa 2026. 
              Tackling highly competitive challenges in AI security, cloud exploitation, and digital forensics, the team secured a top 20 rank globally.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
