"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Shield, 
  Code2, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Activity,
  Workflow,
  Database
} from "lucide-react";

// ==========================================
// 1. N8N-STYLE NODE BACKGROUND ANIMATION
// ==========================================
const NodeNetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-gradient-reverse" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Nodes (Circles) */}
        <circle cx="20%" cy="30%" r="4" fill="#D4AF37" opacity="0.8" />
        <circle cx="80%" cy="20%" r="6" fill="#D4AF37" opacity="0.6" />
        <circle cx="70%" cy="60%" r="5" fill="#D4AF37" opacity="0.8" />
        <circle cx="30%" cy="70%" r="7" fill="#D4AF37" opacity="0.5" />
        <circle cx="50%" cy="50%" r="8" fill="#FFDF00" opacity="0.9" />

        {/* Animated Connecting Lines (Paths) */}
        <motion.path
          d="M 20% 30% L 50% 50%"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M 80% 20% L 50% 50%"
          stroke="url(#line-gradient-reverse)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M 70% 60% L 50% 50%"
          stroke="url(#line-gradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M 30% 70% L 50% 50%"
          stroke="url(#line-gradient-reverse)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

// ==========================================
// 2. NAVIGATION BAR
// ==========================================
const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#010614]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          {/* LEB Symbol Placeholder */}
          <div className="w-8 h-8 text-[#D4AF37] flex-shrink-0">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="currentColor" strokeWidth="2">
                <circle cx="50" cy="50" r="16" />
                <circle cx="50" cy="34" r="16" />
                <circle cx="63.8" cy="42" r="16" />
                <circle cx="63.8" cy="58" r="16" />
                <circle cx="50" cy="66" r="16" />
                <circle cx="36.2" cy="58" r="16" />
                <circle cx="36.2" cy="42" r="16" />
              </g>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            LEB <span className="text-[#D4AF37] font-black">Systems</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#platform" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Platform</a>
          <a href="#security" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Security</a>
          <a href="#solutions" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Solutions</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="/portal" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Sign In
          </a>
          <a href="/portal" className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#FFDF00] text-[#010614] text-sm font-bold rounded-md transition-colors duration-300">
            Start Building
          </a>
        </div>
      </div>
    </nav>
  );
};

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
export default function Home() {
  return (
    <main className="bg-[#010614] min-h-screen text-slate-200 font-sans selection:bg-[#D4AF37]/30">
      <Navigation />

      {/* SECTION 1: HERO (Dark Mode) */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden flex flex-col items-center text-center border-b border-white/5">
        <NodeNetworkBackground />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Enterprise Grade Architecture
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Architect the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFDF00]">
              Your Infrastructure
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Deploy scalable, zero-trust cloud environments and cognitive AI systems. Build interconnected workflows that dominate market sectors without compromising security.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#010614] font-bold text-base rounded-md hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              Deploy Systems <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-base rounded-md hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              Request Security Audit
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SOCIAL PROOF / LOGOS (Dark Mode) */}
      <section className="py-10 border-b border-white/5 bg-[#010614]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500 font-medium mb-8">TRUSTED BY ENGINEERING TEAMS AT FORWARD-THINKING COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            {/* Fake logos represented by text for now */}
            <span className="text-xl font-black font-serif">AcmeCorp</span>
            <span className="text-xl font-bold tracking-widest">GLOBAL.NET</span>
            <span className="text-xl font-bold italic">TechFlow</span>
            <span className="text-xl font-bold">InnoVate</span>
            <span className="text-xl font-extrabold">VERTEX</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: BENTO GRID FEATURES (Light Mode - exactly like n8n structure) */}
      <section id="platform" className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Everything you need to scale securely.</h2>
            <p className="text-lg text-slate-600">
              We provide the building blocks for modern enterprise. From custom software APIs to predictive AI nodes, everything integrates seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Big Card - Spans 2 columns on desktop */}
            <div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-6 text-slate-700">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Infinite Scalability</h3>
              <p className="text-slate-600 mb-6 max-w-md">
                Multi-region, high-availability deployments engineered for absolute resilience. Auto-scaling infrastructure that adapts to your traffic spikes in milliseconds.
              </p>
              <a href="#" className="inline-flex items-center text-[#B8860B] font-semibold hover:text-[#D4AF37] transition-colors">
                Explore Architecture <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Normal Card */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-6 text-slate-700">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero-Trust Security</h3>
              <p className="text-slate-600">
                Military-grade perimeter defense. We assume breach and cryptographically secure digital assets from the inside out.
              </p>
            </div>

            {/* Normal Card */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-6 text-slate-700">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Engineering</h3>
              <p className="text-slate-600">
                Bespoke software architecture and robust APIs designed to connect your disparate systems perfectly.
              </p>
            </div>

            {/* Big Card - Spans 2 columns */}
            <div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-6 text-slate-700">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Cognitive AI Integration</h3>
              <p className="text-slate-600 mb-6 max-w-md">
                Deploy advanced Large Language Models and predictive neural networks to automate complex, logic-based operations at unprecedented scale.
              </p>
              <a href="#" className="inline-flex items-center text-[#B8860B] font-semibold hover:text-[#D4AF37] transition-colors">
                Discover AI Workflows <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WORKFLOW / TECHNICAL DEEP DIVE (Dark Mode) */}
      <section id="security" className="py-24 bg-[#010614] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
              <Lock className="w-4 h-4" /> Secure by Design
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Absolute control over your data.
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              We do not compromise on security. Every deployment is containerized, encrypted at rest, and monitored in real-time by intelligent threat detection algorithms.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                <span className="text-slate-300">Identity Access Management (IAM) built-in.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                <span className="text-slate-300">End-to-end 256-bit AES encryption protocols.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                <span className="text-slate-300">Continuous vulnerability scanning and automated patching.</span>
              </li>
            </ul>
          </div>

          {/* Visual representation of workflow/security */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
             
             <div className="space-y-6 relative z-10">
                {/* Mock UI Element */}
                <div className="bg-[#010614] border border-white/10 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-slate-400" />
                    <span className="font-mono text-sm text-slate-300">Production_DB_Cluster</span>
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Encrypted</span>
                </div>
                
                {/* Connecting Line */}
                <div className="w-0.5 h-8 bg-white/20 mx-auto"></div>

                {/* Mock UI Element */}
                <div className="bg-[#010614] border border-white/10 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-5 h-5 text-slate-400" />
                    <span className="font-mono text-sm text-slate-300">AI_Logic_Node</span>
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Processing</span>
                </div>

                {/* Connecting Line */}
                <div className="w-0.5 h-8 bg-white/20 mx-auto"></div>

                {/* Mock UI Element */}
                <div className="bg-[#010614] border border-[#D4AF37]/50 p-4 rounded-lg flex items-center justify-between shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-mono text-sm text-white">Client_Endpoint_API</span>
                  </div>
                  <span className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded">200 OK</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA & FOOTER (Dark Mode) */}
      <section className="border-t border-white/10 bg-[#010614]">
        {/* Call to Action */}
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Ready to upgrade your infrastructure?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join the teams building scalable, secure, and intelligent systems with LEB Systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#010614] font-bold text-base rounded-md hover:bg-[#FFDF00] transition-colors">
              Start Building Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base rounded-md hover:bg-white/10 transition-colors">
              Talk to Engineering
            </button>
          </div>
        </div>

        {/* Real Footer Structure */}
        <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">Architecture</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">Security</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">AI Workflows</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">Documentation</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">API Reference</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">Blog</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">About Us</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">Careers</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">Contact Sales</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-[#D4AF37]">Security Status</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-5 h-5 text-[#D4AF37]">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="currentColor" strokeWidth="2">
                    <circle cx="50" cy="50" r="16" />
                    <circle cx="50" cy="34" r="16" />
                    <circle cx="63.8" cy="42" r="16" />
                    <circle cx="63.8" cy="58" r="16" />
                    <circle cx="50" cy="66" r="16" />
                    <circle cx="36.2" cy="58" r="16" />
                    <circle cx="36.2" cy="42" r="16" />
                  </g>
                </svg>
              </div>
              <span className="text-sm font-bold text-white">LEB Systems</span>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} LEB Systems. All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}