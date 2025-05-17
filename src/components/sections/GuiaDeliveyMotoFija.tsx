import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Removed CardDescription
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Package, AlertCircle, Info, Film, Box, GlassWater, ShieldCheck } from 'lucide-react';

const embalajeItems = [
  { icon: <Film className="h-4 w-4 text-secondary flex-shrink-0" />, text: "Uso de film protector para mayor seguridad." },
  { icon: <Box className="h-4 w-4 text-secondary flex-shrink-0" />, text: "Sellado hermético para evitar derrames." },
  { icon: <ShieldCheck className="h-4 w-4 text-secondary flex-shrink-0" />, text: "Protección adecuada contra derrames y daños." },
];

const cargaItems = [
  { icon: <Box className="h-4 w-4 text-destructive flex-shrink-0" />, text: "Solo lo que quepa en la caja o mochila de delivery (40x40 cm)." },
  { icon: <GlassWater className="h-4 w-4 text-destructive flex-shrink-0" />, text: "No se aceptan bebidas en vasos (sin excepción)." },
  { icon: <Package className="h-4 w-4 text-secondary flex-shrink-0" />, text: "Todo debe estar correctamente embalado." },
  { icon: <AlertCircle className="h-4 w-4 text-secondary flex-shrink-0" />, text: "Dimensiones adecuadas para el transporte seguro." },
  { icon: <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />, text: "Distribución equilibrada de la carga en la moto." },
];

export function GuiaDeliveyMotoFija() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 text-sm border-primary text-primary">
            📖 Guía Práctica
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Recomendaciones Clave para tu Envío
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Embalaje Seguro Card */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="items-center text-center p-6 bg-background border-b">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <Package className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">Embalaje Seguro</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-6 space-y-3">
              <ul className="space-y-2 text-sm text-foreground/80">
                {embalajeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-2 text-xs text-foreground/60 border-t pt-3 mt-4">
                <Info className="h-3.5 w-3.5 flex-shrink-0 mt-px text-primary" />
                <span>Un embalaje adecuado asegura la integridad de tus productos durante el envío.</span>
              </div>
            </CardContent>
          </Card>

          {/* Límites de Carga Card */}
          <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <CardHeader className="items-center text-center p-6 bg-background border-b">
              <div className="p-3 bg-destructive/10 rounded-full mb-3">
                <AlertCircle className="h-10 w-10 text-destructive" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">Límites de Carga</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-6 space-y-3">
              <ul className="space-y-2 text-sm text-foreground/80">
                {cargaItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-2 text-xs text-foreground/60 border-t pt-3 mt-4">
                <Info className="h-3.5 w-3.5 flex-shrink-0 mt-px text-primary" />
                <span>Cumple con los límites establecidos para asegurar un transporte seguro y eficiente.</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
