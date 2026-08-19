'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, ArrowLeft, KeyRound } from 'lucide-react';
import VimeoModal from '@/components/VimeoModal';
import FilmMeta from '@/components/FilmMeta';
import ProjectCard from '@/components/ProjectCard';
import { Film } from '@/lib/types';

export default function FilmDossierClient({
  film,
  relatedFilms,
}: {
  film: Film;
  relatedFilms: Film[];
}) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <article className="w-full bg-[#F5F4F0] min-h-screen">

      {/* ── HERO — full-bleed with overlaid type ────── */}
      <section className="relative w-full aspect-[16/9] sm:aspect-[2.39/1] bg-[#0A0A0A] overflow-hidden">
        <Image
          src={film.heroImage}
          alt={film.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

        {/* Back link — top-left */}
        <div className="absolute top-24 sm:top-28 left-6 sm:left-10">
          <Link
            href="/cinema"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            Cinema Archive
          </Link>
        </div>

        {/* Aspect ratio badge */}
        <div className="absolute bottom-6 left-6 sm:left-10 font-sans text-[9px] tracking-[0.18em] uppercase text-white/50 bg-black/40 backdrop-blur-sm px-2.5 py-1.5">
          {film.aspectRatio || '2.39:1'}
        </div>

        {/* Title — bottom overlaid, Division style */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex items-end justify-between">
          <div>
            <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/50 mb-2">
              {film.category} · {film.year} · {film.duration}
            </p>
            <h1 className="font-sans font-black text-4xl sm:text-7xl lg:text-8xl text-white leading-none tracking-tighter">
              {film.title}
            </h1>
            {film.subtitle && (
              <p className="font-sans text-sm text-white/60 italic mt-2">{film.subtitle}</p>
            )}
          </div>

          {/* Play button — floating on hero */}
          {(film.vimeoId || film.youtubeId || film.videoUrl) && (
            <button
              onClick={() => setVideoOpen(true)}
              className="shrink-0 flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-white/90 px-5 py-3 font-sans text-[10px] tracking-[0.18em] uppercase font-bold transition-colors ml-6"
              aria-label={`Watch preview for ${film.title}`}
            >
              <Play size={12} className="fill-current" />
              Watch Preview
            </button>
          )}
        </div>
      </section>

      {/* ── DOSSIER BODY ────────────────────────────── */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10">

        {/* Logline + Access panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 sm:py-20 border-b border-black/10">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <p className="font-sans font-black text-xl sm:text-2xl text-[#0A0A0A] leading-snug max-w-2xl">
              {film.logline}
            </p>
            <p className="font-sans text-sm text-[#8A8A8A] leading-relaxed max-w-xl">{film.synopsis}</p>
          </div>

          {/* Access card */}
          <div className="lg:col-span-4 bg-[#EDECE8] border border-black/8 p-6 sm:p-8 flex flex-col gap-5 h-fit">
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A]">Screening & Access</span>
            {(film.vimeoId || film.youtubeId || film.videoUrl) && (
              <button
                onClick={() => setVideoOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-[#0A0A0A] text-white hover:bg-[#333] py-3.5 font-sans text-[10px] tracking-[0.18em] uppercase font-bold transition-colors"
              >
                <Play size={11} className="fill-current" />
                Watch Film Preview
              </button>
            )}
            <Link
              href="/inquire#screener"
              className="w-full flex items-center justify-center gap-2 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white py-3.5 font-sans text-[10px] tracking-[0.18em] uppercase font-bold transition-all"
            >
              <KeyRound size={11} />
              Request Full Screener
            </Link>
            {film.screeningNotes && (
              <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed">{film.screeningNotes}</p>
            )}
          </div>
        </div>

        {/* Director Statement */}
        <div className="py-16 sm:py-20 border-b border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3">
              <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A]">Director Statement</span>
            </div>
            <div className="lg:col-span-9">
              <blockquote className="font-sans font-black text-xl sm:text-2xl lg:text-3xl text-[#0A0A0A] leading-snug tracking-tight">
                &ldquo;{film.directorStatement}&rdquo;
              </blockquote>
              <p className="font-sans text-xs text-[#8A8A8A] mt-6 tracking-[0.15em] uppercase">
                Maria Lückerath, Brussels Studio
              </p>
            </div>
          </div>
        </div>

        {/* Film stills */}
        {film.stills.length > 0 && (
          <div className="py-16 sm:py-20 border-b border-black/10">
            <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] block mb-8">
              Frame Archive & Stills
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {film.stills.map(still => (
                <div key={still.id} className="flex flex-col gap-2">
                  <div className="relative w-full aspect-video bg-[#EDECE8] overflow-hidden">
                    <Image
                      src={still.url}
                      alt={still.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  {still.caption && (
                    <span className="font-sans text-[10px] text-[#8A8A8A]">{still.caption}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Credits */}
        <div className="py-16 sm:py-20 border-b border-black/10">
          <FilmMeta
            year={film.year}
            category={film.category}
            format={film.format}
            duration={film.duration}
            director={film.director}
            credits={film.credits}
          />
        </div>

        {/* Related films */}
        {relatedFilms.length > 0 && (
          <div className="py-16 sm:py-20">
            <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] block mb-10">
              Related Films in Archive
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {relatedFilms.map(rf => (
                <ProjectCard key={rf.slug} film={rf} variant="grid" />
              ))}
            </div>
          </div>
        )}
      </div>

      {videoOpen && (
        <VimeoModal
          isOpen={videoOpen}
          onClose={() => setVideoOpen(false)}
          vimeoId={film.vimeoId}
          youtubeId={film.youtubeId}
          videoUrl={film.videoUrl}
          title={film.title}
        />
      )}
    </article>
  );
}
