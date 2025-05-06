
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Faqmenenvexpress() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Preguntas frecuentes sobre Envíos Express
          </h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Respondemos a las dudas más comunes sobre nuestro servicio de mensajería express.
          </p>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-primary hover:text-secondary text-left">
                ¿Cuál es el horario límite para solicitar una entrega el mismo día?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                <p>
                  Para garantizar la entrega el mismo día, debes realizar tu pedido antes de las 15:00. Los pedidos recibidos después de esa hora serán programados para el siguiente día hábil.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-primary hover:text-secondary text-left">
                ¿Puedo elegir un horario específico para la entrega?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                <p>
                  Sí, ofrecemos rangos horarios que puedes seleccionar para la entrega de tu paquete, por ejemplo: mañana (9:00 a 13:00) o tarde (13:00 a 18:00). Para horarios más específicos, contáctanos directamente.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-primary hover:text-secondary text-left">
                ¿Cuál es la diferencia entre el servicio Express y LowCost?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                <p>
                  El servicio Express garantiza entrega el mismo día con prioridad y permite elegir rangos horarios específicos. El servicio LowCost es más económico, pero no ofrece elección de horario y tiene menor prioridad en la ruta de entrega.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-primary hover:text-secondary text-left">
                ¿Cuál es el peso máximo que puedo enviar?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                <p>
                  Nuestro servicio Express está diseñado para paquetes de hasta 10kg. Para envíos de mayor peso, ofrecemos soluciones personalizadas. Contáctanos para obtener más información.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-primary hover:text-secondary text-left">
                ¿Se puede rastrear el envío en tiempo real?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                <p>
                  Sí, proporcionamos actualizaciones de estado y te notificamos cuando el paquete está en camino y cuando ha sido entregado. Para consultas específicas durante el trayecto, puedes contactarnos directamente. (Próximamente disponible)
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
