"use client";

import { useState, useEffect, useMemo } from "react";
import { Check, Copy, ArrowUp, ExternalLink } from "lucide-react";

interface SectionMeta {
  id: string;
  num: string;
  title: string;
}

const SECTIONS: SectionMeta[] = [
  { id: "section-1", num: "01", title: "Acceptance of Terms" },
  { id: "section-2", num: "02", title: "Eligibility, Registration & Access" },
  { id: "section-3", num: "03", title: "Subscriptions, Billing & Payment" },
  { id: "section-4", num: "04", title: "Gameplay & Winning Mechanics" },
  {
    id: "section-5",
    num: "05",
    title: "Cash Wallet, Verification & Withdrawals",
  },
  { id: "section-6", num: "06", title: "Gamification, Streaks & Tiers" },
  { id: "section-7", num: "07", title: "Amendments to These Terms" },
  { id: "section-8", num: "08", title: "Subscription & Billing - Summary" },
  { id: "section-9", num: "09", title: "Winnings & NLRC Oversight - Summary" },
  { id: "section-10", num: "10", title: "Cancellation - Summary" },
];

export function TermsClient() {
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
    <div className="min-h-screen bg-[#050505] text-[#ededed]  relative selection:bg-white/20 selection:text-white">
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
            Terms & Conditions
          </h1>

          <p className="text-zinc-400 text-sm md:text-base max-w-3xl leading-relaxed ">
            These terms govern your participation while playing PrimeLotto games across all
            supported channels: USSD (
            <span className="text-white font-medium">*20205#</span>), SMS (
            <span className="text-white font-medium">20205</span>), SAT Push,
            and the Web Platform. Please review them carefully.
          </p>
        </header>

        {/* Content Layout: Sticky Sidebar + Main Terms Article */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Table of Contents (Retained Sticky Sidebar) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-36 space-y-4 order-2 lg:order-1">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-xl p-5 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.06]">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Table of Contents
                </span>
                <span className="text-[11px]  text-zinc-500">
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
                        className={` text-[11px] font-semibold pt-0.5 transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-zinc-600 group-hover:text-zinc-400"
                        }`}
                      >
                        {sec.num}
                      </span>
                      <div className="flex-1 leading-snug">
                        <span className="line-clamp-1 ">
                          {sec.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* Footer action tools */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 ">
                <button
                  onClick={() => handleCopyLink("top")}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  {copiedId === "top" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span className="text-white font-medium">
                        Link copied
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Share page</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Top</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Right Column: Clean Editorial Body (SynthMind Inspired: White Headings, Grey Body Text, No Box Gymnastics) */}
          <main className="lg:col-span-8 space-y-12 order-1 lg:order-2 ">
            {/* =========================================================================
                SECTION 1: Acceptance of Terms
               ========================================================================= */}
            <section id="section-1" className="scroll-mt-36 space-y-3">
              <h2 className="font-semibold text-lg sm:text-xl text-white">
                1. Acceptance of Terms
              </h2>

              <div className="space-y-3 text-zinc-400 text-sm leading-relaxed ">
                <p>
                  By accessing or playing PrimeLotto through USSD (*20205#), SMS
                  (20205), SAT Push, or the Web Platform, you agree to be bound
                  by these Terms and Conditions.
                </p>
                <p>
                  If you do not agree with any part of these terms, you must
                  immediately discontinue using the service. You may unsubscribe
                  at any time by sending STOP &#123;KEYWORD&#125; to 20205 or by
                  dialling *305#.
                </p>
              </div>
            </section>

            {/* =========================================================================
                SECTION 2: Eligibility, Registration and Account Access
               ========================================================================= */}
            <section id="section-2" className="scroll-mt-36 space-y-6">
              <h2 className="font-semibold text-lg sm:text-xl text-white">
                2. Eligibility, Registration and Account Access
              </h2>

              <div className="space-y-6 text-zinc-400 text-sm leading-relaxed ">
                {/* 2.1 */}
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-white text-[15px]">
                    2.1. Minimum Age
                  </h3>
                  <p>
                    You must be at least 18 years old to participate in
                    PrimeLotto games.
                  </p>
                </div>

                {/* 2.2 */}
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-white text-[15px]">
                    2.2. Account Identification and Responsibility
                  </h3>
                  <p>
                    Your PrimeLotto account is linked to your registered mobile
                    phone number, which serves as your primary account
                    identifier. You are responsible for all activities carried
                    out under that mobile number.
                  </p>
                </div>

                {/* 2.3 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-white text-[15px]">
                    2.3. Registration Requirements
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        Web Platform
                      </h4>
                      <p className="mb-2">
                        To register directly on the PrimeLotto website, you must
                        provide:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                        <li>A username.</li>
                        <li>A valid email address.</li>
                        <li>A phone number.</li>
                        <li>A password.</li>
                        <li>Confirmation of your password.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        Telecom Platforms: USSD, SMS and SAT Push
                      </h4>
                      <p>
                        When you first subscribe through a telecom channel,
                        PrimeLotto automatically creates an account linked to
                        the phone number used to access the service. You will
                        then be prompted to provide a username to complete your
                        profile.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2.4 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-white text-[15px]">
                    2.4. Login Requirements
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        Web Platform
                      </h4>
                      <p>
                        Returning users must log in using their registered phone
                        number and password.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        Telecom Platforms: USSD, SMS and SAT Push
                      </h4>
                      <p>
                        Users accessing PrimeLotto through telecom channels are
                        automatically authenticated through their registered
                        mobile number when they dial the applicable shortcode or
                        send the relevant keyword. No manual login is required.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2.5 */}
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-white text-[15px]">
                    2.5. Unified Cash Wallet
                  </h3>
                  <p>
                    PrimeLotto operates a unified cash wallet system. Your
                    cash-wallet balances and account progress are synchronised
                    across the supported platforms.
                  </p>
                </div>

                {/* 2.6 */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-white text-[15px]">
                    2.6. Moving Between Platforms
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        From Telecom Platforms to the Web Platform
                      </h4>
                      <p className="mb-2">
                        If you originally subscribed through USSD, SMS or SAT
                        Push, you must complete a partial registration before
                        accessing your account on the Web Platform. A secure URL
                        will be provided beneath each SMS gaming prompt,
                        directing you to the website to:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                        <li>Provide an email address.</li>
                        <li>Create a password.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        From the Web Platform to Telecom Platforms
                      </h4>
                      <p>
                        If you originally registered on the Web Platform, you
                        may access PrimeLotto through USSD, SMS or SAT Push
                        without further registration or login, provided you use
                        your registered phone number.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2.7 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    2.7. Session Expiry
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <strong className="text-white font-semibold">
                        USSD and SMS:
                      </strong>{" "}
                      Your gaming session expires after 10 minutes of
                      inactivity. To continue playing, you must re-enter the
                      applicable SMS keyword or USSD code.
                    </p>
                    <p>
                      <strong className="text-white font-semibold">
                        Web Platform:
                      </strong>{" "}
                      Your login session expires after one hour of inactivity.
                      You will be logged out automatically and must log in again
                      to continue using your account.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =========================================================================
                SECTION 3: Subscriptions, Billing and Payment Charges
               ========================================================================= */}
            <section id="section-3" className="scroll-mt-36 space-y-6">
              <h2 className="font-semibold text-lg sm:text-xl text-white">
                3. Subscriptions, Billing and Payment Charges
              </h2>

              <div className="space-y-6 text-zinc-400 text-sm leading-relaxed ">
                {/* 3.1 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    3.1. Applicable Games
                  </h3>
                  <p>
                    The subscription and billing arrangements in this section
                    apply to the following PrimeLotto games:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>Religious Read &amp; Win.</li>
                    <li>Football Trivia Quiz.</li>
                    <li>Daily Lotto.</li>
                    <li>Wheel of Fortune.</li>
                  </ul>
                </div>

                {/* 3.2 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    3.2. Conventional Daily Subscriptions
                  </h3>
                  <p>
                    The standard daily subscription costs ₦100 per day and is
                    available in two options:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>
                      <strong className="text-white font-medium">
                        24-hour one-off subscription:
                      </strong>{" "}
                      Access for a single 24-hour period.
                    </li>
                    <li>
                      <strong className="text-white font-medium">
                        Daily auto-renewal subscription:
                      </strong>{" "}
                      Access that renews automatically each day.
                    </li>
                  </ul>
                  <p className="text-zinc-500">
                    These subscription packages ordinarily permit one play per
                    day, subject to the resubscription and Accumulated Gameplay
                    provisions in Section 4.
                  </p>
                </div>

                {/* 3.3 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    3.3. On-Demand Subscriptions
                  </h3>
                  <p>On-Demand gameplay costs ₦100 per session.</p>
                  <p>
                    Users may play multiple sessions, including back-to-back
                    sessions, within a 24-hour period. Each session is billed
                    separately.
                  </p>
                  <p>
                    Fallback pricing does not apply to On-Demand subscriptions.
                  </p>
                </div>

                {/* 3.4 Dynamic Fallback Billing */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    3.4. Dynamic Fallback Billing
                  </h3>
                  <p>
                    For eligible daily subscriptions through USSD and SMS, if
                    your airtime balance is insufficient for the standard ₦100
                    charge, PrimeLotto will automatically attempt fallback
                    charges at the following amounts:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>₦50</li>
                    <li>₦30</li>
                    <li>₦20</li>
                    <li>₦10</li>
                  </ul>
                  <p>
                    A successful charge at any of these fallback amounts counts
                    as a Paid Play.
                  </p>
                  <p className="text-zinc-500">
                    Fallback billing applies only to USSD and SMS daily
                    subscriptions. It does not apply to the Web Platform or to
                    On-Demand subscriptions.
                  </p>
                </div>

                {/* 3.5 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    3.5. Web Platform Billing
                  </h3>
                  <p>The Web Platform supports:</p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>
                      <strong className="text-white font-medium">
                        Daily Auto:
                      </strong>{" "}
                      A daily auto-renewal subscription.
                    </li>
                    <li>
                      <strong className="text-white font-medium">
                        On-Demand:
                      </strong>{" "}
                      Per-session billing through the cash wallet.
                    </li>
                  </ul>
                  <p>
                    Users playing through On-Demand cash-wallet billing may play
                    back-to-back as many times as they wish within a 24-hour
                    period, with each session billed separately.
                  </p>
                </div>

                {/* 3.6 Deposit Service Charges Table */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-white text-[15px]">
                    3.6. Deposit Service Charges
                  </h3>
                  <p>
                    The following service charges apply to deposits initiated
                    through the Web Platform:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-white/[0.12] text-white font-semibold">
                          <th className="py-2.5 pr-4">Payment Provider</th>
                          <th className="py-2.5 px-4">Payment Method</th>
                          <th className="py-2.5 pl-4">Service Charge</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.06] text-zinc-400">
                        <tr>
                          <td className="py-2.5 pr-4 text-white">Paystack</td>
                          <td className="py-2.5 px-4">Transfer</td>
                          <td className="py-2.5 pl-4">
                            1.5% of the deposit amount
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 pr-4 text-white">Paystack</td>
                          <td className="py-2.5 px-4">Card payment</td>
                          <td className="py-2.5 pl-4">
                            1.5% of the deposit amount, plus ₦100
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 pr-4 text-white">OnionPay</td>
                          <td className="py-2.5 px-4">Transfer</td>
                          <td className="py-2.5 pl-4">
                            1.5% of the deposit amount, with the service charge
                            capped at ₦3,050
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-zinc-500">
                    OnionPay does not offer a card payment option.
                  </p>
                </div>

                {/* 3.7 */}
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-white text-[15px]">
                    3.7. MTN Subscriptions Through Marketer Links
                  </h3>
                  <p>
                    MTN users who access the Web Platform through a
                    marketer&apos;s M-filter link will be automatically charged
                    ₦100 from their airtime balance and registered for a daily
                    auto-renewal subscription.
                  </p>
                </div>

                {/* 3.8 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    3.8. Cancelling Your Subscription
                  </h3>
                  <p>You may cancel your daily subscription at any time by:</p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>Sending STOP to 20205; or</li>
                    <li>Dialling *305#.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* =========================================================================
                SECTION 4: Gameplay and Winning Mechanics
               ========================================================================= */}
            <section id="section-4" className="scroll-mt-36 space-y-6">
              <h2 className="font-semibold text-lg sm:text-xl text-white">
                4. Gameplay and Winning Mechanics
              </h2>

              <div className="space-y-6 text-zinc-400 text-sm leading-relaxed ">
                {/* 4.1 Fastest Finger */}
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-white text-[15px]">
                    4.1. The &ldquo;Fastest Finger&rdquo; Rule
                  </h3>
                  <p>
                    Knowledge and speed-based games, including Football Trivia
                    Quiz and Religious Read &amp; Win, award prizes using a
                    Fastest Finger system.
                  </p>
                  <p>
                    Providing the correct answers does not guarantee a payout if
                    the prize pool allocated to that session has already been
                    claimed by a user who submitted the correct answers faster.
                  </p>
                </div>

                {/* 4.2 */}
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-white text-[15px]">
                    4.2. Daily Draws and Winnings Processing
                  </h3>
                  <p>
                    For the question-and-answer games—Religious Read &amp; Win
                    and Football Trivia Quiz—official daily draws and the
                    processing of accumulated cash winnings take place at
                    midnight, 00:00 West Africa Time (WAT).
                  </p>
                  <p>
                    Winners will be notified, and their winnings will appear in
                    their cash wallets after this time.
                  </p>
                </div>

                {/* 4.3 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    4.3. Instant Prizes for Spin Games
                  </h3>
                  <p>
                    Cash and airtime winnings from the following spin games are
                    paid instantly:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>Wheel of Fortune</li>
                    <li>Daily Lotto</li>
                  </ul>
                  <p className="text-zinc-500">
                    Prize-claim options and cash-wallet rules are set out in
                    Section 5.
                  </p>
                </div>

                {/* 4.4 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    4.4. Daily Play Limits and Resubscription
                  </h3>
                  <p>
                    Conventional 24-hour subscription packages ordinarily permit
                    one play per day.
                  </p>
                  <p>
                    If you unsubscribe and then resubscribe, you will be allowed
                    to play beyond the standard single daily attempt within that
                    24-hour period. This applies to both:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>Games involving midnight draws.</li>
                    <li>Games offering instant prize payments.</li>
                  </ul>
                  <p>
                    On-Demand subscriptions allow multiple entries or plays per
                    day, with each session billed separately.
                  </p>
                </div>

                {/* 4.5 Accumulated Gameplay */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    4.5. Accumulated Gameplay on the Web Platform
                  </h3>
                  <p>
                    On the Web Platform, Accumulated Gameplay is linked to Daily
                    Auto renewal obtained through manual subscription.
                  </p>
                  <p>
                    Each time you are successfully debited for this Daily Auto
                    subscription, your Accumulated Gameplay balance increases by
                    one play.
                  </p>
                  <p>
                    If you do not use these plays, your balance continues to
                    increase for as long as you remain subscribed and daily
                    subscription debits continue.
                  </p>
                  <p>
                    Your Accumulated Gameplay balance may also increase through
                    Free Plays earned from the following promotional offers:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>Five-day continuous play.</li>
                    <li>Five paid plays in a single day.</li>
                    <li>The Referral Loop.</li>
                  </ul>
                  <p className="text-zinc-500">
                    The requirements for these offers are set out in Section 6.
                  </p>
                </div>

                {/* 4.6 */}
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-white text-[15px]">
                    4.6. Daily Gameplay on USSD and SMS
                  </h3>
                  <p>Accumulated Gameplay is not available on USSD or SMS.</p>
                  <p>
                    Users accessing PrimeLotto through these channels must use
                    their daily auto-renewal play entitlement on the day they
                    are charged.
                  </p>
                  <p className="text-zinc-500">
                    The subscription is time-bound and permits one play within a
                    24-hour period, unless the user unsubscribes and
                    resubscribes as described in Section 4.4.
                  </p>
                </div>

                {/* 4.7 Debit Priority */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    4.7. Debit Priority for Multiple Daily Auto Subscriptions
                  </h3>
                  <p>If you have both:</p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>
                      A Daily Auto subscription obtained through a
                      marketer&apos;s web link; and
                    </li>
                    <li>A manually activated Daily Auto subscription,</li>
                  </ul>
                  <p>
                    the Daily Auto account linked to the marketer&apos;s web
                    link (VAS Gameplay) will be debited first.
                  </p>
                  <p>
                    The manual subscription account (Accumulated Gameplay) will
                    be debited once the VAS Gameplay account has been depleted.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-[15px]">4.8. Customised Marketers' Links</h3>
                  <p>
                    Users who access the web platform via a marketer's link
                    which advertises a particular game are not restricted to
                    playing that game alone with their (singular) daily auto
                    gameplay , rather they are free to play any game of their
                    choosing.{" "}
                  </p>
                </div>
              </div>
            </section>

            {/* =========================================================================
                SECTION 5: Cash Wallet, Verification and Withdrawals
               ========================================================================= */}
            <section id="section-5" className="scroll-mt-36 space-y-6">
              <h2 className="font-semibold text-lg sm:text-xl text-white">
                5. Cash Wallet, Verification and Withdrawals
              </h2>

              <div className="space-y-6 text-zinc-400 text-sm leading-relaxed ">
                {/* 5.1 Cash-Wallet Balances Table */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-white text-[15px]">
                    5.1. Cash-Wallet Balances
                  </h3>
                  <p>
                    Cash winnings are credited to your cash wallet. The wallet
                    distinguishes between winnings and funds deposited for
                    gameplay as follows:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-white/[0.12] text-white font-semibold">
                          <th className="py-2.5 pr-4">Balance Type</th>
                          <th className="py-2.5 px-4">Funds Recorded</th>
                          <th className="py-2.5 pl-4">Withdrawal Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.06] text-zinc-400">
                        <tr>
                          <td className="py-2.5 pr-4 text-white font-medium">
                            Available Balance
                          </td>
                          <td className="py-2.5 px-4">Cash winnings</td>
                          <td className="py-2.5 pl-4">
                            May be withdrawn at any time, subject to the
                            applicable KYC requirements below
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 pr-4 text-white font-medium">
                            Locked Balance
                          </td>
                          <td className="py-2.5 px-4">
                            Funds deposited to play games
                          </td>
                          <td className="py-2.5 pl-4">Cannot be withdrawn</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 5.2 Prize-Claim Options */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-white text-[15px]">
                    5.2. Prize-Claim Options
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        Airtime Prizes
                      </h4>
                      <p className="mb-1">
                        If you win an airtime prize, you may choose on the
                        winning screen to:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                        <li>Claim the airtime immediately; or</li>
                        <li>
                          Save the cash equivalent in your cash wallet for
                          withdrawal at a time of your choosing.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        Cash Prizes
                      </h4>
                      <p className="mb-1">
                        If you win a cash prize, you may choose on the winning
                        screen to:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                        <li>Claim the cash immediately; or</li>
                        <li>
                          Save it in your cash wallet for withdrawal at a time
                          of your choosing.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 5.3 & 5.4 KYC Verification */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    5.3. Verification Before Your First Withdrawal
                  </h3>
                  <p>
                    You must complete a Know Your Customer (KYC) verification
                    process before your first monetary withdrawal can be
                    processed on the Web Platform.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    5.4. Required Verification Details
                  </h3>
                  <p>You must provide your true and accurate:</p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>First name.</li>
                    <li>Last name.</li>
                    <li>Gender.</li>
                    <li>Date of birth.</li>
                  </ul>
                  <p className="text-zinc-300">
                    Failure to provide accurate information may result in the
                    forfeiture of winnings and suspension of your account.
                  </p>
                </div>
              </div>
            </section>

            {/* =========================================================================
                SECTION 6: Gamification: Streaks, Free Plays, Referrals and Status Tiers
               ========================================================================= */}
            <section id="section-6" className="scroll-mt-36 space-y-6">
              <h2 className="font-semibold text-lg sm:text-xl text-white">
                6. Gamification: Streaks, Free Plays, Referrals and Status Tiers
              </h2>

              <div className="space-y-6 text-zinc-400 text-sm leading-relaxed ">
                {/* 6.1 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    6.1. Web-Only Promotional Offers
                  </h3>
                  <p>
                    The following promotional offers can only be initiated and
                    claimed on the Web Platform:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>Five-day continuous play.</li>
                    <li>Five paid plays in a single day.</li>
                    <li>The Referral Loop.</li>
                  </ul>
                </div>

                {/* 6.2 */}
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-white text-[15px]">
                    6.2. Five-Day Continuous Play Reward
                  </h3>
                  <p>
                    Users who maintain a five-day continuous play streak earn
                    one Free Play.
                  </p>
                  <p>
                    For daily streak tracking, a calendar day runs from 00:00 to
                    23:59 WAT. Missing a calendar day resets the daily streak
                    counter to zero.
                  </p>
                </div>

                {/* 6.3 */}
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-white text-[15px]">
                    6.3. Five Paid Plays in a Single Day
                  </h3>
                  <p>
                    Users who complete five Paid Plays in a single day earn one
                    Free Play.
                  </p>
                </div>

                {/* 6.4 Referral Loop */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    6.4. Referral Loop
                  </h3>
                  <p>
                    To earn one Free Play through the Referral Loop, you must
                    successfully refer five users.
                  </p>
                  <p>A referral is valid only when the invited user:</p>
                  <ol className="list-decimal pl-5 space-y-1 text-zinc-400">
                    <li>Registers with PrimeLotto; and</li>
                    <li>Completes at least one successfully billed play.</li>
                  </ol>
                  <p className="text-zinc-500">
                    Invited users who do not subscribe will not count towards
                    your referral reward or tier progression.
                  </p>
                </div>

                {/* 6.5 Crediting Promotional Free Plays */}
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-white text-[15px]">
                    6.5. Crediting Promotional Free Plays
                  </h3>
                  <p>
                    Free Plays earned through any of the three promotional
                    offers are credited to your Accumulated Gameplay balance on
                    the Web Platform and can be used to play games.
                  </p>
                </div>

                {/* 6.6 Status Tiers */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    6.6. Status Tiers
                  </h3>
                  <p>
                    Users are ranked according to lifetime points earned from
                    Paid Plays and referrals.
                  </p>
                  <p>The status tiers are:</p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>Seniorman</li>
                    <li>Chairman</li>
                    <li>Odogwu</li>
                    <li>Jagaban</li>
                  </ul>
                  <p className="text-zinc-500">
                    These tiers are symbolic. PrimeLotto may rebalance the
                    associated points at its discretion.
                  </p>
                </div>
              </div>
            </section>

            {/* =========================================================================
                SECTION 7: Amendments to These Terms
               ========================================================================= */}
            <section id="section-7" className="scroll-mt-36 space-y-3">
              <h2 className="font-semibold text-lg sm:text-xl text-white">
                7. Amendments to These Terms
              </h2>

              <div className="space-y-3 text-zinc-400 text-sm leading-relaxed ">
                <p>
                  PrimeLotto reserves the right to amend, update or expand these
                  Terms and Conditions at any time.
                </p>
                <p>
                  Your continued use of the service constitutes acceptance of
                  the updated Terms and Conditions.
                </p>
              </div>
            </section>

            {/* =========================================================================
                SUPPLEMENTARY / BOTTOM SECTIONS (Old Numbers 2, 4 & 5 Retained)
               ========================================================================= */}
            <div className="pt-8 border-t border-white/[0.08] space-y-10 ">
              {/* SECTION 8: Old Number 2 */}
              <section id="section-8" className="scroll-mt-36 space-y-3">
                <h2 className="font-semibold text-lg sm:text-xl text-white">
                  8. Subscription and Billing - Summary
                </h2>

                <div className="space-y-3 text-zinc-400 text-sm leading-relaxed ">
                  <p>
                    Our service operates on both an on-demand and a daily
                    auto-renewing subscription model.
                  </p>
                  <p>
                    The standard on-demand charge is ₦100 per play (per
                    session).
                  </p>
                  <p>
                    The standard daily auto subscription charge is ₦100 per day,
                    qualifying the user for a single play in a 24-hour period.
                  </p>
                  <p>
                    If a subscribed daily auto user wishes to play again after
                    utilizing their daily entitlement, they can either top-up
                    their cash wallet, which will enable them to play as many
                    times as they like, or they can unsubscribe and resubscribe
                    to enable a singular play.
                  </p>
                  <p>
                    By subscribing, the user authorizes PrimeLotto to deduct
                    these charges as prescribed, until such a time that they opt
                    out.
                  </p>
                </div>
              </section>

              {/* SECTION 9: Old Number 4 */}
              <section id="section-9" className="scroll-mt-36 space-y-3">
                <h2 className="font-semibold text-lg sm:text-xl text-white">
                  9. Winnings, Payouts and Regulatory Oversight - Summary
                </h2>

                <div className="space-y-3 text-zinc-400 text-sm leading-relaxed ">
                  <p>
                    Winnings will be credited to your Prime Lotto wallet.
                    Withdrawals are subject to verification and regulatory
                    compliance limits. The National Lottery Regulatory
                    Commission oversees all major draw claims.
                  </p>
                </div>
              </section>

              {/* SECTION 10: Old Number 5 */}
              <section id="section-10" className="scroll-mt-36 space-y-3">
                <h2 className="font-semibold text-lg sm:text-xl text-white">
                  10. Cancellation - Summary
                </h2>

                <div className="space-y-3 text-zinc-400 text-sm leading-relaxed ">
                  <p>
                    You may cancel your daily subscription at any time by
                    sending &quot;STOP&quot; via SMS to the respective shortcode
                    or managing your subscription settings in your account
                    portal. Unused daily credits are non-refundable.
                  </p>
                </div>
              </section>
            </div>

            {/* Bottom Contact & Help */}
            <div className="pt-8 border-t border-white/[0.08] text-sm text-zinc-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ">
              <div>
                <span className="text-white font-medium block mb-1">
                  Have questions about our Terms and Conditions?
                </span>
                <p className="text-xs text-zinc-500">
                  Reach our customer support team for assistance with
                  subscriptions, billing, and withdrawals.
                </p>
              </div>
              <a
                href="mailto:support@primelotto.ng"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.08] transition-colors font-medium text-xs "
              >
                Contact Support
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
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
