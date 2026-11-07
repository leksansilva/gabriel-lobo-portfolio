import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-muted-foreground text-sm font-medium">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">
        Página não encontrada
      </h1>
      <p className="text-muted-foreground max-w-md">
        O endereço que você acessou não existe ou foi movido.
      </p>
      <Button asChild>
        <Link href="/">Voltar para o início</Link>
      </Button>
    </main>
  );
}
