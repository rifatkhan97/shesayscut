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
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isHeroPage = pathname === '/';
  
  // Header text color logic
  // On mobile menu open: text is always crisp white over dark menu overlay
  const isDarkHeaderState = !mobileOpen && (scrolled || !isHeroPage);

  return (
    <>
      {/* ─── Fixed header ─────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          mobileOpen
            ? 'bg-transparent py-6'
            : scrolled
              ? 'bg-[#F5F4F0]/92 backdrop-blur-md border-b border-black/8 py-4'
              : isHeroPage
                ? 'bg-transparent py-6 lg:py-8'
                : 'bg-[#F5F4F0]/92 backdrop-blur-md border-b border-black/8 py-5'
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
                isDarkHeaderState ? 'text-[#0A0A0A]' : 'text-white'
              } group-hover:opacity-70`}
            >
              SHE SAYS CUT
            </span>
            <span
              className={`font-sans text-[9px] tracking-[0.22em] uppercase mt-0.5 transition-colors duration-300 ${
                isDarkHeaderState ? 'text-[#8A8A8A]' : 'text-white/70'
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
                      ? (isDarkHeaderState ? 'text-[#0A0A0A]' : 'text-white')
                      : (isDarkHeaderState ? 'text-[#8A8A8A] hover:text-[#0A0A0A]' : 'text-white/70 hover:text-white')
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="navUnderline"
                      className={`absolute bottom-0 left-0 right-0 h-px ${isDarkHeaderState ? 'bg-[#0A0A0A]' : 'bg-white'}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile trigger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className={`md:hidden font-sans text-[11px] tracking-[0.18em] uppercase focus:outline-none transition-opacity py-1 ${
              mobileOpen || !isDarkHeaderState
                ? 'text-white hover:opacity-60'
                : 'text-[#0A0A0A] hover:opacity-60'
            }`}
          >
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {/* ─── Mobile full-screen off-canvas overlay ────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-between px-8 pt-32 pb-14"
          >
            {/* Links */}
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }, i) => {
                const active = pathname === href || (href !== '/' && pathname?.startsWith(href));
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.08, duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      className={`font-sans font-black text-4xl sm:text-5xl flex items-center justify-between py-2 leading-tight transition-colors ${
                        active
                          ? 'text-white'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      <span>{label}</span>
                      {active && (
                        <span className="font-sans text-xs tracking-[0.2em] uppercase text-white/50 border border-white/30 px-2 py-1">
                          Current
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer metadata band inside off-canvas menu */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="border-t border-white/15 pt-6 flex flex-col gap-2 font-sans text-xs"
            >
              <div className="flex items-center justify-between text-white font-bold tracking-tight">
                <span>She Says Cut Studio</span>
                <span className="text-[10px] tracking-[0.18em] uppercase text-white/50">Brussels, BE</span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                Directed by Maria Lückerath · Introspective narrative cinema & commissioned film
              </p>
              <p className="text-[10px] tracking-[0.16em] uppercase text-white/40 mt-1">
                contact@shesayscut.com
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
