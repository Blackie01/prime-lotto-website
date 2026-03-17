export function TrustBar() {
  return (
    <div className="border-y border-[var(--brand-primary)]/10 bg-[var(--background)] py-12 overflow-hidden relative z-10">
      <div className="container mx-auto px-4">
        <p className="text-center text-[10px] uppercase font-light text-[var(--brand-primary)] mb-12 tracking-[0.3em]">
          Trusted by Partners & Regulators
        </p>
        
        {/* Simple flex layout for static logos */}
        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-32 opacity-40 hover:opacity-100 transition-opacity duration-700">
          <div className="font-heading font-light text-2xl tracking-[0.2em] uppercase text-[var(--brand-primary)]">
            Paystack
          </div>
          <div className="font-heading font-light text-2xl tracking-[0.2em] uppercase text-[var(--brand-primary)] flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center text-[var(--brand-primary)] text-xs border border-[var(--brand-primary)]/50">F</span>
            Flutterwave
          </div>
          <div className="font-heading font-light text-xl tracking-[0.1em] text-[var(--brand-primary)] text-center border-l border-[var(--brand-primary)]/30 pl-6 leading-relaxed uppercase">
            National Lottery<br/>Regulatory Commission
          </div>
        </div>
      </div>
    </div>
  );
}
