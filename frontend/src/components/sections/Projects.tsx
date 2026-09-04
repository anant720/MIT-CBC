"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProjects } from "@/lib/api";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => { getProjects().then(data => setProjects(data.slice(0, 2))).catch(() => {}); }, []);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 relative border-t border-cbc-grey/20">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-baseline gap-4 mb-16">
          <h2 className="font-anton text-5xl md:text-8xl text-cbc-offwhite uppercase">Projects</h2>
          <span className="font-anton text-4xl md:text-6xl text-cbc-blue">/</span>
        </motion.div>
        {projects.length === 0 ? (
          <p className="text-cbc-grey font-mono">Projects coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div key={project.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
                className="group border border-cbc-grey/20 aspect-video relative overflow-hidden flex flex-col justify-end p-8 hover:border-cbc-blue transition-colors cursor-crosshair bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cbc-grey/5 to-transparent"
              >
                <div className="absolute -top-10 -right-10 font-anton text-[15rem] text-cbc-grey/5 group-hover:text-cbc-blue/10 transition-colors pointer-events-none select-none">{String(idx+1).padStart(2,"0")}</div>
                <div className="relative z-10">
                  <div className="text-cbc-blue font-mono text-xs tracking-widest uppercase mb-2">{String(idx+1).padStart(2,"0")}</div>
                  <h3 className="font-anton text-4xl text-cbc-offwhite uppercase mb-2">{project.title}</h3>
                  <p className="text-cbc-grey font-mono text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center border-t border-cbc-grey/20 pt-4 mt-4">
                    <span className="text-cbc-grey text-xs font-mono tracking-widest">{project.tags?.join(" · ").toUpperCase()}</span>
                    <span className="text-cbc-offwhite text-xs font-mono tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">VIEW PROJECT →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 text-center md:text-right">
          <Link href="/projects" className="text-cbc-blue font-mono text-sm tracking-[0.2em] hover:text-cbc-offwhite transition-colors">[ VIEW ALL PROJECTS ]</Link>
        </motion.div>
      </div>
    </section>
  );
}

