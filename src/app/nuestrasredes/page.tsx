
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Package, Globe, Phone, MessageSquare } from "lucide-react"; // Added more icons
import { HeroNuestrasRedes } from '@/components/sections/HeroNuestrasRedes'; // Import the new hero section

// New 'verredes' section component (integrated directly for simplicity)
function VerRedesSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-primary">
            ¡Conéctate con nosotros!
          </h2>
          <p className="max-w-[600px] mx-auto text-foreground/80 md:text-lg mt-3">
            Sigue nuestras redes sociales para acceder a promociones exclusivas, actualizaciones y más beneficios.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Instagram Section */}
          <Card className="overflow-hidden shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-background border-b">
              <CardTitle className="text-lg font-semibold text-primary">Instagram</CardTitle>
              <Instagram className="h-6 w-6 text-pink-600" />
            </CardHeader>
            <CardContent className="p-4 md:p-6 space-y-4">
              <div className="overflow-hidden mx-auto max-w-sm">
                 {/* Note: Instagram embeds can be tricky and might require official APIs or might break.
                      This is a basic iframe attempt based on the provided HTML.
                      Consider using official embed tools if available. */}
                 <iframe
                    src="https://www.instagram.com/p/C5YKXy0un7Y/embed/" // Example embed URL
                    width="100%"
                    height="500" // Adjust height as needed
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true" // Corrected attribute name
                    className="w-full h-full border-0 overflow-hidden"
                    title="Instagram Post"
                  ></iframe>
              </div>
              <div className="text-sm text-foreground/80 space-y-2 text-center md:text-left">
                 {/* Simplified text content */}
                 <p>
                   <strong>📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀</strong><br />
                   ~ ¡Somos la solución para tus envíos en Mar del Plata! ~<br />
                   Servicio confiable y de calidad.
                 </p>
                 <p>
                    👉 Confianza y responsabilidad son nuestros pilares.
                 </p>
                 <p className="flex items-center justify-center md:justify-start gap-1">
                   <Globe className="h-4 w-4 inline-block mr-1 text-secondary flex-shrink-0"/> Cotizá en nuestra web: <Link href="/" className="text-secondary underline hover:text-secondary/80 ml-1">enviosdosruedas.com</Link>
                 </p>
                  <p className="flex flex-wrap items-center justify-center md:justify-start gap-1">
                    <MessageSquare className="h-4 w-4 inline-block mr-1 text-green-600 flex-shrink-0"/> WhatsApp <Link href="https://wa.me/+542236602699" target="_blank" rel="noopener noreferrer" className="text-secondary underline hover:text-secondary/80 mx-1">2236602699</Link> | <Instagram className="h-4 w-4 inline-block mx-1 text-pink-600 flex-shrink-0" /> Instagram <Link href="https://www.instagram.com/enviosdosruedas/" target="_blank" rel="noopener noreferrer" className="text-secondary underline hover:text-secondary/80 ml-1">@enviosdosruedas</Link>
                  </p>
              </div>
            </CardContent>
          </Card>

          {/* Facebook Section */}
          <Card className="overflow-hidden shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-background border-b">
              <CardTitle className="text-lg font-semibold text-primary">Facebook</CardTitle>
              <Facebook className="h-6 w-6 text-blue-800" />
            </CardHeader>
            <CardContent className="p-4 md:p-6 space-y-6 flex flex-col items-center"> {/* Increased space-y */}
               {/* Facebook iframe */}
               <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fenviosdosruedas&tabs=timeline&width=340&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" // Adjusted height and small_header
                  width="340"
                  height="400" // Reduced height
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Page Plugin"
                ></iframe>

               {/* Added text content below iframe */}
              <div className="text-sm text-foreground/80 space-y-3 text-center w-full max-w-sm"> {/* Added width constraint */}
                <p className="flex items-center justify-center gap-2 font-semibold text-base">
                   <Package className="h-5 w-5 text-primary flex-shrink-0" />
                   MENSAJERÍA ENVÍOS DOSRUEDAS
                   {/* Removed rocket emoji for cleaner look */}
                 </p>
                 <p className="italic">
                   ~ ¡Somos la solución para tus envíos en Mar del Plata! ~<br />
                   Servicio confiable y de calidad.
                 </p>
                 <p>
                    👉 Confianza y responsabilidad son nuestros pilares.
                 </p>
                 <p className="flex items-center justify-center gap-1">
                   <Globe className="h-4 w-4 inline-block mr-1 text-secondary flex-shrink-0"/> Cotizá en nuestra web: <Link href="/" className="text-secondary underline hover:text-secondary/80 ml-1">enviosdosruedas.com</Link>
                 </p>
                  <p className="flex flex-wrap items-center justify-center gap-1">
                    <MessageSquare className="h-4 w-4 inline-block mr-1 text-green-600 flex-shrink-0"/> WhatsApp <Link href="https://wa.me/+542236602699" target="_blank" rel="noopener noreferrer" className="text-secondary underline hover:text-secondary/80 mx-1">2236602699</Link> | <Instagram className="h-4 w-4 inline-block mx-1 text-pink-600 flex-shrink-0" /> Instagram <Link href="https://www.instagram.com/enviosdosruedas/" target="_blank" rel="noopener noreferrer" className="text-secondary underline hover:text-secondary/80 ml-1">@enviosdosruedas</Link>
                  </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


export default function NuestrasRedesPage() {
  return (
    <> {/* Added Fragment */}
      <HeroNuestrasRedes /> {/* Integrate the hero section */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        {/* Removed the h1 as it's now in the Hero component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Instagram className="h-12 w-12 mx-auto text-pink-600" />
              <CardTitle className="mt-4 text-primary">Instagram</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                Enterate de nuestras novedades, promociones y mirá el día a día de nuestros envíos.
              </p>
              <Button asChild variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                <Link href="https://instagram.com/enviosdosruedas" target="_blank" rel="noopener noreferrer">
                  Seguir en Instagram
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Facebook className="h-12 w-12 mx-auto text-blue-800" />
              <CardTitle className="mt-4 text-primary">Facebook</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                Conectate con nuestra comunidad, compartí experiencias y accedé a contenido exclusivo.
              </p>
              <Button asChild variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-50">
                <Link href="https://facebook.com/enviosdosruedas" target="_blank" rel="noopener noreferrer">
                  Seguir en Facebook
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Add more social networks if needed */}
          <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 opacity-50 cursor-not-allowed">
            <CardHeader>
              <Linkedin className="h-12 w-12 mx-auto text-blue-600" />
              <CardTitle className="mt-4 text-primary">LinkedIn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                Próximamente conectaremos con profesionales y empresas.
              </p>
              <Button disabled variant="outline" className="border-gray-400 text-gray-400">
                Próximamente
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
       <VerRedesSection /> {/* Integrate the new section here */}
      {/* BannerRedesSociales might be redundant now, consider removing or keeping */}
      {/* <BannerRedesSociales /> */}
    </>
  );
}
