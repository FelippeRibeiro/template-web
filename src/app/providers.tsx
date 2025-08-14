'use client';

import QueryProvider from '@/context/queryContext';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster position="top-right" richColors theme="dark" />
      </QueryProvider>
    </>
  );
}
