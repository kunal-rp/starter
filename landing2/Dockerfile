# Build Stage
FROM --platform=linux/amd64 node:18-alpine AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build


# Production Stage
FROM --platform=linux/amd64 base AS production
WORKDIR /app
COPY --from=base /app/package.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["yarn", "start"]