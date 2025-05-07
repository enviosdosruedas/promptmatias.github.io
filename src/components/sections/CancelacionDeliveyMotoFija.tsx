import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarX, AlertTriangle, ShieldAlert } from 'lucide-react';

const cancellationPolicies = [
  {
    icon: <CalendarX className="h-8 w-8 text-green-600" />,
    title: "Cancelación con 48hs de anticipación",
    description: "Sin costo alguno.",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
    borderColor: "border-green-300"
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-yellow-600" />,
    title: "Cancelación entre 48 y 24 horas",
    description: "Se cobrará el 50% del valor del servicio.",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-300"
  },
  {
    icon: <ShieldAlert className="h-8 w-8 text-red-600" />,
    title: "Cancelación con menos de 12 horas",
    description: "Se cobrará el 100% del servicio.",
    bgColor: "bg-red-100",
    textColor: "text-red-700",
    borderColor: "border-red-300"
  }
];

export function CancelacionDeliveyMotoFija() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 text-sm border-destructive text-destructive">
            🏍️ Términos de Cancelación
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Políticas de Cancelación del Servicio de Moto Fija
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cancellationPolicies.map((policy, index) => (
            <Card key={index} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border-2 ${policy.borderColor}`}>
              <CardHeader className={`items-center text-center p-6 ${policy.bgColor}`}>
                <div className={`p-3 rounded-full mb-3`}>
                  {policy.icon}
                </div>
                <CardTitle className={`text-xl font-semibold ${policy.textColor}`}>{policy.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6 bg-card">
                <ul className="space-y-2 text-sm text-foreground/80 text-center">
                  <li className="flex items-center justify-center gap-2">
                    <span>{policy.description}</span>
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
