
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Lock, Users, LogIn } from 'lucide-react';

export function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userType, setUserType] = React.useState('comun');
  const [isLoading, setIsLoading] = React.useState(false);
  // const { toast } = useToast(); // Example for future use

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // TODO: Implement actual login logic with Supabase
    console.log('Login attempt with:', { username, password, userType });
    // Example:
    // try {
    //   const { error } = await supabase.auth.signInWithPassword({
    //     email: username, // Assuming username is email for now
    //     password,
    //   });
    //   if (error) throw error;
    //   toast({ title: "Inicio de sesión exitoso!", description: "Redirigiendo..."});
    //   // router.push('/dashboard'); // Redirect to dashboard or appropriate page
    // } catch (error: any) {
    //   toast({ variant: "destructive", title: "Error al iniciar sesión", description: error.message });
    // } finally {
    //   setIsLoading(false);
    // }
    setTimeout(() => setIsLoading(false), 1500); // Simulate API call
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
            <Label htmlFor="username">
              <User className="mr-2 inline-block h-4 w-4 text-muted-foreground" />
              Nombre de Usuario o Email
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="tuemail@ejemplo.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
                {/* Add other user types if needed, e.g., Emprendedor, Repartidor */}
                {/* <SelectItem value="emprendedor">Emprendedor</SelectItem> */}
                {/* <SelectItem value="repartidor">Repartidor</SelectItem> */}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
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
        <Link href="/auth/forgot-password"> {/* Added forgot password link */}
            <Button variant="link" className="px-0 text-sm text-muted-foreground hover:text-primary">
                 ¿Olvidaste tu contraseña?
            </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
