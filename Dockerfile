FROM node:14-slim

# setup okteto message
COPY bashrc /root/.bashrc

WORKDIR /usr/src/app/

ADD package.json .
RUN npm install

ENTRYPOINT npm install express axios

COPY /dist/server.js .

EXPOSE 3000

CMD npm run start
