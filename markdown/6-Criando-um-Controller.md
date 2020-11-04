<h1>Glossário</h1>

1. [Página Inicial](https://estudosdofantinho.github.io/API_RESTful_JS/).
2. [O que é uma API](1-O-que-é-uma-api.md).
3. [Como criar um Servidor Inicial](2-Servidor-Inicial.md).
4. [Baixando e Configurando o Express](3-Configurando-Express.md).
5. [Configurando o Sequelize para o Banco de Dados](4-Configurando-Banco-de-Dados.md).
6. [Criando um Model](5-Criando-um-Model.md).
7. [Criando um Controller](6-Criando-um-Controller.md).

---

# Criando um Controller na API

**Controller** são Funções que irão ajudar na interação entre o Model com as Requisições feitas para a API, onde esses Controllers auxiliam no _Request_ e _Response_ que serão transmitidas, sendo uma Forma de Controle das Requisições.

#### Chamando o Model

* Antes de começarmos a implementar nosso Controller, precisamos importar o Model que será vinculado a esse Controller, como no caso queremos criar o Controller do Model _Clients_, devemos importar ele dentro do nosso Controller.
* Essa Importação devemos colocar o mesmo nome do export do Model, como abaixo:

Export do _clientsModel_:

```javascript
module.exports = Clients;
```

Nome da Importação do Model no Controller:

```javascript
const Clients = require("../Models/clientsModel");
```

#### Utilizando o exports

* a palavra **exports** irá exportar um objeto, como vimos anteriormente com `module.exports` utilizado para exportar um objeto.
* Iremos usar uma sintaxe onde iremos usar o exports com o nome do método que iremos implementar para pegar os objetos, como abaixo:

```javascript
exports.nomeMetodo = //...
```

#### Enviando um Middleware para o método

* Com o método definido, utlizamos um Middleware como fizemos no arquivo _index.js_ para a utilização da Função `use()` do Express, como exemplo abaixo:

```javascript
exports.nomeMetodo = (request,response,next) => {
    //...
};
```

* Esses middlewares vão ser o principal do Controller, onde cada Middleware vai fazer um pedido diferente para o nosso Model

#### Quais os Middlewares utilizados

Ao todo serão 5 Middlewares utilizados para buscar os dados do Cliente:

1. Pegar um Cliente = **findOne**.
2. Pegar todos os Clientes = **findAll**.
3. Criar um cliente = **create**.
4. Atualizar um cliente = **update**.
5. Deletar um cliente = **delete**.

#### Implementação desses Middlewares no Controller

O primeiro Middleware que vamos criar é o de Pegar um Cliente do Banco de dados.

---

<h6>findOne</h6>

* Começamos criando o export e o inicio do middleware do Método findOne:

```javascript
exports.findOne = (request,response,next) => {
    //...
};
```

* Como vamos pegar um dado do Banco de dados e a forma de encontrar esse dado é pela Requisição do ID do Cliente em nossa Rota (que será mostrado mais tarde) então devemos pegar esse ID passado pelo _request_.
  * Esse ID que iremos pegar será armazenado em uma constante chamada id, onde com ela iremos procurar esse cliente por esse id pedido.

```javascript
exports.findOne = (request,response,next) => {
    const id = request.params.id;
    //...
};
```

* Agora que temos o ID, vamos utilizar o nosso Model importado para procurar esse cliente.
* O Sequelize quando criamos o nosso modelo **Clients** ele já possui Funções para nos ajudar a fazer as requisições no banco de dados.
* A Função que iremos usar nesse Middleware vai ser o `findById()` que iremos passar como Parâmetro o ID recebido do Request e salvo na constante id:

```javascript
// o Import
const Clients = require("../models/clientsModel");

exports.findOne = (request,response,next) => {
    const id = request.params.id;

    // Utilizando a Função findById
    Clients.findById(id)
};
```
* A função `findById()` vai nos retornar uma **Promise**:
  * **Promise** = é um objeto usado para processamento assíncrono. Um Promise (de promessa) representa um valor que pode estar disponível agora, no futuro ou nunca, portanto devemos tratar essa Promise dependendo do que for retornado.
* Como ele é uma Promise, **Devemos tratar esse processo Assíncrono** onde podemos usar as seguintes Funções:

Método `then()` = É onde registramos o que queremos que aconteça quando a Promise for resolvida.

Método `catch()` = É onde registramos o que queremos que aconteça quando a Promise falhar.

**Utilizando a Função then**

* No nosso caso tem duas coisas que queremos que essa promise faça:
  * Caso exista um Cliente com o id passado, devemos enviar os dados desse cliente pelo _response_ utilizando a Função `send()`, onde ele vai enviar esses dados do banco de dados para o Browser, ou programa onde esta API estiver conectada
  * Caso não exista um Cliente devemos enviar um resposta 404 com um texto informando que esse cliente não existe.
* Para fazermos isso iremos chamar a Função `then()` e dentro dele iremos criar uma Arrow Function tratando essas duas opções:

```javascript
exports.findOne = (request,response,next) => {
    const id = request.params.id;

    Clients.findById(id).then(client => {
        if(client){
            response.send(client);
        }else{
            response.status(404).send(`Cliente with ID ${id} not Found!`);
        }
    })
};
```

* Podemos ver que criamos _client_ que vai pegar o resultado da Promise e com ele dentro da Arrow Function vai ser verificado se o cliente existe ou não dentro do banco de dados, onde se não existir, vai enviar um 404 e uma mensagem dizendo que o cliente com aquele id não existe dentro do banco de dados.

**Utilizando a Função catch**

* Caso aconteça um Erro com o banco de dados ou algum erro inesperado, iremos utilizar o Express para enviar esse erro para o proximo Middleware, onde dai não precisamos nos preocupar com esse erro em nosso projeto.
* Então criamos um Arrow function que vai pegar o erro inesperado caso aconteça e o passe para outro Middleware utilizando o _next_ que temos como parâmetro:

```javascript
exports.findOne = (request,response,next) => {
    const id = request.params.id;

    Clients.findById(id).then(client => {
        if(client){
            response.send(client);
        }else{
            response.status(404).send(`Cliente with ID ${id} not Found!`);
        }
    }).catch(error => next(error));
};
```
---

<h6>findAll</h6>

* Para esse Middleware iremos implementar junto uma **Paginação**.
  * **Paginação** nos ajuda a pegar um numero de dados por vez, de vez de pegar todos os dados de uma única vez, que se for muitos dados de uma única vez pode prejudicar nosso banco de dados ou demorar demais para apresentar os dados para podermos verificar, sendo uma boa idéia para um projeto com muitos dados.
* Primeira coisa que devemos fazer é consruir o Template do Middleware:

```javascript 
exports.findAll = (request,response,next) => {
    //...
};
```
* Agora vem uma parte bem complexa, iremos enviar com o _request_ para a nossa API valores do **limite de informações de uma pagina** e o **numero da pagina** como no exemplo abaixo:

```text
localhost:3000/.../.../?limit=10&page=0
```

* Nesse exemplo simples, podemos ver que o parâmeto _limit_ envia um número, que é 10 e o parâmetro _page_ vai enviar um número também, que é 0. Esses parâmetros devem ser pegos pelo Método findAll e tratar eles, onde:
  * _limit_ é o número de dados limites de uma página, no caso acima são 10 dados por página.
  * _page_ é o número da página, onde no exemplo queremos a página 0.
* Agora como vamos pegar essas dados no nosso Middleware? como abaixo:

```javascript
exports.findAll = (request,response,next) => {
    let limit = parseInt(request.query.limit || 0);
    let page = parseInt(request.query.page || 0);
    //...
};
```
* Essas duas variáveis estão pegando os parâmetros colocados na requisição e transformando em um valor inteiro e se não existir esses parâmetros ele retorna zero nas duas variáveis.

* Se esses dados não forem inteiros, eu devo enviar uma mensagem de Erro como resposta, complementando o código acima com as seguintes linhas:

```javascript
exports.findAll = (request,response,next) => {
    let limit = parseInt(request.query.limit || 0);
    let page = parseInt(request.query.page || 0);
    
    if(!Number.isInteger(limit) || !Number.isInteger(page)){
        response.status(400).send("limit or page are not Numbers!");
    }

    //...
};
```

* Essa verificação irá ver se algum dos dois dados é ou não um Inteiro e se não for ele vai retornar o Status 400, que significa _Bad Request_ onde para leigos significa que deu um problema no request e com isso é enviado a mensagem que ou o limite ou a pagina do parâmetro não é um Número.

* Beleza, agora devemos verificar se esses parâmetros são valores possíveis no programa,onde teremos que fazer um cálculo para ver se o limite e a página estão dentro dos valores possiveis.

* Para isso, preciso definir qual o numero maximo de dados desejo que apareça por página, para isso eu crio uma constante que vai possuir o meu numero máximo desejado, como por exemplo 10 dados por página:

```javascript
exports.findAll = (request,response,next) => {
    let limit = parseInt(request.query.limit || 0);
    let page = parseInt(request.query.page || 0);
    
    if(!Number.isInteger(limit) || !Number.isInteger(page)){
        response.status(400).send("limit or page are not Numbers!");
    }

    const MAX_PAGE_ITENS = 10;

    //...
};
```

* Nesse momento então eu irei verificar, utilizando um **IF simplificado** se os valores passados pelo _limit_ e pelo _page_ estão dentro dos limites que desejo:
  * **IF simplificado**: `verificação ? resultado se true : resultado se false`

```javascript
exports.findAll = (request,response,next) => {
    let limit = parseInt(request.query.limit || 0);
    let page = parseInt(request.query.page || 0);
    
    if(!Number.isInteger(limit) || !Number.isInteger(page)){
        response.status(400).send("limit or page are not Numbers!");
    }

    const MAX_PAGE_ITENS = 10;

    limit = limit > MAX_PAGE_ITENS || limit <= 0 ? MAX_PAGE_ITENS : limit;
    page = page <= 0 ? 0 : page * limit;

    //...
};
```

* Entendendo esses testes:

`limit = limit > MAX_PAGE_ITENS || limit <= 0 ? MAX_PAGE_ITENS : limit;` pode ser visto em sua forma antiga como:

```javascript
if(limit > MAX_PAGE_ITENS || limit <= 0){
    limit = MAX_PAGE_ITENS;
}else{
    limit = limit;
}
```
* Ou seja, se o limite for maior que o máximo que pode por página ou se o limite for menor que zero, o valor do limite vai ser sobrescrito com o valor da nossa constante MAX_PAGE_ITENS que tem como valor 10 dados por página. Se tiver em um valor dentro do limite possivel, o valor do limite se mantém o valor entrado.

`page = page <= 0 ? 0 : page * limit;` : não podemos ter uma página negativa, portanto se entrar como parâmetro um número negativo ele vai sempre acessar a página zero, se for um número de página possivel, ele vai pegar o numero da página e multiplicar pelo valor do limite.

* Agora que fizemos todas as verificações necessárias, podemos utilizar a Função `findAll` do Sequelize para pegarmos os dados desejados do banco, onde iremos passar como parâmetro o _limit_ e o _page_:

```javascript
exports.findAll = (request,response,next) => {
    let limit = parseInt(request.query.limit || 0);
    let page = parseInt(request.query.page || 0);
    
    if(!Number.isInteger(limit) || !Number.isInteger(page)){
        response.status(400).send("limit or page are not Numbers!");
    }

    const MAX_PAGE_ITENS = 10;

    limit = limit > MAX_PAGE_ITENS || limit <= 0 ? MAX_PAGE_ITENS : limit;
    page = page <= 0 ? 0 : page * limit;

    Clients.findAll({limit: limit, offset: page})
    
};
```

* Os atributos _limit_ e _offset_ serão usados pelo Sequelize para criar a Cláusula LIMIT em nosso SGBD, que no caso é o MySQL para paginar os dados que estão armazenados no banco de dados.

* E por fim, nesse Middleware, iremos utilizar as Funções `then()` e `catch()` para lidarmos com os dados pegos nessa Promise findAll:

```javascript
exports.findAll = (request,response,next) => {
    let limit = parseInt(request.query.limit || 0);
    let page = parseInt(request.query.page || 0);
    
    if(!Number.isInteger(limit) || !Number.isInteger(page)){
        response.status(400).send("limit or page are not Numbers!");
    }

    const MAX_PAGE_ITENS = 10;

    limit = limit > MAX_PAGE_ITENS || limit <= 0 ? MAX_PAGE_ITENS : limit;
    page = page <= 0 ? 0 : page * limit;

    Clients.findAll({limit: limit, offset: page}).then(clients => {
        response.send(clients);
    }).catch(error => next(error));
    
};
```
* Então no fim, o `then()` vai enviar no _response_ todos os dados adquiridos do Promise e enviar para o programa ou para o Browser ou para o Postman no nosso caso.

---

<h6>create</h6>

* Este Método ele é bem interessante e peculiar, porque com ele iremos criar um novo cliente e para isso nós iremos pegar um JSON com os dados necessários para criar um novo Cliente.
* Como estamos usando o Postman para fazer as Requisições, ele vai nos ajudar a construir e enviar para a Requisição os dados, como no GIF abaixo de exemplo:

<img src="">