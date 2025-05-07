import type { Metadata, Viewport } from 'next';
import './globals.css';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: {
    default: 'Envios DosRuedas | Mensajería y Delivery en Mar del Plata',
    template: '%s | Envios DosRuedas',
  },
  description: 'Servicios confiables de mensajería y delivery en moto en Mar del Plata. Ofrecemos envíos express, low-cost, soluciones para emprendedores y Mercado Libre Flex. ¡Cotiza online y contáctanos!',
  keywords: ['mensajeria Mar del Plata', 'delivery Mar del Plata', 'envios en moto', 'cadeteria Mar del Plata', 'envios express', 'envios low cost', 'logistica emprendedores', 'mercado libre flex'],
  authors: [{ name: 'Envios DosRuedas' }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://enviosdosruedas.com', // Replace with actual domain
    title: 'Envios DosRuedas | Mensajería y Delivery Confiable en Mar del Plata',
    description: 'Soluciones rápidas y seguras para tus envíos en Mar del Plata. Express, Low-Cost, Emprendedores y Envíos Flex.',
    images: [
      {
        url: '/LogoEnviosDosRuedas.webp', // Replace with an absolute URL to a preview image
        width: 800,
        height: 600,
        alt: 'Logo Envios DosRuedas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envios DosRuedas | Mensajería y Delivery en Mar del Plata',
    description: 'Tu solución de confianza para envíos en moto. Rápido, seguro y económico.',
    images: ['/LogoEnviosDosRuedas.webp'], // Replace with an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg', // Main favicon
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png', // Ensure this exists or remove
    // other: [ // Example for other icons if needed
    //   {
    //     rel: 'icon',
    //     url: '/favicon-32x32.png',
    //     sizes: '32x32',
    //   },
    // ],
  },
  // manifest: '/site.webmanifest', // If you have a webmanifest
};

export const viewport: Viewport = {
  themeColor: '#00296b', // Matches --primary HSL(216 100% 21%)
  colorScheme: 'light dark', // Or just 'light' or 'dark'
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Optional: prevent zooming
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Theme color meta tag already handled by viewport export */}
      </head>
      <body
        className={cn(
           "min-h-screen bg-background font-sans antialiased flex flex-col", // Updated class list
          fontSans.variable
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}