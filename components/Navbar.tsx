"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { label: "Infrastructure Development", desc: "Cloud, on-prem, Kubernetes & Docker" },
  { label: "Web Design", desc: "Fast, modern, conversion-ready sites" },
  { label: "AI Implementation", desc: "LLMs, RAG pipelines & AI agents" },
  { label: "Process Automation", desc: "Connect tools, eliminate manual work" },
  { label: "Custom Applications", desc: "Bespoke software for your business" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0e0918]/85 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4F27] to-[#FF6B00] flex items-center justify-center shadow-[0_0_18px_rgba(255,79,39,0.5)] group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-xs">L</span>
          </div>
          <span className="text-white font-semibold text-base tracking-tight">LEB Systems</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-400">
          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 hover:text-white transition-colors py-1">
              Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                <div className="bg-[#1A1A1E] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
                  {services.map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      className="flex flex-col px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                    >
                      <span className="text-white text-sm font-medium group-hover/item:text-[#FF4F27] transition-colors">{s.label}</span>
                      <span className="text-slate-500 text-xs mt-0.5">{s.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">AI & Automation</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
          <a href="#" className="text-slate-300 hover:text-white transition-colors">Sign in</a>
          <a
            href="#"
            className="px-5 py-2.5 bg-[#FF4F27] hover:bg-[#FF6B00] text-white rounded-lg font-medium transition-colors shadow-[0_0_20px_rgba(255,79,39,0.35)] hover:shadow-[0_0_30px_rgba(255,79,39,0.5)]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0e0918]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {services.map((s) => (
            <a key={s.label} href="#" className="text-slate-300 hover:text-white text-sm transition-colors">
              {s.label}
            </a>
          ))}
          <hr className="border-white/5" />
          <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">Solutions</a>
          <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">AI & Automation</a>
          <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">About</a>
          <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">Contact</a>
          <a
            href="#"
            className="mt-2 px-5 py-3 bg-[#FF4F27] text-white rounded-lg font-medium text-center transition-colors hover:bg-[#FF6B00]"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
