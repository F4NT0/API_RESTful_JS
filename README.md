# Estrutura Básica de uma API RESTful detalhada

### Estrutura de Diretórios

```text
src/
 | ⟶ api/
 |    | ⟶ controllers/
 |    | ⟶ models/
 |    | ⟶ routes/
 |    | ⟶ sql/
 | ⟶ postman/
```

<img src="images/folder-review.png">

### Como Estudar

* Cada Diretório possui um `README.md` que explica e detalha como foi feito essa API e uma das formas de construir uma API RESTful em Javascript.
* A ordem de READMEs são:

1. [Como foi criado o Projeto e o Servidor](markdown/initialization.md)
2. [Baixando e Configurando o Express](markdown/express.md)
3. [Configurando e Desenvolvendo o Banco de Dados](markdown/banco-de-dados.md)
4. [Diretório src/api/](src/api/README.md)
5. [Diretório src/api/models/](src/api/models/README.md)
6. [Diretório src/api/controllers/](src/api/controllers/README.md)
7. [Diretório src/api/routes/](src/api/routes/README.md)
8. [Diretório src/postman/](src/postman/README.md)

### Programas utilizados e como instalar

1. **Postman** - Programa que Auxilia no Teste e Documentação das Rotas da API
   1. Acesso o site oficial de Download [AQUI](https://www.postman.com/downloads/)
   2. Documentação de uso [AQUI](src/postman/README.md)
2. **Nodejs** - Ambiente de Execução de Programas em Javascript
   1. Documentação de Instalação e uso [AQUI](markdown/nodejs.md)
3. **Express** - Framework Minimalista que gerencia Requisições HTTP
   1. Documentação de Instalação e uso [AQUI](markdown/express.md)
4. **Sequelize** - Mapeador de Objetos Relacionais (ORM) onde transforma tabelas do banco de dados em Classes
   1. Documentação de Instalação e uso [AQUI](markdown/sequelize.md)
5. **Nodemon** - Atualizador automatico do Nodejs
   1. Para baixar: `npm install -g nodemon`
   2. Atualiza o Projeto sempre que um arquivo é modificado
6. **cli-color** - Para colorir a saida do Terminal
   1. Para baixar: `npm install cli-color`
7. **MySQL** - Banco de dados relacional selecionado
   1. Documentação e Instalação e uso [AQUI](markdown/mysql.md)


**Estruturação dos Programas**

<img src="images/programs/programas-api-restful.png">

