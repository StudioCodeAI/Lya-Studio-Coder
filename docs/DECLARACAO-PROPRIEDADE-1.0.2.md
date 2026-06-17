# Declaração de Autoria e Propriedade Intelectual — Lya Studio Coder 1.0.2

**Produto:** Lya Studio Coder
**Versão:** 1.0.2
**Identificador:** com.lya.studiocoder
**Data do build:** 2026-06-16 (reedição 1.0.2 — ver nota abaixo)
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
| `Lya Studio Coder_1.0.2_x64-setup.exe` (NSIS) | 49.309.097 | `BD405CD6D38F380C38B56C3B1EAC95E99C0F5B6DFF93AF7DE933417A5D9FB3B7` |
| `Lya Studio Coder_1.0.2_x64_en-US.msi` (MSI) | 74.619.046 | `ABD77389B67E4192B1771E58FA8B9571B766C08FF08ACB365A7E9D95A9658655` |
| `LyaStudioCoder_1.0.2.0_x64.msix` (Microsoft Store) | 79.675.870 | `A6798AB51624E7832BFE5CFCE6EDB4D9F226BF6DD0C67A315BDE78EBF042B409` |

> **Reedição 2026-06-16:** os instaladores 1.0.2 foram reconstruídos para corrigir
> (a) o ícone do app/tiles — agora a identidade visual real da Lya, não mais o placeholder
> genérico — e (b) uma falha de inicialização do backend empacotado que abria a janela em
> branco. Os hashes acima substituem os da primeira publicação de 1.0.2. Por mudarem os
> artefatos, **este documento precisa ser assinado novamente** com o e-CNPJ.

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
