"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Server, Code2, BrainCircuit, ChevronRight } from "lucide-react";

const FlowerOfLifeLogo = () => {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="text-cyan-400"
    >
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        {/* Círculo Central */}
        <circle cx="50" cy="50" r="16" />
        {/* Primera Capa (Seed of Life) */}
        <circle cx="50" cy="34" r="16" />
        <circle cx="63.8" cy="42" r="16" />
        <circle cx="63.8" cy="58" r="16" />
        <circle cx="50" cy="66" r="16" />
        <circle cx="36.2" cy="58" r="16" />
        <circle cx="36.2" cy="42" r="16" />
      </g>
    </motion.svg>
  );
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const services = [
    {
      title: "Infraestructura Cloud",
      description: "Arquitecturas escalables, resilientes y de alta disponibilidad diseñadas para soportar cargas de trabajo críticas.",
      icon: <Server className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Ciberseguridad",
      description: "Protección perimetral y de endpoint avanzada. Auditorías, pentesting y arquitecturas Zero Trust.",
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Desarrollo de Software",
      description: "Sistemas a medida, APIs robustas y aplicaciones web de ultra-alto rendimiento utilizando el stack moderno.",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Servicios de IA",
      description: "Integración de modelos de lenguaje, automatización de procesos cognitivos y análisis predictivo.",
      icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-slate-300 overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Background radial gradient tracking mouse */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.05), transparent 80%)`,
        }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="relative z-10 w-full flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 cursor-pointer">
          <FlowerOfLifeLogo />
          <span className="text-xl font-bold tracking-widest text-white uppercase">
            LEB Systems
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider text-slate-400">
          <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
          <a href="#nosotros" className="hover:text-cyan-400 transition-colors">Metodología</a>
          <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
        </div>
        <button className="px-5 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
          Iniciar Proyecto
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Sistemas de Próxima Generación
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Ingeniería de Precisión para <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Ecosistemas Digitales
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Diseñamos, aseguramos y escalamos infraestructura tecnológica. Desde arquitecturas cloud complejas hasta implementaciones de Inteligencia Artificial.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all duration-300">
              Explorar Servicios
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-700 text-white font-medium rounded-full hover:border-slate-500 hover:bg-slate-900 transition-all duration-300">
              Agendar Auditoría
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="relative z-10 py-24 px-4 bg-black/50 border-t border-slate-900 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Núcleo Operativo</h2>
            <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-black border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 group-hover:border-cyan-500/30 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}