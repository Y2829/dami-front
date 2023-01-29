FROM node:14-alpine as builder

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY ./ ./
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]