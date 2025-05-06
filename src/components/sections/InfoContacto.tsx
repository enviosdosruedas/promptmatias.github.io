
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { MapPin, Clock, Mail, Phone, CheckCircle } from 'lucide-react';

// WhatsApp Icon SVG Component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.579 2.168 2.129-.565z" />
    </svg>
  );

export function InfoContacto() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background"> {/* Use standard background */}
      <div className="container px-4 md:px-6">
        {/* Contact Info Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary mb-1 block">
              Contacto Directo
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Información de Contacto
            </h2>
             <div className="mt-4 h-1 w-16 bg-accent mx-auto"></div> {/* Accent line */}
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* WhatsApp Card */}
            <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center pb-4">
                <div className="bg-green-100 p-3 rounded-full mb-3">
                  <WhatsAppIcon className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-primary text-xl">WhatsApp Directo</CardTitle>
                <p className="text-xs text-muted-foreground">Respuesta inmediata garantizada</p>
              </CardHeader>
              <CardContent className="flex-grow pt-0 pb-6 px-6">
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                     <Phone className="h-4 w-4 text-green-600 flex-shrink-0 mt-px" />
                    <div>
                      <h4 className="font-semibold">Línea Directa</h4>
                      <p><strong>223-660-2699</strong></p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-green-600 flex-shrink-0 mt-px" />
                    <div>
                      <h4 className="font-semibold">Atención Inmediata</h4>
                      <p>Respuesta en minutos</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-px" />
                    <div>
                      <h4 className="font-semibold">Soporte Personalizado</h4>
                      <p>Atención dedicada</p>
                    </div>
                  </li>
                  <li className="mt-4">
                    <Button asChild size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Link
                        href="https://wa.me/+542236602699?text=%C2%A1Hola%21%20%F0%9F%91%8B%20Encontr%C3%A9%20su%20contacto%20en%20el%20sitio%20web%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20mensajer%C3%ADa%20%F0%9F%93%A6%20y%20delivery%20%F0%9F%9B%B5.%20%C2%A1Gracias%21"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsAppIcon className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </Link>
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Horarios Card */}
            <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center pb-4">
                 <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <Clock className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-primary text-xl">Horarios de Atención</CardTitle>
                 <p className="text-xs text-muted-foreground">Disponibilidad extendida</p>
              </CardHeader>
              <CardContent className="flex-grow pt-0 pb-6 px-6">
                 <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-px" />
                    <div>
                      <h4 className="font-semibold">Lunes a Viernes</h4>
                      <p>9:00 - 18:00 hs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-px" />
                    <div>
                      <h4 className="font-semibold">Sábados</h4>
                      <p>9:00 - 15:00 hs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-px" />
                    <div>
                      <h4 className="font-semibold">Disponibilidad</h4>
                      <p>Servicios programados</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Zona de Cobertura Card */}
            <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center pb-4">
                 <div className="bg-yellow-100 p-3 rounded-full mb-3">
                  <MapPin className="h-10 w-10 text-yellow-600" />
                </div>
                <CardTitle className="text-primary text-xl">Zona de Cobertura</CardTitle>
                 <p className="text-xs text-muted-foreground">Mar del Plata y alrededores</p>
              </CardHeader>
              <CardContent className="flex-grow pt-0 pb-6 px-6">
                <ul className="space-y-3 text-sm text-foreground/80">
                   <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-px" />
                    <div>
                      <h4 className="font-semibold">Sede Central</h4>
                      <p>Mar del Plata, Argentina</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                     <MapPin className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-px" />
                    <div>
                      <h4 className="font-semibold">Zonas Cubiertas</h4>
                      <p>Toda el área metropolitana</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                     <MapPin className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-px" />
                    <div>
                      <h4 className="font-semibold">Alcance</h4>
                      <p>Zonas aledañas incluidas</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
             <span className="text-sm font-semibold uppercase tracking-wider text-secondary mb-1 block">
               Mapa
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Área de Cobertura
            </h2>
             <div className="mt-4 h-1 w-16 bg-accent mx-auto"></div> {/* Accent line */}
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl border border-border">
             {/* Responsive iframe container */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201064.8340655095!2d-57.69299746566424!3d-38.01288276070881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94d19d34209%3A0xdd9670804bfed126!2sMar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1642532364037!5m2!1ses-419!2sar"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Cobertura Envios DosRuedas"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
