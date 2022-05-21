FROM node:14
MAINTAINER tatieli silveira
COPY  . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm install express
ENTRYPOINT node index.js
EXPOSE 3000