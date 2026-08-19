import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { STUDIO_INFO, PRESS_ITEMS } from '@/lib/data';

export const metadata = {
  title: 'About Maria Lückerath | She Says Cut',
  description:
    'Maria Lückerath is an independent film director and founder of She Says Cut in Brussels, focusing on narrative cinema, documentary, and sensory storytelling.',
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#F5F4F0]">

      {/* ── HERO — name at large scale ────────────── */}
      <header className="max-w-[1600px] mx-auto px-6 sm:px-10 pt-24 sm:pt-28 pb-0 border-b border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-12">
          <div className="lg:col-span-8">
            <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] block mb-3">
              Director & Studio Founder
            </span>
            <h1 className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#0A0A0A] leading-none tracking-tighter">
              Maria<br />Lückerath
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="font-sans text-sm text-[#8A8A8A] leading-relaxed">
              Filmmaker, director, and founder of She Says Cut. Based in Brussels, Belgium.
            </p>
          </div>
        </div>
      </header>

      {/* ── PORTRAIT + BIO ───────────────────────── */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-black/10">

        {/* Portrait */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#EDECE8]">
            <Image
              src={STUDIO_INFO.directorPortrait}
              alt="Maria Lückerath, Film Director, She Says Cut, Brussels"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-[#8A8A8A] mt-3">
            Maria Lückerath · Director · Brussels
          </p>
        </div>

        {/* Bio */}
        <div className="lg:col-span-7 flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-4 font-sans text-sm text-[#3A3A3A] leading-relaxed">
            <p>
              Maria Lückerath is a Brussels-based film director whose work navigates the quiet boundaries between personal memory, acoustic resonance, and visual intimacy. Following her studies in European literature and analog cinematography, she founded <strong className="text-[#0A0A0A] font-semibold">She Says Cut</strong> as a boutique production studio dedicated to independent narrative shorts, documentary essays, and sound-driven works.
            </p>
            <p>
              Her films, including <em>Je Cours</em> (2024), <em>MyOPIA</em> (2024), <em>The Last Pencil</em> (2023), and <em>Irreversible</em> (2022), are characterised by tactile material presence, unhurried pacing, and a deep respect for sound as a primary narrative force.
            </p>
            <p>
              In addition to her independent cinema work, Maria directs select commercial commissions for cultural institutions and architectural partners who share a commitment to visual restraint and ethical craft.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#press-kit"
              className="flex items-center gap-2 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white px-6 py-3 font-sans text-[10px] tracking-[0.18em] uppercase font-bold transition-all"
            >
              <Download size={13} />
              Press Kit (PDF Placeholder)
            </a>
            <Link
              href="/inquire"
              className="flex items-center gap-2 bg-[#0A0A0A] text-white hover:bg-[#333] px-6 py-3 font-sans text-[10px] tracking-[0.18em] uppercase font-bold transition-colors"
            >
              Direct Inquiry →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ───────────────────────────── */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 py-16 sm:py-20 border-b border-black/10">
        <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] block mb-10">Studio Principles</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/10">
          {[
            { title: 'Analog & Tactile', body: 'We prioritise 35mm and 16mm film stocks, vintage optics, and physical texture to ground stories in tangible reality.' },
            { title: 'Acoustic Primacy', body: 'Sound is engineered from pre-production. Hydrophone recordings, foley isolation, and spatial mixing define our dramatic rhythm.' },
            { title: 'Ethical Production', body: 'Fair compensation, sustainable crew practices, and transparent co-production relationships across European borders.' },
          ].map(({ title, body }) => (
            <div key={title} className="bg-[#F5F4F0] p-8 sm:p-10 flex flex-col gap-4">
              <h3 className="font-sans font-black text-lg text-[#0A0A0A]">{title}</h3>
              <p className="font-sans text-sm text-[#8A8A8A] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRESS ────────────────────────────────── */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] block mb-8">Press & Editorial Coverage</span>
        <div className="divide-y divide-black/8 border-y border-black/8">
          {PRESS_ITEMS.map(item => (
            <div key={item.id} className="py-7 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A]">
                  {item.publication} · {item.year}
                </span>
                <h3 className="font-sans font-black text-lg text-[#0A0A0A] leading-tight">{item.title}</h3>
                <p className="font-sans text-xs text-[#8A8A8A] max-w-xl leading-relaxed">{item.excerpt}</p>
              </div>
              {item.isPlaceholder && (
                <span className="font-sans text-[9px] text-[#8A8A8A]/50 shrink-0">* Press placeholder</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
