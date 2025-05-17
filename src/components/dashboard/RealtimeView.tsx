
'use client'; 

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioTower, Loader2 } from "lucide-react"; // Removed MessageSquare
// import { supabase } from '@/lib/supabaseClient'; // Adjust path as needed
import { type User } from '@supabase/supabase-js';


interface RealtimeMessage {
  id: string;
  tipo_mensaje: string;
  contenido: string;
  fecha_hora: string;
  servicio_id?: string;
}

export function RealtimeView() {
  const [messages, setMessages] = React.useState<RealtimeMessage[]>([]);
  const [lastUpdate, setLastUpdate] = React.useState(new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }));
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);


  React.useEffect(() => {
    // Simulate fetching user
    const mockUser = { id: 'test-user-id' } as User; // Placeholder
    setCurrentUser(mockUser);
    
    // Simulate initial load & mock real-time updates
    setIsLoading(true);
    if (mockUser) { // Using currentUser to satisfy ESLint
        console.log("RealtimeView attempting to load for user:", mockUser.id);
    }
    setTimeout(() => {
        setMessages([
            {id: 'msg-1', tipo_mensaje: 'estado_pedido', contenido: 'Pedido #123 en camino (Simulado)', fecha_hora: new Date().toISOString()},
        ]);
        setIsLoading(false);
        setLastUpdate(new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }));
    }, 1200);

    // Placeholder for Supabase real-time subscription
    // if (currentUser) { 
    //   const channel = supabase.channel('realtime-mensajes')
    //     .on(
    //       'postgres_changes',
    //       { 
    //         event: 'INSERT', 
    //         schema: 'public', 
    //         table: 'p_mensajes_tiempo_real',
    //         // filter: `usuario_id=eq.${currentUser.id}` // Filter for messages for the current user
    //       },
    //       (payload) => {
    //         console.log('New real-time message received!', payload);
    //         setMessages(prevMessages => [...prevMessages, payload.new as RealtimeMessage].slice(-5)); // Keep last 5 messages
    //         setLastUpdate(new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }));
    //       }
    //     )
    //     .subscribe((status) => {
    //       if (status === 'SUBSCRIBED') {
    //         console.log('Subscribed to p_mensajes_tiempo_real channel!');
    //         setIsLoading(false); // Assuming initial load is done or handled separately
    //       }
    //       if (status === 'SUBSCRIPTION_ERROR') {
    //         console.error('Supabase subscription error!');
    //         setIsLoading(false);
    //       }
    //     });

    //   return () => {
    //     supabase.removeChannel(channel);
    //   };
    // }
  }, [currentUser]); 

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
          Última actualización: {lastUpdate}
        </div>
      </CardContent>
    </Card>
  );
}
