"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Join() {
  return (
    <section id="join" className="min-h-screen flex flex-col justify-center py-32 px-6 md:px-12 relative border-t border-cbc-grey/20 bg-cbc-blue overflow-hidden text-cbc-ink">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-center relative z-10">
        <div className="md:w-5/12 flex flex-col justify-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="font-anton text-7xl md:text-[8rem] leading-none uppercase mb-8 glitch-text" data-text="WANT IN?"
          >WANT IN?</motion.h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-mono text-base md:text-lg text-cbc-ink/80 max-w-md leading-relaxed">
            <p className="mb-4">Beginners are completely welcome. You don't need to be an expert hacker to join.</p>
            <p>You just need a passion for cybersecurity and a willingness to learn something difficult.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWi8icz6RRxoSFCQ3GfF1okBh2WJg996ddF-EJBj7jHyQYjg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-cbc-ink bg-cbc-ink text-cbc-blue px-8 py-4 font-anton text-2xl uppercase hover:bg-transparent hover:text-cbc-ink transition-colors shadow-[4px_4px_0_0_#0a0a0a]">
              [ FILL APPLICATION ]
            </a>
          </motion.div>
        </div>
        
        {/* Right Side: Step-by-Step */}
        <div className="md:w-7/12 flex flex-col items-start md:items-end w-full">
          <div className="flex flex-col gap-8 w-full max-w-lg relative">
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-cbc-ink/20 hidden md:block"></div>
            
            {[
              { step: "01", title: "Submit Application", desc: "Fill out the Google Form with your details and interests. We review these weekly." },
              { step: "02", title: "Join Discord", desc: "Once reviewed, you'll receive a link to join our official Discord server." },
              { step: "03", title: "Attend Meetup", desc: "Come to our next onboarding session or workshop to meet the team and get started." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.15) }}
                className="flex gap-6 items-start relative z-10"
              >
                <div className="bg-cbc-ink text-cbc-blue font-anton text-2xl w-12 h-12 flex items-center justify-center shrink-0 border-2 border-cbc-ink shadow-[2px_2px_0_0_rgba(10,10,10,0.5)]">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-anton text-3xl uppercase text-cbc-ink mb-2">{item.title}</h4>
                  <p className="font-mono text-sm text-cbc-ink/80 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-anton text-[20rem] text-cbc-ink/5 pointer-events-none select-none whitespace-nowrap">JOIN US</div>
    </section>
  );
}
