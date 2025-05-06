import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { CotizarEnviosExpresForm } from "@/components/sections/CotizarEnviosExpresForm"; // Import the new form component
// Removed unused imports: Label, Input, Button, RadioGroup, RadioGroupItem, MapPin

export default function CotizadorEnviosExpressPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
        Cotizador de Envíos Express
      </h1>
      <Card className="max-w-4xl mx-auto"> {/* Increased max-width for the new layout */}
        <CardHeader className="text-center"> {/* Center align header */}
          <CardTitle>Calculá el costo de tu envío</CardTitle>
          <CardDescription>
            Ingresá las direcciones de origen y destino para obtener una cotización instantánea para tu envío express.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8"> {/* Added padding */}
           {/* Integrate the new form component here */}
           <CotizarEnviosExpresForm />
        </CardContent>
         <CardFooter className="text-center block border-t pt-6"> {/* Added border-top and padding */}
             {/* Placeholder for results - Managed within CotizarEnviosExpresForm if needed */}
             <p className="text-sm text-foreground/60 mt-4">El costo estimado aparecerá aquí.</p>
         </CardFooter>
      </Card>
       <p className="text-center mt-8 text-sm text-foreground/70">
         Para envíos Low Cost, utilizá nuestro <a href="/cotizador-envios-lowcost" className="text-secondary underline">Cotizador Low Cost</a>.
       </p>
    </div>
  );
}
