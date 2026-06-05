# 🚀 Quick Start — Comece em 5 Minutos

Bem-vindo à Lya! Este guia te coloca rodando em menos de 5 minutos.

## 📋 Pré-requisitos

- **Windows 10/11** (x64)
- ~47 MB de espaço em disco
- Nada mais! (Runtime vem embutido)

---

## ⚡ 5 Passos Rápidos

### **Passo 1: Download & Instalação** (2 min)

1. Acesse [Releases](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)
2. Baixe: `Lya Studio Coder_1.0.0_x64-setup.exe`
3. Execute e clique em "Instalar"

✅ Pronto! Lya está no seu menu Iniciar.

---

### **Passo 2: Primeira Inicialização** (1 min)

1. Abra **Lya Studio Coder** via menu Iniciar
2. Vá em **Settings** (⚙️) no canto inferior direito
3. Escolha um provider de IA:

| Provider | Tipo | Requer |
|---|---|---|
| **Claude** | Online | API Key (https://console.anthropic.com) |
| **Ollama** | Offline | Ollama instalado localmente |
| **GPT** | Online | API Key OpenAI |
| **Gemini** | Online | API Key Google |

**Iniciante?** Use **Ollama Offline**:
- [Baixe Ollama](https://ollama.ai)
- Rode `ollama pull mistral` (grátis, offline)
- Selecione em Lya!

---

### **Passo 3: Explore o Cockpit** (1 min)

A tela se divide em 4 áreas:

```
┌─────────────────────────────────────┐
│  📂 Explorer  │  📝 Editor           │
├─────────────────────────────────────┤
│                                     │
│                                     │
│  💻 Terminal                        │
├──────────────┬──────────────────────┤
│ 🤖 COSMOS    │                      │
│ (Chat IA)    │                      │
└──────────────┴──────────────────────┘
```

- **📂 Explorer**: Seus arquivos
- **📝 Editor**: Edite código com IA (Ctrl+K)
- **💻 Terminal**: Execute comandos
- **🤖 COSMOS**: Chat com IA

---

### **Passo 4: Converse com IA** (30 seg)

1. Clique em **COSMOS** (canto inferior esquerdo)
2. Escreva em português: 
   ```
   "Crie um botão React com tailwind que mude de cor ao clicar"
   ```
3. Pressione **Enter**
4. IA gera código → Cole no editor com um clique!

---

### **Passo 5: Rode o Código** (1 min)

1. Copie o código para um arquivo `App.jsx`
2. Abra **Terminal Integrado** (atalho: Ctrl+`)
3. Digite:
   ```bash
   npm install tailwindcss
   npm run dev
   ```
4. Código roda em tempo real!

---

## ✨ Próximos Passos

### **Aprender mais:**

- 📚 [Documentação Completa](../README.md#-funcionalidades)
- 🎬 [Tutoriais em Vídeo](https://www.youtube.com/@LyaStudioCoder) *(em breve)*
- 💬 [Comunidade & Suporte](../COMMUNITY.md)

### **Recursos Úteis:**

- **Editor Monaco** — mesma engine do VS Code
  - Ctrl+K: Editar com IA
  - Ctrl+F: Buscar
  - F12: Ir para definição
  
- **Terminal Nativo** — rode qualquer comando
  - npm, python, node, tsc, gradle, etc

- **Múltiplos Providers** — alterne entre IA's
  - Claude para lógica complexa
  - Ollama para offline
  - GPT para criatividade
  - Gemini para análise

---

## 🤖 Exemplo Prático: Projeto do Zero

### **Cenário: Criar uma API REST com Node.js**

```
1. COSMOS (Chat):
   "Crie um servidor Express simples com rota GET /hello"
   
2. IA gera:
   ✅ Código Express pronto
   
3. Editor:
   Cole o código em server.js
   
4. Terminal:
   npm install express
   node server.js
   
5. Teste:
   http://localhost:3000/hello
   ✅ Funciona!
```

---

## 🐞 Algo não funcionou?

| Problema | Solução |
|---|---|
| IA não responde | Verifique sua API key em Settings |
| Terminal não abre | Tente atalho Ctrl+` |
| Código não roda | Verifique dependências (npm install) |
| Performance lenta | Rode menos abas, feche outros apps |

**Precisa de ajuda?**
- 💬 [Comunidade Q&A](../COMMUNITY.md#-canal-da-comunidade)
- 🐞 [Reportar Bug](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new?template=bug.md)

---

## 🎯 Dicas Pro

### **⚡ Atalhos Essenciais**

| Atalho | Função |
|---|---|
| `Ctrl+K` | Editar seleção com IA |
| `Ctrl+`` | Abrir/fechar terminal |
| `Ctrl+F` | Buscar no arquivo |
| `Ctrl+Shift+F` | Buscar em todos arquivos |
| `F12` | Ir para definição |
| `Ctrl+/` | Comentar/descomentar |

### **💡 Boas Práticas**

1. **Prompts Claros** — quanto mais específico, melhor
   ```
   ❌ "Faz um site"
   ✅ "Crie landing page com hero section, navbar responsiva e footer com links"
   ```

2. **Use Claude para Orquestração** — Claude coordena melhor
   ```
   Quando você quer que múltiplas IA's trabalhem juntas,
   Claude toma as melhores decisões sobre quem fazer o quê.
   ```

3. **Reutilize o Contexto** — IA "lembra" da conversa
   ```
   COSMOS: "Crie um botão"
   COSMOS: "Agora adicione animação"
   IA entende que é o mesmo botão!
   ```

---

## 🚀 Próximo: Explorar Funcionalidades Avançadas

A Lya tem muito mais:

- 🧠 **NeuroCORE** — memória vetorial (salva contexto automático)
- 🎛️ **Orquestração com Claude** — rode múltiplos agentes em paralelo, Claude coordena
- 🔗 **n8n Live** — automações e pipelines
- 🐞 **Debug Real** — breakpoints, step-by-step
- 📝 **Find References** — refatore código com segurança

Saiba mais em [README → Funcionalidades](../README.md#-funcionalidades)

---

## 📝 Sugestão?

Está funcionando bem? Quer sugerir uma melhoria?

→ [Abra uma Discussion](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions/new?category=feature-ideas)

---

**Bem-vindo ao futuro do desenvolvimento! 🌌**

Agora você está pronto. Divirta-se criando! 🚀
