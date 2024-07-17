# Aula 01 - Introdução aos Serviços Web

## Objetivos

- Entender os conceitos básicos de serviços web
- Configurar um servidor básico usando Node.js e Express
- Criar rotas simples para responder a requisições HTTP

## Conteúdo

1. **Configuração do Ambiente**
    - Instalação do Node.js e NPM
    - Configuração do projeto com `npm init`

2. **Instalação e Configuração do Express**
    - Instalação do Express
    - Configuração do servidor básico

3. **Criação de Rotas**
    - Definição de rotas GET e POST
    - Envio de respostas JSON

## Passo a Passo

1. **Configuração do Ambiente**

    Certifique-se de que o Node.js está instalado:
    ```bash
    node -v
    npm -v
    ```

    Inicialize o projeto Node.js:
    ```bash
    npm init -y
    ```

2. **Instalação e Configuração do Express**

    Instale o Express:
    ```bash
    npm install express
    ```

    Crie o arquivo `index.js` e configure o servidor:
    ```javascript
    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
    ```

3. **Criação de Rotas**

    Adicione uma rota POST ao `index.js`:
    ```javascript
    app.post('/data', (req, res) => {
        res.json({ message: 'Dados recebidos com sucesso!' });
    });
    ```

    Execute o servidor:
    ```bash
    node index.js
    ```

## Conclusão

Nesta aula, configuramos um servidor básico usando Node.js e Express e criamos rotas simples para responder a requisições HTTP.

## Próxima Aula

[Aula 02 - Integração com Banco de Dados](../aula02-07)
