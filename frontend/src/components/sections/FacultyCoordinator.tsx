"use client";
import { motion } from "framer-motion";

export default function FacultyCoordinator() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 bg-cbc-ink border-t border-cbc-grey/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 w-full">
        
        {/* Left Side: Coordinator Card */}
        <div className="md:w-5/12 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="text-cbc-grey text-[10px] tracking-[0.2em] font-mono uppercase mb-4">Under The Guidance Of</div>
            <h2 className="font-anton text-4xl md:text-5xl text-cbc-offwhite uppercase glitch-text" data-text="Faculty Coordinator">
              Faculty Coordinator
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative border border-cbc-grey/20 p-8 hover:border-cbc-blue transition-colors w-full bg-cbc-ink flex flex-col items-center shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-2 border-cbc-grey/20 group-hover:border-cbc-blue transition-colors relative">
              {/* Placeholder Photo */}
              <div className="w-full h-full bg-cbc-grey/5 flex items-center justify-center text-cbc-grey/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            <h3 className="font-anton text-3xl text-cbc-offwhite uppercase mb-2">Prof. Aman Kamble</h3>
            <p className="text-cbc-blue font-mono text-xs tracking-widest uppercase mb-4">Faculty Coordinator</p>
            <p className="text-cbc-grey font-mono text-sm leading-relaxed">
              Guiding the vision of the Cybersecurity and Blockchain Club at MIT ADT University.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Quote & Focus Areas */}
        <div className="md:w-7/12 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-12 -left-8 text-[8rem] font-anton text-cbc-grey/10 pointer-events-none select-none">"</div>
            <p className="font-anton text-2xl md:text-4xl text-cbc-offwhite uppercase leading-tight tracking-wide relative z-10">
              "Technology is moving faster than ever. It is our duty to ensure that our students are not just consumers of technology, but the architects and defenders of our digital future."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-cbc-grey/20"
          >
            {[
              { title: "Mentorship", desc: "Guiding students through complex research and real-world projects." },
              { title: "University Relations", desc: "Bridging the gap between academic curriculum and club activities." },
              { title: "Resource Allocation", desc: "Ensuring the club has the infrastructure needed to succeed." },
              { title: "Industry Connect", desc: "Facilitating networking with professionals and alumni." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h4 className="text-cbc-blue font-mono text-xs uppercase tracking-widest">{item.title}</h4>
                <p className="text-cbc-grey text-sm font-mono leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
