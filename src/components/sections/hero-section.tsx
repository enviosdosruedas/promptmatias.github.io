import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-secondary via-background to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
           <Image
            src="https://picsum.photos/600/400"
            alt="Envío Rápido"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg"
            data-ai-hint="delivery motorcycle city"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                Envios Rápidos y Seguros en Dos Ruedas
              </h1>
              <p className="max-w-[600px] text-foreground/80 md:text-xl">
                Tu solución de mensajería y delivery express en la ciudad. Confiable, eficiente y siempre a tiempo.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/cotizador-envios-express">
                 <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                   Cotizá tu envío Express
                 </Button>
              </Link>
               <Link href="/cotizador-envios-lowcost">
                 <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                   Cotizá tu envío Low Cost
                 </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
