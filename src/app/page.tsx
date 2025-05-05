import { HeroSection } from '@/components/sections/hero-section';
import { ServiceOverview } from '@/components/sections/service-overview';
import { VisionGlobal } from '@/components/sections/vision-global'; // Import the new component

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceOverview />
      <VisionGlobal /> {/* Add the new section here */}
    </>
  );
}
