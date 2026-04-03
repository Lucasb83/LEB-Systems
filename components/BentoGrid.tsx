"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot, Server, Layers, Activity, Check, ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function BentoGrid() {
  return (
    <section className="py-20 px-6 relative z-10">
      {/* Section header */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1200px] mx-auto mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Four programs. One transformation.
        </h2>
        <p className="text-xl text-slate-400 font-light">AI, Cloud, Platform, and Infrastructure — delivered as multi-month programs, not one-off projects.</p>
      </motion.div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">

        {/* Card 1 – Booking & Reservations (8 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-8 bg-[#1E293B] border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:border-white/10 hover:shadow-[0_0_50px_rgba(6,182,212,0.12)] transition-all duration-500 cursor-default"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#06B6D4]/8 blur-[90px] pointer-events-none rounded-full group-hover:bg-[#06B6D4]/15 transition-all duration-700" />
          <div className="flex-1 z-10 flex flex-col justify-center">
            <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/15 border border-[#06B6D4]/20 flex items-center justify-center mb-5">
              <Bot className="w-5 h-5 text-[#06B6D4]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
              AI Automation Systems
            </h3>
            <p className="text-slate-400 mb-5 text-sm leading-relaxed font-light">
              Replace manual operations with intelligent AI agents. Your team focuses on strategy while automation handles the repetitive work — 24/7, at scale.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-7">
              {["Workflow automation & orchestration", "AI agent deployment", "Human-in-the-loop controls", "24/7 autonomous operation"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#06B6D4] flex-shrink-0" /> {f}
                </div>
              ))}
            </div>
            <a href="/solutions#ai-automation" className="inline-flex items-center gap-2 text-sm text-white font-medium px-5 py-2.5 bg-[#1E293B] border border-white/10 group-hover:border-[#06B6D4]/40 rounded-lg transition-colors w-fit">
              Explore program <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center z-10">
            <div className="w-full max-w-xs bg-[#0F172A] border border-white/5 rounded-2xl p-5 shadow-2xl group-hover:border-white/15 transition-colors">
              <div className="text-xs text-slate-500 font-mono mb-4 flex items-center gap-2">
                <Activity className="w-3 h-3" /> Agent activity
              </div>
              <div className="space-y-2.5">
                {[
                  { task: "Invoice classification agent", status: "complete" },
                  { task: "Data extraction pipeline",     status: "complete" },
                  { task: "Customer routing agent",        status: "active" },
                ].map((a) => (
                  <div key={a.task} className="flex items-center justify-between bg-[#243347] p-2.5 rounded-lg border border-white/5">
                    <span className="text-xs text-slate-300">{a.task}</span>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${a.status === "active" ? "bg-[#06B6D4] shadow-[0_0_6px_#06B6D4]" : "bg-emerald-500 shadow-[0_0_6px_#10b981]"}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 – Order & Menu App (4 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-4 bg-[#1E293B] border border-white/5 rounded-3xl p-10 relative group hover:border-white/10 hover:shadow-[0_0_50px_rgba(147,51,234,0.12)] transition-all duration-500 flex flex-col cursor-default overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9333EA]/8 blur-[80px] pointer-events-none rounded-full group-hover:bg-[#9333EA]/15 transition-all duration-700" />
          <div className="w-10 h-10 rounded-xl bg-[#9333EA]/15 border border-[#9333EA]/20 flex items-center justify-center mb-5">
            <Server className="w-5 h-5 text-[#9333EA]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">
            Cloud Modernisation
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
            Migrate legacy workloads to scalable cloud-native architecture — without disrupting live operations. Zero-downtime cutover strategy included.
          </p>
          <div className="space-y-3 mt-auto z-10">
            <div className="bg-[#243347] border border-white/5 rounded-xl p-3.5 text-xs text-slate-300 flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-slate-500" />
              Legacy on-prem — migrating...
            </div>
            <div className="bg-[#2A1A2E] border border-[#9333EA]/20 rounded-xl p-3.5 text-xs text-slate-200 relative">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-7 bg-[#9333EA] rounded-full group-hover:shadow-[0_0_10px_#9333EA] transition-shadow" />
              Cloud-native — 74% complete
            </div>
          </div>
        </motion.div>

        {/* Card 3 – Client Portal & CRM (6 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-6 bg-[#1E293B] border border-white/5 rounded-3xl p-10 relative group hover:border-white/10 hover:shadow-[0_0_50px_rgba(236,72,153,0.12)] transition-all duration-500 flex flex-col cursor-default overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#EC4899]/8 blur-[80px] pointer-events-none rounded-full group-hover:bg-[#EC4899]/15 transition-all duration-700" />
          <div className="w-10 h-10 rounded-xl bg-[#EC4899]/15 border border-[#EC4899]/20 flex items-center justify-center mb-5">
            <Layers className="w-5 h-5 text-[#EC4899]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Platform Engineering</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-7 font-light">
            Build the internal developer platform that reduces cognitive load and lets your engineering team ship 3× faster. Golden paths, self-service infrastructure, standardised CI/CD.
          </p>
          <div className="grid grid-cols-2 gap-2 z-10">
            {["Internal developer portal", "CI/CD standardisation", "Self-service infrastructure", "Developer experience metrics"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-[#EC4899] flex-shrink-0" /> {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 4 – Inventory & Sales Dashboard (6 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-6 bg-[#1E293B] border border-white/5 rounded-3xl p-10 relative group hover:border-white/10 hover:shadow-[0_0_50px_rgba(16,185,129,0.12)] transition-all duration-500 flex flex-col cursor-default overflow-hidden"
        >
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#10B981]/8 blur-[80px] pointer-events-none rounded-full group-hover:bg-[#10B981]/15 transition-all duration-700" />
          <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 border border-[#10B981]/20 flex items-center justify-center mb-5">
            <Activity className="w-5 h-5 text-[#10B981]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Continuous Infrastructure</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-7 font-light">
            Infrastructure that monitors, heals, and scales itself. 99.9% uptime SLA with full observability, automated remediation, and 24/7 alerting.
          </p>
          <div className="grid grid-cols-2 gap-2 z-10">
            {["99.9% uptime SLA", "Proactive alerting & runbooks", "Automated remediation", "Real-time dashboards"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" /> {f}
              </div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
