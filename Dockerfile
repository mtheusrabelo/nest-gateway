FROM node:20.9.0-bullseye-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN npm run build

CMD [ "node", "dist/main.js" ]
