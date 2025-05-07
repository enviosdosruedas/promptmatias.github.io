import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ShieldCheck, Zap, PiggyBank, Mail, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-background to-secondary/10 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          {/* Text Content Block */}
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left animate-fade-in">
            {/* Tagline */}
            <div className="animate-fade-in animation-delay-200">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary flex items-center justify-center lg:justify-start">
                <ShieldCheck className="mr-2 h-5 w-5 text-secondary" />
                Tu Solución Confiable para Envíos
              </span>
            </div>
            {/* Main Title */}
            <div className="animate-fade-in animation-delay-400">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-accent flex items-center justify-center lg:justify-start">
                Envios DosRuedas
              </h1>
            </div>
            {/* Description */}
            <div className="animate-fade-in [animation-delay:600ms]">
              <p className="max-w-[600px] text-foreground/80 md:text-xl mx-auto lg:mx-0">
                Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row items-center justify-center lg:justify-start animate-fade-in [animation-delay:800ms] pt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent/50 animate-subtle-pulse w-full sm:w-auto">
                    <Calculator className="mr-2 h-5 w-5" /> Cotiza tu Envío <ChevronDown className="ml-2 h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/cotizador-envios-express" className="flex items-center w-full text-sm p-2 hover:bg-accent/10 rounded-md">
                      <Zap className="mr-2 h-4 w-4 text-accent" /> Express
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/cotizador-envios-lowcost" className="flex items-center w-full text-sm p-2 hover:bg-accent/10 rounded-md">
                      <PiggyBank className="mr-2 h-4 w-4 text-secondary" /> Low Cost
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/contacto" className="w-full sm:w-auto">
                 <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground transition-all hover:scale-105 w-full">
                   <Mail className="mr-2 h-5 w-5" /> Contacto
                 </Button>
               </Link>
            </div>
          </div>
          {/* Image Block */}
          <div className="flex justify-center animate-fade-in [animation-delay:1000ms]">
            <Image
              src="/favicon.svg"
              alt="EnviosDosRuedas Logo Ilustrativo"
              width={450} 
              height={450}
              priority 
              className="mx-auto aspect-square overflow-hidden rounded-xl object-contain lg:w-[500px] xl:w-[550px] transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3 shadow-2xl"
              data-ai-hint="delivery logo motorcycle"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
