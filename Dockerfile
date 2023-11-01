FROM node:20.9.0-bullseye-slim

EXPOSE 3000

ENV PORT=3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

CMD [ "node", "dist/src/main.js" ]
