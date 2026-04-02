"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build my app?",
    a: "Every app is delivered in under 4 weeks — usually 2–3 weeks. We start with a free 15-minute call to scope your app, then I give you a fixed timeline and price before we start. No surprises.",
  },
  {
    q: "Do I need technical knowledge to use what you build?",
    a: "Not at all. Every app comes with a hands-on training session in plain English. If you can use your smartphone, you can run your new app. I stay available for 30 days after launch too.",
  },
  {
    q: "What does '100% ownership' actually mean?",
    a: "You receive the source code, the database, and all login credentials at handover. No ongoing fees payable to me — only any third-party subscriptions (e.g. Stripe, WhatsApp API), which I explain clearly upfront.",
  },
  {
    q: "What's included in the price?",
    a: "All prices include GST, design, build, integrations, deployment, a full training session, and 30 days of post-launch support. What you see is what you pay — no hidden extras.",
  },
  {
    q: "Can I see examples of your work first?",
    a: "Absolutely — check out our Case Studies page for real Auckland businesses we've built for. Results include 60% fewer no-shows, 30% faster table turnover, and 10+ hours saved per week.",
  },
  {
    q: "Can I start small and add more features later?",
    a: "Yes. Many clients start with the Starter package and expand as their business grows. I build everything with future additions in mind, so adding features later is straightforward.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-medium text-sm pr-6 group-hover:text-[#06B6D4] transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-all duration-200 ${
            open ? "rotate-180 text-[#06B6D4]" : "text-slate-400"
          }`}
        />
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

export default function FaqSection() {
  return (
    <section className="py-20 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[800px] mx-auto"
      >
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_6px_#06B6D4]" />
            Straight answers, no jargon
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Common questions
          </h2>
          <p className="text-slate-400 font-light">Everything you want to know before getting in touch.</p>
        </div>

        <div className="bg-[#1E293B] border border-white/5 rounded-3xl px-8 py-2">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-400 text-sm mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] group"
          >
            Book a free 15-min call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
