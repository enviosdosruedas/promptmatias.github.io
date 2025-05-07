
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroMenEnvLowCost() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-primary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              Mensajería - Envíos Low-cost
            </h1>
            <h2 className="text-xl font-semibold text-secondary tracking-wide">
              Envios DosRuedas
            </h2>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Descubre nuestros servicios de mensajería rápida y económica. Envíos seguros y a precios bajos para todas tus necesidades.
            </p>
          </div>
          <Button asChild size="lg" className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/cotizador-envios-lowcost">
              Cotiza el servicio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
