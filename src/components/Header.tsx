"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

const NAV_LINKS = [
  { name: "Menu", href: "#menu" },
  { name: "Sourcing", href: "#sourcing" },
  { name: "Locations", href: "#locations" },
];

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
    >
      <div className="flex items-center justify-between px-4 py-2 bg-[#121212]/75 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {/* Brand Lockup */}
        <Link href="/" className="flex items-center gap-3 pl-2 group">
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex w-full h-full rounded-full bg-zinc-300 opacity-20 group-hover:animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-gradient-to-tr from-zinc-400 to-white" />
          </div>
          <span className="font-syne font-bold text-lg tracking-wider text-white">
            PROTEIN BOWL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors z-10 font-space"
            >
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center pr-1">
          <MagneticButton>
            <Link
              href="#order"
              className="px-5 py-2.5 bg-white text-[#080808] text-sm font-bold font-space rounded-full hover:bg-zinc-200 transition-colors"
            >
              Order on WhatsApp
            </Link>
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (buttonRef.current) {
      const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x: x * 0.2, y: y * 0.2 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
