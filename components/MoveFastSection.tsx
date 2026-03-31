"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const features = [
  { title: "No-code workflow builder", desc: "Deploy automations without writing a single line" },
  { title: "400+ integrations ready", desc: "Connect your entire tool stack instantly" },
  { title: "Realtime & scheduled triggers", desc: "React to events or run on a fixed cadence" },
  { title: "Live performance dashboards", desc: "Monitor every automation with full observability" },
];

const stats = [
  { value: "400+", label: "Integrations" },
  { value: "3×", label: "Faster deployment" },
  { value: "80%", label: "Less manual work" },
];

export default function MoveFastSection() {
  return (
    <section className="py-12 px-6 relative z-10">
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1200px] mx-auto bg-[#14151A] border border-white/5 rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative"
      >
        {/* Animated circuit lines background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 800 500" fill="none" preserveAspectRatio="xMidYMid slice">
            <path d="M0 250 H200 L250 200 H400" stroke="#9333EA" strokeWidth="1.5" />
            <path d="M0 280 H180 L220 320 H400" stroke="#9333EA" strokeWidth="1.5" />
            <path d="M800 250 H600 L550 300 H400" stroke="#FF4F27" strokeWidth="1.5" />
            <path d="M800 220 H620 L580 180 H400" stroke="#FF4F27" strokeWidth="1.5" />
            <circle cx="400" cy="250" r="4" fill="#9333EA" />
            <circle cx="400" cy="250" r="8" fill="none" stroke="#9333EA" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
        </div>

        <div className="flex-1 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#9333EA]/10 border border-[#9333EA]/20 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5 text-[#9333EA]" />
            <span className="text-xs text-purple-300 font-medium">Process Automation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Automate. Accelerate.<br />Dominate.
          </h2>
          <p className="text-slate-400 mb-10 text-base leading-relaxed font-light max-w-md">
            Replace manual bottlenecks with intelligent workflows that run 24/7 — so your team
            focuses on strategy, not repetition.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#9333EA] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white font-medium">{f.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#23242D] border border-white/10 hover:border-[#9333EA]/50 text-white text-sm font-medium rounded-lg transition-colors group"
          >
            Explore automation solutions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Stats visual */}
        <div className="flex-1 z-10 flex justify-center lg:justify-end">
          <div className="flex flex-col items-center gap-5">
            {/* Orbital rings */}
            <div className="relative flex items-center justify-center w-56 h-56">
              <div className="absolute inset-0 border border-slate-700/60 rounded-full" />
              <div className="absolute inset-5 border border-slate-600/50 rounded-full" />
              <div className="absolute inset-10 border-2 border-[#9333EA]/30 rounded-full shadow-[0_0_30px_rgba(147,51,234,0.3)]" />
              <div className="absolute inset-14 bg-gradient-to-br from-[#1A1A2E] to-[#14151A] rounded-full shadow-2xl flex items-center justify-center z-10 border border-white/10">
                <Zap className="w-8 h-8 text-[#9333EA]" />
              </div>
              {/* Orbiting dot */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-[#FF4F27] shadow-[0_0_10px_#FF4F27]"
                style={{ top: "50%", left: "50%", marginTop: "-6px", marginLeft: "-6px", originX: "6px", originY: "6px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                // position it on the orbit ring radius ~90px
              >
                <div style={{ position: "absolute", top: "-84px", left: "-4.5px", width: "12px", height: "12px", borderRadius: "50%" }} />
              </motion.div>
            </div>

            {/* Stats pills */}
            <div className="flex gap-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center bg-[#1A1A1E] border border-white/5 rounded-2xl px-5 py-4">
                  <span className="text-2xl font-bold text-white">{s.value}</span>
                  <span className="text-xs text-slate-500 mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
