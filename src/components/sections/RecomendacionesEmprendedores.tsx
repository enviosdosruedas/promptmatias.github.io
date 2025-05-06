import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, MessageCircle, FileText, CheckCircle } from 'lucide-react'; // Import relevant icons

export function RecomendacionesEmprendedores() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 border-secondary text-secondary">
             📘 Recomendaciones
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Recomendaciones Generales
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Análisis de Costos Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <BarChart className="h-8 w-8 text-primary" /> {/* Icon for Cost Analysis */}
              </div>
              <CardTitle className="text-xl text-primary">Análisis de Costos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground/80 text-center">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Revisa periódicamente tus costos de envío para mantener precios competitivos.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Comunicación Clara Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <MessageCircle className="h-8 w-8 text-primary" /> {/* Icon for Clear Communication */}
              </div>
              <CardTitle className="text-xl text-primary">Comunicación Clara</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground/80 text-center">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Comunica de manera transparente tus tarifas fijas de envío a tus clientes.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Acuerdos con Clientes Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                 <FileText className="h-8 w-8 text-primary" /> {/* Icon for Agreements */}
              </div>
              <CardTitle className="text-xl text-primary">Acuerdos con Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground/80 text-center">
                <li className="flex items-center justify-center gap-2">
                   <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                   <span>Establece términos y condiciones claros para tus servicios de envío.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
