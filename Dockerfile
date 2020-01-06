# Basic multi-stage build - Use node:alpine for npm
FROM node:alpine as build
ADD $PWD /app
WORKDIR /app
RUN yarn
FROM node:alpine
COPY --from=build /app /
VOLUME ["/config"]
CMD ["node", "index.js"]
