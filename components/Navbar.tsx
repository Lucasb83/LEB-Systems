"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const miniCircles = [
  { id: "c", cx: 0, cy: 0 },
  { id: "r1", cx: 27, cy: 0 },
  { id: "r2", cx: 13.5, cy: 23.383 },
  { id: "r3", cx: -13.5, cy: 23.383 },
  { id: "r4", cx: -27, cy: 0 },
  { id: "r5", cx: -13.5, cy: -23.383 },
  { id: "r6", cx: 13.5, cy: -23.383 },
];

function FlowerLogo({ size = 32 }: { size?: number }) {
  const inner = size * 0.75;
  return (
    <div
      className="rounded-full bg-[#0d0b1a] flex items-center justify-center overflow-hidden"
      style={{ width: size, height: size, boxShadow: "0 0 14px rgba(147,51,234,0.55)" }}
    >
      <svg
        viewBox="-55 -55 110 110"
        style={{ width: inner, height: inner, filter: "drop-shadow(0px 0px 4px rgba(168,85,247,0.9)) drop-shadow(0px 0px 10px rgba(147,51,234,0.5))" }}
      >
        {miniCircles.map((c, i) => (
          <motion.circle
            key={c.id}
            cx={c.cx}
            cy={c.cy}
            r="27"
            fill="none"
            stroke="#e9d5ff"
            strokeWidth="1.8"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.15, 0.9, 0.15] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
          />
        ))}
        <motion.circle
          cx="0" cy="0" r="50"
          fill="none" stroke="#d8b4fe" strokeWidth="1.5"
          animate={{ opacity: [0.3, 0.75, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

const services = [
  { label: "Infrastructure Development", desc: "Cloud, on-prem, Kubernetes & Docker", href: "/services#infrastructure" },
  { label: "Web Design", desc: "Fast, modern, conversion-ready sites", href: "/services#web-design" },
  { label: "AI Implementation", desc: "LLMs, RAG pipelines & AI agents", href: "/ai-automation" },
  { label: "Process Automation", desc: "Connect tools, eliminate manual work", href: "/ai-automation#automation" },
  { label: "Custom Applications", desc: "Bespoke software for your business", href: "/services#custom-apps" },
];

const mainLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "AI & Automation", href: "/ai-automation" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  const linkClass = (href: string) =>
    `transition-colors duration-200 ${isActive(href) ? "text-white" : "text-slate-400 hover:text-white"}`;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0e0918]/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="group-hover:scale-105 transition-transform">
              <FlowerLogo size={32} />
            </div>
            <span className="text-white font-semibold text-base tracking-tight">LEB Systems</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {/* Services dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 py-1 transition-colors duration-200 ${
                  isActive("/services") ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 transition-all duration-200 ${
                  servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="bg-[#1A1A1E]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                  {services.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="flex flex-col px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="text-white text-sm font-medium group-hover/item:text-[#FF4F27] transition-colors">{s.label}</span>
                      <span className="text-slate-500 text-xs mt-0.5">{s.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {mainLinks.map((link) => (
              <a key={link.href} href={link.href} className={`text-sm font-medium ${linkClass(link.href)}`}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
            <a href="/portal" className={`transition-colors ${isActive("/portal") ? "text-white" : "text-slate-300 hover:text-white"}`}>
              Sign in
            </a>
            <a
              href="/contact"
              className="flex items-center gap-1.5 px-5 py-2.5 bg-[#FF4F27] hover:bg-[#FF6B00] text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(255,79,39,0.3)] hover:shadow-[0_0_30px_rgba(255,79,39,0.5)]"
            >
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-slate-300 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#0e0918]/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-[#14151A] border-l border-white/5 flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <a href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
              <FlowerLogo size={28} />
              <span className="text-white font-semibold text-sm">LEB Systems</span>
            </a>
            <button onClick={() => setMobileOpen(false)} className="text-slate-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Panel links */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Services</p>
            {services.map((s) => (
              <a
                key={s.label}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className={`flex flex-col py-3 px-3 rounded-xl hover:bg-white/5 transition-colors ${isActive(s.href) ? "bg-white/5" : ""}`}
              >
                <span className={`text-sm font-medium ${isActive(s.href) ? "text-[#FF4F27]" : "text-slate-200"}`}>{s.label}</span>
                <span className="text-xs text-slate-500 mt-0.5">{s.desc}</span>
              </a>
            ))}

            <hr className="border-white/5 my-4" />
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Navigation</p>
            {mainLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-3 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors ${
                  isActive(link.href) ? "text-[#FF4F27] bg-white/5" : "text-slate-200"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Panel footer CTA */}
          <div className="px-6 py-6 border-t border-white/5 flex flex-col gap-3">
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 bg-[#FF4F27] hover:bg-[#FF6B00] text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(255,79,39,0.35)]"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/portal"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center py-3 text-slate-400 hover:text-white text-sm transition-colors"
            >
              Sign in to portal
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
