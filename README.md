# Avaliação Sprint 1 - Programa de Bolsas Compass.uol e universidades de Rio Grande e Pelotas
Avaliação da primeira sprint do programa de bolsas Compass.uol para formação em chatbot Rasa.

---

## Execução
- Escolher uma API pública (https://any-api.com/, ou qualquer outra);
- Consumir essa API através do nodejs;
- Criar uma página html para fazer consultas pela API;
- Subir como uma aplicação no Okteto (https://cloud.okteto.com/). Dica: https://okteto.com/docs/samples/node/

## Entrega
- Aceitar o convite do repositório da sprint-1-pb-rg-pel;
- Criar uma branch no repositório com o formato nome-sobrenome (Exemplo: daniel-muller);
- Subir o trabalho na branch com um readme.md, documentando detalhes sobre como a avaliação foi desenvolvida e como utilizar o sistema.
- O prazo de entrega é até às 10h do dia 23/05/2022 no repositório do github (https://github.com/Compass-pb-rasa-2022-RG-Pel/sprint-1-pb-rg-pel).

## API's Utilizadas

- [Adviceslip](https://api.adviceslip.com/)
- [libretranslate](https://libretranslate.com/)

## Desenvolvimento

O desenvolvimento foi realizado em NodeJs com o framework [Express](https://expressjs.com/pt-br/), para consumir as APIs foi utilizado a biblioteca [Axios](https://www.npmjs.com/package/axios), para subir o projeto para o [Okteto](https://cloud.okteto.com/) foi necessário realizar cadastro vinculando a conta do gitHub e criar os arquivos de configuração Dockerfile e okteto.yml.

### Dockerfile

 ```python
 FROM node:latest
 MAINTAINER everton feijo
 COPY . /var/www 
 WORKDIR /var/www
 RUN npm install typescript ts-node nodemon -g
 RUN npm install
 ENTRYPOINT node dist/server.js
 EXPOSE 3000
 ```

### okteto.yml 
 
 ```python
 name: evertonfeijo
 image: okteto/node:1 
 command: bash
 sync:
   - .:/usr/src/app
 forward:
   - 9229:9229
   - 3000:3000
 autocreate: true
 ```

## Para rodar o projeto local

### Pré-requisitos globais:
`npm i -g nodemon typescript ts-node`

### Instalação
`npm install`

### Para iniciar o projeto
`npm run start`

## Link para a aplicação no Okteto

- [Aplicação](https://evertonfeijo-evertonlwf.cloud.okteto.net)

---
---
