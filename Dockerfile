FROM node:9.4.0-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install -qy
RUN npm install nodemon -g -qy
RUN npm install sequelize-cli -g -qy

COPY server .

EXPOSE 8080

CMD ["killall", "-9", "node"]
CMD ["npm", "start"]
