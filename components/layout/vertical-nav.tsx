"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "games", label: "Games" },
  { id: "how-to-play", label: "How to Play" },
];

export function VerticalNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Find the current active section based on scroll position
      let current = "hero";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is somewhat near the top of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 items-end">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        
        return (
          <div key={section.id} className="relative group flex items-center justify-end">
            {/* Label that appears on hover */}
            <motion.span
              className="absolute right-8 tracking-widest text-xs uppercase font-light text-[var(--brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 backdrop-blur-sm px-2 py-1 dune-border whitespace-nowrap"
            >
              {section.label}
            </motion.span>
            
            {/* The Diamond */}
            <button
              onClick={() => scrollTo(section.id)}
              className={`w-3 h-3 border rotate-45 transition-all duration-300 ${
                isActive 
                  ? "border-[var(--brand-primary)] bg-[var(--brand-primary)] scale-125 shadow-[0_0_10px_rgba(46,49,146,0.5)]" 
                  : "border-[var(--brand-primary)]/50 bg-transparent hover:border-[var(--brand-primary)] hover:scale-110"
              }`}
              aria-label={`Scroll to ${section.label}`}
            />
          </div>
        );
      })}
    </div>
  );
}
