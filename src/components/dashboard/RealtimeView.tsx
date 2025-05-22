
'use client';

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioTower, Loader2, MapPin } from "lucide-react";
// import { supabase } from '@/lib/supabaseClient'; // Adjust path as needed
// import { type User } from '@supabase/supabase-js'; // User type will be used with actual auth

// For mock purposes, we'll use a simple ID
const MOCK_USER_ID_FOR_REALTIME: string = 'test-user-id-realtime';

interface RealtimeMessage {
  id: string;
  tipo_mensaje: string;
  contenido: string;
  fecha_hora: string;
  servicio_id?: string;
}

export function RealtimeView() {
  const [messages, setMessages] = React.useState<RealtimeMessage[]>([]);
  const [lastUpdate, setLastUpdate] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  // Store just the ID for the mock to ensure dependency stability
  const [currentUserId, setCurrentUserId] = React.useState<string | null>(null);

  // Effect to set the current user ID (simulated)
  React.useEffect(() => {
    // Simulating fetching the user ID
    setCurrentUserId(MOCK_USER_ID_FOR_REALTIME);
    console.log("RealtimeView: Mock user ID set.");
  }, []); // Empty dependency array: runs once on mount

  // Effect for real-time updates, depends on currentUserId
  React.useEffect(() => {
    if (!currentUserId) {
      console.log("RealtimeView: No current user ID, skipping real-time setup.");
      setIsLoading(false);
      setMessages([]);
      return;
    }
    console.log("RealtimeView: Setting up real-time for user ID:", currentUserId);

    setIsLoading(true);
    // Simulate initial load & mock real-time updates
    const initialLoadTimeout = setTimeout(() => {
      setMessages([
        { id: 'msg-rt-1', tipo_mensaje: 'estado_pedido', contenido: `Pedido #ABC en tránsito (Simulado para ${currentUserId})`, fecha_hora: new Date().toISOString() },
      ]);
      setIsLoading(false);
      setLastUpdate(new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }));
    }, 1500);

    // Placeholder for Supabase real-time subscription setup
    // if (currentUserId) { // Check currentUserId before using it for channel name
    //   const channel = supabase.channel(`realtime-view-${currentUserId}`)
    //     .on('postgres_changes', { event: '*', schema: 'public', table: 'p_mensajes_tiempo_real', filter: `usuario_id=eq.${currentUserId}` }, (payload) => {
    //       console.log('RealtimeView: New message via Supabase RT', payload);
    //       if (payload.eventType === 'INSERT') {
    //         setMessages(prevMessages => [...prevMessages, payload.new as RealtimeMessage].slice(-5));
    //       }
    //       setLastUpdate(new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }));
    //     })
    //     .subscribe((status, err) => {
    //       if (status === 'SUBSCRIBED') console.log('RealtimeView: Subscribed to RT channel for user', currentUserId);
    //       if (status === 'SUBSCRIPTION_ERROR') console.error('RealtimeView: RT Subscription error', err);
    //       if (status === 'TIMED_OUT') console.warn('RealtimeView: RT Subscription timed out');
    //     });
    //    channelRef.current = channel; // Store channel in ref if needed for cleanup
    // }

    return () => {
      clearTimeout(initialLoadTimeout);
      // if (channelRef.current) {
      //   supabase.removeChannel(channelRef.current);
      //   console.log("RealtimeView: Unsubscribed from RT channel for user:", currentUserId);
      // }
      console.log("RealtimeView: Cleanup effect for user ID:", currentUserId);
    };
  }, [currentUserId]); // Depend on the primitive currentUserId

  // Effect for client-side hydration of the initial "lastUpdate" time display.
  React.useEffect(() => {
    if (lastUpdate === null) {
        setLastUpdate(new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }));
    }
  }, []); // Runs once on mount, client-side only

  return (
    <Card className="shadow-lg sticky top-24">
      <CardHeader>
        <div className="flex items-center gap-3">
          <RadioTower className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">En Tiempo Real</CardTitle>
            <CardDescription>Actualizaciones y estado de tus envíos.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
            <div className="flex items-center justify-center py-4">
                <Loader2 className="mr-2 h-6 w-6 animate-spin text-primary" />
                <p className="text-muted-foreground">Conectando a tiempo real...</p>
            </div>
        ) : (
            <div className="flex items-center justify-between rounded-md bg-muted/50 p-4">
            <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <p className="font-medium text-foreground">Últimos Mensajes:</p>
            </div>
            <p className="font-semibold text-lg text-primary">{messages.length}</p>
            </div>
        )}
        
        <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
            {messages.length > 0 ? (
                messages.map(msg => (
                    <div key={msg.id} className="p-3 bg-background rounded-md border text-sm">
                        <p className="font-medium text-foreground">{msg.contenido}</p>
                        <p className="text-xs text-muted-foreground">
                            {new Date(msg.fecha_hora).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })} - {msg.tipo_mensaje}
                        </p>
                    </div>
                ))
            ) : (
                !isLoading && <p className="text-sm text-muted-foreground text-center py-4">No hay mensajes recientes.</p>
            )}
        </div>

        <div className="text-sm text-muted-foreground text-right pt-2 border-t">
          Última actualización: {lastUpdate || "Cargando..."}
        </div>
      </CardContent>
    </Card>
  );
}
