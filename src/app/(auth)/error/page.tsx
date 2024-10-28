import Logotipo from '@/icons/Logotipo';
import { Button } from '@nextui-org/react';
import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Erro',
};

export default function ErrorPage() {
  return (
    <main className="py-4 h-full">
      <div className="mx-auto w-full h-full max-w-md md:w-96 md:max-w-sm flex flex-col justify-center">
        <header>
          <Link href="/" aria-label="Home">
            <Logotipo className="h-10 w-auto" />
          </Link>
          <h1 className="mt-2 text-lg font-semibold text-gray-950 dark:text-secondary-foreground">
            Parece que algo deu errado
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-secondary-foreground">
            Vamos tentar novamente?
          </p>
        </header>
        <div className="mt-6 flex gap-2">
          <Button>Fazer login</Button>
          <Button>Criar conta</Button>
        </div>
      </div>
    </main>
  );
}
