
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, PackageSearch, BadgePercent } from 'lucide-react';
import { HeroEmprendedores } from '@/components/sections/HeroEmprendedores'; // Import the new Hero component
import { InfoEmprendedores } from '@/components/sections/InfoEmprendedores'; // Import the new InfoEmprendedores component
import { PrecioEmprendedores } from '@/components/sections/PrecioEmprendedores'; // Import the new Pricing component
import { CompromisoEmprendedores } from '@/components/sections/CompromisoEmprendedores'; // Import the new CompromisoEmprendedores component
import { RecomendacionesEmprendedores } from '@/components/sections/RecomendacionesEmprendedores'; // Import the new component
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; // Import banner

export default function EnviosEmprendedoresPage() {
  return (
    <> {/* Add fragment */}
      <HeroEmprendedores /> {/* Add the Hero component here */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="order-last md:order-first">
            <Image
              src="https://picsum.photos/600/400"
              alt="Envíos para Emprendedores"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover aspect-video"
              data-ai-hint="small business package"
            />
          </div>
          <div>
            {/* Removed the h1 as it's now in the Hero component */}
            <p className="text-foreground/80 mb-6 md:text-lg">
              Sabemos lo importante que es la logística para tu emprendimiento. Ofrecemos tarifas especiales y soluciones flexibles diseñadas para ayudarte a crecer, entregando tus productos de forma rápida y eficiente a tus clientes.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <BadgePercent className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Tarifas Competitivas</h3>
                  <p className="text-sm text-foreground/80">Precios especiales pensados para el volumen y las necesidades de los emprendedores.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PackageSearch className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Flexibilidad y Adaptabilidad</h3>
                  <p className="text-sm text-foreground/80">Nos adaptamos a tus horarios de recolección y entrega.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Handshake className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Alianza Estratégica</h3>
                  <p className="text-sm text-foreground/80">Somos más que un courier, somos tu socio logístico para impulsar tu negocio.</p>
                </div>
              </div>
            </div>
            <Link href="/contacto">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Consultar Tarifas para Emprendedores
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <InfoEmprendedores /> {/* Integrate the InfoEmprendedores component here */}
      <PrecioEmprendedores /> {/* Integrate the PrecioEmprendedores component here */}
      <CompromisoEmprendedores /> {/* Integrate the CompromisoEmprendedores component here */}
      <RecomendacionesEmprendedores /> {/* Integrate the new component */}
       <BannerRedesSociales /> {/* Add banner at the end */}
    </>
  );
}
