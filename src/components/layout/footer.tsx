import Link from 'next/link';
import Image from 'next/image';
import { Bike, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'; // Added icons

// Define navigation structure for reusability if needed elsewhere
const footerNavItems = [
  {
    title: 'Inicio',
    href: '/',
  },
  {
    title: 'Servicios',
    subItems: [
      { title: 'Envíos Express', href: '/mensajeria-envios-express' },
      { title: 'Envíos LowCost', href: '/mensajeria-envios-lowcost' },
      { title: 'Moto Express', href: '/delivery-moto-express' },
      { title: 'Moto Fija', href: '/delivery-moto-fija' },
      { title: 'Plan Emprendedores', href: '/envios-emprendedores' },
      { title: 'Envios Flex', href: '/enviosflex' },
    ],
  },
  {
    title: 'Cotizar',
    subItems: [
      { title: 'Cotizar Express', href: '/cotizador-envios-express' },
      { title: 'Cotizar LowCost', href: '/cotizador-envios-lowcost' },
    ],
  },
  {
    title: 'Nosotros',
    subItems: [
      { title: 'Sobre Nosotros', href: '/sobre-nosotros' },
      { title: 'Preguntas Frecuentes', href: '/preguntasfrecuentes' },
      { title: 'Nuestras Redes', href: '/nuestrasredes' },
      // { title: 'Noticias', href: '/noticias' }, // Uncomment if needed
    ],
  },
  {
    title: 'Contacto',
    href: '/contacto',
  },
];


export function Footer() {
  return (
    <footer className="border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo and Brand */}
          <div className="md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* <Image src="/img/LogoEnviosDosRuedas.webp" alt="EnviosDosRuedas Logo" width={50} height={50} /> */}
              <Bike className="h-10 w-10 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-primary">Envios DosRuedas</h3>
                <p className="text-sm text-foreground/70">
                  Tu solución confiable para mensajería y delivery en Mar del Plata.
                </p>
              </div>
            </Link>
          </div>

          {/* Menu */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="mb-4 text-lg font-semibold text-primary">Menú</h4>
            <nav>
              <ul className="space-y-2">
                {footerNavItems.map((item) => (
                  <li key={item.title}>
                    {item.href ? (
                      <Link href={item.href} className="text-foreground/80 hover:text-foreground transition-colors text-sm">
                        {item.title}
                      </Link>
                    ) : (
                      <span className="text-primary font-medium text-sm">{item.title}</span>
                    )}
                    {item.subItems && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.title}>
                            <Link href={subItem.href} className="text-foreground/80 hover:text-foreground transition-colors text-xs">
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contacto */}
          <div className="md:col-span-1 lg:col-span-2">
             <h4 className="mb-4 text-lg font-semibold text-primary">Contacto</h4>
             <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                <span className="text-foreground/80">Mar del Plata, Argentina</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                <Link href="https://wa.me/+542236602699" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
                  +54 223 660 2699 (WhatsApp)
                </Link>
              </div>
               <div className="flex items-start gap-2">
                 <Mail className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                 <Link href="mailto:dosruedasmdq@gmail.com" className="text-foreground/80 hover:text-foreground transition-colors">
                   dosruedasmdq@gmail.com
                 </Link>
               </div>
               <div className="pt-2">
                 <h3 className="text-sm font-medium text-primary mb-2">Síguenos en:</h3>
                <div className="flex space-x-3">
                  <Link href="https://instagram.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-6 w-6 text-foreground/70 hover:text-pink-600 transition-colors" />
                  </Link>
                  <Link href="https://facebook.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-6 w-6 text-foreground/70 hover:text-blue-800 transition-colors" />
                  </Link>
                   {/* WhatsApp Icon Link */}
                   <Link href="https://wa.me/+542236602699?text=Hola!%20Encontre%20su%20contacto%20en%20el%20sitio%20web%20y%20me%20gustaria%20mas%20informacion%20sobre%20su%20servicio." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground/70 hover:text-green-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.579 2.168 2.129-.565z" />
                      </svg>
                  </Link>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-xs text-foreground/60">
            © {new Date().getFullYear()} Envios DosRuedas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
