'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import VimeoModal from '@/components/VimeoModal';
import { FILMS, STUDIO_INFO } from '@/lib/data';

export default function HomePage() {
  const [modal, setModal] = useState<{ vimeoId?: string; youtubeId?: string; videoUrl?: string; title: string } | null>(null);

  return (
    <div className="w-full flex flex-col">

      {/* ── HERO — full-screen cinematic frame ─────────────── */}
      <Hero posterImage={STUDIO_INFO.heroImage} />

      {/* ── MANIFESTO — Frenzy-inspired bold below-hero text ── */}
      <section className="w-full bg-[#F5F4F0] px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <div className="max-w-[1600px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#0A0A0A] leading-[1.05] tracking-tight max-w-4xl"
          >
            She Says Cut is an independent film studio investing in quiet,<br className="hidden lg:block" /> sensory, and introspective cinema.
          </motion.p>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black/10 pt-10">
            {STUDIO_INFO.manifesto.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="font-sans text-sm text-[#8A8A8A] leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href="/about"
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A] border-b border-[#0A0A0A] pb-0.5 hover:opacity-50 transition-opacity"
            >
              Director Bio & Philosophy →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SELECTED FILMS — Division-style stacked full-bleed ── */}
      <section className="w-full bg-[#EDECE8] px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <div className="max-w-[1600px] mx-auto">

          {/* Section label row */}
          <div className="flex items-center justify-between mb-12 sm:mb-16 pb-5 border-b border-black/10">
            <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A]">Selected Works</span>
            <Link
              href="/cinema"
              className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#0A0A0A] border-b border-[#0A0A0A] pb-0.5 hover:opacity-50 transition-opacity"
            >
              Full Archive →
            </Link>
          </div>

          {/* Stacked films */}
          <div className="flex flex-col gap-16 sm:gap-20">
            {FILMS.map((film, i) => (
              <motion.div
                key={film.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <ProjectCard
                  film={film}
                  priority={i === 0}
                  variant="wide"
                  onOpenModal={(vid, t, yid, url) => setModal({ vimeoId: vid, youtubeId: yid, videoUrl: url, title: t })}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES — clean capability grid ─────────────── */}
      <section className="w-full bg-[#0A0A0A] px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <div className="max-w-[1600px] mx-auto">

          <div className="flex items-end justify-between mb-14 pb-5 border-b border-white/10">
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-white leading-tight tracking-tight">
              What we create.
            </h2>
            <Link
              href="/commissions"
              className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/50 border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition-colors hidden sm:block"
            >
              View Commissions →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10">
            {[
              { n: '01', t: 'Narrative & Feature',    d: '35mm & 16mm analog storytelling' },
              { n: '02', t: 'Documentary',             d: 'Artisanal craft & material archives' },
              { n: '03', t: 'Sound & Hydrophone',      d: 'Acoustic spatial research' },
              { n: '04', t: 'Visual Essays',           d: 'Light, water & micro-cinema' },
            ].map(({ n, t, d }) => (
              <div key={n} className="bg-[#0A0A0A] p-8 flex flex-col gap-8">
                <span className="font-sans text-4xl font-black text-white/10">{n}</span>
                <div>
                  <h3 className="font-sans font-black text-base text-white leading-tight mb-1">{t}</h3>
                  <p className="font-sans text-xs text-white/40 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/commissions"
              className="font-sans text-[10px] tracking-[0.2em] uppercase bg-white text-[#0A0A0A] px-6 py-3.5 font-bold hover:bg-neutral-100 transition-colors"
            >
              Explore Commissions
            </Link>
            <Link
              href="/inquire"
              className="font-sans text-[10px] tracking-[0.2em] uppercase border border-white/30 text-white px-6 py-3.5 font-bold hover:border-white transition-colors"
            >
              Inquire Studio
            </Link>
          </div>
        </div>
      </section>

      {modal && (
        <VimeoModal
          isOpen={!!modal}
          onClose={() => setModal(null)}
          vimeoId={modal.vimeoId}
          youtubeId={modal.youtubeId}
          videoUrl={modal.videoUrl}
          title={modal.title}
        />
      )}
    </div>
  );
}
