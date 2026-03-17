"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SplitSectionProps {
  title: string;
  description: string;
  features: string[];
  reversed?: boolean;
}

export function SplitSection({ title, description, features, reversed = false }: SplitSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yShift1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yShift2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const rotateOuter = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotateInner = useTransform(scrollYProgress, [0, 1], [45, -15]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-[var(--background)] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col gap-20 items-center ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 space-y-10"
          >
            <h2 className="dune-heading text-3xl md:text-5xl lg:text-6xl leading-tight">
              {title}
            </h2>
            <p className="text-xl text-[var(--brand-primary)]/70 font-light leading-relaxed max-w-lg">
              {description}
            </p>
            
            <ul className="space-y-6 pt-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-6 group">
                  <div className="w-2 h-2 mt-2 bg-transparent border border-[var(--brand-primary)] rotate-45 flex-shrink-0 transition-transform group-hover:bg-[var(--brand-primary)] scale-110" />
                  <span className="font-light text-[var(--brand-primary)]/80 tracking-wide text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Aesthetic Parallax Side (Circular Dune style) */}
          <div className="flex-1 w-full flex justify-center relative min-h-[400px] md:min-h-[500px]">
            <div className="relative w-full max-w-[400px] md:max-w-[500px] aspect-square">
              
              {/* Outer Rotating Ring */}
              <motion.div
                style={{ rotate: rotateOuter }}
                className="absolute inset-0 rounded-full border border-[var(--brand-primary)]/10"
              />
              
              {/* Inner Rotating Ring */}
              <motion.div
                style={{ rotate: rotateInner }}
                className="absolute inset-6 rounded-full border border-[var(--brand-primary)]/10 border-dashed"
              />

              {/* Main Circular Image Frame */}
              <motion.div 
                style={{ y: yShift1 }}
                className="absolute inset-10 rounded-full overflow-hidden dune-border bg-white"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-1000 opacity-90" 
                  style={{ backgroundImage: "url('/images/feature-bg.png')" }} 
                />
              </motion.div>

              {/* Floating Decorative Label */}
              <motion.div 
                style={{ y: yShift2 }}
                className="absolute -bottom-4 right-10 md:-right-4 w-28 h-28 bg-[var(--background)] border border-[var(--brand-primary)] flex items-center justify-center rotate-45 z-20 transition-all hover:bg-[var(--brand-primary)]/5 group"
              >
                 <div className="-rotate-45 text-center flex flex-col items-center">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-light text-[var(--brand-primary)]/60 mb-1">Fast Play</span>
                    <span className="text-[var(--brand-primary)] font-light tracking-widest text-lg">*20205#</span>
                 </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
