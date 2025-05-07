
import { HeroSection } from '@/components/sections/hero-section';
import { ServiceOverview } from '@/components/sections/service-overview';
import { VisionGlobal } from '@/components/sections/vision-global';
import { ServiciosDestacados } from '@/components/sections/servicios-destacados';
import { CotizarPrincipal } from '@/components/sections/cotizar-principal';
import { EmprendedoresPrincipal } from '@/components/sections/emprendedores-principal';
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Envios DosRuedas | Mensajería y Delivery Rápido en Mar del Plata',
  description: 'Servicio confiable de mensajería y delivery en moto en Mar del Plata. Envíos express, low-cost, para emprendedores y Mercado Libre Flex. Cotiza online.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionGlobal />
      <ServiceOverview />
      <CotizarPrincipal />
      <EmprendedoresPrincipal />
      <ServiciosDestacados />
      <BannerRedesSociales /> {/* Add the new component here */}
    </>
  );
}
