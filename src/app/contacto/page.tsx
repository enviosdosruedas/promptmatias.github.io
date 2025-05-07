
import { HeroContacto } from "@/components/sections/HeroContacto"; 
import { Principalcontacto } from "@/components/sections/Principalcontacto"; 
import { EmprendedorContacto } from "@/components/sections/EmprendedorContacto"; 
import { InfoContacto } from "@/components/sections/InfoContacto"; 
import { MasPreguntas } from "@/components/sections/MasPreguntas"; 
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Envios DosRuedas | Mensajería en Mar del Plata',
  description: 'Contáctanos para tus envíos y mensajería en Mar del Plata. WhatsApp, email, y más. Estamos listos para ayudarte con tus entregas.',
};

export default function ContactoPage() {
  return (
    <> 
      <HeroContacto /> 
      <Principalcontacto /> 
      <EmprendedorContacto /> 
      <InfoContacto /> 
      <MasPreguntas /> 
      <BannerRedesSociales />  
    </>
  );
}
