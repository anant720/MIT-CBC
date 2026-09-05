"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeIntro() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 relative border-t border-cbc-grey/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 w-full">
        {/* Left Column: Mission & Vision */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="font-anton text-5xl md:text-7xl text-cbc-offwhite uppercase mb-8 leading-none glitch-text"
            data-text="What is CBC?"
          >
            What is CBC?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }} 
            className="text-cbc-grey font-mono text-sm leading-relaxed space-y-6"
          >
            <p className="text-cbc-blue font-bold uppercase tracking-widest text-xs">Our Mission</p>
            <p>
              The Cyber Security & Blockchain Club at MIT ADT University, Pune is a collective of students 
              passionate about learning, breaking, and building secure systems.
            </p>
            <p>
              We organize workshops, compete in Capture The Flag (CTF) events, and research 
              emerging technologies in Web3 and infosec. Our goal is to bridge the gap between academic theory and real-world practical security.
            </p>
            <div className="pt-8 border-t border-cbc-grey/10 mt-8 flex flex-col gap-4">
              <Link href="/about" className="text-cbc-offwhite uppercase tracking-widest font-mono text-xs hover:text-cbc-blue transition-colors w-max">
                [ Read Our Full Story → ]
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Statistics & Links */}
        <div className="md:w-1/2 flex flex-col justify-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 border border-cbc-grey/20 p-8 bg-cbc-ink relative"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cbc-blue -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cbc-blue translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cbc-blue -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cbc-blue translate-x-1/2 translate-y-1/2"></div>

            <div>
              <div className="font-anton text-5xl md:text-6xl text-cbc-offwhite mb-2">29</div>
              <div className="text-cbc-grey font-mono text-[10px] tracking-widest uppercase">Active Members</div>
            </div>
            <div>
              <div className="font-anton text-5xl md:text-6xl text-cbc-offwhite mb-2">20<span className="text-cbc-blue">+</span></div>
              <div className="text-cbc-grey font-mono text-[10px] tracking-widest uppercase">Workshops Hosted</div>
            </div>
            <div>
              <div className="font-anton text-5xl md:text-6xl text-cbc-offwhite mb-2">10<span className="text-cbc-blue">+</span></div>
              <div className="text-cbc-grey font-mono text-[10px] tracking-widest uppercase">CTFs Won</div>
            </div>
            <div>
              <div className="font-anton text-5xl md:text-6xl text-cbc-offwhite mb-2">5<span className="text-cbc-blue">+</span></div>
              <div className="text-cbc-grey font-mono text-[10px] tracking-widest uppercase">Open Source Projects</div>
            </div>
          </motion.div>

          <ul className="space-y-4">
            {[
              { label: "MEET THE TEAM", href: "/team" },
              { label: "EXPLORE PROJECTS", href: "/projects" },
              { label: "VIEW GALLERY", href: "/gallery" }
            ].map((link, idx) => (
              <motion.li 
                key={link.href} 
                initial={{ opacity: 0, x: 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.4 + (idx * 0.1) }}
              >
                <Link 
                  href={link.href}
                  className="font-anton text-3xl md:text-4xl text-cbc-grey uppercase hover:text-cbc-blue hover:translate-x-2 transition-all block w-max"
                >
                  {link.label} →
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
