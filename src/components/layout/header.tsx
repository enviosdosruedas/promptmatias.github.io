'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import '@/styles/navbar.css'; // Import the new CSS file
import * as React from "react";


// Separate component for navigation items to avoid repetition
const NavItems = ({ className, closeSheet }: { className?: string; closeSheet?: () => void }) => (
  // Use nav-list class for styling from navbar.css
  <ul className={cn("nav-list", className)}>
     <li>
      <Link href="/" className="nav-link" onClick={closeSheet}>
        Inicio
      </Link>
    </li>
    <li>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
           {/* Apply nav-link styles and add dropdown-icon for spacing/arrow */}
           <Button variant="ghost" className="nav-link dropdown-trigger">
             Servicios <ChevronDown className="dropdown-icon" />
           </Button>
        </DropdownMenuTrigger>
        {/* Apply dropdown-content styles */}
        <DropdownMenuContent className="dropdown-content">
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
           <Button variant="ghost" className="nav-link dropdown-trigger">
             Cotizar <ChevronDown className="dropdown-icon" />
           </Button>
        </DropdownMenuTrigger>
         <DropdownMenuContent className="dropdown-content">
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
            <Button variant="ghost" className="nav-link dropdown-trigger">
              Nosotros <ChevronDown className="dropdown-icon" />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="dropdown-content">
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
      <Link href="/contacto" className="nav-link" onClick={closeSheet}>
        Contacto
      </Link>
    </li>
  </ul>
);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
   // Add an overlay div that is conditionally rendered
   const NavOverlay = () => (
     <div
       className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
       onClick={closeMobileMenu} // Close menu when overlay is clicked
     />
   );


  return (
    // Use main-nav class for sticky behavior and styling from navbar.css
    <header className="main-nav">
      {/* Use nav-container for max-width and padding */}
      <nav className="nav-container">
        {/* Logo Section - use nav-logo class */}
        <Link href="/" className="nav-logo">
           <Image src="/favicon.svg" alt="EnviosDosRuedas Logo" width={40} height={40} className="logo-image" />
          <div className="logo-text">
            <h1 className="logo-title">Envios DosRuedas</h1>
            <p>Tu Solución Confiable</p> {/* Adjusted text */}
          </div>
        </Link>

        {/* Desktop Navigation - hidden on small screens */}
         {/* Use nav-menu class, hidden on md and below */}
         <div className="nav-menu hidden md:flex">
           <NavItems />
         </div>


        {/* Mobile Menu Button & Sheet */}
         {/* Use Sheet for the off-canvas menu, trigger is styled */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
             <Button variant="ghost" size="icon" className="mobile-nav-toggle md:hidden">
               <Menu className="h-6 w-6" /> {/* Adjusted icon size */}
               <span className="sr-only">Abrir Menú</span>
             </Button>
          </SheetTrigger>
          {/* Apply nav-menu class and conditional 'active' class */}
           <SheetContent side="left" className={cn("nav-menu p-0", isMobileMenuOpen ? 'active' : '')} >
              {/* Logo inside mobile menu */}
              <Link href="/" className="nav-logo p-4 border-b border-gray-700/50" onClick={closeMobileMenu}>
                <Image src="/favicon.svg" alt="EnviosDosRuedas Logo" width={35} height={35} className="logo-image" />
                <div className="logo-text">
                  <h1 className="logo-title text-base">Envios DosRuedas</h1>
                   <p className="text-xs">Tu Solución Confiable</p>
                 </div>
              </Link>
              {/* Mobile Navigation Items */}
              <div className="p-4">
                {/* Pass closeSheet function */}
                 <NavItems className="flex-col items-start text-base gap-0" closeSheet={closeMobileMenu} />
              </div>
          </SheetContent>
        </Sheet>
      </nav>
       {/* Render overlay conditionally */}
       {isMobileMenuOpen && <NavOverlay />}
    </header>
  );
}
