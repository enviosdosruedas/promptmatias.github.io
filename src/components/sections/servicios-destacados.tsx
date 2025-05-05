
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket, DollarSign, UtensilsCrossed, CheckCircle, Clock, Package, Info } from 'lucide-react';

const featuredServices = [
  {
    icon: <Rocket className="h-10 w-10 text-accent" />,
    title: 'Envíos Express',
    description: 'Entregas garantizadas el mismo día para pedidos solicitados antes de las 15:00.',
    features: [
      { icon: <Rocket className="h-4 w-4 text-accent flex-shrink-0" />, text: 'Entrega mismo día' },
      { icon: <Clock className="h-4 w-4 text-accent flex-shrink-0" />, text: 'Rango horario a elección' },
      { icon: <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />, text: 'Servicio prioritario' },
    ],
    infoLink: '/mensajeria-envios-express', // Link to the detailed service page
    tip: 'Un embalaje adecuado asegura la integridad de tus productos durante el envío.',
  },
  {
    icon: <DollarSign className="h-10 w-10 text-secondary" />,
    title: 'Envíos LowCost',
    description: 'Servicio económico con entregas entre 10:00 y 19:00. Ideal para envíos que no requieren horario específico.',
    features: [
      { icon: <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />, text: 'Precio económico' },
      { icon: <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />, text: 'Entrega garantizada' },
      { icon: <Package className="h-4 w-4 text-secondary flex-shrink-0" />, text: 'Mismo día disponible (consultar)' },
    ],
    infoLink: '/mensajeria-envios-lowcost', // Link to the detailed service page
    tip: 'Un embalaje adecuado asegura la integridad de tus productos durante el envío.',
  },
  {
    icon: <UtensilsCrossed className="h-10 w-10 text-green-600" />, // Using green for food
    title: 'Delivery Gastronómico',
    description: 'Servicio especializado para restaurantes y comercios. Entregas rápidas y cuidadosas para tus productos frescos.',
    features: [
      { icon: <Clock className="h-4 w-4 text-green-600 flex-shrink-0" />, text: 'Entrega en tiempo récord' },
      { icon: <Package className="h-4 w-4 text-green-600 flex-shrink-0" />, text: 'Manipulación segura de alimentos' },
      { icon: <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />, text: 'Cobertura en toda la ciudad' },
    ],
    infoLink: '/delivery-moto-express', // Link to the relevant page (could be express or fija)
    tip: 'Elige envases adecuados para mantener la calidad de tus productos.',
  },
];

export function ServiciosDestacados() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Nuestros Servicios Destacados
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Brindamos soluciones profesionales adaptadas a tus necesidades. ¡Vos encárgate de vender, nosotros hacemos el envío!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {featuredServices.map((service, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardHeader className="items-center text-center p-6 bg-background">
                 <div className="bg-gradient-to-br from-background to-muted/50 p-4 rounded-full mb-4 border">
                    {service.icon}
                 </div>
                <CardTitle className="text-primary text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-foreground/70 text-sm min-h-[40px]">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <ul className="space-y-2 text-sm text-foreground/80 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      {feature.icon}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10 mb-4">
                  <Link href={service.infoLink}>
                    Información
                  </Link>
                </Button>
                <div className="flex items-start gap-2 text-xs text-foreground/60 border-t pt-3 mt-3">
                  <Info className="h-3.5 w-3.5 flex-shrink-0 mt-px" />
                  <span>{service.tip}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
