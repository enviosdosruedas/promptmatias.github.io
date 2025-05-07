

import { HeroEnviosFlex } from '@/components/sections/HeroEnviosFlex'; // Import the new Hero component
import { PrincipalEnviosFlex } from '@/components/sections/PrincipalEnviosFlex';
import { InfoEnviosFlex } from '@/components/sections/InfoEnviosFlex'; // Import the new InfoEnviosFlex component
import { CompromisoEnviosFlex } from '@/components/sections/CompromisoEnviosFlex'; // Import the new CompromisoEnviosFlex component
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 

export default function EnviosFlexPage() {
  return (
    <>
      <HeroEnviosFlex /> {/* Use the new Hero component */}
      <PrincipalEnviosFlex /> 
      <InfoEnviosFlex /> {/* Integrate the InfoEnviosFlex component here */}
      <CompromisoEnviosFlex /> {/* Integrate the CompromisoEnviosFlex component here */}
      <BannerRedesSociales /> 
    </>
  );
}
