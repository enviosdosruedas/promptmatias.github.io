'use client'; // Add use client for useEffect and useState

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
    Menu,
    ChevronDown,
    Home,
    Package,
    Calculator,
    Users,
    Mail as MailFooterIcon,
    Phone as PhoneFooterIcon,
    Clock as ClockIcon,
    Store,
    Box,
    PiggyBank,
    Zap,
    Building,
    HelpCircle,
    Hash,
    MessageSquare,
    ChevronUp,
    Bike,
    MapPin as MapPinIcon // Aliased MapPin to MapPinIcon
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import '@/styles/footer.css'; // Import the specific CSS file
import * as React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

// Define navigation structure for reuse
const footerNavItems = [
    { title: 'Inicio', href: '/', icon: Home },
    {
        title: 'Servicios',
        icon: Package,
        subItems: [
            { title: 'Envíos Express', href: '/mensajeria-envios-express', icon: Zap },
            { title: 'Envíos LowCost', href: '/mensajeria-envios-lowcost', icon: PiggyBank },
            //  { title: 'Moto Express', href: '/delivery-moto-express', icon: Bike},
            { title: 'Moto Fija', href: '/delivery-moto-fija', icon: ClockIcon },
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
        ],
    },
    { title: 'Contacto', href: '/contacto', icon: MailFooterIcon },
];

// Component for rendering navigation items (Desktop and Mobile)
const NavItemsRenderer = ({ items, isMobile, closeSheet }: { items: typeof footerNavItems; isMobile: boolean; closeSheet?: () => void }) => (
    <ul className={cn("footer-links", isMobile ? "flex-col items-start gap-0" : "items-center gap-1")}>
        {items.map((item) => (
            <li key={item.title} className={cn(isMobile ? "w-full" : "", item.subItems ? "dropdown" : "")}>
                {item.subItems ? (
                    <>
                        <a onClick={(e) => e.preventDefault()} className="flex items-center justify-between cursor-pointer">
                            {item.icon && <item.icon className="lucide-icon" />}
                            {item.title}
                            <ChevronDown className="lucide-chevron h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                        </a>
                        <div className="dropdown-content">
                            <ul>
                                {item.subItems.map((subItem) => (
                                    <li key={subItem.title}>
                                        <Link href={subItem.href} onClick={closeSheet}>
                                            {subItem.icon && <subItem.icon className="lucide-icon" />}
                                            {subItem.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <Link href={item.href!} onClick={closeSheet}>
                        {item.icon && <item.icon className="lucide-icon" />}
                        {item.title}
                    </Link>
                )}
            </li>
        ))}
    </ul>
);

export function Footer() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    const isMobile = useIsMobile();
    const [isVisible, setIsVisible] = React.useState(false);


    React.useEffect(() => {
        setMounted(true);
    }, []);

    const toggleVisibility = () => {
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


    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    // Overlay component
    const NavOverlay = () => (
        <div
            className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={closeMobileMenu}
        />
    );

    return (
        <footer className="main-footer">
            <div className="container mx-auto px-4 md:px-6">
                <div className="footer-grid">
                    {/* Column 1: Logo and Brand */}
                    <div>
                        <div className="footer-logo-flex mb-4">
                            <Link href="/" className="footer-logo-link">
                                <Image src="/favicon.svg" alt="EnviosDosRuedas Logo" width={50} height={50} className="footer-logo-img" priority />
                            </Link>
                            <div>
                                <h3 className="footer-title-main animated-title-main">
                                    Envios DosRuedas
                                </h3>
                                <p className="text-sm text-white">
                                    Tu solución confiable para mensajería y delivery en Mar del Plata.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Menu */}
                    <div>
                        <h4 className="footer-title animated-title">
                            Menú
                        </h4>
                        <nav>
                            <NavItemsRenderer items={footerNavItems} isMobile={isMobile} closeSheet={closeMobileMenu} />
                        </nav>
                    </div>

                    {/* Column 3: Contacto */}
                    <div>
                        <h4 className="footer-title animated-title">
                            Contacto
                        </h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <MapPinIcon className="lucide" />
                                <span>Mar del Plata, Argentina</span>
                            </div>
                            <div className="contact-item">
                                <PhoneFooterIcon className="lucide" />
                                <a href="https://wa.me/+542236602699" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground whatsapp-link">
                                    +54 223 660 2699
                                </a>
                            </div>
                            <div className="contact-item">
                                <MailFooterIcon className="lucide" />
                                <a href="mailto:dosruedasmdq@gmail.com" className="whatsapp-link">dosruedasmdq@gmail.com</a>
                            </div>
                            <div className="social-container mt-4">
                                <h3 className="social-title animated-title">
                                    Síguenos en:
                                </h3>
                                <div className="social-links">
                                    <Link href="https://instagram.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                                        <img src="/icon/icon-instagram.svg" alt="Instagram" className="h-5 w-5" />
                                    </Link>
                                    <Link href="https://facebook.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                                        <img src="/icon/icon-facebook.svg" alt="Facebook" className="h-5 w-5" />
                                    </Link>
                                    <Link href="https://wa.me/+542236602699?text=Hola!%20Encontre%20su%20contacto%20en%20el%20sitio%20web%20y%20me%20gustaria%20mas%20informacion%20sobre%20su%20servicio." target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
                                        <img src="/icon/icon-whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
                                    </Link>
                                    {/* Add Gmail link */}
                                    {/* <Link href="mailto:dosruedasmdq@gmail.com" className="social-icon gmail" aria-label="Gmail">
                    <img src="/icon/icon-gmail.svg" alt="Gmail" className="h-5 w-5" />
                </Link> */}
                                    {/* Add any other social links with their SVG icons */}
                                    {/* <Link href="#" className="social-icon tiktok" aria-label="TikTok">
                    <img src="/icon/icon-tiktok.svg" alt="TikTok" className="h-5 w-5" />
                </Link> */}
                                    {/* Add more social links as needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div>
                        <p className="copyright">
                            &copy; {new Date().getFullYear()} Envios DosRuedas. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
            <button
                onClick={scrollToTop}
                className={`back-to-top ${isVisible ? 'visible' : ''}`}
                aria-label="Volver arriba"
            >
                <ChevronUp className="lucide h-6 w-6" />
            </button>
        </footer>
    );
}

