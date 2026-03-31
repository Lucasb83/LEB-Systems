"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server, Globe, Bot, Zap, Code2, Check, ArrowRight,
  Cloud, Shield, Network, Database, Cpu, GitBranch,
  Smartphone, ShoppingCart, BarChart3, ChevronDown,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d * 0.1, ease: [0.16, 1, 0.3, 1] as const } }),
};

/* ─────────────────────────────────────────── SERVICES DATA */
const services = [
  {
    id: "infrastructure",
    icon: <Server className="w-6 h-6" />,
    color: "#FF4F27",
    colorBg: "rgba(255,79,39,0.1)",
    colorBorder: "rgba(255,79,39,0.2)",
    tag: "Infrastructure Development",
    headline: "The backbone your business runs on",
    body: "We design and deploy resilient, cloud-native infrastructure that scales from a single server to a global multi-region cluster. Whether you need Kubernetes orchestration, zero-trust networking, or a fully automated CI/CD pipeline — we build it right the first time.",
    features: [
      "Multi-cloud & hybrid architecture (AWS, GCP, Azure)",
      "Kubernetes & Docker container orchestration",
      "Zero-trust networking & identity management",
      "Automated CI/CD pipelines & GitOps workflows",
      "Disaster recovery & multi-region failover",
      "24/7 infrastructure monitoring & incident response",
    ],
    tech: ["AWS", "GCP", "Kubernetes", "Terraform", "Docker", "Cloudflare"],
    metric: { value: "99.9%", label: "Uptime SLA" },
  },
  {
    id: "web-design",
    icon: <Globe className="w-6 h-6" />,
    color: "#9333EA",
    colorBg: "rgba(147,51,234,0.1)",
    colorBorder: "rgba(147,51,234,0.2)",
    tag: "Web Design",
    headline: "Websites that convert visitors into clients",
    body: "We craft digital experiences that are fast, beautiful, and built to perform. From marketing landing pages to complex web portals — every pixel is designed with purpose, and every line of code is optimised for Core Web Vitals and SEO.",
    features: [
      "Custom UI/UX design (Figma → production)",
      "Next.js & React high-performance development",
      "Mobile-first, fully responsive layouts",
      "Core Web Vitals & Lighthouse 95+ scores",
      "Headless CMS integration (Sanity, Contentful, Strapi)",
      "A/B testing & conversion rate optimisation",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "Vercel"],
    metric: { value: "95+", label: "Lighthouse Score" },
  },
  {
    id: "ai",
    icon: <Bot className="w-6 h-6" />,
    color: "#EC4899",
    colorBg: "rgba(236,72,153,0.1)",
    colorBorder: "rgba(236,72,153,0.2)",
    tag: "AI Implementation",
    headline: "Intelligence trained on your business",
    body: "We integrate LLMs, build RAG knowledge pipelines, and deploy custom AI agents that understand your data, your customers, and your processes. Not off-the-shelf demos — real production AI that delivers measurable ROI from day one.",
    features: [
      "LLM integration (OpenAI, Anthropic, Mistral, local models)",
      "RAG knowledge bases with real-time document sync",
      "Custom AI agents & multi-agent orchestration",
      "Fine-tuning & embeddings on proprietary datasets",
      "AI-powered dashboards & analytics",
      "Responsible AI — safety, guardrails, audit trails",
    ],
    tech: ["OpenAI", "LangChain", "Pinecone", "Python", "FastAPI", "PostgreSQL"],
    metric: { value: "5×", label: "Productivity gain" },
  },
  {
    id: "automation",
    icon: <Zap className="w-6 h-6" />,
    color: "#FF9B26",
    colorBg: "rgba(255,155,38,0.1)",
    colorBorder: "rgba(255,155,38,0.2)",
    tag: "Process Automation",
    headline: "Eliminate every manual bottleneck",
    body: "We map, digitise, and automate your operational workflows. From email routing and invoice processing to full ERP integration — if it's repetitive, we automate it. Our solutions run 24/7 without human intervention and scale as your business grows.",
    features: [
      "End-to-end workflow design & implementation",
      "400+ native integrations (Slack, Salesforce, SAP, HubSpot…)",
      "RPA bots for legacy system automation",
      "Real-time event triggers & webhooks",
      "Error handling, retries & SLA monitoring",
      "Human-in-the-loop approval workflows",
    ],
    tech: ["n8n", "Python", "Node.js", "REST APIs", "Webhooks", "Datadog"],
    metric: { value: "80%", label: "Less manual work" },
  },
  {
    id: "custom-apps",
    icon: <Code2 className="w-6 h-6" />,
    color: "#9333EA",
    colorBg: "rgba(147,51,234,0.1)",
    colorBorder: "rgba(147,51,234,0.2)",
    tag: "Custom Applications",
    headline: "Software built exactly for your business",
    body: "No templates. No compromise. We engineer full-stack applications from the ground up — tailored to your exact workflows, users, and scale requirements. From MVPs shipped in weeks to enterprise platforms built to last.",
    features: [
      "Full-stack web applications (React + Node.js / Python)",
      "Mobile apps — iOS & Android (React Native)",
      "Internal tools, admin panels & dashboards",
      "SaaS platforms with multi-tenant architecture",
      "E-commerce & marketplace solutions",
      "API design, development & documentation",
    ],
    tech: ["React", "Node.js", "Python", "React Native", "PostgreSQL", "Redis"],
    metric: { value: "3×", label: "Faster time to market" },
  },
];

/* ─────────────────────────────────────────── HOW WE WORK */
const steps = [
  { num: "01", title: "Discovery", desc: "We start with a deep-dive into your business goals, current pain points, and technical landscape. No assumptions." },
  { num: "02", title: "Architecture", desc: "We design a tailored solution, present the technical plan, and align on scope, timeline, and success metrics." },
  { num: "03", title: "Build & iterate", desc: "Agile sprints with frequent demos. You see progress weekly, not just at the end." },
  { num: "04", title: "Deploy & support", desc: "Production launch with full documentation, monitoring setup, and ongoing support available on all plans." },
];

/* ─────────────────────────────────────────── FAQ */
const faqs = [
  { q: "Do you work with startups or only enterprises?", a: "Both. We offer flexible engagement models: from MVPs for early-stage startups to long-term platform engineering for enterprise teams. We adapt our process and pricing to your stage." },
  { q: "Can you take over an existing codebase?", a: "Yes. We conduct a thorough technical audit before starting, identify risks, and establish a clear migration plan. We don't force rewrites — only what's necessary." },
  { q: "What does a typical engagement look like?", a: "Most projects start with a 2-week discovery sprint, followed by a detailed proposal. Active builds typically run 6–16 weeks depending on scope. We maintain ongoing retainers for support and iteration." },
  { q: "Do you provide post-launch support?", a: "All projects include 30 days of free post-launch support. Long-term support and maintenance retainers are available at transparent monthly rates." },
  { q: "Do you sign NDAs?", a: "Absolutely. We sign NDAs before any discovery call and treat all client information with strict confidentiality." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-medium text-sm pr-4 group-hover:text-[#FF4F27] transition-colors">{q}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed pb-5 font-light">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────── PAGE */
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0e0918] text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#9333EA] blur-[160px] opacity-12 pointer-events-none" />

        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F27] shadow-[0_0_6px_#FF4F27]" />
          What we do
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl leading-tight">
          Five pillars.{" "}
          <span className="bg-gradient-to-r from-[#FF4F27] via-[#FF9B26] to-[#FF4F27] bg-clip-text text-transparent">
            One trusted partner.
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg text-slate-400 font-light max-w-2xl mb-10 leading-relaxed">
          From the servers your apps run on to the AI that powers them — LEB Systems delivers every layer of your digital stack with the same obsessive focus on quality.
        </motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3 justify-center">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`}
              className="px-4 py-2 text-xs font-medium rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all bg-white/3 hover:bg-white/6">
              {s.tag}
            </a>
          ))}
        </motion.div>
      </section>

      {/* Service sections */}
      {services.map((svc, idx) => (
        <section key={svc.id} id={svc.id} className="py-16 px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={`max-w-[1200px] mx-auto flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16`}>

            {/* Copy side */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full mb-6 text-xs font-medium border"
                style={{ background: svc.colorBg, borderColor: svc.colorBorder, color: svc.color }}>
                {svc.icon} {svc.tag}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">{svc.headline}</h2>
              <p className="text-slate-400 mb-8 leading-relaxed font-light">{svc.body}</p>

              <ul className="space-y-3 mb-8">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: svc.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold rounded-lg transition-all group"
                style={{ background: svc.color, boxShadow: `0 0 25px ${svc.color}55` }}>
                Start this project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card side */}
            <div className="flex-1 w-full flex justify-center">
              <div className="w-full max-w-md bg-[#14151A] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-all">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
                  style={{ background: `${svc.color}15` }} />

                {/* Stat badge */}
                <div className="flex items-center gap-3 mb-8 z-10 relative">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: svc.colorBg, border: `1px solid ${svc.colorBorder}` }}>
                    <span style={{ color: svc.color }}>{svc.icon}</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{svc.metric.value}</div>
                    <div className="text-xs text-slate-500">{svc.metric.label}</div>
                  </div>
                </div>

                {/* Tech pills */}
                <div className="z-10 relative">
                  <p className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wide">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs text-slate-300 bg-[#1A1A1E] border border-white/5 rounded-lg">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      ))}

      {/* How we work */}
      <section className="py-24 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">How we work</h2>
          <p className="text-slate-400 font-light text-lg">A clear, predictable process from first call to launch day.</p>
        </motion.div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.num} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#14151A] border border-white/5 rounded-2xl p-7 relative group hover:border-white/10 transition-all">
              <div className="text-5xl font-black text-white/5 mb-4 font-mono">{step.num}</div>
              <h3 className="text-white font-bold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-[800px] mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Frequently asked questions</h2>
            <p className="text-slate-400 font-light">Straight answers. No sales pitch.</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto bg-gradient-to-br from-[#FF4F27]/15 via-[#14151A] to-[#1A1A1E] border border-[#FF4F27]/15 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF4F27]/10 to-transparent blur-[100px] pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 relative z-10">Not sure where to start?</h2>
          <p className="text-slate-300 mb-10 text-lg font-light relative z-10 max-w-xl mx-auto">
            Book a free 30-minute discovery call. We'll listen, ask the right questions, and tell you exactly what we'd recommend.
          </p>
          <a href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF4F27] hover:bg-[#FF6B00] text-white font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(255,79,39,0.45)] relative z-10 group">
            Book a free call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
