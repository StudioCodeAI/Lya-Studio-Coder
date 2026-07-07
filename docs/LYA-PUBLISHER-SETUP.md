# 🚀 Lya Publisher — Guia de Configuração (Microsoft Partner Center)

O **Lya Publisher** publica seu app na **Microsoft Store** direto da IDE: build Tauri → MSIX → upload → submissão via Partner Center API. Para isso ele precisa de credenciais de um **aplicativo Microsoft Entra ID (Azure AD)** associado à sua conta de desenvolvedor.

Você pode configurar de **dois jeitos**:

- **[Opção A — Delegar para a IA](#opção-a--delegar-para-a-ia-recomendado)**: cole um prompt pronto no Claude Code (ou outro agente com terminal) e ele faz quase tudo.
- **[Opção B — Passo a passo manual](#opção-b--passo-a-passo-manual)**: você mesmo, pelo portal.

> ⏱️ Tempo estimado: 10–20 min. Custo: nenhum (além da conta de desenvolvedor Microsoft, US$ 19 única vez).

---

## Pré-requisitos

1. **Conta de desenvolvedor** no [Partner Center](https://partner.microsoft.com/dashboard) com o app já **reservado** (nome registrado na Store).
2. **Tenant Microsoft Entra ID associado** à conta do Partner Center. Se você ainda não tem, o próprio Partner Center oferece criar um durante o onboarding (algo como `SuaEmpresa.onmicrosoft.com`).
3. Saber **qual tenant** está vinculado: Partner Center → ⚙️ **Configurações da conta** → **Locatários (Tenants)**. Anote o **Tenant ID** — *tudo* a seguir deve ser feito **nesse** diretório.

> ⚠️ **O erro nº 1** é registrar o app no diretório errado (ex.: o diretório pessoal da sua conta Microsoft). O token até é emitido, mas o Partner Center responde `"A valid account could not be found"`. Confirme o tenant antes de começar.

---

## Opção A — Delegar para a IA (recomendado)

Abra o **Claude Code** (ou o chat da própria IDE com agente + terminal) na pasta do seu projeto e cole o prompt abaixo, preenchendo os 2 campos:

```text
Configure a conexão do Lya Publisher com o Microsoft Partner Center para mim.

Contexto:
- Conta do Partner Center (dona do app na Store): <SEU-EMAIL-DA-CONTA-DEV>
- Tenant Entra ID associado ao Partner Center: <TENANT-ID-OU-DOMINIO.onmicrosoft.com>

Faça o seguinte, me pedindo confirmação antes de qualquer criação/deleção:
1. Instale o Azure CLI se não existir (winget install Microsoft.AzureCLI).
2. Faça `az login --tenant <TENANT> --use-device-code --allow-no-subscriptions`
   e me passe o código para eu autenticar no browser.
3. Verifique se já existe um app registration utilizável nesse tenant
   (az ad app list). Se existir um já associado ao Partner Center, use-o;
   senão, crie um (az ad app create) + service principal (az ad sp create).
4. Crie um client secret novo (az ad app credential reset --append --years 2).
5. Teste o token OAuth2 contra
   https://login.microsoftonline.com/<TENANT>/oauth2/token
   com resource=https://manage.devcenter.microsoft.com e depois liste meus
   apps em https://manage.devcenter.microsoft.com/v1.0/my/applications.
6. Se a listagem falhar com "valid account could not be found", me instrua a
   associar o app no Partner Center (Configurações da conta → Gerenciamento
   de usuários → Aplicativos do Microsoft Entra → Adicionar → papel Gerente)
   e teste de novo.
7. Com tudo verde, cadastre na IDE: painel Lya Publisher → conta
   "Microsoft Partner Center" com tenantId, clientId, clientSecret e appName
   (o nome EXATO do app na Store).
8. Salve uma cópia das credenciais num arquivo local FORA do repositório
   (ex.: ~/.coreLyaDB/PARTNER-CENTER-CREDENCIAIS.txt) e nunca as exiba no chat.
```

A IA cuida do resto — você só autentica no browser (código de dispositivo) e faz **um clique** no Partner Center se o app ainda não estiver associado.

---

## Opção B — Passo a passo manual

### 1. Registrar o aplicativo no Entra ID (tenant certo!)

1. Acesse [portal.azure.com](https://portal.azure.com) **logado com a conta do tenant associado ao Partner Center** (ex.: `voce@SuaEmpresa.onmicrosoft.com`). Confira no topo direito se o diretório é o correto.
2. **Microsoft Entra ID** → **App registrations** → **New registration**.
3. Nome: ex. `Meu App Publisher`. Supported account types: **Accounts in this organizational directory only**. → **Register**.
4. Na página do app, anote:
   - **Application (client) ID** → será o `clientId`
   - **Directory (tenant) ID** → será o `tenantId`

### 2. Criar o Client Secret

1. No app: **Certificates & secrets** → **New client secret** → validade 24 meses → **Add**.
2. Copie o campo **Value** IMEDIATAMENTE (só aparece uma vez) → será o `clientSecret`.

> ⚠️ O que vale é o **Value** (ex.: `xxx8Q~...`). O "Secret ID" (um GUID) **não serve** para autenticação.

### 3. Associar o app à conta do Partner Center

1. [partner.microsoft.com/dashboard](https://partner.microsoft.com/dashboard) → login com a **conta dona** do Partner Center.
2. ⚙️ (engrenagem) → **Configurações da conta** → **Gerenciamento de usuários**.
3. Aba **Aplicativos do Microsoft Entra** → **Adicionar aplicativo do Microsoft Entra** (se pedir, autentique com a conta do tenant).
4. Selecione o app criado no passo 1 → papel **Gerente (Manager)** → salvar.

*Este passo não tem API — é o único que precisa ser feito na interface, e é o que a maioria dos tutoriais esquece.*

### 4. Cadastrar na IDE

1. Abra o Lya Studio Coder → barra de atividades → **Lya Publisher**.
2. Conecte a conta **Microsoft Partner Center** preenchendo:

   | Campo | Valor |
   |---|---|
   | `tenantId` | Directory (tenant) ID do passo 1 |
   | `clientId` | Application (client) ID do passo 1 |
   | `clientSecret` | o **Value** do passo 2 |
   | `appName` | nome **exato** do app na Store (ex.: `Meu App`) |

3. Clique em **Testar conexão** — deve retornar *"Partner Center conectado"*.

O secret é guardado **cifrado (AES-256-GCM)** em `~/.coreLyaDB/accounts.json` — nunca em texto plano, nunca no repositório.

### 5. Publicar

Com a conta verde: **Lya Publisher → Pipeline → Build + Publish**. A IDE faz bump de versão, build Tauri, empacota o MSIX, faz upload (SAS) e commita a submissão no Partner Center. Acompanhe pelo log ao vivo (SSE).

---

## Solução de problemas

| Sintoma | Causa provável | Correção |
|---|---|---|
| `AADSTS7000215: Invalid client secret` | Usou o Secret **ID** em vez do **Value**, ou o secret acabou de ser criado (propagação ~1 min) | Use o Value; aguarde e tente de novo |
| `AADSTS7000229: missing service principal` | App registrado em **outro tenant** | Refaça o passo 1 no tenant associado ao Partner Center |
| `A valid account could not be found` (HTTP 400/401 no DevCenter) | App não associado no Partner Center | Faça o passo 3 (Gerenciamento de usuários → papel Gerente) |
| `App "X" não encontrado` | `appName` diferente do nome reservado na Store | Use o nome exato (o teste de conexão lista os disponíveis) |
| Secret expirou | Secrets duram no máx. 2 anos | Crie outro (passo 2) e atualize na IDE |

---

📖 Voltar: [README](../README.md) · [Funcionalidades](FUNCIONALIDADES.md) · [Quick Start](QUICK_START.md)
