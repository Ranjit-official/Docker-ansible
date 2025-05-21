FROM node:latest

WORKDIR /var/www/http/

COPY ./node-application .

EXPOSE 8000

CMD [ "node", "index.js" ]