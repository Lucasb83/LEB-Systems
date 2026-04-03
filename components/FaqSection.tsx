"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "What types of companies do you work with?",
    a: "We partner with AU/NZ B2B companies with 50–2,000 employees — typically SaaS, FinTech, logistics, professional services, and enterprise operations teams. Our programs work best when there's an internal technical contact and clear business outcomes to target.",
  },
  {
    q: "What does a LEB Systems program actually involve?",
    a: "Every engagement follows our five-phase method: Discovery & Audit, Architecture Design, Iterative Build, Validate & Optimise, and Continuous Improvement. We deliver working systems to production every two weeks — not a handover at the end of a 12-month project.",
  },
  {
    q: "How do you price your programs?",
    a: "Programs are scoped and priced after the strategy session, once we understand your current state and target outcomes. Typical engagements run as fixed-scope phases with clear deliverables and KPIs agreed before kickoff. No open-ended retainers, no scope creep.",
  },
  {
    q: "Do you work alongside our existing team or replace it?",
    a: "Always alongside. We embed as an extension of your team — not a replacement. Part of every engagement includes capability uplift so your team can operate and extend what we build after handover.",
  },
  {
    q: "What happens if we need to pause or exit mid-program?",
    a: "You own everything we build from day one — code, infrastructure, documentation. If you need to pause, we hand over a clean state with runbooks. There is no lock-in and no exit fee.",
  },
  {
    q: "How quickly can we get started?",
    a: "Strategy sessions are typically available within 3–5 business days of request. After the session, we issue a program proposal within one week. Most engagements kick off within 2 weeks of proposal acceptance.",
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
            Common questions
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
            Book a strategy session
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
