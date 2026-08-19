import type { Metadata } from 'next';
import InquireClient from './InquireClient';

const BASE_URL = 'https://shesayscut.com';

export const metadata: Metadata = {
  title: 'Inquire & Festival Screener Access | She Says Cut',
  description:
    'Initiate film commissions, narrative co-productions, or request festival screener access with She Says Cut in Brussels, Belgium.',
  alternates: {
    canonical: `${BASE_URL}/inquire`,
  },
  openGraph: {
    title: 'Inquire & Festival Screener Access | She Says Cut',
    description:
      'Initiate film commissions or request festival screener access with She Says Cut in Brussels.',
    url: `${BASE_URL}/inquire`,
    siteName: 'She Says Cut',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inquire & Festival Screener Access | She Says Cut',
    description:
      'Initiate film commissions or request festival screener access with She Says Cut in Brussels.',
  },
};

export default function InquirePage() {
  return <InquireClient />;
}
