<div align="center">

<img src="assets/lya-logo.jpg" alt="Lya Studio Coder" width="220" />

<br/>

# 🌌 Lya Studio Coder: Sua central de orquestração multi-IA

### 97% estável. 100% local. Zero vendor lock-in. Interface 100% traduzida em 3 idiomas.

*Claude · Gemini · GPT · Ollama — um cockpit. Muitas IAs. Nenhum vendor lock-in.*

<br/>

![Estabilidade 97%](https://img.shields.io/badge/Estabilidade-97%25-22c55e?style=flat-square) ![Local-First](https://img.shields.io/badge/Local--First-100%25-7c3aed?style=flat-square) ![Multi-Agente](https://img.shields.io/badge/Multi--Agente-COSMOS-ff0055?style=flat-square) ![Idiomas](https://img.shields.io/badge/PT_·_EN_·_ES-100%25_i18n-0ea5e9?style=flat-square) ![CURE](https://img.shields.io/badge/CURE-Auto--Fix-ff6b9d?style=flat-square)

<br/>

[![⬇️ Download Grátis — Windows x64](https://img.shields.io/badge/⬇️_DOWNLOAD_GRÁTIS-Windows_x64_·_v1.3.0-7c3aed?style=for-the-badge&logoColor=white)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)
&nbsp;
[![Microsoft Store](https://img.shields.io/badge/Microsoft_Store-Instalar-0078D4?style=for-the-badge&logo=microsoftstore&logoColor=white)](https://apps.microsoft.com/detail/9nrw0dwtw9z8?hl=pt-BR&gl=BR)

<br/>

[![Versão](https://img.shields.io/badge/versão-1.3.0-7c3aed?style=flat-square)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)
[![Plataforma](https://img.shields.io/badge/Windows-10%20%2F%2011_x64-0078D6?style=flat-square&logo=windows)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)
[![Local First](https://img.shields.io/badge/100%25-Local_First-ff0055?style=flat-square)](https://github.com/StudioCodeAI/Lya-Studio-Coder#-privacidade)
[![Gratuito](https://img.shields.io/badge/Gratuito-para_avaliar-22c55e?style=flat-square)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)
[![Licença](https://img.shields.io/badge/Licença-Proprietária-orange?style=flat-square)](LICENSE)
[![Issues](https://img.shields.io/github/issues/StudioCodeAI/Lya-Studio-Coder?style=flat-square&color=ff0055)](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues)
[![Discussions](https://img.shields.io/github/discussions/StudioCodeAI/Lya-Studio-Coder?style=flat-square&color=7c3aed)](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions)

<br/>

[**⬇️ Download**](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest) · [**✨ Funcionalidades**](#-funcionalidades) · [**🚀 Quick Start**](docs/QUICK_START.md) · [**📊 Estabilidade**](#-mapa-de-estabilidade) · [**💬 Comunidade**](COMMUNITY.md) · [**❓ FAQ**](COMMUNITY.md#faq-da-comunidade)

</div>

---

## 🎯 O problema que a Lya resolve

Cansado de ser um **"copista de contexto"** entre abas do Claude e o VS Code?

Você explica o projeto pra uma IA, troca de aba, explica de novo, copia a resposta, volta ao terminal, esquece onde estava. Repete. Todo dia. Com cada modelo diferente.

**Isso é trabalho braçal. E você não deveria estar fazendo isso em 2026.**

# A Lya é o cockpit que elimina esse atrito:

- 🎯 **Um ambiente.** Claude, Gemini, GPT e Ollama na mesma tela — sem troca de aba.
- 🧠 **Memória real (768d).** O Core5 indexa seu projeto localmente com embeddings de 768 dimensões (nomic-embed-text-v1.5) e aprende com cada correção. A IA "lembra" entre sessões — e entre erros já curados.
- ⚡ **COSMOS soberano + CURE.** Lance até 4 agentes em paralelo, acompanhe a entrega de cada um ao vivo, e deixe a IDE consertar o próprio build sozinha — com memória de cicatrizes que impede a repetição do mesmo erro.
- 🔒 **100% na sua máquina.** Nenhum dado seu toca nossos servidores. Zero telemetria oculta.

> **Você traz as chaves. A Lya traz a inteligência coordenada.**

---

## ✨ Funcionalidades

Cada módulo é uma capacidade real, testada e em uso — não maquete.

| 🧩 Módulo | O que entrega |
|---|---|
| 🤖 **Chat Multi-Provider** | Claude, Gemini, GPT, Ollama (local + cloud) e **Antigravity** na mesma sala. Streaming cancelável, markdown, anexos, **gravação de voz**, function-calling real e histórico completo. |
| 🎛️ **COSMOS — Orquestração** | Até 4 agentes de IA em paralelo (API, CLI, local). Cada slot com motor independente, status ao vivo, contexto compartilhado e **tools MCP dinâmico**. |
| 🩹 **CURE — Auto-Correção** | A IDE conserta o próprio build sozinha: loop build→mistake→correção→rebuild com disjuntor anti-degeneração, **CURE SCAR** (memória de cicatrizes com dinâmica de confiança), **Auto Scar Fix** (preview preventivo no composer, custo zero) e **roteamento Planner→Executor** por classificação de ferida. |
| 🧠 **Core5 — Memória 768d** | Motor de memória embutido (LanceDB, **nomic-embed-text-v1.5 768d**, zero dependência de Python/Docker). Cascata de embedding dimensão-safe (Gemini online 768d → nomic local 768d). Captura contínua write-behind com anti-loop de feedback. Continuidade MCP com Core5 externo (Claude Code, Claude Desktop). |
| 📝 **Editor Monaco** | O mesmo motor do VS Code. IntelliSense, F12, multi-cursor, diff de Git, **Ctrl+K** edita código com IA inline. **Grammars TextMate** (vscode-textmate + oniguruma WASM, offline) + **snippets** ativáveis por pacote. |
| 🔍 **Explorer + Find in Files** | Árvore VS Code-like, busca por nome **e por conteúdo** (regex, case-sensitive), preview. **Temas de ícone** (Studio, Emoji, Mono). |
| 💻 **Terminal Integrado** | PTY nativo (node-pty) real. Rode npm, python, git, qualquer coisa — sem sair da IDE. |
| 🏗️ **Build & Compilador** | Build/run reais com saída ao vivo. Detecta automaticamente o comando do projeto (npm, gradle, tsc, python). |
| 🐞 **Run & Debug** | Depuração real de **Node.js** (CDP) e **Python** (debugpy/DAP): breakpoints, step, variáveis, call stack. |
| 🔗 **n8n Live + Pipeline RAG** | Servidor n8n gerenciado + editor de pipeline RAG que recupera memória, dispara LLM com contexto e publica resultado. |
| 🔒 **LSCode Keychain** | Gerenciador centralizado de chaves API (Carteira cifrada AES-256-GCM). Fonte única da verdade para todos os provedores — seus segredos ficam só na sua máquina. |
| 🛒 **Loja de Skills + Linguagens** | Importe skills de repositórios Git (indexação real na memória vetorial). Grammars, snippets, **8+ temas de cor** (Dracula, Tokyo Night, Atom One Dark…) e icon themes — tudo instalável direto na Store. |
| 🖥️ **Desktop Self-Contained** | `.exe` e `.msi` que embute o runtime. **Não exige Node.js instalado.** Instala por usuário, sem privilégio de admin. |
| 🚀 **Lya Publisher** | Dashboard integrado para publicar na **Microsoft Store** sem sair da IDE. Build Tauri + MSIX + upload SAS + Partner Center API em um clique. 📘 [Guia de configuração](docs/LYA-PUBLISHER-SETUP.md) |
| 🌍 **Interface 100% Trilíngue** | Português, Inglês e Espanhol nativos via `i18next` em **toda** a IDE — Chat, Orquestração, Editor, Terminal, Loja, Memória, Publisher e Configurações. **1698 chaves i18n em paridade**. |
| 🔌 **MCP Bidirecional** | A IDE é **cliente MCP** (consome ferramentas de servidores externos) E **servidor MCP** (Claude Code/Desktop/Cursor conectam e usam missão/SBB/CURE como tools). |
| ⚡ **Quick-Launch de CLIs** | Suas CLIs de IA (Claude Code, opencode, AGY, LyaCode…) viram ícones de 1 clique na TopBar — com o glifo da marca real. |

➡️ **Detalhe completo:** [docs/FUNCIONALIDADES.md](docs/FUNCIONALIDADES.md)

---

## ⚡ Engenharia de Alta Performance

Cada melhoria de engenharia é um argumento de venda — não uma linha de changelog esquecida.

| Técnica | Ganho |
|---|---|
| **Prompt Caching (Claude)** | Até 85% de economia em tokens de entrada. `cache_control: ephemeral` nos gateways Anthropic — missões longas e pré-voos em sequência reusam o cache automaticamente. |
| **Pré-voo Cacheado (60s)** | Probe + handshake de agente cacheados por 60 segundos. Missões consecutivas não repetem o round-trip de liveness — o COSMOS já sabe quem está online. |
| **Stars em Paralelo** | Stars 1–4 rodam em `Promise.all` — paralelismo real. Tempo total = mais lento da equipe, não a soma. Missão de 10 min → 36 s medido ao vivo. |
| **Múltiplas Ferramentas por Turno** | CLI pode emitir vários `<<LYA:TOOL>>` no mesmo turno; o servidor executa em `Promise.all`. N ferramentas → mesmo tempo de 1. |
| **Catálogo Completo no Corredor CLI** | 33+ ferramentas injetadas no system prompt do cérebro CLI via schema compacto. Opus 4.8 e Fable 5 enxergam `mission_status`, `memory_search`, `write_file` e todo o catálogo — zero ferramentas cegas. |
| **Loop Bidirecional (20 iterações)** | Cérebro CLI pode chamar ferramentas e receber resultados em até 20 rodadas multi-turno por re-spawn — antes era 5 e sequencial. |
| **Import Caching (cross-spawn / node-pty)** | `await import(...)` por invocação virava overhead de module-resolution em cada turno CLI. Cacheados na primeira chamada — saving: ~3–8 ms/turno. |
| **Cache de Resolução de Binário** | `resolveCliBin` lia `cli-overrides.json` + `fs.existsSync` a cada spawn. Cacheado em memória — zero I/O em turnos seguintes. |
| **Spawn Seguro (cross-spawn)** | CLIs via `npm i -g` geram shims `.cmd`/`.ps1` no Windows. `cross-spawn` resolve o shim certo e escapa cada argumento — fecha vetor CVE-2024-27980 sem `shell: true`. |
| **Streaming Ao Vivo do Cérebro CLI** | Respostas chegam em `delta` SSE enquanto o processo roda — sem esperar o `close`. |
| **Gate-Free `<<LYA:ORCHESTRATE>>`** | CLI emite o marcador; backend detecta no stdout e despacha a missão in-process — sem rede, tool ou `.ps1`. |

---

## 🛡️ Segurança por Padrão

- **AES-256-GCM em repouso** — chaves API e tokens OAuth cifrados com IV aleatório por valor. Chave mestra em `~/.coreLyaDB/.master.key` (permissão `0600`). Nunca em texto plano.
- **Auth-gate no servidor** — bind `127.0.0.1` (fecha LAN) + allowlist de Origin/Host (fecha browser externo + DNS-rebinding) + guard no upgrade WebSocket + token de sessão. RCE remota impossível.
- **Path traversal bloqueado** — `isPathAllowed()` resolve ambos os lados com `path.resolve()` antes do `startsWith()`. Bypass via `../..` fechado na raiz. Symlink-escape bloqueado via `realpath`.
- **Sandbox de filesystem (default-deny)** — lista vazia = nega tudo (escopado ao `WORKSPACE_ROOT`). Toda operação validada contra `fs-allowed-paths.json`. `FS_SANDBOX_BLOCKED` retornado sem exceção.
- **Fila de ordens cifrada** — `engineKeys` na fila de missões são cifradas em disco (mesmo padrão do `accounts.json`). Rota pública usa `publicOrder()` — nunca vaza segredo.
- **Chave n8n cifrada** — chave n8n agora em AES-256-GCM em repouso; `GET /api/n8n/config` não devolve a chave (só `hasKey`).
- **open-url seguro** — `explorer.exe` sem shell + `isSafeExternalUrl` (validação de protocolo/domínio).
- **Metacaracteres escapados** — prompts nunca vão para `shell: true`; args sempre passam como array para `cross-spawn`.
- **domGuard** — patch do React para bloquear `insertBefore` injetado por extensões de navegador que causam crash.

---

## 🧠 Inteligência Multi-Agente

A arquitetura do COSMOS segue o padrão **Multi-Agent** da Anthropic (+90% vs single-agent para tarefas paralelas).

- **COSMOS + Stars 1–4** — orquestrador-CEO soberano lidera até 4 workers independentes (API / CLI / local), cada um com motor, chave e ferramentas próprios.
- **4 Modos de Operação** — `PLAN` (sem mutação), `ADM` (livre), `CEO` (autorização única), `Supervisor` (gate por ação). Enforcement real no servidor.
- **Protocolo Estruturado COSMOS↔Stars** — Stars encerram com envelope `<<LYA:OUTPUT>> {status, confidence, artifacts, errors[]}`. COSMOS lê o envelope diretamente — sem parsear prosa. Retrabalho com `errors[]` estruturados.
- **Visibilidade Soberana** — "Olho do COSMOS" na TopBar: estado de missão, equipe e build visíveis em **todas as abas** sem chamar ferramentas. Contexto global injetado no system prompt a cada turno (`snapshotContextBlock`).
- **`mission_rework` ilimitado** — COSMOS reprova e reexecuta qualquer Star com correção estruturada. Sem limite de rodadas.
- **Fila cifrada com override** — ordens enfileiradas aguardam vez; `mode: "override"` fura a fila imediatamente.
- **MCP dinâmico** — ferramentas de servidores MCP do usuário (JSON-RPC STDIO) registradas em tempo real via `tool-matrix.ts` e disponíveis nos dois paths (API e CLI).

### 🩹 Projeto CURE — a IDE conserta o próprio build sozinha (entregue e em uso)

> Eles têm correção. O Lya Studio Coder tem **CURE** — e ela lembra de cada mistake (erro do dia a dia) já corrigido.

- **Missão AUTO_FIX** — defina o alvo-verde (ex.: `npm run lint && npm test`) e a IDE entra no loop build → mistake → correção → rebuild até o comando passar de verdade (exit code real, nunca auto-relato da IA). Disjuntor anti-degeneração: escada de escalada (autocrítica → abordagem alternativa → cérebro maior → pausa soberana com diagnóstico) evita loop infinito queimando tokens. Engine-agnóstico — funciona com motor local, API ou CLI.
- **CURE SCAR** (scar: a marca que fica depois que um mistake é corrigido) — cada mistake curado vira um scar consultável no Core5: na próxima vez que o mesmo mistake aparecer, a receita conhecida entra no briefing e a cure sai mais rápida e mais barata. Verificado ao vivo: mesmo mistake plantado 2× → 2ª cure em **1 iteração** citando o scar. Receita que funciona ganha reforço; receita que falha vira **anti-receita** ("não tente isto de novo") — scar só nasce de verde real, nunca de alegação sem prova.
- **Auto Scar Fix** — prevenção custo-zero no composer: enquanto o Arquiteto digita, o sistema consulta a memória de cicatrizes usando **só embedding local do Core5** (ZERO chamada de modelo). Badge âmbar/vermelho aparece em tempo real com receita conhecida ou aviso de risco — **sem nunca bloquear o envio**.
- **Roteamento Planner→Executor** — classifica a ferida por custo (receita existente → executor pequeno; erro novo estruturado → médio; anti-receita sem solução → grande/regente). O COSMOS escala automaticamente o motor certo para cada tipo de problema.
- **MissionTracker com CURE** — painel rosa dedicado na interface: iterações, degrau d1–d4, alvo-verde, executor roteado, cicatriz citada, regente de plantão e pausa soberana — tudo ao vivo.
- **Motor Antigravity (Google Managed Agents)** — provider selecionável como motor de Star: agente autônomo que roda num sandbox remoto e devolve o resultado pronto. Porta endurecida após revisão adversária: pré-voo honesto, retry desabilitado, timeout + cancelamento propagados.
- **Tools MCP nas missões da equipe** — servidores MCP conectados no MCP Store ficam disponíveis para a equipe em missão (COSMOS + Stars), não só para o chat.
- **IDE como Servidor MCP** — Claude Code/Desktop/Cursor/Antigravity conectam-se ao LSCoder e consomem missão/SBB/CURE como tools (`lscoder_*`). JSON-RPC 2.0, zero dependência nova.

### 🧩 Extensões VS Code de verdade (v1.3.0)

- **Extension Host em runtime** — extensões `.vsix` reais (formato VS Code) instalam, ativam, desativam e desinstalam **sem rebuild e sem reiniciar a IDE**, rodando sobre `@codingame/monaco-vscode-api`. Prettier de verdade ativando e formatando o documento — não simulação.
- **Catálogo Open VSX na Loja** — busca no [Open VSX](https://open-vsx.org/) com **badge honesto por extensão** (JS provado · Declarativa · Não suportada): a Loja só promete o que realmente entrega. Importação de `.vsix` local também.
- **COSMOS opera as extensões** — cada comando registrado por uma extensão vira uma ferramenta (`ext__*`) que a equipe de IA invoca em missão: o resultado da extensão muda o desfecho da missão. Nenhuma outra IDE com Monaco faz isso.
- **Atualização pela IDE** — "Verificar atualização" em Configurações compara a versão local com a última release e leva direto à Microsoft Store ou ao GitHub para instalar.

### 🔤 Loja de Linguagens (v1.1.4)

- **Grammars TextMate** (offline, vscode-textmate + oniguruma WASM): realce de sintaxe para linguagens que o editor não trazia de fábrica (`.env`, `.prisma`). Herdam automaticamente todos os temas de cor.
- **Snippets** ativáveis por pacote (TypeScript, React Hooks, Python, HTML5).
- **Temas de ícone** do explorador (Studio, Emoji, Mono).
- **8+ temas de cor** embutidos: Lya Dark, Dracula, One Dark Pro, Tokyo Night, Monokai, Night Owl, Solarized Dark, GitHub Light, **Atom One Dark** (editor + skin UI).

### 🔜 Em breve — próximo bloco

- **Mais cobertura de extensões** — ampliar a faixa de extensões JS suportadas pelo Extension Host (linters, language servers) mantendo a transparência do badge honesto.

---

## 🧠 Memória de Longo Prazo — Core5 (768d)

A Lya não esquece o seu projeto quando você fecha a aba. O **Core5** é o motor de memória
embutido na IDE — 100% local, sem servidor externo obrigatório.

- **Embutido, sem dependência pesada.** Motor local (LanceDB) que roda dentro do próprio
  processo da IDE — sem exigir Python, Docker ou um serviço à parte rodando em segundo plano
  pra ter memória. O ChromaDB segue disponível como backend legado/alternativo.
- **768 dimensões, unificado.** Todos os motores (Core5 embutido + ChromaDB legado) usam
  **nomic-embed-text-v1.5 (768d)** como embedding padrão — qualidade uniforme, sem mix de
  dimensões. Cascata dimensão-safe: Gemini online 768d (grátis, chave auto-resolvida da
  Carteira) → nomic local 768d (llama.cpp, CPU, zero API) → guarda que descarta qualquer
  vetor com dimensão incompatível. Impossível corromper a base.
- **Velocímetro da Memória.** Arco de velocidade (emb/s) + latência + fonte ativa + barra
  de capacidade por backend — informação real da telemetria, não decoração.
- **Aprende com cada correção.** Todo mistake curado pelo Projeto CURE vira um scar
  consultável: da próxima vez que o mesmo mistake aparecer, a IA já entra sabendo a receita —
  mais rápido e mais barato. Scars só nascem de sucesso comprovado (exit code real),
  nunca de alegação da IA.
- **Captura contínua write-behind.** Decisões relevantes da conversa são enfileiradas e
  gravadas em lote (5 itens ou 10s) — a escrita na memória nunca bloqueia o chat.
  Guarda **anti-loop de feedback**: o que já veio de uma busca na memória nunca é regravado
  como memória nova. Piso de 40 chars corta fragmento trivial.
- **Continuidade entre ferramentas.** A Lya fala **MCP** com uma instância externa do Core5
  (ex.: Claude Code, Claude Desktop) — conectando de verdade via handshake real (o indicador
  de status só acende quando a conexão está provada, nunca por decoração). Compartilhe
  contexto do mesmo projeto entre a IDE e as CLIs de IA do dia a dia.
- **Living Border.** Borda com veio de luz rosa-lilás-neon (assinatura Lya) que gira/pulsa
  quando a memória está online e fica parada quando offline — a animação virou o indicador.
- **Sua instância, seus dados.** A memória vive na sua máquina; ela fica melhor quanto mais
  você usa a Lya — e nunca sai do seu controle.

### ❓ Core5 ou ChromaDB — qual eu uso?

- **Por padrão, só o Core5 roda** — motor embutido (LanceDB, 768d), sem instalar nada. Você abre a IDE e a memória já funciona.
- **ChromaDB é o motor legado** (o "antigo", que existia antes do Core5 e precisava de Python à parte). Continua disponível, mas só entra nas buscas se estiver explicitamente habilitado.
- **Dá pra usar os dois ao mesmo tempo.** A arquitetura suporta rodar Core5 + ChromaDB juntos: cada busca consulta todos os motores habilitados e mescla os resultados sem duplicar.
- **O embedding é o mesmo pros dois motores** — nomic-embed-text-v1.5 (768d) unificado, com cascata Gemini online → nomic local → guarda de dimensão. A chave fica na Carteira cifrada (1 lugar só).
- **Quando faz sentido ligar o ChromaDB?** Só se você já tinha uma base ChromaDB de uma versão anterior. Pra uso novo, o Core5 embutido já resolve sozinho.

---

## 🏗️ Arquitetura

Da casca desktop ao orquestrador soberano — toda a Lya em uma visão. **Tudo roda na sua máquina**: shell Tauri (Rust) → servidor Node local (auth-gate `127.0.0.1`) → COSMOS coordenando até 4 Stars com **CURE** (auto-correção + cicatrizes), memória vetorial 768d (Core5/LanceDB + cascata Gemini/nomic), **MCP bidirecional** (cliente + servidor), e segredos cifrados (AES-256-GCM) — sem nuvem no caminho crítico.

<div align="center">

![Arquitetura geral da Lya Studio Coder](assets/arquitetura-geral.png)

**Visão geral** — Tauri shell · React SPA · Node/Express · CURE · Core5 768d · MCP bidirecional · Extension Host (em testes) · 8+ provedores de IA.

</div>

### Pipeline de Orquestração COSMOS + CURE

Como uma ordem vira entrega: o COSMOS planeja (com **Auto Scar Fix** preventivo), distribui dinamicamente por capacidade, as Stars 1–3 executam em paralelo (com tools MCP dinâmico) e o COSMOS consolida e indexa — com a Star 4 (Cérebro/Memória) alimentando o **SBB — Shared Blackboard**. Em missões **AUTO_FIX**, o loop CURE opera com disjuntor, cicatrizes e roteamento por classificação de ferida.

<div align="center">

![Pipeline de orquestração COSMOS + CURE](assets/pipeline-orquestracao.png)

**Máquina de estados** — `PENDING → PLANNING → DISTRIBUTING → EXECUTING → CONSOLIDATING → INDEXING → DONE` · CURE: `verify → fingerprint → disjuntor d1–d4 → re-brief → fix`.

</div>

> 📐 Fonte editável: [`docs/ARQUITETURA-LYA-STUDIO-CODER.drawio`](docs/ARQUITETURA-LYA-STUDIO-CODER.drawio) (abra no [draw.io](https://www.drawio.com/)).

---

## 📸 A Lya por dentro

<div align="center">

![Visão geral da Lya Studio Coder](assets/screenshots/tela-geral.png)

**O cockpit completo** — explorador de arquivos, editor de código, terminal e chat COSMOS, lado a lado.

</div>

| | |
|:---:|:---:|
| ![Provedores](assets/screenshots/provedores.png) | ![Orquestração](assets/screenshots/orquestracao.png) |
| **🤖 Multi-provider** — Claude, Gemini, GPT, Ollama, Groq e mais, com status ao vivo. | **🎛️ Orquestração COSMOS** — agentes com motores independentes, status live. |
| ![Editor](assets/screenshots/editor.png) | ![Compilador](assets/screenshots/compilador.png) |
| **📝 Editor Monaco** — árvore de arquivos e editor profissional com IA inline. | **🏗️ Build & Preview** — build/lint reais, saída ao vivo. |
| ![n8n](assets/screenshots/n8n.png) | ![Skills](assets/screenshots/skills.png) |
| **🔗 n8n Live** — automação e pipelines RAG gerenciados pela IDE. | **🛒 Loja de Skills** — importe skills de qualquer repositório Git. |

---

## 📊 Mapa de Estabilidade

Transparência total. Cada módulo tem nota baseada em testes reais e uso em produção.

### ✅ Estável — pronto para o dia a dia

| Funcionalidade | Estabilidade | Status |
|---|:---:|---|
| **Interface Trilíngue (PT/EN/ES)** | `97%` | 🟢 Estável — 1698 chaves i18n, 0 hardcoded |
| Chat Multi-Provider | `96%` | 🟢 Estável |
| **COSMOS — Orquestração multi-agente** | `96%` | 🟢 Estável — benchmark 9.6/10 |
| Editor Monaco + TextMate + Snippets | `94%` | 🟢 Estável |
| **Memória Core5 768d (embutida)** | `93%` | 🟢 Estável — LanceDB + nomic 768d + Velocímetro |
| Zoom Global | `92%` | 🟢 Estável |
| Explorer + Find in Files | `91%` | 🟢 Estável |
| **Loja de Skills + Linguagens** | `91%` | 🟢 Estável — import Git real + temas + grammars |
| Terminal Integrado (PTY) | `90%` | 🟢 Estável |
| App Desktop (.exe / .msi / .msix) | `90%` | 🟢 Estável |
| **Embeddings 768d (Cascata)** | `90%` | 🟢 Estável — Gemini online → nomic local → guarda |
| Lya Publisher (Microsoft Store) | `88%` | 🟢 Estável |
| Compilador & Build | `87%` | 🟢 Estável |
| Run & Debug (Node + Python) | `85%` | 🟢 Estável |
| n8n Live + Pipeline RAG | `84%` | 🟢 Estável |

### 🧪 Em testes — use e nos ajude a melhorar

| Funcionalidade | Estabilidade | Status |
|---|:---:|---|
| **CURE — Auto-Correção (AUTO_FIX)** | `82%` | 🧪 Pré-lançamento — CURE SCAR + roteamento funcionais |
| **MCP Bidirecional (cliente + servidor)** | `80%` | 🧪 Pré-lançamento |
| **Antigravity (Google Managed Agents)** | `78%` | 🧪 Pré-lançamento |
| Config. Provedores Remotos | `76%` | 🧪 Pré-lançamento |
| Preview ao Vivo | `73%` | 🧪 Pré-lançamento |
| Túnel de Compartilhamento | `70%` | 🧪 Pré-lançamento |

> 💡 Módulo `🧪` com problema? **[Abra um relato](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new/choose)** e ajude a levar a nota acima de 85%.

---

## ⬇️ Download

> 🚀 **Versão mais recente: [v1.3.0 — Projeto Fábrica](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.3.0)** (publicada pelo próprio serviço de release da IDE, o Lya Build Releases).

> 🏪 **Também na Microsoft Store** — instale com um clique, sem aviso de SmartScreen e com atualização automática: **[apps.microsoft.com → Lya Studio Coder](https://apps.microsoft.com/detail/9nrw0dwtw9z8?hl=pt-BR&gl=BR)**.
> A build da Store é a **[v1.1.4, certificada e assinada pela própria Microsoft](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.1.4)** — a v1.3.0 entra na Store assim que concluir a certificação do Partner Center.

> 📦 **winget** — em moderação na [winget-pkgs](https://github.com/microsoft/winget-pkgs/pull/400151). Assim que aprovado:
> ```powershell
> winget install StudioCodeAI.LyaStudioCoder
> ```

Prefere o instalador direto? A versão mais recente está sempre em **[Releases](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)**.

| Instalador | Para quem | Tamanho | SHA-256 |
|---|---|:---:|---|
| [**`Lya Studio Coder_1.3.0_x64-setup.exe`**](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/download/v1.3.0/Lya.Studio.Coder_1.3.0_x64-setup.exe) | Maioria dos usuários — instala por usuário, sem admin | ~51 MB | `99BC90C7…1067A57526` |
| [**`Lya Studio Coder_1.3.0_x64_en-US.msi`**](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/download/v1.3.0/Lya.Studio.Coder_1.3.0_x64_en-US.msi) | Ambientes corporativos / implantação via política | ~76 MB | `C8419C0F…D5364015` |
| [**`LyaStudioCoder_1.3.0.0_x64.msix`**](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/download/v1.3.0/LyaStudioCoder_1.3.0.0_x64.msix) | Microsoft Store / sideload com identidade Partner Center | ~81 MB | `699BBD78…911EF227` |

**Requisitos:** Windows 10/11 x64 · Runtime embutido · Sem dependências externas

<details>
<summary>🔐 SHA-256 completos para verificação</summary>

```
Lya Studio Coder_1.3.0_x64-setup.exe
99BC90C753FF8BF2EB09CAF277E7984ED81D5A4BEBEBC44D11A7091067A57526

Lya Studio Coder_1.3.0_x64_en-US.msi
C8419C0F25DAE1D2A8B89B98610B9832065888A6CF3E1A0E693C5C82D5364015

LyaStudioCoder_1.3.0.0_x64.msix
699BBD788532C7DB5E39A6F4F8320A0527EB4591295B489EBC5B4A1F911EF227
```

Verificar no PowerShell: `Get-FileHash "arquivo" -Algorithm SHA256`
</details>

> ⚠️ **SmartScreen:** o `.exe`/`.msi` pode exibir aviso de "editor desconhecido" — clique em **Mais informações → Executar assim mesmo**. Quer instalação sem nenhum aviso? Use a **[Microsoft Store](https://apps.microsoft.com/detail/9nrw0dwtw9z8?hl=pt-BR&gl=BR)** — o pacote MSIX é assinado pela própria Microsoft na certificação. A autoria e integridade de cada instalador ficam registradas com o **SHA-256** para conferência.

📖 Guia passo a passo: [docs/INSTALACAO.md](docs/INSTALACAO.md) · ⚡ Em 5 minutos: [docs/QUICK_START.md](docs/QUICK_START.md)

---

## 🔒 Privacidade

- **Local-first por princípio.** Banco vetorial, modelos, histórico e configurações ficam em `~/.coreLyaDB` — só na sua máquina.
- **Suas chaves, seu controle.** Nenhuma chave de API é enviada para nós.
- **Sem telemetria oculta.** Módulos com conexão à internet são explícitos e opcionais.

---

## 🗺️ Roadmap

- [x] ✅ v1.0.0 — Lançamento público da IDE
- [x] ✅ v1.0.1 — COSMOS soberano no chat, custo por token e correções
- [x] ✅ v1.0.2 — Toggles de modo Plan/ADM/CEO/Supervisor, reset de estado, usage real, FAQ integrado
- [x] ✅ v1.1.0 — COSMOS Cérebro Gigante: corredor CLI invencível, protocolo estruturado COSMOS↔Stars, Olho do COSMOS, Lya Publisher
- [x] ✅ v1.1.2 — Distribuição Dinâmica (Star 4 Cérebro & Memória + SBB — Shared Blackboard), interface trilíngue PT/EN/ES, quick-launch de CLIs
- [x] ✅ v1.1.3 — Interface 100% traduzida (PT/EN/ES), UX do chat, fix crítico do Lya Publisher
- [x] ✅ Memória embedded Core5 768d (sem Python + ChromaDB) — nomic-embed-text-v1.5 unificado, cascata dimensão-safe, Velocímetro
- [x] ✅ Ollama Cloud + Local providers — funcionais e em uso diário
- [x] ✅ Projeto CURE completo — AUTO_FIX, CURE SCAR, Auto Scar Fix, roteamento Planner→Executor, MissionTracker
- [x] ✅ Motor Antigravity (Google Managed Agents) — porta CLI + API endurecida
- [x] ✅ MCP Bidirecional — IDE como cliente MCP + IDE como servidor MCP (6 tools `lscoder_*`)
- [x] ✅ Loja de Linguagens — Grammars TextMate, snippets, icon themes, 8+ temas de cor
- [x] ✅ Segurança: auth-gate RCE, sandbox default-deny, symlink-escape, chave n8n cifrada
- [x] ✅ v1.1.4 — Consolidação: CURE completo, Core5 768d, MCP bidirecional, Loja de Linguagens, hardening de segurança · **🏪 certificada na Microsoft Store**
- [x] ✅ **v1.3.0 — Projeto Fábrica** — testes E2E industriais, RAG do código-base + histórico da IDE, agentes de QA sob o COSMOS, Tela Inicial + Explorer forte, Open VSX real (`.vsix`/URL), e o **Lya Build Releases** (a IDE publica a própria release) · **🚀 versão mais recente**
- [ ] 🏪 v1.3.0 na Microsoft Store — em certificação no Partner Center
- [ ] 🔄 Mais cobertura de extensões JS (linters, language servers)
- [ ] 🎨 Identidade visual definitiva da Lya
- [ ] 🍎 Build para macOS / Linux

Acompanhe em [Discussions → Roadmap](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions) e no [CHANGELOG](CHANGELOG.md).

---

## 🌍 Comunidade

**A Lya é construída com e para a comunidade.**

| Você quer... | Canal |
|---|---|
| 🐞 Reportar um bug | [Issues → Relatar problema](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new/choose) |
| 💡 Sugerir uma feature | [Discussions → Feature Ideas](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions/new?category=feature-ideas) |
| ❓ Tirar uma dúvida | [Discussions → Q&A](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions/new?category=q-a) |
| 🗣️ Conversar e trocar ideias | [Discussions](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions) |
| 📖 Guia completo da comunidade | [COMMUNITY.md](COMMUNITY.md) |

> 📌 Todo relato é lido, etiquetado e respondido. Sugestões viram roadmap. Bugs viram correções. **Você é ouvido.**

---

## ☕ Apoie o projeto

A Lya é construída com dedicação — e com muito token de IA. Se ela te ajuda no dia a dia, considere apoiar:

<div align="center">

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/lyastudiocoder)

**Cada café vira código. 💛**

</div>

---

---

<div align="center">

➡️ **Pronto para consolidar seu fluxo de IA?**

[![BAIXE A VERSÃO MAIS RECENTE](https://img.shields.io/badge/⬇️_BAIXE_A_VERSÃO_MAIS_RECENTE-Windows_x64_·_v1.3.0-7c3aed?style=for-the-badge&logoColor=white)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)

*Um cockpit. Todas as suas IAs. Sua máquina. Seu controle.*

</div>

---

## 📄 Licença & Distribuição

**Lya Studio Coder** é distribuído como **software proprietário e gratuito** para uso pessoal e avaliação. O código-fonte não é aberto. Os instaladores são publicados exclusivamente via **[GitHub Releases](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases)**. Não baixe a Lya de outras fontes. Veja [LICENSE](LICENSE).

---

<div align="center">

⭐ **Gostou? Dê uma estrela — ajuda o projeto a crescer!**

<br/>

*Feito com 🌌 para quem orquestra inteligência.*

*Se você pensa, você executa. Se você executa, você indexa. Se você indexa, você evolui.*

<br/>

**[Studio Code AI](https://github.com/StudioCodeAI) · Ponta Grossa, Brasil 🇧🇷**

</div>
