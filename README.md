documentacao-viva
===============================
Arquitetura para documentação viva. (em português)

---------------------------------------------

## Como escrever as funcionalidades
  * [Como Funciona?](https://www.thoughtworks.com/pt/insights/blog/3-essential-basics-setting-automation-suite-web-apps)
  * [Gherkin Language](https://cucumber.io/docs/reference)
  * [Gherkin em Português](https://leandrodacunha.wordpress.com/2015/01/19/palavras-chaves-do-gherkin-em-portugues-cucumber)

---------------------------------------------

## Arquitetura
  * [Nightwatch e Cucumber](https://github.com/mucsi96/nightwatch-cucumber)
  * [Documentação em HTML](https://github.com/gkushang/cucumber-html-reporter)

## Ambiente:
  * [Docker](https://www.docker.com/products/docker#/linux)
  * [Docker Compose](https://docs.docker.com/compose/install/)
  * [Make](http://www.gnu.org/software/make/manual/make.html#Running)

## Como rodar os testes no computador local
```sh
luiz:~/documentacao-viva(master)$ npm install
luiz:~/documentacao-viva(master)$ npm test
```

## Como rodar os testes no Docker
```sh
luiz:~/documentacao-viva(master)$ make
node:~/app(master)$ npm install
node:~/app(master)$ npm run test-docker
```

### O sistema gera uma documentação dos testes no seguinte caminho dentro do projeto "tests/reports/index.html"
