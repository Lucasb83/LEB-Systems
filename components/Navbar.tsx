"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#0B0B10]/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.jpg" 
              alt="LEB Systems" 
              className="w-8 h-8 rounded-full object-cover shadow-[0_0_15px_rgba(147,51,234,0.5)] group-hover:scale-105 transition-transform" 
            />
            <span className="text-white font-semibold text-lg tracking-tight">LEB Systems</span>
          </a>
          
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-400">
            <button className="flex items-center gap-1 hover:text-white transition-colors">Product <ChevronDown className="w-3 h-3" /></button>
            <button className="flex items-center gap-1 hover:text-white transition-colors">Use cases <ChevronDown className="w-3 h-3" /></button>
            <button className="flex items-center gap-1 hover:text-white transition-colors">Docs <ChevronDown className="w-3 h-3" /></button>
            <button className="flex items-center gap-1 hover:text-white transition-colors">Community <ChevronDown className="w-3 h-3" /></button>
            <a href="#" className="hover:text-white transition-colors">Enterprise</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="/portal" className="hidden md:block text-slate-300 hover:text-white transition-colors">Sign in</a>
          <a href="/portal" className="px-5 py-2.5 bg-gradient-to-r from-[#9333EA] via-[#EC4899] to-[#FF4F27] text-white rounded-md hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(236,72,153,0.4)]">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}