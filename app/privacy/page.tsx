import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Prime Lotto",
  description: "How Prime Lotto handles your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="glass-card text-white/80 rounded-3xl p-8 md:p-12 shadow-sm">
          <h1 className="font-heading font-black text-4xl mb-4 text-white">Privacy Policy</h1>
          <p className="text-[var(--brand-primary)] font-medium mb-10 tracking-wider text-sm uppercase">Last updated: March 2026</p>

          <div className="space-y-12">
            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-white flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] flex items-center justify-center text-sm">1</span>
                Your Privacy Matters
              </h2>
              <p className="leading-relaxed text-white/60">
                Prime Lotto respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website, use our app, or interact with our USSD/SMS services.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-white flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] flex items-center justify-center text-sm">2</span>
                Data We Collect
              </h2>
              <p className="leading-relaxed mb-4 text-white/60">
                To provide our daily gaming services securely, we may collect, use, store and transfer different kinds of personal data:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-white/60">
                <li><strong className="text-white">Identity Data:</strong> First name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
                <li><strong className="text-white">Contact Data:</strong> Mobile phone number (acting as your primary account identifier).</li>
                <li><strong className="text-white">Financial Data:</strong> Mobile money account details, bank account and payment card details for processing withdrawals.</li>
                <li><strong className="text-white">Transaction Data:</strong> Details about payments to and from you and other details of games you have purchased.</li>
                <li><strong className="text-white">Technical Data:</strong> Internet protocol (IP) address, your login data, browser type and version.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-white flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] flex items-center justify-center text-sm">3</span>
                How We Use Your Data
              </h2>
              <p className="leading-relaxed text-white/60">
                We will only use your personal data for the purpose of fulfilling the service: registering you as a new player, processing your wagers, notifying you of wins, managing payouts, and complying with local regulatory requirements governed by the National Lottery Regulatory Commission.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-white flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] flex items-center justify-center text-sm">4</span>
                Data Security
              </h2>
              <p className="leading-relaxed text-white/60">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
