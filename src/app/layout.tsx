import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

const siteName = 'EnviosDosRuedas';
const siteDescription = 'Servicio confiable de mensajería y delivery en moto en Mar del Plata. Envíos express, low-cost, para emprendedores y Mercado Libre Flex. Cotiza online.';
const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
    title: {
        default: `${siteName} | Mensajería y Delivery Rápido en Mar del Plata`,
        template: `%s | ${siteName}`,
    },
    description: siteDescription,
    keywords: ['mensajeria mar del plata', 'delivery mar del plata', 'envios en moto', 'cadeteria mar del plata', 'envios flex', 'envios low cost', 'mensajeria express'],
    authors: [{ name: 'EnviosDosRuedas' }],
    openGraph: {
        type: 'website',
        locale: 'es_AR',
        url: baseUrl,
        title: `${siteName} | Mensajería y Delivery Rápido en Mar del Plata`,
        description: siteDescription,
        images: [
            {
                url: `${baseUrl}/img/LogoEnviosDosRuedas.webp`,
                width: 1200,
                height: 630,
                alt: 'EnviosDosRuedas Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteName} | Mensajería y Delivery Rápido en Mar del Plata`,
        description: 'Servicio de mensajería y delivery en moto confiable y rápido en Mar del Plata.',
        images: [`${baseUrl}/img/LogoEnviosDosRuedas.webp`],
        creator: '@EnviosDosRuedas',
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
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
      alternates: {
        canonical: baseUrl,
        languages: {
            'es-AR': baseUrl,
        }
    }
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#00296b' },
        { media: '(prefers-color-scheme: dark)', color: '#001a48' },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased flex flex-col",
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