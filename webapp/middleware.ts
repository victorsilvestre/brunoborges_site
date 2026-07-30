import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Para DESATIVAR o redirect (nova maratona): mude para false e publique
const MARATONA_REDIRECT = false;

export function middleware(request: NextRequest) {
    if (MARATONA_REDIRECT) {
        const response = NextResponse.redirect(new URL('/mentoria-tds', request.url));
        response.cookies.set('maratona_origem', 'true', { path: '/', maxAge: 300 });
        return response;
    }
}

export const config = {
    matcher: '/maratona',
};
