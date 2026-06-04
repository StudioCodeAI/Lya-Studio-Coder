# ❓ Perguntas Frequentes

### O Lya Studio Coder é gratuito?
Sim. É gratuito para uso pessoal e avaliação. É software proprietário (código
fonte fechado) — veja a [LICENÇA](../LICENSE).

### Precisa de internet?
Não para o básico. A IDE é **local-first**. Você só precisa de internet para usar
provedores de IA em nuvem (Gemini, Claude, GPT) — e mesmo assim com **suas próprias
chaves**. Modelos locais via Ollama rodam 100% offline.

### Vocês coletam meus dados ou minhas chaves de API?
Não. Tudo fica em `~/.coreLyaDB` na sua máquina. As chaves que você informa
permanecem locais.

### Por que o Windows diz "editor desconhecido"?
O instalador ainda não tem assinatura digital. Clique em **Mais informações →
Executar assim mesmo**. A assinatura está no roadmap.

### Qual a diferença entre o `.exe` e o `.msi`?
Funcionalmente são o mesmo app. O **`.exe`** (NSIS) instala por usuário sem admin —
ideal para a maioria. O **`.msi`** é para implantação corporativa (políticas/GPO).

### A memória não funciona. O que falta?
A memória (NeuroCORE) precisa do **ChromaDB**, que depende de Python:
`pip install chromadb`. Sem isso, o resto do app funciona normalmente.

### O que significa "Testes Pré-lançamento"?
São módulos com **menos de 80% de estabilidade** — funcionam, mas ainda estão
amadurecendo. Veja quais no [Mapa de Estabilidade](../README.md#-mapa-de-estabilidade).
Encontrou um problema neles? [Conte pra gente](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new/choose).

### Tem versão para macOS / Linux?
Ainda não. Está no roadmap.

### Como desinstalo sem perder meus dados?
Desinstale pelo Painel de Controle. A pasta `~/.coreLyaDB` **permanece** —
apague manualmente se quiser remover tudo.

### Onde reporto bugs ou sugiro melhorias?
Aqui mesmo: [abra um relato](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new/choose)
ou participe das [Discussions](https://github.com/StudioCodeAI/Lya-Studio-Coder/discussions).
