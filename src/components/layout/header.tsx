'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, ChevronDown, Home, Package, Calculator, Users, Mail, Bike, Clock, Store, Box, PiggyBank, Zap, Building, HelpCircle, Hash } from 'lucide-react'; // Added more icons
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import '@/styles/navbar.css'; // Import the new CSS file
import * as React from "react";


// Define navigation structure for reuse
const navItems = [
  { title: 'Inicio', href: '/', icon: Home },
  {
    title: 'Servicios',
    icon: Package,
    subItems: [
      { title: 'Envíos Express', href: '/mensajeria-envios-express', icon: Zap },
      { title: 'Envíos LowCost', href: '/mensajeria-envios-lowcost', icon: PiggyBank },
      { title: 'Moto Express', href: '/delivery-moto-express', icon: Bike },
      { title: 'Moto Fija', href: '/delivery-moto-fija', icon: Clock },
      { title: 'Plan Emprendedores', href: '/envios-emprendedores', icon: Store },
      { title: 'Envios Flex', href: '/enviosflex', icon: Box },
    ],
  },
  {
    title: 'Cotizar',
    icon: Calculator,
    subItems: [
      { title: 'Cotizar Express', href: '/cotizador-envios-express', icon: Zap },
      { title: 'Cotizar LowCost', href: '/cotizador-envios-lowcost', icon: PiggyBank },
    ],
  },
  {
    title: 'Nosotros',
    icon: Users,
    subItems: [
      { title: 'Sobre Nosotros', href: '/sobre-nosotros', icon: Building },
      { title: 'Preguntas Frecuentes', href: '/preguntasfrecuentes', icon: HelpCircle },
      { title: 'Nuestras Redes', href: '/nuestrasredes', icon: Hash },
      // { title: 'Noticias', href: '/noticias', icon: Newspaper }, // Uncomment if needed
    ],
  },
  { title: 'Contacto', href: '/contacto', icon: Mail },
];


// Component for rendering navigation items (Desktop and Mobile)
const NavItemsRenderer = ({ items, isMobile, closeSheet }: { items: typeof navItems; isMobile: boolean; closeSheet?: () => void }) => (
  <ul className={cn("nav-list", isMobile ? "flex-col items-start gap-0" : "items-center gap-1")}>
    {items.map((item) => (
      <li key={item.title} className={cn(isMobile ? "mobile-nav-item w-full" : "desktop-nav-item")}>
        {item.subItems ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(isMobile ? 'mobile-dropdown-button justify-between' : 'nav-link desktop-dropdown-trigger')}
              >
                 <span className="flex items-center gap-2"> {/* Wrap icon and text */}
                    {item.icon && <item.icon className="nav-icon" />}
                    {item.title}
                 </span>
                 <ChevronDown className={cn("dropdown-icon", isMobile && "ml-auto")} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={cn("dropdown-menu", isMobile && "w-[calc(100%-2rem)] ml-4 mt-1")}> {/* Adjust width/margin for mobile */}
              {item.subItems.map((subItem) => (
                <DropdownMenuItem key={subItem.title} asChild className={cn(isMobile ? 'mobile-dropdown-item' : 'dropdown-item')}>
                  <Link href={subItem.href} onClick={closeSheet}>
                    {subItem.icon && <subItem.icon className="nav-icon mr-2" />} {/* Sub-item icon */}
                    {subItem.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href={item.href!} className={cn(isMobile ? 'mobile-nav-link' : 'nav-link')} onClick={closeSheet}>
            {item.icon && <item.icon className="nav-icon" />}
            {item.title}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Overlay component
  const NavOverlay = () => (
    <div
      className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
      onClick={closeMobileMenu} // Close menu when overlay is clicked
    />
  );

  return (
    <header className="main-nav"> {/* Use main-nav class from navbar.css */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo y nombre */}
          <Link href="/" className="flex items-center space-x-2 py-2 nav-logo">
            <Image
              src="/favicon.svg" // Use the specified SVG logo
              alt="Envios DosRuedas Logo"
              width={50} // Adjust size as needed
              height={50}
              className="h-10 sm:h-12 w-auto transition-all logo-image" // Added logo-image class
            />
            <div className="hidden md:block logo-text">
              <h1 className="text-white text-lg sm:text-xl font-bold leading-tight logo-title">Envios DosRuedas</h1>
              <p className="text-mikado_yellow text-xs">Tu Solución Confiable</p>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:block">
            <NavItemsRenderer items={navItems} isMobile={false} />
          </div>

          {/* Menú móvil Toggle button */}
           {/* Use Sheet for the off-canvas menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white focus:outline-none p-2 rounded-md hover:bg-persian_blue-700 transition-colors mobile-menu-button" // Added mobile-menu-button class
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="mobile-menu w-[300px] sm:w-[350px] p-0"> {/* Added mobile-menu class */}
               {/* Logo inside mobile menu */}
              <Link href="/" className="nav-logo p-4 border-b border-nav-mobile-border block" onClick={closeMobileMenu}>
                <Image src="/favicon.svg" alt="EnviosDosRuedas Logo" width={35} height={35} className="logo-image inline-block mr-2" />
                <div className="logo-text inline-block align-middle">
                  <h1 className="logo-title text-base">Envios DosRuedas</h1>
                   <p className="text-xs text-mikado_yellow">Tu Solución Confiable</p>
                 </div>
              </Link>
              {/* Mobile Navigation Items */}
              <nav className="p-4">
                <NavItemsRenderer items={navItems} isMobile={true} closeSheet={closeMobileMenu} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
       {/* Render overlay conditionally */}
       {isMobileMenuOpen && <NavOverlay />}
    </header>
  );
}
