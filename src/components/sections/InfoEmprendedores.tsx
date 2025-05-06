import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ListChecks, Settings, CheckCircle } from 'lucide-react';

export function InfoEmprendedores() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-2">
             💰 Información Importante
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Plan Emprendedores
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Horarios Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">Horarios</CardTitle>
            </CardHeader>
            <CardContent>
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
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">¿Cómo Funciona?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground/80 text-center">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                   <span>Elige tu franja de entrega: mañana (9-13hs) o tarde (15-19hs)</span>
                </li>
                 {/* Add more points if needed */}
              </ul>
            </CardContent>
          </Card>

          {/* Requisitos Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                 <ListChecks className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">Requisitos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground/80 text-center">
                <li className="flex items-center justify-center gap-2">
                   <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                   <span>Ser vendedor online activo</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                   <span>Tener un mínimo de envíos semanales</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                   <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                   <span>Mínimo de 6 envíos semanales (Lunes a sábado)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
