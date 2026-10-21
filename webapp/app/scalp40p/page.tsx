/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { DemoVideo } from "./DemoVideo";
import { HOTMART_URL } from "./config";

export default function Scalp40PPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="wrap header">
        <a className="brand" href="#inicio">
          SCALP <em>40P</em>
          <small>KIT DE EXECUÇÃO</small>
        </a>
      </header>

      <div className="problem-band">
        Você quer sair positivo todos os dias no mercado, mas o medo de perder e
        a ansiedade atrapalham suas operações e seus resultados?
      </div>

      <main id="conteudo">
        <section className="section intro center" id="inicio">
          <svg
            className="channel-mark"
            viewBox="0 0 230 180"
            aria-hidden="true"
          >
            <path d="M0 160 230 35M0 135 230 10M0 180 230 55" />
            <rect x="160" y="48" width="45" height="27" />
          </svg>
          <div className="wrap">
            <h1>
              Utilize o Kit de Execução 40P para conseguir operar{" "}
              <strong>com mais calma e tranquilidade</strong> na frente do
              gráfico.
            </h1>
            <span className="simple-badge">
              Importe a tela operacional do Profit e comece a utilizar já!
            </span>
            <figure className="hero-result-comparison">
              <img
                src="/scalp40p/hero-comparativo-resultados.webp"
                fetchPriority="high"
                alt="Comparação de resultados: antes, resultado total negativo de menos R$ 491,00; depois, resultado total positivo de mais R$ 183,00, com as operações correspondentes visíveis."
                width="1600"
                height="900"
              />
              <figcaption>
                Resultados individuais não garantem resultados futuros.
              </figcaption>
            </figure>
            <div className="reading-rule" aria-hidden="true"></div>
          </div>
        </section>

        <section className="section center" id="provas">
          <div className="wrap">
            <h2>
              <strong>Veja resultados e relatos reais</strong> de quem aplica a
              Estratégia 40P.
            </h2>
            <p className="proof-intro">
              Registros de operações e mensagens compartilhadas por alunos.
            </p>
            <div className="proof-gallery">
              <figure>
                <a
                  href="/scalp40p/bloco2-1.webp"
                  target="_blank"
                  rel="noopener"
                  aria-label="Ampliar composição de feedbacks 1, 2 e 3"
                >
                  <img
                    src="/scalp40p/bloco2-1.webp"
                    loading="lazy"
                    alt="Três feedbacks de alunos em composição vertical com elementos visuais do Scalp 40P."
                    width="887"
                    height="1774"
                  />
                </a>
              </figure>
              <figure>
                <a
                  href="/scalp40p/bloco2-2.webp"
                  target="_blank"
                  rel="noopener"
                  aria-label="Ampliar composição de feedbacks 4, 5 e 6"
                >
                  <img
                    src="/scalp40p/bloco2-2.webp"
                    loading="lazy"
                    alt="Mais três feedbacks de alunos em composição vertical com elementos visuais do Scalp 40P."
                    width="887"
                    height="1774"
                  />
                </a>
              </figure>
              <figure>
                <a
                  href="/scalp40p/bloco2-3.webp"
                  target="_blank"
                  rel="noopener"
                  aria-label="Ampliar composição dos resultados 1, 2 e 3"
                >
                  <img
                    src="/scalp40p/bloco2-3.webp"
                    loading="lazy"
                    alt="Três composições de registros de resultados de operações, reunidas em uma imagem vertical."
                    width="887"
                    height="1774"
                  />
                </a>
              </figure>
            </div>
          </div>
        </section>

        <section className="section center" id="medo">
          <div className="wrap">
            <h2 className="pain-title">
              Eu sei como é... você estuda e tenta seguir um plano... mas quando
              está na operação, a sua <strong>ansiedade e nervosismo</strong>{" "}
              tomam conta, não é?
            </h2>
            <p className="pain-sub">
              Quando finalmente consegue parar e respirar... percebe que é mais
              um dia de loss. <br />
              Toda hora uma voz diferente na sua cabeça:
            </p>
            <div className="pain-composition">
              <div className="thought-overlay">
                <p>“Por que eu não entrei?”</p>
                <p>“Por que eu fiz isso de novo?”</p>
                <p>“Por que outras pessoas conseguem e eu não?”</p>
              </div>
              <figure className="pain-photo">
                <img
                  src="/scalp40p/imagem-dor-loss.webp"
                  loading="lazy"
                  decoding="async"
                  alt="Trader com expressão tensa, mão na testa, olhando para um gráfico de operações em queda sob luz vermelha."
                  width="1400"
                  height="1050"
                />
              </figure>
            </div>
            <p className="agitation">
              Você está cansado de terminar o pregão negativo por causa de uma
              decisão que tomou por impulso.
            </p>
            <p style={{ marginTop: "25px" }}>
              Você quer sair positivo. E quer conseguir acompanhar uma operação
              com mais calma, sabendo quais critérios precisa observar, e não
              sofrer em toda operação que entra.
            </p>
          </div>
        </section>

        <section className="section center question" id="pergunta">
          <div className="wrap">
            <div className="question-layout">
              <figure className="attention-slot">
                <img
                  src="/scalp40p/imagem-processo-entrada.webp"
                  loading="lazy"
                  decoding="async"
                  alt="Gráfico de candles organizado com um ponto de entrada circulado e um checklist marcado ao lado."
                  width="1000"
                  height="1000"
                />
              </figure>
              <div>
                <h2>E se você tivesse um processo validado ao seu lado?</h2>
                <p className="big-question">
                  E se você pudesse fazer isso de um jeito simples? Com um
                  processo passo a passo para aplicar uma estratégia, assistir
                  os vídeos de explicação e ter a sua disposição um material
                  completo para análise, entrada, gestão e revisão das
                  operações.
                </p>
                <p className="big-question">
                  Você utilizaria uma estratégia validada que dá tranquilidade e
                  calma na frente do gráfico?
                </p>
                <p className="yes">
                  Se isso parece interessante, o Kit de Execução Scalp 40P pode
                  te ajudar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section center" id="beneficios">
          <div className="wrap">
            <h2>Com o Kit de Execução Scalp 40P, você poderá:</h2>
            <div className="benefit-grid">
              <article>
                <figure className="benefit-art">
                  <img
                    src="/scalp40p/beneficio-01-estrategia.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Mão apontando três regiões de análise marcadas em verde-lima em um gráfico de candles."
                    width="1400"
                    height="876"
                  />
                </figure>
                <h3>Conhecer a Estratégia Scalp 40P</h3>
              </article>
              <article>
                <figure className="benefit-art">
                  <img
                    src="/scalp40p/beneficio-02-aplicacao.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Pessoa assistindo a uma aula de trading com o gráfico explicado na tela do notebook."
                    width="1400"
                    height="876"
                  />
                </figure>
                <h3>Assistir ela sendo aplicada na prática.</h3>
              </article>
              <article>
                <figure className="benefit-art">
                  <img
                    src="/scalp40p/beneficio-03-profit.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Trader organizando uma plataforma de trading em várias janelas no monitor."
                    width="1400"
                    height="876"
                  />
                </figure>
                <h3>Importar a tela operacional pronta para você utilizar.</h3>
              </article>
              <article>
                <figure className="benefit-art">
                  <img
                    src="/scalp40p/beneficio-04-materiais-v3.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Trader consultando o Guia de Execução 40P aberto, com o Checklist e o Mapa de Decisão à vista sobre a mesa."
                    width="1400"
                    height="933"
                  />
                </figure>
                <h3>
                  Consultar os materiais antes, durante e depois das operações.
                </h3>
              </article>
              <article>
                <figure className="benefit-art">
                  <img
                    src="/scalp40p/beneficio-05-simulador.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Trader praticando diante de um gráfico em uma sessão de simulação."
                    width="1400"
                    height="876"
                  />
                </figure>
                <h3>Praticar e evoluir o seu operacional sem medo.</h3>
              </article>
              <article>
                <figure className="benefit-art">
                  <img
                    src="/scalp40p/beneficio-06-diario.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Trader preenchendo um diário de operações e revisando o gráfico ao final da sessão."
                    width="1400"
                    height="876"
                  />
                </figure>
                <h3>Registrar e revisar suas operações.</h3>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="kit">
          <div className="wrap">
            <h2 className="center content-title">
              Conheça o que vem no seu
              <br />
              Kit de Execução 40P.
            </h2>
            <div className="tool-row ">
              <div>
                <figure
                  className="image-plan wide kit-mockup"
                  data-art="ENT-01"
                >
                  <img
                    src="/scalp40p/kit-guia-mockup.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Mockup do Guia de Execução 40P aberto sobre uma mesa, com identidade visual Scalp 40P."
                    width="1400"
                    height="1050"
                  />
                </figure>
              </div>
              <div className="tool-copy">
                <h3>Estratégia 40P + Guia de Execução</h3>
                <p>
                  Conheça a lógica da estratégia e consulte a qualquer momento
                  todas as etapas dela. Aprofunde o seu conhecimento se quiser,
                  o guia é completo e possui todas as informações que você
                  precisa.
                </p>
              </div>
            </div>
            <div className="tool-row reverse">
              <div>
                <figure
                  className="image-plan wide kit-mockup"
                  data-art="ENT-02"
                >
                  <img
                    src="/scalp40p/kit-profit-mockup.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Mockup de monitor exibindo uma tela operacional de trading organizada com marcações em verde-lima."
                    width="1400"
                    height="1050"
                  />
                </figure>
              </div>
              <div className="tool-copy">
                <h3>Tela operacional pronta para o Profit</h3>
                <p>
                  Receba o arquivo da tela operacional do Profit para importar
                  no seu Profit e começar a utilizar imediatamente. Você também
                  poderá copiar a estratégia para outras ferramentas se desejar.
                </p>
              </div>
            </div>
            <div className="tool-row ">
              <div>
                <figure
                  className="image-plan wide kit-mockup"
                  data-art="ENT-03"
                >
                  <img
                    src="/scalp40p/kit-mapa-mockup.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Mockup impresso do Mapa de Decisão 40P sobre uma mesa."
                    width="1400"
                    height="1050"
                  />
                </figure>
              </div>
              <div className="tool-copy">
                <h3>Mapa de Decisão 40P</h3>
                <p>
                  Consulte o fluxo resumido em uma página e relembre as
                  perguntas que orientam cada etapa da estratégia. Não fique
                  perdido no meio dos candles, saiba o que fazer e quando fazer.
                </p>
              </div>
            </div>
            <div className="tool-row reverse">
              <div>
                <figure
                  className="image-plan wide kit-mockup"
                  data-art="ENT-04"
                >
                  <img
                    src="/scalp40p/kit-checklist-mockup.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Mockup impresso do Checklist 40P com itens e ilustração de candles."
                    width="1400"
                    height="1050"
                  />
                </figure>
              </div>
              <div className="tool-copy">
                <h3>Checklist 40P</h3>
                <p>
                  É como se fosse um parceiro de trading ao seu lado, dizendo
                  exatamente o que precisa acontecer e o que fazer em cada caso,
                  com boxes para marcar e seguir na aplicação da estratégia.
                </p>
              </div>
            </div>
            <div className="tool-row ">
              <div>
                <figure
                  className="image-plan wide kit-mockup"
                  data-art="ENT-05"
                >
                  <img
                    src="/scalp40p/beneficio-06-diario-v3.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Trader revisando o painel do Diário de Execução 40P em um tablet vertical e usando uma caneta digital."
                    width="1400"
                    height="933"
                  />
                </figure>
              </div>
              <div className="tool-copy">
                <h3>Diário de Execução 40P</h3>
                <p>
                  Tenha um lugar pronto para receber suas operações e que faça a
                  análise e consolidação dos dados de forma automática para sua
                  evolução.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="bonus">
          <div className="wrap">
            <div className="center">
              <h2>
                Você também recebe vários vídeos como bônus.
              </h2>
            </div>
            <div className="lesson-pair">
              <article>
                <h3>A base para entender o raciocínio.</h3>
                <p>
                  Se você quiser aprofundar ainda mais a sua leitura e
                  conhecimento da estratégia, você vai receber um módulo bônus
                  com vídeos sobre a base operacional do Método Trader de
                  Sucesso. Assista e aplique na prática: obrigação dos candles,
                  teoria de dow, fibonacci, e mais.
                </p>
              </article>
              <article>
                <h3>A Estratégia 40P no gráfico.</h3>
                <p>
                  Para facilitar o seu entendimento e aplicação da estratégia,
                  você vai receber outro módulo bônus com vídeos de marcações e
                  utilização da Scalp 40P direto no gráfico pelo Bruno. Dizendo,
                  exatamente, porque ele entrou e porque ele saiu de cada
                  operação.
                </p>
              </article>
            </div>
            <figure className="bonus-visual bonus-visual-single">
              <img
                src="/scalp40p/bonus-aplicacao-mockup.webp"
                loading="lazy"
                decoding="async"
                alt="Mockup de notebook exibindo uma aula da Estratégia Scalp 40P na área de membros, com o Guia de Execução apoiado na diagonal sobre o teclado."
                width="1400"
                height="1050"
              />
            </figure>
            <div className="bonus">
              Bônus: dois módulos completos com vídeos de aprofundamento da base
              operacional e utilização prática do Kit de Execução 40P direto no gráfico.
            </div>
            <p className="micro">
              Utilize o Kit de Execução imediatamente e aprofunde seu
              conhecimento quando quiser.
            </p>
          </div>
        </section>

        <section className="section center" id="demonstracao">
          <div className="wrap">
            <h2>
              Acompanhe Bruno aplicando o Kit de Execução Scalp 40P.
            </h2>
            <p style={{ marginTop: "25px" }}>
              Veja o contexto, as marcações e o raciocínio por trás da
              utilização real nas operações.
            </p>
            <DemoVideo videoId="0GCdqrazHfw" />
          </div>
        </section>

        <section className="section center" id="publico">
          <div className="wrap">
            <h2>
              O Kit de Execução Scalp 40P
              foi organizado para você que:
            </h2>
            <div className="audience-layout">
              <div>
                <figure className="audience-image">
                  <img
                    src="/scalp40p/imagem-publico-trader-estudando.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Trader estudando um gráfico em casa, com atenção e curiosidade, diante do monitor."
                    width="1200"
                    height="900"
                  />
                </figure>
              </div>
              <ul className="audience-list">
                <li>
                  Está começando e quer utilizar uma estratégia validada com
                  etapas bem definidas.
                </li>
                <li>Já opera, mas ainda tem dúvidas na frente do gráfico.</li>
                <li>
                  Quer entender o raciocínio por trás das entradas e saídas.
                </li>
                <li>
                  Busca mais organização para consultar, registrar e revisar
                  suas operações.
                </li>
                <li>Quer evoluir o seu operacional no mercado financeiro.</li>
              </ul>
            </div>
            <p className="transition-line">
              Se você quer conhecer a Estratégia 40P e praticar com as
              ferramentas do Kit de Execução ao seu lado, veja tudo o que está
              incluído na compra do Kit.
            </p>
          </div>
        </section>

        <section className="section center" id="recap">
          <div className="wrap">
            <h2>Comprando o Kit de Execução você recebe:</h2>
            <ul className="offer-list recap">
              <li>Guia de Execução 40P</li>
              <li>Tela operacional pronta para importar no Profit</li>
              <li>Mapa de Decisão 40P</li>
              <li>Checklist 40P</li>
              <li>Diário de Execução 40P</li>
              <li>Vídeos bônus de explicação e utilização do Kit</li>
            </ul>
            <p style={{ margin: "28px auto 0" }}>
              Tudo isso em uma área de membros organizada com o Kit completo e
              os conteúdos adicionais.
            </p>
          </div>
        </section>

        <section className="section center" id="oferta">
          <div className="wrap">
            <h2>
              Leve o Kit de Execução completo e comece a aplicar uma estratégia
              validada por mais de 1.400 alunos.
            </h2>
            <p className="offer-intro">
              Compre e comece a utilizar hoje mesmo!
            </p>
            <div className="offer-box">
              <img
                loading="lazy"
                decoding="async"
                width="1672"
                height="941"
                className="product-image"
                src="/scalp40p/scalp40p-kit.webp"
                alt="Scalp 40P Kit de Execução: Checklist, Mapa de Decisão e Diário"
              />
              <p className="installment">
                <strong>12x de R$ 6,93</strong>
              </p>
              <div className="price">
                R$ 67<small>,00 à vista</small>
              </div>
              <a className="cta buy" href={HOTMART_URL}>
                QUERO MEU KIT DE EXECUÇÃO 40P{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M4 12h15M13 5l7 7-7 7" />
                </svg>
              </a>
              <span className="micro">
                Compra pela Hotmart · Acesso vitalício
                <br />
                Liberação após aprovação do pagamento. 7 dias de garantia para
                avaliar o conteúdo.
              </span>
            </div>
          </div>
        </section>

        <section className="section center access" id="acesso">
          <div className="wrap">
            <h2>Da compra à utilização, o caminho é simples.</h2>
            <p className="process-intro">
              Três passos simplificados para mudar seus resultados.
            </p>
            <div className="process">
              <article>
                <figure className="access-art">
                  <img
                    src="/scalp40p/acesso-compra-ilustracao.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Pessoa feliz após concluir uma compra pelo celular, com um símbolo de confirmação na tela."
                    width="800"
                    height="800"
                  />
                </figure>
                <h3>Faça sua compra.</h3>
                <p>
                  Conclua o pagamento pela Hotmart e siga as instruções de
                  acesso após a aprovação.
                </p>
              </article>
              <article>
                <figure className="access-art">
                  <img
                    src="/scalp40p/acesso-download-ilustracao.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Pessoa descobrindo os materiais de estudo no computador, com guia, checklist e símbolo de download."
                    width="800"
                    height="800"
                  />
                </figure>
                <h3>Baixe o Kit completo.</h3>
                <p>
                  Entre na área de membros, baixe os materiais e importe a tela
                  no Profit.
                </p>
              </article>
              <article>
                <figure className="access-art">
                  <img
                    src="/scalp40p/acesso-pratica-ilustracao.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Trader praticando diante de um gráfico e consultando um checklist, com postura confiante e tranquila."
                    width="800"
                    height="800"
                  />
                </figure>
                <h3>Comece a aplicar.</h3>
                <p>
                  Comece pelo Guia de Execução 40P, consulte o Mapa e o Checklist sempre que quiser.
                  Aprofunde seu conhecimento nos vídeos.
                </p>
              </article>
            </div>
            <p className="caption">
              Acesse à área de membros pela Hotmart ou direto pelo link{" "}
              <a
                href="https://alunos.traderbrunoborges.com.br"
                target="_blank"
                rel="noopener"
              >
                alunos.traderbrunoborges.com.br
              </a>
              .
            </p>
          </div>
        </section>

        <section className="section" id="bruno">
          <div className="wrap">
            <div className="author">
              <figure className="portrait-photo">
                <img
                  src="/scalp40p/bruno-pose-apontando-ambiente.webp"
                  loading="lazy"
                  decoding="async"
                  alt="Bruno Borges sorrindo e apontando para o leitor em um cenário de trading."
                  width="900"
                  height="1599"
                />
              </figure>
              <div>
                <h2>Bruno Borges.</h2>
                <h3 style={{ margin: "18px 0 25px" }}>
                  Trader profissional e criador da Estratégia Scalp 40P.
                </h3>
                <p>
                  Especialista em{" "}
                  <strong>Price Action e leitura candle a candle</strong>, Bruno
                  atua há <strong>mais de 7 anos</strong> no mercado financeiro,
                  criou <strong>mais de 10 setups</strong> e já formou{" "}
                  <strong>mais de 1,4 mil alunos</strong>.
                </p>
                <p>
                  A <strong>Estratégia Scalp 40P</strong> foi organizada para
                  tornar o aprendizado mais direto e ajudar os alunos a
                  evoluírem com mais rapidez. No{" "}
                  <strong>Kit de Execução</strong>, o passo a passo, os
                  materiais de consulta e os vídeos de aplicação aproximam o
                  estudo da prática para você compreender cada etapa, treinar
                  com mais direção e revisar suas decisões no seu ritmo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section center" id="escolha">
          <div className="wrap">
            <h2>O que você vai fazer agora? Só vejo duas opções...</h2>
            <div className="options">
              <article className="option">
                <div className="choice-icon">
                  <b aria-hidden="true">
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="24" cy="24" r="21" />
                      <path d="m17 17 14 14m0-14L17 31" />
                    </svg>
                  </b>
                </div>
                <h3>
                  Opção 1: Continuar patinando e perdendo dinheiro no mercado.
                </h3>
                <p>
                  Acumular conhecimento sem saber colocar na prática, e sem os
                  materiais necessários para consultar, corrigir e evoluir seu
                  operacional.
                </p>
              </article>
              <article className="option">
                <div className="choice-icon">
                  <b aria-hidden="true">
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="24" cy="24" r="21" />
                      <path d="m14 24 7 7 14-16" />
                    </svg>
                  </b>
                </div>
                <h3>Opção 2: Conhecer o Kit de Execução 40P</h3>
                <p>
                  Investir apenas R$ 67,00 para acessar a estratégia, os
                  materiais e as vídeos, e começar a praticar hoje mesmo com as
                  etapas ao seu lado.
                </p>
              </article>
            </div>
            <p className="close-line">
              Se você quer evoluir seu operacional, o Kit de Execução completo
              está aqui.
            </p>
          </div>
        </section>

        <section className="section center" id="oferta-final">
          <div className="wrap">
            <h2>
              Acesse agora mesmo o seu
              <br />
              Kit de Execução Scalp 40P
            </h2>
            <div className="offer-box">
              <img
                loading="lazy"
                decoding="async"
                width="1672"
                height="941"
                className="product-image"
                src="/scalp40p/scalp40p-kit.webp"
                alt="Scalp 40P Kit de Execução: Checklist, Mapa de Decisão e Diário"
              />
              <p className="installment">
                <strong>12x de R$ 6,93</strong>
              </p>
              <div className="price">
                R$ 67<small>,00 à vista</small>
              </div>
              <span className="micro">Total parcelado: R$ 83,16</span>
              <a className="cta buy" href={HOTMART_URL}>
                QUERO MEU KIT DE EXECUÇÃO 40P{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M4 12h15M13 5l7 7-7 7" />
                </svg>
              </a>
              <span className="micro">
                Compra pela Hotmart · Acesso vitalício · 7 dias de garantia
                <br />
                Liberação após aprovação do pagamento
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap footer">
        <div className="footer-top">
          <div className="brand">
            SCALP 40P<small>KIT DE EXECUÇÃO · BRUNO BORGES</small>
          </div>
          <div>
            Dúvidas sobre compra e acesso?
            <br />
            <a href="mailto:suporte@traderbrunoborges.com.br">
              suporte@traderbrunoborges.com.br
            </a>
            <br />
            Já comprou?{" "}
            <a
              href="https://alunos.traderbrunoborges.com.br"
              target="_blank"
              rel="noopener"
            >
              Acesse a área de membros ↗
            </a>
          </div>
        </div>
        <p>
          Conteúdo educacional. Não constitui recomendação individual de
          investimento. Trading envolve risco de perda. Exemplos e depoimentos
          não garantem resultados futuros. A prática no simulador não garante o
          mesmo desempenho em conta real.
        </p>
        <div className="footer-links">
          <Link href="/termos-de-uso">Termos de uso</Link>
          <Link href="/politicas-de-privacidade">Política de privacidade</Link>
        </div>
      </footer>
    </>
  );
}
