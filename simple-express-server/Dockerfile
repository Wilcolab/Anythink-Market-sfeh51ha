FROM node:14

WORKDIR /usr/src/app

# copy package files into WORKDIR and install deps
COPY package.json yarn.lock ./
RUN yarn install

# copy app source
COPY . .

EXPOSE 8001

CMD [ "yarn", "start" ]
