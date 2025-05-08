import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, Package, Clock } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn for conditional classes

export function VisionGlobal() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5"> {/* Darker background using primary with opacity */}
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Nuestra Visión Global
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 animate-fade-in animation-delay-200">
            Datos que respaldan nuestra calidad y compromiso. ¡Descubre por qué somos la solución confiable para tus envíos!
          </p>
           <div className="mt-4 h-1 w-16 bg-accent mx-auto animate-fade-in animation-delay-400"></div> {/* Accent line */}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Calificación Google */}
          <Card className="flex flex-col items-center text-center shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-200 rounded-lg overflow-hidden border border-border">
            <CardHeader className="p-6">
              <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4">
                <Star className="h-10 w-10 text-secondary" />
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <h3 className="text-5xl font-bold text-primary mb-1">4.9</h3>
              <p className="text-sm font-medium text-foreground/80 mt-1">Calificación en Google</p>
              <p className="text-xl text-yellow-500 mt-2">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </p>
            </CardContent>
          </Card>
           {/* Card 2: Envíos Mensuales */}
           <Card className="flex flex-col items-center text-center shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-400 rounded-lg overflow-hidden border border-border">
            <CardHeader className="p-6">
               <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4">
                <Package className="h-10 w-10 text-secondary" />
               </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <h3 className="text-5xl font-bold text-primary mb-1">+1000</h3>
              <p className="text-sm font-medium text-foreground/80 mt-1">Envíos Mensuales</p>
                 {/* Empty space to maintain height consistency */}
                 <p className="text-xl text-transparent mt-2">.</p>
            </CardContent>
          </Card>
           {/* Card 3: Horario */}
           <Card className="flex flex-col items-center text-center shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-[600ms] rounded-lg overflow-hidden border border-border">
            <CardHeader className="p-6">
              <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4">
                <Clock className="h-10 w-10 text-secondary" />
               </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <h3 className="text-2xl font-semibold text-primary mb-3">Horario</h3>
               <p className="text-base text-foreground/80 leading-relaxed">
                Lunes a Viernes<br />
                <span className="font-medium text-foreground">09:00 a 18:00 hs</span><br />
                Sábados<br />
                <span className="font-medium text-foreground">09:00 a 15:00 hs</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
