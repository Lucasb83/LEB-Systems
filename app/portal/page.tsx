"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, User, KeyRound, ShieldAlert, ArrowLeft, Eye, EyeOff } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PortalPage() {
  const [authId, setAuthId] = useState("");
  const [authKey, setAuthKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authStep, setAuthStep] = useState(0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authId || !authKey) return;
    setIsAuthenticating(true);
    setTimeout(() => setAuthStep(1), 700);
    setTimeout(() => setAuthStep(2), 1400);
    setTimeout(() => setAuthStep(3), 2400);
    setTimeout(() => { window.location.href = "/"; }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-200 font-sans flex flex-col relative overflow-hidden">

      {/* Background dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#06B6D4] blur-[200px] opacity-8 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-[#9333EA] blur-[150px] opacity-10 pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 w-full flex items-center justify-between px-6 md:px-12 py-7">
        <a href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-medium tracking-wide">Back to site</span>
        </a>
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center shadow-[0_0_14px_rgba(6,182,212,0.5)]">
            <span className="text-white font-bold text-xs">L</span>
          </div>
          <span className="text-white font-semibold text-sm tracking-tight">LEB Systems</span>
        </a>
      </nav>

      {/* Form area */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="w-full max-w-md"
        >
          {/* Card */}
          <div className="bg-[#1E293B] border border-white/8 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#06B6D4]/40 to-transparent" />

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-5 relative">
                <Lock className="w-6 h-6 text-[#06B6D4]" />
                {isAuthenticating && (
                  <motion.div className="absolute inset-0 rounded-2xl border border-[#06B6D4]"
                    animate={{ scale: [1, 1.4], opacity: [0.8, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }} />
                )}
              </div>
              <h1 className="text-2xl font-bold text-white tracking-tight mb-1.5">Client Portal</h1>
              <p className="text-slate-500 text-sm font-light">Sign in to access your project dashboard</p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-[#06B6D4] transition-colors" />
                <input
                  type="text" required disabled={isAuthenticating}
                  value={authId} onChange={(e) => setAuthId(e.target.value)}
                  placeholder="Email address"
                  className="w-full bg-[#0F172A] border border-white/8 text-white text-sm rounded-xl pl-11 pr-4 py-3.5 outline-none focus:border-[#06B6D4]/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all placeholder:text-slate-600 disabled:opacity-50"
                />
              </div>

              <div className="relative group">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-[#06B6D4] transition-colors" />
                <input
                  type={showKey ? "text" : "password"} required disabled={isAuthenticating}
                  value={authKey} onChange={(e) => setAuthKey(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-[#0F172A] border border-white/8 text-white text-sm rounded-xl pl-11 pr-11 py-3.5 outline-none focus:border-[#06B6D4]/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all placeholder:text-slate-600 disabled:opacity-50"
                />
                <button type="button" onClick={() => setShowKey(!showKey)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400 transition-colors">
                  {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
                  <input type="checkbox" className="accent-[#06B6D4] w-3.5 h-3.5" />
                  Remember me
                </label>
                <a href="#" className="text-[#06B6D4] hover:text-[#0891B2] transition-colors font-medium">Forgot password?</a>
              </div>

              <button type="submit" disabled={isAuthenticating}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#06B6D4] hover:bg-[#0891B2] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] mt-2">
                {isAuthenticating ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                    Authenticating...
                  </>
                ) : "Sign in to portal"}
              </button>
            </form>

            {/* Terminal */}
            <div className="mt-6 bg-[#0F172A] border border-white/5 rounded-xl p-4 font-mono text-[10px] text-slate-500 h-20 flex flex-col justify-end overflow-hidden">
              {!isAuthenticating && <p>&gt; Awaiting authentication...</p>}
              {isAuthenticating && (
                <>
                  <p className="text-slate-300">&gt; Initialising secure session...</p>
                  {authStep >= 1 && <p>&gt; Verifying credentials...</p>}
                  {authStep >= 2 && <p className="text-emerald-400">&gt; Session token issued. <span className="text-emerald-500">[OK]</span></p>}
                  {authStep >= 3 && <p className="text-[#06B6D4]">&gt; Redirecting to dashboard...</p>}
                  <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-3 bg-[#06B6D4] mt-1" />
                </>
              )}
            </div>

            <p className="text-center text-xs text-slate-600 mt-5">
              Not a client yet?{" "}
              <a href="/contact" className="text-[#06B6D4] hover:text-[#0891B2] transition-colors font-medium">Start a project</a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 w-full bg-[#06B6D4]/5 border-t border-[#06B6D4]/10 py-3 flex items-center justify-center gap-2 text-[9px] font-medium tracking-widest uppercase text-[#06B6D4]/70">
        <ShieldAlert className="w-3 h-3" />
        <span>Unauthorised access is strictly prohibited and logged</span>
      </div>
    </main>
  );
}
