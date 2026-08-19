import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import FilmDossierClient from './FilmDossierClient';
import { FILMS } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FILMS.map((film) => ({
    slug: film.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const film = FILMS.find((f) => f.slug === slug);

  if (!film) {
    return {
      title: 'Film Not Found | She Says Cut',
    };
  }

  return {
    title: `${film.title} (${film.year}) — She Says Cut`,
    description: `${film.title} — ${film.category} directed by ${film.director}. ${film.logline}`,
    openGraph: {
      title: `${film.title} | She Says Cut`,
      description: film.logline,
      images: [{ url: film.heroImage }],
    },
  };
}

export default async function FilmDossierPage({ params }: PageProps) {
  const { slug } = await params;
  const film = FILMS.find((f) => f.slug === slug);

  if (!film) {
    notFound();
  }

  // Related films (excluding current)
  const relatedFilms = FILMS.filter((f) => f.slug !== film.slug);

  return <FilmDossierClient film={film} relatedFilms={relatedFilms} />;
}
