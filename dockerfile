FROM node:14
MAINTAINER tatielisilveira
COPY  . /var/www
WORKDIR /var/www
RUN npm install
RUN npm install express
RUN npm install axios
ENTRYPOINT node index.js
EXPOSE 3000