FROM node:10.16.0

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install
# change to start to build for building the production and to dev in order to start the development server
CMD [ "npm", "run", "start" ]