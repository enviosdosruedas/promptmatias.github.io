
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, PackageSearch, BadgePercent } from 'lucide-react';
import { HeroEmprendedores } from '@/components/sections/HeroEmprendedores';
import { InfoEmprendedores } from '@/components/sections/info-emprendedores'; 
import { PrecioEmprendedores } from '@/components/sections/precio-emprendedores'; 
import { CompromisoEmprendedores } from '@/components/sections/CompromisoEmprendedores';
import { RecomendacionesEmprendedores } from '@/components/sections/RecomendacionesEmprendedores';
import { ComenzarEmprendedores } from '@/components/sections/ComenzarEmprendedores'; // New import
import { ListoEmprendedores } from '@/components/sections/ListoEmprendedores'; 
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 

export default function EnviosEmprendedoresPage() {
  return (
    <> {/* Add fragment */}
     <HeroEmprendedores />
      <InfoEmprendedores /> 
      <PrecioEmprendedores /> 
      <CompromisoEmprendedores />
      <RecomendacionesEmprendedores /> 
      <ComenzarEmprendedores /> {/* Integrate the new component */}
      <ListoEmprendedores /> 
       <BannerRedesSociales /> 
    </>
  );
}
