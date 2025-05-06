import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PackageCheck, FileClock, Building } from 'lucide-react';
import { Resumenmensajeriaenviosexpress } from '@/components/sections/Resumenmensajeriaenviosexpress'; // Import the new section

export default function MensajeriaEnviosExpressPage() {
  return (
    <> {/* Added Fragment */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
              Mensajería y Envíos Express
            </h1>
            <p className="text-foreground/80 mb-6 md:text-lg">
              Soluciones de mensajería urgente para empresas y particulares. Realizamos trámites, entrega de documentos y envío de paquetes con la máxima velocidad y confiabilidad. Llevamos tus envíos importantes a donde necesites, cuando lo necesites.
            </p>
            <div className="space-y-6 mb-8">
               <div className="flex items-start gap-4">
                <PackageCheck className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Entrega de Paquetería Urgente</h3>
                  <p className="text-sm text-foreground/80">Envíos rápidos y seguros de paquetes pequeños y medianos.</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <FileClock className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Gestión de Trámites</h3>
                  <p className="text-sm text-foreground/80">Realizamos tus trámites bancarios, pagos y gestiones administrativas.</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <Building className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Servicio Corporativo</h3>
                  <p className="text-sm text-foreground/80">Soluciones personalizadas para las necesidades de mensajería de tu empresa.</p>
                </div>
              </div>
            </div>
            <Link href="/cotizador-envios-express">
               <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                 Solicitar Mensajería Express
               </Button>
            </Link>
          </div>
          <div className="order-first md:order-last">
             <Image
              src="https://picsum.photos/600/400"
              alt="Mensajería Express"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover aspect-video"
              data-ai-hint="urgent courier document"
            />
          </div>
        </div>
      </div>
      <Resumenmensajeriaenviosexpress /> {/* Integrate the new section */}
    </>
  );
}
