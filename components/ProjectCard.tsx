'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Film } from '@/lib/types';

interface ProjectCardProps {
  film: Film;
  priority?: boolean;
  onOpenModal?: (vimeoId: string | undefined, title: string, youtubeId?: string, videoUrl?: string) => void;
  /** 'wide' = full editorial stack (homepage / cinema page), 'grid' = 2-col card */
  variant?: 'wide' | 'grid';
}

export default function ProjectCard({
  film,
  priority = false,
  onOpenModal,
  variant = 'wide',
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  if (variant === 'grid') {
    return (
      <article className="group flex flex-col gap-4">
        <Link
          href={`/cinema/${film.slug}`}
          className="relative block overflow-hidden aspect-[3/2] bg-[#EDECE8]"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            <Image
              src={film.thumbnail}
              alt={film.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={priority}
              className="object-cover"
            />
          </motion.div>

          {/* Preview trigger */}
          {onOpenModal && (film.vimeoId || film.youtubeId || film.videoUrl) && (
            <button
              onClick={(e) => { e.preventDefault(); onOpenModal(film.vimeoId, film.title, film.youtubeId, film.videoUrl); }}
              className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 hover:bg-white text-[#0A0A0A] px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase font-sans font-semibold backdrop-blur-sm transition-colors"
              aria-label={`Watch preview of ${film.title}`}
            >
              <Play size={10} className="fill-current" />
              Preview
            </button>
          )}
        </Link>

        {/* Metadata */}
        <div>
          <div className="flex items-center justify-between font-sans text-[10px] tracking-[0.18em] uppercase text-[#8A8A8A] mb-1.5">
            <span>{film.category}</span>
            <span>{film.year}</span>
          </div>
          <Link href={`/cinema/${film.slug}`}>
            <h3 className="font-sans font-black text-xl sm:text-2xl text-[#0A0A0A] leading-tight hover:opacity-60 transition-opacity">
              {film.title}
            </h3>
          </Link>
          <p className="font-sans text-xs text-[#8A8A8A] mt-1.5 leading-relaxed line-clamp-2">
            {film.logline}
          </p>
        </div>
      </article>
    );
  }

  // Wide editorial stack — Division style
  return (
    <article
      className="group relative w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Full-width media frame */}
      <Link href={`/cinema/${film.slug}`} className="block relative w-full aspect-[16/9] sm:aspect-[2.39/1] overflow-hidden bg-[#0A0A0A]">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.025 : 1 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        >
          <Image
            src={film.thumbnail}
            alt={film.title}
            fill
            sizes="100vw"
            priority={priority}
            className="object-cover"
          />
        </motion.div>

        {/* Bottom gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Title overlay — bottom-left, Division style */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 flex items-end justify-between">
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50 mb-1">
              {film.category} · {film.year} · {film.duration}
            </p>
            <h3 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              {film.title}
            </h3>
          </div>

          {/* Preview button */}
          {onOpenModal && (film.vimeoId || film.youtubeId || film.videoUrl) && (
            <button
              onClick={(e) => { e.preventDefault(); onOpenModal(film.vimeoId, film.title, film.youtubeId, film.videoUrl); }}
              className="flex items-center gap-2 bg-white text-[#0A0A0A] hover:bg-white/90 px-4 py-2.5 text-[10px] tracking-[0.18em] uppercase font-sans font-bold transition-colors shrink-0 ml-4"
              aria-label={`Watch preview of ${film.title}`}
            >
              <Play size={11} className="fill-current" />
              Watch Preview
            </button>
          )}
        </div>
      </Link>

      {/* Below-media editorial row — Frenzy style */}
      <div className="flex items-start justify-between pt-4 sm:pt-5 gap-6">
        <p className="font-sans text-sm text-[#3A3A3A] leading-relaxed max-w-2xl">
          {film.logline}
        </p>
        <Link
          href={`/cinema/${film.slug}`}
          className="font-sans text-[10px] tracking-[0.18em] uppercase text-[#8A8A8A] hover:text-[#0A0A0A] transition-colors shrink-0 border-b border-transparent hover:border-[#0A0A0A] pb-0.5"
        >
          Dossier →
        </Link>
      </div>
    </article>
  );
}
