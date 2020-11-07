# Estrutura Básica de uma API RESTful detalhada

![](https://img.shields.io/badge/Express-4.17.1-brightgreen) <br> ![](https://img.shields.io/badge/mysql2-2.2.5-blueviolet) <br> ![](https://img.shields.io/badge/sequelize-6.3.5-blue) <br> ![](https://img.shields.io/badge/body--parser-1.19.0-ff69b4)


### Estrutura de Diretórios Principais

```text
src/
 | ⟶ api/
 |    | ⟶ controllers/
 |    | ⟶ database/
 |    | ⟶ models/
 |    | ⟶ routes/
 | ⟶ postman/
```

---

### Como Estudar

* Ordem dos Conteúdos

1. [O que é uma API](markdown/1-O-que-é-uma-api.md).
2. [Como criar um Servidor Inicial](markdown/2-Servidor-Inicial.md).
3. [Baixando e Configurando o Express](markdown/3-Configurando-Express.md).
4. [Configurando o Sequelize para o Banco de Dados](markdown/4-Configurando-Banco-de-Dados.md).
5. [Criando um Model](markdown/5-Criando-um-Model.md).
6. [Criando um Controller](markdown/6-Criando-um-Controller.md).
7. [Criando um Route](markdown/7-Criando-um-Route.md).
8. [Tratamento de Erros](markdown/8-Tratamento-de-Erros-Globais.md).
9. [Conectando o Banco de dados](markdown/9-Conectando-Banco-de-Dados.md).
10. [Testando a API com Postman](markdown/10-Testando-a-API.md).

* Conteúdos Extras

1. [O que é Express](markdown/express.md).
2. [O que é JSON](markdown/json.md).
3. [O que é MySQL](markdown/mysql.md).
4. [O que é Nodejs](markdown/nodejs.md).
5. [O que é Postman](markdown/postman.md).
6. [O que é Sequelize](markdown/sequelize.md).

---

### Programas utilizados e como instalar

Programa|Descrição|Informação sobre|Extra|
|---|---|---|---|
`Postman`|Programa que Auxilia no Teste e Documentação das Rotas da API|[Documentação](src/postman/README.md)|[Site para Download](https://www.postman.com/downloads/)
`Nodejs`|Ambiente de Execução de Programas em Javascript|[Documentação](markdown/nodejs.md)|
`Express`|Framework Minimalista que gerencia Requisições HTTP|[Documentação](markdown/express.md)|
`Sequelize`|Mapeador de Objetos Relacionais (ORM) onde transforma tabelas do banco de dados em Classes|[Documentação](markdown/sequelize.md)|
`MySQL`|SGBD Relacional escolhido|[Documentação](markdown/mysql.md)|
`JSON`|Javascript Object Notation|[Documentação](markdown/json.md)|
`Nodemon`||

---

### Estruturação dos Programas

<img src="images/programs/programas-api-restful.png">

