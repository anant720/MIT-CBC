"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getMembers } from "@/lib/api";

export default function People() {
  const [members, setMembers] = useState<any[]>([]);
  useEffect(() => { getMembers().then(setMembers).catch(() => {}); }, []);
  const roles = members.length > 0 ? members.map((m: any) => m.role.toUpperCase()) : ["PRESIDENT","VICE PRESIDENT","TECHNICAL LEAD","EVENTS","DESIGN","CTF"];

  return (
    <section id="team" className="py-32 px-6 md:px-12 relative border-t border-cbc-grey/20 bg-cbc-ink">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="md:w-1/2">
          <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-anton text-5xl md:text-8xl text-cbc-offwhite uppercase mb-8 leading-none">
            The People <br className="hidden md:block" />Behind CBC
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-cbc-grey font-mono text-lg leading-relaxed flex flex-col gap-2">
            <span>Students.</span><span>Builders.</span><span>Researchers.</span><span>Competitors.</span><span>Curious people.</span>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <ul className="space-y-6 mb-12">
            {roles.slice(0,6).map((role: string, idx: number) => (
              <motion.li key={role} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="font-anton text-3xl md:text-4xl text-cbc-grey uppercase hover:text-cbc-offwhite hover:translate-x-2 transition-all cursor-crosshair"
              >{role}</motion.li>
            ))}
          </ul>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
            <Link href="/team" className="text-cbc-blue font-mono text-sm tracking-[0.2em] hover:text-cbc-offwhite transition-colors">[ MEET THE TEAM ]</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
