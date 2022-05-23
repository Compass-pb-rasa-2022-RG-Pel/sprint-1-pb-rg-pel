# Sprint - 1 Programa de Bolsas Compass.uol
## Weather app
![banner_image](./icons/banner.png)

## Desenvolvimento 👨‍💻
-  Foi desenvolvida uma página HTML para exibir a previsão do tempo no local do usuário através de duas API's, 
1. A primeira é a [ipapi](https://ipapi.co/), utilizada para obter a latitude e a longitude do usuário através do cliente IP;
2. A segunda é a [weatherDB](https://weatherdbi.herokuapp.com/), foi utilizada para receber os parâmetros da primeira API e entregar um JSON com as informações do tempo. 

- A aplicação foi desenvolvida e enviada para o [Okteto](https://cloud.okteto.com/) que faz todo o gerenciamento do container pré-configurado por um arquivo chamado [Dockerfile](https://docs.docker.com/engine/reference/builder/).

## API's Utilizadas 🪄
- [ipapi](https://ipapi.co/)
- [weatherDB](https://weatherdbi.herokuapp.com/)

## Link para testar a aplicação 💻
- [Weather app 🌤️](https://weather-app-ofernandobarbosa.cloud.okteto.net/)

## Para rodar local
### Clonar a branch do projeto
`git clone --branch fernando-barbosa https://github.com/Compass-pb-rasa-2022-RG-Pel/sprint-1-pb-rg-pel.git`
### Entrar no repositório
`cd sprint-1-pb-rg-pel`
### Instalação
`npm install`
### Para iniciar o projeto
`npm run start`