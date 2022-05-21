FROM node:14-slim

# setup okteto message
COPY bashrc /root/.bashrc

WORKDIR /usr/src/app/

ADD package.json .
RUN npm install

COPY /src/server.ts .

EXPOSE 8080

CMD npm run start
