# Declaração de Autoria e Propriedade Intelectual — Lya Studio Coder

**Produto:** Lya Studio Coder (todas as versões, presentes e futuras)
**Identificador do aplicativo:** `com.lya.studiocoder`
**Titular dos direitos:** LC REPRESENTAÇÕES LTDA — CNPJ 52.867.002/0001-86
**Arquiteto / autor técnico:** Luis Antonio Cardozo
**Data desta declaração:** 2026-07-10

## Declaração

A LC REPRESENTAÇÕES LTDA declara, para fins de comprovação de **autoria e
propriedade intelectual**, ser titular do software **Lya Studio Coder** — IDE com
inteligência artificial integrada — abrangendo seu código-fonte, identidade visual,
marca, documentação e **todos os instaladores e pacotes oficiais, de qualquer
versão**, distribuídos exclusivamente pelos canais oficiais relacionados abaixo.

Esta declaração substitui e consolida as declarações anteriores emitidas por
versão (1.0.1 e 1.0.2), permanecendo válida para as versões subsequentes sem
necessidade de reemissão a cada lançamento.

## Canais oficiais de distribuição

| Canal | Endereço |
|---|---|
| GitHub Releases (canal primário) | https://github.com/StudioCodeAI/Lya-Studio-Coder/releases/latest |
| Microsoft Store | https://apps.microsoft.com/detail/9NRW0DWTW9Z8 |
| Windows Package Manager (winget) | `winget install StudioCodeAI.LyaStudioCoder` |
| Repositório oficial | https://github.com/StudioCodeAI/Lya-Studio-Coder |

Qualquer instalador do Lya Studio Coder obtido fora desses canais **não** é
artefato oficial da titular.

## Vinculação criptográfica dos artefatos

Cada versão publicada tem seus instaladores identificados por resumo
criptográfico **SHA-256**, divulgado na página do respectivo GitHub Release
(e refletido no `README.md` do repositório). O registro de publicação do
GitHub confere data e integridade a esses hashes, dispensando a reemissão
desta declaração a cada versão.

Para conferir a integridade de um instalador baixado:

```powershell
Get-FileHash ".\<arquivo-do-instalador>" -Algorithm SHA256
# comparar com o hash publicado na página do Release correspondente
```

O pacote **MSIX** distribuído pela **Microsoft Store** é adicionalmente assinado
pela própria Microsoft durante a certificação da loja, vinculado à conta de
desenvolvedor da titular no Partner Center (Store ID `9NRW0DWTW9Z8`).

## Assinatura desta declaração (e-CNPJ ICP-Brasil)

Este documento recebe assinatura digital **e-CNPJ ICP-Brasil** da titular como
declaração de propriedade. Com o token A3 conectado, assinar este arquivo (ou o
PDF gerado a partir dele) em assinador ICP-Brasil de documentos (Assinador
gov.br, Adobe Acrobat ou utilitário da certificadora), selecionando o certificado
**e-CNPJ LC REPRESENTAÇÕES LTDA**
(thumbprint `3F2AD5139A0F454F0BABBDBB5B578D5C373E6F38`).

## Observação técnica — Assinatura de código (Authenticode)

Certificados e-CPF/e-CNPJ ICP-Brasil não possuem o EKU de *Code Signing* e não
assinam binários via Authenticode. Os instaladores `.exe`/`.msi` distribuídos pelo
GitHub podem exibir o aviso padrão do SmartScreen ("editor desconhecido") até a
eventual adoção de um certificado *Code Signing* dedicado. A via **Microsoft
Store/winget** não exibe esse aviso, pois o MSIX é assinado pela Microsoft. A
propriedade intelectual permanece comprovada por **este documento assinado** +
hashes SHA-256 publicados por versão.
