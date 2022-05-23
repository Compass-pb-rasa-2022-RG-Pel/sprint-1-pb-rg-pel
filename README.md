# Avaliação Sprint 1 - Programa de Bolsas Compass.uol e universidades de Rio Grande e Pelotas
Avaliação da primeira sprint do programa de bolsas Compass.uol para formação em chatbot Rasa.

---

## Execução
- [x] __Escolher uma API pública (https://any-api.com/, ou qualquer outra);__

Escolhidas as APIs do Pokémon do próprio GitHUB localizadas nos links https://pokeapi.co/ e https://api.github.com/ respectivamente
<br><br>

- [x] __Consumir essa API através do nodejs;__

Consumida API via nodejs, conforme arquivos nos links a seguir: [index.js](/index.js), [Git.index.js](/apigithub/index.js) e [Pokemon.index.js](/apipokemon/index.js)
<br><br>

- [x] __Criar uma página html para fazer consultas pela API;__

Página criada, conforme arquivo no link a seguir: [index.html](/index.html), nela é possível escolher entre duas aplicações totalmente distintas, basta pressionar o botão da aplicação desejada.
<br><br>

- [x] __Subir como uma aplicação no Okteto (https://cloud.okteto.com/). Dica: https://okteto.com/docs/samples/node/__

Subi a aplicação no endereço que segue: [LINK](https://duplaapi-andersonaoliveira.cloud.okteto.net)
<br><br>

## Entrega
- [x] __Aceitar o convite do repositório da sprint-1-pb-rg-pel;__

Convite aceito, criada issue no dia 18/05/2022.
<br><br>

- [x] __Criar uma branch no repositório com o formato nome-sobrenome (Exemplo: daniel-muller);__

Convite aceito, criada branch no dia 18/05/2022.
<br><br>

- [x] __Subir o trabalho na branch com um readme.md, documentando detalhes sobre como a avaliação foi desenvolvida e como utilizar o sistema.__

Documentação no <a href='#anexo'> Anexo </a>;
<br><br>

- [x] __O prazo de entrega é até às 10h do dia 23/05/2022 no repositório do github (https://github.com/Compass-pb-rasa-2022-RG-Pel/sprint-1-pb-rg-pel).__

Última atualização neste repositório em 22/05/2022, sendo que já estava concluída no dia 21, então.. missão cumprida.
<br><br>

---
---

## ANEXO

Destaco, à seguir, alguns detalhes da aplicação:

Começo pelo final, indicando um "passo a passo" para subir a aplicação na plataforma Okteto.

Após finalizada a aplicação, funcionando corretamente, é hora de colocar no Okteto, para isso vinculei minha conta do Github ao servidor do Okteto, e criei dois arquivos muito importantes, o arquivo Dockerfile e o arquivo okteto.yml. 

Do arquivo okteto.yml cabe destacar que alterei apenas o nome padrão para duplaapi e, do mais, mantive as configurações de quando utilizei o comando okteto init para criá-lo.

``` 
name: duplaapi
image: okteto/node:14
command: bash
sync:
- .:/usr/src/app
forward:
- 9229:9229
- 3000:3000
autocreate: true
``` 

Do arquivo Dockerfile montei com as seguintes configurações conforme aprendi nas aulas. Basicamente utilizei a imagem do node mais rescente, indiquei meu nome como autor para imagem, depois indiquei pasta para persistência dos dados e o diretório de trabalho, ao final indiquei a instalação do node, do express, solicitei a abertura do arquivo index.js expondo porta 3000.

```
FROM node:latest
MAINTAINER Anderson Oliveira
COPY . /var/www
WORKDIR /var/www
RUN npm install node
RUN npm install express
ENTRYPOINT node index.js
EXPOSE 3000
```

Com os arquivos bem formatados, o procedimento junto ao Okteto foi selecionar a opção Launch Dev Environment, depois escolher a opção GitHub, em seguida escolher o repositório deste trabalho e minha branch. Cliquei em Launch e pronto, como mágica o site estava no ar. Logicamente tive muitos problemas no meio do caminho, nas primeiras tentativas não foram nada fáceis, mas depois de conseguir as dificuldades exauriram-se.

Agora, da aplicação em si. Resolvi consumir duas APIs bastante distintas, colocando em prática o conhecimento de HTTP e JavaScript que adquiri nos cursos. Escolhi as APIs do GitHub e, também de personagens do Pokemon. Da API do Github, em síntese, criei um formulário (com apenas o campo consulta) para o usuário pesquisar o nome de alguma organização presente no GITHub e, instantaneamente, receberá, na própria tela, lista com o nome dos repositórios, descrição e link para ir até os repositórios. Na segunda aplicação, da API do Pokemon, também criei campo consulta para o usuário pesquisar pelo nome do Pokemon e, como retorno, o usuário recebe nome, imagem e atributos do pokemon escolhido, há, também, um botão que lista 1.000 (mil) nomes de pokemon dentre os que existem no servidor da API.

Como é possível ver, no index.js da raiz, a única função dele é indicar o root como index.html na porta 8080. já nos arquivos index.js nas pastas dos respectivos aplicativos é onde o consumo das APIs são feitos.

Da aplicação que consome API do Github vale destacar que utilizei funções bastante parecidas com as do API Pokemon, mas que exceto a função doNothing() que copiei da internet e serve, apenas, para o usuário não apertar a tecla enter no formulário e sim clicar na pesquisa, todas as outras funções foram 100% feitas por mim. Separei a aplicação do Github em 3 funções, aquela primeira já mencionada e as funções loadRepositories() e a função CreateList(), a função createList é chamada pelo clique no botão do index.html e indica o nome da organização. Esse nome é utilizado para atribuir à variável repositoriesList o retorno da função loadRepositories, neste momento, na função loadRepositories uma variável denominada script é criada com o endereço da API concatenado ao nome digitado pelo usuário, formando um site que encaminhará um arquivo do tipo json. Este json é armazenado na variável repositories que dá valor à variável repositoriesList na função createList. Em seguida, utilizo a função map() para percorrer o json e, dele, extrair os valores full_name e description, devolvendo ao usuário em uma tabela. E isso, fim da aplicação do Github.

Da aplicação que consome a API do Pokemon, foram incrementados alguns recursos, dentre eles posso mencionar que escrevi no HTML e destruí os mesmos no HTML utilizando os recursos do 'innerHTML', também utilizei FOR para criar uma lista com todos os pokemons, bem como organizei o resultado da pesquisa de pokemon em tabela, no html, propiciando fácil leitura dos dados encontrados e, também, utilizei as funções .toUpperCase() para entregar o nome do pokemon escolhido em letra maiúscula, e a .toLowerCase() para que, mesmo se o usuário pesquisar com letra maiúscula, a consulta na api seja feita sempre em letra minúscula. Destaco que esta api tem potencial para criação de jogo eletrônico do tipo CARDs e que, com o tempo, talvez ofereça a ele um visual ainda mais próximo de uma "carta". Além de tudo, destaco também que a aplicação foi toda criada e desenvolvida por mim.


Assinado, Anderson de Aguiar de Oliveira 
