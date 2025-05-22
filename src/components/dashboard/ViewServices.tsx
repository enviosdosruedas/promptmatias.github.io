
'use client';

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Package, Loader2, AlertTriangle } from "lucide-react";
// import { supabase } from '@/lib/supabaseClient'; // Adjust path as needed
import { type User } from '@supabase/supabase-js'; // Import User type

interface Service {
  id: string;
  service_name?: string;
  tipo_servicio: string;
  descripcion?: string;
  estado: string;
  fecha_solicitud: string; 
  detalles?: unknown; 
}

// Define the mock user as a module-level constant for a stable reference
const MOCK_USER_FOR_VIEW_SERVICES: User = { id: 'test-user-id' } as User; // Cast to User type

export function ViewServices() {
  const [services, setServices] = React.useState<Service[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  // Effect to set the current user (simulated)
  React.useEffect(() => {
    const fetchUser = async () => {
      // When ready, replace with actual Supabase auth call:
      // const { data: { user } } = await supabase.auth.getUser();
      // setCurrentUser(user);
      
      // Using the stable mock user object
      setCurrentUser(MOCK_USER_FOR_VIEW_SERVICES);
      // console.log("ViewServices: Mock user set using stable reference.");
    };
    fetchUser();
  }, []); // Empty dependency array: runs once on mount

  // Effect to fetch services when currentUser is available and changes
  React.useEffect(() => {
    const fetchServices = async () => {
      if (!currentUser) {
        // console.log("ViewServices: No current user, skipping service fetch.");
        setServices([]); // Clear services if no user
        setLoading(false); // Stop loading if no user
        return;
      }
      
      console.log("ViewServices: Fetching services for user:", currentUser.id);
      setLoading(true);
      setError(null);
      try {
        // Simulate fetching services - replace with actual Supabase call
        // const { data, error: fetchError } = await supabase
        //   .from('p_servicios')
        //   .select('*')
        //   .eq('usuario_id', currentUser.id) 
        //   .order('fecha_solicitud', { ascending: false });

        // if (fetchError) throw fetchError;
        // setServices(data as Service[] || []);

        // Placeholder data for now
        await new Promise(resolve => setTimeout(resolve, 1000));
        setServices([
          { id: '1', tipo_servicio: 'mensajeria', descripcion: 'Entrega de documentos urgentes (Simulado)', estado: 'En Camino', fecha_solicitud: new Date().toISOString(), detalles: { direccion_origen: "Origen A", direccion_destino: "Destino B"} },
          { id: '2', tipo_servicio: 'delivery', descripcion: 'Pedido de comida (Simulado)', estado: 'Programado', fecha_solicitud: new Date(Date.now() - 86400000).toISOString(), detalles: { nombre_restaurante: "Restaurante XYZ" } },
        ]);
      } catch (e: unknown) { 
        console.error("Error fetching services:", e);
        let errorMessage = "No se pudieron cargar los servicios.";
        if (e instanceof Error) {
          errorMessage = `${errorMessage} ${e.message}`;
        }
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [currentUser]); // Dependency: fetchServices runs when currentUser changes

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <ListChecks className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">Mis Servicios Solicitados</CardTitle>
            <CardDescription>Un resumen de tus envíos recientes y programados.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading && (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="mr-2 h-6 w-6 animate-spin text-primary" />
            <p className="text-muted-foreground">Cargando servicios...</p>
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center py-4 text-destructive">
            <AlertTriangle className="mr-2 h-6 w-6" />
            <p>{error}</p>
          </div>
        )}
        {!loading && !error && services.length > 0 ? (
          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service.id} className="flex items-center justify-between rounded-md border bg-background p-4 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground capitalize">{service.tipo_servicio}: {service.descripcion || 'Servicio solicitado'}</p>
                    <p className="text-sm text-muted-foreground">
                      Solicitado: {new Date(service.fecha_solicitud).toLocaleDateString('es-AR')}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full
                  ${service.estado === 'En Camino' || service.estado === 'en curso' ? 'bg-blue-100 text-blue-700' : ''}
                  ${service.estado === 'Programado' || service.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-700' : ''}
                  ${service.estado === 'Entregado' ? 'bg-green-100 text-green-700' : ''}
                  ${service.estado === 'Cancelado' ? 'bg-red-100 text-red-700' : ''}
                `}>
                  {service.estado}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          !loading && !error && <p className="text-center text-muted-foreground py-4">No has solicitado ningún servicio aún.</p>
        )}
      </CardContent>
    </Card>
  );
}
