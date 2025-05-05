import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DeliveryMotoFijaPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
            Delivery con Moto Fija
          </h1>
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
  );
}