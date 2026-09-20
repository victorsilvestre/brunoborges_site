import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { INSCRICOES_ABERTAS } from './app/mentoria/config';

// A maratona acabou: enquanto as inscrições da mentoria estiverem abertas,
// manda quem cair em /maratona direto para /mentoria.
export function middleware(request: NextRequest) {
    if (INSCRICOES_ABERTAS) {
        return NextResponse.redirect(new URL('/mentoria', request.url));
    }
}

export const config = {
    matcher: '/maratona',
};
