"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Shield, Check, Terminal } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function BentoGrid() {
  return (
    <section className="py-20 px-6 relative z-10">
      <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-[1200px] mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">Build AI infrastructure</h2>
        <p className="text-xl text-slate-400 font-light">you can actually follow</p>
      </motion.div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Card 1 */}
        <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-8 bg-[#14151A] border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row gap-8 relative overflow-hidden group hover:border-white/10 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)] transition-all duration-500 cursor-default">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9333EA]/10 blur-[80px] pointer-events-none rounded-full group-hover:bg-[#EC4899]/20 transition-colors duration-700"></div>
          <div className="flex-1 z-10 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight leading-tight">Build complex architecture <br/> without getting boxed in</h3>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed font-light">
              Handle multi-region setups and RAG systems. Use multiple cloud or offline servers. Integrate with legacy systems while staying set up for the future with full API support.
            </p>
            <div>
              <button className="px-6 py-2.5 bg-[#23242D] border border-white/10 group-hover:border-[#9333EA]/50 text-white text-sm font-medium rounded-lg transition-colors">
                Explore Architecture
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center z-10">
            <div className="w-full max-w-sm bg-[#0B0B10] border border-white/5 rounded-2xl p-6 shadow-2xl relative group-hover:border-white/20 transition-colors duration-500">
               <div className="text-xs text-slate-500 font-mono mb-4 text-center">{"{ } Cluster status"}</div>
               <div className="space-y-3">
                 <div className="flex items-center justify-between bg-[#1A1A1E] p-3 rounded-lg border border-white/5">
                    <div className="flex items-center gap-3"><Server className="w-4 h-4 text-slate-400" /><span className="text-sm text-slate-300">Load Balancer</span></div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                 </div>
                 <div className="flex items-center justify-between bg-[#1A1A1E] p-3 rounded-lg border border-white/5">
                    <div className="flex items-center gap-3"><Shield className="w-4 h-4 text-slate-400" /><span className="text-sm text-slate-300">Zero-Trust Auth</span></div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-4 bg-[#14151A] border border-white/5 rounded-3xl p-10 relative group hover:border-white/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition-all duration-500 flex flex-col cursor-default">
          <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight leading-tight">Let logic guide <br/> your security</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
            Enforce structured inputs and outputs to control data flow. Combine human-in-the-loop approvals with rule-based automation.
          </p>
          <div className="space-y-4 mt-auto">
            <div className="bg-[#1A1A1E] border border-white/5 rounded-xl p-4 text-xs text-slate-300 w-[90%] shadow-lg">Traffic spike detected in EU-West.</div>
            <div className="bg-[#2A1D2A] border border-[#EC4899]/20 rounded-xl p-4 text-xs text-slate-200 w-[90%] ml-auto shadow-lg relative">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#EC4899] rounded-full group-hover:shadow-[0_0_10px_#EC4899] transition-shadow"></div>
              Auto-scaling group expanded successfully.
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-12 bg-[#14151A] border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-12 group hover:border-white/10 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)] transition-all duration-500 cursor-default">
          <div className="flex-1 w-full flex justify-center">
            <div className="bg-[#0B0B10] border border-white/10 rounded-2xl p-6 relative w-full max-w-[320px] group-hover:border-white/20 transition-colors duration-500">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#14151A] px-3 py-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest border border-white/5 rounded-full">Deployment</div>
              <div className="space-y-4 mt-4">
                <div className="h-12 border border-white/5 rounded-lg bg-[#1A1A1E] flex items-center px-4"><span className="w-12 h-2 bg-slate-600 rounded-full"></span></div>
                <div className="h-12 border border-[#9333EA]/40 rounded-lg bg-[#9333EA]/10 flex items-center px-4 justify-between relative shadow-[0_0_15px_rgba(147,51,234,0.15)]">
                  <span className="w-20 h-2 bg-[#C084FC] rounded-full"></span>
                  <div className="w-5 h-5 rounded-full bg-[#9333EA] flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>
                  <div className="absolute -right-10 top-1/2 -translate-y-1/2 bg-[#14151A] border border-white/10 text-white text-[10px] font-bold px-3 py-2 rounded-lg shadow-xl flex items-center gap-2">
                    Self Hosted <Terminal className="w-3 h-3 text-[#C084FC]" />
                  </div>
                </div>
                <div className="h-12 border border-white/5 rounded-lg bg-[#1A1A1E] flex items-center px-4"><span className="w-16 h-2 bg-slate-600 rounded-full"></span></div>
              </div>
            </div>
          </div>
          <div className="flex-1 z-10">
            <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Runs where you decide</h3>
            <p className="text-slate-400 mb-8 text-sm font-light">Protect your data by deploying on-prem.</p>
            <ul className="space-y-5 text-sm text-slate-300">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#9333EA]" /> Deploy with Docker or Kubernetes</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#9333EA]" /> Access the entire source code on GitHub</li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#9333EA]" /> Hosted enterprise version also available</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}