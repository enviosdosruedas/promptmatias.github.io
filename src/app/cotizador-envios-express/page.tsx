
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales';
import CaluloCotizadorExpress from '@/components/sections/CaluloCotizadorExpress'; 
import { HeroCotizadorExpress } from '@/components/sections/HeroCotizadorExpress'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cotizador Envíos Express | Envios DosRuedas | Entregas Rápidas',
  description: 'Cotiza tu envío express en Mar del Plata con Envios DosRuedas. Entregas urgentes el mismo día. Calcula el precio de tu envío rápido ahora.',
};

export default function CotizadorExpressPage() {
  return (
    <>
      <HeroCotizadorExpress /> 
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <CaluloCotizadorExpress /> 
      </div>
      <BannerRedesSociales />
    </>
  );
}
