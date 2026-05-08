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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/70 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 relative z-50">
          <span className="font-heading font-black text-2xl tracking-tighter text-white">
            PRIME<span className="text-[var(--brand-primary)]">LOTTO</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white/80">
          <Link 
            href="/" 
            className={`transition-all hover:text-white ${pathname === '/' ? 'text-white' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="#games" 
            className="transition-all hover:text-white"
          >
            Games
          </Link>
          <Link 
            href="#how-to-play" 
            className="transition-all hover:text-white"
          >
            How to Play
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link target="_blank" href="https://app.primelotto.games/auth/signin" className="px-6 py-2.5 text-sm font-medium text-white transition-all hover:text-white/80">
            Log In
          </Link>
          <Link target="_blank" href="https://app.primelotto.games/auth/signup" className="px-6 py-2.5 rounded-full bg-[var(--brand-primary)] text-black text-sm font-bold transition-all hover:bg-[var(--brand-primary)]/90 hover:shadow-[0_0_20px_rgba(43,201,106,0.4)]">
            Play Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden relative z-50 p-2 text-white"
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
            className="fixed inset-0 z-40 bg-[#050505] h-max md:hidden pt-32 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-8 text-xl font-medium text-white/80 mb-12">
              <Link 
                href="/" 
                className={`transition-all hover:text-white ${pathname === '/' ? 'text-white' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#games" 
                className="transition-all hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Games
              </Link>
              <Link 
                href="#how-to-play" 
                className="transition-all hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How to Play
              </Link>
            </nav>

            <div className="flex flex-col gap-4 mt-auto mb-12">
              <Link target="_blank" href="https://app.primelotto.games/auth/signin" className="w-full py-4 text-center border border-white/20 rounded-full text-base font-medium text-white transition-all hover:bg-white/5">
                Log In
              </Link>
              <Link target="_blank" href="https://app.primelotto.games/auth/signup" className="w-full py-4 text-center rounded-full bg-[var(--brand-primary)] text-black text-base font-bold transition-all hover:bg-[var(--brand-primary)]/90 hover:shadow-[0_0_20px_rgba(43,201,106,0.4)]">
                Play Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
