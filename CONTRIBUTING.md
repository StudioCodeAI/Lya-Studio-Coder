# 🤝 Guia de Contribuição — Lya Studio Coder

Primeiro, **obrigado por querer melhorar a Lya**! Este documento explica como contribuir com código, ideias e feedbacks.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Começar](#como-começar)
- [Tipos de Contribuição](#tipos-de-contribuição)
- [Fluxo de Desenvolvimento](#fluxo-de-desenvolvimento)
- [Padrões de Código](#padrões-de-código)
- [Commits & Pull Requests](#commits--pull-requests)
- [Testes](#testes)
- [Dúvidas?](#dúvidas)

---

## 💬 Código de Conduta

Este projeto adere ao [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/).

**Em resumo:** sejam respeitosos com todos. Quer reportar uma violação? Mande um email direto para o mantenedor ou abra uma issue privada.

---

## 🚀 Como Começar

### Pré-requisitos

- **Node.js** 18+ ou superior
- **npm** ou **yarn** (recomendado yarn)
- **Git** e conhecimento básico de Git workflow
- Familiaridade com **TypeScript**, **React** e **Tauri** (se vai mexer no desktop)

### Setup Local

```bash
# 1. Fork o repositório (via GitHub UI)

# 2. Clone seu fork
git clone https://github.com/SEU-USERNAME/Lya-Studio-Coder.git
cd Lya-Studio-Coder

# 3. Adicione o upstream (para sincronizar)
git remote add upstream https://github.com/StudioCodeAI/Lya-Studio-Coder.git

# 4. Instale dependências
npm install

# 5. Inicie o servidor (SEM watch — o tsx watch derruba as sessões PTY do terminal)
npx tsx server.ts
```

### Git hooks — instalação automática

Os hooks do projeto (`pre-push` e `pre-commit`, descritos abaixo) são instalados
**automaticamente pelo `npm install`** — o script `prepare` copia
`scripts/git-hooks/*` para `.git/hooks/`. É idempotente e nunca sobrescreve um
hook que você tenha customizado à mão.

```bash
npm run hooks:install     # reinstalar/atualizar manualmente
LYA_SKIP_HOOKS=1 npm i    # instalar dependências sem tocar nos hooks
```

### Portão de qualidade (git hook pre-push)

O gate de lint + testes roda **localmente** via git hook (não há CI cloud — o
código-fonte não é versionado no repositório público).

Todo `git push` roda `npm run lint` + a suíte completa (`E2E=1 npm test`, que
inclui o build e o Playwright) e bloqueia em falha. O mesmo gate à mão:

```bash
npm run test:full        # = E2E=1 npm test (suítes offline + build + E2E)
npm test                 # só as suítes offline (piso obrigatório)
```

Bypass consciente (emergência): `git push --no-verify`. Pular só o E2E,
mantendo lint + suítes: `LYA_SKIP_E2E=1 git push`.

### Rede de segurança da blindagem (git hook pre-commit)

Além do `.gitignore`, há uma segunda camada local que roda **antes** de cada
commit: verifica cada arquivo staged contra a allowlist do que já é vitrine
pública hoje (README/CHANGELOG/docs não-sigilosos/.github/assets) e escaneia
o conteúdo por padrões de segredo (mesma lógica de `scripts/audit-bundle.mjs`).
Também já vem instalado pelo `npm install`.

Se o commit for bloqueado, é porque um arquivo staged é código-fonte (ou algo
gitignorado) que escapou via `git add -A`/`git add -f`, ou porque um segredo
foi detectado no conteúdo. Bypass consciente (nunca em código real):
`git commit --no-verify`.

### Camadas de teste

| Camada | Comando | O que cobre |
|---|---|---|
| Lógica/backend | `npm test` | suítes offline (orquestração, memória, segurança, ferramentas…) |
| Componente (React) | `npm run test:component` | componentes isolados em jsdom (Vitest + Testing Library) |
| Ponta a ponta | `npm run test:e2e` | a IDE rodando de verdade (Playwright) |
| Tudo | `npm run test:full` | o mesmo gate do `pre-push` |

Testes de componente vivem em `tests/component/*.test.tsx` (config em
`vitest.config.ts`); use `npm run test:component:watch` durante o
desenvolvimento.

### Estrutura do Projeto

```
Lya-Studio-Coder/
├── src/                    # Código-fonte principal (TypeScript + React)
├── src-tauri/              # Código Tauri (backend desktop)
├── docs/                   # Documentação
├── .github/                # Templates, workflows, config
├── package.json            # Dependências e scripts
└── README.md               # README principal
```

---

## 🎯 Tipos de Contribuição

### 1. 🐞 **Reportar Bugs**

Encontrou um problema? Ótimo! Abra uma issue com:

- **Título descritivo** (ex: "Terminal não responde ao CTRL+C em Windows")
- **Passos para reproduzir** (passo a passo claro)
- **Comportamento esperado** vs **comportamento real**
- **Screenshot/vídeo** (se possível)
- **Versão da Lya**, SO e ambiente

**Template:** [Use o template de bug](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new?template=bug.md)

### 2. 💡 **Sugerir Melhorias**

Quer uma nova feature? Compartilhe a ideia:

- **Descrição clara** do que quer fazer
- **Por que faz falta?** (problema que resolve)
- **Como imagina a solução?**
- **Alternativas consideradas?**

**Template:** [Use o template de feature](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new?template=feature.md)

### 3. 📝 **Melhorar Documentação**

Documentação confusa? Corrija:

- Typos no README, docs ou comentários de código
- Exemplos desatualizados
- Guias que faltam clareza

Faça um PR direto! Pequenas correções não precisam de issue prévia.

### 4. 💻 **Contribuir com Código**

Quer implementar uma feature ou fix?

1. Procure por issues com label `good first issue` ou `help wanted`
2. Comente na issue: "Vou trabalhar nisso"
3. Siga o [fluxo de desenvolvimento](#fluxo-de-desenvolvimento) abaixo

---

## 🔄 Fluxo de Desenvolvimento

### 1. Sincronize com a versão mais recente

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

### 2. Crie uma branch com nome descritivo

Use o padrão: `tipo/breve-descricao`

Tipos válidos:
- `feature/` — nova funcionalidade
- `fix/` — correção de bug
- `docs/` — alteração em documentação
- `refactor/` — refatoração sem mudança de comportamento
- `test/` — adicionar ou melhorar testes
- `chore/` — manutenção, dependências, config

**Exemplos:**
```bash
git checkout -b feature/add-voice-recording
git checkout -b fix/terminal-ctrl-c-windows
git checkout -b docs/add-api-examples
```

### 3. Faça commits pequenos e semânticos

```bash
# ✅ Bom: commits claros e lógicos
git commit -m "feat(chat): add voice message support"
git commit -m "fix(terminal): handle CTRL+C on Windows"
git commit -m "docs(readme): add installation troubleshooting"

# ❌ Evite: commits genéricos ou muito grandes
git commit -m "fixed stuff"
git commit -m "updates and fixes and new features"
```

Siga [Conventional Commits](https://www.conventionalcommits.org/):
```
tipo(escopo): mensagem em inglês

[descrição opcional em múltiplas linhas]

[footer opcional: Fixes #123, Relates to #456]
```

### 4. Abra um Pull Request

```bash
git push origin feature/seu-branch
```

Depois, no GitHub, clique em "Create Pull Request".

**Descreva seu PR:**
- Qual problema resolve? (referencie a issue: `Fixes #123`)
- O que mudou?
- Como testar?
- Screenshots (se for UI)
- Checklist (abaixo)

**Checklist do PR:**
```markdown
- [ ] Código segue os padrões do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Sem breaking changes (ou bem justificado)
- [ ] Testei localmente
```

### 5. Responda às reviews

- Mantenha um tom respeitoso
- Pergunte se não entender alguma sugestão
- Faça os ajustes solicitados
- Não é pessoal — reviews melhoram o código para todos

### 6. Merge

Após aprovação, o mantenedor faz o merge!

---

## 🎨 Padrões de Código

### TypeScript

- Use **strict mode** (`"strict": true` em `tsconfig.json`)
- Tipifique tudo, evite `any`
- Use `const`/`let`, evite `var`
- Formatação com **Prettier** (rodará automaticamente no commit)

```typescript
// ✅ Bom
interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const sendMessage = async (msg: ChatMessage): Promise<void> => {
  // implementação
};

// ❌ Ruim
const sendMessage = (msg: any) => {
  // implementação
};
```

### React

- Use **functional components** e **hooks**
- Componentes em PascalCase, utilitários em camelCase
- Priorize composição
- Mantenha componentes pequenos e reutilizáveis

```typescript
// ✅ Bom
interface ChatWindowProps {
  messages: ChatMessage[];
  onSendMessage: (msg: string) => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState('');
  
  return (
    <div>
      {/* JSX aqui */}
    </div>
  );
};

// ❌ Ruim
export default class ChatWindow extends React.Component {
  // ...
}
```

### Nomes e Organização

```
src/
├── components/
│   ├── Chat/
│   │   ├── ChatWindow.tsx
│   │   ├── ChatMessage.tsx
│   │   └── ChatWindow.test.tsx
│   └── Terminal/
├── hooks/
│   ├── useChatProvider.ts
│   └── useTerminal.ts
├── services/
│   ├── aiProvider.ts
│   └── database.ts
├── types/
│   └── index.ts
└── App.tsx
```

### Comentários

- Prefira código legível que não precisa de comentário
- Comente o **porquê**, não o **quê**

```typescript
// ✅ Bom
// Aguarda 100ms para evitar debounce duplo em rápida sucessão
await new Promise(resolve => setTimeout(resolve, 100));

// ❌ Ruim
await new Promise(resolve => setTimeout(resolve, 100)); // espera 100ms
```

---

## 📝 Commits & Pull Requests

### Mensagens de Commit

Siga [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo>): <mensagem curta em inglês>

<descrição opcional em múltiplas linhas>

<footer opcional>
```

**Tipos:**
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação (sem mudança de lógica)
- `refactor:` refatoração de código
- `test:` testes
- `chore:` manutenção, dependências, build

**Escopos** (dependem do projeto):
- `chat`, `terminal`, `editor`, `compiler`, `agents`, `memory`, `n8n`, etc

**Exemplos:**

```
feat(chat): add streaming response support for OpenAI

- Implementa streaming via Server-Sent Events
- Cancela requisições pendentes ao switch de provider
- Atualiza UI em tempo real

Fixes #456
```

```
fix(terminal): handle CTRL+C properly on Windows

PTY não recebia sinal de interrupção em Windows 11.
Usa signal manipulation no node-pty.
```

### Pull Requests

**Checklist antes de submeter:**

- [ ] Branch sincronizado com `main`
- [ ] Sem conflitos de merge
- [ ] Testes passando (`yarn test`)
- [ ] Linting passed (`yarn lint`)
- [ ] Sem console.logs de debug
- [ ] Build sucesso (`yarn build`)

**Template de PR (gerado automaticamente):**

```markdown
## 📝 Descrição
[Descreva o que este PR faz]

## 🎯 Issue relacionada
Fixes #123

## 🧪 Como testar?
[Passo a passo para validar]

## 📸 Screenshots (se UI)
[Antes/depois]

## ✅ Checklist
- [ ] Código segue padrões
- [ ] Testes adicionados
- [ ] Documentação atualizada
- [ ] Sem breaking changes
```

---

## 🧪 Testes

### Rodando testes

```bash
# Todos os testes
yarn test

# Watch mode
yarn test:watch

# Com coverage
yarn test:coverage

# Teste específico
yarn test ChatWindow
```

### Escrevendo testes

- Teste **comportamento**, não implementação
- Use descriptive names: `it('should send message when Enter is pressed')`
- Crie testes em `__tests__` ou com sufixo `.test.ts`

```typescript
// ✅ Bom
describe('ChatWindow', () => {
  it('should send message when Enter key is pressed', () => {
    const mockSend = jest.fn();
    const { getByRole } = render(<ChatWindow onSendMessage={mockSend} />);
    
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(mockSend).toHaveBeenCalledWith('hello');
  });
});

// ❌ Ruim
describe('ChatWindow', () => {
  it('works', () => {
    // teste muito vago
  });
});
```

---

## ❓ Dúvidas?

- **Dúvida de uso:** Use [Discussions](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions)
- **Dúvida técnica sobre contribuição:** Abra uma issue ou pergunta em Discussion
- **Algo não funciona localmente:** Veja [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)
- **Quer feedback antes de abrir PR?** Abra um Draft PR e marque `@StudioCodeAI`

---

## 🙏 Obrigado!

Cada contribuição — seja código, documentação, teste ou ideia — faz a Lya melhor.

**Bem-vindo ao projeto!** 🌌

