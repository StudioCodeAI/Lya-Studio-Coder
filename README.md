<div align="center">

<a href="https://studiocodeai.github.io/Lya-Studio-Coder/index.html"><img src="assets/lya-logo.jpg" alt="Lya Studio Coder — site oficial" width="220" /></a>

<br/>

# 🌌 Lya Studio Coder: Sua central de orquestração multi-IA

### 92,2% auditado nos 20 módulos (ago/2026). 100% local. Zero vendor lock-in. Interface 100% traduzida em 9 idiomas.

*Claude · Gemini · GPT · Ollama — um cockpit. Muitas IAs. Nenhum vendor lock-in.*

<br/>

![Estabilidade auditada 92,2%](https://img.shields.io/badge/Auditada-92,2%25_·_20_módulos_·_ago%2F2026-22c55e?style=flat-square) ![Local-First](https://img.shields.io/badge/Local--First-100%25-7c3aed?style=flat-square) ![Multi-Agente](https://img.shields.io/badge/Multi--Agente-COSMOS-ff0055?style=flat-square) ![Idiomas](https://img.shields.io/badge/9_idiomas-100%25_i18n-0ea5e9?style=flat-square) ![CURE](https://img.shields.io/badge/CURE-Auto--Fix-ff6b9d?style=flat-square)

<br/>

[![⬇️ Download Grátis — Windows x64](https://img.shields.io/badge/⬇️_DOWNLOAD_GRÁTIS-Windows_x64_·_v1.3.5-7c3aed?style=for-the-badge&logoColor=white)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)
&nbsp;
[![Microsoft Store](https://img.shields.io/badge/Microsoft_Store-Instalar-0078D4?style=for-the-badge&logo=microsoftstore&logoColor=white)](https://apps.microsoft.com/detail/9nrw0dwtw9z8?hl=pt-BR&gl=BR)
&nbsp;
[![Site oficial](https://img.shields.io/badge/🌐_SITE_OFICIAL-studiocodeai.github.io-f59e0b?style=for-the-badge&logoColor=white)](https://studiocodeai.github.io/Lya-Studio-Coder/index.html)

**🌐 [Conheça a IDE no site oficial →](https://studiocodeai.github.io/Lya-Studio-Coder/index.html)**

<br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/install-title-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/install-title-light.svg">
  <img alt="Instalação Rápida (Windows)" src="assets/install-title-dark.svg">
</picture>

```bash
winget install StudioCodeAI.LyaStudioCoder
```
*(Ou instale via [Microsoft Store](https://apps.microsoft.com/detail/9nrw0dwtw9z8?hl=pt-BR&gl=BR) / [Download Direto](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest))*

<br/>

[![Versão](https://img.shields.io/badge/versão-1.3.5-7c3aed?style=flat-square)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)
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

<div align="center">
  <img src="assets/screenshots/tela-geral.jpg" alt="Tela Geral da IDE" width="800" style="border-radius: 8px; margin: 15px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" />
</div>

---

### 🧭 OmniRoute

> **[OmniRoute](https://omniroute.online/) é um roteador de modelos local que a Lya adotou como provedor nativo** — lado a lado com Ollama e Llama.cpp na aba Provedores. Veja configurações e funcionalidades no [site oficial](https://omniroute.online/) ou no [repositório](https://github.com/diegosouzapw/OmniRoute): um gateway OpenAI-compatível com um catálogo enorme de modelos atrás de um único endpoint local. A Lya cuida do resto — instalar, ligar/desligar direto da aba Integrações e descobrir sozinha os modelos reais que ele expõe. Integrar via API local foi o caminho certo em vez de fork.
>
> Obrigado à equipe do OmniRoute por construir uma ferramenta tão sólida e aberta.

---

## ✨ Funcionalidades

<div align="center">
  <img src="assets/screenshots/editor.png" alt="Editor de Código Integrado" width="800" style="border-radius: 8px; margin: 15px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" />
</div>

Cada módulo é uma capacidade real, testada e em uso — não maquete.

| 🧩 Módulo | O que entrega |
|---|---|
| 🤖 **Chat Multi-Provider** | Claude, Gemini, GPT, Ollama (local + cloud) e **Antigravity** na mesma sala. Streaming cancelável, markdown, anexos de imagem/áudio/PDF, **voz de mão dupla** (ditado + leitura em voz alta), function-calling real e histórico completo. |
| 🧭 **OmniRoute — Provedor Local Nativo** | O [OmniRoute](https://omniroute.online/) entra como provedor de 1ª classe, lado a lado com Ollama e Llama.cpp: **instalou, acabou** — o serviço sobe junto com a IDE em todo boot (desligável num clique) e a conexão é feita sozinha, sem chave para colar. E o seletor mostra **só os modelos que funcionam**: catálogo cruzado com as contas realmente ativas, sem apelidos repetidos e sem os modelos que já falharam de verdade. |
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
| 🚀 **Lya Publisher** | Dashboard integrado para publicar na **Microsoft Store** sem sair da IDE: build Tauri + MSIX + upload + Partner Center. **Provado no mundo real** — as quatro últimas versões na Store (v1.3.1, v1.3.2, v1.3.3 e v1.3.5) foram enviadas por ele, de dentro da própria IDE. Desde a 1.3.5 ele publica também **o texto de apresentação da loja** junto com o pacote, num envio só. 📘 [Guia de configuração](docs/LYA-PUBLISHER-SETUP.md) |
| 🌍 **Interface em 9 idiomas** | Português, Inglês, Espanhol, Alemão, Francês, Japonês, Coreano, Russo e Chinês nativos via `i18next` em **toda** a IDE — Chat, Orquestração, Editor, Terminal, Loja, Memória, Publisher e Configurações. **2220 chaves i18n em paridade nos 9 idiomas** (PT, EN, ES, DE, FR, JA, KO, RU, ZH), conferidas por auditoria automática a cada build. |
| 🔌 **MCP Bidirecional** | A IDE é **cliente MCP** (consome ferramentas de servidores externos) E **servidor MCP** (Claude Code/Desktop/Cursor conectam e usam missão/SBB/CURE como tools). |
| ⚡ **Quick-Launch de CLIs** | Suas CLIs de IA (Claude Code, opencode, AGY, LyaCode…) viram ícones de 1 clique na TopBar — com o glifo da marca real. |
| 🗣️ **Voz de mão dupla** | Fale com a IDE e ouça a resposta: **ditado por microfone** (push-to-talk, transcrição por Whisper local ou API) e **leitura em voz alta** com 8 motores de síntese — incluindo uma **opção gratuita que não pede chave nenhuma**. Texto longo é quebrado e remontado sem cortar palavra. |
| 🧩 **Motores locais em dupla** | O `llama.cpp` acompanha o ciclo de vida do Ollama: **subiu o Ollama, sobe junto; desligou, cai junto** — em segundo plano, sem janela de console e sem tocar na VRAM antes da primeira chamada. A IDE só derruba o servidor que ela mesma subiu: um `llama-server` que você abriu na mão continua sendo seu. |
| 🗄️ **Banco vetorial sem Python** | O servidor Chroma sobe pelo **binário nativo que já viajava dentro do instalador** (53 MB que antes eram peso morto por um defeito de carregamento do pacote upstream). Quem nunca instalou Python passa a ter memória vetorial funcionando igual — o Python virou opcional, não pré-requisito. |
| 🔐 **Módulos com integridade verificada** | Cada módulo baixado sob demanda confere o **hash publicado** e, se não bater, **apaga o arquivo e falha** em vez de instalar algo diferente do esperado. Download interrompido retoma de onde parou; origem sem hash publicado é marcada como **não verificada** — a IDE não finge que conferiu. |
| 🌐 **Painel de navegação embutido** | Preview do seu app e documentação sem sair da IDE, com abas, histórico e **F12 para inspecionar**. O COSMOS também navega por ele durante uma missão. **O limite é declarado, não descoberto:** fora do app instalado, o modo compatibilidade **entrega** a página mas não **executa** o JavaScript dela — site moderno chega vazio, e a IDE diz isso na tela com a saída para o navegador do sistema ao lado. Navegação externa plena (webview nativo) só no app instalado, e ainda em **beta**. |

➡️ **Detalhe completo:** [docs/FUNCIONALIDADES.md](docs/FUNCIONALIDADES.md)

---

## ⚡ Core5 Continuum Protocol (C5CP)

> **O modelo nunca para de responder.** O C5CP garante continuidade mesmo quando modelos com limite de TPM baixo (Kimi, DeepSeek, Groq...) batem no teto de tokens ou no limite de passos do agente.

### Dois problemas resolvidos de vez

| Problema | Como aparecia | Como o C5CP resolve |
|---|---|---|
| **Input bloqueado** | Não dava para enviar nova mensagem enquanto o modelo "pensava" | MQAM: fila assíncrona — envie N mensagens enquanto o modelo processa; elas respondem em ordem |
| **Limite de passos / TPM** | O agente parava com "Limite de passos atingido" e não retomava | TRL: detecta o limite, calcula o cooldown preciso, aguarda e retoma do ponto exato sem reiniciar |

### Adaptive Model Throughput (AMT)

O submódulo AMT gerencia o ritmo em tempo real, adaptando a velocidade de envio ao limite real de cada modelo:

| Família de modelo | TPM aproximado | Comportamento do AMT |
|---|---|---|
| Gemini 2.5 Pro | 2.000.000 | Sem throttle na prática |
| GPT-4o / GPT-4.1 | 800.000 | Throttle muito raro |
| Claude Sonnet/Opus | 200.000–400.000 | Throttle em sessões longas |
| Kimi / Moonshot | 60.000 | Throttle frequente → AMT ativo |
| DeepSeek / Qwen | 60.000 | Throttle frequente → AMT ativo |
| Groq | 30.000 | AMT em standby constante |
| Ollama / local | ilimitado | AMT desligado |

**O que acontece quando o limite é atingido:**
1. 🔍 Detecção automática (429, "step limit", "context length") sem exibir erro
2. ⏸ Badge `⏸ TPM 60k atingido · aguardando 42s` aparece no chat
3. 🔄 Retry automático com o contexto preservado (sem reiniciar a conversa)
4. 🧠 Core5 aprende o comportamento do modelo entre sessões para calibrar antecipadamente

### Benefício para COSMOS e Stars 1-4

O COSMOS (Maestro) aguardando resposta de uma Star que travou por limite de tokens agora recebe a resposta normalmente — o C5CP opera de forma invisível no slot da Star, sem que o COSMOS perceba qualquer interrupção.

```
Sem C5CP:  Star 2 (kimi-k3) trava → COSMOS fica pendurado → timeout → falha de missão
Com C5CP:  Star 2 trava → AMT detecta → aguarda 42s → retoma → COSMOS recebe resposta normal
```

---

## 🧪 v1.3.5 — Memória embarcada, voz que funciona e 9 idiomas *(pré-lançamento)*

> A 1.3.4 foi construída e **retida** — nunca publicada. O que ela levava está aqui, junto com o
> que veio depois. Track de pré-lançamento: use, e [conte o que quebrar](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new/choose).

- **A memória de longo prazo mora dentro do app.** Deixou de depender de um programa externo
  instalado à parte — a IDE carrega o motor de memória embarcado e responde sozinha.
- **Banco vetorial sem Python.** O servidor vetorial sobe pelo binário nativo que já viajava dentro
  do instalador. Quem nunca instalou Python passa a ter memória funcionando do mesmo jeito.
- **Motor local companheiro.** Ligou o Ollama, sobe junto; desligou, cai junto — em silêncio, sem
  janela de console e sem tocar na sua VRAM antes da primeira chamada.
- **Voz de mão dupla, incluindo a opção grátis.** Ditado por microfone e leitura em voz alta. A
  opção gratuita de síntese **era recusada pela própria IDE** por um defeito de configuração
  interna — agora funciona sem nenhuma chave.
- **Navegador embutido no lugar certo.** Abre dentro da área do painel, e o COSMOS enxerga a página
  que você está vendo (não o encanamento interno).
- **Interface em 9 idiomas.** Chegaram alemão, francês, japonês, coreano, russo e chinês —
  **2220 chaves em paridade**, conferidas por auditoria automática a cada build.
- **Módulos com integridade verificada.** O download de cada módulo confere o hash publicado e
  **falha honestamente** quando não bate, em vez de instalar algo diferente do esperado.
- **O Publisher agora publica também o texto da loja.** Pacote e apresentação sobem no mesmo envio.

📋 [Changelog completo da 1.3.5](CHANGELOG.md#135--memória-embarcada-voz-que-funciona-e-9-idiomas--2026-08-18)

---

## 🧪 v1.3.3 — O chat que não estoura *(pré-lançamento)*

> **Certificada e ao vivo na Microsoft Store**, e ainda assim marcada como pré-lançamento: é a
> primeira build com esta safra de mudanças no caminho mais quente do produto — chat, contexto e
> limites de gasto. Funciona, foi testada, e agora precisa de uso real.
> **[Conte o que quebrar](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new/choose).**

A queixa que originou esta versão é a que todo mundo que usa IA para trabalho longo conhece: a
tarefa vai bem até certo ponto e então morre com *"contexto excedido"* — levando junto todo o
trabalho que já tinha sido pago.

- **Você vê a janela encher.** Medidor de contexto ao vivo ao lado do campo de mensagem, com botão
  **Compactar agora** — em vez de descobrir o limite quando ele estoura.
- **O turno sempre termina entregando.** No fim do orçamento as ferramentas são desligadas e o
  modelo responde com o que já apurou. Trabalho parcial e útil, nunca uma mensagem de erro no lugar
  de vinte minutos de trabalho.
- **A IDE pergunta antes de gastar.** Ao bater no teto, ela entrega a fração pronta, mostra o total
  consumido e pergunta se você autoriza continuar — e a retomada segue de onde parou, sem recomeçar.
- **Cada modelo medido pela própria régua.** O limite passou a ser proporcional à janela real de
  quem está respondendo, não um número fixo igual para todos.
- **Menos imposto de catálogo.** As ferramentas são reveladas por demanda em vez de viajarem
  inteiras em toda mensagem — em modelo de janela pequena, é a diferença entre caber e não caber.
- **Cache do prefixo à vista:** quando o provedor reaproveita o começo da conversa, o número
  aparece no medidor. É a prova, em token, do que você **não** pagou de novo.

Também nesta versão: **voz de mão dupla** (ditado por voz e leitura da resposta, com prévia e
auto-leitura), **preview embutido** na IDE *(navegação externa em beta — só no app instalado)*,
**COSMOS operando a própria interface**, **duplicar
arquivo/pasta** no Explorer, **busca no código consertada** em projeto grande, provedor **Xiaomi
MiMo** e **26 dependências atualizadas** com a suíte verde entre cada lote.

📋 [Changelog completo da 1.3.3](CHANGELOG.md#133--o-chat-que-não-estoura-contexto-sob-controle-e-voz-de-mão-dupla--2026-08-14)

---

## 🩹 v1.3.2 — Rede de segurança do agente: rollback, auditoria e memória medida

> A 1.3.1 tinha deixado três pendências marcadas "em breve — próximo bloco". As três saem do
> papel aqui, e uma métrica de verdade prova o que a 1.3.1 já tinha melhorado.

- **Desfazer o que o agente escreveu.** Toda sobrescrita de arquivo pela IA agora guarda o
  conteúdo anterior antes de gravar (até 20 versões por arquivo) — reverter é uma chamada de
  API, respeitando o mesmo sandbox que já protege qualquer escrita do agente.
- **Trilha de auditoria das ações do agente.** Toda execução de ferramenta (sucesso ou erro)
  fica registrada, consultável por ferramenta/missão/janela de tempo — responde "o que a IA fez
  no meu projeto" sem depender do chat ainda estar na tela.
- **Memória com número, não promessa.** O rerank híbrido da 1.3.1 (que já corrigia a ordenação
  ruim do vetor em português curto) ganhou métrica: hit@1 saiu de 1/12 pra 11/12, hit@3 de 1/12
  pra 12/12. Avaliado por escrito um cross-encoder de 2ª passada — decisão foi não adotar agora,
  o ganho residual não paga o custo de peso extra no instalador.
- **AgentSkills.** Documentação (`SKILL.md`) do catálogo de ferramentas do agente, gerada do
  próprio código — nunca dessincroniza porque não é escrita à mão.
- No caminho, o gate completo (rodado do zero pela primeira vez em algumas sessões) achou e
  corrigiu 3 bugs pré-existentes: crash da barra lateral com resposta parcial do backend de
  status dos motores, um teste com seletor ambíguo, e um teste E2E desatualizado.

**Gate:** lint 0 erros · i18n 1994 chaves em paridade · **420/420** testes de componente ·
**73/73** E2E.

---

## 🔎 v1.3.1 — Varredura Total: a IDE auditada fio a fio

> A 1.3.1 não traz módulo novo. Traz **prova**. Os 20 módulos da IDE foram medidos um a um
> por uma rubrica de 7 eixos, e **69 defeitos reais foram corrigidos** em 5 ondas — quase
> todos da mesma família, a mais perigosa que existe num software de IA: **funciona, mas
> mente**. Não dá erro. Devolve resultado plausível. E você só descobre depois.

**O achado mais grave da varredura inteira:** o **Salvar do Editor nunca gravava em disco**.
O botão e o `Ctrl+S` marcavam a aba como "Salvo ✓", descartavam o rascunho e mexiam apenas no
estado da interface — não existia rota de escrita no backend. Fechar a IDE descartava a edição.
Corrigido, com o ✓ agora derivado da confirmação real do disco. O irmão dele veio junto: leitura
recusada abria a aba **vazia**, e o primeiro `Ctrl+S` gravaria esse vazio por cima do seu arquivo.

Uma amostra do resto — cada linha é algo que a IDE dizia ter feito e não tinha:

- **Contexto local cortado em silêncio.** Nenhum `options` ia ao Ollama: valia a janela padrão do
  servidor e o começo de um prompt longo era **descartado sem aviso** — o modelo respondia com
  confiança sobre um contexto que nunca viu. Agora `num_ctx`/`num_predict`/`keep_alive` vão
  explícitos, ajustáveis **por modelo**, a janela se adapta ao prompt real e, quando nem o teto
  cobre, sai um aviso junto da resposta dizendo quanto não coube.
- **Sandbox furado por symlink.** As rotas do Explorer conferiam contenção por prefixo de texto:
  um link simbólico dentro da raiz apontando pra fora **lia, sobrescrevia e deletava** fora do
  workspace. Fechado com `realpath` nos dois lados.
- **Credencial recusada voltando verde** na Carteira · **3 arquivos de config sobrescritos**
  quando ilegíveis · **resposta de IA cortada no teto de tokens** passando por completa · **erro
  no meio do streaming engolido** · skill que ativava sem persistir nada · busca de memória que
  falhava se disfarçando de "nada encontrado" · Pausar/Parar de missão como disparo-e-esquece.
- **Custo escondido:** `git status` a cada 2,5 s com a IDE minimizada, a árvore inteira relida a
  cada tecla do `Ctrl+P`, um GET do estado completo por evento de orquestração e 12 subprocessos
  por chamada de `/api/capabilities`.

**E três frentes que fecham distância do mercado**, saídas de um radar de estado da arte que
agora roda antes de cada release:

- **MCP na revisão corrente (2025-11-25).** A IDE falava `2024-11-05` — três revisões atrás. Agora
  o handshake é **negociado de verdade** nos dois papéis (cliente e servidor), o cabeçalho
  `MCP-Protocol-Version` acompanha toda chamada HTTP e servidor que responde revisão desconhecida
  vira **erro visível** — não mais um ✓ verde que quebra na primeira ferramenta.
- **Teto de gasto por missão que realmente freia.** O custo já era contabilizado; faltava o freio.
  Passou do teto, a missão é interrompida pelo mesmo caminho do Parar (aborta a inferência em voo)
  e o motivo diz quanto gastou, qual era o limite e onde ajustar. Vem ligado: US$ 5 · 2 M tokens.
- **Onde já estamos à frente:** o **SBB — Shared Blackboard** com grounding anti-alucinação, o
  review soberano do COSMOS lendo envelope estruturado a custo zero (contra debate multi-agente
  com juiz dedicado, ~2,5× mais caro) e a fronteira anti-prompt-injection do `prompt-safety`.

**A prova acompanha a correção:** cada onda entregou suítes novas **dentro do `npm test` no mesmo
commit** — suíte fora do gate apodrece. Estado do portão hoje: **lint 0 erros · 2220 chaves i18n
em paridade nos 9 idiomas · 459/459 testes de componente · 73/73 E2E · 335 rotas sem duplicidade**.

📊 Média auditada dos 20 módulos: **92,2%** — sem nenhum achado alto ou crítico em aberto. O que
sobrou no funil é eixo de *prova* (mais teste automatizado), não de comportamento.

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

<div align="center">
  <img src="assets/screenshots/orquestracao.png?v=2" alt="Missão Multi-Agente COSMOS" width="800" style="border-radius: 8px; margin: 15px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" />
</div>

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
- **COSMOS operando o OmniRoute via MCP** — trocar combo, checar cota/custo e trocar provider ativo autonomamente pelo chat.
- **Navegação externa de verdade no painel embutido** — hoje o preview local é sólido e sites
  externos são beta (funcionam no app instalado, via webview nativo). O objetivo é abrir qualquer
  dashboard, com sessão e login, sem sair da Lya.
- **Aviso de cota antes do teto** — o teto de gasto por missão já freia em US$/tokens; falta o
  aviso proativo para contas de plano com janela que reseta, para o COSMOS trocar de motor sozinho
  antes de travar no meio da missão.

---

## 🧠 Memória de Longo Prazo — Core5 (768d)

<div align="center">
  <img src="assets/screenshots/memoria.png" alt="Interface de Memória Core5" width="800" style="border-radius: 8px; margin: 15px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" />
</div>

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

Um núcleo enxuto e dezoito módulos em volta dele. **Tudo roda na sua máquina** — a nuvem é opcional, e nada aqui é obrigatório além do núcleo.

<div align="center">

![Arquitetura modular da Lya Studio Coder](assets/arquitetura-geral.png?v=4)

**Quatro famílias em órbita** — o que você vê (editor, chat, terminal, temas), a inteligência (equipe de agentes, roteador, auto-correção), seus dados (memória, cofre cifrado, auditoria) e o que é aberto para plugar (loja, automações, conectores, provedores). Desligue um módulo e o resto continua de pé.

</div>

### Sala de Comando — COSMOS e as Stars

Uma ordem sua vira quatro frentes de trabalho em paralelo. O COSMOS planeja, distribui por capacidade, **revisa cada entrega e manda refazer o que sair torto** — e todos os agentes leem o mesmo quadro ao vivo, o **SBB (Shared Blackboard)**.

<div align="center">

![Sala de comando: COSMOS distribuindo ordens às Stars](assets/pipeline-orquestracao.png?v=4)

**Cada Star pluga onde você quiser** — modelo local, assistente de linha de comando ou provedor por API. As quatro podem estar em plataformas diferentes na mesma missão, e você acompanha custo, teto de gasto e o quadro compartilhado em tempo real.

</div>

> 📐 Versão em draw.io (esquema alternativo, editável): [`docs/ARQUITETURA-LYA-STUDIO-CODER.drawio`](docs/ARQUITETURA-LYA-STUDIO-CODER.drawio) — abra no [draw.io](https://www.drawio.com/).

---

## 📸 A Lya por dentro

<div align="center">

![Visão geral da Lya Studio Coder](assets/screenshots/tela-geral.jpg)

**O cockpit completo** — explorador de arquivos, editor de código, terminal e chat COSMOS, lado a lado.

</div>

| | |
|:---:|:---:|
| ![Provedores](assets/screenshots/provedores.png?v=2) | ![Orquestração](assets/screenshots/orquestracao.png?v=2) |
| **🤖 Multi-provider** — Claude, Gemini, GPT, Ollama, Groq e mais, com status ao vivo. | **🎛️ Orquestração COSMOS** — agentes com motores independentes, status live. |
| ![COSMOS](assets/screenshots/cosmos.png?v=2) | ![Publisher](assets/screenshots/publisher.png?v=2) |
| **🧠 Inteligência COSMOS** — chat com contexto total e liderança de IAs. | **🚀 Lya Publisher** — publique na Microsoft Store direto da IDE. |
| ![n8n](assets/screenshots/n8n.png?v=2) | ![Skills](assets/screenshots/skills.png?v=2) |
| **🔗 n8n Live** — automação e pipelines RAG gerenciados pela IDE. | **🛒 Loja de Skills** — importe skills de qualquer repositório Git. |
| ![OmniRoute](assets/screenshots/omnirouter-infra.png?v=2) | |
| **🧭 OmniRoute** — instala, liga e desliga direto da aba Integrações; a IDE descobre os modelos sozinha. | |

---

## 📊 Mapa de Estabilidade

Transparência total. Cada nota abaixo saiu da **auditoria fio a fio dos 20 módulos** — uma rubrica
de 7 eixos aplicada módulo a módulo, não uma impressão. Onde a medição foi mais dura que a nota
antiga, **a nota desceu**: número que só sobe não é medição, é propaganda.

### ✅ Estável — pronto para o dia a dia

| Funcionalidade | Estabilidade | Status |
|---|:---:|---|
| **Chat Multi-Provider** | `100%` | 🟢 Estável — nenhum achado em aberto; cancelamento encerra o request de verdade |
| **Memória Core5 768d (embutida)** | `100%` | 🟢 Estável — LanceDB + nomic 768d + rerank híbrido medido (hit@1 1/12 → 11/12) |
| **COSMOS — Orquestração multi-agente** | `97%` | 🟢 Estável — painel `99,7%` · motor de missão `93,2%`; /parar cancela a inferência em voo |
| **Interface Trilíngue (PT/EN/ES)** | `98%` | 🟢 Estável — 2172 chaves em paridade nos 3 idiomas, auditadas a cada build (4 textos fixos residuais em telas de configuração, em fila) |
| Editor Monaco + TextMate + Snippets | `95%` | 🟢 Estável — Salvar grava em disco de verdade (✓ só com confirmação do backend) |
| Explorer + Find in Files | `95%` | 🟢 Estável — sandbox com `realpath` nos dois lados (symlink-escape fechado) |
| Terminal Integrado (PTY) | `95%` | 🟢 Estável — sem PTY órfão (teardown no shutdown) |
| Workspace & Git | `95%` | 🟢 Estável — criar, renomear, excluir, copiar e duplicar; `git status` sem custo com a IDE minimizada |
| **Segurança & Contas (Carteira cifrada)** | `92%` | 🟢 Estável — AES-256-GCM em repouso; credencial recusada nunca volta verde |
| **Embeddings 768d (Cascata)** | `92%` | 🟢 Estável — Gemini online → nomic local → guarda + sem vetor-zero morto |
| Zoom Global | `92%` | 🟢 Estável |
| **Lya Publisher (Microsoft Store)** | `92%` | 🟢 Estável — **publicou as v1.3.1, v1.3.2, v1.3.3 e v1.3.5 na Store de ponta a ponta**, de dentro da própria IDE — desde a 1.3.5 o texto da loja vai no mesmo envio |
| **MissionTracker** | `92%` | 🟢 Estável — Pausar/Parar com confirmação do backend, não disparo-e-esquece |
| App Desktop (.exe / .msi / .msix) | `91%` | 🟢 Estável — carimbo de versão com guarda de drift |
| **Ferramentas & Sandbox do agente** | `90%` | 🟢 Estável — default-deny, exit code real, saída nunca cortada em silêncio |
| **Loja de Skills + Linguagens** | `88%` | 🟢 Estável — import Git real + temas + grammars |
| Compilador & Build | `88%` | 🟢 Estável |
| Run & Debug (Node + Python) | `88%` | 🟢 Estável — falha de conexão do debugger reportada (sem ok falso) |
| n8n Live + Pipeline RAG | `88%` | 🟢 Estável — disparo real via Webhook + auto-start + resultado retornado |

### 🧪 Em testes — use e nos ajude a melhorar

| Funcionalidade | Estabilidade | Status |
|---|:---:|---|
| **CURE — Auto-Correção (AUTO_FIX)** | `84%` | 🧪 Pré-lançamento — cicatriz neutra deixou de virar órfã |
| **MCP Bidirecional (cliente + servidor)** | `82%` | 🧪 Pré-lançamento — sem servidor MCP órfão no shutdown |
| **Painel de navegação embutido** | `80%` | 🧪 Pré-lançamento — 79 asserções cobrindo proxy, painel e ponte; **navegação externa em beta** (modo compatibilidade não executa o JavaScript da página, e diz isso na tela) |
| Config. Provedores Remotos | `79%` | 🧪 Pré-lançamento — teste SMTP real + erro de rede propagado |
| **Antigravity (Google Managed Agents)** | `78%` | 🧪 Pré-lançamento |
| Preview ao Vivo | `78%` | 🧪 Pré-lançamento — detecta `0.0.0.0`/IP LAN + sem dev server órfão |
| Túnel de Compartilhamento | `74%` | 🧪 Pré-lançamento — túnel encerrado no shutdown (URL não fica pública sem dono) |

> 💡 Módulo `🧪` com problema? **[Abra um relato](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new/choose)** e ajude a levar a nota acima de 85%. É exatamente essa faixa que segura a média do produto em 92,2% — nenhum deles tem defeito alto ou crítico em aberto; o que falta é **prova automatizada** e uso real.

---

## ⬇️ Download

> 🧪 **Versão mais recente: [v1.3.5 — Memória embarcada, voz que funciona e 9 idiomas](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.3.5)** ([o que muda](#-v135--memória-embarcada-voz-que-funciona-e-9-idiomas-pré-lançamento)) — **pré-lançamento**: memória de longo prazo dentro do app, banco vetorial sem Python e interface em 9 idiomas.
> Prefere terreno já rodado? A [v1.3.2](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/tag/v1.3.2) continua disponível.

> 🏪 **Também na Microsoft Store** — instale com um clique, sem aviso de SmartScreen e com atualização automática: **[apps.microsoft.com → Lya Studio Coder](https://apps.microsoft.com/detail/9nrw0dwtw9z8?hl=pt-BR&gl=BR)**.
> A **v1.3.5 foi enviada pelo Lya Publisher, de dentro da própria IDE**, em 18/08/2026: **passou na certificação da Microsoft no mesmo dia** e está em publicação na Store. O MSIX é **assinado pela própria Microsoft** na certificação, como em toda versão desde a 1.1.4 — nenhum certificado de terceiro no caminho.

> 📦 **winget** — o pacote está no catálogo oficial ([PR #411452 aprovado](https://github.com/microsoft/winget-pkgs/pull/411452)), e **toda versão é enviada para lá** — o catálogo guarda a linha do tempo do produto. Em análise agora: [#419885 (v1.3.5)](https://github.com/microsoft/winget-pkgs/pull/419885) e [#419888 (v1.3.3)](https://github.com/microsoft/winget-pkgs/pull/419888).
> ```powershell
> winget install StudioCodeAI.LyaStudioCoder
> ```

Prefere o instalador direto? A versão mais recente está sempre em **[Releases](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)**.

| Instalador | Para quem | Tamanho | SHA-256 |
|---|---|:---:|---|
| [**`Lya Studio Coder_1.3.5_x64-setup.exe`**](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/download/v1.3.5/Lya.Studio.Coder_1.3.5_x64-setup.exe) | Maioria dos usuários — instala por usuário, sem admin | ~62 MB | `4F799F81…2BB1D91F17` |
| [**`Lya Studio Coder_1.3.5_x64_en-US.msi`**](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/download/v1.3.5/Lya.Studio.Coder_1.3.5_x64_en-US.msi) | Ambientes corporativos / implantação via política | ~92 MB | `AF22ACFE…FF686922B5` |
| [**`LyaStudioCoder_1.3.5.0_x64.msix`**](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/download/v1.3.5/LyaStudioCoder_1.3.5.0_x64.msix) | Microsoft Store / sideload com identidade Partner Center | ~98 MB | `2B9118F3…D6A5318AA6` |

**Requisitos:** Windows 10/11 x64 · Runtime embutido · Sem dependências externas

<details>
<summary>🔐 SHA-256 completos para verificação</summary>

```
Lya Studio Coder_1.3.5_x64-setup.exe
4F799F81255F7E5D25D7C30411BC48E2E323914A4911C331338A052BB1D91F17

Lya Studio Coder_1.3.5_x64_en-US.msi
AF22ACFE1CC06AE8C347D676E1661AFFC61B7C9EB9843F6BA1BA37FF686922B5

LyaStudioCoder_1.3.5.0_x64.msix
2B9118F3239866B3CEE89DCF285B13D21D392F0E270825F853F415D6A5318AA6
```

Verificar no PowerShell: `Get-FileHash "arquivo" -Algorithm SHA256`
</details>

> ⚠️ **SmartScreen:** o `.exe`/`.msi` pode exibir aviso de "editor desconhecido" — clique em **Mais informações → Executar assim mesmo**. Quer instalação sem nenhum aviso? Use a **[Microsoft Store](https://apps.microsoft.com/detail/9nrw0dwtw9z8?hl=pt-BR&gl=BR)** — o pacote MSIX é assinado pela própria Microsoft na certificação. A autoria e integridade de cada instalador ficam registradas com o **SHA-256** para conferência.

📖 Guia passo a passo: [docs/INSTALACAO.md](docs/INSTALACAO.md) · ⚡ Em 5 minutos: [docs/QUICK_START.md](docs/QUICK_START.md)

---

## 🔒 Privacidade

<div align="center">
  <img src="assets/screenshots/provedores.png?v=2" alt="Provedores e Chaves Locais" width="800" style="border-radius: 8px; margin: 15px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.5);" />
</div>

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
- [x] ✅ **v1.3.0 — Projeto Fábrica** — testes E2E industriais, RAG do código-base + histórico da IDE, agentes de QA sob o COSMOS, Tela Inicial + Explorer forte, Open VSX real (`.vsix`/URL), e o **Lya Build Releases** (a IDE publica a própria release)
- [x] ✅ **v1.3.0 na Microsoft Store** — certificada e ao vivo (MSIX assinado pela Microsoft)
- [x] ✅ **v1.3.1 — Varredura Total** — 20 módulos auditados, 69 defeitos corrigidos, MCP 2025-11-25, contexto local honesto no Ollama e teto de gasto por missão
- [x] ✅ **v1.3.1 na Microsoft Store** — certificada e ao vivo, **publicada pelo Lya Publisher de dentro da própria IDE**
- [x] ✅ **OmniRoute** integrado como provedor local nativo (instalar/iniciar/parar pela aba Integrações, descoberta automática de modelos)
- [x] ✅ **v1.3.2 — Rede de segurança do agente** — rollback de edições, trilha de auditoria persistente, reranking de memória medido (hit@1 1/12→11/12) e AgentSkills · **🚀 versão mais recente**
- [x] ✅ **v1.3.2 na Microsoft Store** — certificada e ao vivo (03/08/2026), **publicada pelo Lya Publisher de dentro da própria IDE**
- [x] ✅ **v1.3.3 — O chat que não estoura** — medidor de contexto ao vivo, turno que sempre termina entregando, checkpoint de consentimento antes de gastar, limite proporcional à janela real de cada modelo, voz de mão dupla, painel de navegação embutido e 26 dependências atualizadas
- [x] ✅ **v1.3.3 na Microsoft Store** — certificada e ao vivo (14/08/2026), **publicada pelo Lya Publisher de dentro da própria IDE** — a terceira seguida enviada pela própria IDE
- [x] ✅ **v1.3.5 — Memória embarcada, voz que funciona e 9 idiomas** — memória de longo prazo dentro do app, banco vetorial sem Python, motor local que acompanha o Ollama em silêncio, opção grátis de voz consertada, módulos com integridade por hash e interface em 9 idiomas · **🚀 versão mais recente**
- [x] ✅ **v1.3.5 na Microsoft Store** — **certificada em 18/08/2026** e em publicação, enviada pelo Lya Publisher de dentro da própria IDE, com o texto de apresentação da loja no mesmo envio
- [ ] 🔄 Navegação externa plena no painel embutido (hoje beta, só no app instalado)
- [ ] 🔄 Mais cobertura de extensões JS (linters, language servers)
- [ ] 🎨 Identidade visual definitiva da Lya
- [ ] 🍎 Build para macOS / Linux

Acompanhe em [Discussions → Roadmap](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions) e no [CHANGELOG](CHANGELOG.md).

---

## 🤝 Integrações abertas & agradecimentos

OmniRoute é um roteador de modelos local que a Lya adotou como provedor nativo — lado a lado com Ollama e Llama.cpp na aba Provedores. Veja configurações e funcionalidades no [site oficial](https://omniroute.online/) ou no [repositório](https://github.com/diegosouzapw/OmniRoute).

Obrigado à equipe do OmniRoute por construir uma ferramenta tão sólida e aberta. 🙏

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

[![BAIXE A VERSÃO MAIS RECENTE](https://img.shields.io/badge/⬇️_BAIXE_A_VERSÃO_MAIS_RECENTE-Windows_x64_·_v1.3.3-7c3aed?style=for-the-badge&logoColor=white)](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)

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
