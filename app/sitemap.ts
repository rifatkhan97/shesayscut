import { MetadataRoute } from 'next';
import { FILMS } from '@/lib/data';

const BASE_URL = 'https://shesayscut.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/cinema',
    '/commissions',
    '/lab',
    '/about',
    '/inquire',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const filmRoutes = FILMS.map((film) => ({
    url: `${BASE_URL}/cinema/${film.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...filmRoutes];
}
