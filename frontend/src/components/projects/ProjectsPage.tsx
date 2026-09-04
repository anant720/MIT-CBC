"use client";
import { motion } from "framer-motion";

export default function ProjectsPage({ projects }: { projects: any[] }) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="font-anton text-6xl md:text-9xl text-cbc-offwhite uppercase mb-4">Projects</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-cbc-grey font-mono text-sm mb-16">
        Things we have built, researched and shipped.
      </motion.p>
      {projects.length === 0 ? (
        <p className="text-cbc-grey font-mono">No projects yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              className="group border border-cbc-grey/20 p-8 hover:border-cbc-blue transition-colors"
            >
              {project.featured && <div className="text-cbc-green font-mono text-xs tracking-widest uppercase mb-4">FEATURED</div>}
              <div className="text-cbc-blue font-mono text-xs tracking-widest uppercase mb-2">{String(idx+1).padStart(2,"0")}</div>
              <h3 className="font-anton text-3xl text-cbc-offwhite uppercase mb-2">{project.title}</h3>
              <p className="text-cbc-grey font-mono text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map((tag: string) => (
                  <span key={tag} className="border border-cbc-grey/30 text-cbc-grey font-mono text-xs px-2 py-1 tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <div className="flex justify-between items-center border-t border-cbc-grey/20 pt-4">
                <span className="text-cbc-grey/60 font-mono text-xs">{project.year} · {project.authors?.join(", ")}</span>
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cbc-blue font-mono text-xs tracking-widest hover:text-cbc-offwhite transition-colors">VIEW →</a>}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

