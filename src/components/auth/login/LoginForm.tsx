
'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Lock, Users, LogIn, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
// import { supabase } from '@/lib/supabaseClient'; // Uncomment when Supabase client is set up

export function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userType, setUserType] = React.useState('comun');
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    console.log('Login attempt with:', { email, password, userType });

    try {
      // Placeholder for Supabase login logic
      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email: email,
      //   password: password,
      // });

      // if (error) {
      //   throw error;
      // }

      // // Successful login
      // toast({
      //   title: "Inicio de sesión exitoso!",
      //   description: "Redirigiendo al dashboard...",
      // });
      // router.push('/dashboard'); // Redirect to dashboard

      // Simulate API call & redirect for now
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      toast({
        title: "Inicio de sesión exitoso! (Simulado)",
        description: "Redirigiendo al dashboard...",
      });
      router.push('/dashboard');

    } catch (error: unknown) {
      console.error('Login error:', error);
      let errorMessage = "Por favor, verifica tus credenciales e inténtalo de nuevo.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        variant: "destructive",
        title: "Error al iniciar sesión",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-xl animate-fade-in">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <LogIn className="h-8 w-8" />
        </div>
        <CardTitle className="text-2xl font-bold text-primary">Iniciar Sesión</CardTitle>
        <CardDescription className="text-muted-foreground">
          Accede a tu cuenta de EnviosDosRuedas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">
              <User className="mr-2 inline-block h-4 w-4 text-muted-foreground" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tuemail@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-input/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">
              <Lock className="mr-2 inline-block h-4 w-4 text-muted-foreground" />
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-input/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userType">
              <Users className="mr-2 inline-block h-4 w-4 text-muted-foreground" />
              Tipo de Usuario
            </Label>
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger id="userType" className="w-full bg-input/50">
                <SelectValue placeholder="Selecciona tipo de usuario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="comun">Usuario Común</SelectItem>
                <SelectItem value="admin">Admin</SelectItem> 
                {/* <SelectItem value="repartidor">Repartidor</SelectItem> */}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <LogIn className="mr-2 h-5 w-5" />}
            {isLoading ? 'Ingresando...' : 'Iniciar Sesión'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-2 pt-6">
        <p className="text-sm text-muted-foreground">
          ¿No tienes cuenta?{' '}
          <Link href="/auth/register" className="font-medium text-primary hover:underline">
            Regístrate aquí
          </Link>
        </p>
        <Link href="/auth/forgot-password"> 
            <Button variant="link" className="px-0 text-sm text-muted-foreground hover:text-primary">
                 ¿Olvidaste tu contraseña?
            </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
