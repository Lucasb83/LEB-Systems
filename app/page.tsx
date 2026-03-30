"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import BentoGrid from "../components/BentoGrid";
import CodeSection from "../components/CodeSection";
import MoveFastSection from "../components/MoveFastSection";
import ReliableSection from "../components/ReliableSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B10] text-slate-300 font-sans selection:bg-[#F472B6]/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <BentoGrid />
      <CodeSection />
      <MoveFastSection />
      <ReliableSection />
      <Footer />
    </main>
  );
}