FROM node:19.6.0-alpine

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install
COPY . .

EXPOSE 3000