import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const BASE_URL = 'https://www.shesayscut.com';

export const metadata: Metadata = {
  title: {
    default: 'She Says Cut | Independent Film Studio | Brussels',
    template: '%s | She Says Cut',
  },
  description:
    'She Says Cut is an independent boutique film production studio based in Brussels, Belgium, directed by Maria Lückerath. Focusing on narrative cinema, documentary essays, sensory storytelling, and ethical commercial work.',
  keywords: [
    'She Says Cut',
    'Maria Lückerath',
    'Brussels film production',
    'Belgian independent cinema',
    'narrative short film',
    'documentary studio',
    'sensory cinema',
    'European film director',
  ],
  authors: [{ name: 'Maria Lückerath', url: `${BASE_URL}/about` }],
  creator: 'She Says Cut',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'She Says Cut | Independent Film Studio | Brussels',
    description:
      'Independent boutique film production studio in Brussels, Belgium, directed by Maria Lückerath. Introspective narrative cinema and sensory storytelling.',
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
    title: 'She Says Cut | Brussels Independent Cinema',
    description:
      'Introspective narrative cinema, documentary, and sensory storytelling directed by Maria Lückerath in Brussels.',
    images: [`${BASE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'She Says Cut',
    url: BASE_URL,
    description:
      'Independent boutique film production studio based in Brussels, Belgium, directed by Maria Lückerath.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brussels',
      addressCountry: 'BE',
    },
    founder: {
      '@type': 'Person',
      '@id': `${BASE_URL}/#maria-luckerath`,
      name: 'Maria Lückerath',
      jobTitle: 'Film Director',
      url: `${BASE_URL}/about`,
    },
    knowsAbout: [
      'Narrative Cinema',
      'Documentary Filmmaking',
      'Sensory Storytelling',
      'Visual Essays',
    ],
    sameAs: [
      'https://www.instagram.com/shesayscut',
      'https://www.youtube.com/@SheSaysCut_Film',
      'https://www.tiktok.com/@shesayscut',
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4844NZW6B5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4844NZW6B5');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between">
        <Navigation />
        <main className="flex-1 w-full" id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
