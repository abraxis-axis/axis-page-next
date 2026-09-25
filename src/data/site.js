/**
 * Información principal de Axis.
 *
 * Cambia aquí tus datos de contacto y se actualizarán en todo el sitio
 * (Header, Footer, formularios, páginas y demos).
 */

export const SITE = {
  name: 'Axis',
  tagline: 'Conectamos procesos. Impulsamos resultados.',
  email: 'abraxis@axis-ab.com',
  phone: '311 102 1576',
  telephone: '+52 311 102 1576',
  whatsapp: '5213111021576',
  whatsappUrl: 'https://wa.me/5213111021576',
  location: 'Tepic, Nayarit — servicio en toda la república',
  city: 'Tepic, Nayarit',
  url: 'https://axis-ab.com',
};

export const waLink = (text = '') =>
  text ? `${SITE.whatsappUrl}?text=${encodeURIComponent(text)}` : SITE.whatsappUrl;