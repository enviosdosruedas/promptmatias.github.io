import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BadgeDollarSign, Settings } from 'lucide-react'; // Using relevant icons

export function CompromisoEmprendedores() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-2">
             🔒 Nuestro Compromiso
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Optimiza tus Ventas Online
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Cobro de Valores Fijos Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <BadgeDollarSign className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">Cobro de Valores Fijos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground/80 text-center">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Recomendamos cobrar un valor fijo de envío a tus clientes para no limitar tus ventas por el costo de envío.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Precios Fijos Sugeridos Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                 {/* Using Settings icon as a placeholder for pricing strategy */}
                 <Settings className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">💰 Precios Fijos Sugeridos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground/80 text-center">
                <li className="flex items-center justify-center gap-2">
                   <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Cobrar un valor fijo de $3000/$4000</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Ventajas Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <CheckCircle className="h-8 w-8 text-primary" /> {/* Icon for Advantages */}
              </div>
              <CardTitle className="text-xl text-primary">Ventajas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-foreground/80 text-center">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Información en tiempo real para tus clientes</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Proceso de compra más simple</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                   <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                   <span>Mejor gestión de costos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
