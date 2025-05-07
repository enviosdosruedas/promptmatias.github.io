import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ShieldCheck, Users, MessageSquare } from 'lucide-react'; // Using relevant icons

const commitments = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Entregas Aseguradas",
    description: "Cumplimiento puntual y eficiente en cada entrega.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Personal Capacitado",
    description: "Equipo formado y preparado para brindar servicio profesional.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Soporte Dedicado",
    description: "Atención personalizada y soporte continuo para resolver cualquier inquietud.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Satisfacción Garantizada",
    description: "Servicio de calidad que cumple con las necesidades de tu negocio.",
  },
];

export function CompromisoDeliveyMotoFija() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 text-sm border-secondary text-secondary">
            🔒 Nuestro Compromiso
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Garantías del Servicio de Moto Fija
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {commitments.map((commitment, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="items-center text-center p-6 bg-muted/30 border-b">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  {commitment.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-primary">{commitment.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <ul className="space-y-2 text-sm text-foreground/80 text-center">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>{commitment.description}</span>
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
