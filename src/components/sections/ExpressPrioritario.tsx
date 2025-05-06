
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Rocket } from 'lucide-react'; // Import icons

export function ExpressPrioritario() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-accent/10"> {/* Using accent color with opacity */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ¿Necesitas un servicio prioritario?
            </h2>
            <p className="text-foreground/80 md:text-lg leading-relaxed mb-6">
              Con nuestro servicio Express, tus envíos tienen la máxima prioridad. Ideal para documentos importantes, productos perecederos o cualquier entrega que no pueda esperar.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              <Link href="/cotizador-envios-express">
                 <Rocket className="mr-2 h-4 w-4" /> Cotiza ahora
              </Link>
            </Button>
          </div>

          {/* Right Column */}
          <div className="bg-background p-6 rounded-lg shadow-md">
             <h3 className="text-xl font-semibold text-primary mb-4">
               Beneficios del servicio Express
             </h3>
             <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-foreground/80">Entregas en el mismo día para pedidos antes de las 15:00</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-foreground/80">Seguimiento en tiempo real de tu envío (Próximamente)</span>
              </li>
              <li className="flex items-start gap-3">
                 <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                 <span className="text-foreground/80">Confirmación de entrega inmediata</span>
              </li>
              <li className="flex items-start gap-3">
                 <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                 <span className="text-foreground/80">Manipulación cuidadosa de todos los paquetes</span>
              </li>
              <li className="flex items-start gap-3">
                 <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-foreground/80">Personal profesional y capacitado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
