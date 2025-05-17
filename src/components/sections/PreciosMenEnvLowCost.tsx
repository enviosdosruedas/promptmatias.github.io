
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Removed CardDescription
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { CheckCircle, DollarSign, Info } from 'lucide-react'; // Removed Tag, Bike

const pricingTiers = [
  {
    distance: "Hasta 3 Km",
    price: "$2000",
    features: [
      "Solicitado antes 13hs",
      "Servicio LowCost",
      "Pueden existir adicionales",
    ],
    whatsappLink: "https://wa.me/+542236602699?text=Hola%20%F0%9F%91%8B%2C%20Necesito%20un%20envio%20de%20una%20distancia%20menor%20a%203km%20LowCost%20%F0%9F%9B%B5",
  },
  {
    distance: "Hasta 5 Km",
    price: "$2700",
    features: [
      "Solicitado antes 13hs",
      "Servicio LowCost",
      "Pueden existir adicionales",
    ],
    whatsappLink: "https://wa.me/+542236602699?text=Hola%20%F0%9F%91%8B%2C%20Necesito%20un%20envio%20de%20una%20distancia%20menor%20a%205km%20LowCost%20%F0%9F%9B%B5",
  },
  {
    distance: "De 5 a 9 Km",
    price: "$3800",
    features: [
      "Solicitado antes 13hs",
      "Servicio LowCost",
      "Pueden existir adicionales",
    ],
    whatsappLink: "https://wa.me/+542236602699?text=Hola%20%F0%9F%91%8B%2C%20Necesito%20un%20envio%20de%20una%20distancia%20menor%20a%209km%20LowCost%20%F0%9F%9B%B5",
  },
  {
    distance: "De 9 a 13 Km",
    price: "$5400",
    features: [
      "Solicitado antes 13hs",
      "Servicio LowCost",
      "Pueden existir adicionales",
    ],
    whatsappLink: "https://wa.me/+542236602699?text=Hola%20%F0%9F%91%8B%2C%20Necesito%20un%20envio%20de%20una%20distancia%20menor%20a%2013km%20LowCost%20%F0%9F%9B%B5",
  },
];

export function PreciosMenEnvLowCost() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Precios Low-cost
          </h2>
           <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Tarifas económicas para tus envíos programados y flexibles.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border rounded-lg overflow-hidden">
              <CardHeader className="items-center text-center p-6 bg-background border-b">
                 <div className="p-3 bg-secondary/10 rounded-full mb-3">
                    <DollarSign className="h-8 w-8 text-secondary" />
                 </div>
                <CardTitle className="text-lg font-semibold text-primary">{tier.distance}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6 space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">por envío</span>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80 flex-grow">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-auto bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={tier.whatsappLink} target="_blank" rel="noopener noreferrer">
                    Solicítalo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-sm text-foreground/70 bg-primary/5 p-3 rounded-lg">
              <Info className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Los precios LowCost son válidos solicitando el servicio antes de las 13hs para entrega en el día. Pueden existir adicionales (bulto, lluvia, etc.).</span>
            </div>
        </div>
      </div>
    </section>
  );
}
