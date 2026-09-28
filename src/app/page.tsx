"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  ShieldCheck, 
  Flame, 
  Dumbbell, 
  Sparkles,
  ChevronRight,
  CheckCircle2,
  SlidersHorizontal
} from "lucide-react";
import CustomBowlBuilder from "@/components/CustomBowlBuilder";

const DISHES = [
  {
    id: "beast",
    title: "The Beast Power Bowl",
    tagline: "High-Protein Heavyweight",
    badge: "55g Protein • 580 kcal",
    price: "₹299",
    category: "High Protein",
    desc: "Tender herb-marinated chicken breast or roasted malai paneer, black quinoa, sweet corn, char-steamed broccoli, and stone-ground tahini dressing.",
    macros: { protein: 55, carbs: 42, fats: 16 },
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "keto",
    title: "Keto Garden Surge",
    tagline: "Zero-Refined Ketogenic Fuel",
    badge: "42g Protein • 490 kcal",
    price: "₹329",
    category: "Keto Specific",
    desc: "Charred artisan tofu or grilled chicken breast, fresh Haas avocado slices, sautéed baby spinach, toasted hemp seeds, and cold-pressed extra virgin olive vinaigrette.",
    macros: { protein: 42, carbs: 12, fats: 28 },
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "falafel",
    title: "Falafel & Beet Hummus",
    tagline: "100% Plant-Powered Clean Recovery",
    badge: "28g Protein • 440 kcal",
    price: "₹269",
    category: "Plant Powered",
    desc: "Crispy oven-baked chickpea falafels resting on house ruby beetroot puree, diced Persian cucumbers, pickled red cabbage, and sesame seed crunch.",
    macros: { protein: 28, carbs: 48, fats: 14 },
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "salmon",
    title: "Lean Harvest Grain",
    tagline: "Omega-Dense Athletic Fuel",
    badge: "46g Protein • 510 kcal",
    price: "₹349",
    category: "Clean Bulk",
    desc: "Steamed tender lean cuts, warm brown grain medley, sweet edamame pods, shaved purple carrots, toasted black sesame, and clean ginger teriyaki glaze.",
    macros: { protein: 46, carbs: 44, fats: 15 },
    img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1000&q=80"
  }
];

const REVIEWS = [
  {
    name: "Vikram Rathore",
    role: "CrossFit Coach, Palghar",
    rating: 5,
    text: "Finally an authentic nutrition cafe in Saphale that doesn't dump cheap palm oil or heavy mayo into fitness meals. Macros are weighed accurately on precision scales."
  },
  {
    name: "Sneha Patil",
    role: "Marathon Runner",
    rating: 5,
    text: "The Beast Power Bowl has been my post-training staple. High clean protein without that sluggish crash. Curbside pickup on WhatsApp is ready in 10 minutes flat."
  },
  {
    name: "Aniket Save",
    role: "Daily Regular & Tech Lead",
    rating: 5,
    text: "I order lunch here 4 days a week. The Falafel Beet Hummus bowl is restaurant quality and completely guilt-free. Incredible standard for Saphale."
  }
];

export default function ProteinBowlShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const currentDish = DISHES[activeIdx];
  const whatsappBase = "https://wa.me/?text=Hi%20Protein%20Bowl!%20I%20want%20to%20order%20the%20";

  return (
    <main className="w-full min-h-screen bg-[#080808] text-[#EDEDED] font-sans antialiased overflow-x-hidden selection:bg-white selection:text-black pb-20 md:pb-0">

      {/* 1. FLOATING TITANIUM FROSTED NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#080808]/90 backdrop-blur-2xl border-b border-white/10 px-6 lg:px-16 py-4 transition-all">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />

            <div className="flex items-center gap-2 font-display font-black text-xl tracking-wider text-white">
              {["PROTEIN", "BOWL"].map((word, index) => (
                <motion.span
                  key={word}
                  className="inline-block"
                  animate={{
                    y: [0, -4, 0],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.6, // Word 1 lifts, then Word 2 lifts
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 border-l border-white/10 pl-3 hidden sm:inline">
              Saphale Flagship
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-10 font-mono text-xs text-zinc-300 uppercase tracking-widest">
            <a href="#hero" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#menu" className="hover:text-white transition-colors">Signature Showcase</a>
            <a href="#standards" className="hover:text-white transition-colors">Standards</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#location" className="hover:text-white transition-colors">Location</a>
          </div>

          <a
            href="https://wa.me/?text=Hi%20Protein%20Bowl!%20I%20would%20like%20to%20order."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order On WhatsApp</span>
          </a>
        </div>
      </header>

      {/* 2. FULL-VIEWPORT EDITORIAL HERO */}
      <section id="hero" className="w-full min-h-screen pt-32 pb-20 px-6 lg:px-16 flex flex-col justify-between border-b border-white/10 relative">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto z-10">
          
          {/* Left Column: Bold Asymmetric Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-300 mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Saphale's Stealth Nutrition Laboratory</span>
            </div>

            <h1 className="font-display font-black text-6xl sm:text-7xl xl:text-9xl tracking-tight leading-[0.9] text-white uppercase mb-8">
              PRECISION <br />
              <span className="text-zinc-600">FUEL FOR</span> <br />
              RECOVERY.
            </h1>

            <p className="font-mono text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10 font-light">
              Chef-crafted, macro-exact fast casual designed for local athletes and health-conscious eaters in Saphale. Zero seed oils, zero refined sugar, and weighed to the gram.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#menu"
                className="px-8 py-4 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-2xl active:scale-95"
              >
                <span>Inspect Signature Bowls</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#location"
                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Visit Saphale Flagship
              </a>
            </div>
          </div>

          {/* Right Column: Hero Bowl Visual with Dynamic Floating Hologram Pills */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-64 h-64 sm:w-[480px] sm:h-[480px] flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <img
                  src="/hero-bowl.png"
                  alt="Signature Protein Bowl"
                  className="w-full h-full object-cover rounded-full shadow-[0_35px_90px_rgba(0,0,0,0.95)] border-2 border-white/10 select-none"
                />

                <div className="absolute -top-4 left-4 px-4 py-2.5 rounded-2xl bg-[#121212]/95 border border-white/20 backdrop-blur-xl font-mono text-xs text-white shadow-2xl flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-emerald-400" />
                  <span>55g Clean Protein</span>
                </div>

                <div className="absolute -bottom-4 right-6 px-4 py-2.5 rounded-2xl bg-[#121212]/95 border border-white/20 backdrop-blur-xl font-mono text-xs text-white shadow-2xl flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>0% Seed Oils</span>
                </div>

                <div className="absolute top-1/2 -right-6 -translate-y-1/2 px-4 py-2 rounded-2xl bg-[#121212]/95 border border-white/20 backdrop-blur-xl font-mono text-xs text-white shadow-2xl flex items-center gap-2">
                  <Flame className="w-4 h-4 text-emerald-400" />
                  <span>580 kcal</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Hero Bottom Telemetry Bar */}
        <div className="w-full pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="block font-mono text-xs uppercase text-zinc-500 mb-1">Standard Purity</span>
            <span className="font-display font-bold text-2xl text-white">0% Seed Oils</span>
          </div>
          <div>
            <span className="block font-mono text-xs uppercase text-zinc-500 mb-1">Macro Density</span>
            <span className="font-display font-bold text-2xl text-white">45g – 55g Pro</span>
          </div>
          <div>
            <span className="block font-mono text-xs uppercase text-zinc-500 mb-1">Pickup Velocity</span>
            <span className="font-display font-bold text-2xl text-white">15 Min Prep</span>
          </div>
          <div>
            <span className="block font-mono text-xs uppercase text-zinc-500 mb-1">Flagship Station</span>
            <span className="font-display font-bold text-2xl text-white">Saphale East</span>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ONE-DISH FOCUS STAGE (With Slide Arrows & Hover Lift) */}
      <section id="menu" className="w-full py-28 px-6 lg:px-16 border-b border-white/10 bg-[#0a0a0a]">
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-400 mb-3">
              <span>Interactive Tasting Stage</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
              Signature Lineup.
            </h2>
          </div>

          {/* Navigation Arrows & Counter */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-zinc-400">
              0{activeIdx + 1} / 0{DISHES.length}
            </span>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveIdx((prev) => (prev === 0 ? DISHES.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full bg-[#141414] border border-white/15 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors shadow-lg"
                aria-label="Previous Bowl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveIdx((prev) => (prev === DISHES.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full bg-[#141414] border border-white/15 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors shadow-lg"
                aria-label="Next Bowl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Quick Tab Switchers with Lift Effect */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {DISHES.map((dish, idx) => (
            <motion.button
              key={dish.id}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveIdx(idx)}
              className={`px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all border ${
                activeIdx === idx
                  ? "bg-white text-black font-bold border-white shadow-[0_10px_25px_rgba(255,255,255,0.15)]"
                  : "bg-[#141414] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {dish.title}
            </motion.button>
          ))}
        </div>

        {/* Main Showcase Frame */}
        <div className="w-full rounded-3xl bg-[#111111] border border-white/10 p-8 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDish.id}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
                  {currentDish.tagline}
                </span>
                <span className="font-mono text-xs text-zinc-400">{currentDish.badge}</span>
              </motion.div>

              {/* Animated Headline with Gradient Glow */}
              <motion.h3 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text"
              >
                {currentDish.title}
              </motion.h3>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-mono text-zinc-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-light"
              >
                {currentDish.desc}
              </motion.p>

              {/* Interactive Lift-Up Macro Cards */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-md mb-10">
                {[
                  { label: "Protein", val: `${currentDish.macros.protein}g`, pct: (currentDish.macros.protein / 60) * 100, bar: "bg-emerald-400" },
                  { label: "Clean Carbs", val: `${currentDish.macros.carbs}g`, pct: (currentDish.macros.carbs / 60) * 100, bar: "bg-white/70" },
                  { label: "Good Fats", val: `${currentDish.macros.fats}g`, pct: (currentDish.macros.fats / 35) * 100, bar: "bg-zinc-500" },
                ].map((macro, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 font-mono shadow-md cursor-default hover:border-white/30 hover:bg-white/[0.08] transition-colors"
                  >
                    <span className="block text-[11px] text-zinc-400 uppercase">{macro.label}</span>
                    <span className="text-2xl font-bold text-white">{macro.val}</span>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className={`${macro.bar} h-full rounded-full transition-all duration-500`} style={{ width: `${macro.pct}%` }} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Price & Lift Order Button */}
              <div className="flex items-center gap-6">
                <span className="font-mono font-bold text-4xl text-white">{currentDish.price}</span>
                <motion.a
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  href={`${whatsappBase}${encodeURIComponent(currentDish.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-[0_15px_30px_rgba(255,255,255,0.15)]"
                >
                  <span>Order via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Frame Photo with Smooth Slide-in Transition */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDish.id}
                initial={{ opacity: 0, scale: 0.85, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.85, x: -50 }}
                transition={{ type: "spring", stiffness: 100, damping: 18 }}
                whileHover={{ scale: 1.04, rotate: 1 }}
                className="relative w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] cursor-pointer"
              >
                <img
                  src={currentDish.id === "beast" ? "/hero-bowl.png" : currentDish.img}
                  alt={currentDish.title}
                  className="w-full h-full object-cover rounded-full shadow-[0_30px_90px_rgba(0,0,0,0.95)] border-4 border-white/15 pointer-events-none select-none"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. ALTERNATING LUXURY DISH BREAKDOWNS (Left/Right alternating grid) */}
      <section className="w-full py-28 px-6 lg:px-16 border-b border-white/10">
        <div className="w-full mb-20 text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">Curated Lineup</p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
            The Complete Menu.
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {DISHES.map((dish, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={dish.id}
                className={`w-full flex flex-col lg:flex-row items-center justify-between gap-14 p-8 lg:p-14 rounded-3xl bg-[#111111] border border-white/10 shadow-2xl hover:border-white/20 transition-all ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Details */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
                    Bowl 0{index + 1} // {dish.category}
                  </span>
                  <h3 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
                    {dish.title}
                  </h3>
                  <p className="font-mono text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                    {dish.desc}
                  </p>

                  <div className="flex gap-3 font-mono text-xs text-zinc-400 mb-8">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">PRO: {dish.macros.protein}g</span>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">CARB: {dish.macros.carbs}g</span>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">FAT: {dish.macros.fats}g</span>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="font-mono font-bold text-3xl text-white">{dish.price}</span>
                    <a
                      href={`${whatsappBase}${encodeURIComponent(dish.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-7 py-3.5 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg"
                    >
                      <span>Order on WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Photo */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px]">
                    <img
                      src={dish.id === "beast" ? "/hero-bowl.png" : dish.img}
                      alt={dish.title}
                      className="w-full h-full object-cover rounded-full shadow-[0_20px_70px_rgba(0,0,0,0.95)] border-2 border-white/15"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. REAL-TIME CUSTOM BOWL BUILDER */}
      <CustomBowlBuilder />

      {/* 5. ATHLETE VERIFIED GOOGLE REVIEWS */}
      <section id="reviews" className="w-full py-28 px-6 lg:px-16 border-b border-white/10 bg-[#0a0a0a]">
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-400 mb-3">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span>4.9 / 5.0 Google Rating</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
              Community Reviews.
            </h2>
          </div>
          <p className="font-mono text-zinc-400 text-xs max-w-md font-light leading-relaxed">
            Real feedback from local gym coaches, runners, and daily professionals fueled by our Saphale kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-300 shadow-xl group hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="font-mono text-sm text-zinc-300 leading-relaxed font-light mb-8">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-white text-base">{rev.name}</h4>
                  <span className="font-mono text-xs text-zinc-500">{rev.role}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  Verified Local
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SAPHALE FLAGSHIP HUB & DIRECT ORDER CARD */}
      <section id="location" className="w-full py-28 px-6 lg:px-16 border-b border-white/10">
        <div className="w-full p-8 lg:p-16 rounded-3xl bg-[#111111] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Kitchen Live In Saphale
            </div>

            <h3 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
              Saphale Flagship Hub
            </h3>

            <p className="text-zinc-300 text-sm md:text-base max-w-xl font-mono leading-relaxed font-light">
              Located right by Station Road. Message us your bowl selection on WhatsApp 15 minutes ahead for curbside pickup with zero waiting time.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-2 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <span>Station Road, Saphale East, Maharashtra 401102</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                <span>11:00 AM – 10:30 PM (Daily)</span>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/?text=Hi%20Protein%20Bowl!%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noreferrer"
            className="px-10 py-5 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-2xl active:scale-95 shrink-0"
          >
            <span>Message on WhatsApp</span>
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 7. WIDE EDITORIAL FOOTER */}
      <footer className="w-full py-16 px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-500">
        <p>© 2026 PROTEIN BOWL SAPHALE. ENGINEERED FOR ATHLETIC RECOVERY.</p>
        <div className="flex items-center gap-6">
          <a href="#hero" className="hover:text-white transition-colors">TOP</a>
          <a href="#menu" className="hover:text-white transition-colors">MENU</a>
          <a href="#reviews" className="hover:text-white transition-colors">REVIEWS</a>
          <a href="#location" className="hover:text-white transition-colors">LOCATION</a>
        </div>
      </footer>

      {/* 8. FIXED MOBILE BOTTOM ORDER BAR (High-Converting Mobile UX) */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-50">
        <a
          href="https://wa.me/?text=Hi%20Protein%20Bowl!%20I%20want%20to%20order."
          target="_blank"
          rel="noreferrer"
          className="w-full py-3.5 px-6 rounded-full bg-white text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.9)] active:scale-95 border border-white/20"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Quick WhatsApp Order</span>
        </a>
      </div>

    </main>
  );
}
