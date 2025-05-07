

import { HeroEnviosFlex } from '@/components/sections/HeroEnviosFlex'; 
import { PrincipalEnviosFlex } from '@/components/sections/PrincipalEnviosFlex';
import { InfoEnviosFlex } from '@/components/sections/InfoEnviosFlex'; 
import { CompromisoEnviosFlex } from '@/components/sections/CompromisoEnviosFlex'; 
import { PreciosEnviosFlex } from '@/components/sections/PreciosEnviosFlex'; 
import { RecomendacionesEnviosFlex } from '@/components/sections/RecomendacionesEnviosFlex';
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
      <RecomendacionesEnviosFlex />
      <ContactoEnviosFlex /> {/* Integrate the new ContactoEnviosFlex component here */}
      <BannerRedesSociales /> 
    </>
  );
}
