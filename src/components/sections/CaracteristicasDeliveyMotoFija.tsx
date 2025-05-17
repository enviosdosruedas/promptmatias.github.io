'use client'; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Removed CardDescription
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Bike, UserCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <Bike className="h-8 w-8 text-primary" />,
    title: "Moto Dedicada",
    description: "Un repartidor exclusivo para tu negocio en el horario contratado."
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Repartidores Profesionales",
    description: "Personal capacitado, responsable y comprometido con la calidad del servicio."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Eficiencia Garantizada",
    description: "Optimizamos la logística para un servicio de entregas ágil y confiable."
  }
];

export function CaracteristicasDeliveyMotoFija() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-2 text-sm">
            📦 Características Principales
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Beneficios del Servicio de Moto Fija
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="items-center text-center p-6 bg-card border-b">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <ul className="space-y-2 text-sm text-foreground/80 text-center">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span>{feature.description}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
