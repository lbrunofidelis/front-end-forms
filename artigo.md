## O projeto
<p align="justify">&emsp;
Este projeto é o <i>front-end</i> de um Simulador de Benefícios Previdenciários - que chamei de "PREV" - que tem como objetivo receber dados e valores da atual contribuição de um Participante em um plano - também chamado de "PREV", por falta de criatividade - e então calcular o montante final, valor de saque, e outros valores futuros.
</p>

## Tecnologias e dependências
<p align="justify">&emsp;
As principais <i>libs</i> utilizadas aqui foram:
</p>

* <i>React</i> para "componentização"
* <i>Bootstrap</i> e <i>Sass</i> para estilização e responsividade
* <i>Babel</i>, <i>Axios</i> e outras que não terão ênfase nesse artigo

## Estrutura do projeto
<p align="justify">&emsp;
Os arquivos e diretórios de nosso interesse são:
</p>

<p align="justify">
<b>/ - </b> Na raiz do projeto temos diversos arquivos de configuração (<i>.json, .lock</i>) e o README.md, mas o nosso foco aqui é no <i>package.json</i> para ficarmos de olho nas dependências.
</p>

<p align="justify">
<b>public - </b> Aqui contém os arquivos relacionados à publicação do projeto e nosso querido <i>index.html</i>.
</p>

<p align="justify">
<b>scripts - </b> Scripts criados pra facilitar no desenvolvimento do projeto.
</p>

<p align="justify">
<b>src - </b> Nesse diretório acontece a magia, aqui contém as páginas, componentes e estilização da aplicação.
</p>

## Single-Page Application (SPA)
<p align="justify">&emsp;
O conceito é tão simples quanto o nome: é uma aplicação de uma única página. E o motivo é que é bem performático, uma vez que toda a aplicação carrega apenas uma vez (com exceção das chamadas ao servidor (<i>backend</i>)) e as supostas "alterações de páginas" acontecem de forma instantânea, sem o recarregamento da página.
</p>
<p align="justify">&emsp;
Toda a aplicação (<i>Frontend</i>, regras de negócio, chamadas à API (<i>backend</i>)) roda dentro de uma página mestre, a <i>MasterPage.js</i> (localizada em: /src/pages). Uma vez que temos um evento dentro da aplicação, nós apenas alteramos o que queremos renderizar dentro da <i>MasterPage</i>, o que nos dá outra vantagem: não precisamos controlar rotas (pelo menos para esse tipo de aplicação).
</p>

# WIP
