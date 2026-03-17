"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function V2Hero() {
  return (
    <section className="relative min-h-screen bg-[var(--v2-background)] flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden leading-[0.8]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-hero text-[15vw] md:text-[18vw] text-[var(--v2-foreground)] uppercase whitespace-nowrap opacity-10"
        >
          PLAY TO WIN
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-hero text-[18vw] md:text-[22vw] text-[var(--v2-foreground)] uppercase whitespace-nowrap opacity-5"
        >
          EVERYDAY
        </motion.div>
      </div>

      {/* Foreground Interactive Content */}
      <div className="container relative z-10 px-4 mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
        {/* Text and CTAs */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col items-start pt-10 lg:pt-0"
        >
          <div className="inline-block px-4 py-1 mb-8 border border-[var(--v2-foreground)]/20 text-xs font-bold tracking-[0.2em] uppercase text-[var(--v2-foreground)]">
            Prime Lotto V2
          </div>

          <h1 className="font-hero text-6xl md:text-8xl lg:text-9xl text-[var(--v2-foreground)] uppercase leading-[0.9] mb-6 drop-shadow-sm">
            Play.
            <br />
            Win.
            <br />
            <span className="text-[var(--v2-accent)]">Repeat.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--v2-foreground)]/80 font-light max-w-md mb-10">
            Join thousands of winners daily. Instant payouts straight to your
            wallet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-10 py-4 bg-[var(--v2-accent)] text-[var(--v2-foreground)] font-bold tracking-widest uppercase hover:bg-opacity-90 transition-colors">
              Play Now ₦100
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-[var(--v2-foreground)] text-[var(--v2-foreground)] font-bold tracking-widest uppercase hover:bg-[var(--v2-foreground)]/5 transition-colors">
              Dial *20205#
            </button>
          </div>
        </motion.div>

        {/* Overlapping Character Image */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            type: "spring",
            stiffness: 50,
          }}
          className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative mt-12 lg:mt-0 flex justify-center lg:justify-end items-end"
        >
          {/* We'll use the generated transparent placeholder image here */}
          <div className="relative w-full max-w-[600px] h-full">
            <Image
              src="/images/hero-couple.png"
              alt="Excited Couple Winners"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
