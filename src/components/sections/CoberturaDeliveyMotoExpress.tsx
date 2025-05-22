'use client'; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ShieldCheck, ListChecks, Settings } from 'lucide-react';

const caracteristicas = [
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Servicio Rápido", description: "Envíos urgentes con la mayor eficiencia" },
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Disponibilidad Garantizada", description: "Servicio a domicilio cuando lo necesites" },
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Planificación Anticipada", description: "48 horas de anticipación para organización" },
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Seguridad Total", description: "Garantía en cada una de tus entregas" },
];

const detalles = [
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Turno Completo", description: "4 horas de servicio garantizado" },
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Sin Límites", description: "Kilómetros ilimitados en tu servicio" },
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Personalización", description: "Servicio adaptado a tus necesidades" },
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Seguimiento", description: "Monitoreo en tiempo real de tus envíos" },
];

const garantias = [
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Envíos Asegurados", description: "Máxima protección para tus paquetes" },
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Personal Capacitado", description: "Equipo profesional y experimentado" },
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Soporte Dedicado", description: "Atención personalizada" },
  { icon: <CheckCircle className="h-5 w-5 text-secondary" />, title: "Satisfacción Total", description: "Garantía de calidad en el servicio" },
];


export function CoberturaDeliveyMotoExpress() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-2 text-sm">
            Servicios Express
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Más Información Express
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Características Principales Card */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="items-center text-center p-6 bg-card border-b">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <ListChecks className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">Características Principales</CardTitle>
              <p className="text-sm text-muted-foreground">Servicio premium con elección de rango horario</p>
            </CardHeader>
            <CardContent className="flex-grow p-6 space-y-3">
              {caracteristicas.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Detalles del Servicio Card */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="items-center text-center p-6 bg-card border-b">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">Detalles del Servicio</CardTitle>
              <p className="text-sm text-muted-foreground">Todo lo que necesitas saber sobre nuestro servicio</p>
            </CardHeader>
            <CardContent className="flex-grow p-6 space-y-3">
              {detalles.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Garantías del Servicio Card */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="items-center text-center p-6 bg-card border-b">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">Garantías del Servicio</CardTitle>
              <p className="text-sm text-muted-foreground">Nuestra promesa de calidad y seguridad</p>
            </CardHeader>
            <CardContent className="flex-grow p-6 space-y-3">
              {garantias.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
