import { SITE } from '@/data/site';

const ROUTES = [
  { path: '', changeFrequency: 'monthly', priority: 1 },
  { path: '/servicios', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/como-funciona', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ejemplos', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/precios', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/nosotros', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/contacto', changeFrequency: 'monthly', priority: 0.9 },
];

export default function sitemap() {
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}