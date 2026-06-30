# 🚀 Processo de Release Obrigatório (Lya Studio Coder)

> **Regras Absolutas de Lançamento**
> 
> 1. O código-fonte (**src**, **src-tauri**, **server.ts**, etc.) é **PROPRIETÁRIO** e NUNCA é disponibilizado no repositório público (github). O git ignora esses arquivos propositalmente (veja o `.gitignore`).
> 2. O aplicativo final (`.exe` e `.msi`) é **LIBERADO GRÁTIS** via GitHub Releases.
> 3. A cada nova atualização, **TUDO** deve ser atualizado: README, CHANGELOG e o Winget.

---

## 🛠️ Passo a Passo para uma Nova Versão (ex: X.Y.Z)

### 1. Atualizar Versões Locais
- Atualizar a versão no `package.json`
- Atualizar a versão no `src-tauri/tauri.conf.json`

### 2. Documentação no Repositório Vitrine
- Atualizar o `CHANGELOG.md` documentando todas as mudanças.
- Atualizar o `README.md` se houver novos recursos, mantendo a versão mais recente em destaque.
- Subir as alterações com `git push` para o repositório público (`Lya-Studio-Coder`).

### 3. Gerar e Publicar os Instaladores
- Executar o build do aplicativo (`tauri build`).
- Criar a release no GitHub Releases anexando:
  - O executável de setup (`Lya.Studio.Coder_X.Y.Z_x64-setup.exe`)
  - O instalador MSI (`Lya.Studio.Coder_X.Y.Z_x64_en-US.msi`)
  - O pacote MSIX (se houver, para a Microsoft Store).

### 4. Atualizar o Winget (MANDATÓRIO)
> **Sempre realizar a atualização do Winget para que a versão da loja e do terminal reflitam a mais recente.**

No fork `StudioCodeAI/winget-pkgs`, crie uma branch (ex: `add-StudioCodeAI.LyaStudioCoder-X.Y.Z`) e atualize/crie os 3 manifestos YAML abaixo:
1. `manifests/s/StudioCodeAI/LyaStudioCoder/X.Y.Z/StudioCodeAI.LyaStudioCoder.yaml`
2. `manifests/s/StudioCodeAI/LyaStudioCoder/X.Y.Z/StudioCodeAI.LyaStudioCoder.locale.en-US.yaml`
3. `manifests/s/StudioCodeAI/LyaStudioCoder/X.Y.Z/StudioCodeAI.LyaStudioCoder.installer.yaml`

Certifique-se de preencher corretamente o `InstallerSha256` gerado com os novos `.exe` e `.msi`. O `Publisher` oficial no manifesto Winget deve ser `Studio Code AI`.

Em seguida, abra um **Pull Request** no `microsoft/winget-pkgs` com o título `New package: StudioCodeAI.LyaStudioCoder version X.Y.Z`.
