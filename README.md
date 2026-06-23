<div align="center">

<img src="assets/lya-logo.jpg" alt="Lya Studio Coder" width="220" />

<br/>

# 🌌 Lya Studio Coder: Sua central de orquestração multi-IA

### 94% estável. 100% local. Zero vendor lock-in.

*Claude · Gemini · GPT · Ollama — um cockpit. Muitas IAs. Nenhum vendor lock-in.*

<br/>

![Estabilidade 94%](https://img.shields.io/badge/Estabilidade-94%25-22c55e?style=flat-square) ![Local-First](https://img.shields.io/badge/Local--First-100%25-7c3aed?style=flat-square) ![Multi-Agente](https://img.shields.io/badge/Multi--Agente-COSMOS-ff0055?style=flat-square)

<br/>

[![⬇️ Download Grátis — Windows x64](https://img.shields.io/badge/⬇️_DOWNLOAD_GRÁTIS-Windows_x64_·_v1.1.0-7c3aed?style=for-the-badge&logoColor=white)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)

<br/>

[![Versão](https://img.shields.io/badge/versão-1.1.0-7c3aed?style=flat-square)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)
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

A Lya é o cockpit que elimina esse atrito:

- 🎯 **Um ambiente.** Claude, Gemini, GPT e Ollama na mesma tela — sem troca de aba.
- 🧠 **Memória real.** O NeuroCORE indexa seu projeto localmente. A IA "lembra" entre sessões.
- ⚡ **COSMOS soberano.** Lance até 4 agentes em paralelo, acompanhe a entrega de cada um ao vivo, mande refazer se não serviu — direto no chat.
- 🔒 **100% na sua máquina.** Nenhum dado seu toca nossos servidores. Zero telemetria oculta.

> **Você traz as chaves. A Lya traz a inteligência coordenada.**

---

## ✨ Funcionalidades

Cada módulo é uma capacidade real, testada e em uso — não maquete.

| 🧩 Módulo | O que entrega |
|---|---|
| 🤖 **Chat Multi-Provider** | Claude, Gemini, GPT e Ollama na mesma sala. Streaming cancelável, markdown, anexos, **gravação de voz**, function-calling real e histórico completo. |
| 🎛️ **COSMOS — Orquestração** | Até 4 agentes de IA em paralelo (API, CLI, local). Cada slot com motor independente, status ao vivo e contexto compartilhado. |
| 🧠 **NeuroCORE — Memória Vetorial** | ChromaDB local. Classifica e indexa documentos, notas e histórico em 4 coleções. A IA "lembra" do seu projeto entre sessões. |
| 📝 **Editor Monaco** | O mesmo motor do VS Code. IntelliSense, F12, multi-cursor, diff de Git, **Ctrl+K** edita código com IA inline. |
| 🔍 **Explorer + Find in Files** | Árvore VS Code-like, busca por nome **e por conteúdo** (regex, case-sensitive), preview. |
| 💻 **Terminal Integrado** | PTY nativo (node-pty) real. Rode npm, python, git, qualquer coisa — sem sair da IDE. |
| 🏗️ **Build & Compilador** | Build/run reais com saída ao vivo. Detecta automaticamente o comando do projeto (npm, gradle, tsc, python). |
| 🐞 **Run & Debug** | Depuração real de **Node.js** (CDP) e **Python** (debugpy/DAP): breakpoints, step, variáveis, call stack. |
| 🔗 **n8n Live + Pipeline RAG** | Servidor n8n gerenciado + editor de pipeline RAG que recupera memória, dispara LLM com contexto e publica resultado. |
| 🔒 **LSCode Keychain** | Gerenciador centralizado de chaves API. Fonte única da verdade para todos os provedores — seus segredos ficam só na sua máquina. |
| 🛒 **Loja de Skills** | Importe skills de repositórios Git. Instale capacidades sob demanda. |
| 🖥️ **Desktop Self-Contained** | `.exe` e `.msi` que embute o runtime. **Não exige Node.js instalado.** Instala por usuário, sem privilégio de admin. |
| 🚀 **Lya Publisher** | Dashboard integrado para publicar na **Microsoft Store** sem sair da IDE. Build Tauri + MSIX + upload SAS + Partner Center API em um clique. Histórico de submissões, screenshots drag-and-drop, SSE ao vivo. |

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
- **Path traversal bloqueado** — `isPathAllowed()` resolve ambos os lados com `path.resolve()` antes do `startsWith()`. Bypass via `../..` é fechado na raiz.
- **Fila de ordens cifrada** — `engineKeys` na fila de missões são cifradas em disco (mesmo padrão do `accounts.json`). A rota pública usa `publicOrder()` — nunca vaza segredo.
- **Metacaracteres escapados** — prompts do usuário nunca vão para `shell: true`; args sempre passam como array para `cross-spawn`.
- **domGuard** — patch do React para bloquear `insertBefore` injetado por extensões de navegador que causam crash.
- **Sandbox de filesystem** — toda operação de leitura/escrita via agente é validada contra `fs-allowed-paths.json`. `FS_SANDBOX_BLOCKED` retornado sem exceção.

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

---

## 🏗️ Arquitetura

Da casca desktop ao orquestrador soberano — toda a Lya em uma visão. **Tudo roda na sua máquina**: shell Tauri (Rust) → servidor Node local → COSMOS coordenando até 4 Stars, com memória vetorial (ChromaDB) e segredos cifrados (AES-256-GCM) — sem nuvem no caminho crítico.

<div align="center">

![Arquitetura geral da Lya Studio Coder](assets/arquitetura-geral.png)

**Visão geral** — Tauri shell · React SPA · Node/Express · módulos críticos · provedores de IA.

</div>

### Pipeline de Orquestração COSMOS

Como uma ordem vira entrega: o COSMOS planeja, distribui dinamicamente por capacidade, as Stars 1–3 executam em paralelo e o COSMOS consolida e indexa — com a Star 4 (Cérebro/Memória) alimentando o Quadro Negro compartilhado para eliminar alucinação.

<div align="center">

![Pipeline de orquestração COSMOS](assets/pipeline-orquestracao.png)

**Máquina de estados da Missão** — `PENDING → PLANNING → DISTRIBUTING → EXECUTING → CONSOLIDATING → INDEXING → DONE`.

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

Transparência total. Cada módulo tem nota baseada em testes reais.

### ✅ Estável — pronto para o dia a dia

| Funcionalidade | Estabilidade | Status |
|---|:---:|---|
| Chat Multi-Provider | `94%` | 🟢 Estável |
| Editor Monaco | `92%` | 🟢 Estável |
| Zoom Global | `92%` | 🟢 Estável |
| Explorer + Find in Files | `90%` | 🟢 Estável |
| Terminal Integrado (PTY) | `90%` | 🟢 Estável |
| **COSMOS — Orquestração multi-agente** | `93%` | 🟢 Estável |
| App Desktop (.exe / .msi) | `88%` | 🟢 Estável |
| Memória NeuroCORE | `87%` | 🟢 Estável |
| Compilador & Build | `85%` | 🟢 Estável |
| Run & Debug (Node + Python) | `83%` | 🟢 Estável |

### 🧪 Em testes — use e nos ajude a melhorar

| Funcionalidade | Estabilidade | Status |
|---|:---:|---|
| Lya Publisher (Microsoft Store) | `78%` | 🧪 Pré-lançamento |
| n8n Live + Pipeline RAG | `82%` | 🧪 Pré-lançamento |
| Loja de Skills / Capacidades | `80%` | 🧪 Pré-lançamento |
| Embeddings Nativos | `76%` | 🧪 Pré-lançamento |
| Preview ao Vivo | `73%` | 🧪 Pré-lançamento |
| Config. Provedores Remotos | `74%` | 🧪 Pré-lançamento |
| Túnel de Compartilhamento | `70%` | 🧪 Pré-lançamento |

> 💡 Módulo `🧪` com problema? **[Abra um relato](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new/choose)** e ajude a levar a nota acima de 85%.

---

## ⬇️ Download

A versão mais recente está sempre em **[Releases](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)**.

| Instalador | Para quem | Tamanho | SHA-256 |
|---|---|:---:|---|
| [**`Lya Studio Coder_1.1.0_x64-setup.exe`**](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/download/v1.1.0/Lya.Studio.Coder_1.1.0_x64-setup.exe) | Maioria dos usuários — instala por usuário, sem admin | ~46 MB | `E3A2DBD4…97DC043` |
| [**`Lya Studio Coder_1.1.0_x64_en-US.msi`**](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/download/v1.1.0/Lya.Studio.Coder_1.1.0_x64_en-US.msi) | Ambientes corporativos / implantação via política | ~70 MB | `EB80384A…BFEF0D` |
| [**`LyaStudioCoder_1.1.0.0_x64.msix`**](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/download/v1.1.0/LyaStudioCoder_1.1.0.0_x64.msix) | Microsoft Store / sideload com identidade Partner Center | ~76 MB | `C48EF57C…33E3D94` |

**Requisitos:** Windows 10/11 x64 · Runtime embutido · Sem dependências externas

<details>
<summary>🔐 SHA-256 completos para verificação</summary>

```
Lya Studio Coder_1.1.0_x64-setup.exe
E3A2DBD43534A3073909C1CCC4E998C50EB28AA1C4AA1CEEC10CC19F597DC043

Lya Studio Coder_1.1.0_x64_en-US.msi
EB80384AEA6D363E7758AAFF33B865F2DC578959C966608D02746F92C4BFEF0D

LyaStudioCoder_1.1.0.0_x64.msix
C48EF57C9F9B6E8972D82967CDBEF1CE9E13E853EE543401B13F6069033E3D94
```

Verificar no PowerShell: `Get-FileHash "arquivo" -Algorithm SHA256`
</details>

> ⚠️ **SmartScreen:** a assinatura Authenticode está em processo de certificação (EV/OV). O Windows pode exibir aviso de "editor desconhecido" — clique em **Mais informações → Executar assim mesmo**. A autoria e integridade ficam registradas na [Declaração de Propriedade](docs/DECLARACAO-PROPRIEDADE-1.0.1.md) com o **SHA-256** de cada instalador para conferência.

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
- [x] ✅ v1.0.2 — Toggles de modo Plan/ADM/CEO/Supervisor, reset de estado, usage real, FAQ integrado (ver [CHANGELOG](CHANGELOG.md))
- [x] ✅ v1.1.0 — COSMOS Cérebro Gigante: corredor CLI invencível, protocolo estruturado COSMOS↔Stars, Olho do COSMOS, Lya Publisher (Microsoft Store)
- [ ] 🔄 v1.2.0 — Authenticode EV/OV + smoke suite automatizada + assinatura de código ICP-Brasil
- [ ] 🎨 Identidade visual definitiva da Lya
- [ ] 🍎 Build para macOS / Linux
- [ ] 🧩 Memória embedded (sem Python + ChromaDB)
- [ ] 🌐 Ollama Cloud provider
- [ ] 🏪 Marketplace de Skills

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

[![BAIXE A VERSÃO 94% ESTÁVEL](https://img.shields.io/badge/⬇️_BAIXE_A_VERSÃO_94%25_ESTÁVEL-Windows_x64_·_v1.1.0-7c3aed?style=for-the-badge&logoColor=white)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)

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
