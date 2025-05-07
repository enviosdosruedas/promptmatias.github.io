
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, PackageSearch, BadgePercent } from 'lucide-react';
import { BeneficiosEmprendedores } from '@/components/sections/BeneficiosEmprendedores'; // Import the new Hero component
import { InfoEmprendedores } from '@/components/sections/info-emprendedores'; 
import { PrecioEmprendedores } from '@/components/sections/precio-emprendedores'; 
import { CompromisoEmprendedores } from '@/components/sections/compromiso-emprendedores'; 
import { RecomendacionesEmprendedores } from '@/components/sections/recomendaciones-emprendedores'; 
import { ListoEmprendedores } from '@/components/sections/listo-emprendedores'; 
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 

export default function EnviosEmprendedoresPage() {
  return (
    <> {/* Add fragment */}
      <BeneficiosEmprendedores /> {/* Add the Hero component here */}
      <InfoEmprendedores /> {/* Integrate the InfoEmprendedores component here */}
      <PrecioEmprendedores /> {/* Integrate the PrecioEmprendedores component here */}
      <CompromisoEmprendedores /> {/* Integrate the CompromisoEmprendedores component here */}
      <RecomendacionesEmprendedores /> {/* Integrate the new component */}
      <ListoEmprendedores /> {/* Integrate the new ListoEmprendedores component here */}
       <BannerRedesSociales /> {/* Add banner at the end */}
    </>
  );
}

