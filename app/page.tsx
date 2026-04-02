"use client";

import React from "react";
import Navbar from "../components/Navbar";
import FlowerOfLife from "../components/FlowerOfLife";
import TrustBar from "../components/TrustBar";
import Marquee from "../components/Marquee";
import BentoGrid from "../components/BentoGrid";
import CodeSection from "../components/CodeSection";
import MoveFastSection from "../components/MoveFastSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ReliableSection from "../components/ReliableSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-300 font-sans selection:bg-[#06B6D4]/20 overflow-x-hidden">
      <Navbar />
      <FlowerOfLife />
      <TrustBar />
      <Marquee />
      <BentoGrid />
      <CodeSection />
      <MoveFastSection />
      <TestimonialsCarousel />
      <ReliableSection />
      <FaqSection />
      <Footer />
    </main>
  );
}