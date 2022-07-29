<h1 align="center">
  <img src="src\image\imagem.jpeg" alt="três pessoas negras segurando uma faixa com o nome Pretitudes" width="500">
<p align="center">Diário do cuidador<p>
</h1>


## *Sumário*

- [Apresentação](#apresentação)
- [Contextualização](#contextualização)
- [Fonte dos dados](#fonte-dos-dados)
- [Funcionalidades](#funcionalidades)
- [Tecnologias, dependências e bibliotecas](#tecnologias-dependências-e-bibliotecas)
- [Instruções para instalação e contribuições no projeto](#instruções-para-instalação-e-contribuições-no-projeto)
- [Features e rotas](#features-e-rotas)
- [Referências](#referências)

## *Apresentação*

O "Diário do cuidador" é o projeto de conclusão do bootcamp de Back-end da [{reprograma}](https://reprograma.com.br/).  Essa é uma API que tem por objetivo reunir informações sobre pacientes e repassa-los as cuidadoras responsáveis.

A ideia é que ele possa ser ultilizado por cuidadoras que precisam se atualizar sobre a rotina do paciente em cada turno, isso facilita a comunicação e precisão das informações.

## *Contextualização*
O cuidador notmalmente trabalha por plantão de 12h, presta serviço em hospital e domiciliar.
Dando todo suporte para o paciente, higiene, medicação, alimentação, atividades de interação, passeios e muito carinho e amor.
ser cuidadora é se dedicar a vida do assistido, nossa rotina cria um laço afetivo.
Na maioria das vezes o contratante é um familiar e toda rotina é passada para o mesmo. Tem um ano que sou cuidadora um trabalho que vai além do salário, eu amo o que faço e faço com muita dedicação e respeito pelo idoso.

## *Funcionalidades*

- [X] Cadastro de cuidadoras
- [X] Cadastro de paciente
- [X] Lista de todas as pacientes
- [X] Lista de todos os cuidadores
- [X] Lista de cuidadres por id
- [X] Lista de paciente por id
- [X] Atualização de cadastro de paciente
- [X] Atualização de cadastro de cuidadora
- [X] Remoção de cadastro de paciente
- [X] Remoção de cadastro de usuario 

## *Tecnologias, bibliotecas e dependências*

<p align="left">
  <a>
    <a href="https://git-scm.com/"><img alt="Git version" src="https://img.shields.io/badge/Git/GitHub-yellow">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/NodeJS-yellow">
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Node version" src="https://img.shields.io/badge/MongoDB%20Atlas-yellow">
    <a href="https://herokuapp.com/"><img alt="Deploy on Heroku" src="https://img.shields.io/badge/Heroku-yellow">
    <br/>
    <a href="https://www.npmjs.com/"><img alt="npm version" src="https://img.shields.io/badge/npm-6.14.6-yellow">
    <a href="https://expressjs.com/pt-br/"><img alt="Express version" src="https://img.shields.io/badge/express-4.17.1-yellow">
    <a href="https://mongoosejs.com/"><img alt="Mongoose version" src="https://img.shields.io/badge/mongoose-5.10.17-yellow">
    <a href="https://www.npmjs.com/package/dotenv-safe"><img alt="Dotenv-safe version" src="https://img.shields.io/badge/dotenv-8.2.0-yellow">
    <a href="https://www.npmjs.com/package/nodemon"><img alt="Nodemon version" src="https://img.shields.io/badge/nodemon-2.0.6-yellow">
  </a> 
</p>

## *Instruções para instalação e contribuições no projeto*

- Faça um `fork` do projeto através do link (<https://github.com/Rosiene10/diario-de-um-cuidador>);

- Copie o código do fork realizado e, no prompt de comando da sua máquina, realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`;

- Crie uma branch para realizar suas contribuições `git checkout -b feature/<sua_branch>`;

- Instale as dependências necessárias à execução da API através do comando `npm install`;

- No raiz do projeto, renomeie `.env.example` para `.env` e adicione os valores das variáveis `PORT` (porta sugerida `1313`), `MONGODB_URL` (string de conexão com o banco de dados) e `SECRET` (chave RSA). Elas são necessárias para a execução da API em sua máquina

- Para executar a API, utilize o comando `npm start` no seu terminal;

- Após suas contribuições no projeto, realize o commit com o comando `git commit -m 'sua mensagem'`;

- Para subir o projeto no seu GitHub, basta executar o comando `git push origin feature/<sua_branch>`;

- E finalize criando um novo Pull Request com as contribuições para o projeto original.

## *Features e rotas*

Esta API está sendo escutada na `porta 1313` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:8080/` antes dos endpoints de requisição.

### Documentação do deploy

https://diario-de-um-cuidador.herokuapp.com/minha-rota-de-documentacao/

## *Referências*

[{reprograma} - Projeto Final](https://github.com/reprograma/on7-porto-s17-s18-projeto-livre)


<hr>

Criado com por *Rosiene Correia* 

[![Linkedin Badge](https://img.shields.io/badge/-Rosiene%20Correia-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/rosiene-correia-4a9913235/)