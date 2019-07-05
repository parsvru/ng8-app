FROM node:10.15.2-alpine as builder
WORKDIR '/ng-app'
COPY package.json .
## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && mv ./node_modules ./ng-app
COPY . .
EXPOSE 4200
CMD npm run start
