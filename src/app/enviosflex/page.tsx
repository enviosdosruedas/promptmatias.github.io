
import { PrincipalEnviosFlex } from '@/components/sections/PrincipalEnviosFlex'; // Import the new component
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; // Import the new component

export default function EnviosFlexPage() {
  return (
    <>
      <PrincipalEnviosFlex /> {/* Use the new component */}
      <BannerRedesSociales /> {/* Add the new component here */}
    </>
  );
}
