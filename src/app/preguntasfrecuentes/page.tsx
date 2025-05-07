

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HeroFaq } from "@/components/sections/HeroFaq"; 
import { BusquedaFaq } from "@/components/sections/BusquedaFaq"; 
import { MasPreguntas } from "@/components/sections/MasPreguntas"; 
import { BannerRedesSociales } from '@/components/sections/banner-redes-sociales'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Envios DosRuedas | Dudas y Consultas',
  description: 'Encuentra respuestas a tus dudas sobre nuestros servicios de mensajería y delivery en Mar del Plata. Contacta con Envios DosRuedas si necesitas más ayuda.',
};

export default function PreguntasFrecuentesPage() {
  return (
    <> 
      <HeroFaq /> 
      <BusquedaFaq /> 

      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16 max-w-3xl">

         {/* Section: Sobre los servicios en general */}
         <h2 className="text-2xl font-semibold text-primary mt-10 mb-6">Sobre los servicios en general</h2>
         <Accordion type="single" collapsible className="w-full mb-12">
          <AccordionItem value="item-1-1">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Qué tipo de envíos realizan?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
              Transportamos en moto: mandados, trámites, paquetes, delivery y servicios de cadetería.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1-2">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Cuáles son las zonas de cobertura? ¿Cubren toda la ciudad/región?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
              Cubrimos toda la ciudad, con la excepción de algunas zonas catalogadas como peligrosas por motivos de seguridad.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1-3">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Realizan entregas a Contrareembolso?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
              Sí, el efectivo cobrado será rendido en el transcurso del día o al día siguiente.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-1-4">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Cuál es el tiempo estimado de entrega? ¿Ofrecen entregas urgentes?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
             No trabajamos con urgencias. Solicitamos una anticipación mínima de 2 horas para organizarnos y entregar todo en tiempo y forma. Según el tipo de envío, la entrega se realizará en el horario pactado.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-1-5">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Cómo puedo solicitar un servicio de mensajería?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
             Comunícate por mensaje de WhatsApp al 2236602699 y un operador te responderá a la brevedad.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1-6">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Cuáles son sus horarios de atención/servicio?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
              Nuestro horario de atención es de lunes a viernes de 8 a 18 hs y sábados de 9 a 15 hs. Consulta por WhatsApp para el servicio de delivery nocturno.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-1-7">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Trabajan con empresas o solo con particulares?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
              Atendemos empresas, emprendedores y particulares.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1-8">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Qué los diferencia de otros servicios de mensajería en moto?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
              Buscamos brindar un servicio de excelente calidad, donde la responsabilidad y la confianza son nuestros principales pilares.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

         {/* Section: Sobre los precios y pagos */}
         <h2 className="text-2xl font-semibold text-primary mt-10 mb-6">Sobre los precios y pagos</h2>
         <Accordion type="single" collapsible className="w-full mb-12">
          <AccordionItem value="item-2-1">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Cómo calculan el costo del envío?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
              El costo de envío se calcula según la distancia entre el retiro y la entrega, y adicionales que puedan existir (bulto, lluvia, demora, distancia de retiro).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2-2">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Cuáles son las formas de pago que aceptan?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
             Se puede abonar en efectivo o por transferencia.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2-3">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Emiten factura?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
             Realizamos factura C.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-2-4">
            <AccordionTrigger className="text-primary hover:text-secondary">¿Ofrecen descuentos para emprendedores o clientes masivos?</AccordionTrigger>
            <AccordionContent className="text-foreground/80">
             Sí, ofrecemos planes especiales para emprendedores y clientes con muchos envíos.
            </AccordionContent>
          </AccordionItem>
         </Accordion>

         {/* Section: Sobre el proceso de envío */}
         <h2 className="text-2xl font-semibold text-primary mt-10 mb-6">Sobre el proceso de envío</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-3-1">
                <AccordionTrigger className="text-primary hover:text-secondary">¿Qué información necesito proporcionar para solicitar un envío?</AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                 Para solicitar un envío necesitamos los siguientes datos: dirección de retiro, dirección de entrega, tamaño del envío, nombre y teléfono de quien recibe.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3-2">
                <AccordionTrigger className="text-primary hover:text-secondary">¿Puedo modificar la dirección de entrega una vez que el envío está en curso?</AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                 Sí, pero dependiendo de la distancia, podría tener un costo adicional.
                </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-3-3">
                <AccordionTrigger className="text-primary hover:text-secondary">¿Qué sucede si el destinatario no está presente en el momento de la entrega?</AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                El envío será cobrado de igual manera, y se deberá reprogramar la entrega y abonar otro envío.
                </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-3-4">
                <AccordionTrigger className="text-primary hover:text-secondary">¿Qué pasa si necesito cancelar un envío? ¿Hay algún cargo?</AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                 Depende del momento de la cancelación y a qué distancia de la entrega o el retiro se encuentre el cadete.
                </AccordionContent>
            </AccordionItem>
          </Accordion>
      </div>
       <MasPreguntas /> 
      <BannerRedesSociales /> 
    </>
  );
}
