FROM node:17.0.0-stretch

RUN npm install --global @vue/cli

WORKDIR /projects