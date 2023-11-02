FROM node:20.9.0-bullseye-slim

COPY . /app
WORKDIR /app/

RUN yarn install

ENTRYPOINT ["node", "app.mjs"]
