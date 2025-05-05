import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function PreguntasFrecuentesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
        Preguntas Frecuentes
      </h1>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-primary hover:text-secondary">¿Qué zonas cubren?</AccordionTrigger>
          <AccordionContent className="text-foreground/80">
            Cubrimos toda Capital Federal y gran parte de GBA. Podés consultar nuestra área de cobertura exacta en la sección de [Link a sección de cobertura si existe] o contactándonos directamente.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-primary hover:text-secondary">¿Cuáles son los horarios de servicio?</AccordionTrigger>
          <AccordionContent className="text-foreground/80">
            Nuestro horario de atención y reparto es de Lunes a Viernes de 9:00 a 18:00 hs y Sábados de 9:00 a 13:00 hs. Para servicios fuera de horario, por favor consultanos.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-primary hover:text-secondary">¿Cómo cotizo un envío?</AccordionTrigger>
          <AccordionContent className="text-foreground/80">
            Podés utilizar nuestros cotizadores online para envíos Express y Low Cost haciendo click en el botón "Cotizá tu envío" en la página principal o en las páginas de servicio correspondientes. También podés contactarnos por WhatsApp o teléfono para cotizaciones personalizadas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-primary hover:text-secondary">¿Qué tipo de paquetes transportan?</AccordionTrigger>
          <AccordionContent className="text-foreground/80">
            Transportamos principalmente documentos, paquetes pequeños y medianos, y comida (delivery). El peso máximo suele ser de X kg y las dimensiones máximas de X cm x X cm x X cm. Si tenés dudas sobre un envío específico, contactanos.
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="item-5">
          <AccordionTrigger className="text-primary hover:text-secondary">¿Qué diferencia hay entre Envío Express y Low Cost?</AccordionTrigger>
          <AccordionContent className="text-foreground/80">
            El Envío Express es para entregas urgentes, realizadas en el menor tiempo posible. El Envío Low Cost es más económico y se realiza de forma programada, optimizando rutas, ideal para envíos sin apuro.
          </AccordionContent>
        </AccordionItem>
         <AccordionItem value="item-6">
          <AccordionTrigger className="text-primary hover:text-secondary">¿Cómo puedo pagar?</AccordionTrigger>
          <AccordionContent className="text-foreground/80">
            Aceptamos diversos medios de pago, incluyendo efectivo, transferencia bancaria y Mercado Pago. Consultanos por las opciones disponibles al momento de solicitar tu servicio.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}