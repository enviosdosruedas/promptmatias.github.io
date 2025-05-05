import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DeliveryMotoExpressPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
       <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="order-last md:order-first">
           <Image
            src="https://picsum.photos/600/400"
            alt="Delivery Moto Express"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover aspect-video"
            data-ai-hint="fast motorcycle delivery"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
            Delivery Moto Express
          </h1>
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
  );
}
