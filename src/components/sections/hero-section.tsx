import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-background to-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Tu Solución Confiable para Envíos
            </span>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
              Envios DosRuedas
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl mx-auto lg:mx-0">
              Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
               {/* Main CTA Button using Dropdown */}
               <DropdownMenu>
                 <DropdownMenuTrigger asChild>
                   <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Cotiza tu Envío <ChevronDown className="ml-2 h-5 w-5" />
                    </Button>
                 </DropdownMenuTrigger>
                 <DropdownMenuContent align="start">
                    <DropdownMenuItem asChild>
                      <Link href="/cotizador-envios-express">Express</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/cotizador-envios-lowcost">Low Cost</Link>
                    </DropdownMenuItem>
                 </DropdownMenuContent>
               </DropdownMenu>

               {/* Contact Button */}
              <Link href="/contacto">
                 <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                   Contacto
                 </Button>
               </Link>
            </div>
          </div>
          <div className="flex justify-center">
             {/* Use the specified SVG logo */}
              <Image
                src="/favicon.svg"
                alt="EnviosDosRuedas Logo"
                width={400}
                height={400}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-contain lg:w-[500px] xl:w-[550px]"
                // Removed data-ai-hint as the logo is now specified
              />
          </div>
        </div>
      </div>
    </section>
  );
}

// Need to import DropdownMenu components and ChevronDown icon
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
