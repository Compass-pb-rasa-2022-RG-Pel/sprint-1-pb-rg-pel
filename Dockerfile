FROM node:14
MAINTAINER rodrigovaladao01
COPY . /var/www 
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm install express
ENTRYPOINT npm install axios
ENTRYPOINT node index.js
EXPOSE 3000