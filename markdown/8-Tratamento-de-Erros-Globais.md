<h1>Glossário</h1>

1. [Página Inicial](https://estudosdofantinho.github.io/API_RESTful_JS/).
2. [O que é uma API](1-O-que-é-uma-api.md).
3. [Como criar um Servidor Inicial](2-Servidor-Inicial.md).
4. [Baixando e Configurando o Express](3-Configurando-Express.md).
5. [Configurando o Sequelize para o Banco de Dados](4-Configurando-Banco-de-Dados.md).
6. [Criando um Model](5-Criando-um-Model.md).
7. [Criando um Controller](6-Criando-um-Controller.md).
8. [Criando um Route](7-Criando-um-Route.md).
9. [Tratamento de Erros Globais](8-Tratamento-de-Erros-Globais.md).

---

# Tratamento dos Erros Globais

* Existem os Seguintes Códigos mais usuais de Status:

Código do Status|Significado|Descrição
|---|---|---|
<code style="color: green">200</code>|<code style="color: green">OK</code>|A Requisição foi bem Sucedida!
<code style="color: green">201</code>|<code style="color: green">Created</code>|A Requisição foi bem Sucedida e um novo Recurso foi criado como resultado, normalmente enviada pela Requisição POST
<code style="color: red">400</code>|<code style="color: red">Bad Request</code>|Significa que o Servidor não entendeu a requisição pois está com uma Sintaxe Inválida.
<code style="color: red">401</code>|<code style="color: red">Unauthorized</code>|O Cliente deve se autenticar para obter a resposta solicitada.
<code style="color: red">403</code>|<code style="color: red">Forbidden</code>|O cliente está autenticado mas não tem acesso a informação.
<code style="color: red">404</code>|<code style="color: red">Not Found</code>|O Servidor não pode encontrar o Recurso solicitado.
<code style="color: red">408</code>|<code style="color: red">Request Timeout</code>|Se demorar mais que o tempo definido de espera para um Resultado, o Servidor para de tentar.
<code style="color: gold">500</code>|<code style="color: gold">Internal Server Error</code>|O Servidor encontrou uma Situação com a qual não sabe lidar.

* Agora em nosso projeto, iremos tratar o erro <code style="color: gold">500</code> em nosso Projeto, que são os erros que vivemos passando adiante com o `catch()` em nossos Controllers.

#### Criando o Middleware de Tratamento de Erros Desconhecidos

* Agora, depois do tratamento do Status 404 em nosso Arquivo _index.js_ iremos construir um novo Middleware que possuirá mais um Parâmetro de entrada, sendo esse parâmetro o `error` que sempre passamos a frente, como abaixo:

```javascript
app.use((error,request,response,next) => {
    //...
});
```

* E com esse Middleware, iremos lidar com o Status 500 apresentando na tela um JSON com o erro que o Servidor não soube lidar:

```javascript
app.use((error,request,response,next) => {
    response.status(500).json({error});
});
```

* Como não sabemos o tipo de erro que pode surgir, é forçado a saída do erro em JSON para que seja mais fácil de visualizar o erro e poder tratar ele de uma forma mais simples.

