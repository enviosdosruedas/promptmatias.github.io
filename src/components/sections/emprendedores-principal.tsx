
import { Card, CardContent } from '@/components/ui/card'; // Added CardContent import
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Package, BadgePercent, Rocket } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"; // Import Carousel components

// Define image paths
const carouselImages = [
  { src: '/Emprendedoresbanner.webp', alt: 'Banner emprendedores principal' },
  { src: '/Emprendedoresbannerrapidas.webp', alt: 'Banner entregas rápidas' },
  { src: '/Emprendedoresbannerrapidas2.webp', alt: 'Banner entregas rápidas 2' },
  { src: '/Emprendedoresbannerrapidas3.webp', alt: 'Banner entregas rápidas 3' },
];

export function EmprendedoresPrincipal() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        {/* Top Section: Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Soluciones Especiales para Emprendedores
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Apoyamos a emprendedores con soluciones de mensajería y delivery confiables, rápidas y económicas. Optimiza tu logística y dedica más tiempo a hacer crecer tu negocio.
          </p>
        </div>

        {/* Grid Section: Features */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-16">
          <Card className="flex flex-col items-center text-center p-6 border-none shadow-none bg-transparent">
             <div className="bg-secondary/10 p-3 rounded-full mb-4">
               <Package className="h-10 w-10 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Logística confiable</h3>
            <p className="text-sm text-foreground/80">Soluciones adaptadas a tus necesidades.</p>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 border-none shadow-none bg-transparent">
            <div className="bg-secondary/10 p-3 rounded-full mb-4">
                <Rocket className="h-10 w-10 text-secondary" />
             </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Entrega rápida</h3>
            <p className="text-sm text-foreground/80">Optimiza tus tiempos de entrega.</p>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 border-none shadow-none bg-transparent">
             <div className="bg-secondary/10 p-3 rounded-full mb-4">
              <BadgePercent className="h-10 w-10 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Precios accesibles</h3>
            <p className="text-sm text-foreground/80">Tarifas competitivas para tu negocio.</p>
          </Card>
        </div>

        {/* Bottom Section: Why Choose Us with Carousel */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center bg-muted/40 p-8 rounded-lg">
           <div className="order-last md:order-first flex justify-center">
            {/* Carousel Implementation */}
            <Carousel className="w-full max-w-md"> {/* Adjust max-width as needed */}
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1"> {/* Optional padding around each item */}
                      <Card className="overflow-hidden shadow-lg"> {/* Card for visual grouping */}
                        <CardContent className="flex aspect-video items-center justify-center p-0">
                           <Image
                             src={image.src}
                             alt={image.alt}
                             width={600} // Adjust width/height based on your image aspect ratio preference
                             height={400}
                             className="object-cover w-full h-full" // Ensure image covers the card content area
                           />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-primary mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              En Mar del Plata, entendemos las necesidades únicas de los emprendedores. Nuestro equipo se dedica a garantizar que cada paquete llegue a tiempo, en perfectas condiciones y con costos que se ajusten a tu presupuesto.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
               <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                 <Link href="/envios-emprendedores">
                   Más Información
                 </Link>
               </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                 <Link href="/contacto">
                   Contacto
                 </Link>
               </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
