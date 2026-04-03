"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Check, Zap, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const stats = [
  { value: "4", label: "Core programs" },
  { value: "90d", label: "First outcomes" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "AU/NZ", label: "Market focus" },
];

const values = [
  {
    color: "#06B6D4",
    title: "Outcomes before output",
    desc: "We agree on measurable success criteria before kickoff. Deliverables are defined by business impact, not feature lists.",
  },
  {
    color: "#9333EA",
    title: "Working systems in weeks",
    desc: "We ship to production every two weeks. No 6-month roadmap before your team sees value.",
  },
  {
    color: "#EC4899",
    title: "Full capability transfer",
    desc: "Your team leaves every engagement more capable. Runbooks, documentation, and training included.",
  },
  {
    color: "#10B981",
    title: "AU/NZ enterprise pace",
    desc: "We operate in your timezone with enterprise security standards and a delivery pace built for real organisations.",
  },
];

const techStack = [
  {
    color: "#06B6D4",
    category: "AI & Automation",
    items: ["OpenAI", "LangChain", "n8n", "Temporal", "Anthropic Claude"],
  },
  {
    color: "#9333EA",
    category: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "Kubernetes", "Terraform", "Docker"],
  },
  {
    color: "#EC4899",
    category: "Platform Engineering",
    items: ["GitHub Actions", "ArgoCD", "Backstage", "Helm", "Datadog"],
  },
  {
    color: "#10B981",
    category: "Observability",
    items: ["Datadog", "PagerDuty", "Grafana", "Prometheus", "CloudWatch"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="py-24 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
            <Shield className="w-3.5 h-3.5 text-[#06B6D4]" />
            AU/NZ B2B Transformation Partner
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            We exist to make transformation programs actually work.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            Most enterprise transformation fails not because of bad technology — but because of misaligned incentives, big-bang delivery, and vendors who aren&apos;t accountable to outcomes. We built LEB Systems to fix that.
          </p>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 2 — Two-column story */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16">
          {/* Left column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why we exist.</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                Enterprise transformation has a failure rate problem. Gartner estimates 70% of digital transformation projects fail to meet their objectives. The pattern is consistent: 12-month roadmaps, milestone-based delivery, and a handover that leaves the internal team unable to operate what was built.
              </p>
              <p>
                We built LEB Systems around a different model. Programs are scoped to outcomes — not outputs. We deliver working systems to production every two weeks. We define KPIs before we write code, and we stay accountable to them throughout the engagement.
              </p>
              <p>
                At handover, your team can operate, extend, and improve everything we built. No black boxes. No vendor dependency. Full capability transfer is a non-negotiable part of every program.
              </p>
            </div>
          </motion.div>

          {/* Right column — brand card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-[#1E293B] border border-white/5 rounded-3xl p-8">
              {/* Avatar + identity */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #06B6D4, #0891B2)" }}
                >
                  L
                </div>
                <div>
                  <p className="text-white font-bold text-xl">LEB Systems</p>
                  <p className="text-slate-400 text-sm">AU/NZ · B2B Transformation</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs text-emerald-400">Accepting new programs Q2 2026</span>
                  </div>
                </div>
              </div>

              {/* Value tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Outcomes before output", "Working systems in weeks", "Full capability transfer", "AU/NZ enterprise pace"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs text-slate-300 bg-white/5 border border-white/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote block */}
            <div className="mt-6 p-5 bg-[#0F172A] rounded-2xl border border-white/5">
              <p className="text-slate-300 text-sm italic leading-relaxed mb-3">
                &ldquo;LEB migrated our entire data pipeline to event-driven architecture in 11 weeks. We now handle 40× more volume at half the infrastructure cost.&rdquo;
              </p>
              <p className="text-xs text-slate-500">James T., CTO — AU SaaS Platform</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 — Values */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-10">How we work.</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="bg-[#1E293B] border border-white/5 rounded-3xl p-6 hover:border-white/10 hover:shadow-[0_0_50px_rgba(6,182,212,0.12)] transition-all duration-500"
                >
                  <div
                    className="w-2 h-2 rounded-full mb-4"
                    style={{ background: val.color }}
                  />
                  <h3 className="text-white font-bold mb-2 text-sm leading-snug">{val.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Tech stack */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-10">Our technology stack.</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {techStack.map((col) => (
                <div
                  key={col.category}
                  className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-500"
                >
                  <div
                    className="w-2 h-2 rounded-full mb-3"
                    style={{ background: col.color }}
                  />
                  <h4 className="text-white font-semibold text-sm mb-4">{col.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {col.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs text-slate-400 bg-white/5 border border-white/5 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 — Bottom CTA */}
      <section className="text-center py-16 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] group"
          >
            Book a strategy session
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
