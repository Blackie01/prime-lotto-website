"use client";

import { useState, useEffect, useMemo } from "react";
import { Check, Copy, ArrowUp } from "lucide-react";

interface SectionMeta {
  id: string;
  num: string;
  title: string;
}

const SECTIONS: SectionMeta[] = [
  { id: "section-1", num: "01", title: "Your Privacy Matters" },
  { id: "section-2", num: "02", title: "Data We Collect" },
  { id: "section-3", num: "03", title: "How We Use Your Data" },
  { id: "section-4", num: "04", title: "Data Security" },
];

export function PrivacyClient() {
  const [activeSection, setActiveSection] = useState<string>("section-1");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Track scroll for active section & reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
      setShowScrollTop(window.scrollY > 400);

      // Determine active section
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = (sectionId: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    navigator.clipboard.writeText(url);
    setCopiedId(sectionId);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140; // accommodate fixed header
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const filteredSections = useMemo(() => {
    return SECTIONS;
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] relative selection:bg-white/20 selection:text-white">
      {/* Reading Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-white/[0.04]">
        <div
          className="h-full bg-white/40 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Main container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-40 pb-24 max-w-7xl">
        {/* Header Hero */}
        <header className="mb-14 mt-8 pb-10 border-b border-white/[0.08] relative">
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-zinc-400 text-sm md:text-base max-w-3xl leading-relaxed">
            Last updated: October 2026
          </p>
        </header>

        {/* Content Layout: Sticky Sidebar + Main Privacy Article */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Table of Contents */}
          <aside className="lg:col-span-4 lg:sticky lg:top-36 space-y-4 order-2 lg:order-1">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-xl p-5 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.06]">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Table of Contents
                </span>
                <span className="text-[11px] text-zinc-500">
                  {SECTIONS.length} Sections
                </span>
              </div>

              {/* Navigation list */}
              <nav className="space-y-1 max-h-[55vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-800">
                {filteredSections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left group flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs transition-all ${
                        isActive
                          ? "bg-white/[0.08] text-white font-medium shadow-sm"
                          : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                      }`}
                    >
                      <span
                        className={`text-[11px] font-semibold pt-0.5 transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-zinc-600 group-hover:text-zinc-400"
                        }`}
                      >
                        {sec.num}
                      </span>
                      <div className="flex-1 leading-snug">
                        <span className="line-clamp-1">{sec.title}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* Footer action tools */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                <button
                  onClick={() => handleCopyLink("top")}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  {copiedId === "top" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span className="text-white font-medium">Link copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Share page</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Top</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Right Column: Clean Editorial Body */}
          <main className="lg:col-span-8 space-y-12 order-1 lg:order-2">
            {/* =========================================================================
                SECTION 1: Your Privacy Matters
               ========================================================================= */}
            <section id="section-1" className="scroll-mt-36 space-y-3">
              <h2 className="font-semibold text-lg sm:text-xl text-white">
                1. Your Privacy Matters
              </h2>

              <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                <p>
                  Prime Lotto respects your privacy and is committed to
                  protecting your personal data. This privacy policy will
                  inform you as to how we look after your personal data when
                  you visit our website, use our app, or interact with our
                  USSD/SMS services.
                </p>
              </div>
            </section>

            {/* =========================================================================
                SECTION 2: Data We Collect
               ========================================================================= */}
            <section id="section-2" className="scroll-mt-36 space-y-3">
              <h2 className="font-semibold text-lg sm:text-xl text-white">
                2. Data We Collect
              </h2>

              <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                <p>
                  To provide our daily gaming services securely, we may
                  collect, use, store and transfer different kinds of personal
                  data:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm leading-relaxed">
                  <li>
                    <strong className="text-white font-medium">
                      Identity Data:
                    </strong>{" "}
                    First name, last name, username or similar identifier,
                    marital status, title, date of birth and gender.
                  </li>
                  <li>
                    <strong className="text-white font-medium">
                      Contact Data:
                    </strong>{" "}
                    Mobile phone number (acting as your primary account
                    identifier).
                  </li>
                  <li>
                    <strong className="text-white font-medium">
                      Financial Data:
                    </strong>{" "}
                    Mobile money account details, bank account and payment card
                    details for processing withdrawals.
                  </li>
                  <li>
                    <strong className="text-white font-medium">
                      Transaction Data:
                    </strong>{" "}
                    Details about payments to and from you and other details of
                    games you have purchased.
                  </li>
                  <li>
                    <strong className="text-white font-medium">
                      Technical Data:
                    </strong>{" "}
                    Internet protocol (IP) address, your login data, browser
                    type and version.
                  </li>
                </ul>
              </div>
            </section>

            {/* =========================================================================
                SECTION 3: How We Use Your Data
               ========================================================================= */}
            <section id="section-3" className="scroll-mt-36 space-y-3">
              <h2 className="font-semibold text-lg sm:text-xl text-white">
                3. How We Use Your Data
              </h2>

              <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                <p>
                  We will only use your personal data for the purpose of
                  fulfilling the service: registering you as a new player,
                  processing your wagers, notifying you of wins, managing
                  payouts, and complying with local regulatory requirements
                  governed by the National Lottery Regulatory Commission.
                </p>
              </div>
            </section>

            {/* =========================================================================
                SECTION 4: Data Security
               ========================================================================= */}
            <section id="section-4" className="scroll-mt-36 space-y-3">
              <h2 className="font-semibold text-lg sm:text-xl text-white">
                4. Data Security
              </h2>

              <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                <p>
                  We have put in place appropriate security measures to prevent
                  your personal data from being accidentally lost, used or
                  accessed in an unauthorized way, altered or disclosed. We
                  limit access to your personal data to those employees,
                  agents, contractors and other third parties who have a
                  business need to know.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#0c0c0e]/90 text-white border border-white/[0.15] shadow-2xl backdrop-blur-md hover:bg-white/[0.1] hover:scale-110 active:scale-95 transition-all duration-200 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-zinc-300 group-hover:text-white" />
        </button>
      )}
    </div>
  );
}
