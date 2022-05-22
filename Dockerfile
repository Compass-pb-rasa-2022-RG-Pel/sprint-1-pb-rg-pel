
FROM node:latest
MAINTAINER everton feijo
COPY . /var/www 
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm install express axios dotenv
ENTRYPOINT node dist/server.js
EXPOSE 3000