/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { LiveStatus } from "./LiveStatus";
import { MEMBROS_URL, PLANOS, SESSAO, SUPORTE_EMAIL } from "./config";

const mudancas = [
  {
    antes: "Ansiedade antes de entrar",
    depois: "Calma e clareza na decisão",
  },
  {
    antes: "Esperando a confirmação de terceiros",
    depois: "Confiança na própria leitura",
  },
  {
    antes: "Entrando fora do setup por impulso",
    depois: "Paciência para esperar o momento certo",
  },
  {
    antes: "Saindo cedo por medo de devolver o lucro",
    depois: "Capacidade de ir até o alvo",
  },
  {
    antes: "Torcendo para o gráfico ir a seu favor",
    depois: "Antecipando o que o gráfico pode fazer",
  },
  {
    antes: "Um dia bom seguido de um dia de destruição",
    depois: "Consistência crescente, semana a semana",
  },
];

const faixas = [
  { rotulo: "Até R$ 500", pct: 60.8 },
  { rotulo: "R$ 500 a R$ 1.000", pct: 16 },
  { rotulo: "R$ 1.000 a R$ 2.500", pct: 6.4 },
  { rotulo: "Acima de R$ 2.500", pct: 4 },
  { rotulo: "Negativo", pct: 12.8, negativo: true },
];

const depoimentos = [
  {
    texto:
      "A sala é simplesmente ESPETACULAR, ela traz uma esperança enorme. Eu estou no mercado há 5 anos patinando, achava que não era mais pra mim, mas depois que iniciei a mentoria do Bruno e começamos a operar juntos na Sala, tudo clareou.",
    autor: "Nadson",
  },
  {
    texto:
      "No fundo eu era uma torcedora. Hoje sinto que estou crescendo e a cada dia mais confiante. Voltei a operar na conta real assim que a sala começou e estou consistente desde então.",
    autor: "Elienai",
  },
  {
    texto:
      "Já fiz 10 mentorias e participei de várias salas ao vivo. Nenhuma das anteriores entregou algo tão concreto, conciso e sem dubiedade.",
    autor: "Abraão",
  },
  {
    texto:
      "Mesmo tendo feito a mentoria, ainda tinha dificuldade por falta de confiança. Com a Sala Educacional, venho conseguindo realizar as operações na hora certa.",
    autor: "Elizandro",
  },
  {
    texto:
      "Me deu plena confiança de ir com uma operação até o alvo. A minha maior dificuldade era no comportamento: acreditar que vai até o alvo.",
    autor: "Mariluna",
  },
  {
    texto:
      "Minha assinatura já seria anual na sala, sem saber nem o valor. Já estou há mais de 1 ano no curso fazendo todos, e essa sala veio como mais uma bomba.",
    autor: "Felipe",
  },
  {
    texto:
      "A sala é de grande importância para nós alunos: o que aprendemos na mentoria é extremamente mostrado ao vivo, sem enganação.",
    autor: "Fagnner",
  },
  {
    texto:
      "Hoje consigo chegar na frente do gráfico e já enxergar o que pode ser feito. Era o que eu buscava: saber as possibilidades antes mesmo de acontecer.",
    autor: "Traderlinsvan",
  },
  {
    texto: "Com as orientações do Bruno, tudo fica mais calmo e tranquilo.",
    autor: "Oguimo",
  },
];

const paraVoce = [
  "Entende o Método TDS e quer parar de adivinhar para começar a executar.",
  "Quer aprender a ler o mercado ao vivo e tomar as próprias decisões, sem depender de terceiros.",
  "Consegue seguir o próprio plano de trade mesmo vendo outro aluno bater a meta antes.",
  "Sabe que consistência se constrói dia após dia e está disposto a encarar essa jornada.",
];

const naoParaVoce = [
  "Quer call ou sinal de entrada. Na sala, o Bruno mostra o raciocínio, não a entrada.",
  "Deseja ver as ordens do Bruno na tela para copiar na conta real.",
  "Perde o plano quando vê outro aluno no positivo.",
  "Espera resultado sem colocar em prática, nos estudos e nos backtests, o que já aprendeu.",
];

const inclusos = [
  "Sala ao vivo todo dia útil, das 8h45 às 10h15",
  "Análise de pré-abertura com o Método TDS",
  "Acompanhamento do pregão, com o raciocínio explicado",
  "Ambiente silencioso, e o Bruno responde as dúvidas em tempo real",
  "Acesso pela aula “Encontro Ao Vivo”, na área de membros",
  "Garantia de 7 dias e cancelamento quando quiser",
];

const passos = [
  {
    titulo: "Assine o plano.",
    texto: "Pagamento pela Hotmart. A liberação acontece após a aprovação.",
  },
  {
    titulo: "Entre na área de membros.",
    texto: "Use o mesmo e-mail da compra em alunos.traderbrunoborges.com.br.",
  },
  {
    titulo: "Abra a aula “Encontro Ao Vivo”.",
    texto: "É onde fica o link de acesso à sala.",
  },
  {
    titulo: "Clique e entre no Zoom.",
    texto: "Você será redirecionado direto para a sessão, às 8h45.",
  },
];

const faqs = [
  {
    q: "A sala é gravada ou só ao vivo?",
    a: "A Sala é ao vivo, e esse é exatamente o valor dela: o mercado acontecendo em tempo real, com o Bruno lendo o gráfico e explicando cada decisão enquanto ela acontece.",
  },
  {
    q: "Preciso ter feito a Mentoria para participar?",
    a: "Sim. A Sala Educacional é exclusiva para alunos da Mentoria Trader de Sucesso. Ela pressupõe que você já entende o Método: o objetivo não é ensinar do zero, e sim colocar em prática, ao vivo, o que você já sabe.",
  },
  {
    q: "Qual a diferença entre o plano mensal e o trimestral?",
    a: `O acesso é o mesmo. No trimestral você paga R$ ${PLANOS.trimestral.preco} a cada três meses, o equivalente a R$ ${PLANOS.trimestral.equivalenteMes} por mês, uma economia de R$ ${PLANOS.trimestral.economia} frente a três meses do plano mensal. O mensal custa R$ ${PLANOS.mensal.preco} e renova todo mês.`,
  },
  {
    q: "Como funciona o pagamento? É recorrente?",
    a: "Sim. Os dois planos são assinaturas recorrentes: o mensal renova todo mês e o trimestral, a cada três meses, sempre automaticamente. Você paga com cartão, Pix Automático, Apple Pay ou PayPal. O trimestral também pode ser parcelado no cartão, com acréscimo.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem burocracia. Você pode cancelar a assinatura quando quiser, nos dois planos.",
  },
  {
    q: "E se eu não puder assistir todo dia?",
    a: "A sala acontece todos os dias úteis, das 8h45 às 10h15. Você não precisa estar em todas as sessões, mas quanto mais constante a presença, mais rápida a evolução. A repetição é o que consolida a leitura.",
  },
  {
    q: "A sala dá calls ou mostra as ordens do Bruno?",
    a: "Não. O Bruno mostra o raciocínio, a leitura e as decisões, mas não compartilha ordens nem dá sinais de entrada. A proposta é você aprender a decidir, não copiar.",
  },
  {
    q: "A Sala substitui a Mentoria?",
    a: "É complementar. Na Mentoria você aprende o Método. Na Sala você aprende a executar o Método. São fases diferentes da mesma jornada.",
  },
  {
    q: "E se eu entrar e não gostar?",
    a: "Você tem 7 dias de garantia em qualquer um dos planos. Participe das sessões, veja o Bruno aplicar o Método ao vivo e, se sentir que não é para você, solicite o reembolso integral, sem questionamentos.",
  },
];

const seta = <ArrowRight aria-hidden="true" strokeWidth={2} />;

export default function SalaEducacionalPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="topbar">
        <div className="wrap topbar-in">
          <a className="topbar-logo" href="#inicio" aria-label="Trader Bruno Borges">
            <img
              src="/images/logo/logo-reduzida-horizontal-branca-fundo-escuro.svg"
              alt="Trader Bruno Borges"
              width="180"
              height="36"
            />
          </a>
          <LiveStatus variant="chip" />
          <a className="topbar-cta" href="#planos">
            Ver planos
          </a>
        </div>
      </header>

      <main id="conteudo">
        {/* 1. Hero */}
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <h1>
              Você aprendeu o método. Agora{" "}
              <mark>execute ao vivo</mark>.
            </h1>
            <p className="hero-lead">
              A Sala Educacional é o pregão ao vivo com o Bruno, todo dia útil,
              das {SESSAO.inicio} às {SESSAO.fim}. Você acompanha a leitura, o
              raciocínio e cada decisão com o mercado aberto.
            </p>
            <div className="hero-actions">
              <a className="cta" href="#planos">
                Escolher meu plano {seta}
              </a>
              <span className="hero-note">
                Exclusiva para alunos da Mentoria Trader de Sucesso
              </span>
            </div>
            <LiveStatus variant="panel" />
          </div>
          <figure className="hero-photo">
            <img
              src="/salaeducacional/bruno-hero.webp"
              alt="Bruno Borges sorrindo e apontando para você."
              width="900"
              height="1333"
              fetchPriority="high"
            />
          </figure>
        </section>

        {/* 2. Números */}
        <section className="section numbers" id="numeros">
          <div className="wrap">
            <h2>O que os alunos relatam depois de entrar na sala.</h2>
            <div className="proof">
              <p className="proof-lead">
                <span className="proof-n">99,4%</span>
                melhoraram a leitura de mercado, e 91,4% disseram que melhorou
                muito.
              </p>
              <div className="proof-prose">
                <p>
                  <strong>96,6%</strong> conseguiram aplicar o Método TDS ao
                  vivo, <strong>78,7%</strong> deles com tranquilidade.
                </p>
                <p>
                  A nota média de satisfação geral foi <strong>9,79</strong>, e{" "}
                  <strong>9,90</strong> para recomendar a um amigo.
                </p>
                <p>
                  E <strong>96,6%</strong> querem assinar mensalmente para
                  continuar na sala.
                </p>
              </div>
            </div>
            <p className="fine">
              Dados de pesquisa de satisfação feita com alunos que participaram
              da sala. Resultados individuais não garantem resultados futuros.
            </p>
          </div>
        </section>

        {/* 3. Dor */}
        <section className="section pain" id="dor">
          <div className="wrap pain-grid">
            <div className="pain-copy">
              <h2>
                Você não trava por falta de técnica.{" "}
                <em>Trava por falta de prática ao vivo.</em>
              </h2>
              <p>
                Você fez a Mentoria. Conhece o Método. Mas há algo que nenhuma
                aula gravada substitui: o mercado aberto, o relógio correndo e a
                decisão precisando ser tomada agora.
              </p>
              <ul className="thoughts">
                <li>“Entro agora ou espero alguém confirmar?”</li>
                <li>“Entrei fora do setup. De novo.”</li>
                <li>“Saí cedo e o gráfico foi até o alvo sem mim.”</li>
              </ul>
              <p className="pain-close">
                É exatamente aí que a Sala Educacional trabalha com você.
              </p>
            </div>
            <figure className="pain-photo">
              <img
                src="/salaeducacional/bruno-dor.webp"
                alt="Bruno Borges com a mão na testa, de cabeça baixa, em um gesto de frustração."
                width="900"
                height="1333"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* 4. Virada */}
        <section className="section turn" id="sala">
          <div className="wrap turn-grid">
            <div>
              <h2>
                A sala é o estágio que <em>faltava.</em>
              </h2>
              <p className="turn-lead">
                Na Mentoria você aprendeu a teoria. Na sala, você entra no
                pregão ao lado de quem aplica o Método todos os dias, com o
                mercado aberto.
              </p>
            </div>
            <ul className="facts">
              <li>
                <strong>Ao vivo, todo dia útil.</strong>
                Das {SESSAO.inicio} às {SESSAO.fim}, com a leitura de
                pré-abertura e o acompanhamento do pregão.
              </li>
              <li>
                <strong>Sem calls e sem ordens.</strong>
                O Bruno mostra o raciocínio, não a entrada. Você aprende a
                decidir, não a copiar.
              </li>
              <li>
                <strong>Todos mutados.</strong>
                Foco total no gráfico. As dúvidas são respondidas em tempo real.
              </li>
            </ul>
          </div>
          <div className="wrap">
            <blockquote className="pull">
              <p>
                A sala funciona como um estágio: o curso foi a formação, na sala
                temos a aplicação supervisionada.
              </p>
              <cite>Kelcardosojh, aluno</cite>
            </blockquote>
          </div>
        </section>

        {/* 5. Um dia na sala */}
        <section className="section day" id="rotina">
          <div className="wrap">
            <h2>Um dia na sala.</h2>
            <ol className="day-list">
              <li>
                <span className="day-time">{SESSAO.inicio}</span>
                <div>
                  <h3>Pré-abertura</h3>
                  <p>
                    O Bruno lê o gráfico e apresenta os cenários prováveis. Você
                    chega ao pregão com contexto, não com esperança.
                  </p>
                  <blockquote>
                    “O pré-mercado te dá clareza do que pode acontecer e ajuda a
                    tomar decisões mais rápidas.”
                    <cite>Ferreiracnilton</cite>
                  </blockquote>
                </div>
              </li>
              <li>
                <span className="day-time">Pregão</span>
                <div>
                  <h3>Análise ao vivo</h3>
                  <p>
                    Cada decisão explicada no gráfico, enquanto acontece. Você
                    acompanha, absorve e compara com o seu próprio plano.
                  </p>
                  <blockquote>
                    “O fato de ninguém poder falar é o principal, e o Bruno
                    responde as dúvidas em tempo real.”
                    <cite>Granderei</cite>
                  </blockquote>
                </div>
              </li>
              <li>
                <span className="day-time">{SESSAO.fim}</span>
                <div>
                  <h3>Encerramento</h3>
                  <p>
                    A sessão fecha com o dia lido do começo ao fim e o raciocínio
                    fresco para levar aos seus estudos e backtests.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* 6. Antes e depois */}
        <section className="section shift" id="mudanca">
          <div className="wrap">
            <h2>
              O que muda quando você para de estudar e{" "}
              <em>começa a executar.</em>
            </h2>
            <div className="shift-table" role="table" aria-label="Antes e depois da sala">
              <div className="shift-head" role="row">
                <span role="columnheader">Antes</span>
                <span role="columnheader">Depois</span>
              </div>
              {mudancas.map((m) => (
                <div className="shift-row" role="row" key={m.antes}>
                  <span role="cell" className="shift-before">
                    <span className="sr-only">Antes: </span>
                    {m.antes}
                  </span>
                  <span role="cell" className="shift-after">
                    <ArrowRight aria-hidden="true" strokeWidth={2} />
                    <span className="sr-only">Depois: </span>
                    {m.depois}
                  </span>
                </div>
              ))}
            </div>
            <div className="duo">
              <blockquote>
                “Agora eu não fico mais ansioso caçando uma entrada. Espero o
                gráfico fazer o que eu quero. Se não faz, eu não faço nada.”
                <cite>João</cite>
              </blockquote>
              <blockquote>
                “A sala está me ensinando o momento certo de parar de operar.
                Estou há 4 anos no mercado, não consistente, e finalmente estou
                evoluindo.”
                <cite>Reni</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* 7. Resultado financeiro */}
        <section className="section results" id="resultados">
          <div className="wrap results-grid">
            <div>
              <h2>
                O mercado recompensa quem <em>executa o próprio plano.</em>
              </h2>
              <p className="results-lead">
                <strong>87,2%</strong> dos alunos tiveram resultado positivo no
                período, e <strong>26,4%</strong> extraíram mais de R$ 500.
              </p>
              <p>
                Os 12,8% que ficaram no negativo relatam principalmente
                ansiedade e entradas fora do setup. São falhas de
                comportamento, e é nesse ponto que a sala trabalha: você vê, dia
                após dia, como o Bruno espera o setup antes de agir.
              </p>
              <blockquote className="results-quote">
                “Consegui reverter o negativo e passar a fechar os dias no
                positivo.”
                <cite>Italo</cite>
              </blockquote>
            </div>
            <div className="bars" aria-label="Resultado financeiro por faixa">
              <h3 className="bars-title">Resultado financeiro por faixa</h3>
              {faixas.map((f) => (
                <div
                  className={`bar${f.negativo ? " is-neg" : ""}`}
                  key={f.rotulo}
                >
                  <div className="bar-label">
                    <span>{f.rotulo}</span>
                    <strong>{String(f.pct).replace(".", ",")}%</strong>
                  </div>
                  <div className="bar-track">
                    <span style={{ width: `${f.pct}%` }} />
                  </div>
                </div>
              ))}
              <p className="fine">
                Resultados individuais não garantem resultados futuros. Trading
                envolve risco de perda.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Depoimentos */}
        <section className="section voices" id="depoimentos">
          <div className="wrap">
            <h2>
              Nas palavras de <em>quem está na sala.</em>
            </h2>
            <div className="voices-grid">
              {depoimentos.map((d) => (
                <figure key={d.autor}>
                  <blockquote>{d.texto}</blockquote>
                  <figcaption>{d.autor}, aluno</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Para quem é */}
        <section className="section fit" id="para-quem">
          <div className="wrap">
            <h2>
              A sala não é <em>para todo mundo.</em>
            </h2>
            <p className="fit-lead">
              Ela é exclusiva para alunos da Mentoria Trader de Sucesso e exige
              uma coisa que nenhum curso ensina sozinho: disciplina para seguir
              o seu próprio plano, não o dos outros.
            </p>
            <div className="fit-grid">
              <div className="fit-yes">
                <h3>É para você que:</h3>
                <ul>
                  {paraVoce.map((t) => (
                    <li key={t}>
                      <Check aria-hidden="true" strokeWidth={2.5} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="fit-no">
                <h3>Não é para você que:</h3>
                <ul>
                  {naoParaVoce.map((t) => (
                    <li key={t}>
                      <Minus aria-hidden="true" strokeWidth={2.5} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Bruno */}
        <section className="section author" id="bruno">
          <div className="wrap author-grid">
            <figure className="author-photo">
              <img
                src="/salaeducacional/bruno-bio.webp"
                alt="Bruno Borges sorrindo, de terno cinza."
                width="900"
                height="1333"
                loading="lazy"
              />
            </figure>
            <div>
              <h2>Quem conduz a sala.</h2>
              <p className="author-name">
                Bruno Borges, trader profissional e criador do Método Trader de
                Sucesso.
              </p>
              <p>
                Especialista em Price Action e leitura candle a candle, Bruno
                atua há <strong>mais de 7 anos</strong> no mercado financeiro,
                criou <strong>mais de 10 setups</strong> e já formou{" "}
                <strong>mais de 1,4 mil alunos</strong>.
              </p>
              <p>
                Na sala, ele não mostra um resultado pronto: mostra o processo.
                Você vê como ele lê o mercado, quando decide esperar e por que
                age quando age.
              </p>
            </div>
          </div>
        </section>

        {/* 11. Planos */}
        <section className="section plans" id="planos">
          <div className="wrap">
            <h2>
              Assinou, <em>entrou.</em>
            </h2>
            <p className="plans-lead">
              Escolha como entrar na sala. O acesso é liberado após a aprovação
              do pagamento, sem data de início e sem fila.
            </p>

            <div className="plans-grid">
              <article className="plan plan-month">
                <h3>{PLANOS.mensal.nome}</h3>
                <p className="plan-price">
                  <span className="plan-cur">R$</span>
                  {PLANOS.mensal.preco}
                </p>
                <p className="plan-per">{PLANOS.mensal.periodo}</p>
                <p className="plan-detail">
                  Renova todo mês. Cancele quando quiser.
                </p>
                <a className="cta" href={PLANOS.mensal.url}>
                  Assinar o plano mensal {seta}
                </a>
              </article>

              <article className="plan plan-quarter">
                <span className="plan-flag">Melhor preço</span>
                <h3>{PLANOS.trimestral.nome}</h3>
                <p className="plan-price">
                  <span className="plan-cur">R$</span>
                  {PLANOS.trimestral.preco}
                </p>
                <p className="plan-per">{PLANOS.trimestral.periodo}</p>
                <p className="plan-detail">
                  <strong>R$ {PLANOS.trimestral.equivalenteMes} por mês.</strong>{" "}
                  Você economiza R$ {PLANOS.trimestral.economia} frente a três
                  meses do plano mensal. Parcele em até{" "}
                  {PLANOS.trimestral.parcelas} no cartão, com acréscimo.
                </p>
                <a className="cta cta-ink" href={PLANOS.trimestral.url}>
                  Assinar o plano trimestral {seta}
                </a>
              </article>
            </div>

            <div className="plans-include">
              <h3>Os dois planos incluem:</h3>
              <ul>
                {inclusos.map((t) => (
                  <li key={t}>
                    <Check aria-hidden="true" strokeWidth={2.5} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="guarantee">
              <h3>Garantia incondicional de 7 dias.</h3>
              <p>
                Participe ao vivo, veja o Bruno aplicar o Método e sinta por
                conta própria o que a sala entrega. Se em 7 dias não sentir que
                valeu, 100% do valor é devolvido, sem perguntas e sem
                burocracia.
              </p>
            </div>
            <p className="fine plans-fine">
              Pagamento por cartão, Pix Automático, Apple Pay ou PayPal, em
              ambiente seguro da Hotmart.
            </p>
          </div>
        </section>

        {/* 12. Como entrar */}
        <section className="section steps" id="como-entrar">
          <div className="wrap">
            <h2>Da assinatura ao pregão, em quatro passos.</h2>
            <ol className="steps-list">
              {passos.map((p, i) => (
                <li key={p.titulo}>
                  <span className="step-n" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 13. FAQ */}
        <section className="section faq" id="duvidas">
          <div className="wrap faq-grid">
            <h2>Perguntas frequentes.</h2>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>
                    <span>{f.q}</span>
                    <Plus aria-hidden="true" strokeWidth={2} />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 14. Escolha + CTA final */}
        <section className="section finale" id="entrar">
          <div className="wrap finale-grid">
            <div>
              <h2>
                Mais um pregão sozinho, ou ao lado de{" "}
                <em>quem executa?</em>
              </h2>
              <p>
                A sala abre às {SESSAO.inicio} em cada dia útil. A diferença é
                onde você vai estar quando ela abrir.
              </p>
              <div className="finale-actions">
                <a className="cta cta-ink" href={PLANOS.trimestral.url}>
                  Quero o trimestral {seta}
                </a>
                <a className="cta cta-line" href={PLANOS.mensal.url}>
                  Prefiro o mensal {seta}
                </a>
              </div>
              <p className="finale-note">
                Garantia de 7 dias nos dois planos. Cancele quando quiser.
              </p>
            </div>
            <figure className="finale-photo">
              <img
                src="/salaeducacional/bruno-final.webp"
                alt="Bruno Borges comemorando com os dois braços erguidos."
                width="900"
                height="1333"
                loading="lazy"
              />
            </figure>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <img
              src="/images/logo/logo-reduzida-horizontal-branca-fundo-escuro.svg"
              alt="Trader Bruno Borges"
              width="180"
              height="36"
            />
            <div className="footer-links">
              <span>
                Dúvidas sobre compra e acesso?{" "}
                <a href={`mailto:${SUPORTE_EMAIL}`}>{SUPORTE_EMAIL}</a>
              </span>
              <span>
                Já assina?{" "}
                <a href={MEMBROS_URL} target="_blank" rel="noopener">
                  Acesse a área de membros ↗
                </a>
              </span>
            </div>
          </div>
          <p>
            Conteúdo educacional. Não constitui recomendação individual de
            investimento. Trading envolve risco de perda. Depoimentos e
            resultados não garantem resultados futuros. A sala não compartilha
            ordens nem emite recomendações de compra ou venda.
          </p>
          <div className="footer-legal">
            <Link href="/termos-de-uso">Termos de uso</Link>
            <Link href="/politicas-de-privacidade">Política de privacidade</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
