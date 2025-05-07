
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PackageCheck, FileClock, Building } from 'lucide-react';
import { HeroMenEnvExpress } from '@/components/sections/HeroMenEnvExpress'; // Import the new Hero component
import { Resumenmensajeriaenviosexpress } from '@/components/sections/Resumenmensajeriaenviosexpress';
import { PasosServicios } from '@/components/sections/PasosServicios';
import { ExpressPrioritario } from '@/components/sections/ExpressPrioritario'; // Import the new component
import { Faqmenenvexpress } from '@/components/sections/faqmenenvexpress'; // Import the new FAQ component
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; // Import banner

export default function MensajeriaEnviosExpressPage() {
  return (
    <> {/* Added Fragment */}
     <HeroMenEnvExpress /> {/* Integrate the Hero component here */}
      <Resumenmensajeriaenviosexpress />
      <PasosServicios />
      <ExpressPrioritario /> {/* Integrate the new section here */}
      <Faqmenenvexpress /> {/* Integrate the new FAQ section */}
      <BannerRedesSociales /> {/* Add banner at the end */}
    </>
  );
}
