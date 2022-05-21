FROM node:latest
MAINTAINER Juan-Weimar
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm install express
ENTRYPOINT node api.js
EXPOSE 3000
