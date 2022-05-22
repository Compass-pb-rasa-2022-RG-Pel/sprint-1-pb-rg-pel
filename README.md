# Avaliação Sprint 1 - Programa de Bolsas Compass.uol e universidades de Rio Grande e Pelotas
Avaliação da primeira sprint do programa de bolsas Compass.uol para formação em chatbot Rasa.

---

## Execução
## Escolher uma API pública (https://any-api.com/, ou qualquer outra);
### **Primeiro passo:**
depois de 2 tentativas de apis inutilizaveis para o projeto, foi escolhida através do site: https://api.nasa.gov/
### **segundo passo:**
- Consumir essa API através do nodejs:
- a api foi consumida no arquivo index.js onde a api busca um [repositorio de imagens da Nasa](https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000)
#### ferramentas utilizadas:
nodemon
yarn
-
### **terceiro passo:**
- Criar uma página html para fazer consultas pela API:
- a pagina html foi criada no arquivo index.html onde foi criado um botão simples de consulta às fotos presentes no [repositorio de imagens da Nasa](https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000)
- 
### **quarto passo:**
- Subir como uma aplicação no Okteto (https://cloud.okteto.com/). Dica: https://okteto.com/docs/samples/node/
- primeiramente foi vinculado o [repositorio github da sprint-1](https://github.com/Compass-pb-rasa-2022-RG-Pel/sprint-1-pb-rg-pel) no okteto via navegador
- após, através do terminal na pasta do projeto, foi executado o comando okteto init --v --replace , seguido dos comandos npm install express e npm install node
- o okteto gerou [um Pod da api](https://api-mars-rovers-vtellesrg.cloud.okteto.net) na sua nuvem
- 

## Entrega
- Criar uma branch no repositório com o formato nome-sobrenome (Exemplo: daniel-muller);
- 
- a branch foi criada no dia 18/05/2022 no formato solicitado
- 
- Subir o trabalho na branch com um readme.md, documentando detalhes sobre como a avaliação foi desenvolvida e como utilizar o sistema.
-
- O trabalho foi atualizado na branch dia 22/05/2022
- 
- O prazo de entrega é até às 10h do dia 23/05/2022 no repositório do github (https://github.com/Compass-pb-rasa-2022-RG-Pel/sprint-1-pb-rg-pel).

---
---
## API utilizada

api utilizada: NASA Mars Rover Photos REST API v1.0
