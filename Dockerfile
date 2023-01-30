FROM node:lts-alpine

WORKDIR /home/folajimi/tolu_project/Api

COPY package*.json ./

RUN npm install --force 

COPY . .

EXPOSE 4000

RUN npm build

CMD [ "node", "dist/index.js" ]

# DOCKER_BUILDKIT=0  docker build . -t tolu_docker_api