"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Server, Code2, BrainCircuit, ArrowRight, Activity } from "lucide-react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows, Sparkles, MeshTransmissionMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

// ==========================================
// CONSTANTS & PALETTE
// ==========================================
const APPLE_EASE = [0.22, 1, 0.36, 1] as const;
const COLORS = {
  obsidian: "#010614", 
  goldBase: "#D4AF37", 
  goldGlow: "#FFDF00", 
  textLight: "#F0F0F0",
  textMuted: "#94A3B8"
};

// ==========================================
// 1. 3D HOLOGRAM ENGINE (CINEMATIC UPGRADE)
// ==========================================
const getFlowerOfLifePositions = (radius: number) => {
  const positions: [number, number, number][] = [[0, 0, 0]]; 
  
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    positions.push([Math.cos(angle) * radius, Math.sin(angle) * radius, 0]);
  }
  
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    positions.push([Math.cos(angle) * radius * 2, Math.sin(angle) * radius * 2, 0]);
    
    const halfAngle = angle + Math.PI / 6;
    const distance = radius * Math.sqrt(3);
    positions.push([Math.cos(halfAngle) * distance, Math.sin(halfAngle) * distance, 0]);
  }
  return positions;
};

const FLOWER_POSITIONS = getFlowerOfLifePositions(1.2);

const Flower3DModel = ({ isHovered, isSynapsing }: { isHovered: boolean, isSynapsing: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null);

  // Escala mucho más pequeña (Micro-Singularity)
  const [mobileScale, setMobileScale] = useState(0.15);

  useEffect(() => {
    const checkMobile = () => {
      setMobileScale(window.innerWidth < 768 ? 0.10 : 0.15);
    };
    checkMobile(); 
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!instancedMeshRef.current) return;
    const dummy = new THREE.Object3D();
    FLOWER_POSITIONS.forEach((pos, idx) => {
      dummy.position.set(pos[0], pos[1], pos[2]);
      dummy.updateMatrix();
      instancedMeshRef.current!.setMatrixAt(idx, dummy.matrix);
    });
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || !coreRef.current) return;

    // Mouse Parallax Calculation
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;

    if (!isSynapsing) {
      // Rotación orgánica combinada con el movimiento del mouse (Parallax)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY + Math.sin(state.clock.elapsedTime * 0.2) * 0.15, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX + state.clock.elapsedTime * 0.15, 0.05);
    } else {
      // Hiper-velocidad durante el click
      groupRef.current.rotation.y += delta * 25;
      groupRef.current.rotation.x += delta * 12;
      const targetScale = mobileScale * 8.0; 
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    }

    // El núcleo central late
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.3;
    coreRef.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <group ref={groupRef} rotation={[Math.PI / 6, 0, 0]} scale={[mobileScale, mobileScale, mobileScale]}>
      
      {/* Geometría instanciada con el nuevo material de Cristal de Refracción */}
      <instancedMesh ref={instancedMeshRef} args={[null as any, null as any, 19]}>
        <torusGeometry args={[1.2, 0.04, 16, 64]} />
        <MeshTransmissionMaterial 
          background={new THREE.Color(COLORS.obsidian)}
          color={isSynapsing || isHovered ? COLORS.goldGlow : COLORS.goldBase}
          transmission={0.95} // 95% de transparencia de cristal
          thickness={0.5}     // Grosor del cristal para doblar la luz
          roughness={0.05}
          chromaticAberration={isSynapsing ? 0.2 : 0.04} // Distorsión de colores en los bordes
          anisotropy={0.1}
          distortion={0.0}
          resolution={256}    // Resolución optimizada para mobile
        />
      </instancedMesh>

      {/* Núcleo emisor puro (dispara el Bloom) */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color={isSynapsing || isHovered ? "#FFFFFF" : COLORS.goldGlow} />
      </mesh>

      <Sparkles count={200} scale={6} size={2} speed={0.4} opacity={0.6} color={COLORS.goldBase} />
    </group>
  );
};

// ==========================================
// 2. ENTRY PORTAL (WITH POST-PROCESSING)
// ==========================================
const EntryPortal = ({ onEnter }: { onEnter: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSynapsing, setIsSynapsing] = useState(false);

  const handleTrigger = () => {
    setIsSynapsing(true);
    setTimeout(onEnter, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: APPLE_EASE }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#010614] overflow-hidden overscroll-none touch-none"
    >
      <div className="absolute inset-0 z-0 bg-[#010614] pointer-events-none" />

      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} color={COLORS.textLight} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color={COLORS.goldBase} />
          <Environment preset="city" />
          
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <Flower3DModel isHovered={isHovered} isSynapsing={isSynapsing} />
          </Float>
          
          <ContactShadows resolution={256} position={[0, -1.0, 0]} opacity={0.25} scale={8} blur={2} far={4} color={COLORS.goldBase} />
          
          {/* CINEAMATIC POST-PROCESSING PIPELINE */}
          <EffectComposer disableNormalPass multisampling={4}>
            {/* El bloom hace que el núcleo y el cristal brillen ópticamente */}
            <Bloom luminanceThreshold={0.5} mipmapBlur intensity={isSynapsing ? 5.0 : 1.5} />
            {/* El ruido le saca el aspecto "plástico" al render */}
            <Noise opacity={0.025} blendFunction={BlendFunction.OVERLAY} />
          </EffectComposer>
        </Canvas>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isSynapsing ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
        className="absolute inset-0 bg-white z-40 pointer-events-none mix-blend-overlay"
      />

      <div className="relative z-50 flex flex-col items-center justify-center w-full h-full touch-manipulation select-none">
        <motion.button
          onClick={handleTrigger}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)} 
          onTouchEnd={() => setIsHovered(false)}
          className="relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center group focus:outline-none cursor-pointer"
          animate={{ scale: isSynapsing ? 0 : 1 }}
          transition={{ duration: 0.5, ease: APPLE_EASE }}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <div className="relative z-10 w-1 h-1 md:w-1.5 md:h-1.5 bg-[#D4AF37] rounded-full group-hover:bg-[#FFDF00] group-hover:scale-[3] transition-all duration-500 shadow-[0_0_8px_rgba(212,175,55,0.6)] group-hover:shadow-[0_0_20px_rgba(255,223,0,1)]"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered && !isSynapsing ? 1 : 0, y: isHovered && !isSynapsing ? 0 : 10 }}
            transition={{ duration: 0.4, ease: APPLE_EASE }}
            className="absolute bottom-[-15px] md:bottom-[-20px] whitespace-nowrap pointer-events-none"
          >
            <span className="text-[#94A3B8] text-[6px] md:text-[7px] font-bold tracking-[0.4em] uppercase">
              Initialize
            </span>
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
};

// ==========================================
// 3. MAIN SITE & NAVIGATION
// ==========================================
const TopNavigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-4 md:px-12 py-5 md:py-6 bg-[#010614]/80 backdrop-blur-xl border-b border-white/5">
    <div className="flex items-center gap-3 md:gap-4 cursor-pointer group">
      <div className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37] group-hover:text-[#FFDF00] transition-colors duration-500">
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
      <span className="text-lg md:text-xl font-black tracking-[0.1em] md:tracking-[0.2em] text-[#F0F0F0] uppercase leading-none">
        LEB <span className="text-[#D4AF37]">SYSTEMS</span>
      </span>
    </div>
    
    <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase text-[#94A3B8]">
      <a href="#architecture" className="hover:text-[#F0F0F0] transition-colors duration-300">Architecture</a>
      <a href="#security" className="hover:text-[#F0F0F0] transition-colors duration-300">Security</a>
      <a href="#intelligence" className="hover:text-[#F0F0F0] transition-colors duration-300">Intelligence</a>
    </div>

    <a href="/portal" className="px-5 md:px-8 py-2 md:py-3 bg-transparent border border-[#D4AF37]/50 text-[#D4AF37] font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#010614] transition-colors duration-500">
      Access Portal
    </a>
  </nav>
);

const MainSite = () => {
  const services = [
    { title: "Scalable Infrastructure", desc: "Multi-region, high-availability cloud deployments engineered for infinite resilience and absolute data sovereignty.", icon: <Server className="w-6 h-6 text-[#D4AF37]" /> },
    { title: "Zero-Trust Cybersecurity", desc: "Military-grade perimeter defense. We assume breach and cryptographically secure digital assets from the inside out.", icon: <Shield className="w-6 h-6 text-[#D4AF37]" /> },
    { title: "Advanced Engineering", desc: "Bespoke, high-performance software architecture and robust APIs engineered to dominate entire market sectors.", icon: <Code2 className="w-6 h-6 text-[#D4AF37]" /> },
    { title: "Cognitive AI Services", desc: "Deploy advanced LLMs and predictive neural networks to automate complex operations at unprecedented scale.", icon: <BrainCircuit className="w-6 h-6 text-[#D4AF37]" /> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: APPLE_EASE }}
      className="relative min-h-screen bg-[#010614] text-[#F0F0F0] overflow-x-hidden font-sans selection:bg-[#D4AF37]/30"
    >
      <TopNavigation />

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-24 pb-16 md:pt-32 md:pb-20 w-full max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: APPLE_EASE, delay: 0.2 }}
          className="w-full flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 mb-8 md:mb-10 border border-[#D4AF37]/20 bg-[#D4AF37]/5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D4AF37]"></span>
            </span>
            <span className="text-[#D4AF37] text-[7px] md:text-[9px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
              System Architecture Active
            </span>
          </div>
          
          <h1 className="font-black tracking-tighter mb-6 md:mb-8 flex flex-col items-center w-full leading-[0.85] md:leading-[0.85] uppercase">
            <span className="text-[14vw] md:text-[10vw] text-[#F0F0F0]">Beyond</span>
            <span className="text-[14vw] md:text-[10vw] text-transparent bg-clip-text bg-gradient-to-b from-[#F0F0F0] to-[#94A3B8]">
              Infrastructure
            </span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-xl text-[#94A3B8] mb-12 md:mb-16 max-w-3xl leading-relaxed font-light tracking-wide px-2 md:px-4">
            We architect mission-critical ecosystems. Transforming profound technical complexity into an <span className="text-[#F0F0F0] font-medium">absolute competitive advantage</span> through Elite Infrastructure, Zero-Trust Security, and AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
            <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-[#F0F0F0] text-[#010614] font-black text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-[#D4AF37] transition-colors duration-500 flex items-center justify-center gap-3">
              Deploy Systems <ArrowRight className="w-3 h-3" />
            </button>
            <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-transparent border border-white/10 text-[#F0F0F0] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 flex items-center justify-center gap-3">
              <Activity className="w-3 h-3 text-[#D4AF37]" /> Request Audit
            </button>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 py-16 md:py-20 px-4 md:px-6 bg-[#010614] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 lg:divide-x divide-white/5">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F0F0F0] mb-2 tracking-tighter">99.999<span className="text-[#D4AF37]">%</span></span>
              <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase text-[#94A3B8]">Guaranteed Uptime</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F0F0F0] mb-2 tracking-tighter">&lt;1<span className="text-[#D4AF37]">ms</span></span>
              <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase text-[#94A3B8]">Global Latency</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F0F0F0] mb-2 tracking-tighter">Zero</span>
              <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase text-[#94A3B8]">Trust Architecture</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F0F0F0] mb-2 tracking-tighter">24<span className="text-[#D4AF37]">/</span>7</span>
              <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase text-[#94A3B8]">Threat Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="relative z-10 py-24 md:py-32 px-4 md:px-6 bg-[#010614]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-6 md:w-8 h-[1px] bg-[#D4AF37]"></div>
              <div className="text-[8px] md:text-[9px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]">Core Operations</div>
              <div className="w-6 md:w-8 h-[1px] bg-[#D4AF37]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tighter uppercase">
              Elite Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: APPLE_EASE }}
                className="group relative p-8 md:p-14 border border-white/5 bg-[#010614] hover:border-[#D4AF37]/30 transition-all duration-700 overflow-hidden"
              >
                <div className="relative z-10 mb-6 md:mb-8 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  {service.icon}
                </div>
                
                <h3 className="relative z-10 text-xl md:text-2xl font-black text-[#F0F0F0] mb-3 md:mb-4 tracking-tight uppercase">
                  {service.title}
                </h3>
                
                <p className="relative z-10 text-[#94A3B8] text-xs md:text-sm lg:text-base leading-relaxed mb-8 md:mb-10 font-light max-w-sm">
                  {service.desc}
                </p>
                
                <div className="relative z-10 h-[1px] w-full bg-white/5 mb-6 md:mb-8 group-hover:bg-[#D4AF37]/20 transition-colors duration-700"></div>
                
                <a href="#" className="relative z-10 inline-flex items-center gap-2 md:gap-3 text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-[#F0F0F0] group-hover:text-[#D4AF37] transition-colors duration-500">
                  Explore Architecture <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform duration-500" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#010614] py-8 md:py-10 text-center px-4">
        <p className="text-[#94A3B8] text-[7px] md:text-[9px] font-bold tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} LEB Systems. Absolute Authority in IT Infrastructure.
        </p>
      </footer>
    </motion.div>
  );
};

// ==========================================
// 4. MASTER ORCHESTRATOR
// ==========================================
export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="bg-[#010614] min-h-screen selection:bg-[#D4AF37]/30">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <EntryPortal key="portal" onEnter={() => setHasEntered(true)} />
        ) : (
          <MainSite key="main" />
        )}
      </AnimatePresence>
    </main>
  );
}