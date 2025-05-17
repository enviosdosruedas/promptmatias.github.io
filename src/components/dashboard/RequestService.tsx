
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Send } from "lucide-react";
import Link from "next/link";

export function RequestService() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Send className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">Solicitar Nuevo Servicio</CardTitle>
            <CardDescription>¿Necesitas realizar un nuevo envío? Haz clic aquí.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-4">
        <p className="text-muted-foreground">
          Programa tu próximo envío express, low-cost, o cualquier otro de nuestros servicios de forma rápida y sencilla.
        </p>
        <Link href="/cotizador-envios-express" passHref>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <PlusCircle className="mr-2 h-5 w-5" />
            Nuevo Envío
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
