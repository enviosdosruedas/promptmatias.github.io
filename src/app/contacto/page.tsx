
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { HeroContacto } from "@/components/sections/HeroContacto"; // Import the new Hero component

export default function ContactoPage() {
  return (
    <> {/* Added Fragment */}
      <HeroContacto /> {/* Integrate the Hero component */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        {/* Removed the original H1 title */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Envíanos un mensaje</CardTitle>
            <CardDescription>
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" placeholder="Tu nombre" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="Asunto del mensaje" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
