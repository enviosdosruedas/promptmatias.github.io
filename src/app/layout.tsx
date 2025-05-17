
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: 'EnviosDosRuedas | Mensajería y Delivery Rápido en Mar del Plata',
    template: '%s | EnviosDosRuedas',
  },
  description: 'Servicio confiable de mensajería y delivery en moto en Mar del Plata. Envíos express, low-cost, para emprendedores y Mercado Libre Flex. Cotiza online.',
  
  // Keywords - crucial for search engines to understand your site
  keywords: ['mensajeria mar del plata', 'delivery mar del plata', 'envios en moto', 'cadeteria mar del plata', 'envios flex', 'envios low cost', 'mensajeria express', 'envios dos ruedas'],
  
  // Author Information
  authors: [{ name: 'EnviosDosRuedas' }],
  
  // SEO best practices - robots
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

  // Open Graph (Facebook, LinkedIn, etc)
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.enviosdosruedas.com', // Replace with your actual domain
    title: 'EnviosDosRuedas | Mensajería y Delivery Rápido en Mar del Plata',
    description: 'Tu solución confiable para envíos en Mar del Plata. Rápidos, seguros y económicos.',
    siteName: 'EnviosDosRuedas', // Optional but recommended
    images: [
      {
        url: '/img/LogoEnviosDosRuedas.webp', // Replace with a relevant OG image URL
        width: 1200,
        height: 630,
        alt: 'EnviosDosRuedas Logo',
      },
    ],
  },

  // Twitter Card (Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'EnviosDosRuedas | Mensajería y Delivery Rápido en Mar del Plata',
    description: 'Servicio de mensajería y delivery en moto confiable y rápido en Mar del Plata.',
    images: ['/img/LogoEnviosDosRuedas.webp'], // Replace with a relevant Twitter image URL
    creator: '@EnviosDosRuedas', // Replace with your Twitter handle
  },

  // Manifest and Icons - good for PWAs (Progressive Web Apps)
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest', // Make sure you have a webmanifest file
  
  // Verification metadata - Can be used by search engines
  verification: {
    google: 'o1Cx-8RBfFIuIy7dmIS6jQ7nF5S1JZ_A5ZkLpqynCkQ', 
    // other platforms: yandex, bing, etc.
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00296b' }, // --primary HSL(216 100% 21%)
    { media: '(prefers-color-scheme: dark)', color: '#001a48' }, // Darker primary or a dark theme color
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
         {/* Add viewport meta tag here for better control */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="o1Cx-8RBfFIuIy7dmIS6jQ7nF5S1JZ_A5ZkLpqynCkQ" />
      </head>
      <body
        className={cn(
           "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

    