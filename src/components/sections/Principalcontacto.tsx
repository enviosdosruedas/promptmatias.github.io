import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

// WhatsApp Icon SVG Component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.579 2.168 2.129-.565z" />
    </svg>
  );

export function Principalcontacto() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30"> {/* Use muted background */}
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center"> {/* Center content */}
          <Card className="bg-card shadow-lg rounded-lg overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  Envíos DosRuedas
                </h2>
                <h3 className="text-lg font-semibold text-secondary">
                  Mensajería y Delivery
                </h3>
                <p className="text-sm text-foreground/80">
                  Comunicate <strong className="text-primary">exclusivamente</strong> por mensaje de WhatsApp para una respuesta más rápida y eficiente.
                </p>
                <div className="flex flex-col items-center gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-6 w-6 text-green-600" /> {/* Use Phone icon */}
                    <h3 className="text-xl font-bold text-green-700 tracking-wider">
                      223-660-2699
                    </h3>
                  </div>
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full max-w-xs">
                    <Link
                      href="https://wa.me/+542236602699?text=%C2%A1Hola%21%20%F0%9F%91%8B%20Encontr%C3%A9%20su%20contacto%20en%20el%20sitio%20web%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20mensajer%C3%ADa%20%F0%9F%93%A6%20y%20delivery%20%F0%9F%9B%B5.%20%C2%A1Gracias%21"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="mr-2 h-5 w-5"/>
                      Enviar Mensaje
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
