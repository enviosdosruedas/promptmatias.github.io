import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calculator, PhoneOutgoing } from 'lucide-react';

// WhatsApp SVG Icon Component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.579 2.168 2.129-.565z" />
  </svg>
);


export function Resumenmensajeriaenviosexpress() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30"> {/* Use muted background */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Entregas rápidas y eficientes para tus necesidades urgentes
            </h2>
            <p className="text-foreground/80 mb-6 md:text-lg leading-relaxed">
              Nuestro servicio Express está diseñado para aquellas situaciones donde el tiempo es crucial. Garantizamos la entrega el mismo día para todos los pedidos realizados antes de las 15:00, con la posibilidad de elegir un rango horario específico.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-foreground">Entrega el mismo día</h3>
                  <p className="text-sm text-muted-foreground">Para pedidos realizados antes de las 15:00, garantizamos la entrega en el mismo día.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-foreground">Rango horario personalizado</h3>
                  <p className="text-sm text-muted-foreground">Elige el rango horario que mejor se adapte a tus necesidades para recibir o enviar tu paquete.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-foreground">Servicio prioritario</h3>
                  <p className="text-sm text-muted-foreground">Tus envíos tienen prioridad sobre otros servicios, asegurando la máxima rapidez.</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                <Link href="/cotizador-envios-express">
                  <Calculator className="mr-2 h-4 w-4" />
                  Cotiza tu Envío
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 hover:text-green-700 shadow-md">
                <Link
                  href="https://wa.me/+542236602699?text=Hola!%20Me%20interesa%20el%20servicio%20de%20Envíos%20Express.%20Quisiera%20más%20información."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="mr-2 h-4 w-4" />
                  Consultar por WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            {/* Optional subtle background shape */}
            {/* <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl opacity-30 transform -translate-x-4 translate-y-4"></div> */}
            <Image
              src="https://picsum.photos/600/400"
              alt="Servicio de mensajería express en moto"
              width={600}
              height={400}
              className="rounded-lg shadow-xl relative z-10 object-cover aspect-video"
              data-ai-hint="motorcycle delivery package"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
