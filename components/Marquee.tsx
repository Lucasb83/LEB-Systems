"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Cloud, Shield, Server, Terminal, Activity, Code2, Lock, Cpu, Network } from "lucide-react";

export default function Marquee() {
  const items = [
    { icon: <Cloud className="w-6 h-6 text-orange-400" />, name: "AWS Edge" },
    { icon: <Server className="w-6 h-6 text-blue-500" />, name: "Docker" },
    { icon: <Network className="w-6 h-6 text-indigo-400" />, name: "Kubernetes" },
    { icon: <Code2 className="w-6 h-6 text-yellow-400" />, name: "Python" },
    { icon: <Terminal className="w-6 h-6 text-blue-400" />, name: "TypeScript" },
    { icon: <Cpu className="w-6 h-6 text-sky-400" />, name: "React" },
    { icon: <Shield className="w-6 h-6 text-orange-500" />, name: "Cloudflare" },
    { icon: <Lock className="w-6 h-6 text-red-500" />, name: "CrowdStrike" },
    { icon: <Database className="w-6 h-6 text-blue-300" />, name: "PostgreSQL" },
    { icon: <Activity className="w-6 h-6 text-purple-400" />, name: "Datadog" },
  ];

  return (
    <div className="w-full overflow-hidden flex flex-col items-center pb-20 mask-edges relative z-10 border-b border-white/5">
      <p className="text-slate-400 text-sm font-medium mb-8">Deploy seamlessly across enterprise stacks and security protocols</p>
      <div className="w-full relative flex overflow-x-hidden">
        <motion.div 
          className="flex gap-12 whitespace-nowrap px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {/* Triplicamos para un loop perfecto */}
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#14151A] border border-white/5 px-6 py-3 rounded-xl shadow-lg hover:border-white/20 transition-colors">
              {item.icon}
              <span className="text-slate-300 font-medium text-sm">{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}