import Image from "next/image";

const introParagraphs = [
    "A sua privacidade é importante para nós. É política do Trader Bruno de Paula Borges respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Trader Bruno de Paula Borges, e outros sites que possuímos e operamos.",
    "Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.",
    "Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.",
    "Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.",
    "O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.",
    "Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.",
    "O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.",
];

const adItems = [
    "O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.",
    "Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.",
    "Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos.",
    "Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.",
    "Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.",
];

const commitmentItems = [
    "Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;",
    "Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;",
    "Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Trader Bruno de Paula Borges, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.",
];

export default function PoliticasDePrivacidadePage() {
    return (
        <main className="relative min-h-screen flex flex-col items-center overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/images/image_bg-links.jpg"
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/80" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[var(--green-bull)]/8 blur-[140px] rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20">

                {/* Header */}
                <div className="mb-14 text-center">
                    <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-[var(--green-bull)] mb-3">
                        Trader Bruno Borges
                    </p>
                    <h1 className="font-display font-black text-4xl uppercase tracking-tight text-white leading-none mb-6">
                        Políticas de Privacidade
                    </h1>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[var(--green-bull)] to-transparent mx-auto" />
                </div>

                <div className="flex flex-col gap-8">

                    {/* Intro */}
                    <div className="border border-[var(--white-10)] rounded-lg p-7 bg-black/30 backdrop-blur-sm flex flex-col gap-4">
                        {introParagraphs.map((p, i) => (
                            <p key={i} className="text-[var(--white-60)] text-sm leading-relaxed">
                                {p}
                            </p>
                        ))}
                    </div>

                    {/* Advertising & Cookies */}
                    <div className="border border-[var(--white-10)] rounded-lg p-7 bg-black/30 backdrop-blur-sm">
                        <h2 className="font-display font-bold text-base uppercase tracking-wider text-white mb-5">
                            Publicidade & Cookies
                        </h2>
                        <ul className="flex flex-col gap-3">
                            {adItems.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-[var(--white-60)] leading-relaxed">
                                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--green-bull)]/60 mt-[7px]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compromisso do Usuário */}
                    <div className="border border-[var(--white-10)] rounded-lg p-7 bg-black/30 backdrop-blur-sm">
                        <h2 className="font-display font-bold text-base uppercase tracking-wider text-white mb-4">
                            Compromisso do Usuário
                        </h2>
                        <p className="text-[var(--white-60)] text-sm leading-relaxed mb-5">
                            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Trader Bruno de Paula Borges oferece no site e com caráter enunciativo, mas não limitativo:
                        </p>
                        <ol className="flex flex-col gap-3">
                            {commitmentItems.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-[var(--white-60)] leading-relaxed">
                                    <span className="shrink-0 font-display font-bold text-[var(--green-bull)]/70 text-xs mt-[3px]">
                                        {String.fromCharCode(65 + i)}.
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Mais Informações */}
                    <div className="border border-[var(--white-10)] rounded-lg p-7 bg-black/30 backdrop-blur-sm">
                        <h2 className="font-display font-bold text-base uppercase tracking-wider text-white mb-4">
                            Mais Informações
                        </h2>
                        <p className="text-[var(--white-60)] text-sm leading-relaxed">
                            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                        </p>
                    </div>

                    {/* Effective date */}
                    <p className="text-center text-xs text-[var(--white-20)] font-display">
                        Esta política é efetiva a partir de <span className="text-[var(--white-40)]">9 de maio de 2025</span>
                    </p>
                </div>

                {/* Footer */}
                <p className="mt-16 text-center text-[10px] uppercase tracking-[0.25em] text-[var(--white-20)] font-display font-bold">
                    Excelência em Price Action
                </p>
            </div>
        </main>
    );
}
