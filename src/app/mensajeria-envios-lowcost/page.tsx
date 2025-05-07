
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PiggyBank, CalendarDays, Map } from 'lucide-react';
import { HeroMenEnvLowCost } from '@/components/sections/HeroMenEnvLowCost'; 
import { PreciosMenEnvLowCost } from '@/components/sections/PreciosMenEnvLowCost'; 
import { ContactMenEnvLowCost } from '@/components/sections/ContactMenEnvLowCost'; 
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mensajería Low Cost | Envios DosRuedas | Envíos Económicos',
  description: 'Ahorra en tus envíos con nuestro servicio de mensajería low cost en Mar del Plata. Entregas programadas y flexibles a precios bajos.',
};

export default function MensajeriaEnviosLowcostPage() {
  return (
    <>
      <HeroMenEnvLowCost /> 
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="order-last md:order-first">
            <Image
             
              src="/img/Headeritems-2.webp"
              alt="Mensajería Low Cost"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover aspect-video"
              data-ai-hint="saving money delivery"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
              Mensajería y Envíos Low Cost
            </h1>
            <p className="text-foreground/80 mb-6 md:text-lg">
              ¿No tenés apuro? Ahorrá en tus envíos con nuestro servicio de mensajería low cost. Programamos tus entregas en rutas optimizadas para ofrecerte el mejor precio sin sacrificar la seguridad y confiabilidad.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <PiggyBank className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Precios Económicos</h3>
                  <p className="text-sm text-foreground/80">La opción más conveniente para envíos no urgentes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CalendarDays className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Envíos Programados</h3>
                  <p className="text-sm text-foreground/80">Planifica tus entregas con anticipación y ahorra dinero.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Map className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Rutas Optimizadas</h3>
                  <p className="text-sm text-foreground/80">Agrupamos envíos para ofrecerte tarifas más bajas.</p>
                </div>
              </div>
            </div>
            <Link href="/cotizador-envios-lowcost">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Cotizar Envío Low Cost
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <PreciosMenEnvLowCost /> 
      <ContactMenEnvLowCost /> 
      <BannerRedesSociales />
    </>
  );
}
