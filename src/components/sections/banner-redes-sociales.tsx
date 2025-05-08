'use client'; // Needs to be a client component for potential future interactions or if useEffect is needed

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import '@/styles/redessociales.css'; // Import the specific CSS
import { cn } from '@/lib/utils'; // Import cn for conditional classes

const socialLinks = [
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/enviosdosruedas/',
    icon: '/icon/icon-instagram.svg', // Path to SVG
    text: '¡Síguenos en Instagram!',
    bgColor: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    textColor: 'text-white',
  },
  {
    platform: 'facebook',
    url: 'https://www.facebook.com/enviosdosruedas',
    icon: '/icon/icon-facebook.svg', // Path to SVG
    text: '¡Visítanos en Facebook!',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  },
  {
    platform: 'whatsapp',
    url: 'https://wa.me/+542236602699?text=Hola!%20Encontre%20su%20contacto%20en%20el%20sitio%20web%20y%20me%20gustaria%20mas%20informacion%20sobre%20su%20servicio.',
    icon: '/icon/icon-whatsapp.svg', // Path to SVG
    text: 'WhatsApp: 2236602699',
    bgColor: 'bg-green-600',
    textColor: 'text-white',
  },
];

// Duplicate the array for seamless scrolling effect
const duplicatedSocialLinks = [...socialLinks, ...socialLinks];

export function BannerRedesSociales() {
  return (
    <section className="py-4 overflow-hidden bg-muted/20">
      {' '}
      {/* Added subtle background */}
      <div className="social-banner-container">
        <div className="social-carousel flex animate-slide">
          {duplicatedSocialLinks.map((social, index) => (
            <Link
              key={`${social.platform}-${index}`} // Ensure unique key for duplicated items
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'social-item flex items-center justify-center px-6 py-3 mx-2 rounded-lg transition-transform duration-300 hover:scale-105 shadow-md',
                social.bgColor,
                social.textColor
              )}
              aria-label={`Visitar ${social.platform}`}
            >
              <Image
                src={social.icon}
                alt={`${social.platform} icon`}
                width={20} // Adjust width as needed
                height={20} // Adjust height as needed
                className="mr-2 filter invert brightness-0" // Basic styling for SVG within link, adjust filter if needed for white SVGs
              />
              <span className="font-medium text-sm whitespace-nowrap">
                {social.text}
              </span>{' '}
              {/* Prevent text wrapping */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
