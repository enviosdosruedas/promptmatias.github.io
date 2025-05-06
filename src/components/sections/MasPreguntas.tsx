
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PhoneOutgoing } from 'lucide-react'; // Import an appropriate icon

export function MasPreguntas() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-secondary/10"> {/* Use secondary color with opacity */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
           {/* Optional Icon */}
           <div className="bg-primary/10 p-3 rounded-full">
             <PhoneOutgoing className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-primary">
            ¿Tienes más preguntas?
          </h3>
          <p className="max-w-[600px] text-foreground/80 md:text-lg">
            Nuestro equipo está listo para ayudarte con cualquier duda que tengas sobre nuestros servicios.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contacto">
              Contáctanos ahora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
