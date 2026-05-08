import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Prime Lotto",
  description: "Terms and conditions for playing Prime Lotto games.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="glass-card text-white/80 rounded-3xl p-8 md:p-12 shadow-sm">
          <h1 className="font-heading font-black text-4xl mb-4 text-white">Terms of Service</h1>
          <p className="text-[var(--brand-primary)] font-medium mb-10 tracking-wider text-sm uppercase">Last updated: March 2026</p>

          <div className="space-y-12">
            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-white flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] flex items-center justify-center text-sm">1</span>
                Introduction
              </h2>
              <p className="leading-relaxed text-white/60">
                Welcome to Prime Lotto. By accessing our services via SMS, USSD (*20205# or *33077#), Web, or App, you agree to these terms. Prime Lotto is a suite of game-of-chance and skill-based quizzes designed for entertainment purposes.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-white flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] flex items-center justify-center text-sm">2</span>
                Subscription and Billing
              </h2>
              <p className="leading-relaxed mb-4 text-white/60">
                Our services operate on an auto-renewing daily subscription model:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-4 text-white/60">
                <li><strong className="text-white">Daily Lotto:</strong> ₦100 charged daily to your mobile network account.</li>
                <li><strong className="text-white">Football Trivia:</strong> ₦100 charged daily, with optional in-app purchases for hints and extra lives.</li>
                <li><strong className="text-white">Wheel of Fortune:</strong> ₦100 per entry/spin.</li>
                <li><strong className="text-white">Religious Read and Win:</strong> ₦100 charged daily to your mobile network account.</li>
              </ul>
              <p className="leading-relaxed text-white/60">
                By subscribing, you authorize your mobile network operator to deduct these charges from your airtime balance daily until you opt out.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-white flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] flex items-center justify-center text-sm">3</span>
                Eligibility
              </h2>
              <p className="leading-relaxed text-white/60">
                You must be at least 18 years old and a resident of Nigeria to participate in Prime Lotto games. Verification may be required before any jackpot payouts are processed.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-white flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] flex items-center justify-center text-sm">4</span>
                Winnings and Payouts
              </h2>
              <p className="leading-relaxed text-white/60">
                Winnings will be credited to your Prime Lotto wallet. Withdrawals are subject to verification and regulatory compliance limits. The National Lottery Regulatory Commission oversees all major draw claims.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-white flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] flex items-center justify-center text-sm">5</span>
                Cancellation
              </h2>
              <p className="leading-relaxed text-white/60">
                You may cancel your daily subscription at any time by sending "STOP" via SMS to the respective shortcode or managing your subscription settings in your account portal. Unused daily credits are non-refundable.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
