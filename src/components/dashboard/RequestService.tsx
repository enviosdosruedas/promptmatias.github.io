
'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Send, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// import { supabase } from '@/lib/supabaseClient'; // Adjust path as needed
import { type User } from '@supabase/supabase-js';

const serviceTypes = ["mensajeria", "delivery", "gastronomico", "empresas", "flex"];

export function RequestService() {
  const [tipoServicio, setTipoServicio] = React.useState('');
  const [descripcion, setDescription] = React.useState('');
  const [detalles, setDetalles] = React.useState(''); // For JSONB or specific fields
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
    if (!tipoServicio.trim()) {
      toast({ variant: "destructive", title: "Error", description: "El tipo de servicio es obligatorio." });
      return;
    }
    if (!currentUser) {
      toast({ variant: "destructive", title: "Error", description: "Debes estar autenticado para solicitar un servicio." });
      return;
    }

    setIsLoading(true);
    let parsedDetalles = {};
    if (detalles.trim()) {
        try {
            parsedDetalles = JSON.parse(detalles);
        } catch (jsonError) {
            toast({
                variant: "destructive",
                title: "Error en Detalles",
                description: "El campo 'Detalles Específicos' debe ser un JSON válido o estar vacío."
            });
            setIsLoading(false);
            return;
        }
    }


    try {
      // Simulate API call - replace with actual Supabase insert
      // const { data, error } = await supabase
      //   .from('p_servicios')
      //   .insert([
      //     { 
      //       usuario_id: currentUser.id, 
      //       tipo_servicio: tipoServicio, 
      //       descripcion: descripcion,
      //       detalles: detalles.trim() ? JSON.parse(detalles) : null, // Parse JSON or set null
      //       estado: 'pendiente' // Default status
      //     },
      //   ])
      //   .select();

      // if (error) throw error;
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      console.log("Service requested:", { tipoServicio, descripcion, detalles: parsedDetalles, userId: currentUser.id });
      
      toast({
        title: "Servicio Solicitado (Simulado)",
        description: `El servicio de tipo "${tipoServicio}" ha sido solicitado.`,
        action: (
          <div className="flex items-center text-green-500">
            <CheckCircle className="mr-2 h-5 w-5" /> Éxito
          </div>
        ),
      });
      setTipoServicio('');
      setDescription('');
      setDetalles('');
    } catch (error: unknown) {
      console.error("Error requesting service:", error);
      let errorMessage = "Ocurrió un problema. Inténtalo de nuevo.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        variant: "destructive",
        title: "Error al solicitar servicio",
        description: errorMessage,
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
            <Label htmlFor="tipoServicio">Tipo de Servicio</Label>
            <Select value={tipoServicio} onValueChange={setTipoServicio} required>
              <SelectTrigger id="tipoServicio" className="w-full">
                <SelectValue placeholder="Selecciona un tipo de servicio" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map(type => (
                  <SelectItem key={type} value={type} className="capitalize">{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="descripcion">Descripción General</Label>
            <Textarea 
              id="descripcion" 
              placeholder="Ej: Entrega de documentos urgentes, pedido de comida para cliente X..." 
              value={descripcion}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="detalles">Detalles Específicos (JSON)</Label>
            <Textarea 
              id="detalles" 
              placeholder='Ej: {"direccion_origen": "Calle Falsa 123", "direccion_destino": "Av. Siempreviva 742"}'
              value={detalles}
              onChange={(e) => setDetalles(e.target.value)}
              className="font-mono text-sm"
              rows={3}
            />
            <p className="text-xs text-muted-foreground">
              Para campos específicos del servicio (ej. direcciones, items de pedido). Ingrese en formato JSON o deje vacío.
            </p>
          </div>

          <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full" disabled={isLoading || !currentUser}>
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
