<div align="center">

<img src="assets/lya-logo.jpg" alt="Lya Studio Coder" width="300" />

# 🌌 Lya Studio Coder

### A IDE local-first para orquestração de Inteligência Artificial

**Gemini · Claude · GPT · Ollama** — num único ambiente, com memória vetorial de longa duração, automação n8n, terminal nativo e editor de código profissional.

[![Versão](https://img.shields.io/badge/vers%C3%A3o-1.0.0-7c3aed?style=for-the-badge)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)
[![Plataforma](https://img.shields.io/badge/Windows-x64-0078D6?style=for-the-badge&logo=windows&logoColor=white)](#-download)
[![Instalador](https://img.shields.io/badge/.exe%20%2B%20.msi-self--contained-22c55e?style=for-the-badge)](#-download)
[![Local First](https://img.shields.io/badge/100%25-local%20first-ff0055?style=for-the-badge)](#-privacidade)

[**⬇ Download**](#-download) · [**✨ Funcionalidades**](#-funcionalidades) · [**📊 Estabilidade**](#-mapa-de-estabilidade) · [**🌍 Comunidade**](COMMUNITY.md) · [**💬 Feedback & Suporte**](#-canal-da-comunidade) · [**❓ FAQ**](COMMUNITY.md#faq-da-comunidade)

</div>

---

## 🎯 O que é

**Lya Studio Coder** é um ambiente de desenvolvimento construído para quem vive de IA. Em vez de pular entre dez abas, sites e terminais, você opera **um único cockpit**: conversa com vários modelos de IA, executa código, debug, automações, tudo num lugar só.

> 🔒 **Seus dados nunca saem do seu computador.** Sem nuvem obrigatória, sem telemetria escondida. Você traz suas próprias chaves de API e decide o que conectar.

---

## ✨ Funcionalidades

Cada módulo é uma capacidade real, testada e em uso — não maquete.

| 🧩 Categoria | O que entrega |
|---|---|
| 🤖 **Chat Multi-Provider** | Gemini, Claude, GPT e Ollama na mesma sala. Streaming cancelável, markdown + realce de sintaxe, anexos, **gravação de voz**, ferramentas reais do agente liga/desliga, histórico completo. |
| 🧠 **NeuroCORE — Memória Vetorial** | Memória de longa duração em ChromaDB. Classifica e indexa documentos, notas e histórico em 4 coleções (episódico, semântico, procedural, identidade). Recupera contexto automaticamente. |
| 🎛️ **Orquestração de Agentes** | Mission Control estilo kanban: cada agente roda num motor real (Local/Online/CLI), com status online/offline ao vivo. A IA executa tarefas de verdade. |
| 📝 **Editor de Código (Monaco)** | O mesmo coração do VS Code: IntelliSense, F12 / Go to Definition, multi-cursor, minimap, find references, realce de diff do Git. **Ctrl+K** edita código com IA. |
| 🔍 **Explorer + Find in Files** | Árvore de arquivos VS Code-like, busca por nome **e por conteúdo** (regex, case-sensitive), ícones por tipo, preview. |
| 💻 **Terminal Integrado** | PTY nativo (node-pty) de verdade, dentro do ambiente. Rode comandos, scripts e processos sem sair da IDE. |
| 🏗️ **Compilador & Simulador** | Build e execução **reais** com saída de terminal ao vivo via streaming. Detecta o comando certo do projeto (npm, gradle, tsc, python). |
| 🐞 **Run & Debug** | Depuração real de **Node.js** (CDP) e **Python** (debugpy/DAP): breakpoints, step, inspeção de variáveis e call stack. |
| 🔗 **n8n Live + Pipeline RAG** | Servidor n8n gerenciado pela IDE + editor de pipeline RAG que recupera memória, dispara o LLM com contexto e publica o resultado. |
| 🛒 **Loja de Skills, Capacidades & Contas** | Importe skills de repositórios Git, instale capacidades de dev sob demanda e conecte contas (Claude, Gemini, OpenAI, GitHub, Drive, SMTP) com teste de conexão. |
| 🖥️ **Desktop Self-Contained** | Instalador `.exe` e `.msi` que **embute o runtime** — não exige Node instalado. Instala por usuário, sem privilégio de administrador. |

➡️ **Detalhe completo de cada módulo:** [docs/FUNCIONALIDADES.md](docs/FUNCIONALIDADES.md)

---

## 📸 A Lya por dentro

<div align="center">

![Visão geral da Lya Studio Coder](assets/screenshots/tela-geral.png)

**O cockpit completo** — explorador de arquivos, editor de código, terminal e o chat **COSMOS**, lado a lado num só ambiente.

</div>

| | |
|:---:|:---:|
| ![Provedores](assets/screenshots/provedores.png) | ![Orquestração de agentes](assets/screenshots/orquestracao.png) |
| **🤖 Multi-provider** — Gemini, Claude, GPT, Ollama, Groq, NVIDIA, OpenRouter e mais, com status de conexão ao vivo. | **🎛️ Orquestração** — cada agente com seu motor real (local/online/CLI), status live. |
| ![Explorador e editor](assets/screenshots/editor.png) | ![Compilador e preview](assets/screenshots/compilador.png) |
| **📝 Explorador + Editor** — árvore de arquivos e editor Monaco profissional. | **🏗️ Compilador & Preview** — build/lint reais, com saída ao vivo e preview da interface. |
| ![n8n Live](assets/screenshots/n8n.png) | ![Loja de Skills](assets/screenshots/skills.png) |
| **🔗 n8n Live** — automação e pipelines RAG gerenciados pela própria IDE. | **🛒 Loja de Skills** — importe skills de qualquer repositório Git. |

---

## 📊 Mapa de Estabilidade

Transparência total. Cada funcionalidade recebe uma **nota de estabilidade** baseada em testes reais (end-to-end) e tempo de maturação. **Tudo abaixo de 80% está sinalizado como `🧪 Testes Pré-lançamento`** — ajude a melhorar!

### ✅ Estável — pronto para o dia a dia

| Funcionalidade | Estabilidade | Status |
|---|:---:|---|
| Chat Multi-Provider | `92%` | 🟢 Estável |
| Editor de Código (Monaco) | `90%` | 🟢 Estável |
| Zoom Global da Interface | `90%` | 🟢 Estável |
| Explorer + Find in Files | `88%` | 🟢 Estável |
| Terminal Integrado (PTY) | `88%` | 🟢 Estável |
| App Desktop (.exe / .msi) | `85%` | 🟢 Estável |
| Memória NeuroCORE (ChromaDB) | `84%` | 🟢 Estável |
| Orquestração de Agentes | `82%` | 🟢 Estável |
| Compilador & Simulador | `82%` | 🟢 Estável |
| Run & Debug (Node + Python) | `80%` | 🟢 Estável |

### 🧪 Testes Pré-lançamento — use e nos ajude a melhorar

| Funcionalidade | Estabilidade | Status |
|---|:---:|---|
| n8n Live + Pipeline RAG | `78%` | 🧪 Pré-lançamento |
| Loja de Skills / Capacidades / Contas | `76%` | 🧪 Pré-lançamento |
| Embeddings Nativos (llama.cpp) | `75%` | 🧪 Pré-lançamento |
| Preview ao Vivo (dev server) | `72%` | 🧪 Pré-lançamento |
| Túnel de Compartilhamento (Cloudflare) | `70%` | 🧪 Pré-lançamento |
| Config. de Provedores Remotos | `70%` | 🧪 Pré-lançamento |

> 💡 Encontrou um problema num módulo `🧪`? **É exatamente isso que esperamos** — [abra um relato](#-canal-da-comunidade) e ajude a levar a nota acima de 80%.

---

## ⬇ Download

A versão mais recente fica sempre em **[Releases](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)**.

| Instalador | Para quem | Tamanho |
|---|---|:---:|
| **`Lya Studio Coder_1.0.0_x64-setup.exe`** (NSIS) | Maioria dos usuários — instala por usuário, sem admin | ~47 MB |
| **`Lya Studio Coder_1.0.0_x64.msi`** (Windows Installer) | Ambientes corporativos / implantação via política | ~47 MB |

**Requisitos mínimos:** Windows 10/11 x64. O app é self-contained (o runtime vem embutido).

> ✅ **Assinatura Digital:** A Lya agora é assinada com certificado A3 — sem avisos do SmartScreen!

📖 Guia de instalação passo a passo: [docs/INSTALACAO.md](docs/INSTALACAO.md)

---

## 🔒 Privacidade

- **Local-first por princípio.** A IDE cria a pasta `~/.coreLyaDB` no seu perfil e guarda tudo ali: banco vetorial, modelos, histórico, configurações.
- **Suas chaves, seu controle.** As chaves de API que você informar ficam só na sua máquina. Nenhuma é enviada para nós.
- **Sem telemetria oculta.** Os módulos que se conectam à internet (provedores de IA, túnel) são explícitos e opcionais.

---

## 🌍 Comunidade

**Participe!** A Lya é construída pela comunidade.

- 💬 **[Hub Oficial da Comunidade](COMMUNITY.md)** — todas as formas de se envolver
- 🐞 **[Reportar um bug](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new?template=bug.md)** — algo não funciona?
- 💡 **[Sugerir uma melhoria](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions/new?category=feature-ideas)** — quer uma nova feature?
- 🗣️ **[Participar de Discussões](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions)** — conversar com a comunidade
- 🤝 **[Contribuir com Código](CONTRIBUTING.md)** — implementar features, corrigir bugs
- 📚 **[Melhorar Documentação](CONTRIBUTING.md)** — typos, exemplos, clareza

---

## 💬 Canal da Comunidade

Este repositório **é o canal oficial** de relacionamento com quem usa a Lya. Aqui sua voz vira melhoria de produto:

| Você quer... | Use | Link |
|---|---|---|
| 🐞 **Relatar um bug / reclamar de algo** | Issues → *Relatar problema* | [Abrir relato](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new?choose) |
| 💡 **Sugerir uma melhoria / nova função** | Discussions → *Feature Ideas* | [Sugerir](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions/new?category=feature-ideas) |
| ❓ **Tirar uma dúvida de uso** | Discussions → *Q&A* | [Perguntar](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions/new?category=q-a) |
| 🗣️ **Conversar, mostrar seu setup, trocar ideia** | Discussions | [Participar](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions) |

> 📌 **Como tratamos seu feedback:** todo relato é lido, etiquetado por área e prioridade, e respondido. Sugestões viram itens de roadmap; bugs viram correções nas próximas versões. Você é ouvido.

---

## 🗺️ Roadmap

- [x] ✅ Assinatura digital do instalador (remover aviso do SmartScreen)
- [ ] 🎨 Ícone e identidade visual definitivos da Lya
- [ ] 📈 Levar os módulos `🧪` acima de 80% de estabilidade
- [ ] 🍎 Build para macOS / Linux
- [ ] 🌐 Provedor Ollama Cloud
- [ ] 🧩 Memória embedded (dispensar Python para o ChromaDB)

Acompanhe o progresso em [Discussions → Roadmap](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions) e no [CHANGELOG](CHANGELOG.md).

---

## ☕ Apoie o projeto

A Lya Studio Coder é construída com dedicação — e com muito **token de IA**. Se a Lya te ajuda no dia a dia, considere **pagar um café para o desenvolvedor**: sua contribuição ajuda direto no desenvolvimento.

**Patrocínio e qualquer ajuda são muito bem-vindos** — cada café vira código. 💛

<div align="center">

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/lyastudiocoder)

</div>

> 🌌 Obrigado por fazer parte da evolução da Lya.

---

## 📄 Licença & Distribuição

O **Lya Studio Coder** é distribuído como **software proprietário e gratuito** para uso pessoal e avaliação. O código-fonte **não é aberto**. Veja [LICENSE](LICENSE).

Os instaladores são publicados exclusivamente aqui, via **GitHub Releases**. Não baixe a Lya de outras fontes.

---

<div align="center">

**Feito com 🌌 para quem orquestra inteligência.**

*Reporte bugs · Sugira melhorias · Faça parte da evolução da Lya.*

</div>
