
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeroNosotros } from '@/components/sections/HeroNosotros'; // Import the hero section
import { ZonadeCobertura } from '@/components/sections/ZonadeCobertura'; // Import the coverage section

export default function SobreNosotrosPage() {
  return (
    <> {/* Use Fragment to wrap multiple top-level elements */}
      <HeroNosotros /> {/* Add the Hero section here */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            {/* Removed h1 as it's now in HeroNosotros */}
            <p className="text-foreground/80 mb-4 md:text-lg leading-relaxed">
              Nacimos de la necesidad de un servicio de mensajería y delivery en moto que sea <strong className="text-primary">confiable, rápido y adaptado</strong> a las dinámicas de la ciudad. Entendemos la urgencia de tus envíos y la importancia de que lleguen a tiempo y en perfecto estado.
            </p>
            <p className="text-foreground/80 mb-4 md:text-lg leading-relaxed">
              Nuestro equipo está formado por <strong className="text-primary">repartidores experimentados</strong> que conocen cada rincón de la ciudad, comprometidos con brindar un servicio eficiente y cordial. Utilizamos la tecnología para optimizar rutas y ofrecerte la mejor experiencia posible.
            </p>
             <p className="text-foreground/80 md:text-lg leading-relaxed">
              Ya sea que necesites un envío express de última hora, una solución regular para tu negocio o una opción económica para envíos programados, <strong className="text-primary">EnviosDosRuedas es tu aliado</strong> en logística urbana.
            </p>
             {/* Animated Logo, Name, Slogan Section */}
             <div className="mt-16 mb-8 flex flex-col items-center text-center space-y-4 animate-fade-in">
                <Image
                  src="/favicon.svg"
                  alt="EnviosDosRuedas Logo Animado"
                  width={100} // Increased size
                  height={100}
                  className="animate-pulse hover:scale-110 transition-transform duration-300" // Added pulse and hover effect
                />
                <h2 className="text-3xl font-bold text-primary mt-4">
                  Envios DosRuedas
                </h2>
                <p className="text-lg italic text-foreground/70 animate-fade-in animation-delay-200">
                  Tu solución confiable para mensajería y delivery en Mar del Plata.
                </p>
              </div>
          </div>
          <div className="relative">
            <Image
              src="https://picsum.photos/600/700"
              alt="Equipo EnviosDosRuedas"
              width={600}
              height={700}
              className="rounded-lg shadow-lg object-cover aspect-[4/5]"
               data-ai-hint="team delivery city"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
          </div>
        </div>
      </div>
       {/* Integrate ZonadeCobertura section here */}
       <ZonadeCobertura />
    </>
  );
}
