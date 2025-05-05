import { HeroSection } from '@/components/sections/hero-section';
import { ServiceOverview } from '@/components/sections/service-overview';
import { VisionGlobal } from '@/components/sections/vision-global';
import { CotizarPrincipal } from '@/components/sections/cotizar-principal'; // Import the new component

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceOverview />
      <CotizarPrincipal /> {/* Add the new section here */}
      <VisionGlobal />
    </>
  );
}
