# O que é uma API RESTful

* **API** significa **A**pplication **P**rogramming **I**nterface.

APIs são um conjunto de Instruções e Padrões de programação que servem para fornecer dados e informações relevantes de uma determinada aplicação.

Dentro do mundo das APIs existe um Padrão conhecido como **RESTful**.

as APIs estão presentes na maioria das aplicações e sistemas inteligentes que utilizamos. Grande parte das APIs são criadas para integração entre um Software de uma empresa e produtos associados.

as APIs utilizam uma rede para o tráfego de informações,de uma forma padronizada.Pode ser através de uma rede local ou a internet.

#### Formatos de APIs

Existem 3 formas de APIs:

1. APIs locais.
2. APIs Baseada em Programas.
3. APIs na Web.

A API RESTful é uma **API em Web**, baseada no protocolo HTTP,um formato que vem se tornando padrão de uso conforme vivenciamos o aumento de soluções digitais hospeadas em nuvem.

#### O que são as APIs RESTful

API RESTful é uma interface que fornece dados em um formato padronizado baseado em Requisições _HTTP_.

A API RESTful fica inerte até ser feita uma requisição, como um carro estacionado até ser ativado por uma ignição.

AS APIs RESTful aumentam a performance para situações de concorrência, ou seja, quando muitas pessoas estão pedindo a mesma coisa ao mesmo tempo. São utilizados Verbos para definir qual é a finalidade da Requisição que está sendo enviada. Os Verbos são:

* **GET** : A Requisição é um pedido de dados para a API. A API vai buscar os dados solicitados em algum banco e vai retornar esses dados em um Formato _JSON_.
* **POST**: Tipo de Requisição utilizada para criar um Recurso em uma determinada API. São chamados de recursos o Objeto que está sendo tratado naquela API. Irá criar uma informação nova para ser adicionado ao banco de dados utilizando a estrutura do _JSON_.
* **PUT**: Requisição utilizada para atualizar o recurso indicado com alguma informação.
* **PATCH**: Requisição feita para atualização de somente uma parte de um Recurso.
* **DELETE**: Requisição para excluir um Dado.

Essas Requisições são acessadas por meio de _Endpoints_, que são as URLs nas quais são feitas as requisições,cada requisição aos endopoints é composta por:

1. O método HTTP
2. Um cabeçalho de requisição, que pode conter informações como dados de autenticação da API, dados da origem da requisição e formato do retorno.
   1. Esse formato de retorno da requisição na maioria das vezes é feito no formato _JSON_ como padrão

#### Exemplo de Requisições

Existe um programa bem útil chamado **Postman**