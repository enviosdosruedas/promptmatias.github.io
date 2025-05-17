'use client'; 
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

export function ContactMenEnvLowCost() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="bg-background/10 p-4 rounded-full">
            <Calculator className="h-12 w-12 text-accent" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¿No sabes la distancia?
          </h2>
          <p className="max-w-[600px] text-primary-foreground/80 md:text-lg">
            Nuestro cotizador intuitivo te ayuda. Ingresa los puntos de retiro y entrega para obtener el costo estimado al instante.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:scale-105 transition-transform"
          >
            <Link href="/cotizador-envios-lowcost">
              <Calculator className="mr-2 h-5 w-5" />
              Cotizar Ahora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
