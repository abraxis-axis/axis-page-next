import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";

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
  title: "Axis — Páginas web y apps con AppSheet para tu empresa",
  description: "Diseñamos páginas web y aplicaciones con AppSheet para pymes de México. Digitaliza tu negocio con procesos a la medida: agenda de citas, inventario, automatización y más.",
  metadataBase: new URL("https://axis-ab.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Axis — Páginas web y apps con AppSheet",
    description: "Conectamos procesos. Impulsamos resultados. Páginas web y aplicaciones a la medida para pymes de México.",
    url: "https://axis-ab.com",
    locale: "es_MX",
    siteName: "Axis",
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
    title: "Axis — Páginas web y apps con AppSheet",
    description: "Conectamos procesos. Impulsamos resultados. Páginas web y aplicaciones a la medida para pymes de México.",
    images: ["/imagenes/og-image.png"],
  },
  icons: {
    icon: "/imagenes/logo.png",
  },
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
      </body>
    </html>
  );
}
