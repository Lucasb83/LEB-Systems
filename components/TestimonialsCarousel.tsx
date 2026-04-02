"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Owner, Flex Auckland Gym",
    initials: "SM",
    color: "#06B6D4",
    quote:
      "Lucas built our booking system in under 2 weeks. Our no-shows dropped by 60% and we save over 10 hours a week on admin. Best investment we've made for the business.",
    stars: 5,
  },
  {
    name: "James T.",
    role: "Manager, The Good Cup Café (CBD)",
    initials: "JT",
    color: "#10B981",
    quote:
      "Table ordering via QR code changed everything. We turn tables 30% faster and kitchen errors dropped to near zero. My staff are less stressed, and tips went up.",
    stars: 5,
  },
  {
    name: "Emma K.",
    role: "Business Coach, Auckland",
    initials: "EK",
    color: "#9333EA",
    quote:
      "The client portal Lucas built is exactly what I needed — invoices, session notes and follow-ups all in one place. Xero connects automatically. Saved me hours every week.",
    stars: 5,
  },
  {
    name: "Mike R.",
    role: "Owner, Kiwi Threads Boutique",
    initials: "MR",
    color: "#EC4899",
    quote:
      "We were managing stock across two Auckland stores in spreadsheets. Now I get a WhatsApp alert when anything runs low. Stock accuracy went from guesswork to real-time.",
    stars: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
      style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
    >
      {initials}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  const go = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="py-20 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1200px] mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]" />
            Real results from Auckland businesses
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            What our clients say
          </h2>
        </div>

        {/* Desktop: first 3 in a grid */}
        <div className="hidden md:grid grid-cols-3 gap-5 mb-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1E293B] border border-white/5 rounded-3xl p-7 flex flex-col group hover:border-white/10 hover:shadow-[0_0_40px_rgba(6,182,212,0.08)] transition-all duration-500 cursor-default"
            >
              <StarRow count={t.stars} />
              <p className="text-slate-300 text-sm leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar initials={t.initials} color={t.color} />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 4th testimonial full-width */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex bg-[#1E293B] border border-white/5 rounded-3xl p-7 items-center gap-8 group hover:border-white/10 hover:shadow-[0_0_40px_rgba(6,182,212,0.08)] transition-all duration-500 cursor-default"
        >
          <div className="flex gap-0.5 flex-shrink-0">
            {Array.from({ length: testimonials[3].stars }).map((_, j) => (
              <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-slate-300 text-sm leading-relaxed italic flex-1">
            &ldquo;{testimonials[3].quote}&rdquo;
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Avatar initials={testimonials[3].initials} color={testimonials[3].color} />
            <div>
              <p className="text-white font-semibold text-sm">{testimonials[3].name}</p>
              <p className="text-slate-500 text-xs">{testimonials[3].role}</p>
            </div>
          </div>
        </motion.div>

        {/* Mobile: AnimatePresence carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#1E293B] border border-white/5 p-7 flex flex-col"
              >
                <StarRow count={testimonials[current].stars} />
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar initials={testimonials[current].initials} color={testimonials[current].color} />
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonials[current].name}</p>
                    <p className="text-slate-500 text-xs">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-[#1E293B] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-5 h-1.5 bg-[#06B6D4]" : "w-1.5 h-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-[#1E293B] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
