
import { HeroSection } from '@/components/sections/hero-section';
import { ServiceOverview } from '@/components/sections/service-overview';
import { VisionGlobal } from '@/components/sections/vision-global';
import { ServiciosDestacados } from '@/components/sections/servicios-destacados'; // Import the new component
import { CotizarPrincipal } from '@/components/sections/cotizar-principal';
import { EmprendedoresPrincipal } from '@/components/sections/emprendedores-principal';

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionGlobal />
      <ServiceOverview />
      <CotizarPrincipal />
      <EmprendedoresPrincipal />
      <ServiciosDestacados /> 
    </>
  );
}
