import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PiggyBank, Truck, Clock, Zap, CheckCircle, PhoneOutgoing, BadgePercent, Rocket, Star } from 'lucide-react';

export function CotizarPrincipal() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Calcula el Precio de tu Envío
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Calculá el costo de tu envío de forma rápida y sencilla. ¡Elige el servicio que más se adapte a tus necesidades!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Card Low Cost */}
          <Card className="flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
              <div className="bg-secondary/10 p-3 rounded-full mb-3">
                <PiggyBank className="h-10 w-10 text-secondary" />
              </div>
              <CardTitle className="text-primary text-2xl">Cotizador Envíos LowCost</CardTitle>
              <CardDescription className="text-foreground/70">
                Servicio económico con entregas entre 10:00 y 19:00. Ideal para envíos que no requieren horario específico.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pt-0 pb-6 px-6">
              <ul className="space-y-3 text-sm text-foreground/80 mb-6">
                <li className="flex items-center gap-2">
                  <BadgePercent className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Precio económico</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Entrega garantizada</span>
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span>Mismo día disponible (consultar)</span>
                </li>
              </ul>
            </CardContent>
             <div className="px-6 pb-6 mt-auto">
               <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                 <Link href="/cotizador-envios-lowcost">
                   Cotiza tu Envío Low Cost
                 </Link>
               </Button>
             </div>
          </Card>

          {/* Card Express */}
           <Card className="flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center text-center pb-4">
               <div className="bg-accent/10 p-3 rounded-full mb-3">
                 <Zap className="h-10 w-10 text-accent" />
               </div>
              <CardTitle className="text-primary text-2xl">Cotizador Envíos Express</CardTitle>
               <CardDescription className="text-foreground/70">
                 Entregas garantizadas el mismo día para pedidos antes de las 15:00.
               </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pt-0 pb-6 px-6">
               <ul className="space-y-3 text-sm text-foreground/80 mb-6">
                <li className="flex items-center gap-2">
                   <Rocket className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Entrega mismo día</span>
                </li>
                <li className="flex items-center gap-2">
                   <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Rango horario a elección</span>
                </li>
                <li className="flex items-center gap-2">
                   <Star className="h-4 w-4 text-accent flex-shrink-0"/> {/* Assuming Star icon for priority */}
                  <span>Servicio prioritario</span>
                </li>
              </ul>
            </CardContent>
             <div className="px-6 pb-6 mt-auto">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                 <Link href="/cotizador-envios-express">
                  Cotiza tu Envío Express
                 </Link>
               </Button>
             </div>
          </Card>
        </div>
         <div className="text-center mt-12">
          <p className="text-lg text-primary mb-2">¿Tenés dudas?</p>
           <p className="text-foreground/80 mb-4">¡Comunícate con nosotros directamente!</p>
           {/* Using default button style for WhatsApp, consider a custom green if needed */}
           <Button asChild variant="outline" size="lg" className="border-green-600 text-green-700 hover:bg-green-50">
             <Link href="https://wa.me/5492236602699" target="_blank" rel="noopener noreferrer">
               <PhoneOutgoing className="mr-2 h-5 w-5" /> WhatsApp: 2236602699
             </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
