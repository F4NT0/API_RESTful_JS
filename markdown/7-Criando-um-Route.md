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
10. [Conectando o Banco de Dados no Servidor](9-Conectando-Banco-de-Dados.md).
11. [Testando a API](10-Testando-a-API.md).

---

# Criando um Route na API

* Agora que temos o Model e o Controller pronto, nenhum dos dois faz nada se não definirmos as **Rotas** que vão ser utilizadas para que um programa ou o browser possa acessar a API, e é isso que iremos mostrar como fazer nesse passo.
* Todas as Routes que serão criadas irão ser armazenadas no Diretório _src/api/routes/_.

#### Importando os Módulos necessários

* Assim como o Controller importava o Model, agora o nosso Route para esse acesso precisa do import do Controller que criamos previamente, além do Módulo do Express:

```javascript
const express = require("express");
const controller = require("../controllers/clientsController");
```

#### Criando um Router do Express

* Iremos utilizar o Express para podermos criar rotas que irão lidar com as Requisições HTTP, por isso, foi criado uma constante chamada _router_ onde vai ser iniciado a Função `Router()` do Express:

```javascript
const router = express.Router();
```

#### Entendendo as Rotas usando o Router do Express

Existem 4 Tipos de Requisições HTTP que serão usados, onde utilizam verbos especificos para poder pegar as Requisições:

Requisição|Explicação
|---|---|
<img src="../images/postman/get-postman.png" width="100"> |GET serve para pegarmos informações de uma Rota
<img src="../images/postman/post-postman.png" width="100">|POST serve para publicarmos informações por uma Rota
<img src="../images/postman/put-postman.png" width="100">|PUT serve para atualizarmos informações de um dado a partir de um ID por exemplo
<img src="../images/postman/delete-postman.png" width="100">|DELETE serve para deletarmos um dado por uma Rota específica, onde iremos passar um Parâmetro por exemplo.

Agora, utilizando as Funções do Express `get()` , `post()` , `put()` e `delete()` que foram possiveis de usar na constante _router_ que foi inicializado graças a Função `Router()`.

* Como fica a chamada dessas Funções:

```javascript
const router = express.Router();

router.get(...);

router.post(...);

router.put(...);

router.delete(...);
```

* Cada uma dessas Funções precisam de dois Parâmetros:
  * **String da Rota**
  * **Função que será feita**

* O parâmetro da String da Rota é uma String com o nome da Rota que serão feitas as Requisições, onde ela depende do que cada Requisição precisa
* O parâmetro da Função é a chamada da Função que desejamos que as Requisições enviem os dados.

---

#### Criando a Rota GET para pegar um dado específico

* Como implementamos o `findOne` no nosso Controller, agora iremos implementar a Rota que vai ser feito a Requisição para esse Método.
* Para pegar dados, como dito antes, utilizamos a Função `get()` do Express, onde iremos passar como parâmetro a URL em String que vai ser usada para fazer a Requisição e além disso iremos chamar o Método `findOne` nessa Função.

```javascript
const express = require("express");
const controller = require("../controllers/clientsController");

const router = express.Router();

router.get('/clients/:id',controller.findOne);
```

* A String `:id` significa que iremos passar um ID como parâmetro na rota _/clients_ fazendo com que esse ID por parâmetro seja enviado para a Função `findOne` do Controller.

---

#### Criando a Rota GET para pegar todos os dados

* Agora iremos construir a Rota GET para pegar todos os dados, utilizando o método `findAll` para retornarmos os dados, utilizando a paginação criada

```javascript
const express = require("express");
const controller = require("../controllers/clientsController");

const router = express.Router();

router.get('/clients',controller.findAll);

```

---

#### Criando a Rota POST para criar novos dados

* Iremos agora utilizar a Função `post()` do Express para criarmos dados novos, onde iremos passar como parâmetro uma rota em String e o Método `create` do nosso Controller:

```javascript
const express = require("express");
const controller = require("../controllers/clientsController");

const router = express.Router();

router.post('/clients',controller.create);
```

* Utilizei a mesma rota do `findAll` mas eles não vão se interferir porque são duas requisições diferentes

---

#### Criando a Rota PUT para alterar dados por um ID

* Mesma idéia dos demais, iremos utilizar a Função `put()` do express e passar uma rota tendo como parâmetro um ID e iremos chamar o Método do Controller chamado `update`:

```javascript
const express = require("express");
const controller = require("../controllers/clientsController");

const router = express.Router();

router.put('/clients/:id',controller.update);
```

---

#### Criando a Rota DELETE para deletar um dado pelo seu ID

* Assim como na Função `put()` iremos utilizar a rota tendo um id como parâmetro e chamaremos o Método `delete`, mas dessa vez utilizando a Função do Express `delete()`:

```javascript
const express = require("express");
const controller = require("../controllers/clientsController");

const router = express.Router();

router.delete('clients/:id', controller.delete);
```

---

#### Exportando as Rotas

* Agora que temos as Rotas criadas e configuradas como queremos, temos que exportar essas Rotas para usarmos em qualquer outro lugar de nossa aplicação, onde usaremos como fizemos no Model, utilizando o `module.exports`:

```javascript
module.exports = router
```

* Dessa forma, todas as Funções criadas(get,post,put,delete) vinculadas a constante _router_ para todo o projeto.


### Adicionando as Rotas em nosso index.js

* Agora que temos as rotas feitas, temos que chamar o Arquivo das Routes em nosso Arquivo _Index.js_ onde fica a inicialização do Express, para que dessa forma ele saiba quais rotas estão disponíveis para serem feitas as Requisições.
* Tudo envolvido ao Express são Middlewares, como havia sido falado antes, como os Controllers são Middlewares entre os Models e as Requisições e as Funções feitas nos Routes ajudam a interagir com os Controllers para que eles possam estar sendo utilizados por programas ou requisições, como no Postman, mas eles devem ser chamados no Servidor desenvolvido no index.js para serem ativados esses Middlewares e esperarem alguma Requisição.

Como faremos isso?

1) Vamos importar o nosso Route desenvolvido em nosso Arquivo index.js

```javascript
const clientsRoute = require("./routes/clientsRoute");
```

2) Agora devemos tomar muito cuidado na hora de colocarmos a ordem dos nossos Middlewares, porque devemos colocar as novas rotas **ACIMA** dos tratamentos de erros ja definidos, como abaixo

```javascript
// Todas as Rotas AQUI encima

app.use((request,response,next) => {
    response.status(404).send('404 - Request not Found!');
});
```

Então seguindo essa lógica, devemos definir qual vai ser a rota oficial da nossa API, sendo a primeira rota que vai ser lida, como exemplo, irei chamar a primeira rota de _/api_

Bom, vamos chamar as Rotas utilizando a Função `use()` do express como abaixo, onde iremos passar como parãmetro a rota oficial e o nosso route criado e importado:

```javascript
const clientsRoute = require("./routes/clientsRoute");

app.use("/api",clientsRoute);

app.use((request,response,next) => {
    response.status(404).send('404 - Request not Found!');
});
```

### Tipo de Retorno ao Cliente

Para saber qual tipo de dado que sempre vai ser enviado ao Cliente, iremos auxiliar o Express para que ele sempre retorne uma resposta de tipo JSON, isso vai ajudar a sempre sabermos qual tipo de dado que vai ser enviado, para isso, em nosso _index.js_ iremos utilizar a Função `json()` do Express dentro da Função `use()` após definirmos a porta, porque ele segue uma ordem de Middlewares e Requisições:

```javascript
//...

app.set("port",port);

app.use(express.json());

//...
``` 

# PRÓXIMO PASSO

* [Tratamento de Erros Globais](8-Tratamento-de-Erros-Globais.md)