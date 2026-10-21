/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

const MEMBROS_URL = "https://alunos.traderbrunoborges.com.br";

export const metadata: Metadata = {
  title: "Compra aprovada — Scalp 40P Kit de Execução | Bruno Borges",
  description:
    "Seu pagamento foi aprovado. Veja o passo a passo para acessar o Kit de Execução 40P.",
  robots: { index: false, follow: false },
};

const arrow = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <path d="M4 12h15M13 5l7 7-7 7" />
  </svg>
);

export default function Scalp40PObrigadoPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="wrap header">
        <Link className="brand" href="/scalp40p">
          SCALP <em>40P</em>
          <small>KIT DE EXECUÇÃO</small>
        </Link>
      </header>

      <main id="conteudo">
        <section className="section intro center ob-hero">
          <svg className="channel-mark" viewBox="0 0 230 180" aria-hidden="true">
            <path d="M0 160 230 35M0 135 230 10M0 180 230 55" />
            <rect x="160" y="48" width="45" height="27" />
          </svg>
          <div className="wrap">
            <div className="ob-seal" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
            </div>
            <span className="simple-badge">Pagamento aprovado</span>
            <h1>
              Seu Kit de Execução 40P <strong>já está liberado.</strong>
            </h1>
            <p className="lead">
              Siga o passo a passo abaixo para entrar na área de membros, baixar
              os materiais e começar a aplicar a estratégia na prática.
            </p>
            <a className="cta" href={MEMBROS_URL} target="_blank" rel="noopener">
              ACESSAR A ÁREA DE MEMBROS {arrow}
            </a>
            <span className="micro">
              No login, use o mesmo e-mail utilizado na compra.
            </span>
          </div>
        </section>

        <section className="section ob-steps" id="passo-a-passo">
          <div className="wrap">
            <h2>Do pagamento à prática, em 6 passos.</h2>
            <p className="ob-sub center">É rápido: leva menos de 5 minutos.</p>

            <ol className="ob-list">
              <li className="ob-step">
                <span className="ob-num" aria-hidden="true">
                  1
                </span>
                <div className="ob-body">
                  <h3>Acesse a área de membros.</h3>
                  <p>
                    Entre em{" "}
                    <a href={MEMBROS_URL} target="_blank" rel="noopener">
                      <strong>alunos.traderbrunoborges.com.br</strong>
                    </a>
                    . É lá que fica todo o seu Kit de Execução.
                  </p>
                  <a
                    className="cta"
                    href={MEMBROS_URL}
                    target="_blank"
                    rel="noopener"
                  >
                    ABRIR ÁREA DE MEMBROS {arrow}
                  </a>
                </div>
              </li>

              <li className="ob-step">
                <span className="ob-num" aria-hidden="true">
                  2
                </span>
                <div className="ob-body">
                  <h3>Clique em Entrar e faça login com o e-mail da compra.</h3>
                  <p>
                    No canto superior direito, clique em <strong>Entrar</strong>{" "}
                    e informe o <strong>mesmo e-mail utilizado na compra</strong>.
                  </p>
                  <div className="ob-shots two">
                    <figure className="ob-shot">
                      <img
                        src="/scalp40p/obrigado-passo-1.webp"
                        alt="Página inicial da área de membros, com uma seta vermelha indicando o botão Entrar no canto superior direito."
                        width="1400"
                        height="485"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>Clique em “Entrar”.</figcaption>
                    </figure>
                    <figure className="ob-shot">
                      <img
                        src="/scalp40p/obrigado-passo-2.webp"
                        alt="Tela de login da área de membros, com uma seta vermelha indicando o campo de e-mail."
                        width="1400"
                        height="688"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>
                        Informe o e-mail da compra e clique em “Entrar”.
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </li>

              <li className="ob-step">
                <span className="ob-num" aria-hidden="true">
                  3
                </span>
                <div className="ob-body">
                  <h3>Confirme o código enviado ao seu e-mail.</h3>
                  <p>
                    Você receberá um código de 6 dígitos. Copie, cole na tela e
                    clique em <strong>Confirmar</strong> para entrar. Não chegou?
                    Confira a caixa de spam ou peça o reenvio.
                  </p>
                  <div className="ob-shots">
                    <figure className="ob-shot">
                      <img
                        src="/scalp40p/obrigado-passo-3.webp"
                        alt="Tela de confirmação com os seis campos do código de acesso e o botão Confirmar."
                        width="1400"
                        height="687"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>Digite o código recebido e confirme.</figcaption>
                    </figure>
                  </div>
                </div>
              </li>

              <li className="ob-step">
                <span className="ob-num" aria-hidden="true">
                  4
                </span>
                <div className="ob-body">
                  <h3>Localize o Kit de Execução em “Minhas compras”.</h3>
                  <p>
                    Dentro da área de membros, o produto{" "}
                    <strong>Scalp 40P — Kit de Execução</strong> aparece na sua
                    lista de compras.
                  </p>
                  <div className="ob-shots">
                    <figure className="ob-shot">
                      <img
                        src="/scalp40p/obrigado-passo-4.webp"
                        alt="Lista Minhas compras da área de membros, com uma seta vermelha indicando o card Scalp 40P — Kit de Execução."
                        width="1400"
                        height="352"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>
                        Procure o card “Scalp 40P — Kit de Execução”.
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </li>

              <li className="ob-step">
                <span className="ob-num" aria-hidden="true">
                  5
                </span>
                <div className="ob-body">
                  <h3>Acesse o material completo.</h3>
                  <p>
                    Clique no Kit para abrir tudo o que está incluído: Guia de
                    Execução, tela operacional para importar no Profit, Mapa de
                    Decisão, Checklist, Diário de Execução e os vídeos bônus.
                  </p>
                </div>
              </li>

              <li className="ob-step is-last">
                <span className="ob-num" aria-hidden="true">
                  6
                </span>
                <div className="ob-body">
                  <h3>Pratique!</h3>
                  <p>
                    Comece pelo Guia e pelas aulas. Consulte o Mapa e o Checklist
                    no simulador e registre sua prática no Diário.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="ob-final">
          <div className="wrap">
            <div className="ob-final-box center">
              <h2>
                Comece já. <em>Bons trades!</em>
              </h2>
              <p>
                O Kit de Execução 40P está pronto para ficar ao seu lado na
                frente do gráfico. Entre agora e comece.
              </p>
              <a className="cta" href={MEMBROS_URL} target="_blank" rel="noopener">
                ACESSAR O MEU KIT {arrow}
              </a>
              <span className="micro">
                Algum problema com o acesso? Fale com a gente em{" "}
                <a href="mailto:suporte@traderbrunoborges.com.br">
                  suporte@traderbrunoborges.com.br
                </a>
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
