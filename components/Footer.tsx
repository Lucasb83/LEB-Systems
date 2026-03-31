"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MiniLogo: React.FC = () => {
  const r = 20;
  const sqrt3 = Math.sqrt(3);
  const centers: [number, number][] = [
    [0, 0],
    [0, -2], [0, 2], [sqrt3, -1], [sqrt3, 1], [-sqrt3, -1], [-sqrt3, 1],
    [0, -4], [0, 4], [sqrt3, -3], [sqrt3, 3], [-sqrt3, -3], [-sqrt3, 3],
    [2 * sqrt3, -2], [2 * sqrt3, 0], [2 * sqrt3, 2], [-2 * sqrt3, -2], [-2 * sqrt3, 0], [-2 * sqrt3, 2],
  ];

  return (
    <div className="w-10 h-10 border border-white/10 rounded-full bg-[#1A1A1E] flex items-center justify-center shadow-[0_0_15px_rgba(255,79,39,0.3)] relative overflow-hidden">
      <svg viewBox="-90 -90 180 180" className="w-[140%] h-[140%] relative z-10">
        <defs>
          <linearGradient id="footer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4F27" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF9B26" stopOpacity="1" />
          </linearGradient>
        </defs>
        {centers.map((pos, i) => (
          <circle key={i} cx={pos[0] * r} cy={pos[1] * r} r={r} fill="none" stroke="url(#footer-grad)" strokeWidth="1.5" />
        ))}
      </svg>
    </div>
  );
};

const links: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Infrastructure Dev", href: "/services#infrastructure" },
    { label: "Web Design", href: "/services#web-design" },
    { label: "AI Implementation", href: "/ai-automation" },
    { label: "Process Automation", href: "/ai-automation#automation" },
    { label: "Custom Applications", href: "/services#custom-apps" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
    { label: "Partners", href: "/contact" },
  ],
  Resources: [
    { label: "Case Studies", href: "/solutions" },
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Events", href: "#" },
  ],
};

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.4]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.7]);

  return (
    <section ref={containerRef} className="relative pt-40 pb-12 px-6 z-10 overflow-hidden mt-10">

      {/* Sunrise glow */}
      <motion.div
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1400px] h-[900px] pointer-events-none origin-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF4F27]/55 via-[#FF6B00]/10 to-transparent blur-[100px] rounded-[100%]" />
      </motion.div>

      {/* Pre-footer CTA */}
      <div className="relative z-20 max-w-3xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          Ready to transform<br />your business?
        </h2>
        <p className="text-slate-300 mb-10 text-lg font-light">
          Let's build your next-generation digital infrastructure together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FF4F27] hover:bg-[#FF6B00] text-white font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(255,79,39,0.45)] hover:shadow-[0_0_50px_rgba(255,79,39,0.6)] group"
          >
            Start your project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-white/15 hover:border-white/30 text-white font-medium rounded-lg transition-all hover:bg-white/5"
          >
            Book a free discovery call
          </a>
        </div>
      </div>

      {/* Footer card */}
      <div className="max-w-[1200px] mx-auto bg-[#1A1A1E] border border-white/5 rounded-[2rem] p-10 md:p-16 relative overflow-hidden z-20 shadow-2xl backdrop-blur-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF4F27]/40 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="/" className="flex items-center gap-3 mb-5">
              <MiniLogo />
              <span className="text-white font-semibold text-xl tracking-tight">LEB Systems</span>
            </a>
            <p className="text-slate-400 text-sm font-light mb-6 leading-relaxed">
              We build the digital foundation your business needs to scale — infrastructure, design, AI, and automation under one roof.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              {/* X / Twitter */}
              <a href="https://x.com/lebsystems" target="_blank" rel="noopener noreferrer" aria-label="LEB Systems on X" className="hover:text-[#FF4F27] transition-colors p-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/lebsystems" target="_blank" rel="noopener noreferrer" aria-label="LEB Systems on GitHub" className="hover:text-[#FF4F27] transition-colors p-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/lebsystems" target="_blank" rel="noopener noreferrer" aria-label="LEB Systems on LinkedIn" className="hover:text-[#FF4F27] transition-colors p-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-white font-semibold mb-5 text-sm">{category}</h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-[13px] text-slate-400 hover:text-white transition-colors">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-white/5 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[13px] text-slate-400 space-x-4">
            <a href="/contact" className="hover:text-white transition-colors">Imprint</a>
            <span>|</span>
            <a href="/contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/contact" className="hover:text-white transition-colors">Security</a>
          </div>
          <div className="text-[13px] text-slate-500">
            © {new Date().getFullYear()} LEB Systems. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
