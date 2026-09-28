"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080808] pt-32 pb-12 border-t border-white/5">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
        <h1 className="font-syne text-[15vw] font-black text-white leading-none whitespace-nowrap">
          PROTEIN BOWL
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-24">
        
        <div className="max-w-xs">
           <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
             <div className="relative flex items-center justify-center w-4 h-4">
               <span className="absolute inline-flex w-full h-full rounded-full bg-zinc-300 opacity-20 group-hover:animate-ping" />
               <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-zinc-400 to-white" />
             </div>
             <span className="font-syne font-bold text-xl tracking-wider text-white">
               PROTEIN BOWL
             </span>
           </Link>
           <p className="text-zinc-500 font-space text-sm">
             Saphale's premier stealth-nutrition hub. Engineered for peak performance, zero compromise.
           </p>
        </div>

        <div className="flex gap-16 font-space text-sm">
          <div className="flex flex-col gap-4">
            <span className="text-white font-medium uppercase tracking-wider mb-2">Explore</span>
            <Link href="#menu" className="text-zinc-500 hover:text-white transition-colors">Menu</Link>
            <Link href="#sourcing" className="text-zinc-500 hover:text-white transition-colors">Sourcing</Link>
            <Link href="#locations" className="text-zinc-500 hover:text-white transition-colors">Locations</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-medium uppercase tracking-wider mb-2">Socials</span>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 font-space text-xs text-zinc-600">
        <p>© 2026 Protein Bowl Saphale. All rights reserved.</p>
        <p className="max-w-md text-center md:text-right">
          Disclaimer: Macro estimates are approximate. Values may vary based on exact portion sizes and seasonal ingredient variations.
        </p>
      </div>

    </footer>
  );
}
