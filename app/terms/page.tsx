import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Prime Lotto",
  description: "Terms and conditions for playing Prime Lotto games.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-16 pb-32 mt-15">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white border text-zinc-800 border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <h1 className="font-heading font-black text-4xl mb-4 text-zinc-900">Terms of Service</h1>
          <p className="text-zinc-500 mb-10">Last updated: March 2026</p>

          <div className="prose prose-zinc max-w-none space-y-8">
            <section>
              <h2 className="font-heading font-bold text-2xl mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Prime Lotto. By accessing our services via SMS, USSD (*20205# or *33077#), Web, or App, you agree to these terms. Prime Lotto is a suite of game-of-chance and skill-based quizzes designed for entertainment purposes.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4">2. Subscription and Billing</h2>
              <p className="leading-relaxed mb-4">
                Our services operate on an auto-renewing daily subscription model:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Daily Lotto:</strong> ₦100 charged daily to your mobile network account.</li>
                <li><strong>Football Trivia:</strong> ₦100 charged daily, with optional in-app purchases for hints and extra lives.</li>
                <li><strong>Wheel of Fortune:</strong> ₦100 per entry/spin.</li>
                <li><strong>Religious Read and Win:</strong> ₦100 charged daily to your mobile network account.</li>
              </ul>
              <p className="leading-relaxed">
                By subscribing, you authorize your mobile network operator to deduct these charges from your airtime balance daily until you opt out.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4">3. Eligibility</h2>
              <p className="leading-relaxed">
                You must be at least 18 years old and a resident of Nigeria to participate in Prime Lotto games. Verification may be required before any jackpot payouts are processed.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4">4. Winnings and Payouts</h2>
              <p className="leading-relaxed">
                Winnings will be credited to your Prime Lotto wallet. Withdrawals are subject to verification and regulatory compliance limits. The National Lottery Regulatory Commission oversees all major draw claims.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4">5. Cancellation</h2>
              <p className="leading-relaxed">
                You may cancel your daily subscription at any time by sending "STOP" via SMS to the respective shortcode or managing your subscription settings in your account portal. Unused daily credits are non-refundable.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
