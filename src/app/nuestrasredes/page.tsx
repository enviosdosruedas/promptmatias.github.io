

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Facebook, MessageSquare, Package, Globe, Phone, Star } from "lucide-react"; // Added MessageSquare, removed Linkedin
import { HeroNuestrasRedes } from '@/components/sections/HeroNuestrasRedes'; // Import the new hero section
import { MasPreguntas } from "@/components/sections/MasPreguntas"; // Import the new section
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; // Import the new component
import * as React from 'react'; // Import React for iframe style object

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
          <Card className="rounded-lg border bg-card text-card-foreground overflow-hidden shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-background border-b">
              <CardTitle className="text-lg font-semibold text-primary">Instagram</CardTitle>
              <Instagram className="h-6 w-6 text-pink-600" />
            </CardHeader>
             <CardContent className="p-4 md:p-6 space-y-4 flex flex-col items-center"> {/* Adjusted space */}
                 {/* Instagram iframe */}
                 <iframe
                    allow="fullscreen"
                    className="instagram-media w-full border-0 overflow-hidden rounded-lg shadow-inner mb-4" // Added shadow-inner
                    frameBorder="0"
                    scrolling="no"
                    src="https://www.instagram.com/p/DAw1gDUREEV/embed/captioned" // Keep original or replace with a valid embed src
                    style={{ background: 'white', height: '400px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }} // Style as JS object
                    data-ss-id="SlL1H6Q_IFHOOQ_8ZRD_k" // These might be specific to the original embed tool
                    data-ss-padding="" // These might be specific to the original embed tool
                    data-ss-border="" // These might be specific to the original embed tool
                    title="Instagram Post Embed" // Added title for accessibility
                  ></iframe>
                  {/* Added text content below iframe */}
                   <div className="text-sm text-foreground/80 space-y-3 text-center w-full max-w-sm"> {/* Added width constraint */}
                     <p className="flex items-center justify-center gap-2 font-semibold text-base text-primary">
                        <Package className="h-5 w-5 text-primary flex-shrink-0" />
                        MENSAJERÍA ENVÍOS DOSRUEDAS 🚀
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

          {/* Facebook Section */}
          <Card className="rounded-lg border bg-card text-card-foreground overflow-hidden shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-background border-b">
              <CardTitle className="text-lg font-semibold text-primary">Facebook</CardTitle>
              <Facebook className="h-6 w-6 text-blue-800" />
            </CardHeader>
            <CardContent className="p-4 md:p-6 space-y-4 flex flex-col items-center"> {/* Adjusted space */}
               {/* Facebook iframe */}
               <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fenviosdosruedas&tabs=timeline&width=340&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" // Adjusted height and small_header
                  width="340"
                  height="400" // Reduced height
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Page Plugin"
                  className="rounded-lg shadow-inner mb-4" // Added shadow-inner
                  allowFullScreen // Allow fullscreen attribute
                ></iframe>

               {/* Added text content below iframe */}
              <div className="text-sm text-foreground/80 space-y-3 text-center w-full max-w-sm"> {/* Added width constraint */}
                <p className="flex items-center justify-center gap-2 font-semibold text-base text-primary">
                   <Package className="h-5 w-5 text-primary flex-shrink-0" />
                   MENSAJERÍA ENVÍOS DOSRUEDAS 🚀
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

          {/* WhatsApp Card */}
          <Card className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              {/* Using MessageSquare for WhatsApp */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.579 2.168 2.129-.565z" />
                </svg>
              <CardTitle className="mt-4 text-primary">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">
                Comunícate directamente con nosotros para consultas o cotizaciones rápidas.
              </p>
              <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <Link href="https://wa.me/+542236602699?text=%C2%A1Hola%21%20%F0%9F%91%8B%20Encontr%C3%A9%20su%20contacto%20en%20el%20sitio%20web%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20mensajer%C3%ADa%20%F0%9F%93%A6%20y%20delivery%20%F0%9F%9B%B5.%20%C2%A1Gracias%21" target="_blank" rel="noopener noreferrer">
                 <span>WhatsApp: 2236602699</span>
                </Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
       <VerRedesSection /> {/* Integrate the new section here */}
      {/* BannerRedesSociales might be redundant now, consider removing or keeping */}
      {/* <BannerRedesSociales /> */}
       <MasPreguntas /> {/* Integrate the new section here */}
       <BannerRedesSociales /> {/* Add the banner here */}
    </>
  );
}
