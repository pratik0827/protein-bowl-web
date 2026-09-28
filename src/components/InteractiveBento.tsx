"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Flame, Dumbbell } from "lucide-react";

export function InteractiveBento() {
  return (
    <section id="menu" className="py-24 max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Engineered for <span className="text-zinc-500">Performance.</span>
        </h2>
        <p className="text-zinc-400 font-space max-w-2xl">
          We do not guess macros. Every bowl is precisely measured and crafted with 100% clean ingredients to fuel your specific goal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
        
        {/* Box 1: Signature Hero with Macro Switcher */}
        <div className="md:col-span-2 relative p-1 rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-900 group">
          <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-full w-full bg-[#121212] rounded-[22px] p-8 flex flex-col justify-between overflow-hidden">
            <MacroSwitcherBox />
          </div>
        </div>

        {/* Box 2: Aceternity-style Border Beam Card (Saphale Flagship) */}
        <div className="relative rounded-3xl p-1 bg-zinc-900 overflow-hidden group">
          <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#000000_100%)] opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative h-full w-full bg-[#0a0a0a] rounded-[22px] p-8 flex flex-col justify-between backdrop-blur-3xl">
            <div>
              <h3 className="font-syne text-xl font-bold text-white mb-2">Saphale Kitchen Flagship</h3>
              <p className="text-sm text-zinc-400 font-space">Farm-to-bowl transparency.</p>
            </div>
            
            <div className="space-y-4 font-space text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-zinc-300" />
                <span className="text-zinc-300">06:00 AM - Harvested Locally</span>
              </div>
              <div className="w-[1px] h-4 bg-zinc-700 ml-1" />
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white" />
                <span className="text-white font-medium">12:30 PM - Served Fresh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Box 3: Live Macro Dial */}
        <div className="relative rounded-3xl bg-zinc-900/50 border border-white/5 p-8 flex flex-col items-center justify-center group overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 opacity-50" />
           <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
             <h3 className="font-syne text-lg font-bold text-white mb-6">Macro Distribution</h3>
             <MacroDial />
           </div>
        </div>

        {/* Box 4: Artisan Refreshers */}
        <div className="md:col-span-2 relative rounded-3xl bg-zinc-900 border border-white/5 p-8 flex overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 via-[#121212] to-[#121212] opacity-80" />
          <div className="relative z-10 flex flex-col justify-between h-full max-w-md">
            <div>
              <h3 className="font-syne text-2xl font-bold text-white mb-2">Artisan Refreshers</h3>
              <p className="text-sm text-zinc-400 font-space">Cold-pressed hydration metrics.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-black/50 border border-white/5 backdrop-blur-sm">
                <div className="text-white font-syne font-bold text-xl mb-1">Pure Coconut</div>
                <div className="text-zinc-500 font-space text-xs">Electrolyte Dense</div>
              </div>
              <div className="p-4 rounded-2xl bg-black/50 border border-white/5 backdrop-blur-sm">
                <div className="text-white font-syne font-bold text-xl mb-1">Matcha Lime</div>
                <div className="text-zinc-500 font-space text-xs">Antioxidant Rich</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function MacroSwitcherBox() {
  const [activeMode, setActiveMode] = useState<"keto" | "protein" | "bulk">("protein");

  const macros = {
    keto: { name: "Keto Shred", cal: 420, p: 35, c: 8, f: 28, icon: Flame },
    protein: { name: "The Beast", cal: 580, p: 55, c: 45, f: 18, icon: Dumbbell },
    bulk: { name: "Clean Bulk", cal: 850, p: 65, c: 90, f: 22, icon: Leaf },
  };

  const active = macros[activeMode];
  const Icon = active.icon;

  return (
    <div className="flex flex-col h-full w-full relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div>
          <AnimatePresence mode="popLayout">
            <motion.h3
              key={activeMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-syne text-3xl font-bold text-white mb-1 flex items-center gap-2"
            >
              {active.name} <Icon className="w-6 h-6 text-zinc-400" />
            </motion.h3>
          </AnimatePresence>
          <p className="text-zinc-400 font-space text-sm">Signature base crafted for your goals.</p>
        </div>
        <div className="flex bg-black p-1 rounded-full border border-white/10">
          {(["keto", "protein", "bulk"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold font-space capitalize transition-colors ${activeMode === mode ? "bg-white text-black" : "text-zinc-400 hover:text-white"}`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto grid grid-cols-4 gap-4">
        {[
          { label: "Calories", val: active.cal },
          { label: "Protein (g)", val: active.p },
          { label: "Carbs (g)", val: active.c },
          { label: "Fats (g)", val: active.f },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col bg-zinc-900/50 p-4 rounded-2xl border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors">
            <span className="text-zinc-500 font-space text-xs mb-1 uppercase tracking-wider">{stat.label}</span>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={`${stat.label}-${stat.val}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="font-mono text-2xl font-medium text-white"
              >
                {stat.val}
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function MacroDial() {
  // Simple SVG dial animation
  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="#27272a" strokeWidth="8" fill="none" />
        {/* Carbs 30% */}
        <motion.circle 
          initial={{ strokeDasharray: "0 251.2" }}
          whileInView={{ strokeDasharray: "75.36 251.2" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          cx="50" cy="50" r="40" stroke="#71717a" strokeWidth="8" fill="none" strokeLinecap="round"
        />
        {/* Fats 20% */}
        <motion.circle 
          initial={{ strokeDasharray: "0 251.2" }}
          whileInView={{ strokeDasharray: "50.24 251.2" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          cx="50" cy="50" r="40" stroke="#a1a1aa" strokeWidth="8" fill="none" strokeLinecap="round" strokeDashoffset="-75.36"
        />
        {/* Protein 50% */}
        <motion.circle 
          initial={{ strokeDasharray: "0 251.2" }}
          whileInView={{ strokeDasharray: "125.6 251.2" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          cx="50" cy="50" r="40" stroke="#ffffff" strokeWidth="8" fill="none" strokeLinecap="round" strokeDashoffset="-125.6"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-mono font-bold text-2xl text-white">50%</span>
        <span className="font-space text-[10px] uppercase text-zinc-400 tracking-widest">Protein</span>
      </div>
    </div>
  );
}
