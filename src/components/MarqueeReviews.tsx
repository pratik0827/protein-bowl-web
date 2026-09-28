"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  { name: "Rahul S.", role: "CrossFit Coach", text: "Finally, actual clean protein in Saphale. The macros are spot on." },
  { name: "Priya M.", role: "Marathon Runner", text: "Zero seed oils makes a massive difference in recovery. Highly recommend." },
  { name: "Amit D.", role: "Fitness Enthusiast", text: "The Beast Bowl is a post-workout cheat code. Tastes incredible." },
  { name: "Sneha K.", role: "Yoga Instructor", text: "Cleanest ingredients I've seen in a quick-service format." },
];

export function MarqueeReviews() {
  return (
    <section className="py-24 overflow-hidden bg-[#080808] border-y border-white/5 relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#080808] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#080808] to-transparent z-10" />
      
      <div className="flex w-fit">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 px-4"
        >
          {/* Double array for seamless loop */}
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div key={i} className="w-[350px] shrink-0 bg-[#121212] border border-white/5 p-6 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 font-space text-sm mb-6 leading-relaxed relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center font-syne font-bold text-white text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-syne font-bold text-sm">{review.name}</div>
                  <div className="text-zinc-500 font-space text-xs">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
