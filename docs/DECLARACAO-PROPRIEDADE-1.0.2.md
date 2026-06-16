# Declaração de Autoria e Propriedade Intelectual — Lya Studio Coder 1.0.2

**Produto:** Lya Studio Coder
**Versão:** 1.0.2
**Identificador:** com.lya.studiocoder
**Data do build:** 2026-06-15
**Titular dos direitos:** LC REPRESENTAÇÕES LTDA — CNPJ 52.867.002/0001-86
**Arquiteto / autor técnico:** Luis Antonio Cardozo

## Declaração

A LC REPRESENTAÇÕES LTDA declara, para fins de comprovação de **autoria e
propriedade intelectual**, ser titular do software **Lya Studio Coder** e de seus
instaladores identificados abaixo pelo resumo criptográfico (SHA-256). A assinatura
ICP-Brasil (e-CNPJ) aposta neste documento vincula a titular aos artefatos exatos
cujos hashes constam aqui.

## Artefatos (instaladores oficiais 1.0.2)

| Arquivo | Tamanho (bytes) | SHA-256 |
|---|---|---|
| `Lya Studio Coder_1.0.2_x64-setup.exe` (NSIS) | 48.095.264 | `2E4056705D4090695670E77EE630639BFBED958EA41CF932C36D550C943FFDA8` |
| `Lya Studio Coder_1.0.2_x64_en-US.msi` (MSI) | 73.297.920 | `01AD394E1D5D7887976AE129595ECB6287D805667A26007AA43DFC8C87302D43` |
| `LyaStudioCoder_1.0.2.0_x64.msix` (Microsoft Store) | — | `C27ABAC3EF4B436FA04C4C4D44486E0A98908DF1C3837466B1FD78E33C1EF5EF` |

Para conferir a integridade de um instalador, recalcule o resumo e compare:

```powershell
Get-FileHash ".\Lya Studio Coder_1.0.2_x64-setup.exe" -Algorithm SHA256
```

## Como assinar este documento (e-CNPJ ICP-Brasil)

Com o token A3 conectado, assine este arquivo (ou um PDF gerado a partir dele)
no assinador ICP-Brasil de documentos (Assinador gov.br, Adobe Acrobat ou utilitário
da certificadora), selecionando o certificado **e-CNPJ LC REPRESENTAÇÕES LTDA**
(thumbprint `3F2AD5139A0F454F0BABBDBB5B578D5C373E6F38`).

## Observação técnica — Assinatura Authenticode

A **assinatura de código Authenticode** dos instaladores `.exe`/`.msi` está em processo
de regularização: o certificado Code Signing ICP-Brasil (produto diferente do e-CPF/e-CNPJ)
foi solicitado à certificadora SyngularID. Enquanto o certificado não chega:

- Os instaladores 1.0.2 exibem o aviso padrão do SmartScreen ("editor desconhecido").
- O pacote **MSIX** distribuído pela **Microsoft Store** é assinado pela própria Microsoft
  durante a certificação — **sem aviso do SmartScreen** nessa via de instalação.
- A propriedade intelectual fica registrada por **este documento assinado** + hashes SHA-256.
