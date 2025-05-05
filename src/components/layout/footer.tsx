'use client'; // Add use client for useEffect and useState

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { MapPin, Phone, Mail, Instagram, Facebook, ChevronUp } from 'lucide-react'; // Removed Bike
import '@/styles/footer.css'; // Import the new CSS file
import * as React from 'react';

// Keep the navigation structure for data
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


// Function to render nested list items
const renderNavList = (items: typeof footerNavItems) => {
  return (
    <ul className="footer-links">
      {items.map((item) => (
        <li key={item.title} className={item.subItems ? 'dropdown' : ''}>
          {item.href ? (
            <Link href={item.href}>
              {/* Optional: Add icon if needed */}
              {item.title}
            </Link>
          ) : (
            <a> {/* Using <a> for non-link dropdown triggers */}
              {/* Optional: Add icon if needed */}
              {item.title}
            </a>
          )}
          {item.subItems && (
            <div className="dropdown-content">
              <ul>
                {item.subItems.map((subItem) => (
                  <li key={subItem.title}>
                    <Link href={subItem.href}>
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};


export function Footer() {
    // Back to top functionality
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => {
      // Check if window is defined (for server-side rendering safety)
      if (typeof window !== 'undefined') {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    React.useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }
    }, []);


  return (
    <footer className="main-footer"> {/* Use class from footer.css */}
      <div className="container mx-auto px-4 md:px-6"> {/* Keep container for centering */}
        <div className="footer-grid"> {/* Use class from footer.css */}
          {/* Column 1: Logo and Brand */}
          <div>
            <div className="footer-logo-flex mb-4"> {/* Use class & flex */}
              <Link href="/" className="footer-logo-link">
                 {/* Use the specified SVG logo */}
                 <Image src="/favicon.svg" alt="EnviosDosRuedas Logo" width={50} height={50} className="footer-logo-img" />
              </Link>
              <div>
                <h3 className="text-xl font-bold text-primary footer-title">
                  Envios DosRuedas
                </h3>
                <p className="text-sm text-foreground/70">
                  Tu solución confiable para mensajería y delivery en Mar del Plata.
                </p>
              </div>
            </div>
            <div className="footer-spacer"></div> {/* Spacer */}
          </div>

          {/* Column 2: Menu */}
          <div>
            <h4 className="footer-title">
              Menú
            </h4>
            <nav>
               {renderNavList(footerNavItems)}
            </nav>
          </div>

          {/* Column 3: Contacto */}
          <div>
            <h4 className="footer-title">
              Contacto
            </h4>
            <div className="contact-info"> {/* Use class */}
              <div className="contact-item">
                <MapPin className="lucide" /> {/* Use Lucide Icon */}
                <span>Mar del Plata, Argentina</span>
              </div>
              <div className="contact-item">
                <Phone className="lucide" /> {/* Use Lucide Icon */}
                <a href="https://wa.me/+542236602699" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                  +54 223 660 2699
                </a>
              </div>
              <div className="contact-item">
                <Mail className="lucide" /> {/* Use Lucide Icon */}
                <a href="mailto:dosruedasmdq@gmail.com" className="whatsapp-link">dosruedasmdq@gmail.com</a>
              </div>
              <div className="social-container">
                <h3 className="social-title">
                  Síguenos en:
                </h3>
                <div className="social-links">
                  <Link href="https://instagram.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                     <Instagram className="lucide h-5 w-5" /> {/* Use Lucide Icon */}
                  </Link>
                  <Link href="https://facebook.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                    <Facebook className="lucide h-5 w-5" /> {/* Use Lucide Icon */}
                  </Link>
                  <Link href="https://wa.me/+542236602699?text=Hola!%20Encontre%20su%20contacto%20en%20el%20sitio%20web%20y%20me%20gustaria%20mas%20informacion%20sobre%20su%20servicio." target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.579 2.168 2.129-.565z" />
                      </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="footer-bottom">
          <div>
            <p className="copyright"> {/* Use class */}
              © {new Date().getFullYear()} Envios DosRuedas. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
       {/* Optional Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${isVisible ? 'visible' : ''}`}
        aria-label="Volver arriba"
      >
        <ChevronUp className="lucide h-6 w-6" /> {/* Use Lucide Icon */}
      </button>
    </footer>
  );
}
