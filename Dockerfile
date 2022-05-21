FROM node:14
COPY . /usr/src/app/
WORKDIR /usr/src/app/
RUN npm install
RUN npm install express
ENTRYPOINT node index.js
EXPOSE 3000