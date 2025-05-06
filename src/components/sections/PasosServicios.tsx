
import { Smartphone, CheckCheck, Truck, PackageCheck } from 'lucide-react'; // Import icons

export function PasosServicios() {
  const steps = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Solicitas tu envío',
      description: 'Realiza tu pedido a través de nuestra web, WhatsApp o por teléfono antes de las 15:00 para entrega el mismo día.',
    },
    {
      icon: <CheckCheck className="h-6 w-6" />,
      title: 'Confirmamos tu pedido',
      description: 'Te contactamos para confirmar los detalles, dirección y rango horario preferido para la recogida o entrega.',
    },
    {
        icon: <Truck className="h-6 w-6" />, // Using Truck icon for pickup
      title: 'Recogemos tu paquete',
      description: 'Nuestro mensajero recoge tu paquete en la dirección y horario acordados, verificando que todo esté en orden.',
    },
    {
      icon: <PackageCheck className="h-6 w-6" />,
      title: 'Entregamos el mismo día',
      description: 'Realizamos la entrega en el mismo día dentro del rango horario seleccionado, con confirmación al finalizar.',
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            ¿Cómo funciona nuestro servicio Express?
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Nuestro proceso está diseñado para ser simple y eficiente, garantizando la mejor experiencia para nuestros clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-secondary-foreground mb-4 border-2 border-secondary/30 shadow-md">
                 <span className="text-xl font-bold mr-2">{index + 1}</span>
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-sm text-foreground/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
