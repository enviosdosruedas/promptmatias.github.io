import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react'; // Or another relevant icon

// WhatsApp Icon SVG Component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.579 2.168 2.129-.565z" />
    </svg>
  );


export function ListoEmprendedores() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-primary text-primary-foreground"> {/* Primary background */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¿Listo para comenzar?
          </h2>
          <p className="max-w-[600px] text-primary-foreground/80 md:text-lg">
            Contáctanos para más información sobre nuestros servicios adaptados a emprendedores.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary" // Use secondary variant for contrast on primary bg
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:scale-105 transition-transform" // Accent button style
          >
            <Link
              href="https://wa.me/+542236602699?text=Hola!%20Encontre%20su%20contacto%20en%20el%20sitio%20web%20y%20me%20gustaria%20mas%20informacion%20sobre%20su%20servicio."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
                <WhatsAppIcon className="h-5 w-5"/> {/* WhatsApp Icon */}
              <span>Contactar por WhatsApp</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
