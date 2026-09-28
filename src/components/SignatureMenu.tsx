"use client";

import { motion } from "framer-motion";

const MENU_ITEMS = [
  {
    title: "The Beast Power Bowl",
    category: "High-Protein",
    protein: "52g",
    kcal: "540",
    price: "₹299",
    desc: "Quinoa base, roasted chicken breast, black beans, charred corn, fresh spinach, and zero-cal sriracha dressing.",
  },
  {
    title: "Keto Garden Harvest",
    category: "Keto",
    protein: "38g",
    kcal: "460",
    price: "₹329",
    desc: "Mixed greens, avocado, cherry tomatoes, cucumbers, walnuts, and a heavy pour of cold-pressed olive oil.",
  },
  {
    title: "Falafel & Beetroot Hummus",
    category: "Plant-Powered",
    protein: "28g",
    kcal: "420",
    price: "₹269",
    desc: "Baked falafel, vibrant beetroot hummus, roasted sweet potatoes, and a cooling mint yogurt drizzle.",
  },
  {
    title: "Lean Salmon & Edamame",
    category: "High-Protein",
    protein: "46g",
    kcal: "510",
    price: "₹379",
    desc: "Wild-caught salmon, steamed edamame, shredded carrots, pickled ginger, and a light sesame soy vinaigrette.",
  },
];

export function SignatureMenu() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="mb-16">
        <h2 className="font-syne text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Signature <span className="text-zinc-500">Menu.</span>
        </h2>
        <p className="text-zinc-400 font-space max-w-2xl text-lg">
          No seed oils, no refined sugars. Just clean, measured ingredients crafted for peak performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MENU_ITEMS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-[#121212] border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-white/20 transition-colors relative overflow-hidden"
          >
            {/* Subtle Hover Glow */}
            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              <div className="mb-6 flex items-start justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-space text-zinc-300 tracking-wide uppercase">
                  {item.category}
                </span>
                <span className="font-syne font-bold text-white text-xl">
                  {item.price}
                </span>
              </div>
              
              <h3 className="font-syne text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 font-space leading-relaxed mb-6 h-20">
                {item.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-[#080808] border border-white/5 p-3 rounded-2xl flex flex-col items-center justify-center">
                  <span className="text-zinc-500 font-space text-[10px] uppercase tracking-widest mb-1">Protein</span>
                  <span className="font-mono text-xl font-medium text-white">{item.protein}</span>
                </div>
                <div className="bg-[#080808] border border-white/5 p-3 rounded-2xl flex flex-col items-center justify-center">
                  <span className="text-zinc-500 font-space text-[10px] uppercase tracking-widest mb-1">Calories</span>
                  <span className="font-mono text-xl font-medium text-white">{item.kcal}</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-full bg-white text-[#080808] font-space font-bold text-sm flex items-center justify-center hover:bg-zinc-200 transition-colors active:scale-[0.98]"
            >
              Order on WhatsApp
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
