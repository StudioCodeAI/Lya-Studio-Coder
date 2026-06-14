<div align="center">

<img src="assets/lya-logo.jpg" alt="Lya Studio Coder" width="220" />

<br/>

# 🌌 Lya Studio Coder

### A IDE que orquestra todas as suas IAs em um único cockpit.

*Claude · Gemini · GPT · Ollama — local-first, multi-agente, sem vendor lock-in.*

<br/>

[![⬇️ Download Grátis — Windows x64](https://img.shields.io/badge/⬇️_DOWNLOAD_GRÁTIS-Windows_x64_·_v1.0.1-7c3aed?style=for-the-badge&logoColor=white)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)

<br/>

[![Versão](https://img.shields.io/badge/versão-1.0.1-7c3aed?style=flat-square)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)
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

Você está desenvolvendo com IA em 2026. Sua rotina provavelmente parece com isso:

- 🔄 Claude em uma aba para lógica de negócio
- 🔄 Gemini em outra para análise de dados
- 🔄 Terminal separado para rodar o código
- 🔄 VS Code aberto ao lado
- 🔄 Repetindo contexto para cada IA a cada nova conversa

**Lya Studio Coder existe para acabar com isso.**

Um único ambiente onde **todas as suas IAs trabalham juntas**, com memória compartilhada, terminais reais, editor profissional e orquestração de múltiplos agentes em paralelo — tudo rodando **100% na sua máquina**.

> 🔒 **Seus dados nunca saem do seu computador.** Sem telemetria escondida. Sem nuvem obrigatória. Você traz suas chaves e decide o que conectar.

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

➡️ **Detalhe completo:** [docs/FUNCIONALIDADES.md](docs/FUNCIONALIDADES.md)

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
| Chat Multi-Provider | `92%` | 🟢 Estável |
| Editor Monaco | `90%` | 🟢 Estável |
| Zoom Global | `90%` | 🟢 Estável |
| Explorer + Find in Files | `88%` | 🟢 Estável |
| Terminal Integrado (PTY) | `88%` | 🟢 Estável |
| App Desktop (.exe / .msi) | `85%` | 🟢 Estável |
| Memória NeuroCORE | `84%` | 🟢 Estável |
| Compilador & Build | `82%` | 🟢 Estável |
| Run & Debug (Node + Python) | `80%` | 🟢 Estável |

### 🧪 Em testes — use e nos ajude a melhorar

| Funcionalidade | Estabilidade | Status |
|---|:---:|---|
| Orquestração COSMOS (multi-agente) | `62%` | 🧪 Pré-lançamento |
| n8n Live + Pipeline RAG | `78%` | 🧪 Pré-lançamento |
| Loja de Skills / Capacidades | `76%` | 🧪 Pré-lançamento |
| Embeddings Nativos | `75%` | 🧪 Pré-lançamento |
| Preview ao Vivo | `72%` | 🧪 Pré-lançamento |
| Túnel de Compartilhamento | `70%` | 🧪 Pré-lançamento |
| Config. Provedores Remotos | `70%` | 🧪 Pré-lançamento |

> 💡 Módulo `🧪` com problema? **[Abra um relato](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new/choose)** e ajude a levar a nota acima de 80%.

---

## ⬇️ Download

A versão mais recente está sempre em **[Releases](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)**.

| Instalador | Para quem | Tamanho |
|---|---|:---:|
| **`Lya Studio Coder_1.0.1_x64-setup.exe`** | Maioria dos usuários — instala por usuário, sem admin | ~46 MB |
| **`Lya Studio Coder_1.0.1_x64_en-US.msi`** | Ambientes corporativos / implantação via política | ~70 MB |

**Requisitos:** Windows 10/11 x64 · Runtime embutido · Sem dependências externas

> ⚠️ **SmartScreen:** esta build de pré-lançamento **não** tem assinatura de código Authenticode, então o Windows exibe o aviso de "editor desconhecido" — clique em **Mais informações → Executar assim mesmo**. A autoria e a integridade ficam registradas na [Declaração de Propriedade](docs/DECLARACAO-PROPRIEDADE-1.0.1.md), com o **SHA-256** de cada instalador para conferência. Assinatura EV/OV (sem aviso) virá no lançamento oficial.

📖 Guia passo a passo: [docs/INSTALACAO.md](docs/INSTALACAO.md) · ⚡ Em 5 minutos: [docs/QUICK_START.md](docs/QUICK_START.md)

---

## 🔒 Privacidade

- **Local-first por princípio.** Banco vetorial, modelos, histórico e configurações ficam em `~/.coreLyaDB` — só na sua máquina.
- **Suas chaves, seu controle.** Nenhuma chave de API é enviada para nós.
- **Sem telemetria oculta.** Módulos com conexão à internet são explícitos e opcionais.

---

## 🗺️ Roadmap

- [x] ✅ v1.0.0 — Lançamento público da IDE
- [x] ✅ v1.0.1 — COSMOS soberano no chat, custo por token e correções (ver [CHANGELOG](CHANGELOG.md))
- [ ] 🔄 v1.1.0 — COSMOS multi-agente estável + assinatura de código (EV/OV)
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
