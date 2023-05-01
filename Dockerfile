FROM node:18-alpine

RUN npm install -g npm@9.5.0

WORKDIR /src

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY --chown=node:node . .

EXPOSE 8080

CMD ["npm", "run", "dev"]