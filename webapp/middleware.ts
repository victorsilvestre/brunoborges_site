import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// true  = /maratona redireciona para /mentoria (sem maratona no ar)
// false = /maratona fica acessível (maratona no ar)
const MARATONA_REDIRECT = false;

export function middleware(request: NextRequest) {
    if (MARATONA_REDIRECT) {
        return NextResponse.redirect(new URL('/mentoria', request.url));
    }
}

export const config = {
    matcher: '/maratona',
};
