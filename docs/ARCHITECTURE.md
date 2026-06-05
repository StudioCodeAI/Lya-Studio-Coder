# 🏗️ Arquitetura — Lya Studio Coder

Uma visão técnica de alto nível sobre como a Lya Studio Coder é estruturada.

## 📐 Diagrama Geral

```
┌─────────────────────────────────────────────────────────────┐
│                   Lya Studio Coder                          │
├─────────────────────────────────────────────────────────────┤
│                      Frontend (React)                        │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Components: Chat, Terminal, Editor, Explorer, etc  │    │
│  │ State: Zustand Store (chat, editor, terminal)      │    │
│  │ Services: API calls, storage, formatting           │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                   Tauri Bridge (IPC)                         │
│              ↑ invoke() ↓ listen()                           │
├─────────────────────────────────────────────────────────────┤
│                   Backend (Tauri/Rust)                       │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ Commands: terminal, compiler, debugger, n8n        │    │
│  │ Services: file system, database, process mgmt      │    │
│  │ External: Node.js process, ChromaDB, n8n server    │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                 External Services                            │
│  • LLM Providers (OpenAI, Claude, Gemini, Ollama)           │
│  • ChromaDB (vector database, Python)                       │
│  • n8n (automation server)                                  │
│  • File System (project files)                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Fluxo de Dados Principal

### Chat Flow

```
User Types Message
         ↓
React Component (ChatWindow)
         ↓
Store Update (Zustand)
         ↓
Send to Backend (invoke)
         ↓
Tauri Command (chat.rs)
         ↓
API Call to LLM Provider
         ↓
Stream Response back to Frontend (listen)
         ↓
Update React State
         ↓
UI Renders Response
```

### Code Execution Flow

```
User clicks "Run"
         ↓
Terminal Component
         ↓
invoke compiler.compile()
         ↓
Tauri Backend (compiler.rs)
         ↓
Spawn child process
         ↓
PTY (node-pty)
         ↓
Stream output back
         ↓
listen() event updates Terminal UI
```

---

## 📦 Stack Técnico

### Frontend (src/)

```typescript
// React + TypeScript + Vite
React 18                 // UI library
TypeScript               // Type safety
Vite                     // Build tool & dev server
Tailwind CSS             // Styling
Monaco Editor            // Code editor (VS Code core)
Zustand                  // State management
Axios                    // HTTP client
React Query (optional)   // Server state
```

### Backend (src-tauri/)

```rust
// Tauri + Rust
Tauri                    // Desktop framework
node-pty                 // PTY (terminal emulation)
Tokio                    // Async runtime
serde/serde_json         // Serialization
```

### Data & External

```
ChromaDB                 // Vector database (Python)
n8n                      // Automation & workflows
LLM APIs                 // OpenAI, Claude, Gemini, Ollama
```

---

## 🗂️ Estrutura de Pastas Detalhada

### Frontend (src/)

```
src/
├── components/
│   ├── Chat/
│   │   ├── ChatWindow.tsx          # Janela de chat principal
│   │   ├── ChatMessage.tsx         # Componente de mensagem
│   │   ├── ProviderSelector.tsx    # Seletor de AI provider
│   │   ├── VoiceRecorder.tsx       # Gravação de voz
│   │   └── ChatWindow.test.tsx     # Testes
│   │
│   ├── Terminal/
│   │   ├── Terminal.tsx            # Terminal integrado
│   │   ├── TerminalOutput.tsx      # Output renderizado
│   │   └── Terminal.test.tsx
│   │
│   ├── Editor/
│   │   ├── CodeEditor.tsx          # Monaco wrapper
│   │   ├── EditorTabs.tsx          # Abas de arquivos
│   │   ├── DiffViewer.tsx          # Git diff viewer
│   │   └── CodeEditor.test.tsx
│   │
│   ├── FileExplorer/
│   │   ├── FileExplorer.tsx        # Árvore de arquivos
│   │   ├── FileContextMenu.tsx     # Context menu
│   │   └── SearchFiles.tsx         # Busca por arquivos
│   │
│   ├── Compiler/
│   │   ├── CompilerOutput.tsx      # Output do build
│   │   └── BuildPanel.tsx          # Painel de build
│   │
│   ├── Debugger/
│   │   ├── DebugPanel.tsx          # Painel de debug
│   │   ├── Breakpoints.tsx         # Gerenciador de breakpoints
│   │   └── VariablesInspector.tsx  # Inspeção de variáveis
│   │
│   ├── Agents/
│   │   ├── AgentOrchestrator.tsx   # Orquestração de agentes
│   │   ├── AgentCard.tsx           # Card de agente
│   │   └── MissionControl.tsx      # Kanban de tarefas
│   │
│   ├── N8n/
│   │   ├── N8nEditor.tsx           # Editor de pipeline
│   │   └── N8nLive.tsx             # Status do n8n live
│   │
│   └── Common/
│       ├── Button.tsx
│       ├── Modal.tsx
│       ├── ContextMenu.tsx
│       └── Icons.tsx
│
├── hooks/
│   ├── useChat.ts                  # Chat provider integration
│   ├── useTerminal.ts              # Terminal PTY
│   ├── useEditor.ts                # Monaco editor state
│   ├── useMemory.ts                # NeuroCORE ChromaDB
│   ├── useDebugger.ts              # Debug protocol
│   ├── useFile.ts                  # File operations
│   └── useCompiler.ts              # Build & compile
│
├── services/
│   ├── aiProviders/
│   │   ├── openai.ts               # OpenAI API
│   │   ├── anthropic.ts            # Claude API
│   │   ├── gemini.ts               # Google Gemini API
│   │   ├── ollama.ts               # Ollama local
│   │   └── index.ts                # Provider factory
│   │
│   ├── database.ts                 # ChromaDB interactions
│   ├── terminal.ts                 # Terminal IPC commands
│   ├── compiler.ts                 # Build & lint commands
│   ├── debugger.ts                 # Debug protocol (DAP, CDP)
│   ├── n8n.ts                      # n8n server management
│   ├── storage.ts                  # Local storage
│   └── api.ts                      # HTTP utilities
│
├── store/
│   ├── chatStore.ts                # Chat state (Zustand)
│   ├── editorStore.ts              # Editor state
│   ├── terminalStore.ts            # Terminal state
│   ├── uiStore.ts                  # UI state (sidebar, zoom)
│   └── index.ts
│
├── types/
│   ├── chat.ts                     # ChatMessage, Provider, etc
│   ├── editor.ts                   # EditorState, File, etc
│   ├── terminal.ts                 # TerminalMessage, etc
│   ├── agent.ts                    # Agent, Task, etc
│   └── index.ts                    # Exports
│
├── utils/
│   ├── string.ts                   # trim, highlight, etc
│   ├── file.ts                     # readFile, detectLanguage, etc
│   ├── api.ts                      # HTTP wrapper
│   ├── formatting.ts               # Format code, markdown, etc
│   ├── colors.ts                   # Color utilities
│   └── constants.ts                # App constants
│
├── App.tsx                         # Root component
├── main.tsx                        # Entry point
├── index.css                       # Global styles
└── vite-env.d.ts                   # Vite types
```

### Backend (src-tauri/src/)

```rust
src-tauri/src/
├── main.rs                         # Entry point Tauri
│
├── commands/
│   ├── terminal.rs                 # PTY commands
│   │   ├── spawn_terminal()
│   │   ├── send_input()
│   │   └── kill_terminal()
│   │
│   ├── compiler.rs                 # Build/Lint commands
│   │   ├── detect_build_tool()
│   │   ├── compile()
│   │   └── lint()
│   │
│   ├── debugger.rs                 # Debug commands
│   │   ├── start_debugger()
│   │   ├── set_breakpoint()
│   │   └── continue_execution()
│   │
│   ├── file.rs                     # File system
│   │   ├── read_file()
│   │   ├── write_file()
│   │   ├── list_directory()
│   │   └── delete_file()
│   │
│   ├── n8n.rs                      # n8n server
│   │   ├── start_n8n()
│   │   ├── stop_n8n()
│   │   └── exec_workflow()
│   │
│   └── mod.rs                      # Module exports
│
├── services/
│   ├── terminal_manager.rs         # PTY lifecycle
│   ├── compiler_service.rs         # Build logic
│   ├── debugger_service.rs         # Debug protocol impl
│   ├── n8n_service.rs              # n8n management
│   └── process.rs                  # Child process utils
│
├── utils/
│   ├── paths.rs                    # Path utilities
│   ├── env.rs                      # Environment variables
│   ├── errors.rs                   # Error types
│   └── logging.rs                  # Logging setup
│
└── config.rs                       # Configuration
```

---

## 🔌 Comunicação Frontend ↔ Backend

### Tauri IPC

**Frontend → Backend (Commands):**
```typescript
// React component
import { invoke } from '@tauri-apps/api/tauri';

const response = await invoke('compiler_compile', {
  projectPath: '/path/to/project',
  command: 'npm run build'
});
```

**Backend → Frontend (Events):**
```typescript
// React component
import { listen } from '@tauri-apps/api/event';

const unlisten = await listen('compiler_output', (event) => {
  console.log('Build output:', event.payload);
});
```

**Rust backend:**
```rust
#[tauri::command]
async fn compiler_compile(
  project_path: String,
  command: String,
  window: tauri::Window,
) -> Result<String, String> {
  // Compile logic
  window.emit("compiler_output", output)?;
  Ok("done".to_string())
}
```

---

## 💾 State Management

### Zustand Store (Frontend)

```typescript
// Exemplo: chatStore
create((set) => ({
  messages: [],
  addMessage: (msg) => set(state => ({
    messages: [...state.messages, msg]
  })),
  clearMessages: () => set({ messages: [] })
}));
```

### Backend State (Rust)

Gerenciado via structs e owned resources.

---

## 🔄 Fluxos Importantes

### 1. Chat Multi-Provider

```
User selects provider → Store provider ID → 
Invoke backend → Backend routes to correct API → 
Stream response back → Update chat state → Render
```

### 2. Code Compilation

```
User clicks "Compile" → Detect build tool (npm/cargo/tsc) → 
Spawn child process → PTY streams output → 
Real-time terminal update → Done
```

### 3. Debugging

```
User clicks "Debug" → Start DAP/CDP server → 
Set breakpoints → Continue execution → 
Breakpoint hit → Send variables to frontend → 
Inspect stack trace
```

### 4. Memory & RAG

```
User uploads file → ChromaDB indexes (Python) → 
Embeddings stored in DB → RAG pipeline triggered → 
Retrieve relevant chunks → Feed to LLM → 
Augmented response
```

---

## 🚀 Performance & Optimization

### Frontend
- **Code splitting** por rota (Vite lazy loading)
- **React memo** para componentes heavy
- **Virtual scrolling** em listas longas
- **Debounce** em search e input

### Backend
- **Async/await** para I/O não-bloqueante
- **Process pooling** para builds paralelos
- **Memory pooling** para PTY
- **Streaming** ao invés de carregar tudo em memória

---

## 🔒 Segurança

- **Local-first:** todos dados em `~/.coreLyaDB`
- **API keys:** nunca enviadas ao servidor
- **Comandos shell:** validados/sanitizados
- **File I/O:** restrito a projeto aberto

---

## 📚 Referências

- [Tauri Documentation](https://tauri.app/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

