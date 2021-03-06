# Dashboard Covid-19: cidades brasileiras
Aplicação desenvolvida com Node.js para consumo de API sobre Covid-19 e exibição por meio de gráficos da biblioteca Chart.js.

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/en/)
- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Chart.js](https://www.chartjs.org/)

## O Projeto

Este projeto está relacionado a disciplina de Interação Humano-Computador, sendo abordado todos os processos de prototipação e também critérios egonômicos.

## API <a href="https://brasil.io/home/">Brasil.io</a>

Todos os dados são captados a partir da API disponibilizada pela plataforma <a href="https://brasil.io/home/">Brasil.io.</a> Vale salientar que é necessário gerar um token de acesso dentro da ferramenta e utilizá-lo da seguinte forma:

~~~JavaScript
var config = {
            method: 'get',
            url: 'https://api.brasil.io/v1/dataset/covid19/caso_full/data/?city='+nomeCidade+'&is_repeated=False',
            headers: { 
              'Authorization': 'Token  <seu_token>', 
              'Content-Type': 'application/json'
            }
        };
~~~

## Instalação das Dependências

Para instalar todas as dependências basta realizar o seguinte comando <strong>npm:</strong>
~~~
npm install
~~~

## 🚀 Como Iniciar o Servidor
Para rodar o servidor basta executar dentro da pasta /src:
~~~Bash
node server.js
~~~

## Autores

<b>Otávio Silva</b><br>
<b>Brian Arruk</b><br>
<b>Marcos Andrade</b><br>
<b>Rafael Freitas</b>
