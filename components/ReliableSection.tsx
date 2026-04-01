"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, MapPin, FileText, Key } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const pillars = [
  {
    icon: <MapPin className="w-4 h-4 text-[#FF4F27]" />,
    title: "Proudly Auckland-based",
    desc: "I'm local — we meet in person, I understand NZ business culture, and I'm available on NZ time when you need me.",
  },
  {
    icon: <FileText className="w-4 h-4 text-[#FF4F27]" />,
    title: "NZ Privacy Act & GST compliant",
    desc: "All apps are built with NZ Privacy Act 2020 compliance in mind. Invoices include GST. No surprises.",
  },
  {
    icon: <Key className="w-4 h-4 text-[#FF4F27]" />,
    title: "100% client ownership",
    desc: "You get the source code, the database, and the hosting credentials. It's yours forever — no monthly fees to me.",
  },
];

export default function ReliableSection() {
  return (
    <section className="py-20 px-6 relative z-10">
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center"
      >
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
            <Shield className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-xs text-slate-300 font-medium">Proudly Auckland-based</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Local. Trusted.<br />No lock-in.
          </h2>
          <p className="text-slate-400 mb-8 text-lg font-light leading-relaxed">
            You&apos;re not hiring a faceless offshore agency. I&apos;m Lucas — based in Auckland,
            building apps for NZ small businesses with transparent pricing and full ownership guaranteed.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="/pricing"
              className="flex items-center gap-2 px-6 py-3 bg-[#23242D] border border-white/10 hover:border-[#FF4F27]/40 text-white text-sm font-medium rounded-lg transition-colors group"
            >
              See pricing packages
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white text-sm font-medium rounded-lg transition-colors border border-transparent hover:border-white/10"
            >
              Talk to Lucas
            </a>
          </div>

          <div className="space-y-8 border-l-2 border-white/8 pl-6">
            {pillars.map((p) => (
              <div key={p.title}>
                <div className="flex items-center gap-2 mb-1.5">
                  {p.icon}
                  <h4 className="text-white font-semibold text-sm">{p.title}</h4>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-[#14151A] p-8 flex flex-col gap-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4F27]/10 to-[#9333EA]/5 pointer-events-none" />

            {/* Lucas card */}
            <div className="relative z-10 flex items-center gap-4 p-5 bg-[#1A1A1E] border border-white/5 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF4F27] to-[#FF9B26] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                L
              </div>
              <div>
                <p className="text-white font-semibold">Lucas</p>
                <p className="text-xs text-slate-400">Auckland, New Zealand</p>
                <p className="text-xs text-[#FF4F27] mt-1">Available for new projects</p>
              </div>
            </div>

            {/* Trust stats */}
            <div className="relative z-10 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-[#0e0918]/80 border border-white/5 rounded-2xl p-4">
                <span className="text-2xl font-bold text-white">50+</span>
                <span className="text-xs text-slate-400 text-center mt-1">Projects delivered</span>
              </div>
              <div className="flex flex-col items-center bg-[#0e0918]/80 border border-white/5 rounded-2xl p-4">
                <span className="text-2xl font-bold text-[#FF4F27]">NZ</span>
                <span className="text-xs text-slate-400 text-center mt-1">Privacy Act ready</span>
              </div>
              <div className="flex flex-col items-center bg-[#0e0918]/80 border border-white/5 rounded-2xl p-4">
                <span className="text-2xl font-bold text-white">GST</span>
                <span className="text-xs text-slate-400 text-center mt-1">Registered</span>
              </div>
            </div>

            {/* Testimonial placeholder */}
            <div className="relative z-10 p-5 bg-[#1A1A1E] border border-white/5 rounded-2xl">
              <p className="text-sm text-slate-300 italic leading-relaxed">
                &quot;Lucas built our booking system in under 2 weeks. Our no-shows dropped by 60% and we save 10 hours a week on admin.&quot;
              </p>
              <p className="text-xs text-slate-500 mt-3">— Auckland gym owner</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
