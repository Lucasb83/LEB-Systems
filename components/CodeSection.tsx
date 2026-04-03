"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Check, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const features = [
  {
    title: "Outcomes agreed before we write code",
    desc: "",
  },
  {
    title: "Fortnightly delivery to production",
    desc: "",
  },
  {
    title: "Full capability transfer at handover",
    desc: "",
  },
  {
    title: "Continuous improvement retainer available",
    desc: "",
  },
];

export default function CodeSection() {
  return (
    <section className="py-12 px-6 relative z-10">
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1200px] mx-auto bg-gradient-to-br from-[#06B6D4]/20 via-[#243347] to-[#1E293B] border border-[#06B6D4]/20 rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-2xl"
      >
        {/* Warm glow */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-[#06B6D4]/25 to-transparent blur-[120px] pointer-events-none -translate-x-1/4 -translate-y-1/4" />

        <div className="flex-1 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-full mb-6">
            <Layers className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span className="text-xs text-[#10B981] font-medium">The LEB Method</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            From current state to transformed operations — in five structured phases.
          </h2>
          <p className="text-slate-300 mb-10 text-base leading-relaxed max-w-lg font-light">
            Our five-phase method replaces big-bang delivery with iterative, outcome-anchored programs.
            You see working systems every two weeks — not a handover at the end.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-10">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-4">
                <Check className="w-5 h-5 text-[#06B6D4] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white font-semibold">{f.title}</strong>
                </p>
              </li>
            ))}
          </ul>
          <a
            href="/method"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] group"
          >
            See the Method <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Visual: App build pipeline */}
        <div className="flex-1 z-10 w-full flex justify-center lg:justify-end">
          <div className="bg-[#0F172A] border border-white/5 rounded-3xl p-8 flex flex-col gap-4 shadow-2xl w-full max-w-sm">
            <div className="text-xs text-slate-500 font-mono mb-2">Build pipeline — your program</div>
            {[
              { label: "Discovery & Audit", color: "emerald", status: "complete" },
              { label: "Architecture Design", color: "emerald", status: "complete" },
              { label: "Iterative Build", color: "orange", status: "active" },
              { label: "Validate & Optimise", color: "slate", status: "pending" },
            ].map((step, i) => (
              <div
                key={step.label}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  step.status === "active"
                    ? "border-[#06B6D4]/30 bg-[#06B6D4]/8"
                    : step.status === "complete"
                    ? "border-emerald-500/20 bg-emerald-500/5"
                    : "border-white/5 bg-[#243347]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                    step.status === "complete" ? "bg-emerald-500 text-white" :
                    step.status === "active" ? "bg-[#06B6D4] text-white shadow-[0_0_8px_#06B6D4]" :
                    "bg-[#1E293B] text-slate-500"
                  }`}>{i + 1}</div>
                  <span className="text-sm text-slate-300">{step.label}</span>
                </div>
                {step.status === "active" && (
                  <div className="flex gap-1">
                    {[0, 0.2, 0.4].map((d) => (
                      <motion.div
                        key={d}
                        className="w-1 h-1 rounded-full bg-[#06B6D4]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d }}
                      />
                    ))}
                  </div>
                )}
                {step.status === "complete" && <Check className="w-3.5 h-3.5 text-emerald-500" />}
              </div>
            ))}
            <div className="mt-2 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
              <span>Engagement start</span>
              <span className="text-[#06B6D4] font-semibold">Within 2 weeks</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
