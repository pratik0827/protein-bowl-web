"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

export function LocationHub() {
  return (
    <section id="locations" className="py-24 max-w-5xl mx-auto px-4">
      <div className="relative rounded-[40px] bg-zinc-900 border border-white/5 overflow-hidden">
        
        {/* Abstract Map Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <svg className="w-full h-full text-zinc-600" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor" strokeWidth="0.5" fill="none">
             <path d="M0,50 Q25,40 50,60 T100,50 M0,20 Q30,60 70,30 T100,80 M30,0 Q40,50 20,100 M70,0 Q60,40 80,100" />
           </svg>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12">
          
          {/* Left: Info */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-space font-medium text-white tracking-wide">Open Now • 15-Min Fast Prep</span>
            </div>

            <h2 className="font-syne text-4xl font-bold text-white mb-4">Saphale Flagship</h2>
            <p className="text-zinc-400 font-space mb-8">
              Strategically located in the heart of Saphale. Pre-order via WhatsApp for zero wait time.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-zinc-300 font-space text-sm">
                <MapPin className="w-5 h-5 text-white" />
                <span>Station Road, Saphale East, Maharashtra 401102</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300 font-space text-sm">
                <Clock className="w-5 h-5 text-white" />
                <span>Mon-Sun: 11:00 AM - 10:30 PM</span>
              </div>
            </div>

            <a 
              href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20place%20a%20pickup%20order." 
              target="_blank" rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-space font-bold rounded-full overflow-hidden w-fit"
            >
              <span className="relative z-10">WhatsApp Pickup Order</span>
              <Navigation className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-zinc-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            </a>
          </div>

          {/* Right: Map Visual Pin */}
          <div className="relative h-64 md:h-auto rounded-3xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center overflow-hidden">
            {/* Radar Sweep Effect */}
            <div className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,rgba(255,255,255,0.1)_360deg)] animate-[spin_3s_linear_infinite]" />
            
            <div className="relative flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-2">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div className="text-white font-syne font-bold">PROTEIN BOWL</div>
              <div className="text-zinc-500 font-space text-xs">Saphale Base</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
