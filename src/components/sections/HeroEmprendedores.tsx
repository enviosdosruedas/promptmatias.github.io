
import React from 'react';

export function HeroEmprendedores() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-primary/10 to-background"> {/* Subtle gradient using primary color */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            {/* Benefit Tag */}
            <span className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
              Beneficio Emprendedores
            </span>
            {/* Main Title */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              📊 Plan Emprendedor 🛒
            </h1>
            {/* Subtitle / Branding */}
            <h2 className="text-xl font-semibold text-secondary tracking-wide">
              Envios DosRuedas
            </h2>
            {/* Description */}
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl leading-relaxed">
              Potencia tus ventas online con envíos profesionales.
              <br />
              Optimiza tus ventas online con nuestro servicio especializado para emprendedores.
              <br />
              Accede a envíos de bajo costo con la opción de elegir tu rango horario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
