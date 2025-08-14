'use client';

import QueryProvider from '@/context/queryContext';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryProvider>
        {children}
        <Toaster position="top-right" richColors theme="dark" />
      </QueryProvider>
    </>
  );
}
