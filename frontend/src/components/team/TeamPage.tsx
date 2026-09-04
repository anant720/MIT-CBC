"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MemberCard from "./MemberCard";
import Link from "next/link";

export default function TeamPage({ members }: { members: any[] }) {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
      <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        className="font-anton text-6xl md:text-9xl text-cbc-offwhite uppercase mb-4">Team</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-cbc-grey font-mono text-sm mb-4">
        The people who build, break and secure things at MIT CBC.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-16">
        <Link href="/alumni" className="font-mono text-xs text-cbc-blue hover:text-cbc-offwhite uppercase tracking-widest transition-colors border-b border-cbc-blue/30 hover:border-cbc-offwhite pb-0.5">
          View Alumni →
        </Link>
      </motion.div>

      {members.length === 0 ? (
        <p className="text-cbc-grey font-mono">No members yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <motion.div key={member.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
              <MemberCard member={member} onClick={() => setSelectedMember(member)} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-cbc-ink/90 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cbc-ink border border-cbc-blue/50 p-8 max-w-2xl w-full flex flex-col md:flex-row gap-8 relative"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-cbc-grey hover:text-cbc-offwhite transition-colors"
              >
                ✕
              </button>
              
              <div className="w-full md:w-1/2 aspect-square bg-cbc-grey/10 overflow-hidden flex items-center justify-center border border-cbc-grey/10">
                {selectedMember.photo ? (
                  <img src={selectedMember.photo} alt={selectedMember.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-anton text-8xl text-cbc-grey/30 uppercase">{selectedMember.name.charAt(0)}</span>
                )}
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="text-cbc-blue font-mono text-sm tracking-widest uppercase mb-2">{selectedMember.role}</div>
                <h3 className="font-anton text-4xl text-cbc-offwhite uppercase mb-2">{selectedMember.name}</h3>
                <p className="text-cbc-grey font-mono text-sm mb-1">{selectedMember.batch}</p>
                {selectedMember.isAlumni && selectedMember.graduationYear && (
                  <p className="text-cbc-grey/60 font-mono text-sm mb-4">Class of {selectedMember.graduationYear}</p>
                )}
                <div className="w-8 h-px bg-cbc-blue/50 my-6"></div>
                {selectedMember.bio ? (
                  <p className="text-cbc-grey font-mono text-sm leading-relaxed mb-8">{selectedMember.bio}</p>
                ) : (
                  <p className="text-cbc-grey/40 font-mono text-sm leading-relaxed mb-8 italic">No biography provided.</p>
                )}
                
                <div className="flex gap-6 mt-auto">
                  {selectedMember.github && <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="text-cbc-offwhite hover:text-cbc-blue font-mono text-sm tracking-widest transition-colors">GITHUB</a>}
                  {selectedMember.linkedin && <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="text-cbc-offwhite hover:text-cbc-blue font-mono text-sm tracking-widest transition-colors">LINKEDIN</a>}
                  {selectedMember.email && <a href={`mailto:${selectedMember.email}`} className="text-cbc-offwhite hover:text-cbc-blue font-mono text-sm tracking-widest transition-colors">EMAIL</a>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
