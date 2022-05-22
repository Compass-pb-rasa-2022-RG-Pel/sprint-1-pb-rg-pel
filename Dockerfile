FROM node:14.0
MAINTAINER vinicius telles
COPY . /var/www
WORKDIR /var/www
RUN npm install
RUN npm install express
ENTRYPOINT node index.js
EXPOSE 3000