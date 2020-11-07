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

### O que é uma API

<code style="color: cyan">API</code> significa <code style="color: cyan">A</code>pplication <code style="color: cyan">P</code>rogramming <code style="color: cyan">I</code>nterface.

<code style="color: cyan">API</code>s são um conjunto de Instruções e Padrões de programação que servem para fornecer dados e informações relevantes de uma determinada aplicação.

Dentro do mundo das <code style="color: cyan">API</code>s quando uma API utiliza a estrutura REST ela é conhecida como RESTful.

As <code style="color: cyan">API</code>s estão presentes na maioria das aplicações e sistemas inteligentes que utilizamos. Grande parte das <code style="color: cyan">API</code>s são criadas para integração entre um Software de uma empresa e produtos associados.

as <code style="color: cyan">API</code>s utilizam uma rede para o tráfego de informações,de uma forma padronizada.Pode ser através de uma rede local ou a internet.

### O que é REST

<code style="color: magenta">REST</code> significa <code style="color: magenta">RE</code>presentational <code style="color: magenta">S</code>tate <code style="color: magenta">T</code>ransfer que representa uma possibilidade para a criação de Web Services, cujas principais diferenças em relação ao modelo tradicional(SOAP) estão na utilização semântica dos Métodos HTTP conhecidas como <code style="color: green">GET</code>,<code style="color: gold">POST</code>,<code style="color: blue">PUT</code>,<code style="color: red">DELETE</code> onde fica desnecessária a criação de camadas intermediárias.

### Formatos de APIs

Existem 3 formas de <code style="color: cyan">API</code>s:

1. <code style="color: cyan">API</code>s locais.
2. <code style="color: cyan">API</code>s Baseada em Programas.
3. <code style="color: cyan">API</code>s na Web.

A <code style="color: cyan">API</code> RESTful é uma **API em Web**, baseada no protocolo HTTP,um formato que vem se tornando padrão de uso conforme vivenciamos o aumento de soluções digitais hospeadas em nuvem.

#### O que são as APIs RESTful

<code style="color: cyan">API</code> RESTful é uma interface que fornece dados em um formato padronizado baseado em Requisições _HTTP_.

A <code style="color: cyan">API</code> RESTful fica inerte até ser feita uma requisição, como um carro estacionado até ser ativado por uma ignição.

AS <code style="color: cyan">API</code>s RESTful aumentam a performance para situações de concorrência, ou seja, quando muitas pessoas estão pedindo a mesma coisa ao mesmo tempo. São utilizados Verbos para definir qual é a finalidade da Requisição que está sendo enviada. Os Verbos são:

* <code style="color: green">GET</code> : A Requisição é um pedido de dados para a <code style="color: cyan">API</code>. A <code style="color: cyan">API</code> vai buscar os dados solicitados em algum banco e vai retornar esses dados em um Formato _JSON_.
* <code style="color: gold">POST</code>: Tipo de Requisição utilizada para criar um Recurso em uma determinada <code style="color: cyan">API</code>. São chamados de recursos o Objeto que está sendo tratado naquela <code style="color: cyan">API</code>. Irá criar uma informação nova para ser adicionado ao banco de dados utilizando a estrutura do _JSON_.
* <code style="color: blue">PUT</code>: Requisição utilizada para atualizar o recurso indicado com alguma informação.
* <code style="color: red">DELETE</code>: Requisição para excluir um Dado.

Essas Requisições são acessadas por meio de _Endpoints_, que são as URLs nas quais são feitas as requisições,cada requisição aos endopoints é composta por:

1. O método HTTP
2. Um cabeçalho de requisição, que pode conter informações como dados de autenticação da <code style="color: cyan">API</code>, dados da origem da requisição e formato do retorno.
   1. Esse formato de retorno da requisição na maioria das vezes é feito no formato _JSON_ como padrão

# PRÓXIMO PASSO

* [Criando um Servidor Inicial](2-Servidor-Inicial.md)