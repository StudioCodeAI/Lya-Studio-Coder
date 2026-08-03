# Changelog

Todas as mudanças relevantes do **Lya Studio Coder** são registradas aqui.
O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o versionamento é [SemVer](https://semver.org/lang/pt-BR/).

---

## [1.3.2] — Rede de segurança do agente: rollback, auditoria e memória medida · 2026-08-03

> Três pendências reais que ficaram registradas desde a 1.3.1 ("em breve — próximo bloco")
> saem do papel nesta versão: desfazer o que o agente escreveu, saber o que ele fez, e provar
> (com número, não promessa) que a busca da memória melhorou.

### 🩹 Desfazer o que o agente escreveu (R1.1)
- Toda vez que uma ferramenta do agente (`write_file`) sobrescreve um arquivo que já existia,
  a IDE agora guarda o conteúdo anterior antes de gravar por cima — silenciosamente, sem
  atrapalhar a escrita. Até 20 versões por arquivo. Reverter é uma chamada de API
  (`GET /api/agent-backups`, `POST /api/agent-backups/revert`) que restaura o conteúdo exato,
  respeitando o mesmo sandbox de filesystem que protege qualquer escrita do agente.

### 🔍 Trilha de auditoria das ações do agente (R7.4)
- Toda execução de ferramenta (sucesso ou erro) agora fica registrada num log persistente
  (`~/.coreLyaDB/audit/agent-actions.jsonl`), consultável por `GET /api/audit/actions`
  (filtro por ferramenta, missão ou janela de tempo). Responde de verdade "o que a IA fez no
  meu projeto e quando" — sem depender do chat ainda estar na tela.

### 🧠 Memória com número, não promessa (R3.3)
- O rerank híbrido que já corrigia a ordenação ruim do vetor em português curto ganhou uma
  métrica de verdade: um conjunto fixo de perguntas com resposta certa conhecida, medindo
  a taxa de acerto **antes e depois** do rerank. Resultado medido: hit@1 saiu de 1/12
  (só distância vetorial) para 11/12 com o rerank; hit@3 foi de 1/12 para 12/12.
- Avaliado por escrito se valia adicionar um cross-encoder (2ª passada por modelo dedicado):
  decisão foi **não agora** — o ganho residual não paga o custo de peso extra no instalador e
  latência por busca, dado que o rerank híbrido já fecha a maior parte do problema real medido.

### 📖 AgentSkills — documentação do próprio catálogo de ferramentas, sempre em dia
- `GET /api/agent-skills` gera documentação `SKILL.md` por categoria (missão, memória,
  arquivos, build, etc.) direto do catálogo real de ferramentas do agente — nunca dessincroniza
  do código porque é gerada, não escrita à mão.

### 🐛 3 bugs achados ao rodar o gate completo (nenhum introduzido nesta versão)
- **Crash de tela em branco** na barra lateral quando o backend respondia parcialmente ao
  status dos motores conectados (`/api/engines`) — um motor recém-adicionado sem resposta
  ainda podia derrubar a lista inteira de integrações.
- Um teste automatizado da Sidebar tinha um seletor ambíguo (corrigido, sem efeito no app real).
- Um teste E2E cobrava um comportamento que já tinha sido mudado de propósito duas versões
  atrás (roster de agentes visível ao Arquiteto omitindo os 2 especialistas de teste internos)
  — o teste nunca tinha sido atualizado; corrigido para refletir o comportamento real.

**Gate:** `tsc --noEmit` 0 erros · i18n 1994 chaves em paridade, 0 texto fixo · version-audit
sincronizado em 1.3.2 · testes de backend (47 suítes) verdes · **420/420** testes de componente
· **73/73** E2E.

---

## [1.3.1] — Varredura Total: a IDE auditada fio a fio · 2026-07-27

> Esta seção ficou marcada "Não lançado" por engano quando a 1.3.1 saiu — o conteúdo abaixo
> já está em produção desde 27/07/2026 (GitHub Release, winget e Microsoft Store).

### 🏪 O Lya Publisher passou a entregar o pacote de verdade (2026-07-27)
- O envio para a Microsoft Store pela própria IDE **nunca chegava ao fim** — e agora chega. Três defeitos em série no caminho do Publisher:
  - **A submissão nascia vazia.** O pedido de nova submissão ia com um corpo em branco, e a API tratava isso como "app sem descrição nenhuma" em vez de aproveitar a última publicação: recusava com *"The size of Listings must be 1 or more"*. Sem corpo, ela clona a publicação anterior — textos dos 3 mercados, preço, categoria e visibilidade intactos.
  - **O pacote novo nunca substituía o antigo.** Faltava o passo que aposenta o pacote da versão anterior e registra o novo. Se a submissão tivesse ido adiante, a Store receberia **de novo a versão velha**, com o log dizendo que a nova subiu.
  - **O arquivo ia no formato errado.** O canal de upload espera um **ZIP** com o pacote dentro; a IDE mandava o `.msix` cru. O envio agora empacota sozinho (sem dependência nova, sem recomprimir os ~95 MB de um MSIX que já é comprimido) e apaga o temporário ao terminar.
- Resultado verificado ao vivo: **v1.3.1 enviada pela IDE, certificada pela Microsoft e publicada na Store no mesmo dia**, com o pacote 1.3.1.0 no lugar do 1.3.0.0 e zero erros na análise. O painel **Histórico** acompanhou o andamento sem sair da IDE.
- Suíte no gate no mesmo commit: **17 asserções novas** cobrindo os três defeitos — inclusive a leitura byte a byte do ZIP gerado.

### 🛰️ MCP 2025-11-25, contexto local honesto e teto de gasto por missão (2026-07-27)
- **MCP na revisão corrente (2025-11-25).** A IDE falava `2024-11-05` — três revisões atrás. Agora o handshake é **negociado de verdade** nos dois papéis: como cliente, ela pede a revisão nova e aceita a que o servidor devolver (2025-06-18, 2025-03-26 ou 2024-11-05); como servidor, devolve ao cliente a revisão **dele** quando sabe falá-la. O cabeçalho `MCP-Protocol-Version` passa a acompanhar toda chamada HTTP após o handshake, como o transporte moderno exige. Servidor que responde uma revisão desconhecida vira **erro visível na tela** — não mais um ✓ verde que quebra na primeira ferramenta. O painel MCP mostra a revisão realmente negociada e as capacidades declaradas pelo servidor.
- **Fim do corte silencioso de contexto no Ollama.** A IDE nunca mandava `options` ao motor local: valia a janela default do servidor, e prompt maior que ela tinha o começo **descartado sem aviso** — o modelo respondia com confiança sobre um contexto que nunca viu. Agora `num_ctx`, `num_predict` e `keep_alive` vão explícitos, configuráveis **por modelo** (`~/.coreLyaDB/ollama-options.json`, com override por `modelo:tag` ou pelo nome sem tag), a janela **se ajusta ao tamanho real do prompt** e, quando nem o teto configurado cobre, sai um aviso junto da resposta dizendo quantos tokens não couberam e onde ajustar.
- **Teto de gasto por missão que realmente freia.** O custo da missão já era contabilizado (US$ reais quando o provedor reporta, tokens sempre) — mas nada o continha: missão em laço caro só era vista **depois** de cara. Agora existe o freio: passou do teto, a missão é interrompida pelo mesmo caminho do Parar (aborta a inferência em voo) e o motivo diz quanto gastou, qual era o limite e onde mexer. Vem ligado (US$ 5 · 2 milhões de tokens), ajustável por missão, por arquivo (`mission-budget.json`) ou por variável de ambiente — e desligável de propósito, se for essa a sua escolha.
- Suíte nova no gate no mesmo commit: **67 asserções** offline cobrindo negociação de protocolo (cliente, servidor e transporte HTTP com servidor de mentira), janela de contexto do Ollama e o freio de orçamento.

### 🔤 Loja de Linguagens: gramáticas, snippets e temas de ícone (2026-07-13)
- Nova categoria **Linguagens** na Loja, honesta sobre o que instala de verdade — nada de fingir.
- **Gramáticas** (TextMate, offline): realce de sintaxe para linguagens que o editor não trazia de fábrica, começando por **`.env`** e **Prisma** (`.prisma`). Elas herdam automaticamente todos os temas de cor já instalados.
- **Snippets** ativáveis por pacote (TypeScript, React Hooks, Python, HTML5): digite o atalho e o Autocompletar oferece o trecho pronto. Liga/desliga cada pacote sem reiniciar.
- **Temas de ícone** do explorador (Studio, Emoji e Mono) em Configurações → Temas: troque como os arquivos aparecem na barra lateral, com efeito imediato.

### 🧠 Rebrand da memória: NeuroCORE → Core5 + continuidade externa via MCP (2026-07-11)
- A memória embutida da IDE (motor local LanceDB, zero dependência de Python) passa a se chamar **Core5** — mesmo nome do cérebro de memória externo do ecossistema, evolução natural do antigo NeuroCORE. ChromaDB segue disponível como backend legado/backup.
- Novo conector: a IDE fala **MCP** com uma instância externa do Core5 (ex.: Claude Code, Claude Desktop) e conecta de verdade — indicador de status só acende com handshake real, nunca por decoração. Objetivo: compartilhar contexto do mesmo projeto entre a IDE e as CLIs de IA do dia a dia.
- **Captura contínua write-behind:** decisões relevantes da conversa são enfileiradas e gravadas em lote sem travar a resposta do chat; guarda anti-loop de feedback (o que veio de uma busca na memória nunca vira memória nova de novo).

### 🔌 Tools MCP nas missões da equipe (2026-07-11)
- Servidores MCP conectados no MCP Store agora ficam disponíveis também para a **equipe em missão** (COSMOS + Stars) — antes, só o chat recebia as ferramentas dinâmicas. Você conectou de propósito; a orquestração respeita.
- Validação ao vivo da sincronia com memória externa via MCP: leitura, escrita e boot verificados fim-a-fim contra os arquivos reais no disco — incluindo o teste de falha honesta (servidor desligado = ferramenta some de verdade, sem fingir sucesso).

### 🩹 Missão AUTO_FIX (Q.1 · 2026-07-10)
- Novo tipo de missão: você define o **alvo-verde** (ex.: `npm run lint && npm test`) e a IDE entra no loop build → mistake → correção → rebuild até o comando passar de verdade (exit code real — nunca auto-relato da IA).
- **Disjuntor anti-degeneração:** fingerprint de cada mistake + escada de escalada (autocrítica → abordagem alternativa → cérebro maior → pausa soberana com diagnóstico). Sem loop infinito queimando tokens: sem progresso, a missão para e explica.
- Funciona com qualquer motor (local, API ou CLI) — engine-agnóstico por construção.

### 🧬 CURE SCAR (Q.2 · 2026-07-10)
- Scar (a marca que fica depois que um mistake é corrigido): cada mistake **curado** vira um scar consultável — na próxima vez que o mesmo mistake aparecer, a receita conhecida entra no briefing e a cure sai mais rápida e mais barata. Verificado ao vivo: mesmo mistake plantado 2× → 2ª cure em **1 iteração** citando o scar.
- **Dinâmica de confiança:** receita que funciona ganha reforço (e é promovida a Receita); receita que falha perde; fracassos viram **anti-receitas** ("não tente isto de novo"). Scar só nasce de verde real — alegação sem prova não entra na memória.
- A memória é da **sua instância** (Core5 embutido, local): a IDE fica melhor quanto mais você a usa.

### 🚀 Motor Antigravity (Google Managed Agents) — porta API endurecida (2026-07-11)
- Novo provider **Antigravity API** selecionável como motor de Star: agente autônomo do Google que roda num sandbox remoto e devolve o resultado pronto. Chave configurável na Carteira (a chave de preview expira em 24h; o hint avisa que o botão Testar consome cota real).
- **Revisão adversária aplicada** sobre a integração: pré-voo agora reconhece o motor corretamente (antes aparecia offline com chave válida), retry desabilitado (cada tentativa custaria um sandbox novo), timeout configurável + cancelamento propagado ao fetch, anexo não-texto gera aviso visível (nunca some mudo) e resposta vazia vira falha honesta — verde só é verde de verdade.
- Suíte de testes offline nova cobrindo a extração de resposta do motor (11 asserts).

---

## [1.3.0] — Projeto Fábrica: a IDE que se testa, se conhece e se publica · 2026-07-17

> **Re-emissão 2026-07-22 (Projeto ARESTA):** os binários da v1.3.0 foram
> reconstruídos após uma auditoria fio-a-fio dos 20 módulos que encontrou e
> corrigiu **18 bugs reais** antes de qualquer download — fim de processos-filho
> órfãos no shutdown (cloudflared/n8n/preview/PTY/MCP/debug), sandbox de arquivos
> endurecido contra travessia de caminho, cancelamento de missão que interrompe a
> inferência em voo, disparo real de workflows n8n via Webhook, editor que não
> perde mais a edição não salva ao trocar de aba, memória sem vetor-morto, teste
> SMTP real, e o painel de Debug 100% traduzido. Lint 0 · 24/24 suítes verdes.

> **Fábrica v1.3** — seis frentes que endurecem a IDE de ponta a ponta: testes E2E
> industriais, memória do próprio código e histórico, agentes de QA sob o COSMOS,
> tela inicial + explorer forte, instalação real de extensões e um serviço que
> **publica a própria release** (e provou seu valor achando e corrigindo os bugs do
> próprio empacotamento nesta v1.3.0).

### 🧪 Testes de verdade, do boot ao release
- Suíte E2E industrial (Playwright) cobrindo as superfícies principais — shell, chat,
  explorer, orquestração, memória, publisher — com relatórios e traços por execução.
- **Agentes de QA sob o COSMOS**: em ordens de teste o COSMOS convoca trabalhadores de
  QA/Simulação que rodam os testes e devolvem um placar **honesto por construção**
  (verde derivado do código de saída real, não do que o agente diz).

### 🧠 A IDE conhece o próprio projeto
- **Busca no código-base** (RAG local-first da pasta aberta, incremental ao salvar) e
  **histórico da IDE** (chats, missões e desfechos) — as duas viram ferramentas que o
  COSMOS e as Stars consultam para fundamentar o trabalho, com rerank híbrido que não
  mente em português curto. Tudo local, com chave única na Carteira e privacidade por
  toggle (desligado = nada gravado).

### 🚀 Começar e navegar
- **Tela Inicial**: criar projeto por template (vazio · Node/TS · React+Vite · Python ·
  Express · Tauri) ou **por descrição** (o COSMOS monta e valida o build). Abrir, clonar
  por URL e recentes.
- **Explorer forte**: badges de git por arquivo, Revelar no Explorer, exclusão para a
  Lixeira e **Ctrl+P** (abertura rápida fuzzy).

### 🧩 Extensões Open VSX de verdade
- Instalar extensão do registro **ou por URL/`.vsix`**, com sandbox de extração,
  varredura de honestidade (JS provado · declarativa · recusa transparente) e
  anti-SSRF. O COSMOS instala extensão por ordem do chat.

### 🏭 Lya Build Releases (LBR) — a publicação vira máquina
- Um serviço de release em fases, retomável e persistido: fabricação (gates → build →
  auditoria de bundle → hash), evidências e submissão, **gate soberano de laudos** e
  publicação (GitHub release + vitrine + winget). Stepper dedicado no Lya Publisher e
  operável pelo próprio chat do COSMOS.
- **Prova de fogo**: publicar esta v1.3.0 pela própria máquina desenterrou e corrigiu
  bugs reais do empacotamento (versão do MSIX, coleta de instaladores, caminhos com
  espaço) que só aparecem numa publicação de verdade — exatamente o que um serviço de
  release existe para blindar.

---

## [1.2.0] — Extension Host de verdade + atualização pela IDE · 🧪 em testes (não lançada)

> Reunificação do repo experimental **LSCODE** (F4.2): o Extension Host provado lá
> volta para a linha estável, plugado na camada auth-gate.

### 🧩 Extension Host — extensões VS Code reais (`.vsix`)
- **Aba Extensões**: catálogo Open VSX com badge honesto por categoria (JS provado ·
  Declarativa · Não suportada), detalhe com licença/deps, instalar/ativar/desativar/
  desinstalar em runtime e **importar `.vsix` local**.
- **Runtime de produção** (`exthost.html` + `src/exthost/`): extensões instaladas carregam
  do backend EM RUNTIME (sem rebuild) sobre `@codingame/monaco-vscode-api` v35 — prettier
  real ativa em ~520ms e formata o documento de verdade.
- **COSMOS opera as extensões**: cada comando registrado vira tool `ext__*` na tool-matrix;
  Stars invocam via function-calling nativo e o resultado muda o desfecho da missão
  (validado end-to-end com Ollama local).
- **Plugado no auth-gate**: `/ws/exthost` valida upgrade (`checkWsAuth`), a página recebe o
  token de sessão (`injectSessionToken`) e todo fetch `/api` leva `x-lya-token`.
- Harnesses de verificação viva: `exthost-verify` · `exthost-tools-verify` · `exthost-mission-verify`.

### 🔄 Atualização pela IDE
- **Verificar atualização** em Configurações (junto das Notas de Versão): consulta a última
  release publicada (`GET /api/update/check`) e compara com a versão local.
- Havendo versão nova, o botão **Instalar** abre a página do app na **Microsoft Store**
  (quando o productId está configurado — env `LYA_STORE_PRODUCT_ID` ou Carteira) ou a
  página da release no GitHub, reusando o `/api/open-url` seguro.

---

## [1.1.3] — i18n 100% + UX do Chat + Fix Crítico do Publisher · 2026-07-09

> Fecha o ciclo de internacionalização iniciado na v1.1.2 (agora **100% da IDE**
> traduzida, 0 texto hardcoded) e resolve inconsistências de versão/UX
> encontradas em uso real. Gates do build: `lint 0` (com o novo `version-audit`)
> · **173/173 testes** (core 66 · attach 24 · units 83).

### 🌍 Internacionalização — 100% concluída (Rounds R8+R9)
- Últimos painéis migrados: Publisher, Configurações, Infra, MCP, SkillEditor, Contas, HardwareMonitor.
- Erros de `/api/orchestration/*` e `/api/supervisor/*` (22 pontos) agora devolvem `{error, code, params}` — o frontend traduz pelo código via `i18n.exists()`, com fallback seguro pro texto do servidor.
- `i18n-audit`: **1621 chaves em paridade** × 3 idiomas, 0 warnings de hardcode.

### 🖥️ Chat — mais fácil de diferenciar quem fala
- Mensagens do usuário ganharam uma caixa sutil tingida na cor de destaque (padrão Antigravity); mensagens da IA seguem limpas.
- Cada mensagem da IA mostra o **nome do modelo** (maior, sem repetir "COSMOS" — já sabido pelo cabeçalho do chat).
- Novo campo **"Usuário"** em Orquestração → Perfil (contraparte de "Nome da IA"): vazio = "Arquiteto" (padrão); pode ser personalizado.

### 🐛 Correções
- **Lya Publisher:** o botão "Publicar na Store" podia pegar o `.msix` errado quando havia mais de um pacote na pasta de build (escolhia por ordem alfabética, não por data) — agora reusa a mesma lógica "mais recente" do Build.
- **Fonte única de versão:** `splash`/`sidebar`/notas de versão mostravam números diferentes entre si (bug antigo, não coberto pelo bump automático). Nova fonte única `src/lib/version.ts` + guard `version-audit.mjs` no lint, que trava o build se alguma fonte de versão ficar dessincronizada.
- **TopBar:** ícone duplicado entre Claude Code e OpenClaude (CLI não-relacionada à Anthropic, glifo copiado por engano) corrigido; CLIs customizadas (Azure CLI, Copilot CLI) ganharam ícone de marca real em vez do genérico.
- Notas de Versão in-app e FAQ/Manual atualizados (estavam travados desde a v1.1.0).

---

## [1.1.2] — COSMOS Dynamic Distribution + i18n Trilíngue + Quick-Launch CLIs · 2026-07-05

> Release que leva ao público tudo que estava em pré-lançamento: a nova
> arquitetura de distribuição dinâmica do COSMOS, a Star 4 como Cérebro &
> Memória, o Quadro Negro compartilhado e a interface trilíngue (PT/EN/ES).
> Gates do build: `lint 0` · **173/173 testes** (core 66 · attach 24 · units 83).

### 🎛️ COSMOS — Distribuição Dinâmica (sai do pré-lançamento)
- **Star 4 → Cérebro & Memória:** deixa de ser worker genérico e vira especialista
  em grounding — compila fontes antes das Stars 1–3 agirem (`STAR4_PREFLIGHT`) e
  arquiva o resultado no ChromaDB ao final (`STAR4_ARCHIVING`).
- **Distribuição por capacidade:** o COSMOS lê as `capabilities` de cada slot e
  decide no planejamento quantas Stars convocar e o papel de cada uma.
- **Quadro Negro (Mission Blackboard):** documento compartilhado (fontes + plano)
  injetado em toda Star antes de agir — grounding que elimina alucinação.
- **Contexto encadeado de fases:** cada Star recebe a saída consolidada das fases
  anteriores (`previousOutput`) — missões multi-fase sem perda de contexto.
- **Auto-memória por missão:** toda missão `DONE` indexa resumo em `conversations`
  (`type: mission`) no ChromaDB — o COSMOS lembra do que já entregou.

### 🌐 Internacionalização (i18n) — Fase 2: interface trilíngue PT/EN/ES
- **TopBar + Sidebar completas** (Rounds 1–2): menus, views, tooltips, Olho do
  COSMOS, explorer, busca em arquivos, integrações, provedores, painel CLI,
  modal Abrir Pasta/Novo Projeto.
- **Chrome geral** (Round 3): SplashScreen (manifesto + slogans), ErrorBoundary,
  MissionTracker (status ao vivo, contadores, resultado consolidado).
- **ConfigModal 100%** (Round 4 parcial): chaveiro, modelos, RAG, console de
  handshake — ~60 chaves novas.

### ⚡ Quick-Launch de CLIs na TopBar
- CLIs instaladas (Claude Code, opencode, AGY, LyaCode, MiniMax, custom) viram
  ícones de 1 clique no topo — com o **glifo da marca real** de cada CLI.
- **Claude Code abre ao lado do editor** (layout `terminal-right`), padrão da
  extensão oficial; demais CLIs abrem no terminal integrado.
- **Super CLI:** menu com todos os agentes (busca + lista, offline atenuado).

### 🧠 Memória — ChromaDB multi-coleções
- 4 coleções de projeto (`decisions`/`patterns`/`bugs`/`conversations`) + recall
  ponderado por coleção + filtro por `type` no query + 21 testes dedicados.

### 🏗️ Arquitetura interna (behavior-preserving)
- Frontend: `App.tsx` 67→29KB · `N8NWorkflow.tsx` 80→1.7KB (submódulos extraídos).
- Backend: `llm.ts` decomposto em `llm/providers/*` + `llm/attachments.ts`;
  `tools.ts` em `tools/handlers/*` + `tools/pty.ts`; FSM da orquestração em
  `orchestration/{types,fsm}.ts`.

### 🔧 Correções e decisões
- **Gemini CLI descontinuada pelo Google** — Gemini agora roda exclusivamente
  via API (Chaveiro). Slot `cli` do Gemini não é mais recomendado.
- **Authenticode/ICP-Brasil cancelado como pré-requisito:** distribuição oficial
  = GitHub Releases + Microsoft Store (MSIX assinado pela Microsoft na certificação).
- MSIX self-contained (node.exe + cli.mjs embutidos) — fix da certificação da Store.
- `keyFor` async → `resolveApiKeyForProvider` (keychain como fonte única em missões).

---

## [1.1.1] — i18n Hotfix · 2026-06-30

### 🌐 Internacionalização (i18n) - Fase 1
- **Adicionado:** Suporte nativo a idiomas com motor `i18next`.
- **Modificado:** Tradução completa do "Painel de Configurações" e interface do "Chat Principal" para Inglês e Espanhol.
- **Corrigido:** Seletor visual de idioma agora reflete as alterações nos textos da aplicação.

---

## [1.1.2 · detalhe] — Smoke 7.6 + Plano 009 · 2026-06-23

### 🚀 Smoke 7.6 — Lya Publisher end-to-end (sem dry-run)

> Validação real do pipeline de publicação: bump de versão, reutilização de MSIX
> existente e rollback automático para manter o repo limpo.

- **`POST /api/publisher/build`** executado com `skipBuild=true` e `dryRun=false`.
- Bump version aplicado nos 6 arquivos de manifesto (`package.json`, `Cargo.toml`,
  `tauri.conf.json`, `installer.nsi`, `manifest.xml`, `windows/store.json`).
- MSIX existente localizado e reutilizado; pipeline concluiu sem subir na Store.
- Versão restaurada para `1.1.0` após o smoke (backup automático).
- **Risco descoberto e mitigado:** `~/.coreLyaDB/workspace.json` apontava para
  `E:\GitHub\Maestro`, fazendo o Publisher resolver path errado quando
  `WORKSPACE_ROOT` não estava setado. A partir de agora o smoke seta
  `WORKSPACE_ROOT=E:\GitHub\Lya-Studio-Coder` explicitamente.
- Script de smoke salvo em `C:\Users\LuisCard\AppData\Local\Temp\opencode\smoke-76-publisher.ps1`.

**Verificado:** bump real aplicado → pipeline OK → versão restaurada → `lint 0` · 234/234 testes verdes.

### 🧠 Plano 009 — NeuroCORE Routes Decomposition

> Criado `plans/009-neurocore-routes-split.md` para decompor o último god object
> crítico do backend (`server/core/neurocore-routes.ts`, 48KB / 920 linhas).

- Target: `neurocore-routes.ts` ≤ 30KB; submódulos puros em `server/core/neurocore/`.
- Módulos extraídos: `collections.ts`, `config.ts`, `chroma.ts`, `embeddings.ts`,
  `inbox.ts`, `routes.ts`.
- Gate: behavior-preserving — 234/234 testes + smoke de memória (`/api/memory/pipeline-test`,
  `/api/memory/ingest`, `/api/memory/query`, `/api/system/status`).
- Execução depende do fechamento do plano 007 (frontend god objects — Opus).

---

## [1.1.2 · detalhe] — TURNO 15 · F8 Backend arch (plano 008) + TURNO 14 F4 + TURNO 13 Fase 6 + Auditoria 2026-06-23

### 🏗️ F8 — Plano 008 (Backend arch) — TURNO 15

> Refatoração behavior-preserving do backend. 6/8 steps feitos. Steps 7-8 delegados.

- **Step 1** — `getGeminiClient` extraído para `server/core/llm/gemini-client.ts` (re-exportado via `llm.ts` para compat com 8 call sites)
- **Step 2** — Anexos multimodais: `llm/attachments.ts` (classifiers + decoder + `baseText` + `transcribeAudio` + `prepareMessages`) + 4 content builders em `llm/providers/{anthropic,openai,gemini,ollama}.ts`. `llm.ts` 56.7→44.3KB
- **Step 3** — call helpers (`callAnthropic`, `callOpenAI`, `ollamaTokenize`, `callOllama`, `geminiCachedContent`) movidos para os providers
- **Step 4** — PTY extraído para `tools/pty.ts` (`PtySession`, `ptySessions`, `MAX_PTY_BUFFER`, `getOrCreatePty`)
- **Step 5** — handlers extraídos: `tools/utils.ts` (helpers compartilhados) + `tools/handlers/{web-search,file-system,terminal}.ts`. `tools.ts` 44.3→39KB
- **Step 6 (mcp.ts)** — AVALIAÇÃO: viável mas marginal (só STDIO implementado; HTTP/SSE são apenas type). Deixado para plano 009
- **Step 7 (orchestration types+FSM)** — FEITO POR OUTRA SESSÃO (Fable/Opus): `orchestration/types.ts` (40L) + `orchestration/fsm.ts` (36L) extraídos
- **Step 8 (orchestration persistence+state)** — DELEGADO PARA LUIS (não feito nesta sessão)

**Verificado:** `lint 0` · suíte completa **234/234** mantida após regressão consertada (`ollamaMessage` perdeu `baseText` na extração, foi restaurado)

**Tamanhos finais:**
| Arquivo | Antes | Agora | Δ |
|---|---:|---:|---:|
| `llm.ts` | 56.7 KB / 773 L | 44.3 KB / 504 L | **-22%** |
| `tools.ts` | 44.3 KB / 688 L | 39.0 KB / 579 L | **-12%** |
| `orchestration.ts` | 80.5 KB / 1429 L | 78.3 KB / 1383 L | -3% (types+fsm extraídos por outra sessão) |
| `mcp.ts` | 21.8 KB / 420 L | 21.8 KB / 420 L | não tocado (Step 6 adiado) |

---

## [Unreleased] — TURNO 14 · F4 Prompt Caching efetivo (PMS) + TURNO 13 Fase 6 progresso + Auditoria 2026-06-23

### ⚡ F4 — Prompt Caching efetivo (PMS prefixo estático) — TURNO 14

> Elimina handshakes redundantes entre etapas da mesma missão. ~85% cache-hit.

- **`buildStarInstruction` (`orchestration.ts:280`)** — refatorado para retornar `{ pms: string, dynamic: string }` em vez de string única. PMS = prefixo estático byte-idêntico entre Stars/tasks (persona + regras + formato). Dynamic = goal, taskId, directive, errors, memoryContext, plan, previousOutput (variável por task).
- **`anthropicCachedSystem` (`llm.ts:216`)** — overload: aceita `(systemPrompt, pms?)`. Se `pms` é fornecido, monta `[{pms, cache_control: ephemeral}, {dynamic}]` (só PMS cacheado). Compat: se `pms` ausente, cacheia o systemPrompt inteiro como antes.
- **`geminiCachedContent` (`llm.ts:583`)** — overload: cacheia **só o PMS** (estável) no `cachedContent` Gemini. Fallback: comportamento antigo. O dynamic vai como `systemInstruction` separado em cada chamada.
- **`agentAnthropic` / `agentGemini` (`llm.ts:542, 601`)** — ganham parâmetro `pms?: string` (opcional). Propagam para os helpers de cache.
- **`EngineRequest` (`engine-adapter.ts:84`)** — campo `pms?: string` adicionado.
- **`runEngine` (`engine-adapter.ts:135, 139`)** — propaga `req.pms` para `agentAnthropic`/`agentGemini`.
- **Call sites (`orchestration.ts:929, 1239`)** — destructuring `{ pms: starPms, dynamic: starInput }`, passam `systemPrompt: starPms, pms: starPms, content: starInput` (PMS como system, dynamic como user message).
- **`plan` do COSMOS** movido de `personaSystem` (system antigo) para `buildStarInstruction` (dynamic) — preserva contexto sem quebrar o cache do PMS.

**Verificado:** `lint 0` · `test:core 61/61` · `test:units 61/61` · `test:memory 21/21` · `test:attach 24/24` · `test:hijk 67/67` = **234/234**.

### 🟡 TURNO 13 — Fase 6 (plano 007) progresso + Auditoria 2026-06-23

- **`src/components/n8n/`** (5 arquivos) — `types.ts` + `MissionTab.tsx` (21KB) + `N8NTab.tsx` (26KB) + `PipelineTab.tsx` (13KB) + `RAGTab.tsx` (10KB). Conclusão do Step 6 do plano 007.
- **`src/components/app/`** (4 arquivos) — `initialData.ts` (7.8KB) + `ResizeDivider.tsx` (1.3KB) + `SplashScreen.tsx` (11.7KB) + `utils.ts` (1.2KB). Conclusão dos Steps 1-2 do plano 007.
- **`src/components/orchestrator/`** (3 arquivos parciais) — `types.ts` (3.2KB) + `agentPersistence.ts` (4.4KB) + `SupervisorPanel.tsx` (11.3KB). Step 4 do plano 007; Step 5 (AgentCard/MissionPanel/EngineStatus) ainda pendente.

### 🔄 Changed (tamanhos após extrações — atualizado durante a sessão)

| Arquivo | Antes (1.1.0) | Intermediário | Agora | Δ final |
|---|---:|---:|---:|---:|
| `src/components/N8NWorkflow.tsx` | 80 KB / 1240L | — | **1.7 KB / 40L** | shell que delega aos 4 tabs (-98%) |
| `src/App.tsx` | 67 KB / 1256L | 65.8 KB / 1256L | **36.8 KB / 804L** | Opus removeu `ResizeDivider` + `clamp` inline (-44%) |
| `src/components/Orchestrator.tsx` | 119 KB / 2130L | 116.5 KB / 2130L | **97.4 KB / 1704L** | Opus moveu types para `./orchestrator/types` + importou agentPersistence (-16%) |
| `src/components/Chat.tsx` | 229 KB | 116.6 KB / 2108L | 116.6 KB / 2108L | 12 módulos extraídos (Fase 2 done) |

### 🔍 Found (achados da auditoria 2026-06-23)

- **ACERTOS verificados:** `0 any` no código total · `0 console.log` em server/ e src/ · `0 console.error/warn` · `0 TODO/FIXME/HACK/XXX` · `0 dangerouslySetInnerHTML` · `0 eval()` · `0 @ts-ignore` · `0 catch {}` vazio · suíte de testes **234/234** (core 61 · memory 21 · units 61 · attach 24 · hijk 67) · `lint 0`.
- **Correção aplicada nesta sessão:**
  - `fs-allowed-paths.json` — corrigidos 2 protocolos inválidos: `s://` → `https://` (NVIDIA) e `p://localhost:5678/workflow/...` → `http://localhost:5678` (n8n base, label documenta o workflow específico).
  - `App.tsx` e `Orchestrator.tsx` — duplicações de types/helpers **foram eliminadas pelo Opus durante a sessão** (antes da minha intervenção). Estado final: limpo, imports apontam para `./orchestrator/types` e `./orchestrator/agentPersistence`.
- **Build defasado:** `runtime/server.cjs` e `dist/index.html` datam `2026-06-21 23:54` (2 dias atrás). Houve mudanças no código desde então (extrações do plano 007 + 003/005/006). **Recomendação:** rodar `npm run build` antes do próximo release.
- **OAuth credentials no `.env`:** 3 linhas com Google OAuth Client ID + Secret. Esperado, repo blindado pelo `.gitignore` (whitelist puro). **Recomendação:** rotacionar periodicamente, mesmo sabendo que `GOCSPX-*` é public-safe por design.
- **Plano 008 (Backend arch):** rascunho detalhado escrito em `plans/008-backend-arch.md` (8 steps + STOP conditions + gates). Aguarda 007 fechar.
- **Plano 009 (rascunho):** god objects restantes após 007+008 — `MemoryStudio.tsx` (73.9KB), `Sidebar.tsx` (52.1KB), `Store.tsx` (38.1KB), `ConfigModal.tsx` (33.5KB), `Editor.tsx` (28.3KB), `neurocore-routes.ts` (48.3KB), `engine-adapter.ts` (32.1KB).
- **God objects NÃO mapeados em plano:** ver entrada do plano 009.

### 📝 Documentação atualizada nesta sessão

- `plans/README.md` reescrito (verdade única, 6 fases + status)
- `plans/008-backend-arch.md` criado (rascunho detalhado)
- `C:\Gemini\MASTER\PROJETOS\SESSAO_RESUMO.md` (handoff pessoal)
- `fs-allowed-paths.json` corrigido (2 protocolos inválidos)

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
