'use client';
import { Home } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const router = useRouter();
  const [time, setTime] = useState<number>(5);
  useEffect(() => {
    if (time <= 0) router.push('/');
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold">404</h1>
        <h2 className="mt-2 text-3xl font-bold">Página não encontrada</h2>
        <p className="mt-2 ">Oops! A pagina que você está procurando não existe ou foi movida.</p>
        <p className="mt-2 ">Você será redirecionado em {time} segundos.</p>
        <Link href="/" className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition-all">
          Retornar para o Início
        </Link>
      </div>
    </div>
  );
}
