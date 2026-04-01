"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays, UtensilsCrossed, Users, BarChart3, MessageCircle,
  Check, ArrowRight, CreditCard, Bell, Clock,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function BentoGrid() {
  return (
    <section className="py-20 px-6 relative z-10">
      {/* Section header */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1200px] mx-auto mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Apps that fit your NZ business
        </h2>
        <p className="text-xl text-slate-400 font-light">Five solutions. Built for cafés, gyms, retail, and more.</p>
      </motion.div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">

        {/* Card 1 – Booking & Reservations (8 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-8 bg-[#14151A] border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:border-white/10 hover:shadow-[0_0_50px_rgba(255,79,39,0.12)] transition-all duration-500 cursor-default"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4F27]/8 blur-[90px] pointer-events-none rounded-full group-hover:bg-[#FF4F27]/15 transition-all duration-700" />
          <div className="flex-1 z-10 flex flex-col justify-center">
            <div className="w-10 h-10 rounded-xl bg-[#FF4F27]/15 border border-[#FF4F27]/20 flex items-center justify-center mb-5">
              <CalendarDays className="w-5 h-5 text-[#FF4F27]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
              Booking &amp; Reservations<br />App
            </h3>
            <p className="text-slate-400 mb-5 text-sm leading-relaxed font-light">
              Perfect for hair salons, gyms, tutors, and service businesses. Online calendar, Stripe/Paystation payments,
              and automatic WhatsApp/email reminders — all in one place.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-7">
              {["Online booking calendar", "Automatic reminders", "Stripe / Paystation", "No-show reduction"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#FF4F27] flex-shrink-0" /> {f}
                </div>
              ))}
            </div>
            <a href="/services#booking" className="inline-flex items-center gap-2 text-sm text-white font-medium px-5 py-2.5 bg-[#23242D] border border-white/10 group-hover:border-[#FF4F27]/40 rounded-lg transition-colors w-fit">
              Learn more <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center z-10">
            <div className="w-full max-w-xs bg-[#0e0918] border border-white/5 rounded-2xl p-5 shadow-2xl group-hover:border-white/15 transition-colors">
              <div className="text-xs text-slate-500 font-mono mb-4 flex items-center gap-2">
                <Clock className="w-3 h-3" /> Today's bookings
              </div>
              <div className="space-y-2.5">
                {[
                  { time: "10:00 AM", name: "Sarah M. — Haircut", status: "confirmed" },
                  { time: "11:30 AM", name: "James T. — PT Session", status: "confirmed" },
                  { time: "2:00 PM", name: "Emma L. — Consultation", status: "pending" },
                ].map((b) => (
                  <div key={b.time} className="flex items-center justify-between bg-[#1A1A1E] p-2.5 rounded-lg border border-white/5">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-300">{b.name}</span>
                      <span className="text-[10px] text-slate-500">{b.time}</span>
                    </div>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${b.status === "confirmed" ? "bg-emerald-500 shadow-[0_0_6px_#10b981]" : "bg-amber-400"}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 – Order & Menu App (4 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-4 bg-[#14151A] border border-white/5 rounded-3xl p-10 relative group hover:border-white/10 hover:shadow-[0_0_50px_rgba(147,51,234,0.12)] transition-all duration-500 flex flex-col cursor-default overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9333EA]/8 blur-[80px] pointer-events-none rounded-full group-hover:bg-[#9333EA]/15 transition-all duration-700" />
          <div className="w-10 h-10 rounded-xl bg-[#9333EA]/15 border border-[#9333EA]/20 flex items-center justify-center mb-5">
            <UtensilsCrossed className="w-5 h-5 text-[#9333EA]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">
            Order &amp; Menu App
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
            Digital menu, table QR ordering, and kitchen display for cafés and food trucks. EFTPOS-ready.
          </p>
          <div className="space-y-3 mt-auto z-10">
            <div className="bg-[#1A1A1E] border border-white/5 rounded-xl p-3.5 text-xs text-slate-300 flex items-center gap-2">
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#9333EA]" />
              Table 4 — 3 items · $42.50
            </div>
            <div className="bg-[#2A1A2E] border border-[#9333EA]/20 rounded-xl p-3.5 text-xs text-slate-200 relative">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-7 bg-[#9333EA] rounded-full group-hover:shadow-[0_0_10px_#9333EA] transition-shadow" />
              Kitchen: 2 orders in queue
            </div>
          </div>
        </motion.div>

        {/* Card 3 – Client Portal & CRM (6 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-6 bg-[#14151A] border border-white/5 rounded-3xl p-10 relative group hover:border-white/10 hover:shadow-[0_0_50px_rgba(236,72,153,0.12)] transition-all duration-500 flex flex-col cursor-default overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#EC4899]/8 blur-[80px] pointer-events-none rounded-full group-hover:bg-[#EC4899]/15 transition-all duration-700" />
          <div className="w-10 h-10 rounded-xl bg-[#EC4899]/15 border border-[#EC4899]/20 flex items-center justify-center mb-5">
            <Users className="w-5 h-5 text-[#EC4899]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Client Portal &amp; CRM</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-7 font-light">
            For coaches, consultants, and retail — track clients, send invoices, manage follow-ups,
            and keep your business organised in one clean dashboard.
          </p>
          <div className="grid grid-cols-2 gap-2 z-10">
            {["Client profiles", "Invoice tracking", "Follow-up reminders", "Xero integration"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-[#EC4899] flex-shrink-0" /> {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 4 – Inventory & Sales Dashboard (6 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-6 bg-[#14151A] border border-white/5 rounded-3xl p-10 relative group hover:border-white/10 hover:shadow-[0_0_50px_rgba(255,155,38,0.12)] transition-all duration-500 flex flex-col cursor-default overflow-hidden"
        >
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#FF9B26]/8 blur-[80px] pointer-events-none rounded-full group-hover:bg-[#FF9B26]/15 transition-all duration-700" />
          <div className="w-10 h-10 rounded-xl bg-[#FF9B26]/15 border border-[#FF9B26]/20 flex items-center justify-center mb-5">
            <BarChart3 className="w-5 h-5 text-[#FF9B26]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Inventory &amp; Sales Dashboard</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-7 font-light">
            Real-time stock levels, daily sales reports, and low-stock alerts. Ideal for small retail shops
            that are done with spreadsheets.
          </p>
          <div className="grid grid-cols-2 gap-2 z-10">
            {["Live stock levels", "Sales reports", "Low-stock alerts", "Multi-location ready"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-[#FF9B26] flex-shrink-0" /> {f}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 5 – WhatsApp Automation (12 cols) */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-12 bg-[#14151A] border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-12 group hover:border-white/10 hover:shadow-[0_0_50px_rgba(147,51,234,0.12)] transition-all duration-500 cursor-default overflow-hidden relative"
        >
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#9333EA]/6 blur-[120px] pointer-events-none rounded-full group-hover:bg-[#9333EA]/12 transition-all duration-700" />

          <div className="flex-1 w-full flex justify-center z-10">
            <div className="bg-[#0e0918] border border-white/10 rounded-2xl p-6 relative w-full max-w-xs group-hover:border-white/20 transition-colors">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#14151A] px-3 py-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest border border-white/5 rounded-full">
                WhatsApp Bot
              </div>
              <div className="space-y-3 mt-3">
                {[
                  { msg: "Hi! I'd like to book a table for 2", from: "customer" },
                  { msg: "Sure! What time works for you?", from: "bot" },
                  { msg: "7pm tonight please", from: "customer" },
                  { msg: "✅ Booked! See you at 7pm.", from: "bot" },
                ].map((m, i) => (
                  <div
                    key={i}
                    className={`text-xs px-3 py-2 rounded-xl max-w-[80%] ${
                      m.from === "customer"
                        ? "bg-[#1A1A1E] text-slate-300 border border-white/5"
                        : "bg-[#9333EA]/20 text-purple-200 border border-[#9333EA]/20 ml-auto text-right"
                    }`}
                  >
                    {m.msg}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 z-10">
            <div className="w-10 h-10 rounded-xl bg-[#9333EA]/15 border border-[#9333EA]/20 flex items-center justify-center mb-5">
              <MessageCircle className="w-5 h-5 text-[#9333EA]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
              WhatsApp &amp; Instagram Automation
            </h3>
            <p className="text-slate-400 mb-8 text-sm font-light leading-relaxed">
              Never miss a lead again. Auto-reply to enquiries, take bookings, send confirmations,
              and run marketing flows — all through WhatsApp and Instagram DMs, 24/7.
            </p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#9333EA] flex-shrink-0" /> Instant auto-replies to common questions</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#9333EA] flex-shrink-0" /> Booking flows directly inside WhatsApp</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#9333EA] flex-shrink-0" /> Promotional broadcasts &amp; follow-up sequences</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
