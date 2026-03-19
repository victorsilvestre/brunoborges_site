# Component Library V2

## 1. Typography Hierarchy
- H1 Display: Montserrat 900, All-Caps. Para chamadas hero agressivas.
- H2 Display: Montserrat 800 Italic, All-Caps. Para subchamadas dinâmicas.
- Script Accent: Dancing Script 700. Citações com tom pessoal.
- Body text: Inter 400.

## 2. Colors & Variações
Adicionamos duas novas cores secundárias para quebrar a monotonia extrema (Verde/Vermelho):
- **Gold Premium (`#D4AF37`)**: Para representar riqueza, grupos de alta performance, serviços exclusivos (Vagas VIP, prêmios nobres, mentorias Elite).
- **Slate Tech (`#64748B`)**: Para fundos brandos de apoio tecnológico, criando blocos frios que dão alívio sem tirar a pegada moderna.

## 3. Buttons
- **Primary (Green/Red/Gold)**: Fundo preenchido, cores ativas com shadow/glow hover.
- **Outline Tinted**: Sem preenchimento (`background: transparent`), mas com borda e texto coloridos (ex: Outline Green, Outline Gold). Reduz o peso visual ao ler a página inteira, útil para CTAs secundários adjacentes a botões primary.

## 4. Cards & Containers
- **Feature Card Dark**: Fundo dark surface, com brilho sutil on hover.
- **Feature Card Light**: Fundo puro branco/claro (`light_surface`), texto `dark_pure`. Funciona muito bem em páginas de "Vendas Long Form" ou e-mails formais, onde um respiro visual branco quebra o dark mode após a rolagem.
- **Feature Card Outline (Ghost)**: Sem fundo de preenchimento (`transparent`), apenas a borda delimita o card (`1px border`). Muito valioso para manter a tela limpa minimalista, servindo pra itens contínuos numerados, etc.

## 5. Hero Views
Diferentes abordagens do layout principal da Landing Page:
1. **Hero Dark Centered**: Foco agressivo total, tudo escuro e tipografia gigante centralizada. (Já existia).
2. **Hero Light Focus**: Tema claro `#FFFFFF` com tipografia preta, onde o Gold/Verde grita em contraste isolado. Traz um ar de "investidor sóbrio/empresarial".
3. **Hero Split Image (Lateral)**: Padrão side by side: à esquerda Tipografia fortíssima, à direita Imagem cortada ou em clipping mask das telas/trader, unindo autoridade e conversão.
