import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin } from "lucide-react";

export default function CotizadorEnviosExpressPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
        Cotizador de Envíos Express
      </h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Calculá el costo de tu envío</CardTitle>
          <CardDescription>
            Ingresá las direcciones de origen y destino para obtener una cotización instantánea para tu envío express.
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
                <Label>Tipo de Paquete</Label>
                <RadioGroup defaultValue="pequeno" className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pequeno" id="pequeno" />
                    <Label htmlFor="pequeno">Pequeño (Sobre, Doc)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mediano" id="mediano" />
                    <Label htmlFor="mediano">Mediano (Caja chica)</Label>
                  </div>
                   <div className="flex items-center space-x-2">
                    <RadioGroupItem value="grande" id="grande" disabled />
                    <Label htmlFor="grande" className="text-foreground/40">Grande (Consultar)</Label>
                  </div>
                </RadioGroup>
              </div>
             <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Calcular Costo Express
            </Button>
          </form>
        </CardContent>
         <CardFooter className="text-center block">
             {/* Placeholder for results - To be implemented with state/logic */}
             <p className="text-sm text-foreground/60 mt-4">El costo estimado aparecerá aquí.</p>
         </CardFooter>
      </Card>
       <p className="text-center mt-8 text-sm text-foreground/70">
         Para envíos Low Cost, utilizá nuestro <a href="/cotizador-envios-lowcost" className="text-secondary underline">Cotizador Low Cost</a>.
       </p>
    </div>
  );
}
