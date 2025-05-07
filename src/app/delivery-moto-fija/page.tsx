
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HeroDeliveyMotoFija } from '@/components/sections/HeroDeliveyMotoFija'; // Import the new Hero component
import { CaracteristicasDeliveyMotoFija } from '@/components/sections/CaracteristicasDeliveyMotoFija'; // Import the new Caracteristicas component
import { CancelacionDeliveyMotoFija } from '@/components/sections/CancelacionDeliveyMotoFija'; // Import the new Cancelacion component
import { CompromisoDeliveyMotoFija } from '@/components/sections/CompromisoDeliveyMotoFija'; // Import the new Compromiso component
import { GuiaDeliveyMotoFija } from '@/components/sections/GuiaDeliveyMotoFija'; // Import the new Guia component
import { ContactoDeliveyMotoFija } from '@/components/sections/ContactoDeliveyMotoFija'; // Import the new Contacto component
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales';


export default function DeliveryMotoFijaPage() {
  return (
    <>
      <HeroDeliveyMotoFija /> {/* Add the Hero component here */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            {/* The h1 from the original content is now part of HeroDeliveyMotoFija */}
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
              src="https://picsum.photos/600/400"
              alt="Delivery Moto Fija"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover aspect-video"
              data-ai-hint="delivery motorcycle restaurant"
            />
          </div>
        </div>
      </div>
      <CaracteristicasDeliveyMotoFija /> {/* Integrate the Caracteristicas component here */}
      <GuiaDeliveyMotoFija /> {/* Integrate the GuiaDeliveyMotoFija component here */}
      <CancelacionDeliveyMotoFija /> {/* Integrate the Cancelacion component here */}
      <CompromisoDeliveyMotoFija /> {/* Integrate the Compromiso component here */}
      <ContactoDeliveyMotoFija /> {/* Integrate the new Contacto component here */}
      <BannerRedesSociales />
    </>
  );
}
