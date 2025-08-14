import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
interface Routes {
  path: string;
  whenAuthenticated: 'redirect' | 'next';
}

const publicRoutes: Routes[] = [{ path: '/login', whenAuthenticated: 'redirect' }];

export async function middleware(req: NextRequest) {}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
