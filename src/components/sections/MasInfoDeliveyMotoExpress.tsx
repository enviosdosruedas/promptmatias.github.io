import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, ShieldCheck, Info, CalendarX } from "lucide-react";

export function MasInfoDeliveyMotoExpress() {
  const serviceDetails = [
    { text: "Turno completo: 4 horas" },
    { text: "Sin límite de kilómetros" },
    { text: "Capacidad según mochila delivery" },
    { text: "Adicionales por clima adverso" },
    { text: "Facturación tipo C disponible" },
  ];

  const cancellationPolicies = [
    { text: "48-24 horas: 50% del valor" },
    { text: "24-12 horas: 75% del valor" },
    { text: "Menos de 12 horas: 100% del valor" },
  ];

  const mainFeatures = [
    { text: "Servicio rápido y eficiente" },
    { text: "Disponibilidad garantizada" },
    { text: "Anticipación de 48 horas" },
    { text: "Seguridad garantizada" },
  ];

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Más Información Express
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Detalles del Servicio Card */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">💰 Detalles del Servicio</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 text-sm text-foreground/80">
                {serviceDetails.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Políticas de Cancelación Card */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-destructive/10 p-3 rounded-full mb-3">
                <CalendarX className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="text-xl text-primary">🏍️ Políticas de Cancelación</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/80 mb-4">
                Una moto exclusiva a disposición de tu empresa en el horario que necesites.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                {cancellationPolicies.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Características Principales Card */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-secondary/10 p-3 rounded-full mb-3">
                <ShieldCheck className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-xl text-primary">📦 Características Principales</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/80 mb-4">
                Servicio premium con elección de rango horario. Solicita antes de las 15hs para entrega en el día.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                {mainFeatures.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
