# Changelog

Todas as mudanças relevantes do **Lya Studio Coder** são registradas aqui.
O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o versionamento é [SemVer](https://semver.org/lang/pt-BR/).

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

[1.0.2]: https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.0.2
[1.0.1]: https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.0.1
[1.0.0]: https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.0.0
