"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md border-b border-[var(--brand-primary)]/10">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 relative z-50">
          {/* We will use a bold text logo for now until client provides an image */}
          <span className="dune-heading font-medium text-xl tracking-[0.3em] text-[var(--brand-primary)]">
            PRIME<span className="font-light">LOTTO</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-light text-[var(--brand-primary)]">
          <Link 
            href="/" 
            className={`transition-all hover:opacity-100 ${pathname === '/' ? 'opacity-100 font-medium' : 'opacity-60'}`}
          >
            Home
          </Link>
          <Link 
            href="#games" 
            className="transition-all opacity-60 hover:opacity-100"
          >
            Games
          </Link>
          <Link 
            href="#how-to-play" 
            className="transition-all opacity-60 hover:opacity-100"
          >
            How to Play
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link target="_blank" href="https://app.primelotto.games/auth/signin" className="px-6 py-3 text-xs tracking-[0.2em] uppercase font-light text-[var(--brand-primary)] transition-all hover:bg-[var(--brand-primary)]/5">
            Log In
          </Link>
          <Link target="_blank" href="https://app.primelotto.games/auth/signup" className="px-8 py-3 bg-[var(--brand-primary)] text-white text-xs tracking-[0.2em] uppercase font-light transition-all hover:bg-[var(--brand-primary)]/90">
            Play Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden relative z-50 p-2 text-[var(--brand-primary)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[var(--background)] h-max md:hidden pt-32 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-8 text-lg font-light tracking-[0.2em] uppercase text-[var(--brand-primary)] mb-12">
              <Link 
                href="/" 
                className={`transition-all hover:opacity-100 ${pathname === '/' ? 'opacity-100 font-medium' : 'opacity-60'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#games" 
                className="transition-all opacity-60 hover:opacity-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Games
              </Link>
              <Link 
                href="#how-to-play" 
                className="transition-all opacity-60 hover:opacity-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How to Play
              </Link>
            </nav>

            <div className="flex flex-col gap-4 mt-auto mb-12">
              <Link target="_blank" href="https://app.primelotto.games/auth/signin" className="w-full py-5 border border-[var(--brand-primary)]/20 text-sm tracking-[0.2em] uppercase font-light text-[var(--brand-primary)] transition-all active:bg-zinc-50">
                Log In
              </Link>
              <Link target="_blank" href="https://app.primelotto.games/auth/signup" className="w-full py-5 bg-[var(--brand-primary)] text-white text-sm tracking-[0.2em] uppercase font-light transition-all active:bg-[var(--brand-primary)]/90">
                Play Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
