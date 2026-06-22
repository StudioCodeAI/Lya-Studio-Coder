# Changelog

Todas as mudanças relevantes do **Lya Studio Coder** são registradas aqui.
O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o versionamento é [SemVer](https://semver.org/lang/pt-BR/).

---

## [1.1.0] — 2026-06-21 · COSMOS Cérebro Gigante + Modularidade + Lya Code

### ⚡ Performance & Inteligência Multi-Agente

- **BLOCO 20 — Corredor CLI invencível:** `getCliToolSchema()` injeta catálogo completo de 33+
  ferramentas no system prompt do cérebro CLI. `extractAllToolMarkers()` extrai múltiplos
  `<<LYA:TOOL>>` por turno e executa em `Promise.all`. Limite de iterações: 5 → 20.
  Envelope de resultado JSON limpo por ferramenta. Opus 4.8 e Fable 5 via CLI passam a
  enxergar `mission_status`, `memory_search`, `write_file` e todo o catálogo — zero ferramentas cegas.

- **BLOCO 21 — Protocolo estruturado COSMOS↔Stars:** Stars encerram respostas com
  `<<LYA:OUTPUT>> {task_id, status, confidence, artifacts[], errors[]}`. `cosmosReview` lê
  o envelope (parse determinístico, custo zero) antes de chamar o LLM de revisão. Retrabalho
  (`mission_rework`) repassa `errors[]` estruturados para a Star refazer com contexto preciso.

- **BLOCO 22 — Visibilidade soberana global:** `project-snapshot.ts` agrega estado de todos
  os módulos (missão, equipe, build) em `snapshotContextBlock()` — injetado no system prompt
  do COSMOS a cada turno. O COSMOS sabe o estado de TUDO sem chamar ferramentas. "Olho do COSMOS"
  na TopBar: chip com missão ativa, equipe e build visíveis em todas as abas (poll 5s, popover
  com detalhe). Rota `GET /api/snapshot` para o frontend.

- **BLOCO 23 — Pool de sessão CLI:** Cache de imports dinâmicos (`cross-spawn`, `node-pty` —
  cacheados na 1ª chamada, saving 3–8 ms/turno). Cache de resolução de binário (`resolveCliBin`
  — zero I/O por `fs.existsSync` em turnos seguintes). Infraestrutura de session pool com
  `lastUsed` + idle timer (5 min → remove) para futura reutilização multi-turn.

- **BLOCO 24 — Registro único de ferramentas:** `tool-matrix.ts` elevado a ponto de entrada
  canônico — re-exporta `setDynamicTools`, `filterTools`, `getCliToolSchema` de `llm.ts`.
  `mcp.ts` importa `setDynamicTools` de `tool-matrix.ts` (não de `llm.ts` diretamente).
  `filterTools` exportada publicamente. API path e CLI path garantidamente usam o mesmo catálogo.

- **BLOCO 25 — README Comercial:** 3 novas seções no README público: `⚡ Engenharia de Alta
  Performance` (tabela com 11 conquistas técnicas), `🛡️ Segurança por Padrão` (AES-256-GCM,
  path traversal, fila cifrada, domGuard, sandbox), `🧠 Inteligência Multi-Agente`
  (COSMOS+Stars, 4 modos, envelope estruturado, Olho do COSMOS, MCP dinâmico). CHANGELOG atualizado.
  Versão classificada como **v1.1.0** — SemVer MINOR (novas features backward-compat). Badge de
  estabilidade: 92% → **94%**. COSMOS: 88% → **93%**.

- **Performance de missão (TURNO 2):** `agentGemini` cria/reusa `cachedContent` Gemini com TTL
  55 min — custo quase zero em missões repetidas. `starKeyMap` resolve todas as API keys em
  paralelo antes do dispatch. `cosmosReview` consolida inline (sem LLM extra) quando todos os
  envelopes chegam com `status:"done"`. `runMission` injeta `memoryContext` do NeuroCORE no
  prompt de cada Star. `GET /api/orchestration/whiteboard` expõe goal + plano + contribuições
  + artifacts + memória. `computeTaskTools` garante `memory_search`/`memory_add` a qualquer
  slot em agentMode.

### 🏗️ Modularidade Total (TURNOs 5–6)

- **server.ts 2 382 → 182 linhas (−90%):** todo o código inline extraído para módulos
  `server/core/`. `startServer()` reducida a 50 linhas puras de montagem.

  | Módulo novo | Responsabilidade |
  |---|---|
  | `chat-routes.ts` | `/api/chat` + `/api/chat/stream` (ambos os protocolos) |
  | `agent-chat-routes.ts` | `POST /api/agent/chat` — COSMOS agêntico + CLI path |
  | `neurocore-routes.ts` | NeuroCORE completo — ChromaDB, embeddings, inbox, watcher, `/api/memory/*`, `/api/system/*` |
  | `n8n-tunnel-routes.ts` | n8n gerenciado + Cloudflare Tunnel + Flows pipeline |
  | `fs-routes.ts` | `/api/fs/*` |
  | `skills-routes.ts` | LyaSkill system + 8 rotas `/api/skills/*` + seed + sumário |
  | `conversations-routes.ts` | `/api/conversations/*` + `/api/system/reset-state` + `/api/pricing/openrouter` |
  | `infra-routes.ts` | `/api/agent/tool`, `/api/terminals`, `/api/health`, `/api/snapshot`, `/api/local/models` |
  | `agent-edit-routes.ts` | `stripCodeFences` + `pickEditModel` + `/api/agent/edit` |
  | `mission-legacy-routes.ts` | `MissionAgent`/`Task`/`Relay` + `missionState` + 7 rotas `/api/mission/*` |
  | `feed-routes.ts` | `lyaFeed` state + `pushFeed` + `/api/feed` |

- **`src/lib/agentToolCatalog.ts`** (novo): `AGENT_TOOL_CATALOG`, `ToolCat`, `ALL_TOOL_IDS`,
  `TOOL_CATS` extraídos de `Chat.tsx`. Chat.tsx: 3 989 → 3 936 linhas.

### 🤖 Lya Code como Star 1 (TURNO 6)

- **`server/core/cli-engines.ts`:** engine `lyacode` adicionada — bin `lya`, aliases `lya`/`lscode`,
  `slotId: "star-lyacode"`, `headless: true`, flag `--print`, auto-`npm install`.
- `tools.ts` e `orchestration.ts` atualizados para reconhecer `star-lyacode` como slot virtual.
- `canTransition` corrigido: guard `hasOwnProperty` elimina bug de prototype pollution.
- **Testes:** 58 → 61 (`test:core`) — 3 novos casos Lya Code + fix FC-1 (seed determinístico).

### 🚀 Lya Publisher (P.0–P.9)

- `store-api.ts` — OAuth2 Azure AD + Partner Center API: `findApp`, `createSubmission`, upload SAS, `commitSubmission`, `pollStatus`.
- `build-pipeline.ts` — bump de versão em 7 arquivos + `runPublisherPipeline` (tauri build → MSIX).
- `publisher-routes.ts` — 7 rotas SSE: status, build, submit, submissions, screenshots (upload/list/delete).
- `Publisher.tsx` — dashboard completo: status, pipeline (Build + Publish + Dry Run), log SSE, histórico de submissões, screenshots drag-and-drop.

### 🧪 Verificação & Qualidade (TURNO 8 · 2026-06-21)

- **B-03 RETEST:** missão phi3.5:latest com `keep_alive:"5m"` → `done` em ~10s (fix confirmado ao vivo).
- **E-03 RETEST (Gemini):** `agentGemini` gemini-2.5-flash PASS com usage real (5 289 tokens).
  Embedding `gemini-embedding-001` 384d PASS. State isolation em 2 missões sequenciais PASS.
- **Smoke `lya --print`:** CLI headless retornou resposta em modo `--print`; `lya --version` = 1.1.0.
- **Suítes offline:** test:core 61/61 · test:attach 24/24 · test:hijk 67/67.

### 📌 Distribuição v1.1.0

Instaladores gerados em `2026-06-21` — SHA-256 verificados:

| Arquivo | SHA-256 |
|---|---|
| `Lya Studio Coder_1.1.0_x64-setup.exe` | `E3A2DBD43534A3073909C1CCC4E998C50EB28AA1C4AA1CEEC10CC19F597DC043` |
| `Lya Studio Coder_1.1.0_x64_en-US.msi` | `EB80384AEA6D363E7758AAFF33B865F2DC578959C966608D02746F92C4BFEF0D` |
| `LyaStudioCoder_1.1.0.0_x64.msix` | `C48EF57C9F9B6E8972D82967CDBEF1CE9E13E853EE543401B13F6069033E3D94` |

- **MSIX:** enviado ao **Microsoft Partner Center** (produto 9NRW0DWTW9Z8) via Lya Publisher.
- **`.exe` / `.msi`:** distribuídos via **GitHub Releases** em `StudioCodeAI/Lya-Studio-Coder`.
- Winget PR #389458 em `microsoft/winget-pkgs` aguarda MSIX v1.1.0 aprovado no Partner Center.

---

## [1.0.2] — 2026-06-15

### ✨ Adicionado
- **Toggles de modo de operação** — seletor proeminente na barra do chat (ao lado de Stream)
  para alternar entre **Plan / ADM / CEO / Supervisor**, cada um com seu comportamento e
  gate de autorização distinto. Slash `/modo` continua funcionando.
- **Reset de estado** — endpoint `POST /api/system/reset-state` + botão **"Limpar todas as
  conversas"** no histórico: limpa conversas, tarefas de missão e fila de ordens sem tocar
  em contas ou memória do NeuroCORE.
- **Custo real por token** — os 4 streams de LLM (Anthropic, Gemini, OpenAI-compat, Ollama)
  emitem usage real; o HUD exibe o custo em US$ com selo **`real`** ou **`est.`** conforme
  o provedor suportar. Contadores começam em 0 (sem baseline fictício).
- **Auto-preços OpenRouter** — botão *"Importar do OpenRouter"* em Config → Geral → *Preços
  de Tokens*: puxa o catálogo completo (~300 modelos) e mescla na tabela editável.
- **FAQ integrado** — 27 perguntas e respostas em 7 categorias (accordion por grupo) direto
  no Config → Geral, sem abrir documentação externa.
- **LyaAtom SVG** — ícone de átomo exclusivo (3 órbitas + núcleo dourado) substituiu o Ω
  genérico na activity bar.
- **Activity bar colorida** — cada seção com cor distintiva (amarelo / laranja / teal / roxo /
  âmbar); item ativo = borda esquerda no accent color da skin.
- **Clippy + cargo-audit** na Loja de Capacidades — detecção automática das ferramentas Rust.
- **MissionTracker ao vivo** — widget fixo acima do input enquanto uma missão roda; mostra
  status, Stars, entregas, arquivos e tokens em tempo real; ao terminar, posta o resultado
  consolidado como mensagem do chat. Engine-agnóstico (API, CLI, Ollama).
- **Microsoft Store (MSIX)** — pacote `LyaStudioCoder_1.0.2.0_x64.msix` gerado e enviado
  para certificação. Quando aprovado, instalação com trust completo (sem SmartScreen).

### 🔧 Alterado
- **COSMOS promovido a Estável (88%)** no Mapa de Estabilidade — o modo soberano (rework,
  pausa por agente, entrega ao vivo no chat) está maduro o suficiente para uso no dia a dia.
- **Loja 100% real** — catálogo de skills nasce vazio e é preenchido pelo registry real
  (`/api/skills`); downloads e autores fictícios removidos.
- **Usage real no caminho do agente** — `agentAnthropic`, `agentGemini` e `agentOpenAILike`
  agora acumulam e repassam `usage` ao frontend; custo US$ calculado por tokens reais.
- CEO tem gate de **autorização única** (1ª ação mutante para → 1 clique libera toda a
  tarefa; reseta ao trocar de modo). PLAN bloqueia ferramentas mutantes no servidor. ADM = livre.
- Sync de Skills corrigido (era `setTimeout` fake → agora `POST /api/skills/import-git` real).

### 📌 Distribuição & Conhecido
- Instaladores 1.0.2: `.exe` NSIS **~46 MB** + `.msi` **~70 MB** (runtime embutido).
- Assinatura Authenticode em processo de regularização (certificado Code Signing ICP-Brasil
  solicitado à AC). SmartScreen exibe aviso padrão no `.exe`/`.msi` — clique em
  *Mais informações → Executar assim mesmo*. Integridade verificável pelo SHA-256 em
  [Declaração de Propriedade 1.0.2](docs/DECLARACAO-PROPRIEDADE-1.0.2.md).
- **Microsoft Store:** MSIX enviado para certificação; sem aviso SmartScreen quando distribuído
  pela Store.

---

## [1.0.1] — 2026-06-14

### ✨ Adicionado
- **COSMOS soberano no chat** — o orquestrador acompanha a missão de dentro da conversa:
  vê a entrega real de cada agente, detecta erros e arquivos gerados, **manda refazer**
  (`/refazer`) e **pausa/retoma um agente** específico.
- **Custo por token em tempo real** — cálculo de custo por modelo com tabela de preços
  **editável** (Configurações → Geral → *Preços de Tokens*) e cotação do dólar automática.
- **Skins Vivas** — novos temas **FUTURE** e **RETRO** (o **COSMOS** segue como padrão).
- **Comandos de motor no chat** — `/model`, `/provedor` e `/agent` para trocar provedor,
  modelo e agente sem sair da conversa.
- **Configurações → Geral renovado** — *Tipo de Letra* real, *Notas de Versão* e *FAQ*
  embutidos; aba **Temas** separada.

### 🔧 Alterado
- **Mapa de Estabilidade** mais honesto: *Orquestração COSMOS* reclassificada para
  **pré-lançamento** (`62%`) enquanto o modo soberano amadurece.
- Limpeza de telas e fluxos legados (assistente de importação morto da Loja e seletores
  obsoletos do Simulador).

### 🔒 Segurança
- `accounts.json` **cifrado em repouso** (AES-256-GCM); chave-mestra local em `~/.coreLyaDB`.
- Validação de *path traversal* no sandbox de arquivos.
- **Zero** vulnerabilidades de dependências (npm audit limpo).

### 📌 Distribuição & Conhecido
- Instaladores 1.0.1: `.exe` NSIS **~46 MB** + `.msi` **~70 MB** (runtime embutido).
- Build de **pré-lançamento sem assinatura de código** Authenticode — o SmartScreen exibe
  o aviso padrão. Autoria e integridade ficam registradas na
  [Declaração de Propriedade 1.0.1](docs/DECLARACAO-PROPRIEDADE-1.0.1.md) com o **SHA-256**
  de cada instalador. Assinatura **EV/OV** (sem aviso) fica para o lançamento oficial.

---

## [1.0.0] — 2026-06-04

### 🎉 Primeira versão pública

Lançamento inicial da IDE local-first de orquestração de IA, distribuída como
instalador self-contained para Windows x64 (`.exe` NSIS + `.msi`).

#### ✨ Adicionado
- **Chat Multi-Provider** (Gemini, Claude, GPT, Ollama) com streaming cancelável,
  markdown + realce de sintaxe, anexos, gravação de voz, ferramentas reais do
  agente (liga/desliga), temas COSMOS/OPUS e atalhos configuráveis.
- **NeuroCORE** — memória vetorial de longa duração em ChromaDB (embeddings 384d,
  4 coleções, busca semântica, ingestão por inbox/pastas monitoradas).
- **Orquestração de Agentes** (Mission Control) com motor real por agente e
  status online/offline ao vivo.
- **Editor Monaco** profissional (IntelliSense, F12, multi-cursor, diff de Git,
  edição com IA via Ctrl+K).
- **Explorer + Find in Files** (busca por nome e conteúdo, regex).
- **Terminal integrado** com PTY nativo.
- **Compilador & Simulador** com build/run real e saída ao vivo.
- **Run & Debug** para Node.js (CDP) e Python (debugpy/DAP).
- **n8n Live + Pipeline RAG** gerenciados pela IDE.
- **Loja de Skills, Capacidades e Contas** com teste real de conexão.
- **App Desktop self-contained** (runtime embutido, instala por usuário sem admin).
- **Zoom global** da interface (Ctrl +/-/0).

#### 🧪 Em testes pré-lançamento (< 80% de estabilidade)
- n8n Live + Pipeline RAG, Loja (Skills/Capacidades/Contas), Embeddings nativos,
  Preview ao vivo, Túnel de compartilhamento e Configuração de provedores remotos.
  Veja o [Mapa de Estabilidade](README.md#-mapa-de-estabilidade).

#### 📌 Conhecido
- Instalador sem assinatura digital (SmartScreen exibe "editor desconhecido").
- Ícone ainda genérico; identidade visual definitiva no roadmap.
- Memória requer Python + ChromaDB instalados na máquina.

[1.1.0]: https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.1.0
[1.0.2]: https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.0.2
[1.0.1]: https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.0.1
[1.0.0]: https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.0.0
