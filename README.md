# Validação de Formulário em JavaScript

Este projeto é um exemplo simples de validação de formulário utilizando JavaScript puro. Ele captura informações do usuário e realiza verificações básicas antes de confirmar o envio dos dados.

## 📋 Funcionalidades

- Verifica se o **nome** foi preenchido.
- Verifica se o **email** contém `@` e `.com`.
- Verifica se o **CPF** possui exatamente 11 dígitos.
- Avalia a força da **senha**, exigindo:
  - Pelo menos uma letra **maiúscula**
  - Pelo menos uma letra **minúscula**
  - Pelo menos um caractere **especial** (`!,@,#,$,%,&,*,?,+`)
- Garante que os campos **senha** e **senha repetida** sejam iguais.
- Exibe mensagens de erro em vermelho ou sucesso em verde.

## 🧠 Lógica da função

A função `enviaFormulario()` é executada ao enviar o formulário e realiza as seguintes etapas:

1. Captura os valores dos campos:
   - `nome`
   - `email`
   - `cpf`
   - `senha`
   - `senha-repetida`
2. Valida os dados e exibe mensagens na tela com base no resultado.

3. Exibe "Formulário enviado com sucesso!" caso todas as validações passem. 
