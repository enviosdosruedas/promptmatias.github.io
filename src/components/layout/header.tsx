'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react'; // Removed Bike
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import * as React from "react";


// Separate component for navigation items to avoid repetition
const NavItems = ({ className, closeSheet }: { className?: string; closeSheet?: () => void }) => (
  <ul className={cn("flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6", className)}>
     <li>
      <Link href="/" className="text-foreground/80 hover:text-foreground font-medium transition-colors" onClick={closeSheet}>
        Inicio
      </Link>
    </li>
    <li>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground font-medium p-0 h-auto hover:bg-transparent data-[state=open]:bg-transparent">
            Servicios <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="/mensajeria-envios-express" onClick={closeSheet}>Envíos Express</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
             <Link href="/mensajeria-envios-lowcost" onClick={closeSheet}>Envíos LowCost</Link>
          </DropdownMenuItem>
           <DropdownMenuItem asChild>
            <Link href="/delivery-moto-express" onClick={closeSheet}>Moto Express</Link>
          </DropdownMenuItem>
           <DropdownMenuItem asChild>
             <Link href="/delivery-moto-fija" onClick={closeSheet}>Moto Fija</Link>
           </DropdownMenuItem>
           <DropdownMenuItem asChild>
             <Link href="/envios-emprendedores" onClick={closeSheet}>Plan Emprendedores</Link>
           </DropdownMenuItem>
           <DropdownMenuItem asChild>
             <Link href="/enviosflex" onClick={closeSheet}>Envios Flex</Link>
           </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
    <li>
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
           <Button variant="ghost" className="text-foreground/80 hover:text-foreground font-medium p-0 h-auto hover:bg-transparent data-[state=open]:bg-transparent">
             Cotizar <ChevronDown className="ml-1 h-4 w-4" />
           </Button>
        </DropdownMenuTrigger>
         <DropdownMenuContent>
           <DropdownMenuItem asChild>
             <Link href="/cotizador-envios-express" onClick={closeSheet}>Cotizar Express</Link>
           </DropdownMenuItem>
           <DropdownMenuItem asChild>
             <Link href="/cotizador-envios-lowcost" onClick={closeSheet}>Cotizar LowCost</Link>
           </DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
    </li>
    <li>
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button variant="ghost" className="text-foreground/80 hover:text-foreground font-medium p-0 h-auto hover:bg-transparent data-[state=open]:bg-transparent">
             Nosotros <ChevronDown className="ml-1 h-4 w-4" />
           </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent>
           <DropdownMenuItem asChild>
             <Link href="/sobre-nosotros" onClick={closeSheet}>Sobre Nosotros</Link>
           </DropdownMenuItem>
           <DropdownMenuItem asChild>
             <Link href="/preguntasfrecuentes" onClick={closeSheet}>Preguntas Frecuentes</Link>
           </DropdownMenuItem>
           <DropdownMenuItem asChild>
            <Link href="/nuestrasredes" onClick={closeSheet}>Nuestras Redes</Link>
           </DropdownMenuItem>
            {/* Add Noticias link if page exists */}
            {/* <DropdownMenuItem asChild>
              <Link href="/noticias" onClick={closeSheet}>Noticias</Link>
            </DropdownMenuItem> */}
         </DropdownMenuContent>
       </DropdownMenu>
    </li>
    <li>
      <Link href="/contacto" className="text-foreground/80 hover:text-foreground font-medium transition-colors" onClick={closeSheet}>
        Contacto
      </Link>
    </li>
  </ul>
);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-2">
           {/* Use the specified SVG logo */}
           <Image src="/favicon.svg" alt="EnviosDosRuedas Logo" width={40} height={40} />
          <div>
            <h1 className="text-lg font-bold text-primary">Envios DosRuedas</h1>
            <p className="text-xs text-foreground/70">Tu Solución Confiable para Envíos</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavItems />
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir Menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[320px] p-6">
             {/* Logo and Title in Mobile Menu */}
             <Link href="/" className="flex items-center gap-2 mb-6" onClick={closeMobileMenu}>
                 {/* Use the specified SVG logo */}
                 <Image src="/favicon.svg" alt="EnviosDosRuedas Logo" width={40} height={40} />
                <div>
                  <h1 className="text-lg font-bold text-primary">Envios DosRuedas</h1>
                   <p className="text-xs text-foreground/70">Tu Solución Confiable</p>
                </div>
             </Link>
            {/* Mobile Navigation */}
            <div className="flex flex-col gap-4">
               <NavItems className="flex-col items-start text-base" closeSheet={closeMobileMenu} />
            </div>
          </SheetContent>
        </Sheet>

      </nav>
    </header>
  );
}
