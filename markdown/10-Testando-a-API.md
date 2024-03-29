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

# Testando a API

### Instalando o Body-parser

**body-parser** é um Módulo que nos ajuda a receber dados em JSON para gravarmos ou lermos das Requisições, já que o Próprio Nodejs tem dificuldade de fazer isso.

* Para instalar o body-parser, utilizamos o seguinte comando no terminal no mesmo diretório do nosso _package.json_, que no caso é o diretório _src/api/_:

```shell
> npm install body-parser --save
```

* Agora que temos ele instalado, devemos configurar ele em nosso _index.js_, onde começamos importando ele em nosso Servidor:

```javascript
const bodyParser = require("body-parser");
```

* Agora, utilizando a nossa constante _app_ onde foi inicializado o Express, iremos dizer para ele receber os dados das Requisições em JSON:

```javascript
app.use(bodyParser.json());
```

* Depois, dizer para que as codificações das urls sejam totalmente extendidas, recebendo todos os dados:

```javascript
app.use(bodyParser.urlencoded({extended: true}));
```

* Pronto! agora podemos escrever um JSON e enviar pelas Requisições.


### Rodando o Servidor

* Primeira coisa a fazer é criar um Script para rodarmos o Servidor, onde eu criei esse Script alterando o nosso arquivo _package.json_:

```json
{
  "name": "api",
  "version": "1.0.0",
  "description": "API Example",
  "main": "index.js",
  "scripts": {
    "test": "node index.js"
  },
  "author": "Gabriel Fanto",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "mysql2": "^2.2.5",
    "sequelize": "^6.3.5"
  }
}
```

* Como mostra na área de `scripts`, toda vez que eu rodar o comando **npm test** dentro do Diretório _api/_ ele vai rodar o Servidor, mas como nossa API não fica no Source code do Repositório, irei criar um arquivo Shell Script chamado _run.sh_ que vai acessar a API e rodar o comando do **npm test**.

```shell
#!/bin/bash

# -------------------
# RUN THE API SERVER
# ------------------

cd src/api/
npm test
```

* Para fazer esse arquivo executável, utilizei o seguinte comando no terminal no diretório dele:

```shell
> chmod +x run.sh
```

* Para executar esse Script, usamos o seguinte comando no Terminal:

```shell
./run.sh
```

* Se tudo der certo, ele vai mostrar as seguintes informações:

<img src="../images/script.png">

### Verificando o MySQL

* Se o Servidor rodar direito como acima, ele vai criar a Tabela _clients_ com todos os dados definidos no Model _api/models/clientsModel.js_ e com isso também criando as colunas na Tabela, como mostra a imagem abaixo:

<img src="../images/mysql/created-clients.png">

### Colocando mensagem com URL

* Uma coisa que faltou era uma Mensagem de onde a nossa API está rodando, onde iremos colocar a seguinte mensagem dentro do `server.listen()`:

```javascript
server.listen(port, () => {
        console.log(`Server Running at http://localhost:${port}/`);
});
```

### Testando no Postman

* Agora temos tudo pronto e se tudo der certo todas as Rotas irão funcionar.
* Para testarmos as nossas Rotas iremos utilizar o [Postman](postman) para testarmos as Rotas, de uma forma bem simples, onde a primeira coisa que iremos fazer é deixar o **Servidor rodando** no Terminal do VSCODE e iremos abrir o Postman instalado.
* Se desejar saber mais sobre o Postman, clique neste [LINK](postman).

#### Como testar

* Como não temos nenhum dado no nosso Banco de dados, iremos criar um Dado novo testando a Rota POST pelo Postman, onde iremos criar um Dado no Formato JSON e enviar pela rota desenvolvida.

* A URL base da nossa API roda no seguinte link: 

```shell
http://localhost:3000/
```

* Então no nosso Postman, todas as Requisições irão começar com esse URL:

<img src="../images/postman/etapa1-teste.png">

* Cada Requisição possui um caminho diferente, que estão definidos no arquivo routes da Tabela específica, além disso foi definido no arquivo _index.js_ que a rota principal inicial de todas as requisições é _/api_ portanto seguindo essa lógica abaixo tem uma tabela de todas as urls e o tipo de Requisição que deve ser usado no Postman:

Requisição|url dessa requisição|url completa
|---|---|---|
<code style="color: green">GET</code>|/clients/:id|http://localhost:3000/api/clients/:id
<code style="color: green">GET</code>|/clients|http://localhost:3000/api/clients
<code style="color: gold">POST</code>|/clients|http://localhost:3000/api/clients
<code style="color: blue">PUT</code>|/clients/:id|http://localhost:3000/api/clients/:id
<code style="color: red">DELETE</code>|/clients/:id|http://localhost:3000/api/clients/:id

* Como se pode ver bem, tem urls parecidas, como no caso do primeiro GET, o PUT e o DELETE, mas são Requisições diferentes feitos nessas urls
* Agora vou mostrar como fazer a requisição de cada uma dessas Requisições

---

### Testando o POST

* <code style="color: gold">POST</code> vai ser o nosso Primeiro teste devido que não temos dados dentro de nosso Banco de dados, portanto vamos criar um.
* Primeira coisa é alterarmos o tipo de Requisição que vamos fazer no Postman, como no GIF abaixo:

<img src="../images/postman/change-request-type.gif">

* Agora iremos colocar a url definido para o POST: `http://localhost:3000/api/clients`:

<img src="../images/postman/insert-url.gif">

* Este momento, iremos construir o JSON com os dados para colocarmos no nosso Banco de dados, onde para escrevermos o JSON, devemos ir na seguinte área do Postman:

<img src="../images/postman/start-json.gif">

* Nesse momento iremos colocar todos os dados necessários para criar um dado novo na nossa tabela, onde esses dados são:

Coluna|Tipo de dado
|---|---|
id|int
name|String
password|String
access|Char

<img src="../images/postman/json-writing.png">

* Então quando clicarmos no botão **Send** ele vai enviar esses dados para a Tabela de clientes, como no exemplo completo abaixo:

1) Primeiro iniciamos o Servidor:

<img src="../images/postman/start-server.gif">

2) Verificamos se foi criado a Tabela no nosso banco de dado selecionado:

<img src="../images/postman/verify-table.gif">

3) Vamos no Postman, selecionamos a requisição como <code style="color: gold">POST</code>,colocamos a url desejada e adicionamos os dados que queremos adicionar no formato JSON, tendo todos os dados necessários colocados, então depois disso clicamos no botão **Send** e esperamos o código 201 como Resultado e a mensagem que definimos como resposta, no caso _Client Created_:

<img src="../images/postman/post-created.gif">

4) Se voltarmos ao Servidor, que está rodando no Terminal, iremos ver que existe uma nova linha nele dizendo:

```text
Executing (default): INSERT INTO `clients` (`id`,`name`,`password`,`access`,`createdAt`,`updatedAt`) VALUES (?,?,?,?,?,?);
```

5) Então, agora indo novamente ao MySQL e reenviar a requisição de pegar os dados armazenados na Tabela, iremos ver que os dados entrado como JSON foram salvos no Banco:

<img src="../images/postman/save-on-database.gif">

**PRONTO** é assim que se faz para testar uma requisição, sendo nesse caso um <code style="color: gold">POST</code>

---

### Testando o GET de um dado

* Agora que temos um dado em nosso Banco de dados, vamos verificar se conseguimos pegar esse dado do Servidor.
* Para isso iremos definir como tipo de Request como um <code style="color: green">GET</code>:
* Agora, iremos colocar a estrutura do url como foi apresentado mais acima:

```text
http://localhost:3000/api/clients/:id
```

* Vamos então colocar essa url no Postman:

<img src="../images/postman/get-url-inserted.png">

* No lugar aonde está escrito **:id** vamos colocar o ID que queremos pegar e clicar no botão **Send** como mostrado abaixo:

<img src="../images/postman/get-test-postman.gif">

* Como foi mostrado acima, foi colocado o ID 1 no lugar da palavra id e mostra embaixo os parâmetros que estão sendo colocados na requisição e quando clicamos em **Send** ele vai pegar o parâmetro e vai retornar em formato JSON os dados do cliente daquele ID e com o Status de 200 OK, que significa que ele conseguiu encontrar e entregar os dados

---

### Testando o GET de todos os Dados

* Para isso eu adicionei mais um cliente no banco de dados, para podermos ver todos os clientes existentes:
* Abaixo um exemplo completo de tudo que fizemos no primeiro <code style="color: gold">POST</code>, para ficar bem apresentado:

<img src="../images/postman/post-completo.gif">

* Agora, vamos pegar a url para a requisição de todos os dados da tabela:

```text
http://localhost:3000/api/clients/
```

* Agora iremos usar o pedido de requisição <code style="color: green">GET</code> de novo com essa url:

<img src="../images/postman/getAll-completo.gif">

* Pronto! podemos ver todos os dados que existem dentro da tabela de clientes, onde se formos no nosso MySQL ele vai mostrar tanto o primeiro quanto o segundo que criamos para esse exemplo:

<img src="../images/postman/check-database-getall.gif">

---

### Testando o PUT 

* <code style="color: blue">PUT</code> como dito varias vezes é para alterar um dado já existente.
* Por isso que a url para ele se passa um ID e ainda por cima escrevemos os dados novos
* A url que usamos para o PUT é o mesmo que o do de pegar somente um:

```text
http://localhost:3000/api/clients/:id
```

* Onde alteramos o **:id** para o numero do id do cliente que queremos alterar

* Abaixo um exemplo onde eu pego o id do segundo dado criado e altero os dados pelo Body em estilo JSON:

<img src="../images/postman/put-test-completo.gif">

* Então, dessa forma quando eu pegar os dados de todos, vai mostrar as modificações:

<img src="../images/postman/show-put-update.gif">

---

### Testando o DELETE

* Agora que temos dois dados, vamos testar o delete de um deses dados, utilizando a mesma url do <code style="color: blue">PUT</code> mas no <code style="color: red">DELETE</code> utilizamos a requisição do <code style="color: red">DELETE</code> mesmo:

```text
http://localhost:3000/api/clients/:id
```

* Da mesma forma de antes, trocamos o **:id** pelo numero do ID

1) Vamos verificar os dados que temos:

<img src="../images/postman/delete-verify-all.gif">

2) Vamos pegar o url e chamar o modo <code style="color: red">DELETE</code>:

<img src="../images/postman/delete-add-url.gif">

3) Vamos clicar em **Send** e ver se recebemos a mensagem de deletado com Sucesso!:

<img src="../images/postman/delete-example-completo.gif">

* Pronto! temos as verificações de todas as Requisições possíveis!

---

## Criando uma Collection

* uma **Collection** é uma coleção do Postman de Requisições criadas, onde podemos salvar elas para utilizar no Futuro.

* Vou criar aqui uma Collection com todas as Requisições dos Clientes para se usar no Futuro

1) Criando uma nova Collection:

<img src="../images/postman/criando-collection.gif">

2) Vamos salvar a Requisição do <code style="color: gold">POST</code>

<img src="../images/postman/Collection-post.gif">

3) Vamos salvar a Requisição do <code style="color: green">GET ONE</code>

<img src="../images/postman/Collection-getone.gif">

4) Vamos salvar a Requisição do <code style="color: blue">PUT</code>

<img src="../images/postman/Collection-put.gif">

5) Vamos salvar a Requisição do <code style="color: green">GET ALL</code>

<img src="../images/postman/Collection-getall.gif">

6) Vamos salvar a Requisição do <code style="color: red">DELETE</code>

<img src="../images/postman/Collection-delete.gif">

7) Depois de salvar todas as Requisições, vamos exportar a Collection para o nosso Repositório no Diretório _src/api/postman_

<img src="../images/postman/export-collection.gif">

8) Quando quisermos utilizar essa Collection, só precisamos importar no Postman pegando do nosso Repositório:

<img src="../images/postman/import-collection.gif">

Pronto! temos então nossas Requisições da Tabela clients feitas,funcionando e armazenadas em nosso Repositório para podermos usar quando quisermos!

<img src="../images/postman/all-request-collection.png">

---

# PRÓXIMO PASSO

**Testes Unitários**