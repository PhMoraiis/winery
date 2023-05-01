FROM node:18-alpine

RUN npm install -g npm@9.5.0 postgresql-client

WORKDIR /home/node/src

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY --chown=node:node . .

EXPOSE 80

CMD ["npm", "run", "dev"]