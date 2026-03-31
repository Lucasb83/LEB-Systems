"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, Shield, Users } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d * 0.1, ease: [0.16, 1, 0.3, 1] as const } }),
};

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "8+", label: "Industries served" },
  { value: "3", label: "Countries active" },
  { value: "99.9%", label: "Uptime average" },
];

const values = [
  {
    icon: <Target className="w-5 h-5 text-[#FF4F27]" />,
    title: "Outcomes over outputs",
    desc: "We don't count tickets closed or lines written. We measure success by the business results we help you achieve — reduced costs, faster growth, better products.",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#FF9B26]" />,
    title: "Speed with precision",
    desc: "Fast delivery doesn't mean cutting corners. We move quickly by being opinionated and experienced, not by skipping quality.",
  },
  {
    icon: <Shield className="w-5 h-5 text-[#9333EA]" />,
    title: "Security by default",
    desc: "Every system we build is designed with a zero-trust mindset from the first line of infrastructure code. Security is never an afterthought.",
  },
  {
    icon: <Users className="w-5 h-5 text-[#EC4899]" />,
    title: "Radical transparency",
    desc: "No black boxes. You have full visibility into the code, the architecture, and the reasoning behind every technical decision.",
  },
];

const techPillars = [
  { name: "Cloud & Infrastructure", tags: ["AWS", "GCP", "Azure", "Terraform", "Kubernetes", "Docker"] },
  { name: "Frontend & Design", tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"] },
  { name: "Backend & Data", tags: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Kafka"] },
  { name: "AI & Automation", tags: ["OpenAI", "LangChain", "Pinecone", "n8n", "Python", "PyTorch"] },
];

const team = [
  { name: "Lisandro E. B.", role: "Founder & CTO", bio: "Infrastructure architect with 10+ years across fintech and enterprise systems. Passionate about building things that last.", initials: "LEB", color: "#FF4F27" },
  { name: "Engineering Lead", role: "Full-Stack & AI", bio: "Expert in React, Node.js, and LLM integration. Believes great software is invisible — you only notice it when it's missing.", initials: "EL", color: "#9333EA" },
  { name: "DevOps Engineer", role: "Cloud & Security", bio: "Kubernetes and zero-trust specialist. If it's not automated and monitored, it's not done.", initials: "DE", color: "#EC4899" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0e0918] text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#9333EA] blur-[160px] opacity-10 pointer-events-none" />

        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F27] shadow-[0_0_6px_#FF4F27]" />
          About us
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-4xl leading-tight">
          We build what you need{" "}
          <span className="bg-gradient-to-r from-[#FF4F27] via-[#FF9B26] to-[#FF4F27] bg-clip-text text-transparent">
            to compete.
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg text-slate-400 font-light max-w-2xl mb-10 leading-relaxed">
          LEB Systems is a technology partner for companies that want to move fast without breaking things.
          We combine deep engineering expertise with a product-minded approach to deliver infrastructure,
          AI, and software that actually works in production.
        </motion.p>
      </section>

      {/* Stats */}
      <section className="py-8 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#14151A] border border-white/5 rounded-2xl p-7 text-center">
              <div className="text-4xl font-black text-white mb-1">{s.value}</div>
              <div className="text-sm text-slate-500 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white tracking-tight mb-6">Our story</h2>
            <div className="space-y-5 text-slate-400 leading-relaxed font-light">
              <p>
                LEB Systems was founded on a simple observation: most technology agencies either have strong design skills or strong engineering skills — rarely both. And almost none have the infrastructure depth to deploy their own creations reliably.
              </p>
              <p>
                We built a team that covers the full stack — from the Terraform code that provisions your servers to the Figma prototype that becomes your customer-facing UI, and every line of backend and AI code in between.
              </p>
              <p>
                Today we work with startups moving at startup speed, and enterprise teams that need the rigour of ISO-level process. We adapt to your context, not the other way around.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex-1 w-full">
            <div className="space-y-0">
              {[
                { year: "2018", event: "Founded with focus on cloud infrastructure consulting" },
                { year: "2020", event: "Expanded into custom web and application development" },
                { year: "2022", event: "Launched AI & automation practice — first LLM deployments" },
                { year: "2024", event: "Recognised as a top technology partner in LATAM & Europe" },
                { year: "2025", event: "Serving clients in 3 continents with 50+ projects delivered" },
              ].map((item, i) => (
                <motion.div key={item.year} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF4F27] mt-1 flex-shrink-0 shadow-[0_0_8px_#FF4F27]" />
                    {i < 4 && <div className="w-px flex-1 bg-white/10 mt-2 mb-0 min-h-[40px]" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-xs font-bold text-[#FF4F27] mb-1">{item.year}</div>
                    <p className="text-slate-300 text-sm">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">What we believe</h2>
          <p className="text-slate-400 font-light">The principles that guide every line of code we write.</p>
        </motion.div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#14151A] border border-white/5 rounded-2xl p-8 flex gap-5 group hover:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                {v.icon}
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">The team</h2>
          <p className="text-slate-400 font-light">Engineers who've shipped to production, not just to staging.</p>
        </motion.div>
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div key={member.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#14151A] border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center group hover:border-white/10 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 opacity-50 rounded-t-3xl"
                style={{ background: `linear-gradient(to right, ${member.color}, transparent)` }} />
              <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white mb-5"
                style={{ background: `${member.color}25`, border: `2px solid ${member.color}40`, color: member.color }}>
                {member.initials}
              </div>
              <h3 className="text-white font-bold mb-0.5">{member.name}</h3>
              <p className="text-xs font-medium mb-4" style={{ color: member.color }}>{member.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Our tech stack</h2>
          <p className="text-slate-400 font-light">Battle-tested tools. Best-in-class for each layer.</p>
        </motion.div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {techPillars.map((pillar, i) => (
            <motion.div key={pillar.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-[#14151A] border border-white/5 rounded-2xl p-6">
              <h4 className="text-white font-semibold text-sm mb-4">{pillar.name}</h4>
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs text-slate-400 bg-white/5 border border-white/5 rounded-lg">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-[1200px] mx-auto bg-gradient-to-br from-[#FF4F27]/15 via-[#14151A] to-[#1A1A1E] border border-[#FF4F27]/15 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4F27]/8 to-transparent blur-[100px] pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 relative z-10">Let's build something great.</h2>
          <p className="text-slate-300 mb-10 text-lg font-light relative z-10 max-w-xl mx-auto">
            We take on a limited number of new clients each quarter. If you're serious about transforming your business, let's talk.
          </p>
          <a href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF4F27] hover:bg-[#FF6B00] text-white font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(255,79,39,0.45)] relative z-10 group">
            Start a conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
