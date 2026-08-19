import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
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

export const metadata: Metadata = {
  title: {
    default: 'She Says Cut | Independent Film Studio | Brussels',
    template: '%s | She Says Cut',
  },
  description:
    'Independent boutique film production company based in Brussels, Belgium, directed by Maria Lückerath. Introspective narrative cinema, documentary, sensory storytelling, and ethical commissioned film.',
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
  authors: [{ name: 'Maria Lückerath', url: 'https://shesayscut.com' }],
  creator: 'She Says Cut',
  metadataBase: new URL('https://shesayscut.com'),
  openGraph: {
    title: 'She Says Cut | Independent Film Studio | Brussels',
    description:
      'A boutique European film studio translating memory, sound dynamics, and physical presence into quiet digital experiences.',
    url: 'https://shesayscut.com',
    siteName: 'She Says Cut',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/media/myopia_hero.png',
        width: 1200,
        height: 630,
        alt: 'She Says Cut Cinema Still',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'She Says Cut | Brussels Independent Cinema',
    description:
      'Introspective narrative cinema, documentary, and sensory storytelling directed by Maria Lückerath.',
    images: ['/media/myopia_hero.png'],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProductionCompany',
    name: 'She Says Cut',
    legalName: 'She Says Cut Studio',
    url: 'https://shesayscut.com',
    logo: 'https://shesayscut.com/media/myopia_hero.png',
    description:
      'Independent boutique film production company based in Brussels, Belgium, directed by Maria Lückerath.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brussels',
      addressCountry: 'BE',
    },
    founder: {
      '@type': 'Person',
      name: 'Maria Lückerath',
      jobTitle: 'Film Director & Creative Voice',
    },
    knowsAbout: [
      'Narrative Cinema',
      'Documentary Filmmaking',
      'Sensory Storytelling',
      'Sound Design & Visual Essays',
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between">
        <Navigation />
        <main className="flex-1 w-full">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
