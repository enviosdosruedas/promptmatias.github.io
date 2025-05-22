
import type { Metadata } from 'next';
import { LoginForm } from '@/components/auth/login/LoginForm';

export const metadata: Metadata = {
  title: 'Iniciar Sesión | EnviosDosRuedas',
  description: 'Inicia sesión en tu cuenta de EnviosDosRuedas para acceder a nuestros servicios.',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
