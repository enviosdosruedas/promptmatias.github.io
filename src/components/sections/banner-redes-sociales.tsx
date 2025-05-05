'use client'; // Needs to be a client component for potential future interactions or if useEffect is needed

import Link from 'next/link';
import { Instagram, Facebook, MessageSquare } from 'lucide-react'; // Use Lucide icons
import '@/styles/redessociales.css'; // Import the specific CSS
import { cn } from '@/lib/utils'; // Import cn for conditional classes

const socialLinks = [
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/enviosdosruedas/',
    icon: Instagram,
    text: '¡Síguenos en Instagram!',
    // Using Tailwind classes for background. Gradient can be complex to maintain.
    // Using a pink shade as an approximation for Instagram's gradient feel.
    bgColor: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    textColor: 'text-white', // Ensure contrast
  },
  {
    platform: 'facebook',
    url: 'https://www.facebook.com/enviosdosruedas',
    icon: Facebook,
    text: '¡Visítanos en Facebook!',
    bgColor: 'bg-blue-600', // Standard Facebook blue
    textColor: 'text-white',
  },
  {
    platform: 'whatsapp',
    url: 'https://wa.me/+542236602699?text=Hola!%20Encontre%20su%20contacto%20en%20el%20sitio%20web%20y%20me%20gustaria%20mas%20informacion%20sobre%20su%20servicio.',
    icon: MessageSquare, // Using MessageSquare as a common icon for WhatsApp
    text: 'WhatsApp: 2236602699',
    bgColor: 'bg-green-600', // Standard WhatsApp green
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
              <social.icon className="h-5 w-5 mr-2" />{' '}
              {/* Render Lucide icon */}
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
