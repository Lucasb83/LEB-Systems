"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2, ShoppingCart, HeartPulse, Factory, Lightbulb, TrendingUp,
  Check, ArrowRight, Zap, Bot, Server, Code2, Globe,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d * 0.1, ease: [0.16, 1, 0.3, 1] as const } }),
};

/* ─────────────────────────────── INDUSTRIES */
const industries = [
  {
    icon: <Building2 className="w-6 h-6" />,
    color: "#06B6D4",
    name: "Financial Services",
    desc: "Compliance-first infrastructure, real-time transaction pipelines, AI-powered risk scoring, and automation for KYC/AML workflows.",
    challenges: ["Regulatory compliance (SOC2, PCI-DSS)", "Real-time fraud detection", "Legacy system modernisation"],
    solutions: ["Zero-trust infrastructure", "AI risk models", "Automated compliance reporting"],
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    color: "#EC4899",
    name: "Healthcare",
    desc: "HIPAA-compliant platforms, patient portal development, AI diagnostics integration, and automation of administrative workflows.",
    challenges: ["HIPAA & data privacy", "Interoperability (HL7/FHIR)", "Staff administrative burden"],
    solutions: ["Secure cloud infrastructure", "EHR integrations", "RPA for admin workflows"],
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "#9333EA",
    name: "E-commerce & Retail",
    desc: "High-performance storefronts, inventory automation, personalised AI recommendations, and seamless omnichannel integration.",
    challenges: ["Peak traffic performance", "Inventory sync across channels", "Cart abandonment & conversions"],
    solutions: ["Scalable cloud architecture", "AI recommendation engine", "Conversion-optimised UI"],
  },
  {
    icon: <Factory className="w-6 h-6" />,
    color: "#10B981",
    name: "Manufacturing & Logistics",
    desc: "Supply chain visibility, predictive maintenance with AI, automated ERP integrations, and real-time IoT data pipelines.",
    challenges: ["Supply chain visibility", "Equipment downtime", "Manual data entry in ERPs"],
    solutions: ["IoT data pipelines", "Predictive AI models", "ERP automation bots"],
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    color: "#34d399",
    name: "Startups & Scale-ups",
    desc: "MVP development, rapid iteration, scalable architecture from day one, and AI-first product strategy to outpace incumbents.",
    challenges: ["Speed to market", "Infrastructure that scales", "AI differentiation"],
    solutions: ["Rapid MVP delivery", "Cloud-native from day 1", "Embedded AI features"],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    color: "#818cf8",
    name: "Professional Services",
    desc: "Client portal development, automated billing and reporting, AI-powered knowledge management, and workflow automation.",
    challenges: ["Billable hour tracking", "Document management", "Client communication overhead"],
    solutions: ["Custom client portals", "AI knowledge bases", "Automated invoicing & reports"],
  },
];

/* ─────────────────────────────── DIFFERENTIATORS */
const differentiators = [
  {
    icon: <Bot className="w-5 h-5 text-[#06B6D4]" />,
    title: "AI-native from day one",
    desc: "We don't bolt AI on at the end. Every solution is designed with intelligent automation at its core.",
  },
  {
    icon: <Server className="w-5 h-5 text-[#9333EA]" />,
    title: "Full-stack ownership",
    desc: "Infrastructure, application, AI, and automation — one team that owns the entire stack and eliminates integration risk.",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#10B981]" />,
    title: "Outcome-driven delivery",
    desc: "We measure success by your KPIs, not deliverables. Every decision traces back to business impact.",
  },
];

/* ─────────────────────────────── CASE STUDY TEASERS */
const caseStudies = [
  {
    industry: "Financial Services",
    headline: "90% reduction in manual compliance reporting",
    body: "We automated a regional bank's KYC and AML workflows, cutting 40 hours per week of manual analyst work and eliminating reporting errors.",
    tags: ["AI", "Automation", "Compliance"],
    color: "#06B6D4",
  },
  {
    industry: "E-commerce",
    headline: "3.2× conversion lift with AI personalisation",
    body: "A fashion retailer saw checkout conversions triple after we deployed a real-time product recommendation engine trained on their catalogue.",
    tags: ["AI", "Web Design", "Performance"],
    color: "#9333EA",
  },
  {
    industry: "Healthcare",
    headline: "HIPAA-compliant telehealth platform in 10 weeks",
    body: "From zero to live: a fully compliant patient portal with EHR integration, video consultations, and automated appointment workflows.",
    tags: ["Infrastructure", "Custom App", "Automation"],
    color: "#EC4899",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#06B6D4] blur-[180px] opacity-8 pointer-events-none" />

        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_6px_#06B6D4]" />
          Solutions by industry
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl leading-tight">
          Built for{" "}
          <span className="bg-gradient-to-r from-[#9333EA] via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent">
            every challenge.
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg text-slate-400 font-light max-w-2xl mb-10 leading-relaxed">
          The problems in financial services, healthcare, e-commerce, and manufacturing are different. Our solutions are too. We bring deep domain knowledge to every engagement.
        </motion.p>
      </section>

      {/* Industries grid */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div key={ind.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#1E293B] border border-white/5 rounded-3xl p-8 flex flex-col group hover:border-white/10 transition-all duration-500 relative overflow-hidden cursor-default"
              style={{ "--glow": ind.color } as React.CSSProperties}>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `${ind.color}18` }} />

              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border"
                style={{ background: `${ind.color}15`, borderColor: `${ind.color}25`, color: ind.color }}>
                {ind.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{ind.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light mb-6 flex-1">{ind.desc}</p>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-2">Common challenges</p>
                  <ul className="space-y-1.5">
                    {ind.challenges.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: ind.color }} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-2">Our solutions</p>
                  <ul className="space-y-1.5">
                    {ind.solutions.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3 h-3 flex-shrink-0" style={{ color: ind.color }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why LEB Systems */}
      <section className="py-24 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Why LEB Systems?</h2>
          <p className="text-slate-400 font-light text-lg max-w-2xl mx-auto">
            Other agencies specialise in one piece of the puzzle. We own the entire picture.
          </p>
        </motion.div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((d, i) => (
            <motion.div key={d.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#1E293B] border border-white/5 rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                {d.icon}
              </div>
              <h3 className="text-white font-bold mb-3">{d.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto mb-14 text-center">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Real results</h2>
          <p className="text-slate-400 font-light">What our clients have achieved working with LEB Systems.</p>
        </motion.div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.headline} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#1E293B] border border-white/5 rounded-3xl p-8 flex flex-col group hover:border-white/10 transition-all relative overflow-hidden cursor-default">
              <div className="absolute top-0 left-0 w-full h-1 opacity-50 rounded-t-3xl" style={{ background: `linear-gradient(to right, ${cs.color}, transparent)` }} />
              <span className="text-xs font-medium px-3 py-1 rounded-full border mb-5 self-start"
                style={{ color: cs.color, background: `${cs.color}15`, borderColor: `${cs.color}25` }}>
                {cs.industry}
              </span>
              <h3 className="text-white font-bold text-lg mb-3 leading-tight">{cs.headline}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light mb-6 flex-1">{cs.body}</p>
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-slate-400">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto bg-gradient-to-br from-[#9333EA]/15 via-[#1E293B] to-[#243347] border border-[#9333EA]/15 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA]/8 to-transparent blur-[100px] pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 relative z-10">Your industry. Our expertise.</h2>
          <p className="text-slate-300 mb-10 text-lg font-light relative z-10 max-w-xl mx-auto">
            Tell us about your business. We'll map the exact solution that moves your metrics.
          </p>
          <a href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.45)] relative z-10 group">
            Book a discovery call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
