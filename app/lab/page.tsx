import type { Metadata } from 'next';
import Image from 'next/image';
import { LAB_PROJECTS } from '@/lib/data';

const BASE_URL = 'https://www.shesayscut.com';

export const metadata: Metadata = {
  title: 'Experimental Film Lab & Sound Research | She Says Cut',
  description:
    'Experimental research space of She Says Cut: hydrophone acoustics, 35mm emulsion studies, foley archives, and visual essays by Maria Lückerath.',
  alternates: {
    canonical: `${BASE_URL}/lab`,
  },
  openGraph: {
    title: 'Experimental Film Lab & Sound Research | She Says Cut',
    description:
      'Hydrophone acoustics, 35mm emulsion studies, foley archives, and visual essays by She Says Cut in Brussels.',
    url: `${BASE_URL}/lab`,
    siteName: 'She Says Cut',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experimental Film Lab & Sound Research | She Says Cut',
    description:
      'Hydrophone acoustics, 35mm emulsion studies, foley archives, and visual essays by She Says Cut.',
  },
};

export default function LabPage() {
  return (
    <div className="w-full min-h-screen bg-[#F5F4F0]">

      {/* Page header */}
      <header className="max-w-[1600px] mx-auto px-6 sm:px-10 pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] block mb-3">
              Experimental Research & Archive
            </span>
            <h1 className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl text-[#0A0A0A] leading-none tracking-tight">
              The Lab
            </h1>
          </div>
          <p className="font-sans text-sm text-[#8A8A8A] max-w-sm leading-relaxed pb-2">
            An intimate space dedicated to hydrophone soundscapes, expired film stock tests, foley research, and micro visual essays.
          </p>
        </div>
      </header>

      {/* Research projects */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 py-16 sm:py-20">

        {/* Research philosophy quote */}
        <blockquote className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] leading-snug tracking-tight max-w-3xl mb-16 sm:mb-20 pb-14 border-b border-black/10">
          &ldquo;The Lab exists to test hypotheses without commercial deadlines: to record water acoustics at 3AM, to push analog film stocks beyond recommended developer temperatures, and to listen carefully to what fails.&rdquo;
          <cite className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A] not-italic block mt-4">
            She Says Cut Research Notes
          </cite>
        </blockquote>

        {/* Projects grid */}
        <section aria-label="Research Experiments and Visual Essays">
          <h2 className="sr-only">Research Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LAB_PROJECTS.map((p) => (
              <article key={p.id} className="group flex flex-col gap-4">
                {/* Media */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#EDECE8]">
                  <Image
                    src={p.mediaUrl}
                    alt={`${p.title} — ${p.category}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 font-sans text-[9px] tracking-[0.18em] uppercase text-[#0A0A0A]">
                    {p.category}
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-sans text-[9px] tracking-[0.18em] uppercase text-[#8A8A8A]">
                    <span>Research Note</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="font-sans font-black text-lg text-[#0A0A0A] leading-tight">{p.title}</h3>
                  <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.tags.map(tag => (
                      <span key={tag} className="font-sans text-[9px] text-[#8A8A8A] bg-[#EDECE8] px-2 py-0.5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {p.isPlaceholder && (
                    <span className="font-sans text-[9px] text-[#8A8A8A]/50">* Research log placeholder</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
