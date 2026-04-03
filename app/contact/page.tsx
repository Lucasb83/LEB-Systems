"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Mail, Globe, ArrowRight, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const inputBase =
  "w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#06B6D4]/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all placeholder:text-slate-600 appearance-none";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    program: "",
    size: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-300 overflow-x-hidden">
      <Navbar />

      <div className="max-w-[1200px] mx-auto py-20 px-6">
        {/* Hero above columns */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Let&apos;s map your transformation.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            Tell us about your company and where you want to go. We&apos;ll review within one business day and schedule a 60-minute strategy session.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            {/* Contact items */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">AU/NZ Coverage</p>
                  <p className="text-slate-400 text-sm">Remote-first. We work across AU/NZ timezones.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">hello@lebsystems.co.nz</p>
                </div>
              </div>
            </div>

            {/* 3-step process */}
            <div className="mt-8">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-5">
                What happens next
              </p>
              <div className="space-y-5">
                {[
                  { step: "1", title: "Submit this form", desc: "We review within one business day." },
                  { step: "2", title: "Strategy session (60 min)", desc: "We map your current state and target outcomes." },
                  { step: "3", title: "Program proposal", desc: "Fixed scope, clear KPIs, agreed timeline." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#06B6D4]/15 border border-[#06B6D4]/25 flex items-center justify-center text-xs font-bold text-[#06B6D4] flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">{item.title}</p>
                      <p className="text-slate-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote block */}
            <div className="mt-8 p-5 bg-[#1E293B] border border-white/5 rounded-2xl">
              <p className="text-slate-300 text-sm italic leading-relaxed mb-3">
                &ldquo;The strategy session alone was worth it. LEB identified three automation opportunities we hadn&apos;t considered.&rdquo;
              </p>
              <p className="text-xs text-slate-500">James T., CTO — AU SaaS Platform</p>
            </div>
          </motion.div>

          {/* Right column — form card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-[#1E293B] border border-white/5 rounded-3xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#06B6D4]/15 border border-[#06B6D4]/30 flex items-center justify-center mb-6">
                    <Check className="w-7 h-7 text-[#06B6D4]" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">We&apos;ve received your request.</h3>
                  <p className="text-slate-400 leading-relaxed max-w-sm">
                    Expect to hear from us within one business day to schedule your strategy session.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-white font-bold text-xl mb-6">Tell us about your company</h3>

                  {/* Name */}
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={inputBase}
                  />

                  {/* Email */}
                  <input
                    type="email"
                    required
                    placeholder="your@company.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputBase}
                  />

                  {/* Company */}
                  <input
                    type="text"
                    placeholder="Company name"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className={inputBase}
                  />

                  {/* Program select */}
                  <select
                    value={form.program}
                    onChange={(e) => handleChange("program", e.target.value)}
                    className={`${inputBase} cursor-pointer`}
                  >
                    <option value="" disabled>Select a program</option>
                    <option value="ai-automation">AI Automation Systems</option>
                    <option value="cloud">Cloud Modernisation</option>
                    <option value="platform">Platform Engineering</option>
                    <option value="infrastructure">Continuous Infrastructure</option>
                    <option value="multiple">Multiple programs</option>
                    <option value="unsure">Not sure yet</option>
                  </select>

                  {/* Company size select */}
                  <select
                    value={form.size}
                    onChange={(e) => handleChange("size", e.target.value)}
                    className={`${inputBase} cursor-pointer`}
                  >
                    <option value="" disabled>Company size</option>
                    <option value="50-200">50–200 employees</option>
                    <option value="200-500">200–500 employees</option>
                    <option value="500-2000">500–2,000 employees</option>
                    <option value="2000+">2,000+ employees</option>
                  </select>

                  {/* Message textarea */}
                  <textarea
                    rows={4}
                    placeholder="Describe your current challenges and where you'd like to be in 12 months."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`${inputBase} resize-none`}
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] group"
                  >
                    Request Strategy Session
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
