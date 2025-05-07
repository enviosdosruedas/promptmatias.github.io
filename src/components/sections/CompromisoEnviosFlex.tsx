
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, AlertTriangle, Star } from 'lucide-react'; // Using relevant icons

const commitmentItems = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Zona de Entrega",
    items: [
      { text: "Toda la ciudad de Mar del Plata.", icon: <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" /> },
    ],
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-primary" />,
    title: "Adicionales",
    items: [
      { text: "En caso de no encontrarse nadie en la dirección de entrega, el envío será reprogramado y tendrá un costo adicional del 50% del valor del envío.", icon: <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" /> },
      { text: "En caso de condiciones climáticas adversas (Lluvia/Calle Mojada) se cobrará un adicional del 50% del valor del envío.", icon: <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" /> },
    ],
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Ventajas",
    items: [
      { text: "Información en tiempo real para tus clientes.", icon: <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" /> },
      { text: "Proceso de Entrega confiable.", icon: <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" /> },
      { text: "Mejor gestión de tus envíos.", icon: <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" /> },
    ],
  },
];

export function CompromisoEnviosFlex() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-2 text-sm">
            🔒 Nuestro Compromiso
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Optimiza tus Ventas Online con Envíos Flex
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {commitmentItems.map((commitment, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="items-center text-center p-6 bg-muted/30 border-b">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  {commitment.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-primary">{commitment.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <ul className="space-y-3 text-sm text-foreground/80">
                  {commitment.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
