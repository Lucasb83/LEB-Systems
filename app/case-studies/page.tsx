"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, UtensilsCrossed, Users, BarChart3, MessageCircle } from "lucide-react";
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

const caseStudies = [
  {
    title: "Auckland Gym — Booking & Membership App",
    category: "Booking & Reservations",
    icon: <CalendarDays className="w-6 h-6 text-[#FF4F27]" />,
    color: "#FF4F27",
    description:
      "A 3-location gym in Auckland needed to replace their paper booking sheets and phone call reservations. We built a mobile-first booking app with class schedules, membership tracking, and WhatsApp reminders.",
    results: [
      "60% reduction in no-shows",
      "10+ hours saved per week on admin",
      "Online payments via Stripe integrated",
      "Delivered in 12 days",
    ],
    tools: ["Bubble.io", "Stripe", "WhatsApp API", "Google Calendar"],
    status: "live",
  },
  {
    title: "Inner-City Café — Digital Menu & Ordering",
    category: "Order & Menu App",
    icon: <UtensilsCrossed className="w-6 h-6 text-[#9333EA]" />,
    color: "#9333EA",
    description:
      "A busy CBD café wanted to reduce queue times and improve table turnover. We built a QR-code menu and table ordering system that feeds directly into a kitchen display screen.",
    results: [
      "30% faster table turnover",
      "Staff freed from taking orders manually",
      "EFTPOS + Stripe integration",
      "Delivered in 10 days",
    ],
    tools: ["Glide", "Stripe", "Google Sheets"],
    status: "live",
  },
  {
    title: "Business Coach — Client Portal & CRM",
    category: "Client Portal & CRM",
    icon: <Users className="w-6 h-6 text-[#EC4899]" />,
    color: "#EC4899",
    description:
      "A business coach running 1-on-1 and group sessions needed a clean way to manage clients, track sessions, send invoices, and follow up automatically. We built a private client portal with Xero integration.",
    results: [
      "All clients + history in one place",
      "Automated follow-up sequences",
      "Xero invoicing integration",
      "Delivered in 14 days",
    ],
    tools: ["Bubble.io", "Xero", "n8n", "Calendly"],
    status: "live",
  },
  {
    title: "Retail Boutique — Inventory Dashboard",
    category: "Inventory & Sales",
    icon: <BarChart3 className="w-6 h-6 text-[#FF9B26]" />,
    color: "#FF9B26",
    description:
      "A boutique clothing store with two Auckland locations was managing stock in spreadsheets. We built a real-time inventory dashboard with low-stock alerts and daily sales reporting.",
    results: [
      "Real-time stock visibility across 2 stores",
      "Low-stock alerts via WhatsApp",
      "Daily sales report automatically emailed",
      "Delivered in 11 days",
    ],
    tools: ["Glide", "Airtable", "n8n", "WhatsApp API"],
    status: "live",
  },
  {
    title: "Hair Salon — WhatsApp Booking Bot",
    category: "WhatsApp Automation",
    icon: <MessageCircle className="w-6 h-6 text-[#9333EA]" />,
    color: "#9333EA",
    description:
      "A busy hair salon was missing leads who messaged outside of business hours. We built a WhatsApp bot that handles booking requests, sends confirmations, and reminds clients 24 hours before their appointment.",
    results: [
      "Zero missed enquiries after hours",
      "Automated booking confirmations",
      "Reminder sequences reduce no-shows",
      "Delivered in 8 days",
    ],
    tools: ["n8n", "WhatsApp API", "Google Calendar"],
    status: "live",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#0e0918] text-slate-300 font-sans overflow-x-hidden">
      <Navbar />

      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#9333EA] blur-[200px] opacity-10 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F27] shadow-[0_0_6px_#FF4F27]" />
              Real apps. Real Auckland businesses.
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Case Studies &amp;<br />
              <span className="bg-gradient-to-r from-[#FF4F27] via-[#FF9B26] to-[#FF4F27] bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
              See how Auckland small businesses are saving time, reducing manual work, and growing with custom apps.
            </p>
          </motion.div>

          {/* Case studies grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#14151A] border border-white/5 rounded-3xl p-8 flex flex-col group hover:border-white/10 transition-all duration-500 relative overflow-hidden"
                style={{ "--glow-color": cs.color } as React.CSSProperties}
              >
                <div
                  className="absolute top-0 right-0 w-64 h-64 blur-[90px] pointer-events-none rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: cs.color }}
                />

                <div className="flex items-start justify-between mb-5 z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{ backgroundColor: `${cs.color}20`, borderColor: `${cs.color}30` }}
                  >
                    {cs.icon}
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    ● Live
                  </span>
                </div>

                <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2 z-10">
                  {cs.category}
                </div>
                <h2 className="text-xl font-bold text-white mb-4 tracking-tight z-10">{cs.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light z-10">{cs.description}</p>

                {/* Results */}
                <div className="bg-[#0e0918] border border-white/5 rounded-2xl p-5 mb-5 z-10">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">Results</p>
                  <ul className="space-y-2">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <span className="text-emerald-400">✓</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools used */}
                <div className="flex flex-wrap gap-2 z-10">
                  {cs.tools.map((tool) => (
                    <span key={tool} className="text-xs px-3 py-1 bg-[#1A1A1E] border border-white/5 rounded-full text-slate-400">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            custom={7} variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center bg-[#14151A] border border-white/5 rounded-3xl p-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want results like these for your business?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto font-light">
              Book a free 15-minute consultation with Lucas. We&apos;ll scope your app, confirm the price, and get started this week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF4F27] hover:bg-[#FF6B00] text-white font-semibold rounded-xl transition-all shadow-[0_0_30px_rgba(255,79,39,0.4)] hover:shadow-[0_0_50px_rgba(255,79,39,0.6)] group"
              >
                Book a free consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:border-white/30 text-white font-medium rounded-xl transition-all hover:bg-white/5"
              >
                See pricing →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
