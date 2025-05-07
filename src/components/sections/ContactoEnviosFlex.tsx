import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BarChart, MessageCircle, FileText } from 'lucide-react';

export function ContactoEnviosFlex() {
  const recommendations = [
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Análisis de Entregas",
      description: "Mantener una buena reputación y entregas aseguradas en el día mejora tus ventas.",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Comunicación Clara",
      description: "Comunica de manera transparente en caso de cobrar algún adicional a tu cliente.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Acuerdos con Clientes",
      description: "Establece términos y condiciones claros para tus servicios de envío.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 text-sm border-secondary text-secondary">
            📘 Recomendaciones
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Recomendaciones Generales para Envíos Flex
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {recommendations.map((item, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="items-center text-center p-6 bg-muted/30 border-b">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  {item.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <ul className="space-y-2 text-sm text-foreground/80 text-center">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>{item.description}</span>
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
