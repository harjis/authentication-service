FROM node:12.13.1-alpine
WORKDIR /backend-proxy
COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn", "start"]
