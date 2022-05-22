
FROM node:latest
MAINTAINER everton feijo
COPY . /var/www 
WORKDIR /var/www
ENTRYPOINT npm install express axios dotenv typescript ts-node
RUN npm install
ENTRYPOINT node dist/server.js
EXPOSE 3000