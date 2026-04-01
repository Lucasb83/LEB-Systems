"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Heart, Zap, Shield } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d * 0.1, ease: [0.16, 1, 0.3, 1] as const } }),
};

const stats = [
  { value: "50+", label: "Apps delivered" },
  { value: "7–14", label: "Days to go live" },
  { value: "100%", label: "Client code ownership" },
  { value: "NZ", label: "Privacy Act ready" },
];

const values = [
  {
    icon: <Heart className="w-5 h-5 text-[#06B6D4]" />,
    title: "Small business first",
    desc: "Big agencies ignore you. I don't. Every project gets my full attention — from the first call to the day you go live and beyond.",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#10B981]" />,
    title: "Fast without cutting corners",
    desc: "I move quickly because I'm focused and experienced — not because I skip testing or quality checks. You get both speed and reliability.",
  },
  {
    icon: <Shield className="w-5 h-5 text-[#9333EA]" />,
    title: "No lock-in, ever",
    desc: "You own everything I build. The source code, the database, the hosting credentials. Cancel any time — but you'll keep what you paid for.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#EC4899]" />,
    title: "Locally available",
    desc: "I'm based in Auckland. We can meet in person, I'm on NZ time, and I understand the way NZ businesses actually operate.",
  },
];

const toolCategories = [
  { name: "No-code app builders", tags: ["Bubble.io", "Glide", "FlutterFlow", "Softr"] },
  { name: "Automation", tags: ["n8n", "Make", "Zapier", "Airtable Automations"] },
  { name: "Integrations", tags: ["Stripe", "Xero", "WhatsApp API", "Google Calendar"] },
  { name: "Hosting & delivery", tags: ["Vercel", "Render", "Cloudflare", "Supabase"] },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#06B6D4] blur-[160px] opacity-10 pointer-events-none" />

        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
          <MapPin className="w-3 h-3 text-[#06B6D4]" />
          Auckland, New Zealand
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl leading-tight">
          Hi, I&apos;m Lucas.{" "}
          <span className="bg-gradient-to-r from-[#06B6D4] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
            I build apps for NZ businesses.
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg text-slate-400 font-light max-w-2xl mb-10 leading-relaxed">
          I&apos;m a no-code developer based in Auckland. I help small businesses — gyms, cafés, salons,
          retail stores, and service providers — get custom apps that save them time and make them money.
          No jargon, no offshore teams, no lock-in.
        </motion.p>
      </section>

      {/* Stats */}
      <section className="py-8 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#1E293B] border border-white/5 rounded-2xl p-7 text-center">
              <div className="text-4xl font-black text-white mb-1">{s.value}</div>
              <div className="text-sm text-slate-500 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white tracking-tight mb-6">My story</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed font-light">
              <p>
                I started LEB Systems because I kept seeing the same problem: small business owners spending
                hours every week on admin that could easily be automated. Appointment reminders sent manually.
                Bookings taken over the phone. Stock counted by hand.
              </p>
              <p>
                Big software agencies weren&apos;t interested — the contracts weren&apos;t large enough. Off-the-shelf
                software didn&apos;t quite fit. So business owners just kept doing it the hard way.
              </p>
              <p>
                I fix that. I build custom apps tailored to exactly how your business works — not a template
                you have to adapt to. And because I use modern no-code tools, I can do it in days, not months,
                at a price that actually makes sense for a small business.
              </p>
              <p>
                Every client owns everything I build. No monthly fees to me. No dependency on my continued
                involvement. Just an app that works, trained staff who know how to use it, and full handover.
              </p>
            </div>
          </div>

          {/* Lucas card */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-[#1E293B] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#06B6D4]/10 to-[#10B981]/5 pointer-events-none" />
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#10B981] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  L
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Lucas E. B.</p>
                  <p className="text-sm text-slate-400">Founder, LEB Systems</p>
                  <p className="text-xs text-[#06B6D4] mt-1">Auckland, New Zealand</p>
                </div>
              </div>
              <div className="relative z-10 space-y-3 text-sm text-slate-400">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-2 flex-shrink-0" />
                  <span>No-code developer with 50+ apps delivered to NZ businesses</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 flex-shrink-0" />
                  <span>GST registered — invoices included, no surprises</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA] mt-2 flex-shrink-0" />
                  <span>NZ Privacy Act 2020 compliance built into every app</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] mt-2 flex-shrink-0" />
                  <span>Available for in-person meetings across Auckland</span>
                </div>
              </div>
              <div className="relative z-10 mt-6 pt-6 border-t border-white/5">
                <p className="text-xs text-slate-500 italic">
                  &quot;Lucas built our booking system in under 2 weeks. Our no-shows dropped by 60% and
                  we save 10 hours a week on admin.&quot;
                </p>
                <p className="text-xs text-slate-600 mt-2">— Auckland gym owner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">How I work</h2>
          <p className="text-slate-400 font-light">The principles behind every app I build.</p>
        </motion.div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#1E293B] border border-white/5 rounded-2xl p-8 flex gap-5 group hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                {v.icon}
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">The tools I use</h2>
          <p className="text-slate-400 font-light">Best-in-class no-code platforms and automation tools.</p>
        </motion.div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {toolCategories.map((pillar, i) => (
            <motion.div key={pillar.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#1E293B] border border-white/5 rounded-2xl p-6">
              <h4 className="text-white font-semibold text-sm mb-4">{pillar.name}</h4>
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs text-slate-400 bg-white/5 border border-white/5 rounded-lg">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto bg-gradient-to-br from-[#06B6D4]/15 via-[#1E293B] to-[#243347] border border-[#06B6D4]/15 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/8 to-transparent blur-[100px] pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 relative z-10">Let&apos;s talk about your app.</h2>
          <p className="text-slate-300 mb-10 text-lg font-light relative z-10 max-w-xl mx-auto">
            Book a free 15-min call. No pitch, no pressure — just an honest conversation about what your business needs.
          </p>
          <a href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.45)] relative z-10 group">
            Book a free chat <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
