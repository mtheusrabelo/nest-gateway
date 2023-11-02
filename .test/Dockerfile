FROM node:20.9.0-bullseye-slim

WORKDIR /app/

COPY package*.json ./

RUN yarn

COPY . .

ENTRYPOINT ["yarn", "start"]
