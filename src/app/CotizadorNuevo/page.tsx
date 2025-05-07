
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales';
import { HeroCotizadorNuevo } from '@/components/sections/HeroCotizadorNuevo';
import CalculoCotizadorNuevo from '@/components/sections/CalculoCotizadorNuevo'; // Import the new component

export default function CotizadorNuevoPage() {
  return (
    <>
      <HeroCotizadorNuevo />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        {/* The title below might be redundant if HeroCotizadorNuevo already has a prominent title */}
        {/* <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8 text-primary">
          Calcula tu Envío
        </h2> */}
        <CalculoCotizadorNuevo /> {/* Add the new calculator component here */}
      </div>
      <BannerRedesSociales />
    </>
  );
}
