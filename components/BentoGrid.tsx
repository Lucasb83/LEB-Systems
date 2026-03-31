"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Server, Globe, Bot, Zap, Code2, Check,
  ArrowRight, Activity, Shield, Database,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
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
          Everything your business needs to grow
        </h2>
        <p className="text-xl text-slate-400 font-light">Five pillars. One partner.</p>
      </motion.div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">

        {/* Card 1 – Infrastructure Development (8 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-8 bg-[#14151A] border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:border-white/10 hover:shadow-[0_0_50px_rgba(255,79,39,0.12)] transition-all duration-500 cursor-default"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4F27]/8 blur-[90px] pointer-events-none rounded-full group-hover:bg-[#FF4F27]/15 transition-all duration-700" />
          <div className="flex-1 z-10 flex flex-col justify-center">
            <div className="w-10 h-10 rounded-xl bg-[#FF4F27]/15 border border-[#FF4F27]/20 flex items-center justify-center mb-5">
              <Server className="w-5 h-5 text-[#FF4F27]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
              Infrastructure that scales<br />with your ambition
            </h3>
            <p className="text-slate-400 mb-7 text-sm leading-relaxed font-light">
              Multi-region, cloud-native or on-prem — we architect resilient systems with Kubernetes,
              Docker, zero-trust networking, and full CI/CD pipelines. No lock-in, full control.
            </p>
            <a href="/services#infrastructure" className="inline-flex items-center gap-2 text-sm text-white font-medium px-5 py-2.5 bg-[#23242D] border border-white/10 group-hover:border-[#FF4F27]/40 rounded-lg transition-colors w-fit">
              Explore Infrastructure <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center z-10">
            <div className="w-full max-w-xs bg-[#0e0918] border border-white/5 rounded-2xl p-5 shadow-2xl group-hover:border-white/15 transition-colors">
              <div className="text-xs text-slate-500 font-mono mb-4 flex items-center gap-2">
                <Activity className="w-3 h-3" /> Cluster status — live
              </div>
              <div className="space-y-2.5">
                {[
                  { label: "Load Balancer", icon: <Server className="w-3.5 h-3.5" /> },
                  { label: "Zero-Trust Auth", icon: <Shield className="w-3.5 h-3.5" /> },
                  { label: "PostgreSQL Primary", icon: <Database className="w-3.5 h-3.5" /> },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-[#1A1A1E] p-2.5 rounded-lg border border-white/5">
                    <div className="flex items-center gap-2.5 text-slate-300">
                      {item.icon}
                      <span className="text-xs">{item.label}</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 – Web Design (4 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-4 bg-[#14151A] border border-white/5 rounded-3xl p-10 relative group hover:border-white/10 hover:shadow-[0_0_50px_rgba(147,51,234,0.12)] transition-all duration-500 flex flex-col cursor-default overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9333EA]/8 blur-[80px] pointer-events-none rounded-full group-hover:bg-[#9333EA]/15 transition-all duration-700" />
          <div className="w-10 h-10 rounded-xl bg-[#9333EA]/15 border border-[#9333EA]/20 flex items-center justify-center mb-5">
            <Globe className="w-5 h-5 text-[#9333EA]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">
            Web Design that converts
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
            Fast, modern, and beautiful. We craft digital experiences optimised for performance,
            SEO, and conversions — built to impress on every screen.
          </p>
          <div className="space-y-3 mt-auto z-10">
            <div className="bg-[#1A1A1E] border border-white/5 rounded-xl p-3.5 text-xs text-slate-300 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Lighthouse score: 98/100
            </div>
            <div className="bg-[#2A1A2E] border border-[#9333EA]/20 rounded-xl p-3.5 text-xs text-slate-200 relative">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-7 bg-[#9333EA] rounded-full group-hover:shadow-[0_0_10px_#9333EA] transition-shadow" />
              +42% conversion rate
            </div>
          </div>
        </motion.div>

        {/* Card 3 – AI Implementation (6 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-6 bg-[#14151A] border border-white/5 rounded-3xl p-10 relative group hover:border-white/10 hover:shadow-[0_0_50px_rgba(236,72,153,0.12)] transition-all duration-500 flex flex-col cursor-default overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#EC4899]/8 blur-[80px] pointer-events-none rounded-full group-hover:bg-[#EC4899]/15 transition-all duration-700" />
          <div className="w-10 h-10 rounded-xl bg-[#EC4899]/15 border border-[#EC4899]/20 flex items-center justify-center mb-5">
            <Bot className="w-5 h-5 text-[#EC4899]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">AI that understands your business</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-7 font-light">
            We deploy LLMs, build RAG knowledge pipelines, and create custom AI agents fine-tuned on your data —
            not generic models, but intelligence trained on what matters to you.
          </p>
          <div className="grid grid-cols-2 gap-2 z-10">
            {["LLM Fine-tuning", "RAG Pipelines", "AI Agents", "Real-time Insights"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-[#EC4899] flex-shrink-0" /> {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 4 – Process Automation (6 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-6 bg-[#14151A] border border-white/5 rounded-3xl p-10 relative group hover:border-white/10 hover:shadow-[0_0_50px_rgba(255,155,38,0.12)] transition-all duration-500 flex flex-col cursor-default overflow-hidden"
        >
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#FF9B26]/8 blur-[80px] pointer-events-none rounded-full group-hover:bg-[#FF9B26]/15 transition-all duration-700" />
          <div className="w-10 h-10 rounded-xl bg-[#FF9B26]/15 border border-[#FF9B26]/20 flex items-center justify-center mb-5">
            <Zap className="w-5 h-5 text-[#FF9B26]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Automate everything that repeats</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-7 font-light">
            Connect 400+ tools, eliminate manual bottlenecks, and run intelligent workflows 24/7.
            From email routing to full ERP integration — if it can be automated, we automate it.
          </p>
          <div className="grid grid-cols-2 gap-2 z-10">
            {["No-code workflows", "API integrations", "Scheduled triggers", "Live monitoring"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-[#FF9B26] flex-shrink-0" /> {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 5 – Custom Applications (12 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-12 bg-[#14151A] border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-12 group hover:border-white/10 hover:shadow-[0_0_50px_rgba(147,51,234,0.12)] transition-all duration-500 cursor-default overflow-hidden relative"
        >
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#9333EA]/6 blur-[120px] pointer-events-none rounded-full group-hover:bg-[#9333EA]/12 transition-all duration-700" />

          <div className="flex-1 w-full flex justify-center z-10">
            <div className="bg-[#0e0918] border border-white/10 rounded-2xl p-6 relative w-full max-w-xs group-hover:border-white/20 transition-colors">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#14151A] px-3 py-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest border border-white/5 rounded-full">
                Custom Build
              </div>
              <div className="space-y-3 mt-3">
                {["Backend API", "Admin Dashboard", "Mobile App", "AI Layer"].map((layer, i) => (
                  <div
                    key={layer}
                    className={`h-10 rounded-lg flex items-center px-4 border text-xs font-medium transition-all ${
                      i === 2
                        ? "border-[#9333EA]/40 bg-[#9333EA]/10 text-purple-200 shadow-[0_0_12px_rgba(147,51,234,0.15)]"
                        : "border-white/5 bg-[#1A1A1E] text-slate-400"
                    }`}
                  >
                    {i === 2 && <Check className="w-3.5 h-3.5 text-[#9333EA] mr-2" />}
                    {layer}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 z-10">
            <div className="w-10 h-10 rounded-xl bg-[#9333EA]/15 border border-[#9333EA]/20 flex items-center justify-center mb-5">
              <Code2 className="w-5 h-5 text-[#9333EA]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
              Software built exactly for you
            </h3>
            <p className="text-slate-400 mb-8 text-sm font-light leading-relaxed">
              No templates. No compromise. We engineer full-stack applications — from MVPs to enterprise platforms —
              tailored to your exact workflows, users, and scale requirements.
            </p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#9333EA] flex-shrink-0" /> Web, mobile, and desktop — cross-platform from day one</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#9333EA] flex-shrink-0" /> API-first architecture for seamless integrations</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#9333EA] flex-shrink-0" /> Full source code ownership — always yours</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
