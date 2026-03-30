"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronDown, 
  Terminal, 
  Shield, 
  Server, 
  Check, 
  Code2, 
  Database,
  Cloud,
  Lock,
  Workflow
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B10] text-slate-300 font-sans selection:bg-purple-500/30">
      
      {/* =========================================
          1. NAVBAR (n8n exact structure)
          ========================================= */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0B10]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            
            {/* LEB SYSTEMS LOGO (Using public/logo.jpg) */}
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="LEB Systems Flower of Life" 
                className="w-8 h-8 rounded-full object-cover shadow-[0_0_15px_rgba(168,85,247,0.5)]"
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
            <a href="/portal" className="px-4 py-2 bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white rounded-md hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* =========================================
          2. HERO SECTION
          ========================================= */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden flex flex-col items-center text-center">
        
        {/* Background Glows (Matching your logo's purple/pink tones) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#9333EA]/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EC4899]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-6">
            IT Infrastructure <br className="hidden md:block" />
            you can <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#F472B6]">trust and scale</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            Build visually, go deep with code, connect to anything. Every step of your architecture's reasoning, traceable on the canvas. Deploy on your infrastructure or ours.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="/portal" className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white font-medium rounded-md hover:opacity-90 transition-opacity text-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              Get started for free
            </a>
            <a href="#sales" className="w-full sm:w-auto px-6 py-3 bg-[#1A1B23] border border-white/10 text-white font-medium rounded-md hover:bg-[#23242D] transition-colors text-center">
              Talk to sales
            </a>
          </div>
        </motion.div>

        {/* LOGOS / SOCIAL PROOF */}
        <div className="relative z-10 mt-24 max-w-5xl mx-auto w-full flex flex-col items-center">
          <p className="text-xs text-slate-500 mb-6 font-medium">The world's most popular infrastructure platform for technical teams including</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            <span className="text-xl font-bold font-sans">Microsoft</span>
            <span className="text-xl font-bold font-serif italic tracking-tight">wayfair</span>
            <span className="text-xl font-bold font-sans flex items-center gap-1"><Cloud className="w-6 h-6"/> onfleet</span>
            <span className="text-xl font-bold font-sans flex items-center gap-1"><Server className="w-6 h-6"/> vodafone</span>
          </div>
        </div>
      </section>

      {/* =========================================
          3. BENTO GRID (Cloned from image_6ae1a7.jpg)
          ========================================= */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* CARD 1: Top Left (Big) */}
          <div className="md:col-span-8 bg-[#14151A] border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300">
            {/* Subtle inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9333EA]/10 blur-[80px] pointer-events-none rounded-full"></div>
            
            <div className="flex-1 z-10 flex flex-col justify-center">
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight leading-tight">
                Build complex architecture <br/> without getting boxed in
              </h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed font-light">
                Handle multi-region setups and RAG systems. Use multiple cloud or offline servers. Integrate with legacy systems while staying set up for the future with full API support.
              </p>
              <div>
                <button className="px-5 py-2.5 bg-gradient-to-r from-[#9333EA] to-[#6B21A8] hover:opacity-90 text-white text-sm font-medium rounded-lg transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                  Explore Architecture
                </button>
              </div>
            </div>
            
            {/* Mock UI Graphic */}
            <div className="flex-1 flex items-center justify-center z-10 relative">
              <div className="w-full max-w-sm bg-[#0B0B10] border border-white/5 rounded-2xl p-6 space-y-4 shadow-2xl relative">
                 <div className="text-center text-xs text-slate-500 font-mono mb-4">{"{ } Server cluster deployed"}</div>
                 <div className="flex items-center justify-between bg-[#1A1B23] p-3 rounded-lg border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#9333EA]/20 flex items-center justify-center"><Server className="w-4 h-4 text-[#C084FC]" /></div>
                      <span className="text-sm font-medium text-slate-300">Load Balancer</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                 </div>
                 <div className="flex items-center justify-between bg-[#1A1B23] p-3 rounded-lg border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#EC4899]/20 flex items-center justify-center"><Shield className="w-4 h-4 text-[#F472B6]" /></div>
                      <span className="text-sm font-medium text-slate-300">Zero-Trust Auth</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                 </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Top Right (Tall) */}
          <div className="md:col-span-4 bg-[#14151A] border border-white/5 rounded-3xl p-10 relative overflow-hidden group hover:border-white/10 transition-all duration-300">
            <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight leading-tight">
              Let logic guide <br/> your security
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
              Enforce structured inputs and outputs to control the data flow. Combine human-in-the-loop approvals with rule-based automation to contain threats.
            </p>
            
            {/* Mock Chat/Log Graphic */}
            <div className="space-y-4 mt-auto">
              <div className="bg-[#1A1B23] border border-white/5 rounded-xl p-4 text-xs text-slate-300 w-[85%] shadow-lg">
                Unusual traffic spike detected in region US-East.
              </div>
              <div className="bg-[#2D1B36] border border-[#9333EA]/20 rounded-xl p-4 text-xs text-slate-200 w-[85%] ml-auto shadow-lg relative">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#9333EA] rounded-full"></div>
                Auto-scaling group expanded successfully. Threat matrix updated.
              </div>
            </div>
          </div>

          {/* CARD 3: Bottom Full Width */}
          <div className="md:col-span-12 bg-[#14151A] border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group hover:border-white/10 transition-all duration-300">
            <div className="absolute bottom-0 left-20 w-[400px] h-[200px] bg-[#9333EA]/10 blur-[100px] pointer-events-none rounded-full"></div>
            
            {/* Mock UI Graphic (The "Self Hosted" box from screenshot) */}
            <div className="flex-1 w-full max-w-md z-10 flex justify-center">
              <div className="bg-[#0B0B10] border border-white/10 rounded-2xl p-6 relative w-full max-w-[280px]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#14151A] px-3 py-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest border border-white/5 rounded-full">
                  Deployment
                </div>
                <div className="space-y-4 mt-4">
                  <div className="h-12 border border-white/5 rounded-lg bg-[#1A1B23] flex items-center px-4"><span className="w-12 h-2 bg-slate-600 rounded-full"></span></div>
                  <div className="h-12 border border-[#9333EA]/50 rounded-lg bg-[#9333EA]/10 flex items-center px-4 justify-between relative shadow-[0_0_15px_rgba(147,51,234,0.1)]">
                    <span className="w-20 h-2 bg-[#C084FC] rounded-full"></span>
                    <div className="w-5 h-5 rounded-full bg-[#9333EA] flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>
                    {/* Floating badge */}
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-[#14151A] border border-white/10 text-white text-[10px] font-bold px-3 py-2 rounded-lg shadow-xl flex items-center gap-2">
                      Local Server <Terminal className="w-3 h-3 text-[#C084FC]" />
                    </div>
                  </div>
                  <div className="h-12 border border-white/5 rounded-lg bg-[#1A1B23] flex items-center px-4"><span className="w-16 h-2 bg-slate-600 rounded-full"></span></div>
                </div>
              </div>
            </div>

            <div className="flex-1 z-10">
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Runs where you decide</h3>
              <p className="text-slate-400 mb-8 text-sm font-light">Protect your data by deploying on-prem.</p>
              <ul className="space-y-5 text-sm text-slate-300">
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-slate-500" /> Deploy with Docker or Kubernetes</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-slate-500" /> Access the entire source code on GitHub</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-slate-500" /> Hosted enterprise version also available</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          4. CODE WHEN YOU NEED IT (Cloned from image_6ae1c7.jpg)
          ========================================= */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto bg-gradient-to-br from-[#701A75]/40 via-[#4C1D95]/20 to-[#14151A] border border-white/5 rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          
          {/* Intense Radial background within card */}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#EC4899]/30 to-[#9333EA]/0 blur-[100px] pointer-events-none -translate-x-1/4 -translate-y-1/4"></div>

          <div className="flex-1 z-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
              Code when you need it, <br/> UI when you don't
            </h2>
            <p className="text-slate-300 mb-10 text-sm md:text-base leading-relaxed max-w-lg font-light">
              Other tools limit you to either a visual building experience, or code. With LEB Systems, you get the best of both worlds.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Code2 className="w-5 h-5 text-[#F472B6] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300 leading-relaxed"><strong className="text-white font-medium">Write JavaScript or Python</strong> anywhere in your workflow. Imagine it, then build it.</p>
              </li>
              <li className="flex items-start gap-4">
                <Code2 className="w-5 h-5 text-[#F472B6] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300 leading-relaxed"><strong className="text-white font-medium">See the inputs and outputs</strong> right next to the settings of every step. No unnecessary clicks.</p>
              </li>
              <li className="flex items-start gap-4">
                <Code2 className="w-5 h-5 text-[#F472B6] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-300 leading-relaxed"><strong className="text-white font-medium">Test workflows with real data</strong> to improve accuracy and catch errors before your customers do.</p>
              </li>
            </ul>
          </div>

          <div className="flex-1 z-10 w-full flex justify-center lg:justify-end">
            {/* Graphic matching the Node connection UI */}
            <div className="bg-[#0B0B10] border border-white/5 rounded-3xl p-10 flex items-center justify-center gap-2 shadow-2xl w-full max-w-md">
              {/* Node 1 */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="w-20 h-20 bg-[#1A1B23] border border-white/5 rounded-2xl flex items-center justify-center relative shadow-lg hover:border-white/20 transition-colors cursor-pointer">
                  <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#0B0B10] flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>
                  <Cloud className="w-8 h-8 text-slate-400" />
                </div>
                <span className="text-xs text-slate-400 font-medium">Find Payload</span>
              </div>
              
              {/* Connecting Line */}
              <div className="w-16 h-[2px] bg-emerald-500/50 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#34d399]"></div>
              </div>

              {/* Node 2 */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="w-20 h-20 bg-[#1A1B23] border border-white/5 rounded-2xl flex items-center justify-center relative shadow-lg hover:border-white/20 transition-colors cursor-pointer">
                  <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#0B0B10] flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>
                  <Terminal className="w-8 h-8 text-[#34d399]" />
                </div>
                <span className="text-xs text-slate-400 font-medium text-center">Parse Data<br/><span className="text-[10px] text-slate-500">json: extract</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. MOVE FAST. BREAK NOTHING (Cloned from image_6ae1ff.png)
          ========================================= */}
      <section className="py-12 px-6 relative z-10 mb-20">
        <div className="max-w-[1200px] mx-auto bg-[#14151A] border border-white/5 rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          
          {/* Circuit Board SVG Background exactly like n8n */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20">
             <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left side traces */}
                <path d="M 400 400 L 200 400 L 150 350 H 0" stroke="#9333EA" strokeWidth="2" strokeOpacity="0.6" />
                <path d="M 400 400 L 250 350 L 200 350 H 0" stroke="#9333EA" strokeWidth="2" strokeOpacity="0.4" />
                <path d="M 400 400 L 280 500 L 200 500 H 0" stroke="#9333EA" strokeWidth="2" strokeOpacity="0.5" />
                <path d="M 400 400 L 300 250 L 250 250 L 200 200 H 0" stroke="#9333EA" strokeWidth="2" strokeOpacity="0.3" />
                <path d="M 400 400 L 320 550 L 250 550 L 200 600 H 0" stroke="#9333EA" strokeWidth="2" strokeOpacity="0.4" />
                
                {/* Right side traces */}
                <path d="M 400 400 L 600 400 L 650 450 H 800" stroke="#9333EA" strokeWidth="2" strokeOpacity="0.6" />
                <path d="M 400 400 L 550 300 L 600 300 H 800" stroke="#9333EA" strokeWidth="2" strokeOpacity="0.5" />
                <path d="M 400 400 L 500 550 L 550 600 H 800" stroke="#9333EA" strokeWidth="2" strokeOpacity="0.4" />
                <path d="M 400 400 L 480 200 L 550 200 L 600 150 H 800" stroke="#9333EA" strokeWidth="2" strokeOpacity="0.3" />
             </svg>
          </div>

          <div className="flex-1 z-10">
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">
              Move fast. Break nothing.
            </h2>
            <p className="text-slate-400 mb-10 text-sm md:text-base max-w-md leading-relaxed font-light">
              Build with the short feedback loops that keep you in the flow.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 mb-12">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-300 flex-shrink-0" />
                <p className="text-sm text-slate-400 leading-relaxed"><strong className="text-white font-medium">Re-run single steps</strong>, not your entire workflow</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-300 flex-shrink-0" />
                <p className="text-sm text-slate-400 leading-relaxed"><strong className="text-white font-medium">Replay or mock data</strong> to not wait for external systems</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-300 flex-shrink-0" />
                <p className="text-sm text-slate-400 leading-relaxed"><strong className="text-white font-medium">Avoid endless debugging clicks</strong> with the logs view</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-slate-300 flex-shrink-0" />
                <p className="text-sm text-slate-400 leading-relaxed"><strong className="text-white font-medium">Evaluate AI natively</strong> to optimize performance</p>
              </div>
            </div>

            <button className="px-6 py-3 bg-gradient-to-r from-[#9333EA] to-[#7E22CE] hover:opacity-90 text-white text-sm font-medium rounded-lg transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              See full product overview
            </button>
          </div>

          <div className="flex-1 z-10 flex justify-center lg:justify-end">
            {/* Central Glowing Orb (Replacing the lightning bolt with a lock/security theme) */}
            <div className="relative flex items-center justify-center w-56 h-56">
              <div className="absolute inset-0 border border-slate-700 rounded-full"></div>
              <div className="absolute inset-5 border border-slate-600 rounded-full"></div>
              <div className="absolute inset-10 border-2 border-slate-500 rounded-full"></div>
              <div className="absolute inset-14 bg-gradient-to-br from-[#2A2B36] to-[#14151A] rounded-full shadow-2xl flex items-center justify-center z-10 border border-white/10">
                <Lock className="w-8 h-8 text-slate-300" />
              </div>
              {/* Outer glow ring matching the n8n screenshot */}
              <div className="absolute inset-12 rounded-full border-4 border-[#9333EA]/30 shadow-[0_0_40px_rgba(147,51,234,0.5)]"></div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}