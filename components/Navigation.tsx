'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/cinema',      label: 'Cinema'      },
  { href: '/commissions', label: 'Commissions' },
  { href: '/lab',         label: 'Lab'         },
  { href: '/about',       label: 'About'       },
  { href: '/inquire',     label: 'Inquire'     },
];

export default function Navigation() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const pathname = usePathname();

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isHeroPage = pathname === '/';

  return (
    <>
      {/* ─── Fixed header ─────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'bg-[#F5F4F0]/90 backdrop-blur-md border-b border-black/8 py-4'
            : isHeroPage
              ? 'bg-transparent py-6 lg:py-8'
              : 'bg-[#F5F4F0]/90 backdrop-blur-md border-b border-black/8 py-5'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 flex items-center justify-between">

          {/* Brand — anchored left */}
          <Link
            href="/"
            aria-label="She Says Cut — Home"
            className="group flex flex-col leading-none focus:outline-none"
          >
            <span
              className={`font-sans font-black text-base sm:text-lg tracking-tight transition-colors duration-300 ${
                scrolled || !isHeroPage ? 'text-[#0A0A0A]' : 'text-white'
              } group-hover:opacity-70`}
            >
              SHE SAYS CUT
            </span>
            <span
              className={`font-sans text-[9px] tracking-[0.22em] uppercase mt-0.5 transition-colors duration-300 ${
                scrolled || !isHeroPage ? 'text-[#8A8A8A]' : 'text-white/60'
              }`}
            >
              Brussels · Film Studio
            </span>
          </Link>

          {/* Desktop nav — anchored right */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || (href !== '/' && pathname?.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-sans text-[11px] tracking-[0.18em] uppercase transition-all duration-200 relative py-1 ${
                    active
                      ? (scrolled || !isHeroPage ? 'text-[#0A0A0A]' : 'text-white')
                      : (scrolled || !isHeroPage ? 'text-[#8A8A8A] hover:text-[#0A0A0A]' : 'text-white/60 hover:text-white')
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="navUnderline"
                      className={`absolute bottom-0 left-0 right-0 h-px ${scrolled || !isHeroPage ? 'bg-[#0A0A0A]' : 'bg-white'}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className={`md:hidden font-sans text-[11px] tracking-[0.18em] uppercase focus:outline-none transition-colors ${
              scrolled || !isHeroPage ? 'text-[#0A0A0A]' : 'text-white'
            }`}
          >
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {/* ─── Mobile full-screen overlay ───────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-30 bg-[#F5F4F0] flex flex-col justify-between px-8 pt-28 pb-16"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(({ href, label }, i) => {
                const active = pathname === href || (href !== '/' && pathname?.startsWith(href));
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 + 0.1, duration: 0.35 }}
                  >
                    <Link
                      href={href}
                      className={`font-sans font-black text-5xl sm:text-6xl block py-2 leading-tight transition-colors ${
                        active ? 'text-[#0A0A0A]' : 'text-[#0A0A0A]/30 hover:text-[#0A0A0A]/80'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="border-t border-black/10 pt-8 flex flex-col gap-1 font-sans text-xs text-[#8A8A8A]">
              <p className="font-black text-[#0A0A0A] text-sm tracking-tight">She Says Cut</p>
              <p>Directed by Maria Lückerath · Brussels, Belgium</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
