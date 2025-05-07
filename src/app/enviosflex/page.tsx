

import { HeroEnviosFlex } from '@/components/sections/HeroEnviosFlex'; 
import { PrincipalEnviosFlex } from '@/components/sections/PrincipalEnviosFlex';
import { InfoEnviosFlex } from '@/components/sections/InfoEnviosFlex'; 
import { CompromisoEnviosFlex } from '@/components/sections/CompromisoEnviosFlex'; 
import { PreciosEnviosFlex } from '@/components/sections/PreciosEnviosFlex'; 
import { ContactoEnviosFlex } from '@/components/sections/ContactoEnviosFlex'; // Import the new component
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 

export default function EnviosFlexPage() {
  return (
    <>
      <HeroEnviosFlex /> 
      <PrincipalEnviosFlex /> 
      <InfoEnviosFlex /> 
      <PreciosEnviosFlex /> 
      <CompromisoEnviosFlex /> 
      <ContactoEnviosFlex /> {/* Integrate the ContactoEnviosFlex component here */}
      <BannerRedesSociales /> 
    </>
  );
}
