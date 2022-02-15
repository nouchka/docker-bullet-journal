FROM node:lts-alpine

COPY --chown=node:node . /usr/app/
WORKDIR /usr/app/

ENTRYPOINT sh -c "npm install && npm run start"
