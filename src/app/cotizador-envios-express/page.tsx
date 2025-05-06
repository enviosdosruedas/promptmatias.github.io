'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Scale, BadgeDollarSign } from 'lucide-react'; // Import icons

// Define Google Maps types globally for TypeScript
declare global {
  interface Window {
    google: any;
    initMap?: () => void; // Make initMap optional on window initially
  }
}

// Constants
const PRECIO_BASE = 2500; // Base price adjusted
const PRECIO_POR_KM = 700; // Price per km adjusted

export default function CotizadorEnviosExpressPage() {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [distancia, setDistancia] = useState<string | null>(null);
  const [precio, setPrecio] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Added loading state
  const [mapInitialized, setMapInitialized] = useState(false);

  // Refs for Google Maps objects and map container
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const directionsServiceRef = useRef<any>(null);
  const directionsRendererRef = useRef<any>(null);
  const geocoderRef = useRef<any>(null);
  const marcadorOrigenRef = useRef<any>(null);
  const marcadorDestinoRef = useRef<any>(null);

  // --- Google Maps API Loading and Initialization ---
  const initMap = useCallback(() => {
    if (!window.google || !mapContainerRef.current) {
       console.error("Google Maps API not loaded or map container not found.");
       setError("No se pudo cargar el mapa. Intenta recargar la página.");
       setMapInitialized(true); // Prevent further attempts if API failed
       return;
    }
    try {
        // Coordenadas de Mar del Plata, Argentina
        const marDelPlata = { lat: -38.0055, lng: -57.5426 };

        mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
            zoom: 12, // Slightly zoomed out
            center: marDelPlata,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
            zoomControl: true,
        });

        directionsServiceRef.current = new window.google.maps.DirectionsService();
        directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
            map: mapRef.current,
            suppressMarkers: true, // We'll use custom markers
             polylineOptions: {
                 strokeColor: 'hsl(var(--primary))', // Use primary color from theme
                 strokeWeight: 4,
                 strokeOpacity: 0.8,
            }
        });
        geocoderRef.current = new window.google.maps.Geocoder();

        console.log("Mapa y servicios inicializados.");
        setMapInitialized(true); // Mark map as initialized

    } catch (e) {
        console.error("Error initializing map:", e);
        setError("Error al inicializar el mapa.");
        setMapInitialized(true); // Prevent further attempts
    }
  }, []); // Empty dependency array, initMap logic doesn't depend on component state/props

  useEffect(() => {
      // Define initMap globally only when component mounts
      window.initMap = initMap;

      // Check if Google Maps script already exists
      if (!document.getElementById('google-maps-script')) {
          const script = document.createElement('script');
          script.id = 'google-maps-script';
          // IMPORTANT: Replace YOUR_GOOGLE_MAPS_API_KEY with your actual API key
          // Ensure you have enabled Maps JavaScript API, Directions API, Geocoding API in your Google Cloud Console project.
          script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap&libraries=marker`; // Added marker library
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
      } else if (!mapInitialized && window.google) {
          // If script exists but map not initialized (e.g., HMR), try initializing
          initMap();
      }

      // Cleanup function
      return () => {
         // Clean up Google Maps objects if they exist
         if (marcadorOrigenRef.current && typeof marcadorOrigenRef.current.setMap === 'function') {
           marcadorOrigenRef.current.setMap(null);
         }
         if (marcadorDestinoRef.current && typeof marcadorDestinoRef.current.setMap === 'function') {
           marcadorDestinoRef.current.setMap(null);
         }
         if (directionsRendererRef.current && typeof directionsRendererRef.current.setMap === 'function') {
           directionsRendererRef.current.setMap(null); // Disassociate from map
         }
         // Remove the global callback function if it exists and points to our initMap
         if (window.initMap === initMap) {
            delete window.initMap;
         }
      };
  }, [initMap, mapInitialized]); // Add mapInitialized to dependencies

  // --- Marker Placement ---
  const colocarMarcadores = useCallback((origenPos: any, destinoPos: any, origenDir: string, destinoDir: string) => {
    if (!mapRef.current || !window.google || !window.google.maps || !window.google.maps.Marker) return;

    // Remove previous markers defensively
    if (marcadorOrigenRef.current && typeof marcadorOrigenRef.current.setMap === 'function') {
      marcadorOrigenRef.current.setMap(null);
    }
    if (marcadorDestinoRef.current && typeof marcadorDestinoRef.current.setMap === 'function') {
      marcadorDestinoRef.current.setMap(null);
    }


    // Create origin marker (Green)
    marcadorOrigenRef.current = new window.google.maps.Marker({
      position: origenPos,
      map: mapRef.current,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 8, // Slightly smaller
        fillColor: "#10B981", // Tailwind Emerald 500
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2,
      },
      title: "Origen: " + origenDir,
    });

    // Create destination marker (Orange)
    marcadorDestinoRef.current = new window.google.maps.Marker({
      position: destinoPos,
      map: mapRef.current,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 8, // Slightly smaller
        fillColor: "#F97316", // Tailwind Orange 500
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2,
      },
      title: "Destino: " + destinoDir,
    });
  }, []); // Depends only on google maps objects, which are stable in refs

  // --- Price Calculation ---
  const calcularPrecio = useCallback((distanciaKm: number) => {
    let precioValor;
    if (distanciaKm <= 3) {
        precioValor = 2500; // Updated base price
    } else if (distanciaKm <= 5) {
        precioValor = 3100;
    } else if (distanciaKm <= 6) {
        precioValor = 3900;
    } else if (distanciaKm <= 7) {
        precioValor = 4600;
    } else if (distanciaKm <= 8) {
        precioValor = 5400;
    } else if (distanciaKm <= 9) {
        precioValor = 6000;
    } else if (distanciaKm <= 10) {
        precioValor = 6850;
    } else {
        const kmExtra = Math.ceil(distanciaKm - 10);
        precioValor = 7000 + (kmExtra * 700); // Updated extra km price
    }
    // Format as ARS currency
    setPrecio(`$${precioValor.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`);
  }, []); // No dependencies needed

  // --- Route Calculation ---
  const calcularRuta = useCallback(async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault(); // Prevent form submission if triggered by button
    if (!origen || !destino) {
      setError("Por favor, ingrese tanto la dirección de origen como la de destino.");
      return;
    }
    if (!mapInitialized || !directionsServiceRef.current || !directionsRendererRef.current) {
       setError("El servicio de mapas no está listo. Por favor, espere un momento.");
       return;
    }

    setLoading(true);
    setError(null);
    setDistancia(null);
    setPrecio(null);

    // Clear previous markers and route before calculating new one (Defensive checks)
    if (marcadorOrigenRef.current && typeof marcadorOrigenRef.current.setMap === 'function') {
        marcadorOrigenRef.current.setMap(null);
    }
    if (marcadorDestinoRef.current && typeof marcadorDestinoRef.current.setMap === 'function') {
        marcadorDestinoRef.current.setMap(null);
    }
    if (directionsRendererRef.current && typeof directionsRendererRef.current.setDirections === 'function') {
        directionsRendererRef.current.setDirections({ routes: [] });
    }


    try {
      const request = {
        origin: `${origen}, Mar del Plata, Argentina`,
        destination: `${destino}, Mar del Plata, Argentina`,
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      // Use a promise wrapper for the callback-based API
      const response = await new Promise<any>((resolve, reject) => {
        directionsServiceRef.current.route(request, (result: any, status: any) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            resolve(result);
          } else {
            reject(new Error(`No se pudo calcular la ruta: ${status}. Asegúrese de que las direcciones sean válidas en Mar del Plata.`));
          }
        });
      });


      directionsRendererRef.current.setDirections(response);

      const route = response.routes[0];
      if (route && route.legs && route.legs[0] && route.legs[0].distance) {
        const distanciaTexto = route.legs[0].distance.text;
        const distanciaValor = route.legs[0].distance.value / 1000; // Convert to km

        setDistancia(distanciaTexto);
        calcularPrecio(distanciaValor);
        colocarMarcadores(
          route.legs[0].start_location,
          route.legs[0].end_location,
          route.legs[0].start_address,
          route.legs[0].end_address
        );
      } else {
          throw new Error("No se pudo obtener la distancia de la ruta.");
      }

    } catch (e: any) {
      console.error("Error al calcular la ruta:", e);
       setError(e.message || "Error al calcular la ruta. Verifique las direcciones.");
       setDistancia(null);
       setPrecio(null);
    } finally {
      setLoading(false);
    }
  }, [origen, destino, mapInitialized, calcularPrecio, colocarMarcadores]);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
        Cotizador de Envíos Express
      </h1>
      <Card className="max-w-6xl mx-auto overflow-hidden"> {/* Allow card to be wider */}
        <div className="grid grid-cols-1 md:grid-cols-2"> {/* Two-column layout */}

          {/* Left Column: Form and Results */}
          <div className="p-6 md:p-8 border-r border-border flex flex-col">
            <CardHeader className="p-0 pb-6">
              <CardTitle>Calculá el costo de tu envío</CardTitle>
              <CardDescription>
                Ingresá las direcciones de origen y destino para obtener una cotización instantánea.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <form className="grid gap-4" onSubmit={calcularRuta}>
                <div className="grid gap-2">
                  <Label htmlFor="direccion-origen">Dirección de Origen</Label>
                  <div className="flex items-center gap-2 rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                     <MapPin className="h-5 w-5 text-muted-foreground ml-3 flex-shrink-0" />
                     <Input
                      id="direccion-origen"
                      placeholder="Calle, Número, Localidad..."
                      value={origen}
                      onChange={(e) => setOrigen(e.target.value)}
                      required
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 flex-grow"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="direccion-destino">Dirección de Destino</Label>
                   <div className="flex items-center gap-2 rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                     <MapPin className="h-5 w-5 text-muted-foreground ml-3 flex-shrink-0" />
                    <Input
                      id="direccion-destino"
                      placeholder="Calle, Número, Localidad..."
                      value={destino}
                      onChange={(e) => setDestino(e.target.value)}
                      required
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 flex-grow"
                    />
                   </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                  disabled={loading || !mapInitialized} // Disable while loading or map not ready
                >
                  {loading ? 'Calculando...' : 'Calcular Ruta y Precio'}
                </Button>
              </form>
            </CardContent>
             <CardFooter className="p-0 pt-6 mt-auto"> {/* Footer at the bottom */}
               <div className="text-center w-full space-y-2">
                 {error && <p className="text-sm text-destructive">{error}</p>}
                 {distancia && (
                  <div className="flex items-center justify-center gap-2 text-foreground/80">
                     <Scale className="h-5 w-5 text-secondary" />
                     Distancia: <span className="font-semibold text-foreground">{distancia}</span>
                   </div>
                 )}
                 {precio && (
                  <div className="flex items-center justify-center gap-2 text-foreground/80">
                     <BadgeDollarSign className="h-5 w-5 text-secondary" />
                     Precio Estimado: <span className="font-semibold text-foreground">{precio}</span>
                   </div>
                 )}
                 {!distancia && !precio && !error && !loading && mapInitialized && (
                   <p className="text-sm text-foreground/60">Ingresa las direcciones para ver la distancia y el precio.</p>
                 )}
                  {!mapInitialized && !error && (
                    <p className="text-sm text-foreground/60 animate-pulse">Cargando mapa...</p>
                  )}
               </div>
             </CardFooter>
          </div>

          {/* Right Column: Map */}
          <div className="relative min-h-[300px] md:min-h-full">
             {/* Map Container */}
             <div ref={mapContainerRef} id="mapa" className="absolute inset-0 w-full h-full bg-muted">
               {/* Map will be rendered here by Google Maps API */}
               {/* Show loading state until map is ready */}
                {!mapInitialized && (
                 <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                   <p className="text-muted-foreground animate-pulse">Cargando mapa...</p>
                 </div>
               )}
             </div>
          </div>
        </div>
      </Card>
      <p className="text-center mt-8 text-sm text-foreground/70">
        Para envíos Low Cost, utilizá nuestro <a href="/cotizador-envios-lowcost" className="text-secondary underline hover:text-secondary/80">Cotizador Low Cost</a>.
      </p>
    </div>
  );
}
