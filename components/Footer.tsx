"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// =========================================
// ELECTRIC FLOWER OF LIFE MINI (For Branding)
// =========================================
const MiniFlowerBranding: React.FC = () => {
  const r = 20; 
  const sqrt3 = Math.sqrt(3);
  const centers = [
    [0, 0], 
    [0, -2], [0, 2], [sqrt3, -1], [sqrt3, 1], [-sqrt3, -1], [-sqrt3, 1], 
    [0, -4], [0, 4], [sqrt3, -3], [sqrt3, 3], [-sqrt3, -3], [-sqrt3, 3], 
    [2*sqrt3, -2], [2*sqrt3, 0], [2*sqrt3, 2], [-2*sqrt3, -2], [-2*sqrt3, 0], [-2*sqrt3, 2] 
  ];

  return (
    <div className="w-10 h-10 border border-white/10 rounded-full bg-[#1A1A1E] flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.3)] relative overflow-hidden">
      <svg viewBox="-90 -90 180 180" className="w-[140%] h-[140%] relative z-10">
        <defs>
          <linearGradient id="footer-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="footer-electric-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
          </radialGradient>
        </defs>
        {centers.map((pos, i) => (
          <circle key={`f-circle-${i}`} cx={pos[0] * r} cy={pos[1] * r} r={r} fill="none" stroke="url(#footer-line-grad)" strokeWidth="1.5" />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <circle key={`f-glow-${i}`} r={2} fill="url(#footer-electric-glow)">
            <animateMotion dur={`${2 + (i % 3)}s`} repeatCount="Infinity" path={`M ${(i * 11) % 100 - 50} ${(i * 13) % 100 - 50} h ${(i % 2 === 0 ? 1 : -1) * 20} v ${(i % 3 === 0 ? 1 : -1) * 20} Z`} />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });

  // Sunrise Glow Effect
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.3]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.8]);

  return (
    <section ref={containerRef} className="relative pt-40 pb-12 px-6 z-10 overflow-hidden mt-10">
      
      {/* MASSIVE SUNRISE GLOW (ORANGE/RED) */}
      <motion.div 
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1500px] h-[1000px] pointer-events-none origin-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF4F27]/50 via-[#FF6B00]/10 to-transparent blur-[100px] rounded-[100%]"></div>
      </motion.div>

      <div className="relative z-20 max-w-3xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
          Simple enough to see.<br/>Powerful enough to ship.
        </h2>
        <p className="text-slate-300 mb-10 text-lg font-light">Join the teams building IT automation they can actually explain.</p>
        <a href="/portal" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FF4F27] hover:bg-[#FF6B00] text-white font-medium rounded-md transition-colors shadow-[0_0_30px_rgba(255,79,39,0.4)]">
          Start building
        </a>
      </div>

      <div className="max-w-[1200px] mx-auto bg-[#1A1A1E] border border-white/5 rounded-[2rem] p-10 md:p-16 relative overflow-hidden z-20 shadow-2xl backdrop-blur-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF4F27]/50 to-transparent opacity-50"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            
            {/* FOOTER LOGO BRANDING */}
            <a href="/" className="flex items-center gap-3 mb-6">
              <MiniFlowerBranding />
              <span className="text-white font-semibold text-xl tracking-tight">LEB Systems</span>
            </a>
            
            <p className="text-slate-200 text-sm font-medium mb-6">Automate without limits</p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-[#FF4F27] transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="#" className="hover:text-[#FF4F27] transition-colors"><svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg></a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div><h4 className="text-white font-medium mb-6 text-sm">Company</h4><ul className="space-y-3"><li><a href="#" className="text-[13px] text-slate-400 hover:text-white">Contact</a></li><li><a href="#" className="text-[13px] text-slate-400 hover:text-white">Legal</a></li></ul></div>
            <div><ul className="space-y-3 mt-11"><li><a href="#" className="text-[13px] text-slate-400 hover:text-white">Case Studies</a></li><li><a href="#" className="text-[13px] text-slate-400 hover:text-white">Tools</a></li></ul></div>
            <div><ul className="space-y-3 mt-11"><li><a href="#" className="text-[13px] text-slate-400 hover:text-white">Partners</a></li><li><a href="#" className="text-[13px] text-slate-400 hover:text-white">Events</a></li></ul></div>
          </div>
        </div>

        <hr className="border-white/5 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[13px] text-slate-300 space-x-4">
            <a href="#" className="hover:text-white">Imprint</a> | <a href="#" className="hover:text-white">Security</a> | <a href="#" className="hover:text-white">Privacy</a>
          </div>
          <div className="text-[13px] text-slate-400">© {new Date().getFullYear()} LEB Systems | All rights reserved.</div>
        </div>
      </div>
    </section>
  );
}