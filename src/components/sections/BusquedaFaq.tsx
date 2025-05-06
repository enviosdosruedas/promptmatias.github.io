
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react'; // Import Search icon

export function BusquedaFaq() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Title (Optional, can be removed if HeroFaq covers it sufficiently) */}
          {/* <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
            Busca en nuestras Preguntas Frecuentes
          </h1> */}

          {/* Search Input */}
          <div className="relative w-full max-w-lg">
            <Input
              type="search"
              placeholder="Buscar preguntas por palabra clave..."
              className="pl-10 pr-4 py-2 text-base md:text-sm" // Adjusted padding and text size
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>

           {/* Category Buttons */}
           <div className="flex flex-wrap justify-center gap-2 md:gap-3">
             <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">Todas</Button>
             <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">Servicios</Button>
             <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">Precios</Button>
             <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">Proceso de Envío</Button>
            {/* Add more categories as needed */}
           </div>

          {/* Helper Text */}
          <p className="max-w-xl text-sm text-muted-foreground">
             Puedes buscar por palabra clave o navegar por categorías usando los botones de arriba. Todas las preguntas están organizadas para que encuentres lo que necesitas fácilmente.
          </p>
        </div>
      </div>
    </section>
  );
}
