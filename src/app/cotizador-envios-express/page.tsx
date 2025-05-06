'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Scale, BadgeDollarSign, Loader2 } from 'lucide-react'; // Import icons, including Loader2

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
  const [loading, setLoading] = useState<boolean>(false);
  const [mapInitialized, setMapInitialized] = useState(false);
  const [mapLoading, setMapLoading] = useState(true); // State to track map script loading

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
       console.error("Google Maps API failed to load or map container not found.");
       setError("No se pudo cargar el mapa. Intenta recargar la página.");
       setMapLoading(false); // Stop loading indicator
       setMapInitialized(false); // Ensure it's marked as not initialized
       return;
     }
     // Check if the map container ref is still mounted
     if (!mapContainerRef.current) {
        console.warn("Map container ref is null during initMap callback.");
        setMapLoading(false);
        return;
     }

     if (mapInitialized) {
        console.log("Map already initialized.");
        setMapLoading(false);
        return; // Avoid re-initialization
     }


     try {
       const marDelPlata = { lat: -38.0055, lng: -57.5426 };

       // Ensure mapContainerRef.current is valid before creating map
       if (!mapContainerRef.current) {
         throw new Error("Map container element not found after script load.");
       }

       mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
         zoom: 12,
         center: marDelPlata,
         mapTypeControl: false,
         streetViewControl: false,
         fullscreenControl: true,
         zoomControl: true,
       });

       directionsServiceRef.current = new window.google.maps.DirectionsService();
       directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
         map: mapRef.current,
         suppressMarkers: true,
         polylineOptions: {
           strokeColor: 'hsl(var(--primary))',
           strokeWeight: 4,
           strokeOpacity: 0.8,
         }
       });
       geocoderRef.current = new window.google.maps.Geocoder();

       console.log("Map and services initialized.");
       setMapInitialized(true); // Mark map as initialized
       setMapLoading(false); // Stop loading indicator

     } catch (e: any) {
       console.error("Error initializing map:", e);
       setError(`Error al inicializar el mapa: ${e.message || e}`);
       setMapLoading(false); // Stop loading indicator
       setMapInitialized(false); // Ensure it's marked as not initialized
     }
  }, [mapInitialized]); // Depend on mapInitialized to prevent re-runs

  useEffect(() => {
      // Define initMap globally only when component mounts
      window.initMap = initMap;

      // Check if Google Maps script already exists
      let scriptElement = document.getElementById('google-maps-script');
      if (!scriptElement) {
          scriptElement = document.createElement('script');
          scriptElement.id = 'google-maps-script';
          const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
          if (!apiKey) {
              console.error("Google Maps API Key is missing. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.");
              setError("Falta la configuración del mapa. Contacta al administrador.");
              setMapLoading(false);
              // Clean up potentially added script tag if API key is missing
              if (scriptElement.parentNode) {
                scriptElement.parentNode.removeChild(scriptElement);
              }
              return; // Stop execution if API key is missing
          }
          scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=marker,geometry`;
          scriptElement.async = true;
          scriptElement.defer = true;
          scriptElement.onerror = () => { // Handle script loading error
              console.error("Failed to load Google Maps script.");
              setError("No se pudo cargar el script del mapa. Revisa tu conexión o la clave API.");
              setMapLoading(false);
              setMapInitialized(false);
               // Remove the script if it failed to load
               if (scriptElement && scriptElement.parentNode) {
                scriptElement.parentNode.removeChild(scriptElement);
               }
          };
          document.head.appendChild(scriptElement);
      } else if (!mapInitialized && window.google && typeof window.initMap === 'function') {
          // If script exists but map not initialized, try initializing
           console.log("Script exists, attempting to initialize map...");
           try {
            window.initMap();
           } catch (initError) {
             console.error("Error calling existing initMap:", initError);
             setError("Error al inicializar el mapa existente.");
             setMapLoading(false);
             setMapInitialized(false);
           }
      } else if (mapInitialized) {
          setMapLoading(false); // If already initialized, stop loading
      }


      // --- Robust Cleanup Function ---
      return () => {
         console.log("Cleaning up Google Maps resources in useEffect...");

         // Function to safely remove markers
         const safeRemoveMarker = (markerRef: React.MutableRefObject<any>) => {
            if (markerRef.current && typeof markerRef.current.setMap === 'function') {
               try { markerRef.current.setMap(null); } catch (e) { console.warn("Error clearing marker:", e); }
            }
            markerRef.current = null; // Clear ref
         };

         // Function to safely remove directions
         const safeRemoveDirections = (rendererRef: React.MutableRefObject<any>) => {
             if (rendererRef.current && typeof rendererRef.current.setMap === 'function') {
                 try { rendererRef.current.setMap(null); } catch (e) { console.warn("Error clearing directions renderer:", e); }
             }
             rendererRef.current = null; // Clear ref
         };


         // Remove markers
         safeRemoveMarker(marcadorOrigenRef);
         safeRemoveMarker(marcadorDestinoRef);

         // Remove directions
         safeRemoveDirections(directionsRendererRef);

         // Nullify other refs
         mapRef.current = null;
         directionsServiceRef.current = null;
         geocoderRef.current = null;

         // Remove the global callback function if it points to our initMap
         if (window.initMap === initMap) {
            console.log("Deleting global initMap callback");
            try {
              delete window.initMap;
            } catch (e) {
              console.warn("Could not delete window.initMap:", e);
               // Fallback in case delete fails (e.g., in strict mode environments or non-configurable properties)
               window.initMap = undefined;
            }
         } else {
             console.log("Global initMap was already removed or changed by another instance.");
         }

         // Attempt to remove the script tag itself
         const existingScript = document.getElementById('google-maps-script');
         if (existingScript && existingScript.parentNode) {
             console.log("Removing Google Maps script tag.");
             try {
                existingScript.parentNode.removeChild(existingScript);
             } catch (e) {
                 console.warn("Could not remove script tag:", e);
             }
         } else {
             console.log("Google Maps script tag not found for removal or already removed.");
         }

         // Reset initialization state
         setMapInitialized(false);
         setMapLoading(true); // Reset loading state for potential remounts

      };
  }, [initMap]); // Rerun only if initMap function identity changes

  // --- Marker Placement ---
  const colocarMarcadores = useCallback((origenPos: any, destinoPos: any, origenDir: string, destinoDir: string) => {
    if (!mapRef.current || !window.google || !window.google.maps || !window.google.maps.Marker) {
      console.warn("Cannot place markers: Map or Marker API not ready.");
      return;
    }

    // Ensure previous markers are removed before adding new ones
    if (marcadorOrigenRef.current && typeof marcadorOrigenRef.current.setMap === 'function') {
      marcadorOrigenRef.current.setMap(null);
    }
    if (marcadorDestinoRef.current && typeof marcadorDestinoRef.current.setMap === 'function') {
      marcadorDestinoRef.current.setMap(null);
    }

    try {
        // Create origin marker (Green)
        marcadorOrigenRef.current = new window.google.maps.Marker({
            position: origenPos,
            map: mapRef.current,
            icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 8,
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
                scale: 8,
                fillColor: "#F97316", // Tailwind Orange 500
                fillOpacity: 1,
                strokeColor: "#ffffff",
                strokeWeight: 2,
            },
            title: "Destino: " + destinoDir,
        });
    } catch (e) {
        console.error("Error creating markers:", e);
        setError("Error al mostrar los marcadores en el mapa.");
    }
  }, []); // No dependencies needed as refs are stable

  // --- Price Calculation ---
  const calcularPrecio = useCallback((distanciaKm: number) => {
    let precioValor;
    if (distanciaKm <= 3) {
        precioValor = 2500;
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
        precioValor = 7000 + (kmExtra * 700);
    }
    setPrecio(`$${precioValor.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`);
  }, []); // No dependencies needed

  // --- Route Calculation ---
  const calcularRuta = useCallback(async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    if (!origen || !destino) {
      setError("Por favor, ingrese tanto la dirección de origen como la de destino.");
      return;
    }
    if (!mapInitialized || !directionsServiceRef.current || !directionsRendererRef.current) {
       setError("El servicio de mapas no está listo. Por favor, espere un momento o recargue la página.");
       return;
    }

    setLoading(true);
    setError(null);
    setDistancia(null);
    setPrecio(null);

    // Clear previous route display defensively
    if (directionsRendererRef.current && typeof directionsRendererRef.current.setDirections === 'function') {
      try {
        directionsRendererRef.current.setDirections({ routes: [] });
      } catch (e) {
        console.warn("Error clearing previous directions:", e);
      }
    } else {
      console.warn("DirectionsRenderer ref not ready for clearing.");
    }
    // Clear previous markers too
     if (marcadorOrigenRef.current && typeof marcadorOrigenRef.current.setMap === 'function') {
        try { marcadorOrigenRef.current.setMap(null); } catch (e) { console.warn("Error clearing origin marker:", e); }
     }
     if (marcadorDestinoRef.current && typeof marcadorDestinoRef.current.setMap === 'function') {
       try { marcadorDestinoRef.current.setMap(null); } catch (e) { console.warn("Error clearing destination marker:", e); }
     }


    try {
      const request = {
        origin: `${origen}, Mar del Plata, Argentina`,
        destination: `${destino}, Mar del Plata, Argentina`,
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      const response = await new Promise<any>((resolve, reject) => {
        if (!directionsServiceRef.current || typeof directionsServiceRef.current.route !== 'function') {
            return reject(new Error("DirectionsService no está disponible."));
        }
        directionsServiceRef.current.route(request, (result: any, status: any) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            resolve(result);
          } else {
             console.error(`Directions request failed due to ${status}`);
             reject(new Error(`No se pudo calcular la ruta: ${status}. Asegúrese de que las direcciones sean válidas y estén dentro del área de servicio en Mar del Plata.`));
          }
        });
      });

      // Ensure renderer is still available before setting directions
      if (directionsRendererRef.current && typeof directionsRendererRef.current.setDirections === 'function') {
          directionsRendererRef.current.setDirections(response);
      } else {
          console.warn("DirectionsRenderer became unavailable before setting directions.");
          throw new Error("Error al mostrar la ruta en el mapa.");
      }


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
          console.error("Invalid route data received:", response);
          throw new Error("No se pudo obtener la distancia de la ruta calculada.");
      }

    } catch (e: any) {
      console.error("Error al calcular la ruta:", e);
      setError(e.message || "Error al calcular la ruta. Verifique las direcciones e inténtelo de nuevo.");
      setDistancia(null);
      setPrecio(null);
       // Clear markers and route on error
        if (marcadorOrigenRef.current && typeof marcadorOrigenRef.current.setMap === 'function') {
          marcadorOrigenRef.current.setMap(null);
        }
        if (marcadorDestinoRef.current && typeof marcadorDestinoRef.current.setMap === 'function') {
          marcadorDestinoRef.current.setMap(null);
        }
        if (directionsRendererRef.current && typeof directionsRendererRef.current.setDirections === 'function') {
          directionsRendererRef.current.setDirections({ routes: [] });
        }
    } finally {
      setLoading(false);
    }
  }, [origen, destino, mapInitialized, calcularPrecio, colocarMarcadores]);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
        Cotizador de Envíos Express
      </h1>
      <Card className="max-w-6xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
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
                      aria-label="Dirección de Origen"
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
                      aria-label="Dirección de Destino"
                    />
                   </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2"
                  disabled={loading || !mapInitialized || mapLoading} // Disable while loading or map not ready
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? 'Calculando...' : 'Calcular Ruta y Precio'}
                </Button>
              </form>
            </CardContent>
             <CardFooter className="p-0 pt-6 mt-auto">
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
                  {mapLoading && !error && (
                    <p className="text-sm text-foreground/60 flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Cargando mapa...
                    </p>
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
                {mapLoading && (
                 <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
                   <p className="text-muted-foreground flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Cargando mapa...
                   </p>
                 </div>
               )}
               {error && !mapLoading && ( // Show error overlay if map failed to load
                 <div className="absolute inset-0 flex items-center justify-center bg-destructive/10 backdrop-blur-sm z-10">
                   <p className="text-destructive text-center font-medium p-4">{error}</p>
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
