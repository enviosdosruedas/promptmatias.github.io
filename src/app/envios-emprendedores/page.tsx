
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, PackageSearch, BadgePercent } from 'lucide-react';
import { HeroEmprendedores } from '@/components/sections/HeroEmprendedores';
import { InfoEmprendedores } from '@/components/sections/info-emprendedores'; 
import { PrecioEmprendedores } from '@/components/sections/precio-emprendedores'; 
import { CompromisoEmprendedores } from '@/components/sections/CompromisoEmprendedores'; // Import the new CompromisoEmprendedores component
import { RecomendacionesEmprendedores } from '@/components/sections/RecomendacionesEmprendedores'; // Import the new component
import { ListoEmprendedores } from '@/components/sections/ListoEmprendedores'; // Import the new ListoEmprendedores component
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 

export default function EnviosEmprendedoresPage() {
  return (
    <> {/* Add fragment */}
     <HeroEmprendedores />
      <InfoEmprendedores /> 
      <PrecioEmprendedores /> 
      <CompromisoEmprendedores /> {/* Integrate the CompromisoEmprendedores component here */}
      <RecomendacionesEmprendedores /> 
      <ListoEmprendedores /> 
       <BannerRedesSociales /> 
    </>
  );
}
