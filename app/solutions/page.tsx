"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Bot, Server, Layers, Activity, Check, ArrowRight, GitBranch } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const programs = [
  {
    id: "ai-automation",
    color: "#06B6D4",
    icon: <Bot className="w-5 h-5 text-[#06B6D4]" />,
    title: "AI Automation Systems",
    desc: "Replace manual operations with intelligent AI agents. Your team focuses on strategy while automation handles the repetitive work — 24/7, at scale.",
    engagement: "Typical engagement: 8–16 weeks",
    deliverables: [
      "Workflow mapping & opportunity audit",
      "AI agent design and deployment",
      "Human-in-the-loop controls",
      "Monitoring, alerting & continuous tuning",
    ],
  },
  {
    id: "cloud",
    color: "#9333EA",
    icon: <Server className="w-5 h-5 text-[#9333EA]" />,
    title: "Cloud Modernisation",
    desc: "Migrate legacy workloads to scalable cloud-native architecture — without disrupting live operations. Zero-downtime cutover strategy included.",
    engagement: "Typical engagement: 12–24 weeks",
    deliverables: [
      "Infrastructure audit & cloud readiness assessment",
      "Architecture design & ADRs",
      "Phased migration with zero-downtime cutover",
      "Cost optimisation & rightsizing",
    ],
  },
  {
    id: "platform",
    color: "#EC4899",
    icon: <Layers className="w-5 h-5 text-[#EC4899]" />,
    title: "Platform Engineering",
    desc: "Build the internal developer platform that reduces cognitive load and lets your engineering team ship 3× faster. Golden paths, self-service infrastructure, standardised CI/CD.",
    engagement: "Typical engagement: 10–20 weeks",
    deliverables: [
      "Internal developer portal (Backstage)",
      "CI/CD standardisation & golden paths",
      "Self-service infrastructure provisioning",
      "Developer experience metrics & dashboards",
    ],
  },
  {
    id: "infrastructure",
    color: "#10B981",
    icon: <Activity className="w-5 h-5 text-[#10B981]" />,
    title: "Continuous Infrastructure",
    desc: "Infrastructure that monitors, heals, and scales itself. 99.9% uptime SLA with full observability, automated remediation, and 24/7 alerting.",
    engagement: "Typical engagement: 6–12 weeks",
    deliverables: [
      "Observability stack design & deployment",
      "Automated alerting & runbook creation",
      "Incident response automation",
      "99.9% uptime SLA with reporting",
    ],
  },
];

const whyCards = [
  {
    color: "#06B6D4",
    title: "AI-native from the start",
    desc: "We don't bolt on AI as an afterthought. Every architecture decision considers how AI and automation will evolve your operations.",
  },
  {
    color: "#9333EA",
    title: "One team, full stack",
    desc: "One team owns your entire transformation — from infrastructure to application to AI layer. No coordination overhead, no finger-pointing.",
  },
  {
    color: "#10B981",
    title: "KPIs before kickoff",
    desc: "We agree on measurable success criteria before writing a line of code. If we miss targets, we keep working until we hit them.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="text-center py-24 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
            <GitBranch className="w-3.5 h-3.5 text-[#06B6D4]" />
            Four transformation programs
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            The infrastructure your business runs on — rebuilt for what comes next.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            We partner with AU/NZ B2B companies through four multi-month transformation programs. Not one-off projects. Not IT support. Programs that compound.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] group"
            >
              Book Strategy Session
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Section 2 — Four program cards */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              id={program.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#1E293B] border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:border-white/10 hover:shadow-[0_0_50px_rgba(6,182,212,0.12)] transition-all duration-500"
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
                style={{ background: program.color }}
              />

              {/* Left content */}
              <div className="flex-1 pl-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border"
                  style={{
                    background: `${program.color}26`,
                    borderColor: `${program.color}33`,
                  }}
                >
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{program.desc}</p>
                <span
                  className="inline-flex px-3 py-1 rounded-full text-xs border"
                  style={{
                    background: `${program.color}1a`,
                    borderColor: `${program.color}33`,
                    color: program.color,
                  }}
                >
                  {program.engagement}
                </span>
              </div>

              {/* Right deliverables */}
              <div className="flex-1 md:border-l md:border-white/5 md:pl-8">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-4">
                  Deliverables
                </p>
                <ul className="space-y-3">
                  {program.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: program.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3 — Why LEB */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Why AU/NZ companies choose LEB
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {whyCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#1E293B] border border-white/5 rounded-3xl p-8 hover:border-white/10 hover:shadow-[0_0_50px_rgba(6,182,212,0.12)] transition-all duration-500"
                >
                  <div
                    className="w-2 h-2 rounded-full mb-5"
                    style={{ background: card.color }}
                  />
                  <h3 className="text-white font-bold mb-3">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Bottom CTA */}
      <section className="py-16 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center bg-[#1E293B]/50 rounded-3xl max-w-[1200px] mx-auto mb-20 py-16 px-6"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start your transformation?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Book a strategy session — we'll map your current state and outline a program proposal.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] group"
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
