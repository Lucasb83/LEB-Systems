"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Lock, Activity, GitBranch } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const pillars = [
  {
    icon: <Lock className="w-4 h-4 text-[#FF4F27]" />,
    title: "Security first",
    desc: "Zero-trust networking, encrypted secret stores, RBAC, SSO/SAML, and compliance-ready audit logs.",
  },
  {
    icon: <Activity className="w-4 h-4 text-[#FF4F27]" />,
    title: "Always on",
    desc: "99.9% uptime SLA backed by multi-region failover, automated health checks, and 24/7 incident response.",
  },
  {
    icon: <GitBranch className="w-4 h-4 text-[#FF4F27]" />,
    title: "Full observability",
    desc: "Real-time alerts, log streaming to your SIEM, usage dashboards, and workflow performance analytics.",
  },
];

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
            <span className="text-xs text-slate-300 font-medium">Enterprise-ready</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Reliable. Secure.<br />Built to scale.
          </h2>
          <p className="text-slate-400 mb-8 text-lg font-light leading-relaxed">
            From zero-trust infrastructure to 24/7 monitoring — we build systems your business can
            depend on. Whether you need a startup MVP or enterprise-grade resilience, we've got you covered.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="/solutions"
              className="flex items-center gap-2 px-6 py-3 bg-[#23242D] border border-white/10 hover:border-[#FF4F27]/40 text-white text-sm font-medium rounded-lg transition-colors group"
            >
              Explore enterprise plans
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-colors border border-transparent hover:border-white/10"
            >
              Talk to us
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
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4F27]/20 to-[#9333EA]/10 mix-blend-overlay z-10 pointer-events-none" />
            {/* Glassmorphism stat overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-[#0e0918]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">99.9%</span>
                <span className="text-xs text-slate-400">Uptime SLA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">&lt;1h</span>
                <span className="text-xs text-slate-400">Incident response</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#FF4F27]">24/7</span>
                <span className="text-xs text-slate-400">Monitoring</span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
              alt="Enterprise Server Infrastructure"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
