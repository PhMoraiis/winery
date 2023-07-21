FROM node:latest

RUN npm install -g npm@9.6.4

WORKDIR /src

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY --chown=node:node . .

EXPOSE 8080

CMD ["npm", "run", "dev"]