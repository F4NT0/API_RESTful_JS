# Estrutura Básica de uma API RESTful detalhada

### Estrutura de Diretórios

```text
src/
 | ⟶ api/
 |    | ⟶ controllers/
 |    | ⟶ database/
 |    | ⟶ models/
 |    | ⟶ routes/
 | ⟶ postman/
```


### Como Estudar

* Ordem dos Conteúdos

1. [O que é uma API](markdown/1-O-que-é-uma-api.md).
2. [Como criar um Servidor Inicial](markdown/2-Servidor-Inicial.md).
3. [Baixando e Configurando o Express](markdown/3-Configurando-Express.md).
4. [Configurando o Sequelize para o Banco de Dados](markdown/4-Configurando-Banco-de-Dados.md).

### Programas utilizados e como instalar

Programa|Descrição|Informação sobre|Extra|
|---|---|---|---|
`Postman`|Programa que Auxilia no Teste e Documentação das Rotas da API|[Documentação](src/postman/README.md)|[Site para Download](https://www.postman.com/downloads/)
`Nodejs`|Ambiente de Execução de Programas em Javascript|[Documentação](markdown/nodejs.md)|
`Express`|Framework Minimalista que gerencia Requisições HTTP|[Documentação](markdown/express.md)|
`Sequelize`|Mapeador de Objetos Relacionais (ORM) onde transforma tabelas do banco de dados em Classes|[Documentação](markdown/sequelize.md)|
`Nodemon`|Atualizador automatico do Nodejs|Instalação: `npm intall -g nodemon`|
`cli-color`|Para colorir a saida do Terminal|Instalação: `npm install cli-color`|
`MySQL`|SGBD Relacional escolhido|[Documentação](markdown/mysql.md)|
`JSON`|Javascript Object Notation|[Documentação](markdown/json.md)|

**Estruturação dos Programas**

<img src="images/programs/programas-api-restful.png">

