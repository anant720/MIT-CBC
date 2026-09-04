"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllAlumni } from "@/lib/api";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Alumnus = {
  id: string;
  name: string;
  position: string;
  company: string;
  batch: string | null;
  photo: string | null;
  linkedin: string | null;
  order: number;
};

// Map company names to color accents
const companyColors: Record<string, string> = {
  "ReliaQuest":                   "text-blue-400 border-blue-400/30",
  "Bajaj Finserv Health Limited": "text-green-400 border-green-400/30",
  "KAS Cyber Ventures":           "text-purple-400 border-purple-400/30",
  "ArmorIQ":                       "text-orange-400 border-orange-400/30",
  "MST Blockchain":               "text-cyan-400 border-cyan-400/30",
  "BLOK Capital":                 "text-yellow-400 border-yellow-400/30",
};

function getCompanyColor(company: string): string {
  return companyColors[company] ?? "text-cbc-blue border-cbc-blue/30";
}

function getInitials(name: string): string {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function AlumniPage() {
  const [alumni, setAlumni] = useState<Alumnus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllAlumni()
      .then(data => setAlumni(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Group by company
  const byCompany = alumni.reduce<Record<string, Alumnus[]>>((acc, a) => {
    if (!acc[a.company]) acc[a.company] = [];
    acc[a.company].push(a);
    return acc;
  }, {});

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cbc-ink text-cbc-offwhite pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="text-cbc-grey font-mono text-[10px] tracking-[0.3em] uppercase mb-4">MIT Cybersecurity and Blockchain Club</div>
          <h1 className="font-anton text-6xl md:text-8xl uppercase text-cbc-offwhite leading-none mb-6 glitch-text" data-text="ALUMNI">
            ALUMNI
          </h1>
          <p className="text-cbc-grey font-mono text-sm md:text-base max-w-xl leading-relaxed">
            Our alumni are now working at some of the most exciting companies in cybersecurity and tech. We are proud of where they are and what they represent.
          </p>
          <div className="mt-6 flex gap-6">
            <div className="border-l-2 border-cbc-blue pl-4">
              <div className="font-anton text-3xl text-cbc-offwhite">{alumni.length}</div>
              <div className="font-mono text-[10px] text-cbc-grey uppercase tracking-widest">Alumni Placed</div>
            </div>
            <div className="border-l-2 border-cbc-blue pl-4">
              <div className="font-anton text-3xl text-cbc-offwhite">{Object.keys(byCompany).length}</div>
              <div className="font-mono text-[10px] text-cbc-grey uppercase tracking-widest">Companies</div>
            </div>
          </div>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-32">
            <div className="font-mono text-cbc-grey text-sm animate-pulse tracking-widest">LOADING...</div>
          </div>
        )}

        {error && (
          <div className="border border-red-500/30 bg-red-500/5 p-6 font-mono text-sm text-red-400">
            Failed to load alumni: {error}
          </div>
        )}

        {!loading && !error && alumni.length === 0 && (
          <div className="border border-cbc-grey/20 p-12 text-center font-mono text-cbc-grey text-sm">
            No alumni records found.
          </div>
        )}

        {/* Alumni Cards Grid */}
        {!loading && !error && alumni.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {alumni.map((alum, idx) => {
              const colorClass = getCompanyColor(alum.company);
              return (
                <motion.div
                  key={alum.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative border border-cbc-grey/20 hover:border-cbc-blue transition-all duration-300 p-6 flex flex-col gap-5 bg-cbc-ink hover:bg-cbc-grey/5"
                >
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    {alum.photo ? (
                      <img
                        src={alum.photo}
                        alt={alum.name}
                        className="w-14 h-14 rounded-full object-cover border border-cbc-grey/20 group-hover:border-cbc-blue transition-colors"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full border border-cbc-grey/20 group-hover:border-cbc-blue transition-colors flex items-center justify-center bg-cbc-grey/5">
                        <span className="font-anton text-lg text-cbc-blue">{getInitials(alum.name)}</span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-anton text-lg text-cbc-offwhite uppercase leading-tight">{alum.name}</h3>
                      {alum.batch && (
                        <div className="font-mono text-[10px] text-cbc-grey/60 tracking-widest uppercase mt-0.5">{alum.batch}</div>
                      )}
                    </div>
                  </div>

                  {/* Role */}
                  <div className="flex flex-col gap-1">
                    <div className="font-mono text-xs text-cbc-grey/80 leading-relaxed">{alum.position}</div>
                    <div className={`font-mono text-xs font-semibold border-l-2 pl-2 ${colorClass} leading-relaxed`}>
                      {alum.company}
                    </div>
                  </div>

                  {/* LinkedIn */}
                  {alum.linkedin && (
                    <a
                      href={alum.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto font-mono text-[10px] uppercase tracking-widest text-cbc-grey/40 hover:text-cbc-blue transition-colors border-t border-cbc-grey/10 pt-4"
                    >
                      LinkedIn →
                    </a>
                  )}

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-cbc-blue/20 group-hover:border-t-cbc-blue/60 transition-colors" />
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Company breakdown */}
        {!loading && !error && Object.keys(byCompany).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-24 border-t border-cbc-grey/10 pt-16"
          >
            <h2 className="font-anton text-3xl md:text-4xl text-cbc-offwhite uppercase mb-12">Where They Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(byCompany).map(([company, members], idx) => {
                const colorClass = getCompanyColor(company);
                return (
                  <motion.div
                    key={company}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.08 }}
                    className="border border-cbc-grey/20 p-6"
                  >
                    <div className={`font-anton text-xl uppercase mb-4 ${colorClass.split(" ")[0]}`}>{company}</div>
                    <div className="flex flex-col gap-2">
                      {members.map(m => (
                        <div key={m.id} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${colorClass.split(" ")[0].replace("text-", "bg-")}`} />
                          <span className="font-mono text-xs text-cbc-grey">{m.name} — <span className="text-cbc-offwhite/70">{m.position}</span></span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
