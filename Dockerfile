FROM node:latest
MAINTAINER Andrews Troina
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm install express
ENTRYPOINT npm install node
ENTRYPOINT node index.js
EXPOSE 3000
