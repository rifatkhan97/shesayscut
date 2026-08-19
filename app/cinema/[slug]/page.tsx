import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FilmDossierClient from './FilmDossierClient';
import { FILMS } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE_URL = 'https://www.shesayscut.com';

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

  const filmUrl = `${BASE_URL}/cinema/${film.slug}`;

  return {
    title: `${film.title} (${film.year}) | She Says Cut`,
    description: `${film.title} — ${film.category} directed by ${film.director}. ${film.logline}`,
    alternates: {
      canonical: filmUrl,
    },
    openGraph: {
      title: `${film.title} (${film.year}) | She Says Cut`,
      description: film.logline,
      url: filmUrl,
      siteName: 'She Says Cut',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: film.heroImage.startsWith('http') ? film.heroImage : `${BASE_URL}${film.heroImage}`,
          width: 1200,
          height: 675,
          alt: `${film.title} — ${film.category}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${film.title} (${film.year}) | She Says Cut`,
      description: film.logline,
      images: [film.heroImage.startsWith('http') ? film.heroImage : `${BASE_URL}${film.heroImage}`],
    },
  };
}

export default async function FilmDossierPage({ params }: PageProps) {
  const { slug } = await params;
  const film = FILMS.find((f) => f.slug === slug);

  if (!film) {
    notFound();
  }

  const relatedFilms = FILMS.filter((f) => f.slug !== film.slug);
  const filmUrl = `${BASE_URL}/cinema/${film.slug}`;

  // Schema.org Movie & VideoObject JSON-LD
  const movieJsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    '@id': `${filmUrl}/#movie`,
    name: film.title,
    description: film.synopsis || film.logline,
    dateCreated: film.year,
    director: {
      '@type': 'Person',
      '@id': `${BASE_URL}/#maria-luckerath`,
      name: film.director || 'Maria Lückerath',
    },
    productionCompany: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'She Says Cut',
    },
    image: film.heroImage.startsWith('http') ? film.heroImage : `${BASE_URL}${film.heroImage}`,
  };

  if (film.youtubeId) {
    movieJsonLd.video = {
      '@type': 'VideoObject',
      name: film.title,
      description: film.logline,
      thumbnailUrl: film.heroImage,
      uploadDate: `${film.year}-01-01`,
      embedUrl: `https://www.youtube.com/embed/${film.youtubeId}`,
    };
  }

  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cinema Archive',
        item: `${BASE_URL}/cinema`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: film.title,
        item: filmUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(movieJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FilmDossierClient film={film} relatedFilms={relatedFilms} />
    </>
  );
}
