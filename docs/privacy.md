# Política de Privacidade — Lya Studio Coder

**Última atualização:** 15 de junho de 2026  
**Desenvolvedor:** Studio CodeAI — Luis Antonio Cardozo  
**Contato:** luis.dronespg@gmail.com

---

## 1. Resumo executivo

O Lya Studio Coder é um software **local-first**: todos os dados do usuário ficam armazenados exclusivamente no dispositivo local. O aplicativo **não coleta, não transmite e não armazena** dados pessoais em servidores próprios.

---

## 2. Dados armazenados localmente

O aplicativo cria e mantém os seguintes arquivos no diretório `~/.coreLyaDB/` do usuário:

| Arquivo / Pasta | Conteúdo | Onde fica |
|---|---|---|
| `accounts.json` | Chaves de API e tokens OAuth (cifrados com AES-256-GCM) | Somente no dispositivo |
| `conversations.json` | Histórico de conversas com as IAs | Somente no dispositivo |
| `mission-state.json` | Estado de missões de orquestração | Somente no dispositivo |
| `fs-allowed-paths.json` | Caminhos autorizados pelo sandbox de arquivos | Somente no dispositivo |
| `memory/` (ChromaDB) | Banco vetorial de memória do projeto (NeuroCORE) | Somente no dispositivo |

Esses arquivos **nunca são enviados** ao desenvolvedor ou a terceiros.

---

## 3. Conexões de rede realizadas pelo aplicativo

O Lya Studio Coder **não possui back-end próprio**. As únicas conexões de rede são iniciadas pelo usuário ao configurar provedores de IA:

| Provedor | Quem processa os dados | Política de privacidade |
|---|---|---|
| Anthropic (Claude) | Anthropic PBC | https://www.anthropic.com/privacy |
| Google (Gemini) | Google LLC | https://policies.google.com/privacy |
| OpenAI (GPT) | OpenAI OpCo LLC | https://openai.com/policies/privacy-policy |
| Ollama (modelos locais) | **Nenhuma** — roda 100% offline | — |
| OpenRouter | OpenRouter Inc. | https://openrouter.ai/privacy |
| Groq | Groq Inc. | https://groq.com/privacy-policy/ |

> **Importante:** o usuário fornece suas próprias chaves de API. Os prompts e respostas trocados com esses provedores são governados pelas políticas de cada provedor, não pelo Lya Studio Coder.

---

## 4. Telemetria e rastreamento

O Lya Studio Coder **não inclui telemetria**, análise de uso, relatórios de falhas automáticos ou qualquer forma de rastreamento de comportamento do usuário.

---

## 5. Dados de crianças

O aplicativo é destinado a desenvolvedores adultos. Não coletamos intencionalmente dados de menores de 13 anos (ou da idade mínima aplicável em sua jurisdição).

---

## 6. Segurança

- Chaves de API e tokens OAuth são cifrados em repouso com **AES-256-GCM** antes de serem gravados em disco.
- A chave mestra fica em `~/.coreLyaDB/.master.key` (modo 0600), acessível apenas pelo usuário do sistema operacional.
- O acesso ao sistema de arquivos é controlado por uma lista de permissões (`fs-allowed-paths.json`) — o agente de IA não pode ler ou escrever fora dos caminhos autorizados.

---

## 7. Atualizações desta política

Eventuais alterações serão publicadas nesta página com a data de atualização. O uso continuado do aplicativo após a publicação implica aceitação dos termos revisados.

---

## 8. Contato

Dúvidas sobre privacidade:  
📧 **luis.dronespg@gmail.com**  
🌐 **https://github.com/StudioCodeAI/Lya-Studio-Coder**

---

*Esta política se aplica ao Lya Studio Coder versão 1.0.2 e posteriores.*
