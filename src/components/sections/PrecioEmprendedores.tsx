
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { CheckCircle, Tag, Bike } from 'lucide-react';

const pricingTiers = [
  {
    distance: "Hasta 3 Km",
    price: "$2000",
    features: [
      "Solicitado antes 13hs",
      "Entrega en el día",
      "Pueden existir adicionales",
    ],
    whatsappLink: "https://wa.me/+542236602699?text=Hola%20%F0%9F%91%8B%2C%20Necesito%20un%20envio%20de%20una%20distancia%20menor%20a%203km%20LowCost%20%F0%9F%9B%B5",
  },
  {
    distance: "Hasta 5 km",
    price: "$2.700",
    features: [
      "Solicitado antes 13hs",
      "Entrega en el día",
      "Pueden existir adicionales",
    ],
    whatsappLink: "https://wa.me/+542236602699?text=Hola%20%F0%9F%91%8B%2C%20Necesito%20un%20envio%20de%20una%20distancia%20menor%20a%205km%20LowCost%20%F0%9F%9B%B5",
  },
  {
    distance: "De 5 a 9 km",
    price: "$3.800",
    features: [
      "Solicitado antes 13hs",
      "Entrega en el día",
      "Pueden existir adicionales",
    ],
    whatsappLink: "https://wa.me/+542236602699?text=Hola%20%F0%9F%91%8B%2C%20Necesito%20un%20envio%20de%20una%20distancia%20menor%20a%209km%20LowCost%20%F0%9F%9B%B5",
  },
  {
    distance: "De 9 a 13 km",
    price: "$5.400",
    features: [
      "Solicitado antes 13hs",
      "Entrega en el día",
      "Pueden existir adicionales",
    ],
    whatsappLink: "https://wa.me/+542236602699?text=Hola%20%F0%9F%91%8B%2C%20Necesito%20un%20envio%20de%20una%20distancia%20menor%20a%2013km%20LowCost%20%F0%9F%9B%B5",
  },
  {
    distance: "De 13 a 20 km",
    price: "$7.600",
    features: [
      "Solicitado antes 13hs",
      "Entrega en el día",
      "Pueden existir adicionales",
    ],
    whatsappLink: "https://wa.me/+542236602699?text=Hola%20%F0%9F%91%8B%2C%20Necesito%20un%20envio%20de%20una%20distancia%20menor%20a%2020km%20LowCost%20%F0%9F%9B%B5", // Updated link text
  },
];

export function PrecioEmprendedores() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
          Precios Plan Emprendedores
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 border border-border rounded-lg overflow-hidden">
              <CardHeader className="items-center text-center p-6 bg-muted/30 border-b">
                 <div className="p-3 bg-primary/10 rounded-full mb-3">
                     {/* Use a relevant icon, e.g., Bike or Tag */}
                    <Tag className="h-8 w-8 text-primary" />
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
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
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
      </div>
    </section>
  );
}
