# Setup and build the client

FROM node:9.4.0-alpine as server

WORKDIR /usr/app/
COPY package*.json ./
RUN npm install nodemon -g -qy
RUN npm install -qy
COPY  . .
RUN npm run build

EXPOSE 8080
