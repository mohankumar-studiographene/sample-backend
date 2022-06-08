#FROM node:lts-buster
# Install node dependencies and sync folders

FROM node:14.15.3-buster as build
COPY . /var/app/sample-node-ts

WORKDIR /var/app/sample-node-ts
RUN npm install