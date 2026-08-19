import type { Metadata } from 'next';
import CommissionsClient from './CommissionsClient';

const BASE_URL = 'https://shesayscut.com';

export const metadata: Metadata = {
  title: 'Commercial & Branded Film Commissions | She Says Cut',
  description:
    'Translating auteur filmmaking into quiet, elevated commercial works, branded films, and visual essays for cultural institutions and architectural partners in Brussels and Europe.',
  alternates: {
    canonical: `${BASE_URL}/commissions`,
  },
  openGraph: {
    title: 'Commercial & Branded Film Commissions | She Says Cut',
    description:
      'Commercial filmmaking, branded films, and spatial storytelling directed by Maria Lückerath.',
    url: `${BASE_URL}/commissions`,
    siteName: 'She Says Cut',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial & Branded Film Commissions | She Says Cut',
    description:
      'Commercial filmmaking, branded films, and spatial storytelling directed by Maria Lückerath.',
  },
};

export default function CommissionsPage() {
  return <CommissionsClient />;
}
