
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export function HeroCotizadorExpress() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-primary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            <Rocket className="mr-2 h-4 w-4" />
            Cotizador Express
          </Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
            Cotizador Envíos Express 🚀
          </h1>
          <h2 className="text-xl font-semibold text-secondary tracking-wide">
            Envios DosRuedas
          </h2>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl leading-relaxed">
            Calcula el costo de tu envío urgente. Ideal para cuando necesitas que llegue ¡YA!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* Button removed as the calculator is on this page */}
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-md hover:scale-105 transition-transform">
              <Link href="/mensajeria-envios-express">
                Más Información sobre Envíos Express
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
