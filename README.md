# Weather app
### Sprint - 1 Programa de Bolsas Compass.uol
![banner_image](./icons/banner.png)

## Desenvolvimento 👨‍💻
-  Foi desenvolvida uma página HTML para exibir a previsão do tempo no local do usuário através de duas API's, a primeira é a [ipapi](https://ipapi.co/) para obter a latitude e a longitude do usuário através do IP do cliente para enviar como parâmetros para consulta na api [weatherDB](https://weatherdbi.herokuapp.com/) de previsão do tempo ou se preferir o usuário também tem a opção de buscar alguma cidade no campo de pesquisa.

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