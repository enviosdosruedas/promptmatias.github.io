
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming button might be wanted

export function HeroNosotros() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-primary/10 to-background"> {/* Subtle gradient using primary color */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
             {/* Combined Title/Subtitle */}
             <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
               Sobre Envios DosRuedas
             </h1>
             {/* Removed the h2 as it's now part of the main title */}
             <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
                Resolvemos tus dudas sobre envíos y delivery. ¿No encuentras lo que buscas? ¡Contáctanos!
             </p>
          </div>
           {/* Optional: Add a CTA button linking to contact */}
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
