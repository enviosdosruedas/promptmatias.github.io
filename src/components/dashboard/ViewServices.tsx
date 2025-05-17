
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Package } from "lucide-react";

export function ViewServices() {
  // Placeholder data - replace with actual data fetching later
  const services = [
    { id: '1', name: 'Envío Express #123', status: 'En Camino', date: '2024-05-18' },
    { id: '2', name: 'Recolección Low-Cost #456', status: 'Programado', date: '2024-05-19' },
    { id: '3', name: 'Entrega Documentos #789', status: 'Entregado', date: '2024-05-17' },
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <ListChecks className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">Mis Servicios Solicitados</CardTitle>
            <CardDescription>Un resumen de tus envíos recientes y programados.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {services.length > 0 ? (
          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service.id} className="flex items-center justify-between rounded-md border bg-background p-4 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">{service.name}</p>
                    <p className="text-sm text-muted-foreground">Fecha: {service.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full
                  ${service.status === 'En Camino' ? 'bg-blue-100 text-blue-700' : ''}
                  ${service.status === 'Programado' ? 'bg-yellow-100 text-yellow-700' : ''}
                  ${service.status === 'Entregado' ? 'bg-green-100 text-green-700' : ''}
                `}>
                  {service.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">No has solicitado ningún servicio aún.</p>
        )}
      </CardContent>
    </Card>
  );
}
