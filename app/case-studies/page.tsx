"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Bot, Server, Layers, Activity, ArrowRight, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const caseStudies = [
  {
    color: "#06B6D4",
    icon: <Bot className="w-5 h-5 text-[#06B6D4]" />,
    category: "AI Automation",
    company: "AU Logistics Group",
    headline: "22 hours per week eliminated. ROI positive in 90 days.",
    challenge:
      "The operations team was manually classifying 800+ freight documents per day across 4 systems. Errors caused costly re-routing and compliance breaches.",
    solution:
      "Built an AI document classification agent using LangChain + OpenAI fine-tuned on their freight data. Integrated into existing TMS via API with human-in-the-loop controls for edge cases.",
    outcomes: [
      "22 hrs/week reclaimed",
      "99.2% classification accuracy",
      "90-day positive ROI",
      "8 weeks to delivery",
    ],
    tools: ["LangChain", "OpenAI", "n8n", "PostgreSQL", "Docker"],
  },
  {
    color: "#9333EA",
    icon: <Server className="w-5 h-5 text-[#9333EA]" />,
    category: "Cloud Modernisation",
    company: "AU SaaS Platform",
    headline: "40× pipeline throughput. 50% infrastructure cost reduction.",
    challenge:
      "A monolithic Python data pipeline couldn't scale past 10,000 events/hour. Costs were rising 40% quarter-on-quarter and the team was spending 30% of their time on infrastructure fires.",
    solution:
      "Redesigned to event-driven architecture using Kafka + Kubernetes on AWS. Infrastructure-as-code with Terraform. Zero-downtime migration over 11 weeks.",
    outcomes: [
      "40× throughput increase",
      "50% cost reduction",
      "Zero downtime migration",
      "11 weeks to delivery",
    ],
    tools: ["AWS", "Kafka", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    color: "#EC4899",
    icon: <Layers className="w-5 h-5 text-[#EC4899]" />,
    category: "Platform Engineering",
    company: "NZ FinTech",
    headline: "Deployment lead time: 3 days → 90 minutes.",
    challenge:
      "8 engineering teams with inconsistent CI/CD pipelines, no internal tooling standard, and a deployment process requiring 3 days and 2 senior engineers per release.",
    solution:
      "Designed and built an internal developer platform on Backstage. Standardised CI/CD with GitHub Actions + ArgoCD. Self-service infrastructure templates for all teams.",
    outcomes: [
      "3 days → 90 min deployments",
      "Dev satisfaction 3.1 → 4.6 / 5",
      "8 teams onboarded",
      "14 weeks to delivery",
    ],
    tools: ["GitHub Actions", "ArgoCD", "Backstage", "Kubernetes", "Helm"],
  },
  {
    color: "#10B981",
    icon: <Activity className="w-5 h-5 text-[#10B981]" />,
    category: "Continuous Infrastructure",
    company: "NZ Enterprise",
    headline: "99.94% uptime. MTTD: 45 minutes → 3 minutes.",
    challenge:
      "The platform was averaging 94.2% uptime with reactive incident response. Engineers spent 40% of their time on incidents instead of shipping features.",
    solution:
      "Deployed a full observability stack (Datadog + PagerDuty). Automated remediation runbooks for top 12 incident types. SLO/SLA dashboards for leadership.",
    outcomes: [
      "94.2% → 99.94% uptime",
      "MTTD: 45min → 3min",
      "MTTR: 4hr → 18min",
      "16 weeks to delivery",
    ],
    tools: ["Datadog", "Terraform", "AWS", "PagerDuty", "Kubernetes"],
  },
];

export default function CaseStudiesPage() {
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
            <TrendingUp className="w-3.5 h-3.5 text-[#06B6D4]" />
            Real programs. Real AU/NZ businesses.
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Transformation outcomes that speak for themselves.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            Four enterprise engagements. Measurable results.
          </p>
        </motion.div>
      </section>

      {/* Section 2 — Case study cards */}
      <section className="py-8 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#1E293B] border border-white/5 rounded-3xl p-10 relative overflow-hidden group hover:border-white/10 hover:shadow-[0_0_50px_rgba(6,182,212,0.12)] transition-all duration-500"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-60"
                style={{ background: `linear-gradient(to right, ${cs.color}, transparent)` }}
              />

              <div className="flex flex-col md:flex-row gap-8">
                {/* Left column */}
                <div className="flex-1">
                  {/* Category + icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{ background: `${cs.color}26`, borderColor: `${cs.color}33` }}
                    >
                      {cs.icon}
                    </div>
                    <span
                      className="inline-flex px-3 py-1 rounded-full text-xs border font-medium"
                      style={{ background: `${cs.color}1a`, borderColor: `${cs.color}33`, color: cs.color }}
                    >
                      {cs.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">
                    {cs.company}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-5 leading-tight">{cs.headline}</h2>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">
                        Challenge
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">
                        Solution
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="md:w-72 flex flex-col gap-6">
                  {/* Outcome pills */}
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">
                      Outcomes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cs.outcomes.map((outcome) => (
                        <span
                          key={outcome}
                          className="px-3 py-1.5 rounded-full text-xs font-medium border"
                          style={{ background: `${cs.color}1a`, borderColor: `${cs.color}33`, color: cs.color }}
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tool tags */}
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">
                      Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cs.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 text-xs text-slate-500 bg-white/5 border border-white/5 rounded-lg"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3 — Bottom CTA */}
      <section className="text-center py-16 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1200px] mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to write your own case study?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Book a strategy session. We'll map your current state and identify the highest-leverage transformation opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] group"
            >
              Book Strategy Session
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/method"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:border-white/30 text-white font-medium rounded-lg transition-all hover:bg-white/5 group"
            >
              Explore our method
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
