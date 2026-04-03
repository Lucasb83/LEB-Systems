"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Zap, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const pillars = [
  {
    icon: <Zap className="w-4 h-4 text-[#06B6D4]" />,
    title: "AU/NZ timezone, enterprise standards",
    desc: "We operate in your timezone with enterprise security, compliance, and delivery standards built in from day one.",
  },
  {
    icon: <Check className="w-4 h-4 text-[#06B6D4]" />,
    title: "Measurable outcomes agreed upfront",
    desc: "KPIs are defined before we write a line of code. If we don't hit the targets, we keep working until we do.",
  },
  {
    icon: <Shield className="w-4 h-4 text-[#06B6D4]" />,
    title: "Full IP and capability transfer",
    desc: "You receive source code, infrastructure config, runbooks, and trained team at handover. No dependency on us to operate.",
  },
];

const trustStats = [
  { value: "4", label: "Transformation pillars" },
  { value: "90d", label: "First outcomes" },
  { value: "99.9%", label: "Uptime SLA" },
];

const tags = ["AI Automation", "Cloud Modernisation", "Platform Engineering"];

export default function ReliableSection() {
  return (
    <section className="py-20 px-6 relative z-10">
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center"
      >
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
            <Shield className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-xs text-slate-300 font-medium">AU/NZ transformation partner</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Partner-grade. Outcome-focused.<br />No lock-in.
          </h2>
          <p className="text-slate-400 mb-8 text-lg font-light leading-relaxed">
            We embed as your transformation partner — not a vendor. We&apos;re accountable to KPIs agreed
            before kickoff, and you own everything we build.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-[#1E293B] border border-white/10 hover:border-[#06B6D4]/40 text-white text-sm font-medium rounded-lg transition-colors group"
            >
              Book strategy session
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/method"
              className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-colors border border-transparent hover:border-white/10"
            >
              View our method
            </a>
          </div>

          <div className="space-y-8 border-l-2 border-white/8 pl-6">
            {pillars.map((p) => (
              <div key={p.title}>
                <div className="flex items-center gap-2 mb-1.5">
                  {p.icon}
                  <h4 className="text-white font-semibold text-sm">{p.title}</h4>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-[#1E293B] p-8 flex flex-col gap-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#06B6D4]/10 to-[#9333EA]/5 pointer-events-none" />

            {/* LEB Systems partner card */}
            <div className="relative z-10 flex items-center gap-4 p-5 bg-[#243347] border border-white/5 rounded-2xl">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #06B6D4, #0891B2)" }}
              >
                L
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold">LEB Systems</p>
                <p className="text-xs text-slate-400">AU/NZ · B2B Transformation</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]" />
                  <p className="text-xs text-emerald-400">Accepting new programs Q2 2026</p>
                </div>
              </div>
            </div>

            {/* Bullet tags */}
            <div className="relative z-10 flex flex-wrap gap-2 px-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-300 bg-[#243347] border border-white/5 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Trust stats */}
            <div className="relative z-10 grid grid-cols-3 gap-4">
              {trustStats.map((s) => (
                <div key={s.label} className="flex flex-col items-center bg-[#0F172A]/80 border border-white/5 rounded-2xl p-4">
                  <span className="text-2xl font-bold text-white">{s.value}</span>
                  <span className="text-xs text-slate-400 text-center mt-1">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="relative z-10 p-5 bg-[#243347] border border-white/5 rounded-2xl">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                &quot;LEB migrated our entire data pipeline to event-driven architecture in 11 weeks. We now handle 40&times; more volume at half the infrastructure cost.&quot;
              </p>
              <p className="text-xs text-slate-500 mt-3">— James T., CTO — AU SaaS Platform</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
