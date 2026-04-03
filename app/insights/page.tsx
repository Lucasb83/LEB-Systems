"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Mail, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const articleCards = [
  {
    color: "#9333EA",
    category: "Cloud Migration",
    title: "The hidden costs of lift-and-shift: why replatforming isn't modernisation",
    meta: "8 min read · February 2026",
  },
  {
    color: "#EC4899",
    category: "Platform Engineering",
    title: "The ROI of internal developer platforms: how to make the business case",
    meta: "10 min read · February 2026",
  },
  {
    color: "#10B981",
    category: "Observability",
    title: "How to achieve 99.9% uptime without a 24/7 NOC team",
    meta: "7 min read · January 2026",
  },
  {
    color: "#06B6D4",
    category: "AI Automation",
    title: "Agents vs automation: when to use LLMs and when to use deterministic workflows",
    meta: "9 min read · January 2026",
  },
  {
    color: "#9333EA",
    category: "Architecture",
    title: "Event-driven architecture for teams that have never shipped Kafka before",
    meta: "11 min read · December 2025",
  },
];

export default function InsightsPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubscribed(true);
  }

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
          <FileText className="w-3.5 h-3.5 text-[#06B6D4]" />
          Insights
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight"
        >
          Thinking on AI, infrastructure, and transformation.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl text-slate-400 max-w-2xl mx-auto mt-4"
        >
          Practical articles for AU/NZ technology leaders navigating digital transformation.
        </motion.p>
      </section>

      {/* Featured article */}
      <section className="py-8 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#1E293B] border border-white/5 rounded-3xl p-10 relative overflow-hidden group hover:border-white/10 transition-all duration-500"
          >
            {/* Top-right glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#06B6D4]/8 blur-[90px] pointer-events-none rounded-full" />

            <div className="relative z-10">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 bg-[#06B6D4]/15 border border-[#06B6D4]/30 text-[#06B6D4]">
                AI Automation
              </span>
              <h2 className="text-3xl font-bold text-white mb-4 max-w-2xl leading-snug">
                Why most AI automation projects fail in the first 90 days
              </h2>
              <p className="text-slate-400 font-light leading-relaxed max-w-2xl mb-6">
                The pattern is consistent: teams rush from pilot to production without establishing the data pipelines, human-in-the-loop controls, or monitoring infrastructure that make AI agents reliable. Here's what to do instead.
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="text-slate-500 text-sm">12 min read · March 2026</span>
                <a href="#" className="flex items-center gap-1.5 text-[#06B6D4] text-sm font-medium hover:opacity-80 transition-opacity">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-8 px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-5">
          {articleCards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#1E293B] border border-white/5 rounded-3xl p-6 flex flex-col group hover:border-white/10 transition-all duration-500"
            >
              <span
                className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full self-start border"
                style={{ background: `${card.color}15`, borderColor: `${card.color}30`, color: card.color }}
              >
                {card.category}
              </span>
              <p className="text-white font-semibold text-sm leading-snug mt-3 mb-2 flex-1">{card.title}</p>
              <span className="text-slate-500 text-xs mb-4">{card.meta}</span>
              <a href="#" className="flex items-center gap-1.5 text-[#06B6D4] text-xs font-medium hover:opacity-80 transition-opacity">
                Read article <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Email subscribe */}
      <section className="py-16 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[600px] mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-3">Stay current on AU/NZ transformation.</h2>
          <p className="text-slate-400 text-sm mb-8">
            Occasional articles and case studies. No spam. Unsubscribe anytime.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-[#10B981] font-medium">
              <Check className="w-4 h-4" />
              You're subscribed. Talk soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#1E293B] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-white/25 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] whitespace-nowrap text-sm"
              >
                Subscribe
              </button>
            </form>
          )}

          {!subscribed && (
            <a href="/contact" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors">
              Or book a strategy session directly <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
