'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <Button variant="ghost" size="icon" aria-label="Alternar tema" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
