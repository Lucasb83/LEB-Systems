"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

/*
  Hero logo geometry — viewBox="0 0 200 200", centre=(100,100).
  L bounding box: x 68→145, y 50→148  (optical centre ≈ 102,99).
  All primary nodes (r=6) stay within r≈68 from centre → clear of
  the orbit rings (r=76 inner, r=90 outer).
*/
const PRIMARY_NODES = [
  { cx: 68,  cy: 50  }, // top
  { cx: 68,  cy: 148 }, // corner
  { cx: 145, cy: 148 }, // end
];

const BRANCH_NODES = [
  { cx: 68, cy: 85,  ex: 98,  ey: 85,  delay: 0.8  }, // upper tap
  { cx: 68, cy: 118, ex: 100, ey: 118, delay: 1.0  }, // lower tap
  { cx: 107, cy: 148, ex: 107, ey: 126, delay: 1.1 }, // upward tap on H
];

export default function FlowerOfLife() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (d: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: d * 0.15, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section ref={sectionRef} className="relative flex flex-col items-center justify-center w-full min-h-[820px] bg-transparent overflow-hidden pt-24 pb-12">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Parallax glows */}
      <motion.div style={{ opacity: bgOpacity }} className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#06B6D4] blur-[200px] opacity-10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-[#10B981] blur-[140px] opacity-8" />
      </motion.div>

      {/* ── Circuit-board L logo — parallax ── */}
      <motion.div
        style={{ y: logoY }}
        className="relative z-10 mb-6"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Outer halo ring */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ boxShadow: "0 0 80px 20px rgba(6,182,212,0.18)" }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg
          viewBox="0 0 200 200"
          width="280"
          height="280"
          style={{ filter: "drop-shadow(0px 0px 18px rgba(6,182,212,0.7)) drop-shadow(0px 0px 45px rgba(8,145,178,0.35))" }}
        >
          {/* ── Orbit rings (centred at 100,100; L stays well inside r=76) ── */}
          <motion.circle cx="100" cy="100" r="90"
            fill="none" stroke="#06B6D4" strokeWidth="1" strokeDasharray="6 10" opacity={0.2}
            animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />
          <motion.circle cx="100" cy="100" r="76"
            fill="none" stroke="#0891B2" strokeWidth="0.8" strokeDasharray="4 14" opacity={0.15}
            animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          />

          {/* ── Main L — vertical bar: x=68, y 50→148 ── */}
          <motion.line
            x1="68" y1="50" x2="68" y2="148"
            stroke="#06B6D4" strokeWidth="5" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* ── Main L — horizontal bar: y=148, x 68→145 ── */}
          <motion.line
            x1="68" y1="148" x2="145" y2="148"
            stroke="#06B6D4" strokeWidth="5" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* ── Branch lines ── */}
          {BRANCH_NODES.map(({ cx, cy, ex, ey, delay }, i) => (
            <motion.line key={i}
              x1={cx} y1={cy} x2={ex} y2={ey}
              stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ duration: 0.45, delay, ease: "easeOut" }}
            />
          ))}

          {/* ── Primary nodes ── */}
          {PRIMARY_NODES.map(({ cx, cy }, i) => (
            <motion.circle key={i} cx={cx} cy={cy} r="6" fill="#06B6D4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 + i * 0.3, ease: "easeInOut" }}
            />
          ))}

          {/* ── Branch endpoint nodes ── */}
          {BRANCH_NODES.map(({ ex, ey, delay }, i) => (
            <motion.circle key={i} cx={ex} cy={ey} r="4" fill="#10B981"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.4 + delay, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Copy — parallax */}
      <motion.div style={{ y: copyY }} className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full">

        {/* Eyebrow */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_6px_#06B6D4]" />
          AU/NZ · Enterprise B2B · Multi-month Transformation Programs
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          style={{ textShadow: "0 0 40px rgba(168,85,247,0.3)" }}
        >
          Your Operations Are the{" "}
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-[#06B6D4] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
            Infrastructure
          </span>{" "}
          for Everything Else.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-10"
        >
          We partner with AU/NZ B2B companies to replace manual operations, modernise legacy systems, and build the platforms your team actually ships on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="/contact"
            className="flex items-center gap-2 px-7 py-3.5 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:shadow-[0_0_45px_rgba(6,182,212,0.6)] group"
          >
            Book Strategy Session
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/case-studies"
            className="flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-white/30 text-white font-medium rounded-lg transition-all hover:bg-white/5 group"
          >
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            View Case Studies
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/5 w-full"
        >
          {[
            { value: "4", label: "Transformation pillars" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "3×", label: "Faster delivery" },
            { value: "AU/NZ", label: "Enterprise market" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-slate-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
