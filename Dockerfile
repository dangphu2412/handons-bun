FROM oven/bun AS build

WORKDIR /app
# Cache packages installation
COPY package.json package.json
COPY bun.lock bun.lock
RUN bun install
COPY ./src ./src
ENV NODE_ENV=production
RUN bun run build

FROM gcr.io/distroless/base
WORKDIR /app
COPY --from=build /app/dist dist
ENV NODE_ENV=production
CMD ["./dist"]
EXPOSE 3000
