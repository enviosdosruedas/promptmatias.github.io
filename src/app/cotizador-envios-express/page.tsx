
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales';
import CaluloCotizadorExpress from '@/components/sections/CaluloCotizadorExpress'; // Import the new component
import { HeroCotizadorExpress } from '@/components/sections/HeroCotizadorExpress'; // Import the Hero component

export default function CotizadorExpressPage() {
  return (
    <>
      <HeroCotizadorExpress /> {/* Add the Hero component */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <CaluloCotizadorExpress /> {/* Add the new calculator component here */}
      </div>
      <BannerRedesSociales />
    </>
  );
}
