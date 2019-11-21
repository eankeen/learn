FROM node:12.8.1-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile --no-cache

COPY index.js .

EXPOSE 5000

CMD ["yarn", "start"]
