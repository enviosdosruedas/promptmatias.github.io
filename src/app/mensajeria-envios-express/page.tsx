
// Removed unused imports: Image, Button, Link, PackageCheck, FileClock, Building
import { HeroMenEnvExpress } from '@/components/sections/HeroMenEnvExpress'; 
import { Resumenmensajeriaenviosexpress } from '@/components/sections/Resumenmensajeriaenviosexpress';
import { PasosServicios } from '@/components/sections/PasosServicios';
import { ExpressPrioritario } from '@/components/sections/ExpressPrioritario'; 
import { Faqmenenvexpress } from '@/components/sections/faqmenenvexpress'; 
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mensajería Express | Envios DosRuedas | Envíos Urgentes MDP',
  description: 'Servicio de mensajería express en Mar del Plata. Envíos urgentes de documentos y paquetes con la máxima velocidad y confiabilidad.',
};

export default function MensajeriaEnviosExpressPage() {
  return (
    <> 
     <HeroMenEnvExpress /> 
      <Resumenmensajeriaenviosexpress />
      <PasosServicios />
      <ExpressPrioritario /> 
      <Faqmenenvexpress /> 
      <BannerRedesSociales /> 
    </>
  );
}
