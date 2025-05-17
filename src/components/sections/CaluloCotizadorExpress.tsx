
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Info, MapPinIcon, Rocket } from "lucide-react"; 
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


// WhatsApp Icon SVG Component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.579 2.168 2.129-.565z" />
  </svg>
);


const CaluloCotizadorExpress: React.FC = () => {
  const [origen, setOrigen] = useState<string>('');
  const [destino, setDestino] = useState<string>('');
  const [distancia, setDistancia] = useState<string | null>(null);
  const [precio, setPrecio] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [mapLoading, setMapLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const directionsServiceRef = useRef<google.maps.DirectionsService | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);
  const marcadorOrigenRef = useRef<google.maps.Marker | null>(null);
  const marcadorDestinoRef = useRef<google.maps.Marker | null>(null);

  const initMap = useCallback(() => {
    if (!window.google || !window.google.maps || !mapRef.current || mapInstanceRef.current) {
      if (!window.google || !window.google.maps) console.error("Google Maps API not loaded.");
      if (!mapRef.current) console.error("Map container not found.");
      if (mapInstanceRef.current) console.log("Map already initialized.");
      setMapLoading(false); // Ensure mapLoading is set to false even if there's an issue
      return;
    }
    console.log("Initializing map...");

    const marDelPlata = { lat: -38.0055, lng: -57.5426 };
    const map = new window.google.maps.Map(mapRef.current!, { // Added non-null assertion for mapRef.current
      zoom: 12,
      center: marDelPlata,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      zoomControl: true,
    });

    mapInstanceRef.current = map;
    directionsServiceRef.current = new window.google.maps.DirectionsService();
    directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
      map: map,
      suppressMarkers: true,
    });
    geocoderRef.current = new window.google.maps.Geocoder();
    setMapLoading(false);
    console.log("Map initialized successfully.");
  }, []);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const scriptId = "google-maps-script";
      if (document.getElementById(scriptId) || window.google?.maps) {
        if (window.google && window.google.maps && !mapInstanceRef.current) {
          console.log("Google Maps script already loaded or present, initializing map.");
          initMap();
        } else if (mapInstanceRef.current) {
            console.log("Map already initialized, skipping script load.");
            setMapLoading(false);
        } else {
          // Script element exists but google.maps not yet available, wait for it
          const checkGoogle = setInterval(() => {
            if (window.google && window.google.maps) {
              clearInterval(checkGoogle);
              initMap();
            }
          }, 100);
        }
        return;
      }
      
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      if (!apiKey) {
        console.error("Google Maps API Key is missing. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.");
        setError("Falta la configuración del mapa. Contacta al administrador.");
        setMapLoading(false);
        return;
      }
      console.log("Loading Google Maps script...");
      
      (window as any).initMapGlobally = initMap;

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMapGlobally&libraries=marker,geometry`; 
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        console.error("Failed to load Google Maps script.");
        setError("Error al cargar el script del mapa.");
        setMapLoading(false);
      };
      document.head.appendChild(script);
    };

    if (typeof window !== 'undefined') {
        loadGoogleMapsScript();
    }
    
  }, [initMap]);


  const calcularPrecio = (distanciaKm: number) => {
    let precioValor: number | string;
    if (distanciaKm <= 3) {
      precioValor = 2700;
    } else if (distanciaKm > 3 && distanciaKm <= 5) {
      precioValor = 3400;
    } else if (distanciaKm > 5 && distanciaKm <= 6) {
      precioValor = 4200;
    } else if (distanciaKm > 6 && distanciaKm <= 7) {
      precioValor = 5000;
    } else if (distanciaKm > 7 && distanciaKm <= 8) {
      precioValor = 5800;
    } else if (distanciaKm > 8 && distanciaKm <= 9) {
      precioValor = 6500;
    } else if (distanciaKm > 9 && distanciaKm <= 10) {
      precioValor = 7350;
    } else {
      const kmExtra = Math.ceil(distanciaKm - 10);
      precioValor = 7350 + (kmExtra * 750);
    }


    if (typeof precioValor === 'number') {
      setPrecio(`$${precioValor.toLocaleString('es-AR')}`);
    } else {
      setPrecio(precioValor);
    }
  };
  
  const colocarMarcadores = (
    origenPos: google.maps.LatLng,
    destinoPos: google.maps.LatLng,
    origenDir: string,
    destinoDir: string
  ) => {
    if (!window.google || !window.google.maps || !mapInstanceRef.current) return;

    if (marcadorOrigenRef.current) marcadorOrigenRef.current.setMap(null);
    if (marcadorDestinoRef.current) marcadorDestinoRef.current.setMap(null);

    marcadorOrigenRef.current = new window.google.maps.Marker({
      position: origenPos,
      map: mapInstanceRef.current,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 8, 
        fillColor: "hsl(var(--primary))", 
        fillOpacity: 1,
        strokeColor: "hsl(var(--primary-foreground))",
        strokeWeight: 2,
      },
      title: "Origen: " + origenDir,
      animation: window.google.maps.Animation.DROP,
    });

    marcadorDestinoRef.current = new window.google.maps.Marker({
      position: destinoPos,
      map: mapInstanceRef.current,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 8, 
        fillColor: "hsl(var(--accent))", 
        fillOpacity: 1,
        strokeColor: "hsl(var(--accent-foreground))",
        strokeWeight: 2,
      },
      title: "Destino: " + destinoDir,
      animation: window.google.maps.Animation.DROP,
    });

    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(origenPos);
    bounds.extend(destinoPos);
    mapInstanceRef.current.fitBounds(bounds);
    if (mapInstanceRef.current.getZoom()! > 15) {
        mapInstanceRef.current.setZoom(15);
    }
  };


  const calcularRuta = async () => {
    if (!origen || !destino) {
      setError("Por favor, ingrese tanto la dirección de origen como la de destino.");
      return;
    }
    if (!directionsServiceRef.current || !directionsRendererRef.current || !window.google || !window.google.maps) {
      setError("El servicio de mapas no está listo. Intente de nuevo.");
      return;
    }

    setLoading(true);
    setError(null);
    setDistancia(null);
    setPrecio(null);

    try {
      const response = await directionsServiceRef.current.route({
        origin: `${origen}, Mar del Plata, Argentina`,
        destination: `${destino}, Mar del Plata, Argentina`,
        travelMode: window.google.maps.TravelMode.DRIVING,
      });

      directionsRendererRef.current.setDirections(response);
      const route = response.routes[0];
      if (route && route.legs && route.legs[0]) {
        const leg = route.legs[0];
        const distanciaTexto = leg.distance?.text || "N/A";
        const distanciaValor = (leg.distance?.value || 0) / 1000; 

        setDistancia(`${distanciaTexto}`);
        calcularPrecio(distanciaValor);
        if (leg.start_location && leg.end_location && leg.start_address && leg.end_address) {
          colocarMarcadores(
            leg.start_location,
            leg.end_location,
            leg.start_address,
            leg.end_address
          );
        }
      } else {
        throw new Error("No se pudo obtener la información de la ruta.");
      }
    } catch (e) {
      console.error("Error al calcular la ruta:", e);
      setError("No se pudo calcular la ruta. Asegúrese de que las direcciones sean válidas en Mar del Plata.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 lg:p-8 bg-card shadow-xl rounded-lg animate-fade-in">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold text-primary flex items-center justify-center">
          <Rocket className="mr-2 h-6 w-6 text-accent" />
          Cotizador de Envíos Express
        </h3>
        <p className="text-muted-foreground mt-1">
          Calculá el costo de tu envío express. Ingresá las direcciones de origen y destino para obtener una cotización instantánea.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 animate-fade-in">
        <TooltipProvider>
          <div>
            <Label htmlFor="direccion-origen" className="block text-sm font-medium text-foreground mb-1">
              Dirección de Origen
               <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="inline-block ml-1 h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ingresa la calle y altura donde se retira el paquete.</p>
                  </TooltipContent>
                </Tooltip>
            </Label>
             <div className="flex items-center gap-2 rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <MapPinIcon className="h-5 w-5 text-muted-foreground ml-3 flex-shrink-0" />
                <Input
                id="direccion-origen"
                type="text"
                value={origen}
                onChange={(e) => setOrigen(e.target.value)}
                placeholder="Ej: Av. Colón 2000"
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 flex-grow p-3"
                />
            </div>
          </div>
          <div>
            <Label htmlFor="direccion-destino" className="block text-sm font-medium text-foreground mb-1">
                Dirección de Destino
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="inline-block ml-1 h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ingresa la calle y altura donde se entrega el paquete.</p>
                  </TooltipContent>
                </Tooltip>
            </Label>
            <div className="flex items-center gap-2 rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <MapPinIcon className="h-5 w-5 text-muted-foreground ml-3 flex-shrink-0" />
                <Input
                id="direccion-destino"
                type="text"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
                placeholder="Ej: Juan B. Justo 1500"
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 flex-grow p-3"
                />
            </div>
          </div>
          </TooltipProvider>
          <Button onClick={calcularRuta} disabled={loading || mapLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 text-base font-semibold transition-transform hover:scale-105 duration-200">
            {loading ? 'Calculando...' : 'Calcular Ruta y Precio Express'}
          </Button>
          {error && (
             <Alert variant="destructive" className="animate-fade-in">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2 text-foreground/80 animate-fade-in animation-delay-200">
            {distancia && <p id="distancia" className="text-lg">Distancia: <span className="font-semibold text-primary">{distancia}</span></p>}
            {precio && <p id="precio" className="text-lg">Precio Express estimado: <span className="font-semibold text-primary">{precio}</span></p>}
          </div>

          <Alert className="mt-6 animate-fade-in animation-delay-400">
            <Info className="h-5 w-5 text-secondary" />
            <AlertTitle className="text-secondary font-semibold">Importante</AlertTitle>
            <AlertDescription className="text-sm text-foreground/70">
              Los valores son aproximados. Pueden existir adicionales (Distancia retiro, bulto, demora, lluvia, etc). Para un valor exacto, comunícate por WhatsApp.
            </AlertDescription>
          </Alert>
          <div className="mt-4 text-center animate-fade-in animation-delay-400">
            <Button asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 hover:text-green-700 shadow-sm">
                <Link href="https://wa.me/+542236602699?text=Hola!%20Quisiera%20una%20cotización%20exacta%20para%20mi%20envío%20Express." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <WhatsAppIcon className="h-5 w-5"/>
                    <span>WhatsApp para cotización exacta: 223-660-2699</span>
                </Link>
            </Button>
          </div>
            <p className="text-center mt-8 text-sm text-foreground/70">
                Para envíos más económicos, utilizá nuestro <Link href="/cotizador-envios-lowcost" className="text-secondary underline hover:text-secondary/80">Cotizador Low Cost</Link>.
            </p>
        </div>
        <div className="relative animate-fade-in">
          {mapLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-md">
              <p className="text-foreground">Cargando mapa...</p>
            </div>
          )}
          <div ref={mapRef} id="mapa" className="h-[400px] md:h-full w-full rounded-md shadow-md border border-border min-h-[300px]"></div>
        </div>
      </div>
    </div>
  );
};

export default CaluloCotizadorExpress;

// Ensure google is available on the window object for the callback
declare global {
  interface Window {
    initMapGlobally?: () => void;
  }
}
