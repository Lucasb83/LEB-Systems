"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot, Zap, Brain, Database, Network, Check, ArrowRight,
  GitBranch, Activity, Clock, Shield, Code2, Cloud,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d * 0.1, ease: [0.16, 1, 0.3, 1] as const } }),
};

/* ─────────────────── AI CAPABILITIES */
const aiCapabilities = [
  {
    icon: <Brain className="w-5 h-5" />,
    color: "#EC4899",
    title: "LLM Integration",
    desc: "We integrate leading language models (GPT-4o, Claude, Mistral, Llama) into your existing workflows. From customer-facing chatbots to internal knowledge assistants.",
    features: ["OpenAI, Anthropic, Mistral, Llama 3", "Structured outputs & function calling", "Context management & memory", "Streaming responses"],
  },
  {
    icon: <Database className="w-5 h-5" />,
    color: "#9333EA",
    title: "RAG Knowledge Pipelines",
    desc: "Connect your documents, databases, and internal systems to a retrieval-augmented generation pipeline. AI that answers with your data, not generic hallucinations.",
    features: ["Multi-source document ingestion", "Vector database (Pinecone, Weaviate, pgvector)", "Real-time knowledge sync", "Citation & source tracing"],
  },
  {
    icon: <Network className="w-5 h-5" />,
    color: "#818cf8",
    title: "AI Agents & Orchestration",
    desc: "Autonomous agents that plan, reason, and execute multi-step tasks. We build single agents and complex multi-agent systems that handle real business processes.",
    features: ["ReAct & LangGraph agent frameworks", "Tool-use & API integrations", "Human-in-the-loop checkpoints", "Multi-agent orchestration"],
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    color: "#34d399",
    title: "Fine-tuning & Embeddings",
    desc: "When a general model isn't enough, we fine-tune on your proprietary datasets. Custom embeddings that understand your domain vocabulary, products, and customers.",
    features: ["Supervised & RLHF fine-tuning", "Domain-specific embedding models", "Evaluation frameworks & benchmarks", "Model versioning & A/B testing"],
  },
];

/* ─────────────────── AUTOMATION CAPABILITIES */
const automationCapabilities = [
  {
    icon: <Zap className="w-5 h-5" />,
    color: "#10B981",
    title: "Workflow Automation",
    desc: "Design, build, and deploy end-to-end automated workflows. We replace manual, error-prone processes with reliable, monitored automation.",
    features: ["Visual workflow builder", "Conditional logic & branching", "Error handling & retries", "Execution history & audit logs"],
  },
  {
    icon: <Network className="w-5 h-5" />,
    color: "#06B6D4",
    title: "API & Systems Integration",
    desc: "Connect disparate systems that were never meant to talk to each other. We handle 400+ native integrations and can build custom connectors for any REST or SOAP API.",
    features: ["400+ pre-built integrations", "Custom API connectors", "Webhook management", "OAuth & API key handling"],
  },
  {
    icon: <Clock className="w-5 h-5" />,
    color: "#818cf8",
    title: "Scheduled & Event-Driven Triggers",
    desc: "Run workflows on cron schedules, in response to real-time events, or triggered by webhooks from external systems.",
    features: ["Cron scheduling (sub-minute intervals)", "Webhook receivers", "Database change triggers", "Message queue consumers"],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    color: "#34d399",
    title: "RPA & Legacy Automation",
    desc: "Automate desktop and web applications that don't have APIs. We deploy RPA bots that interact with legacy software the way a human would — but 24/7.",
    features: ["Browser & desktop automation", "Screen scraping & OCR", "Legacy system integration", "Attended & unattended modes"],
  },
];

/* ─────────────────── PIPELINE STEPS (visual) */
const pipelineSteps = [
  { label: "Data Source", sub: "Documents, DB, APIs", color: "#9333EA" },
  { label: "Ingestion", sub: "Parse & chunk", color: "#9333EA" },
  { label: "Embedding", sub: "Vectorise content", color: "#EC4899" },
  { label: "LLM Layer", sub: "Reason & generate", color: "#06B6D4" },
  { label: "Delivery", sub: "API / UI / Webhook", color: "#10B981" },
];

/* ─────────────────── INTEGRATIONS */
const integrations = [
  "Slack", "HubSpot", "Salesforce", "Notion", "Google Workspace", "Jira",
  "Stripe", "Shopify", "SAP", "Zendesk", "Airtable", "Monday.com",
  "Twilio", "SendGrid", "GitHub", "Linear",
];

/* ─────────────────── METRICS */
const metrics = [
  { value: "80%", label: "Average reduction in manual work" },
  { value: "5×", label: "Faster data processing" },
  { value: "400+", label: "Available integrations" },
  { value: "24/7", label: "Autonomous operation" },
];

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#EC4899] blur-[180px] opacity-8 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-[#06B6D4] blur-[150px] opacity-6 pointer-events-none" />

        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] shadow-[0_0_6px_#EC4899]" />
          AI & Automation
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl leading-tight">
          Intelligence at the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] via-[#9333EA] to-[#818cf8] bg-clip-text text-transparent">
            core of your operations.
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg text-slate-400 font-light max-w-2xl mb-10 leading-relaxed">
          We implement AI systems and automation workflows that eliminate manual work, accelerate decisions, and let your team focus on what only humans can do.
        </motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-4 justify-center">
          <a href="/contact" className="flex items-center gap-2 px-7 py-3.5 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] group">
            Book Strategy Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#automation" className="flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-white/30 text-white font-medium rounded-lg transition-all hover:bg-white/5">
            See automation solutions
          </a>
        </motion.div>
      </section>

      {/* Metrics bar */}
      <section className="py-8 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div key={m.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#1E293B] border border-white/5 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-white mb-1">{m.value}</div>
              <div className="text-xs text-slate-500 font-medium">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Pipeline visual */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto bg-gradient-to-br from-[#EC4899]/12 via-[#1E293B] to-[#243347] border border-[#EC4899]/15 rounded-3xl p-10 md:p-14 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#EC4899]/8 blur-[120px] pointer-events-none rounded-full" />

          <h2 className="text-3xl font-bold text-white mb-3">How a RAG pipeline works</h2>
          <p className="text-slate-400 font-light mb-10">End-to-end flow from your raw data to an AI-powered response.</p>

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 relative z-10">
            {pipelineSteps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 border"
                    style={{ background: `${step.color}18`, borderColor: `${step.color}30` }}>
                    <span className="text-sm font-bold" style={{ color: step.color }}>{i + 1}</span>
                  </div>
                  <span className="text-sm font-semibold text-white text-center">{step.label}</span>
                  <span className="text-xs text-slate-500 text-center mt-1">{step.sub}</span>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-2">
                    <div className="h-px w-8 bg-white/15" />
                    <ArrowRight className="w-3 h-3 text-slate-600 -ml-1" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Animated dots */}
          <div className="hidden md:flex items-center justify-around mt-6 px-6">
            {[0.3, 0.6, 0.9, 1.2].map((delay) => (
              <motion.div key={delay}
                className="w-1.5 h-1.5 rounded-full bg-[#EC4899]"
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay, ease: "easeInOut" }}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI capabilities */}
      <section className="py-16 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto mb-14">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">AI capabilities</h2>
          <p className="text-slate-400 font-light text-lg">What we build and deploy.</p>
        </motion.div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiCapabilities.map((cap, i) => (
            <motion.div key={cap.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#1E293B] border border-white/5 rounded-3xl p-8 group hover:border-white/10 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[70px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `${cap.color}18` }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border"
                style={{ background: `${cap.color}15`, borderColor: `${cap.color}25`, color: cap.color }}>
                {cap.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{cap.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light mb-5">{cap.desc}</p>
              <ul className="space-y-2">
                {cap.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: cap.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Automation capabilities */}
      <section id="automation" className="py-16 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto mb-14">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Automation capabilities</h2>
          <p className="text-slate-400 font-light text-lg">Stop doing manually what a machine can do better.</p>
        </motion.div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {automationCapabilities.map((cap, i) => (
            <motion.div key={cap.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#1E293B] border border-white/5 rounded-3xl p-8 group hover:border-white/10 transition-all relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[70px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `${cap.color}18` }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border"
                style={{ background: `${cap.color}15`, borderColor: `${cap.color}25`, color: cap.color }}>
                {cap.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{cap.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light mb-5">{cap.desc}</p>
              <ul className="space-y-2">
                {cap.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: cap.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integrations showcase */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Connects with everything you use</h2>
          <p className="text-slate-400 font-light">Native integrations with 400+ tools — and custom connectors for the rest.</p>
        </motion.div>
        <div className="max-w-[900px] mx-auto flex flex-wrap gap-3 justify-center">
          {integrations.map((tool, i) => (
            <motion.span key={tool} custom={i * 0.05} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="px-4 py-2 text-sm text-slate-300 bg-[#1E293B] border border-white/5 rounded-xl hover:border-white/20 hover:text-white transition-all cursor-default">
              {tool}
            </motion.span>
          ))}
          <span className="px-4 py-2 text-sm text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-xl font-medium">
            +380 more
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto bg-gradient-to-br from-[#EC4899]/15 via-[#1E293B] to-[#243347] border border-[#EC4899]/15 rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EC4899]/8 to-transparent blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-3">Ready to automate?</h2>
            <p className="text-slate-300 font-light text-lg max-w-lg">
              Tell us what process you want to eliminate first. We'll design the solution in a free discovery session.
            </p>
          </div>
          <a href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.45)] relative z-10 group whitespace-nowrap">
            Book Strategy Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
