FROM node:10.13-alpine
WORKDIR /usr/src/app
COPY . .
RUN ls -l
RUN npm install -g sequelize-cli
RUN npm install
EXPOSE 4001