'use client';

import * as React from 'react'; // Import React
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar"; // Assuming a date picker might be relevant
import { MapPin, CalendarIcon } from "lucide-react";

export default function CotizadorEnviosLowcostPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date()); // Example state for calendar

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
        Cotizador de Envíos Low Cost
      </h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Planificá tu envío económico</CardTitle>
          <CardDescription>
            Completá los detalles para obtener una cotización de nuestro servicio Low Cost. Ideal para envíos no urgentes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="origen">Dirección de Origen</Label>
               <div className="flex items-center gap-2">
                 <MapPin className="h-5 w-5 text-foreground/60" />
                <Input id="origen" placeholder="Calle, Número, Localidad (Ej: Av. Corrientes 1234, CABA)" required />
               </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="destino">Dirección de Destino</Label>
               <div className="flex items-center gap-2">
                 <MapPin className="h-5 w-5 text-foreground/60" />
                 <Input id="destino" placeholder="Calle, Número, Localidad (Ej: Maipú 567, Vicente López)" required />
                </div>
            </div>
             <div className="grid gap-2">
               <Label htmlFor="description">Descripción del Paquete</Label>
               <Textarea id="description" placeholder="Ej: Caja pequeña con ropa, sobre con documentos..." className="min-h-[100px]" required/>
            </div>
             {/* Optional: Date picker if scheduling is part of low cost */}
             {/* <div className="grid gap-2">
               <Label htmlFor="date">Fecha Estimada de Retiro</Label>
                 <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-foreground/60" />
                  <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border p-0 w-auto"
                      initialFocus
                    />
                 </div>

            </div> */}
             <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Solicitar Cotización Low Cost
            </Button>
          </form>
        </CardContent>
         <CardFooter className="text-center block">
             <p className="text-sm text-foreground/60 mt-4">Nos pondremos en contacto con tu cotización personalizada.</p>
         </CardFooter>
      </Card>
       <p className="text-center mt-8 text-sm text-foreground/70">
         Para envíos urgentes, utilizá nuestro <a href="/cotizador-envios-express" className="text-secondary underline">Cotizador Express</a>.
       </p>
    </div>
  );
}
