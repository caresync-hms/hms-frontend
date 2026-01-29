# ---------- Build stage ----------
FROM node:18-alpine AS build
WORKDIR /app

# Inject backend URL at build time
ENV REACT_APP_API_URL=http://16.16.219.12:8080

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source & build
COPY . .
RUN npm run build

# ---------- Runtime stage ----------
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy React build output
COPY --from=build /app/build /usr/share/nginx/html

# Expose HTTP
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
