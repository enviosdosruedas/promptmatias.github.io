
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HeroDeliveyMotoExpress } from '@/components/sections/HeroDeliveyMotoExpress'; // Import the new Hero component
import { MasInfoDeliveyMotoExpress } from '@/components/sections/MasInfoDeliveyMotoExpress'; // Import the new MasInfo component
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; // Import banner
import { CoberturaDeliveyMotoExpress } from '@/components/sections/CoberturaDeliveyMotoExpress'; // Import the new component
import { ContactoDeliveyMotoExpress } from '@/components/sections/ContactoDeliveyMotoExpress'; // Import the new contact section

export default function DeliveryMotoExpressPage() {
  return (
    <>
      <HeroDeliveyMotoExpress /> {/* Add the Hero component here */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="order-last md:order-first">
            <Image
              
              src="/img/Headeritems-2.webp"
              alt="Delivery Moto Express"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover aspect-video"
              data-ai-hint="fast motorcycle delivery"
            />
          </div>
          <div>
            {/* The h1 from the original content is now part of HeroDeliveyMotoExpress */}
            <p className="text-foreground/80 mb-6 md:text-lg">
              ¿Necesitas una entrega urgente? Nuestro servicio de delivery express en moto es la solución perfecta. Llevamos tus paquetes, comida o documentos a destino en el menor tiempo posible, con la agilidad y rapidez que solo una moto puede ofrecer en la ciudad.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-foreground/80">
              <li>Entregas ultra rápidas en minutos.</li>
              <li>Ideal para envíos de última hora.</li>
              <li>Cobertura amplia en toda la ciudad.</li>
              <li>Seguimiento en tiempo real (próximamente).</li>
              <li>Perfecto para comida, documentos y paquetes pequeños.</li>
            </ul>
            <Link href="/cotizador-envios-express">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Cotizar Envío Express Ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <MasInfoDeliveyMotoExpress /> {/* Integrate the MasInfoDeliveyMotoExpress component here */}
      <CoberturaDeliveyMotoExpress /> {/* Integrate the CoberturaDeliveyMotoExpress component here */}
      <ContactoDeliveyMotoExpress /> {/* Integrate the new contact section */}
      <BannerRedesSociales /> {/* Add banner at the end */}
    </>
  );
}
