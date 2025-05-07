
import { HeroEnviosFlex } from '@/components/sections/HeroEnviosFlex'; 
import { PrincipalEnviosFlex } from '@/components/sections/PrincipalEnviosFlex';
import { InfoEnviosFlex } from '@/components/sections/InfoEnviosFlex'; 
import { CompromisoEnviosFlex } from '@/components/sections/CompromisoEnviosFlex'; 
import { PreciosEnviosFlex } from '@/components/sections/PreciosEnviosFlex'; 
import { RecomendacionesEnviosFlex } from '@/components/sections/RecomendacionesEnviosFlex';
import { ContactoEnviosFlex } from '@/components/sections/ContactoEnviosFlex'; 
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Envíos Flex Mercado Libre | Envios DosRuedas | Mar del Plata',
  description: 'Potencia tus ventas en Mercado Libre con Envíos Flex en Mar del Plata. Entregas en el día o al día siguiente para mejorar tu reputación.',
};

export default function EnviosFlexPage() {
  return (
    <>
      <HeroEnviosFlex /> 
      <PrincipalEnviosFlex /> 
      <InfoEnviosFlex /> 
      <PreciosEnviosFlex /> 
      <CompromisoEnviosFlex /> 
      <RecomendacionesEnviosFlex />
      <ContactoEnviosFlex /> 
      <BannerRedesSociales /> 
    </>
  );
}
