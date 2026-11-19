import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCTA, WhatsAppFloat } from "@/components/FloatingActions";
import { RevealProvider } from "@/components/RevealProvider";
import { siteConfig } from "@/content/site";
import { localBusinessSchema } from "@/lib/schema";
import { ogImages } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  ...(siteConfig.url ? { metadataBase: new URL(siteConfig.url) } : {}),
  title: {
    default:
      "Lozartico | Construcción, reforma y mantenimiento en Valencia y Gran Canaria",
    template: "%s | Lozartico",
  },
  description:
    "Construcción, reforma y mantenimiento en Valencia y Gran Canaria. Alicatados, pintura, impermeabilización, fontanería, electricidad, climatización y césped artificial.",
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "construction",
  keywords: [
    "obra nueva Valencia",
    "reformas Valencia",
    "reformas Gran Canaria",
    "construcción Valencia",
    "mantenimiento Valencia",
    "mantenimiento de comunidades Valencia",
    "impermeabilización de terrazas y fachadas",
    "fontanería Valencia",
    "electricidad Valencia",
    "césped artificial Valencia",
    "aire acondicionado Valencia",
    "Lozartico",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: siteConfig.shortName,
    ...(siteConfig.url ? { url: "/" } : {}),
    title:
      "Lozartico | Construcción, reforma y mantenimiento en Valencia y Gran Canaria",
    description:
      "Construcción, reforma y mantenimiento en Valencia y Gran Canaria. Alicatados, pintura, impermeabilización, fontanería, electricidad y climatización.",
    images: ogImages(),
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lozartico | Construcción, reforma y mantenimiento en Valencia y Gran Canaria",
    description:
      "Construcción, reforma y mantenimiento en Valencia y Gran Canaria. Presupuesto directo por WhatsApp.",
    images: ogImages()?.map((image) => image.url),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2F66",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${archivo.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js");',
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <RevealProvider />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileCTA />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
