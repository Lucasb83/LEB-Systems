"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Lock } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function MoveFastSection() {
  return (
    <section className="py-12 px-6 relative z-10">
      <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-[1200px] mx-auto bg-[#14151A] border border-white/5 rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
        
        {/* SVG Circuit Lines */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.25]">
           <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 400 400 L 200 400 L 150 350 H 0" stroke="#9333EA" strokeWidth="2" />
              <path d="M 400 400 L 250 350 L 200 350 H 0" stroke="#9333EA" strokeWidth="2" />
              <path d="M 400 400 L 280 500 L 200 500 H 0" stroke="#9333EA" strokeWidth="2" />
              <path d="M 400 400 L 320 550 L 250 550 L 200 600 H 0" stroke="#9333EA" strokeWidth="2" />
              <path d="M 400 400 L 600 400 L 650 450 H 800" stroke="#9333EA" strokeWidth="2" />
              <path d="M 400 400 L 550 300 L 600 300 H 800" stroke="#9333EA" strokeWidth="2" />
           </svg>
        </div>

        <div className="flex-1 z-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">Move fast. Break nothing.</h2>
          <p className="text-slate-400 mb-10 text-base leading-relaxed font-light max-w-md">Build with the short feedback loops that keep you in the flow.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 mb-12">
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-slate-300" /><p className="text-sm text-slate-400"><strong className="text-white">Re-run single steps</strong>, not your entire workflow</p></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-slate-300" /><p className="text-sm text-slate-400"><strong className="text-white">Replay or mock data</strong> to not wait for external systems</p></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-slate-300" /><p className="text-sm text-slate-400"><strong className="text-white">Avoid endless debugging</strong> with the logs view</p></div>
            <div className="flex items-start gap-3"><Check className="w-5 h-5 text-slate-300" /><p className="text-sm text-slate-400"><strong className="text-white">Evaluate natively</strong> to optimize performance</p></div>
          </div>
          <button className="px-6 py-3 bg-[#23242D] border border-white/10 hover:border-[#9333EA]/50 text-white text-sm font-medium rounded-lg transition-colors">
            See full product overview
          </button>
        </div>

        <div className="flex-1 z-10 flex justify-center lg:justify-end">
          <div className="relative flex items-center justify-center w-56 h-56">
            <div className="absolute inset-0 border border-slate-700 rounded-full"></div>
            <div className="absolute inset-5 border border-slate-600 rounded-full"></div>
            <div className="absolute inset-10 border-2 border-slate-500 rounded-full"></div>
            <div className="absolute inset-14 bg-gradient-to-br from-[#2A2B36] to-[#14151A] rounded-full shadow-2xl flex items-center justify-center z-10 border border-white/10">
              <Lock className="w-8 h-8 text-slate-300" />
            </div>
            <div className="absolute inset-12 rounded-full border-4 border-[#9333EA]/40 shadow-[0_0_40px_rgba(147,51,234,0.5)]"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}