// app/providers/theme-provider.tsx
'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class" // adiciona "dark" ou "light" no <html>
      defaultTheme="dark" // fallback para dark
      enableSystem={true} // ignora tema do sistema (opcional)
      storageKey="theme" // chave no localStorage
    >
      {children}
    </NextThemesProvider>
  );
}
