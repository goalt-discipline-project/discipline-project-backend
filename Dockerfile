FROM node:24.8-alpine3.21 AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --immutable

COPY . .
RUN yarn build


FROM node:24.8-alpine3.21 AS runner

WORKDIR /app

COPY --from=builder /app/.env ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]
