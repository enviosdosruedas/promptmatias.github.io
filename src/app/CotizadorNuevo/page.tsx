
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales';
import { HeroCotizadorNuevo } from '@/components/sections/HeroCotizadorNuevo'; // Import the new component

export default function CotizadorNuevoPage() {
  return (
    <>
      <HeroCotizadorNuevo /> {/* Add the new Hero component here */}
      {/* Placeholder for the main cotizador form/functionality */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8 text-primary">
          Calcula tu Envío
        </h2>
        <p className="text-center text-foreground/80 mb-12">
          Próximamente: Aquí podrás ingresar los detalles de tu envío para obtener una cotización.
        </p>
        {/* Example of how the form might be structured, to be implemented later */}
        <div className="max-w-xl mx-auto bg-card p-6 md:p-8 rounded-lg shadow-lg">
            <p className="text-muted-foreground text-center">Formulario de cotización en desarrollo.</p>
        </div>
      </div>
      <BannerRedesSociales />
    </>
  );
}
