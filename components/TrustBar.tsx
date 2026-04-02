"use client";

import React from "react";
import { ShieldCheck, MapPin, Receipt, Lock, FileCheck } from "lucide-react";

const items = [
  { icon: <Receipt className="w-3.5 h-3.5" />, label: "GST Registered" },
  { icon: <FileCheck className="w-3.5 h-3.5" />, label: "NZ Privacy Act 2020 Compliant" },
  { icon: <MapPin className="w-3.5 h-3.5" />, label: "Auckland-Based" },
  { icon: <Lock className="w-3.5 h-3.5" />, label: "Fixed Pricing — No Surprises" },
  { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: "100% Code Ownership" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-white/5 bg-[#1E293B]/40 py-4 px-6 relative z-10">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {items.map((item, i) => (
          <React.Fragment key={item.label}>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
              <span className="text-[#10B981]">{item.icon}</span>
              {item.label}
            </div>
            {i < items.length - 1 && (
              <span className="hidden md:block text-white/10 text-sm">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
