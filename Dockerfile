FROM node:18-alpine

RUN npm install -g npm@9.5.0 postgresql-client

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "run", "start"]
