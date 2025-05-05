import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, Package, Clock } from 'lucide-react';

export function VisionGlobal() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Nuestra Visión Global
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Datos que respaldan nuestra calidad y compromiso. ¡Descubre por qué somos la solución confiable para tus envíos!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col items-center text-center shadow-md">
            <CardHeader className="p-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Star className="h-8 w-8 text-secondary" />
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <h3 className="text-4xl font-bold text-primary">4.9</h3>
              <p className="text-sm text-foreground/80 mt-1">Calificación en Google</p>
              <p className="text-lg text-yellow-500 mt-1">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </p>
            </CardContent>
          </Card>
           <Card className="flex flex-col items-center text-center shadow-md">
            <CardHeader className="p-4">
               <div className="bg-secondary/10 p-3 rounded-full">
                <Package className="h-8 w-8 text-secondary" />
               </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <h3 className="text-4xl font-bold text-primary">+1000</h3>
              <p className="text-sm text-foreground/80 mt-1">Envíos Mensuales</p>
                 {/* Optional extra line if needed */}
                 <p className="text-lg text-transparent mt-1">.</p>
            </CardContent>
          </Card>
           <Card className="flex flex-col items-center text-center shadow-md">
            <CardHeader className="p-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Clock className="h-8 w-8 text-secondary" />
               </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <h3 className="text-2xl font-semibold text-primary mb-2">Horario</h3>
               <p className="text-sm text-foreground/80 leading-snug">
                Lunes a Viernes<br />
                09:00 a 18:00 hs<br />
                Sábados<br />
                09:00 a 15:00 hs
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
