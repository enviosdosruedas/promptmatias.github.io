
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroDeliveyMotoFija() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-primary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <span className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
            Servicio Premium
          </span>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
            Servicio de Moto Fija
          </h1>
          <h2 className="text-xl font-semibold text-secondary tracking-wide">
            Envios DosRuedas
          </h2>
          <div className="max-w-[700px] text-foreground/80 md:text-xl">
            <p>
              Soluciones de delivery personalizadas para tu negocio.
            </p>
            <p className="mt-2">
              Conéctate con nosotros y descubre todo lo que tenemos para ofrecerte.
            </p>
          </div>
          <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contacto">
              Contactar
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
