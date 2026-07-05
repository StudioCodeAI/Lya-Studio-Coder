# Lya Studio Coder — Guia do Desenvolvedor

**IDE local-first para orquestração de IA.** `v1.1.2`  
Claude, Gemini, GPT e Ollama num único ambiente — com orquestração multi-agente (COSMOS + Stars), memória vetorial, automação n8n, terminal integrado e interface trilíngue (PT/EN/ES).

> 🚨 **Atenção:** Veja as [Regras de Lançamento e Winget](RELEASE_PROCESS.md) antes de criar uma nova versão.

---

## O que é

Lya Studio Coder é um ambiente de desenvolvimento pessoal construído para quem trabalha com IA no dia a dia. Ele combina:

- **Chat multi-provider** — Gemini, Claude, GPT e modelos Ollama locais na mesma interface
- **NeuroCORE** — memória de longa duração baseada em ChromaDB; classifica e indexa automaticamente documentos, notas e histórico
- **Mission Control** — kanban de tarefas com execução real por agentes de IA
- **n8n Live** — integração direta com workflows de automação
- **Terminal integrado** — PTY nativo, sem sair do ambiente
- **Editor de arquivos** — sidebar VS Code-like com busca, preview e ícones por tipo

Tudo roda localmente. Seus dados ficam na sua máquina.

---

## Requisitos

| Componente | Versão mínima | Para quê | Obrigatório |
|---|---|---|---|
| **Node.js** | 18+ (testado em 22) | runtime da IDE | **Sim** |
| **npm** | 9+ | gerência de pacotes | **Sim** |
| **Python + pip** | 3.8+ | rodar o ChromaDB | Para a memória (NeuroCORE) |
| **ChromaDB** | qualquer | banco vetorial da memória | Para a memória — `pip install chromadb` |
| **Ollama** | qualquer | **orquestração** (agentes LLM locais, GPU) | Recomendado p/ agentes locais |
| Rust + Cargo | 1.70+ | build do `.exe` (Tauri) | Apenas para empacotar |

> **A IDE é local-first e gerencia os motores sozinha.** Ela cria a pasta de dados **`~/.coreLyaDB`** (no seu perfil de usuário), guarda o banco e os modelos lá, e **sobe o servidor ChromaDB automaticamente** ao iniciar — você só precisa ter o `chromadb` instalado (`pip install chromadb`). Sem ChromaDB, o app funciona normalmente; apenas a memória fica offline.
>
> **Embeddings NÃO usam o Ollama** — têm motor próprio (nativo CPU / online / JS), deixando a GPU 100% livre para a orquestração do Ollama. Veja [Motores de embedding](#motores-de-embedding).

### Programas e motores que você precisa baixar

| O quê | Como | Quando |
|---|---|---|
| **ChromaDB** (banco da memória) | `pip install chromadb` | Para usar a memória de longa duração. A IDE sobe o servidor sozinha em `~/.coreLyaDB/chroma`. |
| **Motor de embedding nativo** (llama.cpp) | Botão **Instalar motor** + **Baixar modelo** em *Memória Deep → Motores* | Opcional — roda offline na CPU. O modelo GGUF (~24 MB) vai p/ `~/.coreLyaDB/models/embeddings`. |
| **Ollama** (agentes locais) | [ollama.com/download](https://ollama.com/download) + `ollama pull <modelo>` | Para rodar agentes de IA localmente na GPU (orquestração). |

Nada disso bloqueia o uso básico: sem motor nativo, os embeddings caem no **Transformers.js** (JS, zero-install, baixado na 1ª chamada).

---

## Instalação

### 1. Clone o repositório

```bash
git clone <url-do-repo>
cd lya-studio-coder
```

### 2. Setup interativo

```bash
npm run setup
```

Detecta seu ambiente, instala dependências, cria o `.env` com as chaves que você informar e verifica ChromaDB e Ollama. Menos de 2 minutos.

### 3. Inicie

```bash
npx tsx server.ts
```

Abra: [http://localhost:3000](http://localhost:3000)

> **Por que não `npm run dev`?** O `tsx watch` reinicia o processo no HMR e derruba
> sessões PTY abertas, causando crash no terminal integrado. `npx tsx server.ts`
> (sem watch) é o caminho estável.

---

## Configuração manual (alternativa ao setup)

Copie `.env.example` para `.env` e preencha as variáveis:

```bash
cp .env.example .env   # Linux/Mac
copy .env.example .env # Windows
```

Variáveis principais:

```env
GEMINI_API_KEY=""           # obter em aistudio.google.com
ANTHROPIC_API_KEY=""        # opcional
OPENAI_API_KEY=""           # opcional
CHROMADB_URL="http://localhost:8000"   # opcional — só p/ apontar a um ChromaDB externo
```

> Os embeddings **não** usam variável de ambiente — são configurados na IDE em *Memória Deep → Motores* e persistidos em `embedding-config.json`. O caminho de dados (`~/.coreLyaDB`) é fixo e conhecido pela IDE.

---

## NeuroCORE — Memória de Longa Duração

O NeuroCORE classifica e armazena tudo em 4 coleções vetoriais (heurística de palavras-chave, igual ao NEURO_CORE original):

| Coleção | O que vai aqui |
|---|---|
| Episódico | histórico, logs, conversas, relatórios |
| Semântico | conceitos, lições, decisões de arquitetura |
| Procedural | tutoriais, workflows, scripts |
| Identidade | manifestos, princípios, persona |

### Como injetar memórias (3 formas)

1. **Pasta de entrada (inbox)** — solte um arquivo `.md`/`.txt`/`.json`/`.ts`/`.js`/`.py` em **`~/.coreLyaDB/memory-inbox`**. O watcher classifica → ingere → move o arquivo para `_processed`. (Mesma lógica de "pasta de memória" do NEURO_CORE antigo, agora no caminho canônico.)
2. **Pela IDE** — *Memória Deep → Inbox* → "escrever direto" (cria o arquivo na inbox) ou ingestão imediata por tópico + conteúdo.
3. **Pastas monitoradas** — *Memória Deep → Inbox → Pastas Monitoradas*: adicione qualquer pasta; os arquivos são indexados **no lugar** (dedup por hash, sem mover).

Busca semântica em **Memória Deep → Busca**.

### ChromaDB — a IDE sobe sozinha

Basta ter o ChromaDB instalado:

```bash
pip install chromadb
```

Ao iniciar, a IDE **roda o servidor ChromaDB automaticamente** em `~/.coreLyaDB/chroma` (porta 8000) — você não precisa rodar `chroma run` na mão. O log fica em `~/.coreLyaDB/chroma.log`. Para apontar a um ChromaDB externo já em execução, use *Memória Deep → Config* (ou `CHROMADB_URL`).

---

## Ollama — Agentes Locais (orquestração)

Ollama roda modelos de linguagem locais com aceleração GPU. Na Lya, ele é dedicado à **orquestração** (os agentes de IA) — **não** faz embeddings, justamente para deixar a GPU livre para os agentes.

**Download:** [https://ollama.com/download](https://ollama.com/download) (~200MB)

```bash
ollama pull deepseek-r1:14b      # exemplo de modelo de agente
```

Sem Ollama, você ainda usa os provedores em nuvem (Gemini, Claude, GPT) normalmente.

---

## Motores de embedding

A memória precisa de embeddings (vetores 384d). Você escolhe o motor em **Memória Deep → Motores** — todos unificados em **384 dimensões**, então são intercambiáveis no mesmo banco:

| Modo | Motor | Instalação | GPU? |
|---|---|---|---|
| **Nativo** (padrão) | `llama.cpp` via `node-llama-cpp` + GGUF `all-MiniLM-L6-v2` | Botões *Instalar motor* / *Baixar modelo* na IDE (opcional, sob demanda) | **Não** — roda na CPU (GPU fica p/ o Ollama) |
| **Online** | Gemini `gemini-embedding-001` @384d **ou** OpenAI `text-embedding-3-small` @384d | só a chave de API | — |
| **JS nativo** (fallback) | `Transformers.js` `all-MiniLM-L6-v2` | zero-install (~22 MB na 1ª chamada) | Não |

O modelo nativo (GGUF ~24 MB) é baixado para `~/.coreLyaDB/models/embeddings`. Se o motor nativo não estiver disponível, a IDE cai automaticamente no **Transformers.js** (mesmos 384d).

---

## Comandos

```bash
npm run setup           # setup interativo (primeira vez)
npx tsx server.ts       # desenvolvimento (porta 3000) — caminho estável, sem watch
npm run build           # build de produção (vite + esbuild → runtime/server.cjs)
npm run start           # inicia build de produção
npm run lint            # verifica tipos TypeScript (obrigatório após cada mudança)

# Testes (gate de release: todos verdes)
npm run test:core       # 66 testes — lógica da orquestração COSMOS
npm run test:attach     # 24 testes — anexos multimodais
npm run test:units      # 83 testes — módulos core

# Utilitários
npm run ping            # verifica engines online
npm run try             # smoke de orquestração local
```

---

## Build Tauri (.exe instalável)

Requer [Rust](https://rustup.rs/) instalado.

```bash
npm run build
npx tauri build
```

Os instaladores `.exe` (NSIS) e `.msi` (WiX) são gerados em
`src-tauri/target/release/bundle/`. O pacote `.msix` para a Microsoft Store é
gerado por `scripts/build-msix.ps1` (self-contained: embute `node.exe` + runtime)
ou pelo **Lya Publisher** direto na IDE.

---

## Stack

- **Frontend:** React 19 + Vite 6 + Tailwind v4 + TypeScript
- **Backend:** Express + WebSocket (node-pty para terminal PTY)
- **Memória:** ChromaDB + Ollama / Gemini / Transformers.js
- **Desktop:** Tauri 2 (opcional)
