FROM node: lts-alpine
WORKDIR /
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run ts-build
CMD [ "npm", "start" ]