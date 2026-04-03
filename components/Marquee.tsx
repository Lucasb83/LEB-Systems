"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Network, Code2, Cpu, Database, Activity, GitBranch, Bot, Layers,
  Globe, Zap, Clock,
} from "lucide-react";

const items = [
  { icon: <Bot className="w-5 h-5 text-emerald-400" />,    name: "OpenAI / Claude" },
  { icon: <Layers className="w-5 h-5 text-sky-400" />,     name: "Kubernetes" },
  { icon: <Database className="w-5 h-5 text-violet-400" />, name: "Terraform" },
  { icon: <Code2 className="w-5 h-5 text-blue-400" />,     name: "GitHub Actions" },
  { icon: <Network className="w-5 h-5 text-orange-400" />, name: "AWS / Azure" },
  { icon: <GitBranch className="w-5 h-5 text-purple-400" />,name: "ArgoCD" },
  { icon: <Activity className="w-5 h-5 text-yellow-400" />, name: "Datadog" },
  { icon: <Cpu className="w-5 h-5 text-cyan-400" />,       name: "LangChain" },
  { icon: <Globe className="w-5 h-5 text-orange-300" />,   name: "Cloudflare" },
  { icon: <Zap className="w-5 h-5 text-orange-400" />,     name: "n8n" },
  { icon: <Clock className="w-5 h-5 text-slate-300" />,    name: "Temporal" },
  { icon: <Database className="w-5 h-5 text-blue-300" />,  name: "PostgreSQL" },
  { icon: <Layers className="w-5 h-5 text-sky-300" />,     name: "Docker" },
  { icon: <Code2 className="w-5 h-5 text-cyan-300" />,     name: "Next.js" },
  { icon: <Network className="w-5 h-5 text-indigo-400" />, name: "Kafka" },
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center py-16 relative z-10 border-b border-white/5">
      <p className="text-slate-400 text-sm font-medium mb-10 tracking-wide uppercase">
        Enterprise technology stack
      </p>
      <div className="w-full relative flex overflow-x-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 whitespace-nowrap px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {[...items, ...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 bg-[#1E293B] border border-white/5 px-5 py-2.5 rounded-xl shadow-lg hover:border-white/20 hover:bg-[#243347] transition-all duration-300 cursor-default"
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
