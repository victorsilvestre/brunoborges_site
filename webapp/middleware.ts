import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Não há maratona no ar: /maratona sempre manda para /mentoria
// (página de vendas ou lista de espera, conforme INSCRICOES_ABERTAS).
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/mentoria', request.url));
}

export const config = {
    matcher: '/maratona',
};
