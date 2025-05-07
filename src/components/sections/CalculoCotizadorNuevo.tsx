'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Info, MessageSquare } from "lucide-react"; // Added Info and MessageSquare
import Link from 'next/link';

// WhatsApp Icon SVG Component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.579 2.168 2.129-.565z" />
  </svg>
);


const CalculoCotizadorNuevo: React.FC = () => {
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
    if (!window.google || !window.google.maps || !mapRef.current) {
      setError("Error al cargar el mapa. Intente de nuevo o verifique la configuración de la API Key.");
      setMapLoading(false);
      return;
    }

    const marDelPlata = { lat: -38.0055, lng: -57.5426 };
    const map = new window.google.maps.Map(mapRef.current, {
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
  }, []);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps) {
        initMap();
        return;
      }
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      if (!apiKey) {
        console.error("Google Maps API Key is missing. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.");
        setError("Falta la configuración del mapa. Contacta al administrador.");
        setMapLoading(false);
        return;
      }

      const scriptId = "google-maps-script";
      if (document.getElementById(scriptId)) {
        // Script already loaded or loading
        if (window.google && window.google.maps) {
          initMap();
        }
        return;
      }

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMapGlobally&libraries=marker,geometry`; // Added marker library for advanced markers
      script.async = true;
      script.defer = true;
      window.initMapGlobally = initMap;
      document.head.appendChild(script);

      return () => {
        delete window.initMapGlobally;
        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
          // existingScript.remove(); // Avoid removing the script to prevent issues if other components use it
        }
      };
    };
    loadGoogleMapsScript();
  }, [initMap]);


  const calcularPrecio = (distanciaKm: number) => {
    let precioValor: number | string;
    if (distanciaKm <= 2.9) {
      precioValor = 2000;
    } else if (distanciaKm > 2.9 && distanciaKm <= 4.9) {
      precioValor = 2700;
    } else if (distanciaKm > 4.9 && distanciaKm <= 8.9) {
      precioValor = 3800;
    } else if (distanciaKm > 8.9 && distanciaKm <= 13) {
      precioValor = 5400;
    } else if (distanciaKm > 13 && distanciaKm <= 15) {
      precioValor = 7600;
    } else if (distanciaKm > 15 && distanciaKm <= 17) {
      precioValor = 7600; 
    } else if (distanciaKm > 17 && distanciaKm <= 19) {
      precioValor = 9500;
    } else if (distanciaKm > 19 && distanciaKm <= 21) {
      precioValor = 9500; 
    } else {
      precioValor = "Consulte por WhatsApp";
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
        scale: 8, // Slightly smaller
        fillColor: "hsl(var(--primary))", // Green for origin using theme
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
        scale: 8, // Slightly smaller
        fillColor: "hsl(var(--accent))", // Orange for destination using theme
        fillOpacity: 1,
        strokeColor: "hsl(var(--accent-foreground))",
        strokeWeight: 2,
      },
      title: "Destino: " + destinoDir,
      animation: window.google.maps.Animation.DROP,
    });

    // Adjust map bounds to fit markers
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(origenPos);
    bounds.extend(destinoPos);
    mapInstanceRef.current.fitBounds(bounds);
    // Add a bit of padding if markers are too close to edges
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
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 animate-fade-in">
          <div>
            <Label htmlFor="direccion-origen" className="block text-sm font-medium text-foreground">Dirección de Origen</Label>
            <Input
              id="direccion-origen"
              type="text"
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
              placeholder="Ej: Av. Colón 2000"
              className="mt-1 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3"
            />
          </div>
          <div>
            <Label htmlFor="direccion-destino" className="block text-sm font-medium text-foreground">Dirección de Destino</Label>
            <Input
              id="direccion-destino"
              type="text"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              placeholder="Ej: Juan B. Justo 1500"
              className="mt-1 block w-full rounded-md border-input shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3"
            />
          </div>
          <Button onClick={calcularRuta} disabled={loading || mapLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 text-base font-semibold transition-transform hover:scale-105 duration-200">
            {loading ? 'Calculando...' : 'Calcular Ruta y Precio'}
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
            {precio && <p id="precio" className="text-lg">Precio estimado: <span className="font-semibold text-primary">{precio}</span></p>}
          </div>

          <Alert className="mt-6 animate-fade-in animation-delay-400">
            <Info className="h-5 w-5 text-secondary" />
            <AlertTitle className="text-secondary font-semibold">Importante</AlertTitle>
            <AlertDescription className="text-sm text-foreground/70">
              Los valores son aproximados. Pueden existir adicionales (Distancia retiro, bulto, demora, lluvia, etc).
            </AlertDescription>
          </Alert>
          <div className="mt-4 text-center animate-fade-in animation-delay-400">
            <Button asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 hover:text-green-700 shadow-sm">
                <Link href="https://wa.me/+542236602699?text=Hola!%20Quisiera%20una%20cotización%20exacta%20para%20mi%20envío." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <WhatsAppIcon className="h-5 w-5"/>
                    <span>Consultar por WhatsApp: 223-660-2699</span>
                </Link>
            </Button>
          </div>

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

export default CalculoCotizadorNuevo;
