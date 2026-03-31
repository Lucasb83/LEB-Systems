"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud, Server, Network, Code2, Terminal, Cpu,
  Shield, Database, Activity, GitBranch, Bot, Layers,
  Globe, Lock, Zap,
} from "lucide-react";

const items = [
  { icon: <Cloud className="w-5 h-5 text-orange-400" />, name: "AWS" },
  { icon: <Server className="w-5 h-5 text-blue-500" />, name: "Docker" },
  { icon: <Network className="w-5 h-5 text-indigo-400" />, name: "Kubernetes" },
  { icon: <Code2 className="w-5 h-5 text-yellow-400" />, name: "Python" },
  { icon: <Terminal className="w-5 h-5 text-sky-400" />, name: "TypeScript" },
  { icon: <Cpu className="w-5 h-5 text-violet-400" />, name: "React" },
  { icon: <Globe className="w-5 h-5 text-cyan-400" />, name: "Next.js" },
  { icon: <Shield className="w-5 h-5 text-orange-500" />, name: "Cloudflare" },
  { icon: <Lock className="w-5 h-5 text-red-400" />, name: "Zero-Trust" },
  { icon: <Database className="w-5 h-5 text-blue-300" />, name: "PostgreSQL" },
  { icon: <Activity className="w-5 h-5 text-purple-400" />, name: "Datadog" },
  { icon: <Bot className="w-5 h-5 text-emerald-400" />, name: "OpenAI" },
  { icon: <Layers className="w-5 h-5 text-pink-400" />, name: "Vercel" },
  { icon: <GitBranch className="w-5 h-5 text-gray-300" />, name: "Terraform" },
  { icon: <Zap className="w-5 h-5 text-yellow-300" />, name: "Node.js" },
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center py-16 relative z-10 border-b border-white/5">
      <p className="text-slate-400 text-sm font-medium mb-10 tracking-wide uppercase">
        Built on the stack your enterprise already trusts
      </p>
      <div className="w-full relative flex overflow-x-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0e0918] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0e0918] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 whitespace-nowrap px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 bg-[#14151A] border border-white/5 px-5 py-2.5 rounded-xl shadow-lg hover:border-white/20 hover:bg-[#1A1A1E] transition-all duration-300 cursor-default"
            >
              {item.icon}
              <span className="text-slate-300 font-medium text-sm">{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
