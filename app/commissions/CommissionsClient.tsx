'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VimeoModal from '@/components/VimeoModal';
import { COMMISSIONS } from '@/lib/data';

export default function CommissionsClient() {
  const [modal, setModal] = useState<{ vimeoId?: string; youtubeId?: string; videoUrl?: string; title: string } | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#F5F4F0]">

      {/* Page header */}
      <header className="max-w-[1600px] mx-auto px-6 sm:px-10 pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] block mb-3">
              Commercial & Branded Storytelling
            </span>
            <h1 className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl text-[#0A0A0A] leading-none tracking-tight">
              Commissions
            </h1>
          </div>
          <p className="font-sans text-sm text-[#8A8A8A] max-w-sm leading-relaxed pb-2">
            Translating auteur filmmaking into quiet, elevated commercial works for cultural institutions and visionary partners.
          </p>
        </div>
      </header>

      {/* Commissions grid */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {COMMISSIONS.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col gap-5"
            >
              {/* Frame */}
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#EDECE8]">
                <Image
                  src={c.heroImage}
                  alt={`${c.title} — ${c.service}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Overlaid title on media */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/50 mb-1">{c.client} · {c.year}</p>
                  <h2 className="font-sans font-black text-2xl sm:text-3xl text-white leading-tight">{c.title}</h2>
                </div>

                {(c.vimeoId || c.youtubeId || c.videoUrl) && (
                  <button
                    onClick={() => setModal({ vimeoId: c.vimeoId, youtubeId: c.youtubeId, videoUrl: c.videoUrl, title: c.title })}
                    className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 hover:bg-white text-[#0A0A0A] px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase font-sans font-bold backdrop-blur-sm transition-colors"
                    aria-label={`Play preview for ${c.title}`}
                  >
                    <Play size={10} className="fill-current" />
                    Preview
                  </button>
                )}
              </div>

              {/* Text info */}
              <div>
                <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-[#8A8A8A] mb-1.5">{c.service}</p>
                <p className="font-sans text-xs text-[#3A3A3A] leading-relaxed max-w-lg">{c.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
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
