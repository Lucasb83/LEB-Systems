"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0e0918] text-slate-300 flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#FF4F27] blur-[200px] opacity-8 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#9333EA] blur-[150px] opacity-8 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-xl"
      >
        {/* Logo */}
        <a href="/" className="inline-flex items-center gap-2.5 mb-12">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4F27] to-[#FF6B00] flex items-center justify-center shadow-[0_0_18px_rgba(255,79,39,0.5)]">
            <span className="text-white font-bold text-xs">L</span>
          </div>
          <span className="text-white font-semibold text-base">LEB Systems</span>
        </a>

        {/* 404 */}
        <div className="text-[9rem] font-black text-white/5 leading-none mb-2 select-none">404</div>

        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 -mt-4">
          Page not found
        </h1>
        <p className="text-slate-400 font-light leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 px-7 py-3.5 bg-[#FF4F27] hover:bg-[#FF6B00] text-white font-semibold rounded-lg transition-all shadow-[0_0_25px_rgba(255,79,39,0.4)] group"
          >
            <Home className="w-4 h-4" />
            Back to home
          </a>
          <a
            href="/contact"
            className="flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-white/30 text-white font-medium rounded-lg transition-all hover:bg-white/5"
          >
            <Search className="w-4 h-4 text-slate-400" />
            Get in touch
          </a>
        </div>

        {/* Quick nav */}
        <div className="mt-14 flex flex-wrap gap-3 justify-center">
          {[
            { label: "Services", href: "/services" },
            { label: "Solutions", href: "/solutions" },
            { label: "AI & Automation", href: "/ai-automation" },
            { label: "About", href: "/about" },
          ].map((link) => (
            <a key={link.href} href={link.href}
              className="px-4 py-2 text-xs text-slate-400 hover:text-white border border-white/8 hover:border-white/20 rounded-lg transition-all">
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
