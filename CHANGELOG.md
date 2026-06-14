# Changelog

Todas as mudanças relevantes do **Lya Studio Coder** são registradas aqui.
O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o versionamento é [SemVer](https://semver.org/lang/pt-BR/).

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

[1.0.1]: https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.0.1
[1.0.0]: https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.0.0
