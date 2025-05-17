
import type { Metadata } from 'next';
import { ViewServices } from '@/components/dashboard/ViewServices';
import { RequestService } from '@/components/dashboard/RequestService';
import { RealtimeView } from '@/components/dashboard/RealtimeView';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Dashboard | EnviosDosRuedas',
  description: 'Panel de control para gestionar tus servicios y envíos.',
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Panel de Control
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Bienvenido a tu panel de EnviosDosRuedas.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2 space-y-8">
          <ViewServices />
          <Separator />
          <RequestService />
        </section>

        <aside className="lg:col-span-1">
          <RealtimeView />
        </aside>
      </div>
    </div>
  );
}
