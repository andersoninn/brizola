# PLANO DE EXECUÇÃO — Landing Page Campanha João Leonel Brizola 4012

> **Como usar:** abra este arquivo no VS Code, rode `claude` na raiz do projeto e diga:
> *"Leia PLANO-EXECUCAO.md e execute a RODADA 1 inteira."*
> Execute na ordem. Não pule etapas. Não invente dados que não estejam aqui.

---

## 0. Contexto do projeto

- **Stack já instalada:** Next.js 16.3.2 (App Router) + React 19 + Tailwind CSS 4 + TypeScript.
- **Não instale nenhuma dependência nova.** Tudo aqui se resolve com o que já existe.
- **Deploy:** Vercel, estático. Sem banco de dados, sem backend, sem CMS.
- **Prazo:** eleição 04/10/2026. Velocidade > perfeição.
- O `AGENTS.md` avisa que esta versão do Next tem *breaking changes*. **Antes de escrever código, leia** `node_modules/next/dist/docs/` no que for relevante (layout, metadata, fonts, Image).

### Regras inegociáveis

1. **Não inventar fato.** Nenhum número, data, cargo, obra ou biografia que não esteja neste arquivo. Se faltar dado, deixe `{/* DADO PENDENTE: ... */}` e siga.
2. **Nada de jurídico/financeiro funcional.** Doação, formulário e política de privacidade são **layout puro** com URL em placeholder. A equipe do cliente conecta depois.
3. **Sem dark mode.** Campanha tem identidade fixa. Remova o bloco `prefers-color-scheme: dark` do `globals.css`.
4. **Server Components por padrão.** `"use client"` só onde há estado ou evento: menu mobile, formulário, reveal de scroll, botão flutuante.
5. **Português do Brasil.** `lang="pt-BR"`.

---

## 1. A ideia central (isso governa toda a copy)

**João Leonel Brizola é sobrinho de Leonel Brizola — filho do irmão dele.**

Isso não é detalhe, é a tese da página:

> **O legado não é herança. É dever assumido.**

Ele não recebeu um lugar por nascimento — escolheu continuar uma luta. Toda a página empurra essa ideia. É ela que desarma o eleitor que desconfia de "família de político" e é ela que faz a pessoa sair querendo votar.

**Tom de voz:**
- Primeira pessoa quando for o candidato falando. "Meu tio Leonel", nunca "o saudoso Leonel Brizola".
- Frases curtas. Verbo forte. Zero jargão acadêmico.
- **Proibido na copy:** "sanitarismo desenvolvimentista", "Sexta República", "interoperabilidade", "patrimônio intelectual", "potencial civilizatório". São termos do documento programático — matam a emoção. Traduza sempre para língua de gente.
- Cada seção termina puxando a próxima. Ninguém rola sem motivo.

---

## 2. Identidade visual

Herdada do protótipo em HTML já aprovado. **Cores e fontes são travadas. Layout e ritmo podem evoluir.**

| Token | Hex | Uso |
|---|---|---|
| `brz-900` | `#0a2244` | Header, footer, seção escura |
| `brz-800` | `#0f2a52` | Hero, blocos azuis |
| `brz-700` | `#123c6e` | Superfícies internas, placeholder de foto |
| `brz-light` | `#d6e4f2` | Texto sobre azul, tags |
| `brz-red` | `#e2373a` | Ação, destaque, o número 4012 |
| `brz-ink` | `#182234` | Texto sobre branco |
| `brz-gray` | `#f4f6f9` | Fundo de seção alternada |

**Tipografia:** `Anton` (títulos, sempre CAIXA ALTA, `line-height: 0.92`) + `Archivo` 400/600/700/800 (corpo). Via `next/font/google`.

**Assinaturas visuais a manter:** a onda SVG dividindo hero e conteúdo (com o traço vermelho por cima), o `4012` gigante em marca d'água no hero, o badge vermelho do número, o filete vermelho de 3px no topo dos cards.

---

## 3. Estrutura de arquivos a criar

```
app/
  layout.tsx          ← reescrever: fontes, metadata, lang pt-BR
  page.tsx            ← reescrever: só compõe as 12 seções
  globals.css         ← reescrever: @theme com os tokens, sem dark mode
components/
  Header.tsx          ← "use client" (menu mobile)
  Footer.tsx
  WhatsAppFloat.tsx   ← "use client"
  Reveal.tsx          ← "use client" (IntersectionObserver)
  ui/
    Btn.tsx
    Eyebrow.tsx
    NumBadge.tsx
    Wave.tsx
  sections/
    S01Hero.tsx
    S02Promessa.tsx
    S03Linhagem.tsx
    S04QuemEJoao.tsx
    S05Inimigos.tsx
    S06Educacao.tsx
    S07Saude.tsx
    S08Democracia.tsx
    S09Soberania.tsx
    S10Video.tsx
    S11Metas.tsx
    S12Convite.tsx
content/
  campanha.ts         ← TODA a copy vive aqui, tipada
lib/
  config.ts           ← URLs e placeholders
```

**Regra de ouro:** nenhum componente de seção contém texto solto. Todo texto vem de `content/campanha.ts`. O cliente precisa poder trocar uma frase sem abrir um `.tsx`.

Cada arquivo em `sections/` começa com um comentário declarando seu papel narrativo. Exemplo:

```tsx
/**
 * SEÇÃO 02 — A PROMESSA QUE FICOU PELA METADE
 * Papel narrativo: criar a tensão. Sem sentir que algo está quebrado,
 * o eleitor não se importa com a solução das seções seguintes.
 * Sai para: a seção 03, que mostra quem já lutou contra isso.
 */
```

---

## 4. `lib/config.ts` — placeholders

```ts
/**
 * ATENÇÃO: valores abaixo são PLACEHOLDERS.
 * A equipe da campanha substitui antes de ir ao ar.
 */
export const CONFIG = {
  // TODO(campanha): link do grupo/lista oficial de WhatsApp
  WHATSAPP_URL: "https://wa.me/5521000000000",

  // TODO(campanha): URL da plataforma de arrecadação habilitada no TSE
  VAQUINHA_URL: "#",

  // TODO(campanha): página da política de privacidade (LGPD)
  POLITICA_PRIVACIDADE_URL: "#",

  // TODO(campanha): endpoint que recebe o cadastro
  FORM_ENDPOINT: "",

  // TODO(campanha): ID do vídeo principal
  VIDEO_URL: "",

  CANDIDATO: "João Leonel Brizola",
  NUMERO: "4012",
  CARGO: "Deputado Federal",
  PARTIDO: "PSB",
  UF: "RJ",
} as const;
```

Enquanto `FORM_ENDPOINT` estiver vazio, o formulário faz `preventDefault()` e mostra uma mensagem de sucesso simulada. **Não envie dado para lugar nenhum.**

---

## 5. RODADA 1 — o que executar agora

**Entregar:** as 12 seções existindo e navegáveis, com **copy final nas seções 1, 2 e 3** e copy provisória nas demais (marcada no código).

### 5.1 · SEÇÃO 01 — A CHAMADA (copy FINAL)

Papel: parar o scroll e plantar a tese em 5 segundos.

- **Badge:** `4012` · Deputado Federal · PSB/RJ
- **H1:** `SOBRENOME NÃO SE HERDA. SE HONRA.`
- **Subtítulo:**
  > Leonel Brizola era meu tio. Escola em tempo integral, saúde pública de verdade, um partido que ouve o povo — ele começou. Não terminou. Eu venho terminar.
- **CTA primário (vermelho):** `Quero fazer parte` → `#convite`
- **CTA secundário (contorno branco):** `Conheça a luta` → `#promessa`
- Foto do candidato à direita (placeholder com aviso "foto do candidato").
- `4012` em marca d'água vermelha, opacidade 0.14, atrás do conteúdo.
- Onda SVG branca com traço vermelho fechando a seção.

### 5.2 · SEÇÃO 02 — A PROMESSA QUE FICOU PELA METADE (copy FINAL)

Papel: criar a tensão. Fundo branco, texto grande, respiro.

- **Eyebrow:** `O BRASIL DE HOJE`
- **H2:** `Toda geração recebe problemas que não escolheu.`
- **Corpo:**
  > O Brasil se reinventou como democracia, mas nunca terminou de construir os canais por onde o povo decide. Milhões de brasileiros se sentem longe dos partidos, longe das decisões, longe do poder.
  >
  > E o básico continua aberto: a escola que não segura o jovem, a saúde pública sufocada, a indústria que encolheu, o desenvolvimento preso em poucos lugares do mapa. A cada eleição, um pouco mais de descrença.
  >
  > Trocar nomes não resolve nada. O que precisa mudar é o método.
- **Frase de destaque** (Anton, vermelho, isolada, fecha a seção):
  > `RENOVAR NOMES NÃO BASTA. É PRECISO RENOVAR A PRÁTICA.`

### 5.3 · SEÇÃO 03 — A LINHAGEM (copy FINAL)

Papel: mostrar que essa luta é antiga e que ele entra nela **por escolha**. Coração do foco da campanha. Fundo `brz-gray`, cinco blocos em linha (empilham no mobile), com um filete vermelho ligando um ao outro.

- **Eyebrow:** `DE ONDE VEM ESSA LUTA`
- **H2:** `Cinco homens. Uma ideia só.`
- **Linha de apoio:** `O trabalhismo brasileiro não nasceu ontem — e não terminou.`

| # | Nome | Frase (uma linha, é o que o público lê) |
|---|---|---|
| 1 | Getúlio Vargas | Não existe país soberano sem um Estado capaz de desenvolvê-lo. |
| 2 | Alberto Pasqualini | A política só se justifica quando serve à justiça social. |
| 3 | João Goulart | Sem reforma de base, soberania vira discurso. |
| 4 | **Leonel Brizola** | Defender nossa cultura política sem recuar é como se ganham corações e mentes. |
| 5 | Darcy Ribeiro | O Brasil só será o que pode ser quando a educação for prioridade absoluta. |

> **Destaque visual:** o bloco 4 (Leonel) é o único em azul sólido com o nome em vermelho. Os outros quatro são claros. Quem bate o olho entende a hierarquia sem ler.

- **Fecho da seção** (Anton, centralizado):
  > `NENHUM DELES TERMINOU.`
  >
  > Cada geração recebe a obra onde a anterior parou. Esta é a nossa vez.

### 5.4 · Seções 04 a 12 — estrutura + copy PROVISÓRIA

Construa completas e navegáveis. Marque cada bloco de texto com `// COPY PROVISÓRIA — rodada 2`. Base factual abaixo — **use só isto, não amplie**.

**04 · QUEM É JOÃO** — fundo branco, foto à esquerda.
Eyebrow `QUEM ESTÁ FALANDO`. H2: `Médico antes de candidato.`
Provisório: médico sanitarista, PSB/RJ, sobrinho de Leonel Brizola, entrou na política porque a saúde pública é questão de soberania nacional. Tags: `Médico sanitarista` · `Trabalhismo` · `PSB/RJ`.
*Rodada 2 precisará de: formação, onde atuou, história pessoal.* → `{/* DADO PENDENTE */}`

**05 · OS QUATRO INIMIGOS** — **única seção escura** (`brz-900`). Grid de 4.
Eyebrow `CONTRA O QUE LUTAMOS`. H2: `Toda luta tem um adversário. A nossa tem quatro.`

1. **O Sucateamento Educacional** — transforma educação integral em nome vazio, sem o investimento e a dignidade que Darcy e Brizola conceberam.
2. **O Mercado da Doença** — lucra com a precariedade da saúde pública, com a dependência tecnológica externa e com a falta de planejamento sanitário.
3. **O Coronelismo Partidário** — dirigentes que transformaram partidos em feudos, concentrando poder, dinheiro e decisão nas mãos de poucos.
4. **O Neoliberalismo Predatório** — sucateia e privatiza o que é do país.

Fecho: `Contra cada um deles, uma bandeira.`

**06 a 09 · AS QUATRO BANDEIRAS** — uma seção inteira por bandeira, layout alternado (imagem/número à esquerda, depois à direita). Fundo alternando branco / `brz-gray`. Cada uma no formato: **inimigo que enfrenta → a promessa em uma frase → 3 entregas concretas**.

**06 · EDUCAÇÃO PARA O SÉCULO XXI** (contra o Sucateamento Educacional)
Promessa: *A escola de tempo integral que Darcy desenhou e Brizola construiu — de volta, e maior.*
1. **Novo Plano Nacional dos CIEPs** — tempo integral com alimentação, cultura, esporte, ciência e saúde. Não é só mais hora dentro de prédio precário.
2. **Alfabetização digital para todos** — programação desde o fundamental, laboratórios e robótica na rede pública, para que essa capacidade não fique só na elite.
3. **Professor valorizado** — piso nacional cumprido, formação continuada e carreira nacional do magistério.

**07 · SAÚDE PÚBLICA E DEFESA DO SUS** (contra o Mercado da Doença)
Promessa: *SUS forte é soberania. Quem depende de fora para se curar não é livre.*
1. **Atenção primária primeiro** — ampliar a Estratégia Saúde da Família e resolver o problema antes que ele chegue ao hospital.
2. **Prontuário único nacional** — seus dados de saúde acessíveis em qualquer lugar do país.
3. **Produzir aqui** — remédios, insumos e vacinas feitos no Brasil, com a Fiocruz fortalecida e estoque estratégico nacional.
4. **Saúde mental como prioridade** — mais CAPS, atendimento psicológico na atenção básica, prevenção ao suicídio.

**08 · REDEMOCRATIZAÇÃO PARTIDÁRIA** (contra o Coronelismo Partidário)
Promessa: *Partido é instrumento do povo, não feudo de dirigente.*
1. **Eleições internas de verdade** — voto direto dos filiados nas direções e prévias obrigatórias para quem recebe fundo eleitoral.
2. **Participação digital** — consultas, deliberações e orçamento participativo online, com receitas e despesas abertas.
3. **Juventude com poder de decisão** — primeiro emprego tecnológico, formação política gratuita e espaço real nas direções partidárias.

**09 · SOBERANIA E TRABALHO** (contra o Neoliberalismo Predatório)
Promessa: *Tecnologia a serviço do trabalhador — não contra ele.*
1. **Reindustrializar com tecnologia** — política nacional de inteligência artificial, programa brasileiro de semicondutores, crédito produtivo e compras públicas estratégicas.
2. **Estatuto dos trabalhadores de plataforma** — previdência adaptada, seguro para o trabalho intermitente e transparência dos algoritmos.
3. **Soberania digital** — dados e sistemas de pagamento como o PIX permanecem ativos públicos brasileiros.
4. **Economia do mar (RJ)** — indústria naval, pesca sustentável, energia offshore e a revitalização da Baía de Guanabara.

**10 · OUÇA DE MIM** — fundo `brz-gray`, centralizado. Moldura 16:9 com botão play vermelho. Enquanto `VIDEO_URL` estiver vazio, mostrar o placeholder. Eyebrow `EM PRIMEIRA PESSOA`. H2: `Dois minutos, sem intermediário.`

**11 · METAS, NÃO DISCURSOS** — fundo branco, uma única frase gigante em Anton ocupando a seção:
> `O PROBLEMA DA POLÍTICA BRASILEIRA NÃO É A FALTA DE DISCURSO. É A ESCASSEZ DE RESULTADO.`

Abaixo, três compromissos curtos: metas públicas por projeto · prestação de contas aberta · avaliação permanente das políticas públicas. Fecho: `Você vai poder cobrar. Por escrito.`

**12 · O CONVITE** — fundo `brz-800`, onda no topo. É a conversão.
Eyebrow `FAÇA PARTE`. H2: `Nenhum legado se continua sozinho.`
Apoio: *Ele começou. Eu continuo. Mas quem termina é a gente.*

- **Coluna principal (maior): o formulário.** É o CTA principal da página. Título `Quero fazer parte`. Campos: nome, e-mail, WhatsApp, CEP, cidade, bairro, estado. Checkbox de privacidade apontando para `POLITICA_PRIVACIDADE_URL`. Botão `Quero fazer parte`.
- **Coluna lateral:** card vermelho de apoio com dois botões — `Entrar no WhatsApp` (→ `WHATSAPP_URL`) e `Ajudar na vaquinha` (→ `VAQUINHA_URL`, com nota de prestação de contas).
- Fecho da página: `VOTE 4012` em Anton, vermelho, grande.

### 5.5 · Elementos globais

- **Header sticky** azul `brz-900`, 64px. Logo `JLB` + `BRIZOLA 4012`. Links: A luta · Quem é João · Bandeiras · Compromissos · Faça parte. Botão vermelho `Quero fazer parte`. Menu hambúrguer < 860px.
- **WhatsAppFloat** — botão circular verde fixo no canto inferior direito, aparece após 600px de scroll.
- **Reveal** — `IntersectionObserver`, fade + translateY(16px) → 0, 500ms. **Respeitar `prefers-reduced-motion: reduce`** (nesse caso, sem animação nenhuma).
- **Footer** `brz-900`: `JLB`, nome, `Deputado Federal · 4012 · PSB/RJ`, link para política de privacidade e uma linha para o dado de registro da campanha → `{/* DADO PENDENTE: CNPJ da campanha */}`.

---

## 6. Acessibilidade e SEO (não é opcional)

- `<title>`: `João Leonel Brizola 4012 · Deputado Federal · PSB/RJ`
- `description`: `Sobrenome não se herda, se honra. Educação integral, defesa do SUS, partidos democráticos e soberania. Vote 4012.`
- Open Graph com imagem → `{/* DADO PENDENTE: /og.jpg */}`
- Um único `<h1>` na página (o do hero).
- Contraste mínimo AA: **não use `brz-light` como texto sobre branco** — ele só existe sobre azul.
- Todo input com `<label>` associado por `htmlFor`/`id`. Nada de placeholder fazendo papel de label.
- Alvos de toque ≥ 44px no mobile.
- Navegação por teclado funcionando no menu e no formulário; foco visível.

---

## 7. Como validar antes de me devolver

```bash
npm run dev      # roda sem erro no console
npm run lint     # zero erro
npm run build    # build de produção passa
```

**Checklist:**
- [ ] As 12 seções existem, cada uma com o comentário do papel narrativo.
- [ ] Nenhuma string de copy dentro de componente — tudo em `content/campanha.ts`.
- [ ] Seções 1, 2 e 3 com a copy final exatamente como está neste arquivo.
- [ ] Seções 4 a 12 marcadas com `// COPY PROVISÓRIA — rodada 2`.
- [ ] `grep -r "TODO(campanha)"` retorna todos os placeholders de URL.
- [ ] Zero dependência nova no `package.json`.
- [ ] Dark mode removido do `globals.css`.
- [ ] Testado em 375px, 768px e 1440px.
- [ ] Formulário não envia nada para lugar nenhum.

---

## 8. Rodada 2 (não executar agora)

1. Copy final das seções 4 a 12, depois da aprovação do tom nas 1 a 3.
2. Fotos reais e imagem de Open Graph.
3. Dados biográficos do candidato para a seção 04.
4. URLs reais de WhatsApp, vaquinha e política de privacidade.
5. Deploy na Vercel + domínio.
