import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'EnviosDosRuedas',
  icons: {
    icon: '/favicon.svg',
  },
    description: 'Servicios de mensajería y envíos en dos ruedas.',
};
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          'antialiased flex flex-col min-h-screen'
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}