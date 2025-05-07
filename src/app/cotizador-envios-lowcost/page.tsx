
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales';
import { HeroCotizadorLowCost } from '@/components/sections/HeroCotizadorLowCost';
import CaluloCotizadorLowCost from '@/components/sections/CaluloCotizadorLowCost'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cotizador Envíos Low Cost | Envios DosRuedas | Económicos',
  description: 'Calcula el precio de tu envío low cost en Mar del Plata. Servicio económico para entregas programadas y flexibles. Ahorra con Envios DosRuedas.',
};

export default function CotizadorLowCostPage() {
  return (
    <>
      <HeroCotizadorLowCost />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <CaluloCotizadorLowCost /> 
      </div>
      <BannerRedesSociales />
    </>
  );
}
