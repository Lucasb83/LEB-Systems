"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function ReliableSection() {
  return (
    <section className="py-20 px-6 relative z-10">
      <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
            <Shield className="w-3 h-3 text-slate-300" /> <span className="text-xs text-slate-300 font-medium">Enterprise-ready</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Reliable. Scalable. Secure.</h2>
          <p className="text-slate-400 mb-8 text-lg font-light">
            Deploy on your infrastructure or ours. Push workflows to production with the DevOps experience teams trust. LEB Systems' security and governance features let you build, monitor, and scale agents without losing control.
          </p>
          <div className="flex gap-4 mb-12">
            <button className="px-6 py-3 bg-[#23242D] border border-white/10 hover:border-[#9333EA]/50 text-white text-sm font-medium rounded-lg transition-colors">Explore info for enterprise</button>
            <button className="px-6 py-3 text-white text-sm font-medium hover:text-[#9333EA] transition-colors">Talk to sales</button>
          </div>
          
          <div className="space-y-6 border-l-2 border-white/10 pl-6">
            <div>
              <h4 className="text-white font-medium mb-1">Security and control</h4>
              <p className="text-sm text-slate-400 font-light">Fully on-prem option, SSO SAML and LDAP, encrypted secret stores, version control, RBAC permissions.</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Observability and transparency</h4>
              <p className="text-sm text-slate-400 font-light">Audit logs and log streaming to your SIEM, workflow history, real-time alerts, usage dashboards.</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Developer experience</h4>
              <p className="text-sm text-slate-400 font-light">Git-based control, isolated environments, multi-user workflows, workflow diffs.</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          {/* High quality abstract server/network image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#9333EA]/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
             <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
              alt="Server Rack" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
             />
          </div>
        </div>
      </motion.div>
    </section>
  );
}