FROM node:14
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY ./src ./src
COPY ./startup.sh ./startup.sh
CMD sh ./startup.sh