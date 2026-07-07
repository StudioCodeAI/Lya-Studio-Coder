# ✨ Funcionalidades em Detalhe

Avaliação por tópico de cada módulo do **Lya Studio Coder**, com a respectiva
nota de estabilidade. Módulos abaixo de 80% estão em **🧪 Testes Pré-lançamento**.

---

## 🤖 Chat Multi-Provider — `92%` 🟢

A sala central da Lya. Conversa com vários modelos sem trocar de janela.

- Provedores: **Gemini, Claude, GPT (OpenAI-compat) e Ollama** local.
- Streaming de resposta **cancelável** (botão Parar).
- **Markdown + realce de sintaxe** nas respostas; blocos de código com copiar/rodar.
- Anexos e **gravação de voz** (com player no preview).
- **Ferramentas reais do agente** com liga/desliga por ferramenta.
- Dois temas: **COSMOS** (neon) e **OPUS** (clay) — você escolhe.
- Atalhos de envio configuráveis (Enter / Ctrl+Enter).

## 📝 Editor de Código (Monaco) — `90%` 🟢

O mesmo motor do VS Code, integrado.

- IntelliSense, **F12 / Go to Definition**, find references, multi-cursor (Ctrl+D).
- Minimap, realce de **diff do Git** na régua.
- **Ctrl+K**: edição de código com IA, com **diff lado a lado** (Aplicar/Descartar).

## 🔍 Explorer + Find in Files — `88%` 🟢

- Árvore de arquivos estilo VS Code, ícones por tipo.
- Busca por **nome** e por **conteúdo** (regex e case-sensitive), com trechos e
  número de linha; clicar abre o arquivo.

## 💻 Terminal Integrado — `88%` 🟢

- **PTY nativo** (node-pty) — terminal de verdade dentro da IDE.
- Executa o botão ▶ do editor diretamente no terminal.

## 🖥️ App Desktop (.exe / .msi) — `85%` 🟢

- Instalador **self-contained**: o runtime vem embutido, não exige Node.
- Instala por usuário (sem admin) no `.exe`; `.msi` para implantação corporativa.

## 🧠 NeuroCORE — Memória Vetorial — `84%` 🟢

- Memória de longa duração em **ChromaDB**, embeddings **384d**.
- 4 coleções: episódico, semântico, procedural, identidade.
- Ingestão por **inbox**, **pastas monitoradas** (dedup por hash) ou direto na IDE.
- Busca semântica.
- *Requer Python + ChromaDB na máquina.*

## 🎛️ Orquestração de Agentes — `82%` 🟢

- Mission Control kanban; cada agente roda num **motor real** (Local/Online/CLI).
- Status **online/offline ao vivo** por motor.

## 🏗️ Compilador & Simulador — `82%` 🟢

- **Build e run reais** com saída de terminal **ao vivo** (streaming).
- Detecta o comando do projeto (npm, gradle, tsc, python).

## 🐞 Run & Debug — `80%` 🟢

- Depuração real de **Node.js** (CDP) e **Python** (debugpy/DAP).
- Breakpoints, step over/into/out, variáveis e call stack.

---

# 🧪 Testes Pré-lançamento (< 80%)

> Funcionam e estão em uso, mas ainda endurecendo. Seu feedback acelera a subida.

## 🔗 n8n Live + Pipeline RAG — `78%` 🧪

- Servidor **n8n gerenciado** pela IDE (instalar/iniciar/parar).
- Editor de **pipeline RAG**: recupera memória → dispara LLM com contexto → publica.

## 🛒 Loja de Skills / Capacidades / Contas — `76%` 🧪

- Importa **skills** de repositórios Git.
- Instala **capacidades de dev** sob demanda.
- Conecta **contas** (Claude, Gemini, OpenAI, GitHub, Drive, SMTP) com teste real.

## 🧮 Embeddings Nativos (llama.cpp) — `75%` 🧪

- Motor de embedding **offline na CPU** (GGUF all-MiniLM-L6-v2, 384d).
- Fallback automático para Transformers.js (zero-install).

## 👁️ Preview ao Vivo — `72%` 🧪

- Dev server gerenciado + **iframe** da interface dentro da IDE (molde celular/desktop).

## 🌐 Túnel de Compartilhamento (Cloudflare) — `70%` 🧪

- Expõe a IDE por uma URL pública temporária (`*.trycloudflare.com`).
- ⚠️ Use com consciência — expõe seu ambiente publicamente enquanto ligado.

## 🔌 Configuração de Provedores Remotos — `70%` 🧪

- Probe genérico OpenAI-compat (NVIDIA NIM, Groq, DeepSeek, Together, OpenRouter).
- Lista os motores liberados na API e testa a conexão.

## 🚀 Lya Publisher (Microsoft Store) — `82%` 🧪

- Publica seu app na **Microsoft Store** sem sair da IDE: bump de versão → build Tauri → MSIX → upload (SAS) → submissão via Partner Center API.
- Dashboard com pipeline em 1 clique, dry-run, histórico de submissões, screenshots drag-and-drop e log ao vivo (SSE).
- Credenciais (Entra ID) guardadas cifradas — AES-256-GCM — em `~/.coreLyaDB/accounts.json`.
- 📘 **Configuração completa (manual ou delegada à IA):** [LYA-PUBLISHER-SETUP.md](LYA-PUBLISHER-SETUP.md)

---

📊 Resumo no [Mapa de Estabilidade](../README.md#-mapa-de-estabilidade).
