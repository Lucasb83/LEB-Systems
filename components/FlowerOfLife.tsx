"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function FlowerOfLife() {
  const circles = [
    { id: "center", cx: 0, cy: 0 },
    { id: "r1-1", cx: 40, cy: 0 },
    { id: "r1-2", cx: 20, cy: 34.641 },
    { id: "r1-3", cx: -20, cy: 34.641 },
    { id: "r1-4", cx: -40, cy: 0 },
    { id: "r1-5", cx: -20, cy: -34.641 },
    { id: "r1-6", cx: 20, cy: -34.641 },
    { id: "r2-1", cx: 80, cy: 0 },
    { id: "r2-2", cx: 60, cy: 34.641 },
    { id: "r2-3", cx: 40, cy: 69.282 },
    { id: "r2-4", cx: 0, cy: 69.282 },
    { id: "r2-5", cx: -40, cy: 69.282 },
    { id: "r2-6", cx: -60, cy: 34.641 },
    { id: "r2-7", cx: -80, cy: 0 },
    { id: "r2-8", cx: -60, cy: -34.641 },
    { id: "r2-9", cx: -40, cy: -69.282 },
    { id: "r2-10", cx: 0, cy: -69.282 },
    { id: "r2-11", cx: 40, cy: -69.282 },
    { id: "r2-12", cx: 60, cy: -34.641 },
  ];

  const sparkles = useMemo(
    () =>
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 900,
        y: (Math.random() - 0.5) * 600,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 2.5 + 1.5,
        delay: Math.random() * 4,
      })),
    []
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (d: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: d * 0.15, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[820px] bg-transparent overflow-hidden pt-24 pb-12">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#9333EA] blur-[200px] opacity-15 pointer-events-none" />

      {/* Orange glow bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-[#FF4F27] blur-[120px] opacity-10 pointer-events-none" />

      {/* Sparkles */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-purple-200"
          style={{
            left: `calc(50% + ${s.x}px)`,
            top: `calc(45% + ${s.y}px)`,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 8px 2px rgba(168,85,247,0.5)",
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Flower of Life SVG */}
      <div className="relative z-10 w-full max-w-[380px] aspect-square flex items-center justify-center mb-2">
        <svg
          viewBox="-200 -200 400 400"
          className="w-full h-full overflow-visible"
          style={{
            filter:
              "drop-shadow(0px 0px 14px rgba(168,85,247,0.85)) drop-shadow(0px 0px 35px rgba(147,51,234,0.45))",
          }}
        >
          {circles.map((circle, index) => (
            <motion.circle
              key={circle.id}
              cx={circle.cx}
              cy={circle.cy}
              r="40"
              fill="none"
              stroke="#e9d5ff"
              strokeWidth="1.1"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.15, 0.9, 0.15] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: index * 0.08, ease: "easeInOut" }}
            />
          ))}
          <motion.circle cx="0" cy="0" r="120" fill="none" stroke="#d8b4fe" strokeWidth="1.5"
            animate={{ opacity: [0.3, 0.75, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <motion.circle cx="0" cy="0" r="125" fill="none" stroke="#c084fc" strokeWidth="2"
            animate={{ opacity: [0.2, 0.55, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} />
        </svg>
      </div>

      {/* Copy */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-[-20px]">

        {/* Eyebrow */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F27] shadow-[0_0_6px_#FF4F27]" />
          Trusted by growing teams worldwide
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          style={{ textShadow: "0 0 40px rgba(168,85,247,0.3)" }}
        >
          Infrastructure.{" "}
          <span className="bg-gradient-to-r from-[#FF4F27] via-[#FF9B26] to-[#FF4F27] bg-clip-text text-transparent">
            Design.
          </span>{" "}
          AI.{" "}
          <br className="hidden md:block" />
          All in one place.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-10"
        >
          We design, build, and automate the digital stack that lets your business scale —
          from enterprise infrastructure to intelligent AI agents and custom applications.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#"
            className="flex items-center gap-2 px-7 py-3.5 bg-[#FF4F27] hover:bg-[#FF6B00] text-white font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(255,79,39,0.45)] hover:shadow-[0_0_45px_rgba(255,79,39,0.6)] group"
          >
            Start your project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-white/30 text-white font-medium rounded-lg transition-all hover:bg-white/5 group"
          >
            <Play className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            Explore services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/5 w-full"
        >
          {[
            { value: "50+", label: "Projects delivered" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "5×", label: "Average efficiency gain" },
            { value: "24/7", label: "Monitoring & support" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-slate-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
