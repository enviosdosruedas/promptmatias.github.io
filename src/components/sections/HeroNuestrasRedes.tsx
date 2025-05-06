
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming a button might be needed

export function HeroNuestrasRedes() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-primary/10 to-background"> {/* Subtle gradient */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            {/* Main Title - Combined */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              Conectate con Envios DosRuedas
            </h1>
             {/* Removed h2 */}
            {/* Subtitle / Description */}
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Descubre nuestros servicios, promociones exclusivas y novedades siguiéndonos en nuestras redes sociales.
            </p>
          </div>
           {/* Optional: CTA Button to Contact */}
           <Link href="/contacto">
             <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary/10">
               Contáctanos
             </Button>
           </Link>
        </div>
      </div>
    </section>
  );
}
