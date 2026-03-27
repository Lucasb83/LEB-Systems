"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Activity } from "lucide-react";

// ==========================================
// GEOMETRIC LOGO (SVG)
// ==========================================
const FlowerOfLifeSVG = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMid meet"
  >
    <g stroke="currentColor" strokeWidth="1.5">
      <circle cx="50" cy="50" r="16" />
      <circle cx="50" cy="34" r="16" />
      <circle cx="63.8" cy="42" r="16" />
      <circle cx="63.8" cy="58" r="16" />
      <circle cx="50" cy="66" r="16" />
      <circle cx="36.2" cy="58" r="16" />
      <circle cx="36.2" cy="42" r="16" />
    </g>
  </svg>
);

export default function MaintenancePage() {
  return (
    <main className="relative min-h-screen bg-[#010614] text-[#F0F0F0] flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center max-w-2xl px-6 text-center">
        
        {/* Animated Flower of Life */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-12 flex items-center justify-center">
          {/* Outer Pulse */}
          <motion.div 
            className="absolute inset-0 rounded-full border border-[#D4AF37]"
            animate={{ 
              scale: [1, 1.5, 2],
              opacity: [0.5, 0, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-0 rounded-full border border-[#D4AF37]"
            animate={{ 
              scale: [1, 1.5, 2],
              opacity: [0.5, 0, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
          />
          
          {/* Rotating Logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-full h-full text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            <FlowerOfLifeSVG />
          </motion.div>
          
          {/* Center Core Glow */}
          <div className="absolute w-2 h-2 bg-[#FFDF00] rounded-full shadow-[0_0_20px_rgba(255,223,0,1)] animate-pulse"></div>
        </div>

        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2 mb-8 border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-md"
        >
          <Activity className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
            Deployment in Progress
          </span>
        </motion.div>

        {/* Headlines */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 leading-tight"
        >
          Architecting <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFDF00]">
            The Future
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-lg text-[#94A3B8] font-light tracking-wide leading-relaxed mb-12"
        >
          LEB Systems is currently deploying next-generation infrastructure protocols. Our enterprise ecosystem will be online shortly.
        </motion.p>

        {/* Terminal Loading Simulation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-4 text-[#94A3B8] text-[10px] md:text-xs font-mono tracking-widest uppercase bg-white/5 px-6 py-4 rounded-sm border border-white/5"
        >
          <Terminal className="w-4 h-4 text-[#D4AF37]" />
          <span>Executing boot sequence... <span className="animate-pulse inline-block w-2 h-4 bg-[#D4AF37] align-middle ml-1"></span></span>
        </motion.div>

      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 text-center w-full">
        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-slate-600">
          LEB Systems International
        </span>
      </div>
    </main>
  );
}