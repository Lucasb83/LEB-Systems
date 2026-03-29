"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, User, KeyRound, Terminal, ShieldAlert, ArrowLeft } from "lucide-react";

// ==========================================
// CONSTANTS & PALETTE
// ==========================================
const APPLE_EASE = [0.22, 1, 0.36, 1] as const;

export default function AccessPortal() {
  const [authId, setAuthId] = useState("");
  const [authKey, setAuthKey] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authStep, setAuthStep] = useState(0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authId || !authKey) return;
    
    setIsAuthenticating(true);
    
    // Simulate cryptographic verification sequence
    setTimeout(() => setAuthStep(1), 800);
    setTimeout(() => setAuthStep(2), 1600);
    setTimeout(() => setAuthStep(3), 2800);
    setTimeout(() => {
      // Here is where you would integrate NextAuth, Supabase, or your backend
      window.location.href = "/"; // Redirect back home for now
    }, 3500);
  };

  return (
    <main className="min-h-screen bg-[#010614] text-[#F0F0F0] font-sans selection:bg-[#D4AF37]/30 flex flex-col relative overflow-hidden">
      
      {/* Deep Tech Background Noise */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

      {/* Top Navigation Minimal */}
      <nav className="relative z-10 w-full flex items-center justify-between px-6 md:px-12 py-8">
        <a href="/" className="flex items-center gap-3 text-[#94A3B8] hover:text-[#D4AF37] transition-colors duration-300 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Abort & Return</span>
        </a>
        
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 text-[#D4AF37]">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="currentColor" strokeWidth="1.5">
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
          <span className="text-sm font-black tracking-[0.2em] text-[#F0F0F0] uppercase">LEB <span className="text-[#D4AF37]">SYS</span></span>
        </div>
      </nav>

      {/* Login Interface */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: APPLE_EASE }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/20 mb-6 relative">
              <Lock className="w-6 h-6 text-[#D4AF37]" />
              {isAuthenticating && (
                <motion.div 
                  className="absolute inset-0 rounded-full border border-[#D4AF37]"
                  animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-2 text-white">
              Restricted <span className="text-[#D4AF37]">Area</span>
            </h1>
            <p className="text-[#94A3B8] text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">
              Level 5 Clearance Required
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <User className="w-4 h-4 text-[#94A3B8] group-focus-within:text-[#D4AF37] transition-colors" />
                </div>
                <input 
                  type="text" 
                  disabled={isAuthenticating}
                  value={authId}
                  onChange={(e) => setAuthId(e.target.value)}
                  className="w-full bg-[#010614] border border-white/10 text-white text-sm focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] block pl-12 p-4 transition-all duration-300 outline-none placeholder-[#94A3B8]/50 disabled:opacity-50 font-mono tracking-widest" 
                  placeholder="AUTHORIZATION ID" 
                  required 
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <KeyRound className="w-4 h-4 text-[#94A3B8] group-focus-within:text-[#D4AF37] transition-colors" />
                </div>
                <input 
                  type="password" 
                  disabled={isAuthenticating}
                  value={authKey}
                  onChange={(e) => setAuthKey(e.target.value)}
                  className="w-full bg-[#010614] border border-white/10 text-white text-sm focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] block pl-12 p-4 transition-all duration-300 outline-none placeholder-[#94A3B8]/50 disabled:opacity-50 font-mono tracking-widest" 
                  placeholder="CRYPTOGRAPHIC KEY" 
                  required 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isAuthenticating}
              className="w-full relative px-6 py-4 bg-[#F0F0F0] text-[#010614] font-black text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-[#D4AF37] transition-colors duration-500 disabled:bg-white/5 disabled:text-[#94A3B8] overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isAuthenticating ? "Authenticating..." : "Initialize Handshake"}
              </span>
            </button>
          </form>

          {/* Terminal Output Sequence */}
          <div className="mt-8 h-32 bg-black/50 border border-white/5 p-4 font-mono text-[9px] md:text-[10px] text-[#94A3B8] overflow-hidden flex flex-col justify-end">
            <div className="space-y-1">
              {!isAuthenticating && (
                <p>&gt; Awaiting credentials...</p>
              )}
              {isAuthenticating && (
                <>
                  <p className="text-[#F0F0F0]">&gt; Requesting secure handshake...</p>
                  {authStep >= 1 && <p>&gt; Verifying Authorization ID...</p>}
                  {authStep >= 2 && <p>&gt; Decrypting key packets... <span className="text-[#D4AF37]">[OK]</span></p>}
                  {authStep >= 3 && <p className="text-[#D4AF37]">&gt; ACCESS GRANTED. Routing...</p>}
                  <motion.div 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-3 bg-[#D4AF37] mt-1"
                  />
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Banner */}
      <div className="relative z-10 w-full bg-[#D4AF37]/5 border-t border-[#D4AF37]/20 py-3 flex items-center justify-center gap-2 text-[8px] md:text-[9px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
        <ShieldAlert className="w-3 h-3" />
        <span>Unauthorized access is strictly prohibited and logged</span>
      </div>
    </main>
  );
}