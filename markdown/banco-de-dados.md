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
            name: , // nome do projeto
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
            name: 'api',
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
            name: 'api',
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

