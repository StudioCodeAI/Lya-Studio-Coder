# Declaração de Autoria e Propriedade Intelectual — Lya Studio Coder 1.0.1

**Produto:** Lya Studio Coder
**Versão:** 1.0.1 (build de teste / pré-lançamento)
**Identificador:** com.lya.studiocoder
**Data do build:** 2026-06-14
**Titular dos direitos:** LC REPRESENTAÇÕES LTDA — CNPJ 52.867.002/0001-86
**Arquiteto / autor técnico:** Luis Antonio Cardozo

## Declaração

A LC REPRESENTAÇÕES LTDA declara, para fins de comprovação de **autoria e
propriedade intelectual**, ser titular do software **Lya Studio Coder** e de seus
instaladores identificados abaixo pelo resumo criptográfico (SHA-256). A assinatura
ICP-Brasil (e-CNPJ) aposta neste documento vincula a titular aos artefatos exatos
cujos hashes constam aqui.

## Artefatos (instaladores oficiais 1.0.1)

| Arquivo | Tamanho (bytes) | SHA-256 |
|---|---|---|
| `Lya Studio Coder_1.0.1_x64-setup.exe` (NSIS) | 48.072.621 | `3F9A54C514DC6B2D1BAB2EDF9C3BCD8BCF8EBC9E1B1AD7E7B6567665A6F43EF6` |
| `Lya Studio Coder_1.0.1_x64_en-US.msi` (MSI) | 73.283.750 | `AD332E902BA53A319C0C48A1F35346D5DB528A1585FF59E4871FB5F406A6DD3A` |

Para conferir a integridade de um instalador, recalcule o resumo e compare com a
tabela acima:

```powershell
Get-FileHash ".\Lya Studio Coder_1.0.1_x64-setup.exe" -Algorithm SHA256
```

## Como assinar este documento (e-CNPJ ICP-Brasil)

Este documento é a peça que recebe a assinatura digital como **declaração de
propriedade** — não os binários. Com o token A3 conectado, assine este arquivo
(ou um PDF gerado a partir dele) no seu assinador ICP-Brasil de documentos
(ex.: Assinador gov.br, Adobe Acrobat com o certificado, ou o utilitário da sua
certificadora), selecionando o certificado **e-CNPJ LC REPRESENTAÇÕES LTDA**
(thumbprint `3F2AD5139A0F454F0BABBDBB5B578D5C373E6F38`).

## Observação técnica importante

Os certificados **e-CPF / e-CNPJ (ICP-Brasil)** **não** possuem o EKU "Assinatura
de Código" (Code Signing) e, portanto, **não** podem assinar os instaladores via
Authenticode (`signtool`) — o que confirmamos na prática ("No certificates were
found that met all the given criteria"). Assim:

- Os instaladores 1.0.1 são distribuídos **não assinados via Authenticode** nesta
  fase de testes/pré-lançamento; o Windows SmartScreen exibirá o aviso padrão.
- A propriedade intelectual fica registrada por **este documento assinado** +
  os hashes SHA-256 dos binários.
- A **assinatura de código** que reduz/elimina o aviso do SmartScreen exige um
  certificado próprio de **Code Signing OV** (reputação) ou **EV** (sem aviso
  imediato) — a ser adquirido na etapa de lançamento oficial, conforme combinado.
