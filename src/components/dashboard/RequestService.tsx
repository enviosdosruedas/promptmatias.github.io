
'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Send, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// import { supabase } from '@/lib/supabaseClient'; // Adjust path as needed
import { type User } from '@supabase/supabase-js';

export function RequestService() {
  const [serviceName, setServiceName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      // const { data: { user } } = await supabase.auth.getUser(); // Uncomment when Supabase is integrated
      // setCurrentUser(user); // Uncomment when Supabase is integrated

      // Placeholder for now
      const placeholderUser = { id: 'mock-user-id' } as User;
      setCurrentUser(placeholderUser);
    };
    fetchUser();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!serviceName.trim()) {
      toast({ variant: "destructive", title: "Error", description: "El nombre del servicio es obligatorio." });
      return;
    }
    if (!currentUser) {
      toast({ variant: "destructive", title: "Error", description: "Debes estar autenticado para solicitar un servicio." });
      return;
    }

    setIsLoading(true);

    try {
      // const { data, error } = await supabase // Uncomment when Supabase is integrated
      //   .from('servicios')
      //   .insert([
      //     { 
      //       user_id: currentUser.id, 
      //       service_name: serviceName, 
      //       description: description,
      //       status: 'Pendiente' // Default status
      //     },
      //   ])
      //   .select();

      // if (error) throw error;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Servicio Solicitado (Simulado)",
        description: `El servicio "${serviceName}" ha sido solicitado.`,
        action: (
          <div className="flex items-center text-green-500">
            <CheckCircle className="mr-2 h-5 w-5" /> Éxito
          </div>
        ),
      });
      setServiceName('');
      setDescription('');
    } catch (error: any) {
      console.error("Error requesting service:", error);
      toast({
        variant: "destructive",
        title: "Error al solicitar servicio",
        description: error.message || "Ocurrió un problema. Inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Send className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">Solicitar Nuevo Servicio</CardTitle>
            <CardDescription>Completa el formulario para programar tu próximo envío.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="serviceName">Nombre del Servicio / Paquete</Label>
            <Input 
              id="serviceName" 
              placeholder="Ej: Entrega de documentos urgentes" 
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descripción Adicional (Opcional)</Label>
            <Textarea 
              id="description" 
              placeholder="Ej: Indicar fragilidad, contacto en destino, etc." 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <PlusCircle className="mr-2 h-5 w-5" />
            )}
            {isLoading ? "Enviando Solicitud..." : "Solicitar Servicio"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
