
'use client';

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Package, Loader2, AlertTriangle } from "lucide-react";
// import { supabase } from '@/lib/supabaseClient'; // Adjust path as needed
import { type User } from '@supabase/supabase-js'; // Import User type

interface Service {
  id: string;
  service_name: string; // Assuming a column name like this
  status: string;
  created_at: string;
}

export function ViewServices() {
  const [services, setServices] = React.useState<Service[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const fetchUserAndServices = async () => {
      // const { data: { user } } = await supabase.auth.getUser(); // Uncomment when Supabase is integrated
      // setCurrentUser(user); // Uncomment when Supabase is integrated

      // Placeholder user for now
      const placeholderUser = { id: 'mock-user-id' } as User;
      setCurrentUser(placeholderUser);


      if (placeholderUser) { // Replace with `if (user)` when Supabase is integrated
        try {
          // const { data, error: dbError } = await supabase // Uncomment when Supabase is integrated
          //   .from('servicios')
          //   .select('*')
          //   .eq('user_id', user.id)
          //   .order('created_at', { ascending: false });

          // if (dbError) throw dbError;
          // setServices(data as Service[]);

          // Placeholder data for now
          setTimeout(() => {
            setServices([
              { id: '1', service_name: 'Envío Express #123 (Simulado)', status: 'En Camino', created_at: new Date().toISOString() },
              { id: '2', service_name: 'Recolección Low-Cost #456 (Simulado)', status: 'Programado', created_at: new Date().toISOString() },
            ]);
            setLoading(false);
          }, 1000);

        } catch (e: any) {
          console.error("Error fetching services:", e);
          setError("No se pudieron cargar los servicios.");
          setLoading(false);
        }
      } else {
        setError("Usuario no autenticado.");
        setLoading(false);
      }
    };

    fetchUserAndServices();
  }, []);

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
                    <p className="font-medium text-foreground">{service.service_name}</p>
                    <p className="text-sm text-muted-foreground">
                      Solicitado: {new Date(service.created_at).toLocaleDateString('es-AR')}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full
                  ${service.status === 'En Camino' ? 'bg-blue-100 text-blue-700' : ''}
                  ${service.status === 'Programado' ? 'bg-yellow-100 text-yellow-700' : ''}
                  ${service.status === 'Entregado' ? 'bg-green-100 text-green-700' : ''}
                `}>
                  {service.status}
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
