
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, RadioTower } from "lucide-react";

export function RealtimeView() {
  // Placeholder for real-time data
  const activeShipments = 1; // Example
  const lastUpdate = new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });

  return (
    <Card className="shadow-lg sticky top-24">
      <CardHeader>
        <div className="flex items-center gap-3">
          <RadioTower className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">En Tiempo Real</CardTitle>
            <CardDescription>Estado actual de tus envíos activos.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between rounded-md bg-muted/50 p-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-secondary" />
            <p className="font-medium text-foreground">Envíos en curso:</p>
          </div>
          <p className="font-semibold text-lg text-primary">{activeShipments}</p>
        </div>
        <div className="text-sm text-muted-foreground text-right">
          Última actualización: {lastUpdate}
        </div>
        <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
          <p className="text-muted-foreground italic">(Aquí irá el mapa o vista en tiempo real)</p>
        </div>
        <p className="text-xs text-center text-muted-foreground">
          Esta sección mostrará la ubicación de tus envíos activos o notificaciones importantes.
        </p>
      </CardContent>
    </Card>
  );
}
