FROM node:16.16 AS builder

WORKDIR /app
RUN apt-get update 
COPY package*.json ./
# RUN mkdir scripts
RUN npm install --no-audit
COPY . .
RUN npm run build
RUN ls -lsa

FROM node:16.16-alpine AS release

WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install --omit=dev --no-audit
COPY --from=builder /app/dist ./dist
CMD npm run start
