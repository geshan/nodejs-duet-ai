FROM node:16-slim

EXPOSE 8080

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . ./

CMD [ "npm", "start" ]
