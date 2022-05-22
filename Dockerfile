FROM node:14
MAINTAINER suelenperes
COPY  . /var/www
WORKDIR /var/www
RUN npm install
RUN npm install express
ENTRYPOINT node api.js
EXPOSE 3000