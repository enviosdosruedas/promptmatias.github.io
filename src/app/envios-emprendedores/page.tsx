
// Removed unused imports: Image, Button, Link, Handshake, PackageSearch, BadgePercent
import { HeroEmprendedores } from '@/components/sections/HeroEmprendedores';
import { InfoEmprendedores } from '@/components/sections/info-emprendedores'; 
import { PrecioEmprendedores } from '@/components/sections/precio-emprendedores'; 
import { CompromisoEmprendedores } from '@/components/sections/CompromisoEmprendedores';
import { RecomendacionesEmprendedores } from '@/components/sections/RecomendacionesEmprendedores';
import { ComenzarEmprendedores } from '@/components/sections/ComenzarEmprendedores';
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Envíos para Emprendedores | Envios DosRuedas | Logística',
  description: 'Soluciones de envío y logística para emprendedores en Mar del Plata. Plan Emprendedor con precios accesibles y entregas eficientes.',
};

export default function EnviosEmprendedoresPage() {
  return (
    <> 
     <HeroEmprendedores />
      <InfoEmprendedores /> 
      <PrecioEmprendedores /> 
      <CompromisoEmprendedores />
      <RecomendacionesEmprendedores /> 
      <ComenzarEmprendedores />
       <BannerRedesSociales /> 
    </>
  );
}
