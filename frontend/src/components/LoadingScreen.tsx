"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timers = [
      setTimeout(() => setPhase(1), 300),   // 0.3s: Technical fragments
      setTimeout(() => setPhase(2), 600),   // 0.6s: MIT CBC
      setTimeout(() => setPhase(3), 900),   // 0.9s: Subtitle
      setTimeout(() => setPhase(4), 1200),  // 1.2s: Progress begins
      setTimeout(() => setPhase(5), 1600),  // 1.6s: Labels
      setTimeout(() => setPhase(6), 2000),  // 2.0s: Ready
      setTimeout(() => setPhase(7), 2200),  // 2.2s: Glitch Out
      setTimeout(() => {                    // 2.5s: Unmount
        document.body.style.overflow = "";
        onComplete();
      }, 2500),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Handle fake progress bar
  useEffect(() => {
    if (phase >= 4 && phase < 6) {
      const interval = setInterval(() => {
        setProgress((p) => Math.min(p + 15, 100));
      }, 50);
      return () => clearInterval(interval);
    }
    if (phase >= 6) {
      setProgress(100);
    }
  }, [phase]);

  const renderProgressBar = () => {
    const totalBlocks = 12;
    const filledBlocks = Math.floor((progress / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    
    return (
      <span className={phase >= 6 ? "text-cbc-green" : "text-cbc-offwhite"}>
        {"█".repeat(filledBlocks)}
        <span className="opacity-30">{"░".repeat(emptyBlocks)}</span>
      </span>
    );
  };

  if (phase >= 8) return null;

  return (
    <AnimatePresence>
      {phase < 8 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cbc-ink text-cbc-offwhite select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }} // We handle the exit with our own glitch transition
        >
          {/* Subtle Film Grain / Noise Overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
          </div>

          {/* Scanlines Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>

          {/* Phase 7: Outro glitch flash */}
          {phase === 7 && (
            <motion.div 
              className="absolute inset-0 bg-cbc-blue mix-blend-overlay z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.2 }}
            />
          )}

          {/* Top Left: Initializing */}
          {phase >= 0 && (
            <div className="absolute top-6 left-6 text-xs sm:text-sm text-cbc-grey flex flex-col gap-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 7 ? 0 : 1 }}
                transition={{ duration: 0 }}
              >
                {phase < 6 ? "INITIALIZING..." : <span className="text-cbc-green">SYSTEM READY</span>}
              </motion.div>
            </div>
          )}

          {/* Phase 1: Technical Fragments */}
          {phase >= 1 && (
            <>
              <div className="absolute top-6 right-6 text-right text-xs sm:text-sm text-cbc-grey flex flex-col gap-1">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: phase === 7 ? 0 : 1 }} transition={{ duration: 0 }}>CBC_SYSTEM_INIT</motion.div>
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: phase === 7 ? 0 : 1, y: 0 }} transition={{ delay: 0.1 }}>NODE: MIT</motion.div>
              </div>
              <div className="absolute bottom-6 left-6 text-xs sm:text-sm text-cbc-grey">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: phase === 7 ? 0 : 1 }}>ESTABLISHING CONNECTION...</motion.div>
              </div>
            </>
          )}

          {/* Phase 5: Additional Labels */}
          {phase >= 5 && (
            <>
              <motion.div 
                className="absolute bottom-16 right-6 text-right text-xs sm:text-sm text-cbc-blue"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: phase === 7 ? 0 : 1, x: 0 }}
              >
                SYS.01<br/>CBC.NODE<br/>2026<br/>SECURE
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 left-6 -translate-y-1/2 text-xs sm:text-sm text-cbc-grey rotate-180"
                style={{ writingMode: "vertical-rl" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 7 ? 0 : 1 }}
              >
                PROTOCOL CBC/01
              </motion.div>
            </>
          )}

          {/* Center Content */}
          <motion.div 
            className="flex flex-col items-center justify-center text-center z-10 w-full px-4"
            animate={
              phase === 7 
                ? { 
                    scaleX: [1, 2, 4, 10], 
                    scaleY: [1, 0.1, 0.02, 0], 
                    opacity: [1, 1, 0.8, 0],
                    filter: ["blur(0px)", "blur(4px)", "blur(10px)"],
                  }
                : {}
            }
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Phase 2: MIT CBC */}
            {phase >= 2 && (
              <motion.div
                className={`flex flex-col items-center ${phase === 7 ? "text-cbc-red" : "text-cbc-offwhite"}`}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.1 }}
              >
                <img src="/images/logo.png" alt="MIT CBC Logo" className="h-32 sm:h-48 md:h-64 mb-6" />
                <h1 className="font-anton text-5xl sm:text-7xl md:text-8xl leading-none tracking-tight uppercase">
                  <span className="glitch-text" data-text="MIT CBC">
                    MIT CBC
                  </span>
                </h1>
              </motion.div>
            )}

            {/* Phase 3: Subtitle */}
            {phase >= 3 && (
              <motion.h2
                className="font-mono text-sm sm:text-base md:text-lg mt-2 text-cbc-grey uppercase tracking-widest max-w-[80vw]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
              >
                Cyber Security <span className="text-cbc-blue">&</span> Blockchain Club
              </motion.h2>
            )}
            
            {phase >= 3 && phase < 4 && (
              <motion.p className="font-mono text-xs mt-6 text-cbc-blue tracking-widest">
                SCANNING NETWORK...
              </motion.p>
            )}

            {/* Phase 4: Progress Indicator */}
            {phase >= 4 && (
              <motion.div 
                className="mt-6 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="font-mono text-lg tracking-[0.2em]">
                  {renderProgressBar()}
                </div>
                {phase >= 6 && (
                  <motion.div 
                    className="text-cbc-green text-xs tracking-widest uppercase mt-1 bg-cbc-green/10 px-2 py-0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    System Ready
                  </motion.div>
                )}
              </motion.div>
            )}
            
            {/* Short extra label for Phase 5 */}
            {phase >= 5 && (
              <motion.p 
                className="font-mono text-[10px] mt-12 text-cbc-grey opacity-50 uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Student-led Community of MIT ADT University
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
