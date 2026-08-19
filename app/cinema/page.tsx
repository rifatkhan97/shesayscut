import type { Metadata } from 'next';
import CinemaClient from './CinemaClient';

const BASE_URL = 'https://www.shesayscut.com';

export const metadata: Metadata = {
  title: 'Cinema Archive | Films by She Says Cut',
  description:
    'Explore the film archive of She Says Cut, directed by Maria Lückerath in Brussels. Introspective narrative cinema, documentary shorts, and sensory soundscapes.',
  alternates: {
    canonical: `${BASE_URL}/cinema`,
  },
  openGraph: {
    title: 'Cinema Archive | Films by She Says Cut',
    description:
      'Explore the film archive of She Says Cut, directed by Maria Lückerath in Brussels. Narrative cinema, documentary, and sensory storytelling.',
    url: `${BASE_URL}/cinema`,
    siteName: 'She Says Cut',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'She Says Cut — Cinema Archive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinema Archive | Films by She Says Cut',
    description:
      'Introspective narrative cinema, documentary shorts, and sensory soundscapes directed by Maria Lückerath.',
    images: [`${BASE_URL}/opengraph-image`],
  },
};

export default function CinemaPage() {
  return <CinemaClient />;
}
