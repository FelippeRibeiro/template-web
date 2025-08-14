'use client';

import * as React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';

const schema = z.object({
  email: z.string().min(1, { message: 'Informe seu e-mail' }).email({ message: 'E-mail inválido' }),
  password: z.string().min(6, { message: 'A senha deve ter ao menos 6 caracteres' }),
  remember: z.boolean().default(false).optional(),
});

export default function LoginPage() {
  const [showPass, setShowPass] = React.useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    mode: 'onTouched',
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    // TODO: troque pelo seu fluxo real de autenticação
    console.log('login:', values);
    // Simulação de chamada
    await new Promise((r) => setTimeout(r, 600));
    alert('Login enviado. Implemente sua lógica de autenticação.');
  }

  return (
    <div className="min-h-svh flex items-center justify-center bg-muted/20 px-4">
      <Card className="w-full max-w-sm border border-border/60 shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl tracking-tight">Entrar</CardTitle>
          <CardDescription>Acesse sua conta para continuar.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" inputMode="email" placeholder="voce@exemplo.com" autoComplete="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type={showPass ? 'text' : 'password'} placeholder="••••••••" autoComplete="current-password" {...field} />
                        <Button
                          type="button"
                          onClick={() => setShowPass((s) => !s)}
                          variant="ghost"
                          size="icon"
                          className="absolute right-1.5 top-1/2 -translate-y-1/2"
                          aria-label={showPass ? 'Ocultar senha' : 'Mostrar senha'}
                        >
                          {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </FormControl>
                    <div className="flex items-center justify-between">
                      <FormMessage />
                      <Link href="/forgot-password" className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
                        Esqueci minha senha
                      </Link>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        // react-hook-form espera boolean
                        onCheckedChange={(v) => field.onChange(Boolean(v))}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">Lembrar de mim</FormLabel>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Não tem conta?{' '}
            <Link href="/register" className="underline underline-offset-4 hover:text-foreground">
              Criar conta
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
