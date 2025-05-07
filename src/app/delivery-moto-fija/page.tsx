
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HeroDeliveyMotoFija } from '@/components/sections/HeroDeliveyMotoFija'; 
import { CaracteristicasDeliveyMotoFija } from '@/components/sections/CaracteristicasDeliveyMotoFija'; 
import { CancelacionDeliveyMotoFija } from '@/components/sections/CancelacionDeliveyMotoFija'; 
import { CompromisoDeliveyMotoFija } from '@/components/sections/CompromisoDeliveyMotoFija'; 
import { GuiaDeliveyMotoFija } from '@/components/sections/GuiaDeliveyMotoFija'; 
import { ContactoDeliveyMotoFija } from '@/components/sections/ContactoDeliveyMotoFija'; 
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delivery Moto Fija | Envios DosRuedas | Repartidor Dedicado',
  description: 'Servicio de delivery con moto fija en Mar del Plata. Repartidor exclusivo para tu negocio, ideal para entregas regulares y programadas.',
};

export default function DeliveryMotoFijaPage() {
  return (
    <>
      <HeroDeliveyMotoFija /> 
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            
            <p className="text-foreground/80 mb-6 md:text-lg">
              Optimiza tus entregas regulares con nuestro servicio de delivery con moto fija. Asignamos un repartidor exclusivo para tu negocio, garantizando puntualidad, conocimiento de tus rutas y un servicio personalizado. Ideal para restaurantes, comercios y empresas con envíos frecuentes.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-foreground/80">
              <li>Repartidor dedicado y familiarizado con tus necesidades.</li>
              <li>Horarios flexibles adaptados a tu operatoria.</li>
              <li>Mayor eficiencia en rutas conocidas.</li>
              <li>Comunicación directa y ágil.</li>
              <li>Ideal para envíos recurrentes y programados.</li>
            </ul>
            <Link href="/contacto">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Consultar por Moto Fija
              </Button>
            </Link>
          </div>
          <div>
            <Image
             
              src="/img/Headeritems-2.webp"
              alt="Delivery Moto Fija"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover aspect-video"
              data-ai-hint="delivery motorcycle restaurant"
            />
          </div>
        </div>
      </div>
      <CaracteristicasDeliveyMotoFija /> 
      <GuiaDeliveyMotoFija /> 
      <CancelacionDeliveyMotoFija /> 
      <CompromisoDeliveyMotoFija /> 
      <ContactoDeliveyMotoFija /> 
      <BannerRedesSociales />
    </>
  );
}
