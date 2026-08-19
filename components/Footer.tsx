import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#EDECE8] border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10">

        {/* Upper band — large brand statement */}
        <div className="py-16 sm:py-20 border-b border-black/10">
          <p className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A] leading-tight max-w-3xl">
            Independent film studio.<br />
            Brussels, Belgium.
          </p>
        </div>

        {/* Middle grid */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 border-b border-black/10">
          <div>
            <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A] mb-4">Work</p>
            <ul className="flex flex-col gap-2.5 font-sans text-sm text-[#3A3A3A]">
              <li><Link href="/cinema"      className="hover:text-[#0A0A0A] transition-colors">Cinema</Link></li>
              <li><Link href="/commissions" className="hover:text-[#0A0A0A] transition-colors">Commissions</Link></li>
              <li><Link href="/lab"         className="hover:text-[#0A0A0A] transition-colors">Lab</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A] mb-4">Studio</p>
            <ul className="flex flex-col gap-2.5 font-sans text-sm text-[#3A3A3A]">
              <li><Link href="/about"          className="hover:text-[#0A0A0A] transition-colors">About</Link></li>
              <li><Link href="/inquire"         className="hover:text-[#0A0A0A] transition-colors">Inquire</Link></li>
              <li><Link href="/inquire#screener" className="hover:text-[#0A0A0A] transition-colors">Screener Access</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A] mb-4">Location</p>
            <address className="not-italic font-sans text-sm text-[#3A3A3A] flex flex-col gap-1">
              <span className="font-semibold text-[#0A0A0A]">Brussels, Belgium</span>
              <span>European Commissions Welcome</span>
            </address>
          </div>
          <div>
            <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A] mb-4">Contact</p>
            <p className="font-sans text-sm text-[#3A3A3A]">
              <a href="mailto:contact@shesayscut.com" className="hover:text-[#0A0A0A] transition-colors underline underline-offset-4">
                contact@shesayscut.com
              </a>
            </p>
            <p className="font-sans text-xs text-[#8A8A8A] mt-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
              Available for 2026 / 2027
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs text-[#8A8A8A]">
            © {year} She Says Cut · Directed by Maria Lückerath
          </p>
          <p className="font-sans text-[10px] tracking-[0.16em] uppercase text-[#8A8A8A]">
            Brussels · Independent European Cinema
          </p>
        </div>
      </div>
    </footer>
  );
}
