FROM eu.gcr.io/wi-q-145611/base-node:latest

WORKDIR /var/www

COPY package.json yarn.lock /var/www/
RUN yarn install

COPY . /var/www/

EXPOSE 3000

CMD ["yarn", "start"]