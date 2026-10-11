# Stage 1: Build the Angular frontend
FROM node:22-alpine AS build

WORKDIR /app

COPY todo-app-ui/package*.json ./
RUN npm ci

COPY todo-app-ui/ ./
RUN npm run build

# Stage 2: Serve the Angular application with NGINX
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/todo-app-ui/browser/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
