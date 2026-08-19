'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  posterImage: string;
}

export default function Hero({ posterImage }: HeroProps) {
  return (
    <section className="relative w-full h-screen h-[100dvh] min-h-[580px] overflow-hidden bg-[#0A0A0A]">
      {/* Background image — fills viewport */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1,    opacity: 1  }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={posterImage}
          alt="She Says Cut — Opening Frame"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Subtle darken overlay for text contrast */}
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>

      {/* Brand anchored to bottom-left — Division / Frenzy style with mobile address bar clearance */}
      <div className="absolute inset-0 flex flex-col justify-between px-6 pt-6 pb-24 sm:p-10 lg:p-14">
        {/* Top row — empty (nav handles it) */}
        <div />

        {/* Bottom row — title left, meta right */}
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/60 mb-2">
              Brussels · Independent Cinema
            </p>
            <h1 className="font-sans font-black text-[clamp(2.4rem,6vw,5.5rem)] text-white leading-[0.92] tracking-tighter">
              She<br />Says<br />Cut.
            </h1>
          </motion.div>

          {/* Right side — tagline + CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="hidden sm:flex flex-col items-end gap-4 text-right"
          >
            <p className="font-sans text-sm text-white/75 max-w-[240px] leading-relaxed">
              Introspective narrative cinema directed by Maria Lückerath
            </p>
            <Link
              href="/cinema"
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-white border-b border-white/50 pb-0.5 hover:border-white transition-colors"
            >
              Explore Cinema →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-white/40"
        />
      </motion.div>
    </section>
  );
}
