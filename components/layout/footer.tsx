import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-black text-2xl tracking-tighter text-brand-primary">
                PRIME<span className="text-zinc-900">LOTTO</span>
              </span>
            </Link>
            <p className="text-zinc-500 max-w-sm mb-6 leading-relaxed">
              Nigeria's premier Quiz and Win mobile gaming service. Play Daily Lotto, Football Trivia, and more straight from your phone.
            </p>
            <div className="text-sm font-medium text-zinc-900 bg-zinc-100 py-2 px-4 rounded-lg inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Licensed & Regulated
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-zinc-900 mb-6">Games</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>
                <Link target="_blank" href="https://app.primelotto.games/auth/signup" className="hover:text-brand-primary transition-colors">Wheel of Fortune</Link>
              </li>
              <li>
                <Link target="_blank" href="https://app.primelotto.games/auth/signup" className="hover:text-brand-primary transition-colors">Daily Lotto</Link>
              </li>
              <li>
                <Link target="_blank" href="https://app.primelotto.games/auth/signup" className="hover:text-brand-primary transition-colors">Football Trivia</Link>
              </li>
              <li>
                <Link target="_blank" href="https://app.primelotto.games/auth/signup" className="hover:text-brand-primary transition-colors">Religious Read and Win</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-zinc-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>
                <Link href="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="mailto:primelotto.info@gmail.com" className="hover:text-brand-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">
            &copy; {currentYear} Prime Lotto. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-zinc-400 text-sm">
            <span>Play Responsibly. 18+</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
