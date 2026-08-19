import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

const BASE_URL = 'https://www.shesayscut.com';

export const metadata: Metadata = {
  title: 'She Says Cut | Independent Film Production in Brussels',
  description:
    'She Says Cut is an independent boutique film production studio based in Brussels, Belgium, directed by Maria Lückerath. Specializing in narrative cinema, documentary essays, and sensory storytelling.',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'She Says Cut | Independent Film Production in Brussels',
    description:
      'Independent boutique film production studio in Brussels, Belgium, directed by Maria Lückerath.',
    url: BASE_URL,
    siteName: 'She Says Cut',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'She Says Cut — Independent Film Studio — Brussels, Belgium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'She Says Cut | Independent Film Production in Brussels',
    description:
      'Independent boutique film production studio in Brussels, Belgium, directed by Maria Lückerath.',
    images: [`${BASE_URL}/opengraph-image`],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
