
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
             <div className="mt-10">
              <h2 className="text-2xl font-semibold text-primary mb-4">Nuestro Equipo (Ejemplo)</h2>
              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-2 border-2 border-secondary">
                     <AvatarImage src="https://picsum.photos/100/100?random=1" alt="Miembro del equipo 1" data-ai-hint="smiling person" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <p className="font-medium text-primary">Juan Perez</p>
                  <p className="text-sm text-foreground/60">Fundador & Logística</p>
                </div>
                 <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-2 border-2 border-secondary">
                     <AvatarImage src="https://picsum.photos/100/100?random=2" alt="Miembro del equipo 2" data-ai-hint="professional woman" />
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                   <p className="font-medium text-primary">Maria Garcia</p>
                  <p className="text-sm text-foreground/60">Atención al Cliente</p>
                </div>
                 <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-2 border-2 border-secondary">
                     <AvatarImage src="https://picsum.photos/100/100?random=3" alt="Miembro del equipo 3" data-ai-hint="delivery rider" />
                    <AvatarFallback>CR</AvatarFallback>
                  </Avatar>
                  <p className="font-medium text-primary">Carlos Rodriguez</p>
                  <p className="text-sm text-foreground/60">Jefe de Repartidores</p>
                </div>
              </div>
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
