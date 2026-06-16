"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#050505]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--brand-primary)]/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-primary)] animate-pulse" />
            <span className="text-sm font-medium text-white/80">Reliable & Secure Gaming Platform</span>
          </div> */}

          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[1.1] mb-8">
            Control Your Luck <br className="hidden md:block" />
            From Your Phone
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Just dial our shortcode to instantly play Daily Lotto, Wheel of Fortune, Football Trivia or Religious Read and Win anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              target="_blank"
              href="https://app.primelotto.games/" 
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-[var(--brand-primary)] rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(43,201,106,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Play Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              {/* <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-zinc-800 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-600" />
                  </div>
                ))}
              </div> */}
              <div className="text-left">
                <div className="font-bold text-white">45k+ Users</div>
                <div className="text-xs">Join the winning team</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
