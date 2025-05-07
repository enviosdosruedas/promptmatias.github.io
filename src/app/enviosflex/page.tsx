
import HeroFlex from '@/components/sections/HeroFlex';
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; // Import the new component

export default function Home() {
  return (
    <>
    <HeroFlex />
      <BannerRedesSociales /> {/* Add the new component here */}
    </>
  );
}
