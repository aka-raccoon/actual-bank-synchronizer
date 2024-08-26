FROM node:22 AS build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY main.js .

FROM gcr.io/distroless/nodejs22:nonroot
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .

CMD ["main.js"]
