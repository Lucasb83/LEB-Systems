"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays, UtensilsCrossed, Users, BarChart3, MessageCircle,
  Check, ArrowRight, ChevronDown, Clock, Zap,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d * 0.1, ease: [0.16, 1, 0.3, 1] as const } }),
};

const services = [
  {
    id: "booking",
    icon: <CalendarDays className="w-6 h-6" />,
    color: "#FF4F27",
    colorBg: "rgba(255,79,39,0.1)",
    colorBorder: "rgba(255,79,39,0.2)",
    tag: "Booking & Reservations",
    shortDesc: "Online calendar and payments for salons, gyms, tutors and service businesses.",
    headline: "Never miss a booking again",
    body: "Your clients can book 24/7, pay instantly, and receive automatic reminders — all without you lifting a finger. Perfect for hair salons, gyms, tutors, and any service-based business in Auckland.",
    features: [
      "Online calendar with real-time availability",
      "Secure payments via Stripe or Paystation",
      "Automatic WhatsApp/Email/SMS reminders",
      "Reduce no-shows by up to 70%",
    ],
    tools: ["Bubble.io", "Stripe", "WhatsApp API", "Google Calendar"],
    delivery: "14–21 days",
    from: "$1,800",
  },
  {
    id: "orders",
    icon: <UtensilsCrossed className="w-6 h-6" />,
    color: "#9333EA",
    colorBg: "rgba(147,51,234,0.1)",
    colorBorder: "rgba(147,51,234,0.2)",
    tag: "Order & Menu App",
    shortDesc: "Digital menu and table ordering for cafés, restaurants and food trucks.",
    headline: "Faster service. Happier customers.",
    body: "Turn your menu digital and let customers order from their phone. Less waiting, fewer mistakes, happier staff. Ideal for busy Auckland cafés, restaurants, and food trucks.",
    features: [
      "Digital menu with photos and prices",
      "Table-side or takeaway ordering via QR code",
      "Kitchen display system",
      "Integration with EFTPOS and payments",
    ],
    tools: ["Glide", "Stripe", "Square", "Google Sheets"],
    delivery: "10–14 days",
    from: "$1,800",
  },
  {
    id: "crm",
    icon: <Users className="w-6 h-6" />,
    color: "#EC4899",
    colorBg: "rgba(236,72,153,0.1)",
    colorBorder: "rgba(236,72,153,0.2)",
    tag: "Client Portal & CRM",
    shortDesc: "One place to manage clients, invoices and follow-ups.",
    headline: "Stop juggling spreadsheets and emails",
    body: "Give your clients a professional portal and keep everything organised — from first enquiry to final invoice. Great for coaches, consultants, trainers, and retail shops.",
    features: [
      "Client login area with documents and invoices",
      "Simple CRM to track leads and follow-ups",
      "Automated reminders and notifications",
      "All data stored securely in New Zealand",
    ],
    tools: ["Bubble.io", "Xero", "n8n", "Calendly"],
    delivery: "14–21 days",
    from: "$2,200",
  },
  {
    id: "inventory",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "#FF9B26",
    colorBg: "rgba(255,155,38,0.1)",
    colorBorder: "rgba(255,155,38,0.2)",
    tag: "Inventory & Sales Dashboard",
    shortDesc: "Real-time stock and sales reports for retail and small shops.",
    headline: "Know exactly what's selling — and when to restock",
    body: "No more complicated software or guesswork. A simple, clean dashboard on your phone or computer shows live stock levels, daily sales, and automatic low-stock alerts.",
    features: [
      "Live stock levels and low-stock alerts",
      "Daily/weekly sales reports",
      "Simple dashboard on phone or computer",
      "Export to Excel or PDF",
    ],
    tools: ["Glide", "Airtable", "n8n", "WhatsApp API"],
    delivery: "10–14 days",
    from: "$1,800",
  },
  {
    id: "whatsapp",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "#9333EA",
    colorBg: "rgba(147,51,234,0.1)",
    colorBorder: "rgba(147,51,234,0.2)",
    tag: "WhatsApp & Instagram Automation",
    shortDesc: "Auto-replies, booking and marketing flows for your business.",
    headline: "Save 10+ hours a week on repetitive messages",
    body: "Automate customer conversations so you spend less time replying and more time running your business. Works 24/7 through WhatsApp and Instagram DMs — even while you sleep.",
    features: [
      "Automatic replies and appointment booking via WhatsApp",
      "Marketing message sequences",
      "Integration with your calendar and payments",
      "Track conversations in one place",
    ],
    tools: ["n8n", "WhatsApp Business API", "Google Calendar", "Make"],
    delivery: "7–14 days",
    from: "$1,800",
  },
];

const faqs = [
  { q: "Do I need technical knowledge to use the apps you build?", a: "Not at all. Every app I build comes with a full training session for you and your team. I explain everything in plain language — no tech jargon. If you can use a smartphone, you can use your new app." },
  { q: "Who owns the app after it's built?", a: "You do — 100%. You get the source code, the database, and all login credentials at handover. There are no ongoing fees payable to me (only any third-party tool subscriptions, which I'll explain upfront)." },
  { q: "How long does it really take?", a: "Most apps are delivered in 7–21 days depending on the package. We start with a free consultation to scope your app, and I'll give you an exact timeline before we begin." },
  { q: "Are the apps compliant with NZ Privacy Act 2020?", a: "Yes. All apps I build store data in NZ-based or compliant cloud infrastructure, handle user data responsibly, and follow NZ Privacy Act 2020 requirements. I can provide documentation if needed." },
  { q: "What if I need changes after the app is launched?", a: "All packages include a 30-day post-launch support period for fixes and small adjustments. For ongoing changes, I offer flexible monthly maintenance plans." },
  { q: "Can I start with a small package and upgrade later?", a: "Absolutely. Many clients start with the Starter App and add features as they grow. I build everything with expansion in mind." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0e0918] text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#FF4F27] blur-[160px] opacity-8 pointer-events-none" />

        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F27] shadow-[0_0_6px_#FF4F27]" />
          Auckland-based · Built in 7–21 days · From $1,800 NZD
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl leading-tight">
          Apps for Auckland{" "}
          <span className="bg-gradient-to-r from-[#FF4F27] via-[#FF9B26] to-[#FF4F27] bg-clip-text text-transparent">
            Small Businesses
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg text-slate-400 font-light max-w-2xl mb-10 leading-relaxed">
          Simple custom apps built fast with no-code tools and my development experience.
          Save time, reduce manual work, and grow your business — without the big-agency price tag.
        </motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3 justify-center">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`}
              className="px-4 py-2 text-xs font-medium rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-[#FF4F27]/40 transition-all bg-white/3">
              {s.tag}
            </a>
          ))}
        </motion.div>
      </section>

      {/* Service sections */}
      {services.map((svc, idx) => (
        <section key={svc.id} id={svc.id} className="py-14 px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={`max-w-[1200px] mx-auto flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-14`}>

            {/* Copy side */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full mb-5 text-xs font-medium border"
                style={{ background: svc.colorBg, borderColor: svc.colorBorder, color: svc.color }}>
                {svc.icon} {svc.tag}
              </div>
              <p className="text-slate-500 text-sm mb-3 font-light">{svc.shortDesc}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">{svc.headline}</h2>
              <p className="text-slate-400 mb-8 leading-relaxed font-light">{svc.body}</p>

              <ul className="space-y-3 mb-8">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: svc.color }} />
                    <strong className="font-medium text-white">{f}</strong>
                  </li>
                ))}
              </ul>

              {/* Delivery + price badge */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1E] border border-white/8 rounded-xl text-xs text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-[#FF4F27]" /> Built in {svc.delivery}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1E] border border-white/8 rounded-xl text-xs text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-[#FF4F27]" /> From {svc.from} NZD
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold rounded-lg transition-all group"
                  style={{ background: svc.color, boxShadow: `0 0 25px ${svc.color}55` }}>
                  Get a quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white text-sm font-medium rounded-lg border border-white/10 hover:border-white/20 transition-all">
                  See Pricing &amp; Packages
                </a>
              </div>
            </div>

            {/* Card side */}
            <div className="flex-1 w-full flex justify-center">
              <div className="w-full max-w-md bg-[#14151A] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-all">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-15 group-hover:opacity-25 transition-opacity"
                  style={{ background: svc.color }} />

                <div className="flex items-center gap-3 mb-8 z-10 relative">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: svc.colorBg, border: `1px solid ${svc.colorBorder}` }}>
                    <span style={{ color: svc.color }}>{svc.icon}</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">{svc.tag}</div>
                    <div className="text-xs text-slate-500">Fully yours after delivery</div>
                  </div>
                </div>

                <div className="z-10 relative">
                  <p className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wide">Built with</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.tools.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs text-slate-300 bg-[#1A1A1E] border border-white/5 rounded-lg">{t}</span>
                    ))}
                  </div>
                  <div className="h-px bg-white/5 mb-5" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Delivery time</span>
                    <span className="text-white font-semibold">{svc.delivery}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-3">
                    <span className="text-slate-400">Starting from</span>
                    <span style={{ color: svc.color }} className="font-bold text-lg">{svc.from} NZD</span>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">How it works</h2>
          <p className="text-slate-400 font-light text-lg">Simple, clear, no surprises.</p>
        </motion.div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "01", title: "Free consultation", desc: "15 minutes on a call — you explain your problem, I explain what I can build and for how much. No obligation." },
            { num: "02", title: "Proposal & price", desc: "You get a clear written proposal: exactly what will be built, when it'll be done, and the fixed NZD price." },
            { num: "03", title: "Build & show you", desc: "I build your app and show you progress weekly. You can give feedback at every step." },
            { num: "04", title: "Launch & train you", desc: "We go live together. I train you and your team, hand over all credentials, and stay available for 30 days." },
          ].map((step, i) => (
            <motion.div key={step.num} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#14151A] border border-white/5 rounded-2xl p-7 relative group hover:border-white/10 transition-all">
              <div className="text-5xl font-black text-white/5 mb-4 font-mono">{step.num}</div>
              <h3 className="text-white font-bold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{step.desc}</p>
              {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-[800px] mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Common questions</h2>
            <p className="text-slate-400 font-light">Straight answers from Lucas.</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 relative z-10">
            Not sure which app you need?
          </h2>
          <p className="text-slate-300 mb-10 text-lg font-light relative z-10 max-w-xl mx-auto">
            Book a free 15-minute call with Lucas. He&apos;ll listen to your business challenges and tell you exactly what would help — with a clear price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF4F27] hover:bg-[#FF6B00] text-white font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(255,79,39,0.45)] group">
              Book a free call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:border-white/30 text-white font-medium rounded-lg transition-all hover:bg-white/5">
              See Pricing &amp; Packages
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
