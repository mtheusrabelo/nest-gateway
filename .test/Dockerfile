FROM node:20.9.0-bullseye-slim

COPY . /app
WORKDIR /app/

RUN yarn

ENTRYPOINT ["node", "app.mjs"]
