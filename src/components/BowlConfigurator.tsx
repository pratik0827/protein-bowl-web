"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INGREDIENTS = {
  proteins: [
    { name: "Grilled Chicken", p: 40, c: 0, f: 5, cal: 180 },
    { name: "Paneer Tikka", p: 25, c: 5, f: 20, cal: 290 },
    { name: "Spiced Tofu", p: 20, c: 4, f: 12, cal: 185 },
    { name: "Lean Steak", p: 35, c: 0, f: 15, cal: 270 },
  ],
  carbs: [
    { name: "Quinoa", p: 8, c: 39, f: 3, cal: 220 },
    { name: "Brown Rice", p: 5, c: 45, f: 2, cal: 215 },
    { name: "Sweet Potato", p: 2, c: 26, f: 0, cal: 110 },
    { name: "No Carbs (Extra Greens)", p: 2, c: 5, f: 0, cal: 25 },
  ],
  dressings: [
    { name: "Olive Oil Lemon", p: 0, c: 1, f: 14, cal: 120 },
    { name: "Spicy Tahini", p: 3, c: 5, f: 8, cal: 95 },
    { name: "Mint Yogurt", p: 4, c: 6, f: 2, cal: 50 },
    { name: "Zero-Cal Sriracha", p: 0, c: 1, f: 0, cal: 5 },
  ]
};

export function BowlConfigurator() {
  const [selections, setSelections] = useState({
    protein: INGREDIENTS.proteins[0],
    carb: INGREDIENTS.carbs[0],
    dressing: INGREDIENTS.dressings[0]
  });

  const totals = {
    cal: selections.protein.cal + selections.carb.cal + selections.dressing.cal,
    p: selections.protein.p + selections.carb.p + selections.dressing.p,
    c: selections.protein.c + selections.carb.c + selections.dressing.c,
    f: selections.protein.f + selections.carb.f + selections.dressing.f,
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Configuration Steps */}
        <div>
          <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
            Build Your <span className="text-zinc-500">Masterpiece.</span>
          </h2>

          <div className="space-y-8">
            <ConfigSection 
              title="1. Select Protein" 
              items={INGREDIENTS.proteins} 
              selected={selections.protein} 
              onSelect={(item) => setSelections(s => ({ ...s, protein: item }))} 
            />
            <ConfigSection 
              title="2. Base Complex Carb" 
              items={INGREDIENTS.carbs} 
              selected={selections.carb} 
              onSelect={(item) => setSelections(s => ({ ...s, carb: item }))} 
            />
            <ConfigSection 
              title="3. Clean Dressing" 
              items={INGREDIENTS.dressings} 
              selected={selections.dressing} 
              onSelect={(item) => setSelections(s => ({ ...s, dressing: item }))} 
            />
          </div>
        </div>

        {/* Right: Live Tally & Visual */}
        <div className="relative rounded-[40px] bg-[#0f0f0f] border border-white/5 p-8 lg:p-12 overflow-hidden flex flex-col justify-between h-[600px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_var(--tw-gradient-stops))] from-zinc-800/50 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="font-space text-zinc-400 text-sm tracking-widest uppercase mb-6">Live Macro Tally</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <TallyBox label="Calories" value={totals.cal} />
              <TallyBox label="Protein" value={totals.p} unit="g" />
              <TallyBox label="Carbs" value={totals.c} unit="g" />
              <TallyBox label="Fats" value={totals.f} unit="g" />
            </div>
          </div>

          <div className="relative z-10 mt-auto pt-8">
             <div className="flex justify-between items-end border-t border-white/10 pt-6">
                <div>
                  <p className="text-white font-syne text-xl font-bold">Custom Bowl</p>
                  <p className="text-zinc-500 font-space text-sm">₹349.00</p>
                </div>
                <button className="px-6 py-3 bg-white text-black font-space font-bold rounded-full hover:bg-zinc-200 transition-colors">
                  Add to Order
                </button>
             </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

type Ingredient = { name: string, p: number, c: number, f: number, cal: number };

function ConfigSection({ title, items, selected, onSelect }: { title: string, items: Ingredient[], selected: Ingredient, onSelect: (item: Ingredient) => void }) {
  return (
    <div>
      <h3 className="font-space text-white mb-3 text-sm">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <button
            key={item.name}
            onClick={() => onSelect(item)}
            className={`px-4 py-2 rounded-full font-space text-sm transition-all border ${
              selected.name === item.name 
              ? "bg-white text-black border-white" 
              : "bg-transparent text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function TallyBox({ label, value, unit = "" }: { label: string, value: number, unit?: string }) {
  return (
    <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5">
      <div className="text-zinc-500 font-space text-xs uppercase tracking-wider mb-2">{label}</div>
      <div className="font-mono text-3xl font-bold text-white flex items-baseline">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="inline-block"
          >
            {value}
          </motion.span>
        </AnimatePresence>
        <span className="text-base text-zinc-500 ml-1">{unit}</span>
      </div>
    </div>
  );
}
