'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import VimeoModal from '@/components/VimeoModal';
import { FILMS } from '@/lib/data';

export default function CinemaClient() {
  const [modal, setModal] = useState<{ vimeoId?: string; youtubeId?: string; videoUrl?: string; title: string } | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#F5F4F0]">

      {/* Page header */}
      <header className="max-w-[1600px] mx-auto px-6 sm:px-10 pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] block mb-3">
              Film Archive & Catalogue
            </span>
            <h1 className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl text-[#0A0A0A] leading-none tracking-tight">
              Cinema Archive
            </h1>
          </div>
          <p className="font-sans text-sm text-[#8A8A8A] max-w-sm leading-relaxed pb-2">
            The primary film archive of She Says Cut, directed by Maria Lückerath. Introspective narrative cinema, artisanal documentary, and sensory soundscapes.
          </p>
        </div>
      </header>

      {/* Film stack — cinematic editorial */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 py-16 sm:py-20 flex flex-col gap-20 sm:gap-24">
        {FILMS.map((film, i) => (
          <motion.div
            key={film.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
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
