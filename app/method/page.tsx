"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Search, Layers, Code2, Activity, TrendingUp, ArrowRight, GitBranch, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const phases = [
  {
    number: "01",
    timeline: "Weeks 1–2",
    icon: <Search className="w-5 h-5" />,
    color: "#06B6D4",
    title: "Discovery & Audit",
    desc: "We map your current state end-to-end. Infrastructure, tooling, team workflows, manual processes, and technical debt. The output is a Current State Report and an Opportunity Backlog — ranked by business impact.",
    deliverables: [
      "Current State Report",
      "Opportunity Backlog",
      "KPI framework draft",
      "Program scope & timeline",
    ],
  },
  {
    number: "02",
    timeline: "Weeks 2–4",
    icon: <Layers className="w-5 h-5" />,
    color: "#9333EA",
    title: "Architecture Design",
    desc: "We design the target architecture and get explicit sign-off before building. Every major decision is documented as an Architecture Decision Record (ADR). KPIs are finalised and baseline metrics captured.",
    deliverables: [
      "Target architecture diagram",
      "Architecture Decision Records",
      "Finalised KPI baseline",
      "Risk register & mitigation plan",
    ],
  },
  {
    number: "03",
    timeline: "Weeks 4–12",
    icon: <Code2 className="w-5 h-5" />,
    color: "#EC4899",
    title: "Iterative Build",
    desc: "Two-week sprints. Every sprint delivers working software to production — not a staging environment. You review progress fortnightly and can re-prioritise the backlog at any time.",
    deliverables: [
      "Fortnightly production deployments",
      "Sprint demos & retrospectives",
      "Updated backlog & priorities",
      "Stakeholder progress reports",
    ],
  },
  {
    number: "04",
    timeline: "Weeks 10–16",
    icon: <Activity className="w-5 h-5" />,
    color: "#10B981",
    title: "Validate & Optimise",
    desc: "We measure KPIs against baseline, identify optimisation opportunities, and deliver a Validation Report. If targets aren't met, we keep iterating — this phase doesn't close until the numbers are right.",
    deliverables: [
      "KPI validation report",
      "Performance benchmarks",
      "Optimisation backlog",
      "Go-live sign-off",
    ],
  },
  {
    number: "05",
    timeline: "Ongoing",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "gradient",
    title: "Continuous Improvement",
    desc: "Full capability transfer to your team: source code, infrastructure config, runbooks, and a training session. Optional retainer available for teams that want continued improvement cycles.",
    deliverables: [
      "Full codebase & infra handover",
      "Operations runbooks",
      "Team training sessions",
      "Optional improvement retainer",
    ],
  },
];

const whyCards = [
  {
    color: "#06B6D4",
    title: "Outcomes agreed before code",
    desc: "KPIs and success criteria are locked in during the Architecture Design phase. There's no ambiguity about what success looks like.",
  },
  {
    color: "#9333EA",
    title: "Fortnightly visibility",
    desc: "Stakeholders see working software in production every two weeks. No black boxes, no surprises at the 12-month mark.",
  },
  {
    color: "#10B981",
    title: "Transfer not dependency",
    desc: "The program ends with your team fully capable of operating and extending everything we built. We hand over skills, not just software.",
  },
];

export default function MethodPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium"
        >
          <GitBranch className="w-3.5 h-3.5 text-[#06B6D4]" />
          The LEB Method
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-tight"
        >
          Five phases. Zero big-bang releases. Continuous outcomes.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl text-slate-400 max-w-2xl mx-auto mt-4"
        >
          Every LEB Systems program follows the same five-phase method — designed to deliver working systems every two weeks, with KPIs agreed before we write a single line of code.
        </motion.p>
      </section>

      {/* Five phase cards */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#1E293B] border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start group hover:border-white/10 transition-all duration-500"
            >
              {/* Icon column */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                  style={
                    phase.color === "gradient"
                      ? { background: "linear-gradient(135deg, #06B6D418, #9333EA18)", borderColor: "#06B6D430", color: "#06B6D4" }
                      : { background: `${phase.color}18`, borderColor: `${phase.color}30`, color: phase.color }
                  }
                >
                  {phase.icon}
                </div>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full border"
                  style={
                    phase.color === "gradient"
                      ? { background: "#06B6D415", borderColor: "#06B6D430", color: "#06B6D4" }
                      : { background: `${phase.color}15`, borderColor: `${phase.color}30`, color: phase.color }
                  }
                >
                  {phase.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  <span className="text-xs text-slate-500 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                    {phase.timeline}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-5">{phase.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {phase.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Check
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={phase.color === "gradient" ? { color: "#06B6D4" } : { color: phase.color }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why this method */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-3xl font-bold text-white mb-10">Why this method works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#1E293B] border border-white/5 rounded-3xl p-8 group hover:border-white/10 transition-all duration-500 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `${card.color}18` }}
                />
                <div
                  className="w-2 h-8 rounded-full mb-5"
                  style={{ background: card.color }}
                />
                <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center py-16 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[1200px] mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to start your program?</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Book a strategy session — we'll walk you through how the method applies to your specific situation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] group"
          >
            Book Strategy Session
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
