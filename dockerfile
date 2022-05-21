FROM node:latest
MAINTAINER Juan-Weimar
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm install express
ENTRYPOINT node index.js
EXPOSE 3000
