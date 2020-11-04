<h1>Glossário</h1>

1. [Página Inicial](https://estudosdofantinho.github.io/API_RESTful_JS/).
2. [O que é uma API](1-O-que-é-uma-api.md).
3. [Como criar um Servidor Inicial](2-Servidor-Inicial.md).
4. [Baixando e Configurando o Express](3-Configurando-Express.md).
5. [Configurando o Sequelize para o Banco de Dados](4-Configurando-Banco-de-Dados.md).
6. [Criando um Model](5-Criando-um-Model.md).

---

# Criando um Model na API

* Agora, com a ajuda do [Sequelize](sequelize) iremos construir um **CRUD**.

**CRUD** é um Acrônimo de **C**reate,**R**ead,**U**pdate e **D**elete, que são as quatro operações utilizadas para mexer em um Banco de Dados.

Essas Funções vão ser criadas para cada _Tabela_ dentro do nosso Banco de dados, onde cada uma delas vai ser um **Model** diferente.

Todos os Models criados irão ficar dentro do Diretório _src/api/models/_.

O Model que irei criar como exemplo para essa API será o de informações de um Cliente, onde deve possuir os dados necessários, que serão as colunas da tabela dos Clientes chamada **clients**.

* Os dados do Cliente são: O id do cliente,nome do cliente,senha de acesso,tipo de cliente,data da criação,data de modificação:

Coluna|Tipo de Dado
|---|---|
ID do cliente|NUMERIC
Nome do Cliente|VARCHAR
Senha de Acesso|VARCHAR
Tipo de Cliente|CHAR
Data de Criação|DATE
Data de Modificação|DATE

### Importando o Necessário

A primeira coisa que se deve ser feito é importar o Módulo do Sequelize e o Sequelize do nosso banco de dados:

```javascript
// Import do Sequelize
const Sequelize = require("sequelize");
```

```javascript
// Import do Sequelize do banco de dados
const sequelize = require("../database/database");
```

### Iniciando o Model

Para criarmos Models iremos usar a Função do Sequelize chamada `define()` que recebe dois parâmetros:

O primeiro parâmetro é o nome do nosso model, que também é o nome do arquivo, no nosso caso será **clients**.

O segundo parâmetro é um Objeto com os dados que serão as Colunas na Tabela do banco de dados, que será criada na primeira vez que rodar o programa.

Tudo isso será salvo dentro de uma Constante, que iremos definir como o nome do Model com a primeira letra maiuscula

**Definindo o nome do Model**

```javascript
const sequelize = require("../database/database");

const Clients = sequelize.define("clients",{
    //...
});
```

**Definindo os dados**

Agora vem uma parte bem extensa, que vai ser bem importante de vermos passo a passo como funciona, onde iremos construir cada um dos tipos de dados que estarão em nosso Banco de dados.

* O primeiro dado que deve ser inserido é o **id** do nosso cliente, onde irei mostrar o que cada dado significa:

```javascript
id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
}
```

Dado|O que significa
|---|---|
allowNull|Definimos se o campo ID pode ter o Estado como NULL no banco de dados, como nesse caso está _false_ significa que o ID **NÃO** pode ser Null em nosso Banco de dados.
autoIncrement|Definimos se o campo ID é inserido manualmente ou automaticamente pelo programa, como nesse caso está _true_ significa que sempre que for criado um novo ele vai adicionar o ID de forma automática.
primaryKey|É uma questão de Banco de dados, onde a primary key é a coluna que vai ser chamada em outras Tabelas, nesse caso a Coluna ID é a coluna que é a Primary Key.
type|É o tipo da Coluna, onde no caso usando o Módulo do Sequelize podemos dizer que ele é do tipo Inteiro.

* O segundo é o **nome do cliente**:

```javascript
name: {
    allowNull: false,
    type: Sequelize.STRING(120),
    validate: {
        len: [10,120]
    }
}
```

Dado|O que significa
|---|---|
allowNull|Se pode ou não ser Nulo, nesse caso não pode ser nulo.
type|Como é o nome de uma Pessoa, foi definido como o tipo de dado como String de até 120 caracteres.
validate|Serve para validar a entrada que vai ser enviado ao Banco de dados, para evitar dados sujos, no caso do name o tamanho mínimo do nome de uma pessoa é de 10 caracteres e o máximo é de 120.


* O terceiro é a **Senha de Acessso**:

```javascript
password: {
    allowNull: false,
    type: Sequelize.STRING(40),
    validate:{
        notEmpty: true,
        isDecimal: true,
        isLowercase: true,
        isUppercase: true,
        notNull: true,
        len: [5,40]
    }
}
```

Dado|O que significa
|---|---|
allowNull|Se pode ou não ser nulo, nesse caso não pode
type|A senha é do tipo String de tamanho 40
validate|Serve para verficarmos os dados antes de irem para o banco
notEmpty|Não aceita String vazia
isDecimal|Verifica se existe algum numero
isLowercase|Verifica se existe letras minusculas
isUppercase|Verifica se existe letras maiusculas
notNull|Não aceita Strings nulas
len|O tamanho minimo é de 5 caracteres e o maximo de 40

* O quarto é o **tipo de cliente**
    * Nesse caso se é aluno,administrador ou visitante
    * **S** é de Aluno (Student)
    * **A** é de Administrador(Admin)
    * **V** é de Visitante(Visitor)

```javascript
access: {
    allowNull: false,
    type: Sequelize.CHAR
}
```
* CHAR é o tipo de dado, onde se deve colocar com aspas simples:

```javascript
'S' ou 'A' ou 'V'
```

* O quinto é a **Data de Criação**:

```javascript
createdAt: {
    allowNull: true,
    type: Sequelize.DATE
}
```

* O tipo vai ser uma Data no Formato UTC: YYYY-MM-DD hh-mm-ss
  * Y = Ano
  * M = Mês
  * D = Dia
  * h = Hora
  * m = Minuto
  * s = Segundo

* O sexto é a **Data de Atualização**:

```javascript
updateAt: {
    allowNull: true,
    type: Sequelize.DATE
}
```

**Exportando o Model**

Agora que temos o nosso Model pronto, devemos exportar esse Model para que ele fique visível para o projeto, onde utilizamos o `module.exports` tendo o nome da Constante do Model, no caso o **Clients** como atribuição, como abaixo:

```javascript
module.exports = Clients;
```

### Finalização

* Todo o Código completo:

```javascript
const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Clients = sequelize.define("clients",{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(120),
        validate: {
            len: [10,120]
        }
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING(40),
        validate:{
            notEmpty: true,
            isDecimal: true,
            isLowercase: true,
            isUppercase: true,
            notNull: true,
            len: [5,40]
        }
    },
    access: {
        allowNull: false,
        type: Sequelize.CHAR
    },
    createdAt: {
        allowNull: true,
        type: Sequelize.DATE
    },
    updateAt:{
        allowNull: true,
        type: Sequelize.DATE
    }

});

module.exports = Clients;
```