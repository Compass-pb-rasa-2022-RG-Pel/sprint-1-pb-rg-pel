
FROM node:latest
MAINTAINER everton feijo
COPY . /var/www 
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm install express axios dotenv 
ENTRYPOINT npm install typescript -g
ENTRYPOINT npm install copyfiles -g
ENTRYPOINT node dist/server.js
EXPOSE 3000