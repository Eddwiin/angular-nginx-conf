FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY ./ .
RUN npm run build

FROM nginx:latest
RUN mkdir /app
COPY --from=build-stage /app/dist/angular-nginx-conf/browser/ /app
COPY nginx.conf /etc/nginx/nginx.conf
USER nginx
