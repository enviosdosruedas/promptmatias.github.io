import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Bike } from 'lucide-react';

const navLinks = [
  { href: '/delivery-moto-fija', label: 'Delivery Moto Fija' },
  { href: '/delivery-moto-express', label: 'Delivery Moto Express' },
  { href: '/mensajeria-envios-express', label: 'Mensajería Express' },
  { href: '/mensajeria-envios-lowcost', label: 'Mensajería Low Cost' },
  { href: '/envios-emprendedores', label: 'Envíos Emprendedores' },
  { href: '/enviosflex', label: 'Envíos Flex' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '/preguntasfrecuentes', label: 'Preguntas Frecuentes' },
  { href: '/nuestrasredes', label: 'Nuestras Redes' },
  { href: '/contacto', label: 'Contacto' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Bike className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block text-primary">
            EnviosDosRuedas
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex flex-1">
          {navLinks.slice(0, 6).map((link) => ( // Show first 6 links on desktop
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
           <Link href="/cotizador-envios-express">
             <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">Cotizá tu envío</Button>
           </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                >
                  <Bike className="h-6 w-6 text-primary" />
                  <span className="text-primary">EnviosDosRuedas</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground/60 transition-colors hover:text-foreground/80"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
