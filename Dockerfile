FROM node:19-alpine

COPY . /app

WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]