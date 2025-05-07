import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap, ShoppingCart, MapPin } from 'lucide-react';

export function PrincipalEnviosFlex() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
              Envíos Flex Mercado Libre
            </h1>
            <p className="text-foreground/80 mb-6 md:text-lg">
              ¿Vendés por Mercado Libre? Potenciá tus ventas con Envíos Flex. Entregamos tus productos en el día o al día siguiente, mejorando tu reputación y la satisfacción de tus compradores. Nos integramos fácilmente a tu operatoria.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Zap className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Entregas Rápidas Garantizadas</h3>
                  <p className="text-sm text-foreground/80">Cumplimos con los plazos de Mercado Envíos Flex para mejorar tu reputación.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShoppingCart className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Integración Sencilla</h3>
                  <p className="text-sm text-foreground/80">Nos adaptamos a tu flujo de trabajo de Mercado Libre.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Amplia Cobertura</h3>
                  <p className="text-sm text-foreground/80">Llegamos a las zonas habilitadas para Envíos Flex.</p>
                </div>
              </div>
            </div>
            <Link href="/contacto">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Sumate a Envíos Flex con Nosotros
              </Button>
            </Link>
          </div>
          <div className="order-first md:order-last">
            <Image
              src="/LogoEnviosDosRuedas.webp"
              alt="Envíos Flex Mercado Libre"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover aspect-video"
              data-ai-hint="ecommerce package delivery"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
