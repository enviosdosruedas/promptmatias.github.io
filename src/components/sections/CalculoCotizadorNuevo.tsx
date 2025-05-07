
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

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
  const polylineRef = useRef<google.maps.Polyline | null>(null);

  const precioBase = 800; // Not used in current JS logic but kept for reference
  const precioPorKm = 150; // Not used in current JS logic but kept for reference

  const initMap = useCallback(() => {
    if (!window.google || !mapRef.current) {
      setError("Error al cargar el mapa. Intente de nuevo.");
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
      suppressMarkers: true, // We'll use custom markers
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

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMapGlobally`;
      script.async = true;
      script.defer = true;
      window.initMapGlobally = initMap;
      document.head.appendChild(script);

      return () => {
        delete window.initMapGlobally;
        // Consider removing the script tag if the component unmounts, though usually not strictly necessary
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
      precioValor = 7600; // Same as 13-15km
    } else if (distanciaKm > 17 && distanciaKm <= 19) {
      precioValor = 9500;
    } else if (distanciaKm > 19 && distanciaKm <= 21) {
      precioValor = 9500; // Same as 17-19km
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
    if (marcadorOrigenRef.current) marcadorOrigenRef.current.setMap(null);
    if (marcadorDestinoRef.current) marcadorDestinoRef.current.setMap(null);

    marcadorOrigenRef.current = new window.google.maps.Marker({
      position: origenPos,
      map: mapInstanceRef.current,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "#10B981", // Green
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2,
      },
      title: "Origen: " + origenDir,
    });

    marcadorDestinoRef.current = new window.google.maps.Marker({
      position: destinoPos,
      map: mapInstanceRef.current,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "#F97316", // Orange
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2,
      },
      title: "Destino: " + destinoDir,
    });
  };


  const calcularRuta = async () => {
    if (!origen || !destino) {
      setError("Por favor, ingrese tanto la dirección de origen como la de destino.");
      return;
    }
    if (!directionsServiceRef.current || !directionsRendererRef.current) {
      setError("El servicio de mapas no está listo. Intente de nuevo.");
      return;
    }

    setLoading(true);
    setError(null);
    setDistancia(null);
    setPrecio(null);
     if (polylineRef.current) {
      polylineRef.current.setMap(null);
    }


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
        const distanciaValor = (leg.distance?.value || 0) / 1000; // km

        setDistancia(`${distanciaTexto}`);
        calcularPrecio(distanciaValor);
        colocarMarcadores(
          leg.start_location,
          leg.end_location,
          leg.start_address,
          leg.end_address
        );
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
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 lg:p-8 bg-card shadow-xl rounded-lg">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
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
          <Button onClick={calcularRuta} disabled={loading || mapLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 text-base font-semibold">
            {loading ? 'Calculando...' : 'Calcular Ruta y Precio'}
          </Button>
          {error && (
             <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2 text-foreground/80">
            {distancia && <p id="distancia" className="text-lg">Distancia: <span className="font-semibold text-primary">{distancia}</span></p>}
            {precio && <p id="precio" className="text-lg">Precio estimado: <span className="font-semibold text-primary">{precio}</span></p>}
          </div>
        </div>
        <div className="relative">
          {mapLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-md">
              <p className="text-foreground">Cargando mapa...</p>
            </div>
          )}
          <div ref={mapRef} id="mapa" className="h-[400px] w-full rounded-md shadow-md border border-border"></div>
        </div>
      </div>
    </div>
  );
};

export default CalculoCotizadorNuevo;
