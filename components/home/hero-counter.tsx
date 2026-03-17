"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroCounter() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Client-side only rendering to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Simple animated counter
    const target = 500000;
    const duration = 2500; // 2.5s
    const start = Date.now();

    const animateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);
      
      // Easing function (easeOutExpo)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    setTimeout(() => {
      requestAnimationFrame(animateCount);
    }, 500); // Small delay to let initial fade-in happen
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--background)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />

      <motion.div 
        style={{ y, opacity }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="container relative z-10 px-4 flex flex-col items-center text-center mt-20"
      >
        {/* <span className="inline-block px-6 py-2 mb-10 dune-border text-xs tracking-[0.2em] uppercase text-[var(--brand-primary)] bg-white/50 backdrop-blur-sm">
          Nigeria's #1 Quiz & Win
        </span> */}
        
        <h1 className="dune-heading font-heading text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          {/* Current <br />
          <span className="font-normal">Jackpot</span> */}
          Winning Pool
        </h1>
        
        <div className="font-heading font-light text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] tabular-nums tracking-wider md:tracking-widest text-[var(--brand-primary)] mb-8 md:mb-12" style={{ textShadow: '0 4px 20px rgba(46,49,146,0.1)' }}>
          ₦{mounted ? count.toLocaleString() : "0"}
        </div>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--brand-primary)]/80 mb-12 leading-relaxed font-sans font-light">
          Play Daily Lotto, Football Trivia, Wheel of Fortune. 
          Win massive cash prizes straight from your mobile phone.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <motion.button 
            onClick={() => window.open("https://app.primelotto.games/auth/signup", "_blank")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-12 py-5 bg-[var(--brand-primary)] text-white font-light tracking-[0.2em] uppercase text-sm transition-colors hover:bg-[var(--brand-primary)]/90"
          >
            Play Now for ₦100
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(46,49,146,0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-12 py-5 bg-transparent text-[var(--brand-primary)] dune-border font-light tracking-[0.2em] uppercase text-sm transition-colors bg-white/30 backdrop-blur-sm"
          >
            Dial *20205#
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

