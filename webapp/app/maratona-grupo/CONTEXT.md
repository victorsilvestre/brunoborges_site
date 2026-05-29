# CONTEXT — Página de Transição para o Grupo do Telegram
## Projeto: Maratona TDS | Trader Bruno Borges

---

## 1. Objetivo

Criar uma **página de transição** (`/maratona-grupo`) que sirva de ponte entre a Landing Page da Maratona TDS e o grupo exclusivo no Telegram.

O problema atual é que o botão CTA da LP redireciona diretamente para o link do Telegram (`t.me/+eyQwbBFDUXBkMGIx`), e os usuários estão abandonando na tela intermediária do próprio Telegram — sem nunca clicar em "Join Group".

---

## 2. Contexto do Funil Atual

```
Anúncio
   ↓
Landing Page (www.traderbrunoborges.com.br/maratona)
   ↓
[Clique no CTA "Entrar no Grupo Exclusivo"]
   ↓
Página intermediária do Telegram ← ABANDONO ACONTECE AQUI
   ↓
Botão "Join Group" (usuário não chega aqui)
```

**Dados observados:**
- 58 cliques no CTA da LP em um dia
- 0 cliques no botão "Join Group" do Telegram
- Taxa de conversão da LP: ~19% (está boa)
- O problema está exclusivamente na transição LP → Telegram

---

## 3. Solução: Página de Transição

Inserir uma página intermediária **nossa** (com controle total do design e UX) entre o clique no CTA e o redirecionamento para o Telegram.

```
Anúncio
   ↓
Landing Page
   ↓
[Clique no CTA]
   ↓
Página de Transição ← NOVA PÁGINA A CRIAR
   ↓
Grupo do Telegram (entrada direta via app ou t.me)
```

---

## 4. Lógica de Redirecionamento

A página deve tentar abrir o app do Telegram diretamente usando um **deep link**, e tratar os casos em que o app não está instalado.

### Links utilizados

| Link | Comportamento |
|---|---|
| `tg://join?invite=eyQwbBFDUXBkMGIx` | Abre direto no app do Telegram (se instalado) |
| `https://t.me/+eyQwbBFDUXBkMGIx` | Abre a página intermediária do Telegram no navegador |

### Fluxo completo

```
Usuário acessa a página de transição
              ↓
    Página tenta abrir tg:// automaticamente
              ↓
         Tem o app?
        ↙          ↘
      Sim           Não
       ↓             ↓
   Entra         Detecta dispositivo
   direto         ↙    ↓      ↘
                iOS  Android  Desktop
                 ↓      ↓        ↓
             App Store Play  Redireciona
                         Store  para t.me
                 ↓      ↓        ↓
              Baixa app       Entra pelo
              e volta         Telegram Web
                    ↓
              Entra no grupo
```

### Comportamento por dispositivo

| Dispositivo | Com app instalado | Sem app instalado |
|---|---|---|
| **iOS** | `tg://` abre direto no app | Redireciona para App Store |
| **Android** | `tg://` abre direto no app | Redireciona para Google Play |
| **Desktop** | `tg://` abre no Telegram Desktop | Redireciona para `t.me` (Telegram Web) |

### Como detectar o dispositivo

Usar o `navigator.userAgent` do navegador:

```javascript
const ua = navigator.userAgent;
const isIOS = /iPhone|iPad|iPod/i.test(ua);
const isAndroid = /Android/i.test(ua);
const isDesktop = !isIOS && !isAndroid;
```

### Links de download por plataforma

```
iOS (App Store):
https://apps.apple.com/app/telegram-messenger/id686449807

Android (Google Play):
https://play.google.com/store/apps/details?id=org.telegram.messenger

Desktop (fallback):
https://t.me/+eyQwbBFDUXBkMGIx
```

---

## 5. Implementação da Lógica de Deep Link

A página deve, ao carregar:

1. Tentar redirecionar para `tg://join?invite=eyQwbBFDUXBkMGIx`
2. Aguardar ~2 segundos
3. Se o app não abrir (usuário ainda está na página), mostrar o fallback correto para o dispositivo detectado

```javascript
// Lógica sugerida
window.onload = function () {
  const deepLink = "tg://join?invite=eyQwbBFDUXBkMGIx";
  const telegramWeb = "https://t.me/+eyQwbBFDUXBkMGIx";
  const appStore = "https://apps.apple.com/app/telegram-messenger/id686449807";
  const playStore = "https://play.google.com/store/apps/details?id=org.telegram.messenger";

  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  // Tenta abrir o app
  window.location.href = deepLink;

  // Fallback após 2.5 segundos se o app não abrir
  setTimeout(function () {
    if (isIOS) {
      window.location.href = appStore;
    } else if (isAndroid) {
      window.location.href = playStore;
    } else {
      window.location.href = telegramWeb;
    }
  }, 2500);
};
```

---

## 6. UX e Conteúdo da Página

A página deve ser simples, rápida e tranquilizadora. O usuário acabou de clicar num CTA, está motivado — não pode perder esse momento.

### Estrutura sugerida

- **Título:** "Você está quase lá!"
- **Subtítulo:** "Estamos te redirecionando para o grupo exclusivo da Maratona..."
- **Indicador visual:** spinner ou animação leve de carregamento
- **Instrução de fallback** (aparece após 2-3s se o redirecionamento automático não funcionar):
  - "Seu Telegram não abriu automaticamente?"
  - Botão: "Entrar no grupo pelo navegador" → `t.me/+eyQwbBFDUXBkMGIx`
  - Instrução: "Se ainda não tem o Telegram, baixe aqui:" + botão para App Store ou Play Store (conforme dispositivo detectado)

### Identidade visual

Seguir a identidade da LP atual:
- Fundo escuro (dark)
- Cores da marca TDS
- Logo do Bruno Borges se possível
- Fonte e estilo consistentes com `traderbrunoborges.com.br/maratona`

---

## 7. Onde hospedar

A página deve ser publicada em:
```
www.traderbrunoborges.com.br/maratona-grupo
```

E todos os botões CTA da LP (`/maratona`) devem ser atualizados para apontar para essa nova URL, em vez do link direto do Telegram.

---

## 8. Arquivos envolvidos

| Arquivo | Descrição |
|---|---|
| `index.html` (ou rota `/maratona-grupo`) | Página de transição a ser criada |
| LP atual `/maratona` | Atualizar os links dos CTAs para `/maratona-grupo` |

---

## 9. Resumo do que o agente deve fazer

1. Criar a página de transição em HTML/CSS/JS
2. Implementar a detecção de dispositivo via `navigator.userAgent`
3. Implementar a tentativa de deep link `tg://` ao carregar a página
4. Implementar o fallback automático após 2.5 segundos
5. Exibir instrução visual clara caso o redirecionamento não funcione
6. Estilizar seguindo a identidade visual dark da marca TDS
7. Garantir responsividade (mobile-first, já que a maioria do tráfego é mobile)
