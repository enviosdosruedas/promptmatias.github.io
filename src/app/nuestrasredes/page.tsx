import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react"; // Assuming you might add LinkedIn later
import { HeroNuestrasRedes } from '@/components/sections/HeroNuestrasRedes'; // Import the new hero section

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
    </>
  );
}
