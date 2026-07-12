# 📥 Guia de Instalação — Lya Studio Coder

## 1. Baixe o instalador

Vá em **[Releases](https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest)** e escolha:

- **`.exe` (NSIS)** — recomendado para a maioria. Instala por usuário, sem admin.
- **`.msi`** — para ambientes corporativos / implantação via GPO.

## 2. Execute

Dê duplo clique no arquivo baixado.

> ⚠️ **Aviso do SmartScreen:** como o instalador ainda não tem assinatura digital,
> o Windows pode mostrar *"O Windows protegeu o computador"*.
> Clique em **Mais informações → Executar assim mesmo**. Isso é esperado e seguro —
> a assinatura está no roadmap.

O `.exe` instala em `%LOCALAPPDATA%\Lya Studio Coder` e cria atalhos no Menu
Iniciar e na Área de Trabalho.

## 3. Primeiro uso

Ao abrir, a Lya cria a pasta de dados **`~/.coreLyaDB`** no seu perfil de usuário.
É lá que ficam banco vetorial, modelos, histórico e configurações.

## 4. Memória de longo prazo — já vem pronta

A memória (**Core5**) já funciona assim que você abre a IDE — motor embutido
(LanceDB), zero dependência de Python ou processo externo. Você não precisa
instalar nada pra IA lembrar do seu projeto entre sessões.

### (Opcional) ChromaDB — motor legado

Se você já usava uma versão antiga da Lya com **ChromaDB** e quer continuar
acessando aquela base, ele segue disponível como opção adicional:

```bash
pip install chromadb
```

A IDE sobe o servidor ChromaDB automaticamente ao iniciar, mas ele só entra
nas buscas se estiver habilitado na configuração de memória (`~/.coreLyaDB/memory-config.json`
— ainda não tem um botão dedicado na interface para isso). Sem ChromaDB instalado,
o app funciona normalmente com o Core5 embutido sozinho.

## 5. (Opcional) Agentes locais com Ollama

Para rodar modelos de IA localmente na GPU:

1. Instale o [Ollama](https://ollama.com/download)
2. Baixe um modelo: `ollama pull deepseek-r1:14b`

Sem Ollama, você ainda usa os provedores em nuvem (Gemini, Claude, GPT) com suas
próprias chaves.

## Desinstalação

Painel de Controle → **Aplicativos** → *Lya Studio Coder* → Desinstalar.
Seus dados em `~/.coreLyaDB` **não são removidos** — apague manualmente se desejar.

---

Problemas? Veja o [FAQ](FAQ.md) ou [abra um relato](https://github.com/StudioCodeAI/Lya-Studio-Coder/issues/new/choose).
