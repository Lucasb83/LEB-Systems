"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Network, Code2, Cpu, Database, Activity, GitBranch, Bot, Layers,
  Globe, Zap, MessageCircle, ShoppingBag, Clock, CreditCard,
} from "lucide-react";
import { Calendar } from "lucide-react";

const items = [
  { icon: <Layers className="w-5 h-5 text-violet-400" />, name: "Bubble.io" },
  { icon: <Cpu className="w-5 h-5 text-sky-400" />, name: "Glide" },
  { icon: <Globe className="w-5 h-5 text-cyan-400" />, name: "FlutterFlow" },
  { icon: <Zap className="w-5 h-5 text-orange-400" />, name: "n8n" },
  { icon: <GitBranch className="w-5 h-5 text-purple-400" />, name: "Make" },
  { icon: <Activity className="w-5 h-5 text-yellow-400" />, name: "Zapier" },
  { icon: <CreditCard className="w-5 h-5 text-emerald-400" />, name: "Stripe" },
  { icon: <MessageCircle className="w-5 h-5 text-green-400" />, name: "WhatsApp API" },
  { icon: <Calendar className="w-5 h-5 text-blue-400" />, name: "Google Calendar" },
  { icon: <Database className="w-5 h-5 text-blue-300" />, name: "Xero" },
  { icon: <ShoppingBag className="w-5 h-5 text-pink-400" />, name: "Shopify" },
  { icon: <Clock className="w-5 h-5 text-slate-300" />, name: "Calendly" },
  { icon: <Bot className="w-5 h-5 text-orange-300" />, name: "OpenAI" },
  { icon: <Code2 className="w-5 h-5 text-cyan-300" />, name: "Airtable" },
  { icon: <Network className="w-5 h-5 text-indigo-400" />, name: "Notion" },
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center py-16 relative z-10 border-b border-white/5">
      <p className="text-slate-400 text-sm font-medium mb-10 tracking-wide uppercase">
        Built with the best no-code &amp; automation tools
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
