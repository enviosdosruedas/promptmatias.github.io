
import React from 'react';
import { Badge } from '@/components/ui/badge'; // Assuming Badge component is available

export function HeroEnviosFlex() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-primary/10 to-background"> {/* Subtle gradient using primary color */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            {/* Benefit Tag */}
            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
              Beneficio Emprendedores
            </Badge>
            {/* Main Title */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              📊 Envíos Flex - MercadoLibre 🛒
            </h1>
            {/* Subtitle / Branding */}
            <h2 className="text-xl font-semibold text-secondary tracking-wide">
              Envios DosRuedas
            </h2>
            {/* Description */}
            <div className="mx-auto max-w-[700px] text-foreground/80 md:text-xl leading-relaxed">
                <p>
                Potencia tus ventas online con envíos profesionales y entregas en el día.
                </p>
                <p className="mt-2">
                Optimiza tus entregas con nuestro servicio especializado.
                </p>
                <p className="mt-2">
                Ofrece envíos en el día para tus ventas antes de las 15hs.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
