import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bike, Package, Clock, HandCoins } from 'lucide-react';

const services = [
  {
    icon: <Bike className="h-8 w-8 text-secondary" />,
    title: 'Delivery Moto Fija',
    description: 'Asignación de un repartidor fijo para tus necesidades regulares.',
  },
  {
    icon: <Clock className="h-8 w-8 text-secondary" />,
    title: 'Delivery Moto Express',
    description: 'Entregas urgentes en moto, la solución más rápida para tus envíos.',
  },
  {
    icon: <Package className="h-8 w-8 text-secondary" />,
    title: 'Mensajería Express',
    description: 'Servicio de mensajería rápido y seguro para documentos y paquetes.',
  },
  {
    icon: <HandCoins className="h-8 w-8 text-secondary" />,
    title: 'Mensajería Low Cost',
    description: 'Envíos económicos programados para optimizar tus costos.',
  },
  // Add more services if needed based on the provided pages
];

export function ServiceOverview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                {service.icon}
                <CardTitle className="mt-4 text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
