"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const tiltX = useTransform(smoothY, [-500, 500], [8, -8]);
  const tiltY = useTransform(smoothX, [-500, 500], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX - innerWidth / 2;
      const y = clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[92vh] px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between pt-24 overflow-hidden bg-[#080808]">
      
      {/* Left: Editorial Typography */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10 relative space-y-10">
        <div className="flex flex-col gap-2">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-syne text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter"
            >
              Fuel Your
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-syne text-6xl md:text-8xl lg:text-9xl font-bold text-zinc-500 leading-[0.9] tracking-tighter"
            >
              Peak State.
            </motion.h1>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <motion.p 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 font-space max-w-lg leading-relaxed ml-2"
          >
            Saphale’s first stealth-nutrition hub. Handcrafted macro-perfect bowls engineered for zero compromise on taste or health.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center gap-6 mt-8 ml-2"
        >
          <Link href="#order" className="px-10 py-5 bg-white text-[#080808] font-space font-bold rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] text-lg">
            Order on WhatsApp
          </Link>
          <Link href="#menu" className="px-10 py-5 bg-transparent border border-white/20 text-white font-space font-bold rounded-full hover:bg-white/5 transition-colors backdrop-blur-md text-lg">
            Explore Menu
          </Link>
        </motion.div>
      </div>

      {/* Right: Visual Canvas */}
      <div className="w-full lg:w-1/2 h-[500px] lg:h-[800px] flex items-center justify-center relative mt-16 lg:mt-0 perspective-1000">
        
        {/* Subtle radial ambient light glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

        {/* 2D Image Entrance Motion & Parallax */}
        <motion.div
          initial={{ x: 160, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 24, stiffness: 75, mass: 1.1, delay: 0.1 }}
          style={{ rotateX: tiltX, rotateY: tiltY }}
          className="relative w-[440px] h-[440px] md:w-[520px] md:h-[520px] z-20 cursor-grab active:cursor-grabbing preserve-3d"
        >
          <div className="absolute inset-0 rounded-full overflow-hidden drop-shadow-[0_30px_45px_rgba(0,0,0,0.85)]">
             <Image 
                src="/hero-bowl.png" 
                alt="Signature Protein Bowl" 
                fill 
                className="object-cover scale-[1.02]"
                priority
             />
          </div>
        </motion.div>

        {/* Floating Badges */}
        <FloatingBadge 
          text="45g Clean Protein" 
          delay={0.8} 
          className="top-[15%] left-[5%] lg:-left-12" 
          smoothX={smoothX} smoothY={smoothY} factor={0.06}
        />
        <FloatingBadge 
          text="Cold-Pressed / Zero Seed Oils" 
          delay={0.9} 
          className="bottom-[15%] left-[15%] lg:left-0" 
          smoothX={smoothX} smoothY={smoothY} factor={0.09}
        />
        <FloatingBadge 
          text="0g Refined Sugars" 
          delay={1.0} 
          className="top-[25%] right-[5%] lg:-right-8" 
          smoothX={smoothX} smoothY={smoothY} factor={0.05}
        />
      </div>
      
    </section>
  );
}

function FloatingBadge({ 
  text, 
  delay, 
  className, 
  smoothX, 
  smoothY, 
  factor 
}: { 
  text: string, 
  delay: number, 
  className: string, 
  smoothX: import("framer-motion").MotionValue<number>, 
  smoothY: import("framer-motion").MotionValue<number>, 
  factor: number 
}) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.5, delay }}
      style={{ 
        x: useTransform(smoothX, (v: number) => v * factor), 
        y: useTransform(smoothY, (v: number) => v * factor) 
      }}
      className={`absolute z-30 px-5 py-2.5 bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pointer-events-none ${className}`}
    >
      <span className="text-sm font-space font-medium text-white whitespace-nowrap">{text}</span>
    </motion.div>
  );
}
