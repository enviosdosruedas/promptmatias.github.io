
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales';
import type { Metadata } from 'next';
import { HeroCotizadorLowCost } from '@/components/sections/HeroCotizadorLowCost'; // Assuming this is the intended Hero
import CaluloCotizadorLowCost from '@/components/sections/CaluloCotizadorLowCost'; // Assuming this is the intended calculator

export const metadata: Metadata = {
  title: 'Cotizador de Envíos | Envios DosRuedas | Mar del Plata',
  description: 'Calcula el precio de tu envío en Mar del Plata con Envios DosRuedas. Ingresa origen y destino para obtener tu cotización al instante.',
};

export default function CotizadorNuevoPage() {
  return (
    <>
      <HeroCotizadorLowCost /> {/* Or a more generic HeroCotizador if it exists */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <CaluloCotizadorLowCost /> {/* Or a more generic Calculator component */}
      </div>
      <BannerRedesSociales />
    </>
  );
}
