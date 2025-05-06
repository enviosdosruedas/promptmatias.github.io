
import React from 'react';
import Link from 'next/link'; // Import Link if needed for future CTAs
import { Button } from '@/components/ui/button'; // Import Button if needed

export function HeroContacto() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-primary/10 to-background"> {/* Subtle gradient background */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            {/* Main Title */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              Contacta con Nosotros
            </h1>
            {/* Subtitle / Branding */}
            <h2 className="text-xl font-semibold text-secondary tracking-wide">
              Envios DosRuedas
            </h2>
            {/* Description */}
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Contáctanos y obtén una respuesta rápida.
            </p>
          </div>
          {/* Optional: Add a CTA button if needed in the future */}
          {/* <Link href="/some-action">
            <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary/10">
              Placeholder CTA
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
