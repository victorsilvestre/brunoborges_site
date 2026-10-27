/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { MEMBROS_URL, SESSAO, SUPORTE_EMAIL } from "../config";

export const metadata: Metadata = {
  title: "Assinatura aprovada | Sala Educacional | Trader Bruno Borges",
  description:
    "Seu pagamento foi aprovado. Veja o passo a passo para entrar na área de membros e acessar a Sala Educacional ao vivo.",
  robots: { index: false, follow: false },
};

const seta = <ArrowRight aria-hidden="true" strokeWidth={2} />;

export default function SalaEducacionalObrigadoPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="topbar">
        <div className="wrap topbar-in">
          <Link
            className="topbar-logo"
            href="/salaeducacional"
            aria-label="Sala Educacional, Trader Bruno Borges"
          >
            <img
              src="/images/logo/logo-reduzida-horizontal-branca-fundo-escuro.svg"
              alt="Trader Bruno Borges"
              width="180"
              height="36"
            />
          </Link>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero ob-hero">
          <div className="hero-copy">
            <h1>
              Sua vaga na sala <em>já está liberada.</em>
            </h1>
            <p className="hero-lead">
              Siga o passo a passo abaixo para entrar na área de membros e abrir
              a sessão ao vivo. A sala acontece todo dia útil, das{" "}
              {SESSAO.inicio} às {SESSAO.fim}.
            </p>
            <div className="hero-actions">
              <a
                className="cta"
                href={MEMBROS_URL}
                target="_blank"
                rel="noopener"
              >
                Acessar a área de membros {seta}
              </a>
              <span className="hero-note">
                No login, use o mesmo e-mail utilizado na compra.
              </span>
            </div>
          </div>
          <div className="hero-photo ob-panel" aria-hidden="true">
            <span className="ob-seal">
              <Check strokeWidth={3} />
            </span>
          </div>
        </section>

        <section className="section ob-steps" id="passo-a-passo">
          <div className="wrap">
            <h2>Do pagamento ao pregão, em 6 passos.</h2>

            <ol className="ob-list">
              <li>
                <span className="step-n" aria-hidden="true">
                  1
                </span>
                <div className="ob-body">
                  <h3>Acesse a área de membros.</h3>
                  <p>
                    Entre em{" "}
                    <a href={MEMBROS_URL} target="_blank" rel="noopener">
                      <strong>alunos.traderbrunoborges.com.br</strong>
                    </a>
                    . É lá que fica o acesso à sala.
                  </p>
                </div>
              </li>

              <li>
                <span className="step-n" aria-hidden="true">
                  2
                </span>
                <div className="ob-body">
                  <h3>Clique em Entrar e faça login com o e-mail da compra.</h3>
                  <p>
                    No canto superior direito, clique em <strong>Entrar</strong>{" "}
                    e informe o <strong>mesmo e-mail utilizado na compra</strong>
                    .
                  </p>
                  <div className="ob-shots two">
                    <figure>
                      <img
                        src="/salaeducacional/obrigado-passo-1.webp"
                        alt="Página inicial da área de membros, com uma seta vermelha indicando o botão Entrar no canto superior direito."
                        width="1400"
                        height="485"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>Clique em “Entrar”.</figcaption>
                    </figure>
                    <figure>
                      <img
                        src="/salaeducacional/obrigado-passo-2.webp"
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

              <li>
                <span className="step-n" aria-hidden="true">
                  3
                </span>
                <div className="ob-body">
                  <h3>Confirme o código enviado ao seu e-mail.</h3>
                  <p>
                    Você receberá um código de 6 dígitos. Copie, cole na tela e
                    clique em <strong>Confirmar</strong>. Não chegou? Confira a
                    caixa de spam ou peça o reenvio.
                  </p>
                  <div className="ob-shots">
                    <figure>
                      <img
                        src="/salaeducacional/obrigado-passo-3.webp"
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

              <li>
                <span className="step-n" aria-hidden="true">
                  4
                </span>
                <div className="ob-body">
                  <h3>Localize a Sala Educacional em “Minhas compras”.</h3>
                  <p>
                    Dentro da área de membros, o produto{" "}
                    <strong>Sala Educacional</strong> aparece na sua lista de
                    compras. Clique nele para abrir.
                  </p>
                  <div className="ob-shots two ob-shots-4">
                    <figure>
                      <img
                        src="/salaeducacional/obrigado-passo-4.webp"
                        alt="Página Minhas compras da área de membros, com o produto Sala Educacional na lista."
                        width="1306"
                        height="367"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>Em “Minhas compras”, clique em Sala Educacional.</figcaption>
                    </figure>
                    <figure>
                      <img
                        src="/salaeducacional/obrigado-passo-5.webp"
                        alt="Lista Todos os conteúdos do produto, com o módulo Sala Educacional ao lado do módulo Comece Por Aqui."
                        width="663"
                        height="315"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>Abra o módulo “Sala Educacional”.</figcaption>
                    </figure>
                  </div>
                </div>
              </li>

              <li>
                <span className="step-n" aria-hidden="true">
                  5
                </span>
                <div className="ob-body">
                  <h3>Abra a aula “Encontro Ao Vivo”.</h3>
                  <p>
                    É nessa aula que fica o link de acesso à sala. Clique nele e
                    você será redirecionado direto para o <strong>Zoom</strong>.
                  </p>
                  <div className="ob-shots ob-shots-wide">
                  <figure>
                    <img
                      src="/salaeducacional/obrigado-passo-6.webp"
                      alt="Aula Encontro Ao Vivo aberta, com uma seta vermelha no link de acesso ao Zoom e um círculo vermelho na aula, na lista lateral."
                      width="1844"
                      height="590"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>Abra a aula e clique no link de acesso.</figcaption>
                  </figure>
                  </div>
                </div>
              </li>

              <li className="is-last">
                <span className="step-n" aria-hidden="true">
                  6
                </span>
                <div className="ob-body">
                  <h3>Entre na sessão e acompanhe ao vivo.</h3>
                  <p>
                    A sala abre às {SESSAO.inicio}. Entre alguns minutos antes
                    para ajustar o áudio. O ambiente é silencioso: todos ficam
                    mutados e o Bruno responde as dúvidas em tempo real.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section finale ob-final">
          <div className="wrap finale-grid">
            <div>
              <h2>
                Comece já. <em>Bons trades!</em>
              </h2>
              <p>
                O Método TDS ao vivo está a um clique de distância. Entre agora
                e acompanhe a próxima sessão.
              </p>
              <div className="finale-actions">
                <a
                  className="cta cta-ink"
                  href={MEMBROS_URL}
                  target="_blank"
                  rel="noopener"
                >
                  Ir para a área de membros {seta}
                </a>
              </div>
              <p className="finale-note">
                Algum problema com o acesso? Fale com a gente em{" "}
                <a href={`mailto:${SUPORTE_EMAIL}`}>{SUPORTE_EMAIL}</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <img
                src="/images/logo/logo-reduzida-horizontal-branca-fundo-escuro.svg"
                alt="Trader Bruno Borges"
                width="180"
                height="36"
              />
              <p>
                Conteúdo educacional. Não constitui recomendação individual de
                investimento. Trading envolve risco de perda. Depoimentos e
                resultados não garantem resultados futuros. A sala não compartilha
                ordens nem emite recomendações de compra ou venda.
              </p>
            </div>
            <div className="footer-links">
              <span>
                Dúvidas sobre compra e acesso?{" "}
                <a href={`mailto:${SUPORTE_EMAIL}`}>{SUPORTE_EMAIL}</a>
              </span>
              <div className="footer-legal">
                <Link href="/termos-de-uso">Termos de uso</Link>
                <Link href="/politicas-de-privacidade">
                  Política de privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
