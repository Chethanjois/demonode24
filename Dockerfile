FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY src ./src

EXPOSE 3000
RUN addgroup -S app && adduser -S app -G app
USER app
CMD ["node", "src/index.js"]