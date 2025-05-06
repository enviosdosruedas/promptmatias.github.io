
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroMenEnvExpress() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-primary/10 to-background"> {/* Subtle gradient */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            {/* Main Title */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              Mensajería - Envíos Express
            </h1>
            {/* Subtitle / Branding */}
            <h2 className="text-xl font-semibold text-secondary tracking-wide">
              Envios DosRuedas
            </h2>
            {/* Description */}
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              ¡Envía tus paquetes de manera rápida y segura! Descubre nuestros precios y opciones para que tu envío llegue a tiempo.
            </p>
          </div>
          {/* CTA Button */}
          <Button asChild size="lg" className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/cotizador-envios-express">
              Cotiza el servicio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
