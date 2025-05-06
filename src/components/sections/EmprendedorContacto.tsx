import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Instagram, Facebook } from 'lucide-react'; // Import relevant icons

// WhatsApp Icon SVG Component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.579 2.168 2.129-.565z" />
  </svg>
);


export function EmprendedorContacto() {
  return (
    <> {/* Fragment to wrap multiple sections */}
      {/* Section: ¿Sos emprendedor? */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                ¿Sos emprendedor?
              </h2>
              <p className="text-lg text-foreground/80 md:text-xl">
                Si vendés por internet o tenés un local,<br />
                ¡nosotros te ayudamos con tus envíos!
              </p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                <Link
                  href="https://wa.me/+542236602699?text=%C2%A1Hola%21%20%F0%9F%91%8B%20Encontr%C3%A9%20su%20contacto%20en%20el%20sitio%20web%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20mensajer%C3%ADa%20%F0%9F%93%A6%20y%20delivery%20%F0%9F%9B%B5.%20%C2%A1Gracias%21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" /> {/* Use WhatsApp Icon */}
                  Consultar por Envíos
                </Link>
              </Button>
            </div>
            {/* Placeholder for Facebook Video - Using Card as container */}
            {/* Note: Facebook video embedding often requires client-side JS or specific SDKs for full functionality */}
            <div className="flex justify-center">
              <Card className="w-full max-w-md overflow-hidden shadow-lg">
                <CardContent className="p-0 aspect-video relative">
                  {/* Placeholder: Replace with actual video or image */}
                   <div className="bg-muted h-full flex items-center justify-center text-muted-foreground">
                     (Video de Facebook Emprendedores)
                   </div>
                  {/* Example using iframe (needs a valid src) */}
                   {/* <iframe
                     src="https://www.facebook.com/plugins/video.php?href=YOUR_VIDEO_URL" // Replace with actual URL
                     className="absolute inset-0 w-full h-full"
                     allowFullScreen={true}
                     allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                     title="Video para Emprendedores"
                   ></iframe> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Seguinos en nuestras redes */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-1">
              Seguinos en nuestras redes
            </h3>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-primary">
              ¡Mantente conectado! 🛵
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Facebook Card */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Facebook className="h-8 w-8 text-blue-800" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Facebook</h3>
                    <p className="text-sm text-muted-foreground">Seguinos para ver nuestras últimas novedades</p>
                  </div>
                </div>
                 {/* Placeholder for Facebook Page Plugin/Quote */}
                  <blockquote className="text-sm italic border-l-4 border-border pl-4 py-2 bg-background/50 rounded-r-md">
                    <Link href="https://www.facebook.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        Visita nuestra página en Facebook
                    </Link>
                     {/* Or embed the page plugin iframe if desired, similar to the video section */}
                  </blockquote>
              </CardContent>
            </Card>

            {/* Instagram Card */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                 <div className="flex items-center gap-4 mb-4">
                  <Instagram className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Instagram</h3>
                    <p className="text-sm text-muted-foreground">Seguí nuestro día a día en Instagram</p>
                  </div>
                </div>
                 {/* Placeholder for Instagram Embed */}
                 <div className="bg-muted rounded-md aspect-square flex items-center justify-center text-muted-foreground">
                    (Feed de Instagram @enviosdosruedas)
                 </div>
                 {/* Example Instagram Embed iframe (needs a valid src) */}
                 {/* <iframe
                    src="https://www.instagram.com/enviosdosruedas/embed" // Replace if needed
                    className="w-full h-64 border rounded-md" // Basic styling
                    title="Instagram Feed"
                  ></iframe> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
