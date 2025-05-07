import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ListChecks, Settings, CheckCircle, ShoppingCart, Info } from 'lucide-react';

export function InfoEnviosFlex() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-2 text-sm">
            <ShoppingCart className="h-4 w-4 mr-2 inline-block" />
            Información Importante
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            ENVIOS FLEX - MercadoLibre
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Horarios Card */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="items-center text-center p-6 bg-card border-b">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">Horarios de Entrega</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <ul className="space-y-2 text-sm text-foreground/80 text-center">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Lunes a Viernes de 9:00 a 19:00 hrs.</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Sábados de 10:00 a 15:00 hrs.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Cómo Funciona Card */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="items-center text-center p-6 bg-card border-b">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">¿Cómo Funciona?</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <ul className="space-y-2 text-sm text-foreground/80 text-center">
                <li className="flex items-start text-left gap-2"> {/* Changed to items-start for better alignment */}
                  <Info className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                  <span>Ofrece entregas en el día dentro de Mar del Plata en tus publicaciones para tus ventas antes de las 15hs. Las ventas luego de 15hs serán entregadas al día siguiente.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Requisitos Card */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="items-center text-center p-6 bg-card border-b">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <ListChecks className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">Requisitos</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <ul className="space-y-2 text-sm text-foreground/80 text-center">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Ser vendedor de MercadoLibre activo.</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Tener activo Mercado Envíos Flex en tus ventas.</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Ofrecer entregas en el día para compras antes de 15hs.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
