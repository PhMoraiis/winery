FROM node:18-alpine

RUN npm install -g npm@9.5.0 postgresql-client

RUN mkdir -p /home/node/src/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/src

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY --chown=node:node . .

EXPOSE 80

CMD ["npm", "run", "dev"]