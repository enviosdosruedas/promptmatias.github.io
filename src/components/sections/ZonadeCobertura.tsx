
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, CheckCircle } from 'lucide-react';

export function ZonadeCobertura() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Nuestra Cobertura
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Servicio de mensajería disponible en toda Mar del Plata con horarios flexibles adaptados a tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Card Zonas */}
          <Card className="flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
               <div className="bg-secondary/10 p-3 rounded-full mb-3">
                <MapPin className="h-10 w-10 text-secondary" />
              </div>
              <CardTitle className="text-primary text-2xl">Zonas de Servicio</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-0 pb-6 px-6">
              <ul className="space-y-3 text-sm text-foreground/80 text-center md:text-left">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Zona Centro</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                   <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Zona Sur</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                   <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Zona Puerto</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                   <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Barrios Residenciales (Consultar)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card Horarios */}
          <Card className="flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
               <div className="bg-secondary/10 p-3 rounded-full mb-3">
                <Clock className="h-10 w-10 text-secondary" />
              </div>
              <CardTitle className="text-primary text-2xl">Cobertura Horaria</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-0 pb-6 px-6">
              <ul className="space-y-3 text-sm text-foreground/80 text-center md:text-left">
                <li className="flex items-center justify-center md:justify-start gap-2">
                   <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Lunes a Sábados</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                   <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>9:00 a 19:00 horas (Regular)</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Servicios Express (Consultar disponibilidad)</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Atención especial gastronómica</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
