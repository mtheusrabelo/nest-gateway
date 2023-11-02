FROM node:20.9.0-bullseye-slim

WORKDIR /app/

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

ENTRYPOINT ["yarn", "start"]
