'use client'; // Add use client for potential future state/interactions

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Map, CreditCard } from 'lucide-react'; // Import icons

export function CotizarEnviosExpresForm() {
  // Add state for form inputs and result if needed later
  // const [origen, setOrigen] = React.useState('');
  // const [destino, setDestino] = React.useState('');
  // const [costo, setCosto] = React.useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic to calculate price here
    console.log('Calculating price...');
    // Example: setCosto(calculatePrice(origen, destino));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Left side: Form */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-primary">
          Ingrese los detalles del envío
        </h3>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          {/* Origen */}
          <div className="grid gap-2">
            <Label htmlFor="origen-cotizador">Dirección de origen</Label>
            <div className="flex items-center gap-2 rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
              <MapPin className="h-5 w-5 text-muted-foreground ml-3 flex-shrink-0" />
              <Input
                id="origen-cotizador"
                placeholder="Calle, Número, Localidad (Ej: Av. Corrientes 1234, CABA)"
                required
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 flex-grow"
                // value={origen}
                // onChange={(e) => setOrigen(e.target.value)}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Ingrese la dirección donde se recogerá el paquete
            </p>
          </div>
          {/* Destino */}
          <div className="grid gap-2">
            <Label htmlFor="destino-cotizador">Dirección de destino</Label>
            <div className="flex items-center gap-2 rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
               <MapPin className="h-5 w-5 text-muted-foreground ml-3 flex-shrink-0" />
               <Input
                 id="destino-cotizador"
                 placeholder="Calle, Número, Localidad (Ej: Maipú 567, Vicente López)"
                 required
                 className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 flex-grow"
                // value={destino}
                // onChange={(e) => setDestino(e.target.value)}
               />
            </div>
             <p className="text-xs text-muted-foreground">
              Ingrese la dirección donde se entregará el paquete
            </p>
          </div>
          <Button
            type="submit"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Calcular precio
          </Button>
        </form>
      </div>

      {/* Right side: Additional Info */}
       <div className="space-y-4 rounded-lg border bg-muted/50 p-6">
         <h4 className="text-lg font-semibold text-primary">
           Información adicional:
         </h4>
         <ul className="space-y-3 text-sm text-foreground/80">
           <li className="flex items-start gap-2">
             <Clock className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
             <span>Horario de entrega: Lun-Vie 10hs a 18hs</span>
           </li>
           <li className="flex items-start gap-2">
             <Map className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
             <span>Cobertura en toda la ciudad</span>
           </li>
           <li className="flex items-start gap-2">
             <CreditCard className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
             <span>Pagos en efectivo, transferencia o billeteras virtuales</span>
           </li>
         </ul>
         {/* Placeholder for calculated price */}
          {/* {costo !== null && (
            <div className="mt-6 border-t pt-4">
              <p className="font-semibold text-primary">Costo Estimado:</p>
              <p className="text-2xl font-bold text-accent">${costo}</p>
            </div>
          )} */}
       </div>
    </div>
  );
}
