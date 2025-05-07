
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, PackageSearch, BadgePercent } from 'lucide-react';
import { HeroEmprendedores } from '@/components/sections/HeroEmprendedores'; // Import the new Hero component
import { InfoEmprendedores } from '@/components/sections/info-emprendedores'; // Import the new InfoEmprendedores component
import { PrecioEmprendedores } from '@/components/sections/precio-emprendedores'; // Import the new Pricing component
import { CompromisoEmprendedores } from '@/components/sections/compromiso-emprendedores'; // Import the new CompromisoEmprendedores component
import { RecomendacionesEmprendedores } from '@/components/sections/recomendaciones-emprendedores'; // Import the new component
import { ListoEmprendedores } from '@/components/sections/listo-emprendedores'; // Import the new ListoEmprendedores component
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; // Import banner

export default function EnviosEmprendedoresPage() {
  return (
    <> {/* Add fragment */}
      <HeroEmprendedores /> {/* Add the Hero component here */}
      <InfoEmprendedores /> {/* Integrate the InfoEmprendedores component here */}
      <PrecioEmprendedores /> {/* Integrate the PrecioEmprendedores component here */}
      <CompromisoEmprendedores /> {/* Integrate the CompromisoEmprendedores component here */}
      <RecomendacionesEmprendedores /> {/* Integrate the new component */}
      <ListoEmprendedores /> {/* Integrate the new ListoEmprendedores component here */}
       <BannerRedesSociales /> {/* Add banner at the end */}
    </>
  );
}
