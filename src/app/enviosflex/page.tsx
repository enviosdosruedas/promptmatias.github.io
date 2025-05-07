

import { HeroEnviosFlex } from '@/components/sections/HeroEnviosFlex'; // Import the new Hero component
import { PrincipalEnviosFlex } from '@/components/sections/PrincipalEnviosFlex';
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 

export default function EnviosFlexPage() {
  return (
    <>
      <HeroEnviosFlex /> {/* Use the new Hero component */}
      <PrincipalEnviosFlex /> {/* This will be replaced or complemented by HeroEnviosFlex based on final design */}
      <BannerRedesSociales /> 
    </>
  );
}
