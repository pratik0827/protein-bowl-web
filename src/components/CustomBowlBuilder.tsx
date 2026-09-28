"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Flame, Dumbbell, Sparkles, MessageCircle, RotateCcw } from "lucide-react";

interface Option {
  name: string;
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
  price: number;
}

const BASES: Option[] = [
  { name: "Organic Black Quinoa", protein: 8, carbs: 39, fats: 4, calories: 220, price: 40 },
  { name: "Steamed Brown Rice", protein: 5, carbs: 45, fats: 2, calories: 215, price: 30 },
  { name: "Superfood Greens Mix", protein: 3, carbs: 6, fats: 0, calories: 35, price: 30 },
  { name: "Sweet Potato Mash", protein: 2, carbs: 41, fats: 0, calories: 180, price: 40 },
];

const PROTEINS: Option[] = [
  { name: "Herb Grilled Chicken", protein: 38, carbs: 0, fats: 4, calories: 190, price: 120 },
  { name: "Charred Malai Paneer", protein: 24, carbs: 6, fats: 22, calories: 320, price: 110 },
  { name: "Spiced Crispy Tofu", protein: 20, carbs: 4, fats: 10, calories: 185, price: 90 },
  { name: "Baked Falafel Medallions", protein: 14, carbs: 24, fats: 8, calories: 220, price: 80 },
];

const TOPPINGS: Option[] = [
  { name: "Ruby Beetroot Slaw", protein: 2, carbs: 8, fats: 0, calories: 40, price: 20 },
  { name: "Steamed Florets (Broccoli)", protein: 4, carbs: 6, fats: 0, calories: 45, price: 25 },
  { name: "Sweet Golden Corn", protein: 3, carbs: 16, fats: 1, calories: 85, price: 20 },
  { name: "Haas Avocado Mash", protein: 2, carbs: 6, fats: 15, calories: 160, price: 50 },
  { name: "Toasted Hemp & Sesame", protein: 5, carbs: 2, fats: 8, calories: 95, price: 25 },
];

const DRESSINGS: Option[] = [
  { name: "Stone-Ground Tahini", protein: 3, carbs: 4, fats: 9, calories: 105, price: 20 },
  { name: "Cold-Pressed Olive Lemon", protein: 0, carbs: 1, fats: 14, calories: 125, price: 20 },
  { name: "Beetroot Greek Yogurt", protein: 4, carbs: 5, fats: 2, calories: 55, price: 25 },
  { name: "Zero-Cal Herb Vinaigrette", protein: 0, carbs: 1, fats: 0, calories: 10, price: 15 },
];

const BASE_PRICE = 99; // Base packaging & kitchen prep fee

export default function CustomBowlBuilder() {
  const [selectedBase, setSelectedBase] = useState<Option>(BASES[0]);
  const [selectedProtein, setSelectedProtein] = useState<Option>(PROTEINS[0]);
  const [selectedToppings, setSelectedToppings] = useState<Option[]>([TOPPINGS[0], TOPPINGS[1]]);
  const [selectedDressing, setSelectedDressing] = useState<Option>(DRESSINGS[0]);

  // Toggle Toppings (up to 3)
  function toggleTopping(item: Option) {
    if (selectedToppings.some((t) => t.name === item.name)) {
      setSelectedToppings(selectedToppings.filter((t) => t.name !== item.name));
    } else {
      if (selectedToppings.length < 3) {
        setSelectedToppings([...selectedToppings, item]);
      }
    }
  }

  // Calculate live totals
  const totalCalories =
    selectedBase.calories +
    selectedProtein.calories +
    selectedDressing.calories +
    selectedToppings.reduce((acc, curr) => acc + curr.calories, 0);

  const totalProtein =
    selectedBase.protein +
    selectedProtein.protein +
    selectedDressing.protein +
    selectedToppings.reduce((acc, curr) => acc + curr.protein, 0);

  const totalCarbs =
    selectedBase.carbs +
    selectedProtein.carbs +
    selectedDressing.carbs +
    selectedToppings.reduce((acc, curr) => acc + curr.carbs, 0);

  const totalFats =
    selectedBase.fats +
    selectedProtein.fats +
    selectedDressing.fats +
    selectedToppings.reduce((acc, curr) => acc + curr.fats, 0);

  const totalPrice =
    BASE_PRICE +
    selectedBase.price +
    selectedProtein.price +
    selectedDressing.price +
    selectedToppings.reduce((acc, curr) => acc + curr.price, 0);

  // Formatted WhatsApp Order Link
  const orderMessage = `*🥗 CUSTOM BOWL ORDER — PROTEIN BOWL SAPHALE*
• *Base:* ${selectedBase.name}
• *Protein:* ${selectedProtein.name}
• *Toppings:* ${selectedToppings.map((t) => t.name).join(", ") || "None"}
• *Dressing:* ${selectedDressing.name}
-----------------------------
• *Macros:* ${totalProtein}g Protein | ${totalCarbs}g Carbs | ${totalFats}g Fats (${totalCalories} kcal)
• *Total Bill:* ₹${totalPrice}
-----------------------------
Please confirm prep time for pickup!`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(orderMessage)}`;

  return (
    <section id="custom-builder" className="w-full py-28 px-6 lg:px-16 border-b border-white/10 bg-[#080808]">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-400 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Real-Time Macro Synthesizer</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
              Build Your Own.
            </h2>
          </div>
          <p className="font-mono text-zinc-400 text-xs max-w-md font-light leading-relaxed">
            Customize every micro and macronutrient. Our kitchen weighs each gram on precision digital scales before service.
          </p>
        </div>

        {/* Builder Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Ingredient Steps */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 1. Base */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  Step 01 // Select Complex Base
                </span>
                <span className="font-mono text-xs text-zinc-500">Pick 1</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BASES.map((b) => {
                  const active = selectedBase.name === b.name;
                  return (
                    <button
                      key={b.name}
                      onClick={() => setSelectedBase(b)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        active
                          ? "bg-white text-black border-white shadow-xl scale-[1.01]"
                          : "bg-[#121212] text-zinc-300 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <p className="font-display font-bold text-sm tracking-tight">{b.name}</p>
                        <p className={`font-mono text-[11px] ${active ? "text-zinc-700" : "text-zinc-500"}`}>
                          +{b.protein}g Pro • {b.calories} kcal
                        </p>
                      </div>
                      <span className="font-mono text-xs font-bold">+₹{b.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Protein Source */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  Step 02 // Primary Protein Centerpiece
                </span>
                <span className="font-mono text-xs text-zinc-500">Pick 1</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROTEINS.map((p) => {
                  const active = selectedProtein.name === p.name;
                  return (
                    <button
                      key={p.name}
                      onClick={() => setSelectedProtein(p)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        active
                          ? "bg-white text-black border-white shadow-xl scale-[1.01]"
                          : "bg-[#121212] text-zinc-300 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <p className="font-display font-bold text-sm tracking-tight">{p.name}</p>
                        <p className={`font-mono text-[11px] ${active ? "text-zinc-700" : "text-zinc-500"}`}>
                          +{p.protein}g Pro • {p.calories} kcal
                        </p>
                      </div>
                      <span className="font-mono text-xs font-bold">+₹{p.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Fresh Veggies & Crunch */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  Step 03 // Superfoods & Veggie Add-ons
                </span>
                <span className="font-mono text-xs text-zinc-500">Pick up to 3</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TOPPINGS.map((top) => {
                  const active = selectedToppings.some((t) => t.name === top.name);
                  return (
                    <button
                      key={top.name}
                      onClick={() => toggleTopping(top)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        active
                          ? "bg-white text-black border-white shadow-xl scale-[1.01]"
                          : "bg-[#121212] text-zinc-300 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <p className="font-display font-bold text-sm tracking-tight">{top.name}</p>
                        <p className={`font-mono text-[11px] ${active ? "text-zinc-700" : "text-zinc-500"}`}>
                          +{top.protein}g Pro • {top.calories} kcal
                        </p>
                      </div>
                      <span className="font-mono text-xs font-bold">+₹{top.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Dressing */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  Step 04 // Clean Cold-Pressed Dressing
                </span>
                <span className="font-mono text-xs text-zinc-500">Pick 1</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DRESSINGS.map((d) => {
                  const active = selectedDressing.name === d.name;
                  return (
                    <button
                      key={d.name}
                      onClick={() => setSelectedDressing(d)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        active
                          ? "bg-white text-black border-white shadow-xl scale-[1.01]"
                          : "bg-[#121212] text-zinc-300 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <p className="font-display font-bold text-sm tracking-tight">{d.name}</p>
                        <p className={`font-mono text-[11px] ${active ? "text-zinc-700" : "text-zinc-500"}`}>
                          +{d.protein}g Pro • {d.calories} kcal
                        </p>
                      </div>
                      <span className="font-mono text-xs font-bold">+₹{d.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT: Live Sticky Macro Telemetry & WhatsApp Ticket */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-8 rounded-3xl bg-[#111111] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400 block mb-1">
                    Live Telemetry
                  </span>
                  <h3 className="font-display font-black text-2xl text-white uppercase">Your Formula</h3>
                </div>
                <div className="text-right">
                  <span className="font-mono text-3xl font-black text-white">₹{totalPrice}</span>
                  <span className="block font-mono text-[10px] text-zinc-500">All Taxes & Packaging Inc.</span>
                </div>
              </div>

              {/* Macro Bar Grid */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between font-mono text-xs mb-1.5">
                    <span className="text-zinc-400">Total Protein</span>
                    <span className="font-bold text-white">{totalProtein}g</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-emerald-400 h-full rounded-full"
                      animate={{ width: `${Math.min((totalProtein / 65) * 100, 100)}%` }}
                      transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-mono text-xs mb-1.5">
                    <span className="text-zinc-400">Complex Carbs</span>
                    <span className="font-bold text-white">{totalCarbs}g</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-white/60 h-full rounded-full"
                      animate={{ width: `${Math.min((totalCarbs / 100) * 100, 100)}%` }}
                      transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-mono text-xs mb-1.5">
                    <span className="text-zinc-400">Healthy Fats</span>
                    <span className="font-bold text-white">{totalFats}g</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-zinc-500 h-full rounded-full"
                      animate={{ width: `${Math.min((totalFats / 50) * 100, 100)}%` }}
                      transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between font-mono text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-emerald-400" />
                    Estimated Energy:
                  </span>
                  <span className="font-bold text-white">{totalCalories} kcal</span>
                </div>
              </div>

              {/* Recipe Summary */}
              <div className="p-4 rounded-2xl bg-[#080808] border border-white/5 font-mono text-xs space-y-2 mb-8 text-zinc-400">
                <p><strong className="text-zinc-200">Base:</strong> {selectedBase.name}</p>
                <p><strong className="text-zinc-200">Protein:</strong> {selectedProtein.name}</p>
                <p><strong className="text-zinc-200">Toppings:</strong> {selectedToppings.map(t => t.name).join(", ") || "None"}</p>
                <p><strong className="text-zinc-200">Dressing:</strong> {selectedDressing.name}</p>
              </div>

              {/* Instant WhatsApp Order Dispatch */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-2xl active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Formula on WhatsApp</span>
              </a>

              <p className="text-center font-mono text-[10px] text-zinc-500 mt-3">
                Transfers exact recipe breakdown directly to kitchen staff.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
