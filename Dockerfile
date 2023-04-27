FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN yarn
RUN yarn build
COPY --chown=node:node . .
EXPOSE 8000
CMD ["yarn", "dev"]
