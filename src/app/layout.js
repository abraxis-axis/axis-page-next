import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import { SITE } from "@/data/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  title: `${SITE.name} — Páginas web y apps con AppSheet para tu empresa`,
  description: "Diseñamos páginas web y aplicaciones con AppSheet para pymes de México. Digitaliza tu negocio con procesos a la medida: agenda de citas, inventario, automatización y más.",
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: `${SITE.name} — Páginas web y apps con AppSheet`,
    description: "Conectamos procesos. Impulsamos resultados. Páginas web y aplicaciones a la medida para pymes de México.",
    url: SITE.url,
    locale: "es_MX",
    siteName: SITE.name,
    images: [
      {
        url: "/imagenes/og-image.png",
        width: 1200,
        height: 630,
        alt: "Axis — Páginas web y apps con AppSheet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Páginas web y apps con AppSheet`,
    description: "Conectamos procesos. Impulsamos resultados. Páginas web y aplicaciones a la medida para pymes de México.",
    images: ["/imagenes/og-image.png"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.telephone,
  image: `${SITE.url}/imagenes/og-image.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tepic",
    addressRegion: "Nayarit",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.508921,
    longitude: -104.895056,
  },
  areaServed: "Mexico",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta name="theme-color" content="#2E7DD1" />
      </head>
      <body>
        <Header />
        {children}
        <WhatsAppFloat />
        <ScrollRevealObserver />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
