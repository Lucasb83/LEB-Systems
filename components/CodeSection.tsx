"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cloud, Terminal, Check } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function CodeSection() {
  return (
    <section className="py-12 px-6 relative z-10">
      <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-[1200px] mx-auto bg-gradient-to-br from-[#FF4F27]/20 via-[#1A1A1E] to-[#14151A] border border-[#FF4F27]/20 rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
        
        {/* Resplandor cálido (Naranja/Rojo) */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF4F27]/30 to-[#FF6B00]/0 blur-[100px] pointer-events-none -translate-x-1/4 -translate-y-1/4"></div>

        <div className="flex-1 z-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
            Code when you need it, <br/> UI when you don't
          </h2>
          <p className="text-slate-300 mb-10 text-base leading-relaxed max-w-lg font-light">
            Other tools limit you to either a visual building experience, or code. With LEB Systems, you get the best of both worlds.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Code2 className="w-5 h-5 text-[#FF4F27] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-300"><strong className="text-white font-medium">Write JavaScript or Python</strong> anywhere in your workflow. Imagine it, then build it.</p>
            </li>
            <li className="flex items-start gap-4">
              <Code2 className="w-5 h-5 text-[#FF4F27] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-300"><strong className="text-white font-medium">See the inputs and outputs</strong> right next to the settings. No unnecessary clicks.</p>
            </li>
          </ul>
        </div>

        <div className="flex-1 z-10 w-full flex justify-center lg:justify-end">
          <div className="bg-[#0B0B10] border border-white/5 rounded-3xl p-10 flex items-center justify-center gap-2 shadow-2xl w-full max-w-md relative">
            <div className="flex flex-col items-center gap-3 z-10">
              <div className="w-20 h-20 bg-[#1A1A1E] border border-white/5 rounded-2xl flex items-center justify-center relative shadow-lg">
                <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#0B0B10] flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>
                <Cloud className="w-8 h-8 text-slate-400" />
              </div>
              <span className="text-xs text-slate-400 font-medium">Webhook</span>
            </div>
            <div className="w-16 h-[2px] bg-emerald-500/50 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#34d399]"></div>
            </div>
            <div className="flex flex-col items-center gap-3 z-10">
              <div className="w-20 h-20 bg-[#1A1A1E] border border-white/5 rounded-2xl flex items-center justify-center relative shadow-lg">
                <Terminal className="w-8 h-8 text-[#FF4F27]" />
              </div>
              <span className="text-xs text-slate-400 font-medium text-center">Execute Code</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}