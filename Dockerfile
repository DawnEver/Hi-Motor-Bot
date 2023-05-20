FROM node:18-alpine

RUN npm ci

CMD ["npm", "run", "dev"]