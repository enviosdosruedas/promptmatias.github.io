
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeroNosotros } from '@/components/sections/HeroNosotros'; 
import { ZonadeCobertura } from '@/components/sections/ZonadeCobertura'; 
import { Star } from 'lucide-react'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Envios DosRuedas | Conócenos',
  description: 'Conoce más sobre Envios DosRuedas, tu aliado en mensajería y delivery en Mar del Plata. Nuestro compromiso, visión y área de cobertura.',
};

// Component for the new "Quiénes Somos" section
function QuienesSomosSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-muted/30"> 
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-last lg:order-first">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-6">
              Quiénes Somos
            </h2>
            <div className="space-y-4 text-foreground/80 md:text-lg leading-relaxed">
              <p>
                Envios DosRuedas es tu aliado confiable en mensajería y delivery en Mar del Plata. Mantenemos una calificación de <strong className="text-primary inline-flex items-center">4.9 <Star className="w-4 h-4 ml-1 text-yellow-500 fill-current" /></strong> en Google Reviews gracias a la confianza de nuestros clientes. Nos dedicamos a brindar soluciones rápidas, económicas y seguras para todas tus necesidades de transporte y logística.
              </p>
              <p>
                Nuestro compromiso con la excelencia y la puntualidad nos ha permitido construir una sólida reputación en la ciudad. Contamos con un equipo profesional dedicado a garantizar que cada envío llegue a tiempo y en perfectas condiciones.
              </p>
            </div>
          </div>
           
           <div className="flex justify-center">
             <Image
              
              src="/img/Headeritems-2.webp" 
               alt="Quiénes Somos Imagen"
               width={600}
               height={400}
               className="rounded-lg shadow-lg object-cover"
               data-ai-hint="team working logistics"
             />
           </div> 
        </div>
      </div>
    </section>
  );
}


export default function SobreNosotrosPage() {
  return (
    <> 
      <HeroNosotros /> 

      {/* Original About Us Content */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-foreground/80 mb-4 md:text-lg leading-relaxed">
              Nacimos de la necesidad de un servicio de mensajería y delivery en moto que sea <strong className="text-primary">confiable, rápido y adaptado</strong> a las dinámicas de la ciudad. Entendemos la urgencia de tus envíos y la importancia de que lleguen a tiempo y en perfecto estado.
            </p>
            <p className="text-foreground/80 mb-4 md:text-lg leading-relaxed">
              Nuestro equipo está formado por <strong className="text-primary">repartidores experimentados</strong> que conocen cada rincón de la ciudad, comprometidos con brindar un servicio eficiente y cordial. Utilizamos la tecnología para optimizar rutas y ofrecerte la mejor experiencia posible.
            </p>
             <p className="text-foreground/80 md:text-lg leading-relaxed">
              Ya sea que necesites un envío express de última hora, una solución regular para tu negocio o una opción económica para envíos programados, <strong className="text-primary">EnviosDosRuedas es tu aliado</strong> en logística urbana.
            </p>
             
             <div className="mt-16 mb-8 flex flex-col items-center text-center space-y-4 animate-fade-in">
                <Image
                  src="/favicon.svg"
                  alt="EnviosDosRuedas Logo Animado"
                  width={100} 
                  height={100}
                  className="animate-pulse hover:scale-110 transition-transform duration-300" 
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
              src="/img/Headeritems-2.webp"
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

       
      <QuienesSomosSection />

       
       <ZonadeCobertura />
    </>
  );
}
