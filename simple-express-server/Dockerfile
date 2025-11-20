FROM node:14

WORKDIR /usr/src/app

# copy package files into WORKDIR and install deps
COPY package*.json ./
RUN yarn install

# copy app source
COPY . .

EXPOSE 8001

CMD [ "yarn", "start" ]
