'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Scale, BadgeDollarSign, Loader2 } from 'lucide-react';

// Define Google Maps types globally for TypeScript
declare global {
  interface Window {
    google?: any; // Make google optional initially
    initMap?: () => void;
  }
}

// Constants
const PRECIO_BASE = 2500;
const PRECIO_POR_KM = 700;
const GOOGLE_MAPS_SCRIPT_ID = 'google-maps-script';

export default function CotizadorEnviosExpressPage() {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [distancia, setDistancia] = useState<string | null>(null);
  const [precio, setPrecio] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [mapInitialized, setMapInitialized] = useState(false);
  const [mapLoading, setMapLoading] = useState(true); // Start with loading true

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const directionsServiceRef = useRef<any>(null);
  const directionsRendererRef = useRef<any>(null);
  const geocoderRef = useRef<any>(null);
  const marcadorOrigenRef = useRef<any>(null);
  const marcadorDestinoRef = useRef<any>(null);

  // --- Google Maps API Initialization ---
  const initMap = useCallback(() => {
    // Ensure this runs only in the browser and API is loaded
    if (typeof window === 'undefined' || !window.google || !window.google.maps || !mapContainerRef.current) {
      console.error("Google Maps API not ready or map container not found during initMap.");
      // Avoid setting error if component unmounted or map already initialized with error
      if (!mapInitialized && mapLoading) {
          setError("No se pudo inicializar el mapa. Intenta recargar.");
          setMapLoading(false);
      }
      return;
    }

    // Prevent re-initialization
    if (mapInitialized) {
      console.log("Map already initialized, skipping re-init.");
       setMapLoading(false); // Ensure loading indicator is off
      return;
    }

    console.log("Attempting to initialize map...");
    try {
      const marDelPlata = { lat: -38.0055, lng: -57.5426 };

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
        suppressMarkers: true, // We'll use custom markers
        polylineOptions: {
          strokeColor: 'hsl(var(--primary))', // Use theme color
          strokeWeight: 4,
          strokeOpacity: 0.8,
        }
      });
      geocoderRef.current = new window.google.maps.Geocoder();

      console.log("Map and services initialized successfully.");
      setMapInitialized(true); // Mark as initialized *after* successful setup
      setMapLoading(false); // Stop loading indicator
      setError(null); // Clear any previous errors

    } catch (e: any) {
      console.error("Error during map initialization:", e);
      setError(`Error al inicializar el mapa: ${e.message || e}`);
      setMapLoading(false);
      setMapInitialized(false); // Ensure it's marked as not initialized on error
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapInitialized]); // Re-run check if mapInitialized state changes, but init logic runs only once

  // --- Effect for loading the Google Maps script ---
  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates if component unmounts
    const scriptId = GOOGLE_MAPS_SCRIPT_ID;

    // Define the callback function and attach it to the window *before* appending the script
    window.initMap = () => {
        console.log("window.initMap called");
        // Check mount status before attempting initialization
        if (isMounted) {
            initMap();
        } else {
            console.log("initMap called after component unmounted, skipping initialization.");
        }
    };


    // Check if the script already exists
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!scriptElement) {
      console.log("Google Maps script not found, creating and adding it.");
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.async = true;
      scriptElement.defer = true;

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      if (!apiKey) {
        console.error("Google Maps API Key is missing. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.");
         if (isMounted) {
            setError("Falta la configuración del mapa. Contacta al administrador.");
            setMapLoading(false);
         }
         // Clean up potentially assigned global callback if we exit early
         if (window.initMap === initMap) delete window.initMap;
         return; // Stop execution
      }

       scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=marker,geometry`;

       scriptElement.onerror = () => {
        console.error("Failed to load Google Maps script.");
         if (isMounted) {
            setError("No se pudo cargar el script del mapa. Revisa tu conexión o la clave API.");
            setMapLoading(false);
            setMapInitialized(false);
         }
          // Clean up potentially assigned global callback on script load error
          if (window.initMap === initMap) delete window.initMap;
      };
      document.head.appendChild(scriptElement);

    } else if (window.google && window.google.maps && !mapInitialized) {
      // Script exists, Google API loaded, but map not initialized by this component instance yet.
      // This might happen on fast refreshes or if the script was added by another component.
      console.log("Google Maps script exists and API loaded, attempting direct initMap call.");
      if (isMounted) {
          initMap(); // Call initMap directly
      }
    } else if (mapInitialized) {
        // Map already initialized by this component instance
        console.log("Map already initialized on mount/render.");
         if (isMounted) {
            setMapLoading(false); // Ensure loading indicator is off
         }
    } else {
        // Script exists, but `window.google` not yet available. Waiting for the `callback=initMap`.
        console.log("Google Maps script exists, waiting for callback=initMap to execute.");
    }

    // Cleanup function
    return () => {
      isMounted = false; // Mark as unmounted
      console.log("Running useEffect cleanup for Google Maps...");

       // Clean up the global callback *only if* it's the one this component instance set
       // It's crucial to check if it still points to *our* initMap instance
       if (window.initMap === initMap) {
           console.log("Deleting global initMap callback assigned by this instance.");
           try {
               delete window.initMap;
           } catch (e) {
               console.warn("Could not delete window.initMap, setting to undefined:", e);
               window.initMap = undefined;
           }
       } else {
            // console.log("Global initMap was not assigned by this instance or already removed/changed.");
       }

      // Don't remove the script tag itself, as other components might need it,
      // unless you have a more sophisticated script loading management system.

      // Note: Nullifying React refs here is generally good practice, but since
      // the map objects are created *inside* initMap which is called potentially
      // after cleanup if timing is off, nullifying refs here might be premature.
      // The critical part is ensuring initMap doesn't run or run on stale refs
      // if the component unmounts before initialization finishes. The isMounted flag helps.
      console.log("Finished Google Maps cleanup.");
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initMap]); // initMap is memoized with useCallback based on mapInitialized


  // --- Marker Placement ---
  const colocarMarcadores = useCallback((origenPos: any, destinoPos: any, origenDir: string, destinoDir: string) => {
    if (!mapRef.current || !window.google || !window.google.maps || !window.google.maps.Marker || !window.google.maps.SymbolPath) {
      console.warn("Cannot place markers: Google Maps API components not fully ready.");
      setError("No se pueden colocar los marcadores, el mapa no está listo.");
      return;
    }

    // Clear previous markers
    if (marcadorOrigenRef.current && typeof marcadorOrigenRef.current.setMap === 'function') {
      marcadorOrigenRef.current.setMap(null);
    }
    if (marcadorDestinoRef.current && typeof marcadorDestinoRef.current.setMap === 'function') {
      marcadorDestinoRef.current.setMap(null);
    }

    try {
        marcadorOrigenRef.current = new window.google.maps.Marker({
            position: origenPos,
            map: mapRef.current,
            icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 8, fillColor: "#10B981", fillOpacity: 1, strokeColor: "#ffffff", strokeWeight: 2,
            },
            title: "Origen: " + origenDir,
        });
        marcadorDestinoRef.current = new window.google.maps.Marker({
            position: destinoPos,
            map: mapRef.current,
            icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 8, fillColor: "#F97316", fillOpacity: 1, strokeColor: "#ffffff", strokeWeight: 2,
            },
            title: "Destino: " + destinoDir,
        });
    } catch (e: any) {
        console.error("Error creating markers:", e);
        setError(`Error al mostrar marcadores: ${e.message || e}`);
    }
  }, []); // Empty dependency array - relies on refs being set

  // --- Price Calculation ---
  const calcularPrecio = useCallback((distanciaKm: number) => {
    let precioValor;
    if (distanciaKm <= 3) precioValor = 2500;
    else if (distanciaKm <= 5) precioValor = 3100;
    else if (distanciaKm <= 6) precioValor = 3900;
    else if (distanciaKm <= 7) precioValor = 4600;
    else if (distanciaKm <= 8) precioValor = 5400;
    else if (distanciaKm <= 9) precioValor = 6000;
    else if (distanciaKm <= 10) precioValor = 6850;
    else {
      const kmExtra = Math.ceil(distanciaKm - 10);
      precioValor = 7000 + (kmExtra * 700);
    }
    setPrecio(`$${precioValor.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`);
  }, []);

  // --- Route Calculation ---
  const calcularRuta = useCallback(async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    if (!origen || !destino) {
      setError("Por favor, ingrese tanto la dirección de origen como la de destino.");
      return;
    }
    // Check for map initialization *and* readiness of services
    if (!mapInitialized || !directionsServiceRef.current || !directionsRendererRef.current || !window.google || !window.google.maps) {
       setError("El servicio de mapas no está listo. Por favor, espere o recargue.");
       setLoading(false); // Ensure loading stops if we exit early
       return;
    }

    setLoading(true);
    setError(null);
    setDistancia(null);
    setPrecio(null);

    // Clear previous route and markers defensively
     if (directionsRendererRef.current && typeof directionsRendererRef.current.setDirections === 'function') {
      try { directionsRendererRef.current.setDirections({ routes: [] }); } catch (e) { console.warn("Error clearing directions:", e); }
    } else { console.warn("DirectionsRenderer ref not ready for clearing.");}
     if (marcadorOrigenRef.current && typeof marcadorOrigenRef.current.setMap === 'function') {
        try { marcadorOrigenRef.current.setMap(null); } catch (e) { console.warn("Error clearing origin marker:", e); }
     } else { console.warn("Origin marker ref not ready for clearing."); }
     if (marcadorDestinoRef.current && typeof marcadorDestinoRef.current.setMap === 'function') {
       try { marcadorDestinoRef.current.setMap(null); } catch (e) { console.warn("Error clearing destination marker:", e); }
     } else { console.warn("Destination marker ref not ready for clearing."); }


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
             let userMessage = `No se pudo calcular la ruta: ${status}. Asegúrese de que las direcciones sean válidas y estén dentro del área de servicio en Mar del Plata.`;
             if (status === window.google.maps.DirectionsStatus.ZERO_RESULTS) {
                 userMessage = "No se encontraron rutas entre las direcciones especificadas. Verifique que ambas estén en Mar del Plata.";
             } else if (status === window.google.maps.DirectionsStatus.NOT_FOUND) {
                  userMessage = "Una o ambas direcciones no pudieron ser encontradas. Por favor, verifíquelas.";
             }
             reject(new Error(userMessage));
          }
        });
      });

      if (directionsRendererRef.current && typeof directionsRendererRef.current.setDirections === 'function') {
          directionsRendererRef.current.setDirections(response);
      } else {
          console.warn("DirectionsRenderer became unavailable before setting directions.");
          throw new Error("Error al mostrar la ruta en el mapa.");
      }

      const route = response.routes[0];
      // Improved check for necessary data before proceeding
      if (route?.legs?.[0]?.distance?.value != null && route.legs[0].distance.text && route.legs[0].start_location && route.legs[0].end_location) {
        const distanciaTexto = route.legs[0].distance.text;
        const distanciaValor = route.legs[0].distance.value / 1000; // km

        setDistancia(distanciaTexto);
        calcularPrecio(distanciaValor);
        colocarMarcadores(
            route.legs[0].start_location,
            route.legs[0].end_location,
            route.legs[0].start_address || origen, // Fallback to input if address is missing
            route.legs[0].end_address || destino
        );
      } else {
          console.error("Invalid route data received or missing necessary properties:", response);
          throw new Error("No se pudo obtener la distancia o las ubicaciones de la ruta calculada.");
      }

    } catch (e: any) {
      console.error("Error al calcular la ruta:", e);
      setError(e.message || "Error al calcular la ruta. Verifique las direcciones e inténtelo de nuevo.");
      setDistancia(null);
      setPrecio(null);
       // Clear markers and route again on error, only if refs are valid
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
  }, [origen, destino, mapInitialized, calcularPrecio, colocarMarcadores]); // Dependencies

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
                  disabled={loading || !mapInitialized || mapLoading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? 'Calculando...' : 'Calcular Ruta y Precio'}
                </Button>
              </form>
            </CardContent>
             <CardFooter className="p-0 pt-6 mt-auto">
               <div className="text-center w-full space-y-2 min-h-[60px]"> {/* Added min-height */}
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
                  {mapLoading && !error && ( // Show loading only if there's no error yet
                    <p className="text-sm text-foreground/60 flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Cargando mapa...
                    </p>
                  )}
               </div>
             </CardFooter>
          </div>

          {/* Right Column: Map */}
          <div className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] w-full">
             {/* Map Container */}
             <div ref={mapContainerRef} id="mapa" className="absolute inset-0 w-full h-full bg-muted">
               {/* Overlay for Loading/Error State */}
                {(mapLoading || error) && (
                 <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm z-10">
                    {mapLoading && !error && ( // Show loading only if there's no error yet
                       <p className="text-muted-foreground flex items-center gap-2"><Loader2 className="h-5 w-5 animate-spin" /> Cargando mapa...</p>
                    )}
                    {error && ( // Show error preferentially
                       <p className="text-destructive text-center font-medium p-4">{error}</p>
                    )}
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
