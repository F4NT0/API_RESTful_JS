<h1>Glossário</h1>

1. [Página Inicial](https://estudosdofantinho.github.io/API_RESTful_JS/).
2. [O que é uma API](1-O-que-é-uma-api.md).
3. [Como criar um Servidor Inicial](2-Servidor-Inicial.md).
4. [Baixando e Configurando o Express](3-Configurando-Express.md).
5. [Configurando o Sequelize para o Banco de Dados](4-Configurando-Banco-de-Dados.md).
6. [Criando um Model](5-Criando-um-Model.md).
7. [Criando um Controller](6-Criando-um-Controller.md).

---

# Configurando a API com o Banco de Dados

### Criando um Arquivo de Configuração

Iremos criar um Arquivo de Configuração chamado **config.js** onde terei os dados que serão utilizados pelo projeto inteiro.

Esse Arquivo vai ficar no Diretório **src/api/** para podermos utilizar.

O Arquivo **config.js** é estruturado em [JSON](json), onde terá todos os dados necessários para configurar o nosso banco de dados e outros dados importantes.

Como é a Estrutura no Arquivo:

```json
{
    development: {
        database: {
            host: , // o host do banco de dados, default é localhost
            port: , // porta do banco de dados,default é 3306
            name: , // nome que vai ser do banco de dados do projeto
            dialect: , // o banco de dados usado, no nosso caso é o MySQL
            user: , // o usuário do banco de dados, default é root
            password: , // é a senha do banco de dados, que no meu caso é senha            
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
}
```

* **development** ficam os dados para podermos usar no desenvolvimento pessoal, onde é o que vamos usar em nosso desenvolvimento localhost.
* **production** é para quando enviarmos a API para Servidor de produção, o que é o caso em empresas, mas para nós esse padrão fica assim.

###### Arquivo oficial para esse projeto

* Arquivo src/api/config.js

```json
{
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'template-api',
            dialect: 'mysql',
            user: 'root',
            password: 'senha',            
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
}
```

Beleza, temos o arquivo de configuração JSON feito, mas ele não pode ser lido pelos outros arquivos, para isso é preciso **Exportar** as informações para que os outros arquivos Javascript possam ler os dados, para isso iremos exportar o módulo com o seguinte código:

```javascript
module.exports = //...
```
Assim, podemos chamar dados do JSON em qualquer lugar, ficando o arquivo completo _config.js_ assim:

```json
module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'template-api',
            dialect: 'mysql',
            user: 'root',
            password: 'senha',            
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
}
```

### Conectando com o Banco de Dados usando o Sequelize

* Agora que temos a configuração pronta, iremos nos contectar ao Banco de dados com o [Sequelize](sequelize), onde eu tenho um Arquivo explicando como ele funciona.

* Para utilizarmos o Sequelize, precisamos baixar ele em nosso programa, usando o npm do Nodejs. O Sequelize possui uma dependencia que é o módulo `mysql2` que é o módulo que o Nodejs usa para se conectar ao MySQL. Abaixo os comandos para instalar os Módulos necessários:

```shell
# Primeiro, baixe o mysql2
> npm install --save mysql2

# Segundo, baixe o sequelize
> npm install --save sequelize

# Terceito, baixe o sequelize-cli, que ajuda o sequelize
> npm install --save sequelize-cli
```

* Com o Sequelize iremos nos conectar ao Banco de dados [MySQL](mysql) onde iremos construir objetos que não só vão nos ajudar a criar as informações no banco de dados como também ajudar a pegar esses dados od banco de dados.

#### Criando o database.js

Vamos criar um Arquivo no Diretório _src/api/database_ chamado **database.js** que vai nos servir para ser a configuração com o Banco de dados, onde a primeira constante do projeto é o Import do Sequelize:

```javascript
const Sequelize = require("sequelize");
```

Agora, iremos definir qual é o nosso **enviroment** de utilização, ou seja, se estamos usando usando o de produção ou o nosso de desenvolvimento utilizado no nosso _config.js_: 

```javascript
const enviroment = process.env.NODE_ENV || 'development';
```

Com isso, se tiver um enviroment de produção ele vai pegar **ou** vai usar o development, que existe no nosso arquivo _config.js_

Nesse momento, vamos chamar essa constante no import do arquivo _config.js_ dentro do nosso arquivo _dabase.js_:

```javascript
const enviroment = process.env.NODE_ENV || 'development';

const config = require('../config.js')[enviroment];
```

Então, com a constante **config** posso pegar os dados que estão no arquivo _config.js_

#### Criando novo Sequelize

Vamos agora criar o Sequelize do nosso projeto, colocando os dados que estão salvos do arquivo _config.js_

Para isso iremos criar um novo Sequelize usando a contante `Sequelize` criada com o import do sequelize passando como parâmetro os seguintes dados:

1. Nome do Banco de Dados = salvo como _name_ no _database_.
2. Usuário que vai acessar o Banco de dados = salvo como _user_ no _database_.
3. Senha de acesso = salvo como _password_ no _database_.
4. Vai ser aberto um Objeto Javascript, que vai ser adicionado:
   1. o Host = salvo como _host_ no _database_.
   2. o tipo de banco de dados = salvo como _dialect_ no _database_.

Tudo isso será salvo na constante **sequelize**:

```javascript
const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);
```

# Próximo Passo

O próximo passo é Construir os **Models**