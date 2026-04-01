"use client";

import React from "react";
import Navbar from "../components/Navbar";
import FlowerOfLife from "../components/FlowerOfLife";
import Marquee from "../components/Marquee";
import BentoGrid from "../components/BentoGrid";
import CodeSection from "../components/CodeSection";
import MoveFastSection from "../components/MoveFastSection";
import ReliableSection from "../components/ReliableSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-300 font-sans selection:bg-[#06B6D4]/20 overflow-x-hidden">
      <Navbar />
      <FlowerOfLife />
      <Marquee />
      <BentoGrid />
      <CodeSection />
      <MoveFastSection />
      <ReliableSection />
      <Footer />
    </main>
  );
}