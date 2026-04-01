"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Clock, ArrowRight, Check,
  MessageSquare, User, Building2, ChevronDown,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d * 0.1, ease: [0.16, 1, 0.3, 1] as const } }),
};

const services = [
  "Booking & Reservations App",
  "Order & Menu App",
  "Client Portal & CRM",
  "Inventory & Sales Dashboard",
  "WhatsApp / Instagram Automation",
  "Not sure yet — help me decide",
];

const packages = [
  "Starter App – $1,800 NZD (simple MVP in 14–21 days)",
  "Growth App – $3,500 NZD (most popular — full features + integrations)",
  "Custom Solution – from $5,500 NZD (advanced with AI/automation)",
  "Not sure yet",
];

const contactInfo = [
  { icon: <Mail className="w-5 h-5 text-[#06B6D4]" />, label: "Email", value: "lebsystems.flow@gmail.com" },
  { icon: <Clock className="w-5 h-5 text-[#9333EA]" />, label: "Response time", value: "Within 24 hours" },
  { icon: <MapPin className="w-5 h-5 text-[#EC4899]" />, label: "Location", value: "Auckland, New Zealand" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });
  // budget field stores the selected package
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const handleChange = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const inputBase = "w-full bg-[#1E293B] border border-white/8 text-white text-sm rounded-xl px-4 py-3.5 outline-none focus:border-[#06B6D4]/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all placeholder:text-slate-600 appearance-none";

  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse 80% 50% at 50% 40%, black 40%, transparent 100%)" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#06B6D4] blur-[160px] opacity-8 pointer-events-none" />

        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_6px_#06B6D4]" />
          Get in touch
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-5 leading-tight">
          Let&apos;s get your{" "}
          <span className="bg-gradient-to-r from-[#06B6D4] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
            Auckland business an app.
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg text-slate-400 font-light max-w-xl leading-relaxed">
          Fill in the form and Lucas will get back to you within 24 hours with a clear scope and fixed price.
        </motion.p>
      </section>

      {/* Main content */}
      <section className="py-8 px-6 relative z-10 pb-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left info panel */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6">

            {/* Contact info */}
            <div className="bg-[#1E293B] border border-white/5 rounded-3xl p-8">
              <h3 className="text-white font-bold text-lg mb-6">Contact information</h3>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What to expect */}
            <div className="bg-[#1E293B] border border-white/5 rounded-3xl p-8">
              <h3 className="text-white font-bold text-lg mb-6">What happens next?</h3>
              <div className="space-y-5">
                {[
                  { step: "1", title: "We review your request", desc: "Within 24h we read every detail and prepare questions." },
                  { step: "2", title: "Discovery call", desc: "30 minutes — we listen, ask, and align on the goal." },
                  { step: "3", title: "Tailored proposal", desc: "A clear scope, timeline, and fixed price. No surprises." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#06B6D4]/15 border border-[#06B6D4]/25 flex items-center justify-center text-xs font-bold text-[#06B6D4] flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">{item.title}</p>
                      <p className="text-slate-400 text-xs font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social proof */}
            <div className="bg-gradient-to-br from-[#06B6D4]/10 to-[#1E293B] border border-[#06B6D4]/15 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#06B6D4]/10 blur-[60px] pointer-events-none rounded-full" />
              <p className="text-slate-300 text-sm italic font-light leading-relaxed mb-5 relative z-10">
                &ldquo;Lucas built our booking system in under 2 weeks. Our no-shows dropped by 60% and we save 10+ hours a week on admin. Best money we&rsquo;ve spent on the business.&rdquo;
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#06B6D4]/20 border border-[#06B6D4]/30 flex items-center justify-center text-xs font-bold text-[#06B6D4]">S</div>
                <div>
                  <p className="text-white text-xs font-semibold">Sarah M.</p>
                  <p className="text-slate-500 text-xs">Gym owner, Auckland</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form panel */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-3">
            <div className="bg-[#1E293B] border border-white/5 rounded-3xl p-8 md:p-10">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6">
                    <Check className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">Message received!</h3>
                  <p className="text-slate-400 font-light leading-relaxed max-w-sm">
                    Thanks for reaching out. We'll review your project details and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-white font-bold text-xl mb-6">Tell Lucas about your business</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-slate-400 font-medium mb-2 block">Your name *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                        <input type="text" required placeholder="John Smith" value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className={`${inputBase} pl-10`} />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 font-medium mb-2 block">Work email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                        <input type="email" required placeholder="john@company.com" value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className={`${inputBase} pl-10`} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 font-medium mb-2 block">Company</label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                      <input type="text" placeholder="Your company name" value={form.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className={`${inputBase} pl-10`} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-slate-400 font-medium mb-2 block">App type needed *</label>
                      <div className="relative">
                        <select required value={form.service}
                          onChange={(e) => handleChange("service", e.target.value)}
                          className={`${inputBase} cursor-pointer`}>
                          <option value="" disabled>Select a service</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 font-medium mb-2 block">Package (optional)</label>
                      <div className="relative">
                        <select value={form.budget}
                          onChange={(e) => handleChange("budget", e.target.value)}
                          className={`${inputBase} cursor-pointer`}>
                          <option value="">Select a package</option>
                          {packages.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 font-medium mb-2 block">Tell us about your project *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-600" />
                      <textarea required rows={5} value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell me about your business and what problem you want to solve. E.g. 'I run a hair salon in Ponsonby and I need an online booking system with payment.'"
                        className={`${inputBase} pl-10 resize-none`} />
                    </div>
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#06B6D4] hover:bg-[#0891B2] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] group">
                    {loading ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center font-light">
                    By submitting this form you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
