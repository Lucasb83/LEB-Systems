"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Zap, Shield } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const plans = [
  {
    name: "Starter App",
    price: "$3,500",
    currency: "NZD",
    badge: null,
    icon: <Zap className="w-5 h-5 text-slate-300" />,
    tagline: "Perfect for getting started — one core feature done properly",
    delivery: "Ready in under 4 weeks",
    features: [
      "1 core feature (e.g. booking or menu)",
      "Mobile-friendly, professional design",
      "1 payment integration (Stripe or Paystation)",
      "30 days post-launch support",
      "Training session for you & your team",
      "Full source code ownership",
    ],
    notIncluded: ["Multiple integrations", "AI automation", "Ongoing maintenance"],
    cta: "Get Started",
    href: "/contact",
    highlight: false,
  },
  {
    name: "Growth App",
    price: "$4,900",
    currency: "NZD",
    badge: "Most Popular",
    icon: <Star className="w-5 h-5 text-[#06B6D4]" />,
    tagline: "The complete solution for growing Auckland businesses",
    delivery: "Ready in under 4 weeks",
    features: [
      "3–5 features + full integrations",
      "Payments (Stripe / Paystation)",
      "WhatsApp & email automation",
      "Google Calendar integration",
      "3 months post-launch support",
      "Training + documentation",
      "Full source code ownership",
      "Xero or accounting integration",
    ],
    notIncluded: ["AI automation layer"],
    cta: "Get Started",
    href: "/contact",
    highlight: true,
  },
  {
    name: "Premium Build",
    price: "From $7,500",
    currency: "NZD",
    badge: null,
    icon: <Shield className="w-5 h-5 text-[#9333EA]" />,
    tagline: "Fully custom — any feature, any integration, any scale",
    delivery: "Ready in 3–4 weeks maximum",
    features: [
      "Fully custom app — any feature",
      "AI automation layer included",
      "All integrations included",
      "Multi-user with roles & permissions",
      "Admin dashboard & analytics",
      "6 months post-launch support",
      "Full source code ownership",
      "Optional: $149/month maintenance",
    ],
    notIncluded: [],
    cta: "Talk to Lucas",
    href: "/contact",
    highlight: false,
  },
];

const allIncluded = [
  "NZ GST included in all prices",
  "Full source code delivered at handover",
  "1 round of revisions included",
  "Deployment + hosting setup",
  "Training for you and your team",
  "NZ Privacy Act compliant builds",
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-300 font-sans overflow-x-hidden">
      <Navbar />

      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#9333EA] blur-[200px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#06B6D4] blur-[150px] opacity-8 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_6px_#06B6D4]" />
              Simple, transparent pricing — no surprises
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Simple Pricing for<br />
              <span className="bg-gradient-to-r from-[#06B6D4] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                Real Results
              </span>
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
              Three clear packages. All include GST, full ownership, and a real training session.
              No hidden fees, no lock-in.
            </p>
          </motion.div>

          {/* Plans grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                custom={i + 1} variants={fadeUp} initial="hidden" animate="visible"
                className={`relative rounded-3xl p-8 flex flex-col border transition-all duration-500 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-[#06B6D4]/15 to-[#1E293B] border-[#06B6D4]/30 shadow-[0_0_60px_rgba(6,182,212,0.2)]"
                    : "bg-[#1E293B] border-white/5 hover:border-white/10"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#06B6D4] text-white text-xs font-bold rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                    {plan.badge}
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.highlight ? "bg-[#06B6D4]/15 border border-[#06B6D4]/30" : "bg-white/5 border border-white/10"}`}>
                    {plan.icon}
                  </div>
                  <h2 className="text-white font-bold text-xl">{plan.name}</h2>
                </div>

                <p className="text-slate-400 text-sm mb-6 font-light">{plan.tagline}</p>

                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm ml-2">{plan.currency} + GST</span>
                </div>
                <div className="text-xs text-slate-500 mb-8 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-[#06B6D4]" />
                  {plan.delivery}
                </div>

                <a
                  href={plan.href}
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm mb-8 transition-all group ${
                    plan.highlight
                      ? "bg-[#06B6D4] hover:bg-[#0891B2] text-white shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                      : "bg-[#1E293B] border border-white/10 hover:border-white/20 text-white"
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <div className="border-t border-white/5 pt-6 flex-1">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-4">What&apos;s included</p>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {plan.notIncluded.length > 0 && (
                    <ul className="space-y-2 mt-4">
                      {plan.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-center leading-none">—</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* All plans include */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="bg-[#1E293B] border border-white/5 rounded-3xl p-10 mb-16"
          >
            <h3 className="text-white font-bold text-xl mb-8 text-center">Every package includes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {allIncluded.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ teaser + CTA */}
          <motion.div
            custom={6} variants={fadeUp} initial="hidden" animate="visible"
            className="text-center"
          >
            <p className="text-slate-400 mb-6">
              Not sure which plan fits? Book a free 15-min call and we&apos;ll figure it out together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] group"
            >
              Book your free consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
