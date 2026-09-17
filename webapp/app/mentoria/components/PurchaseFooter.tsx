export function PurchaseFooter() {
    return (
        <footer className="w-full bg-white border-t border-[var(--m-border)] py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <p className="text-sm text-[var(--m-body)]">
                        © Trader Bruno Borges — Excelência em Price Action. Todos os direitos reservados.
                    </p>
                    <p className="font-[family-name:var(--m-font-mono)] text-[10px] text-[var(--m-caption)] uppercase tracking-wider">
                        Mentoria Trader de Sucesso (TDS) • Ambiente Seguro do Aluno • Protocolo 2026
                    </p>
                </div>
                <div className="flex items-center gap-5 font-[family-name:var(--m-font-mono)] text-xs uppercase tracking-wider text-[var(--m-caption)]">
                    <a href="https://alunos.traderbrunoborges.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--m-dark)] transition-colors">
                        Área de Membros
                    </a>
                    <span>•</span>
                    <a href="https://wa.me/5562982612893" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--m-dark)] transition-colors">
                        Suporte WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
}
