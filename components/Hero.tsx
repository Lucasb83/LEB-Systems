"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Server } from "lucide-react";

// =========================================
// CUSTOM ANIMATION SETTINGS
// =========================================
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

// =========================================
// ELECTRIC FLOWER OF LIFE CORE
// =========================================
interface FlowerOfLifeProps {
  size?: number | string;
}

const FlowerOfLifeCore: React.FC<FlowerOfLifeProps> = ({ size = "100%" }) => {
  const r = 20; 
  const sqrt3 = Math.sqrt(3);

  const centers = [
    [0, 0], 
    [0, -2], [0, 2], [sqrt3, -1], [sqrt3, 1], [-sqrt3, -1], [-sqrt3, 1], 
    [0, -4], [0, 4], [sqrt3, -3], [sqrt3, 3], [-sqrt3, -3], [-sqrt3, 3], 
    [2*sqrt3, -2], [2*sqrt3, 0], [2*sqrt3, 2], [-2*sqrt3, -2], [-2*sqrt3, 0], [-2*sqrt3, 2] 
  ];

  return (
    <div style={{ width: size, height: size }} className="relative flex items-center justify-center max-w-[400px] md:max-w-[500px] aspect-square mx-auto mb-10">
      {/* Ambient Inner Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#EC4899]/20 via-[#9333EA]/5 to-transparent blur-[40px] rounded-full pointer-events-none"></div>

      <svg viewBox="-80 -80 160 160" className="w-full h-full relative z-10 drop-shadow-[0_0_5px_rgba(236,72,153,0.6)]">
        <defs>
          <linearGradient id="hero-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="hero-electric-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base Geometry */}
        {centers.map((pos, i) => (
          <circle
            key={`circle-${i}`}
            cx={pos[0] * r}
            cy={pos[1] * r}
            r={r}
            fill="none"
            stroke="url(#hero-line-grad)"
            strokeWidth="0.7"
            className="transition-all duration-500 hover:strokeWidth-[1.5px] hover:stroke-[#F472B6]"
          />
        ))}

        {/* Animated Electric Glows (Deterministic pseudo-random to prevent hydration errors) */}
        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={`glow-${i}`}
            r={0.8 + (i % 3) * 0.4}
            fill="url(#hero-electric-glow)"
            className="drop-shadow-[0_0_8px_rgba(236,72,153,1)]"
          >
            <animateMotion
              dur={`${4 + (i % 5)}s`}
              repeatCount="Infinity"
              path={`M ${(i * 13) % 200 - 100} ${(i * 17) % 200 - 100} h ${(i % 2 === 0 ? 1 : -1) * 30} v ${(i % 3 === 0 ? 1 : -1) * 30} Z`}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative pt-40 pb-10 px-6 flex flex-col items-center text-center min-h-[90vh] justify-center overflow-hidden">
      
      {/* Huge Background Glows */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#9333EA]/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-[#EC4899]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div 
        variants={fadeUpVariant} initial="hidden" animate="visible"
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center w-full"
      >
        
        {/* THE FLOWER OF LIFE */}
        <FlowerOfLifeCore />

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-white tracking-tight leading-[1.05] mb-8">
          IT Infrastructure <br className="hidden md:block" />
          you can <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#F472B6] to-[#FF4F27]">trust and scale</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed font-light">
          Build visually, go deep with code, connect to anything. Every step of your architecture's reasoning, traceable on the canvas. Deploy on your infrastructure or ours.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="/portal" className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#9333EA] via-[#EC4899] to-[#FF4F27] hover:opacity-90 text-white font-medium rounded-md transition-opacity shadow-[0_0_30px_rgba(236,72,153,0.3)]">
            Get started for free
          </a>
          <a href="#sales" className="w-full sm:w-auto px-8 py-3.5 bg-[#1A1A1E] border border-white/10 text-white font-medium rounded-md hover:bg-[#23242D] transition-colors">
            Talk to sales
          </a>
        </div>
      </motion.div>

      {/* SOCIAL PROOF LOGOS */}
      <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="relative z-10 mt-24 max-w-5xl mx-auto w-full flex flex-col items-center">
        <p className="text-xs text-slate-500 mb-6 font-medium">The world's most popular infrastructure platform for technical teams including</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
          <span className="text-xl font-bold font-sans">Microsoft</span>
          <span className="text-xl font-bold font-serif italic tracking-tight">wayfair</span>
          <span className="text-xl font-bold font-sans flex items-center gap-1"><Cloud className="w-6 h-6"/> onfleet</span>
          <span className="text-xl font-bold font-sans flex items-center gap-1"><Server className="w-6 h-6"/> vodafone</span>
        </div>
      </motion.div>
    </section>
  );
}