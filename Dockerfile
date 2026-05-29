# =========================
# Stage 1 - Build React App
# =========================

FROM node:20-alpine AS builder

# Install package using apk
RUN apk add --no-cache curl

# Create app directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining files
COPY . .

# Build app
RUN npm run build


# =========================
# Stage 2 - NGINX Runtime
# =========================

FROM nginx:alpine

# Install package
RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy build files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Avoid writing a PID file on the read-only/non-root runtime path
RUN sed -i 's|pid        /run/nginx.pid;|pid /dev/null;|' /etc/nginx/nginx.conf

# Assign permissions
RUN chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    chown -R appuser:appgroup /etc/nginx/conf.d && \
    mkdir -p /var/cache/nginx/client_temp /var/cache/nginx/proxy_temp /var/cache/nginx/fastcgi_temp /var/cache/nginx/uwsgi_temp /var/cache/nginx/scgi_temp && \
    chown -R appuser:appgroup /var/cache/nginx/client_temp /var/cache/nginx/proxy_temp /var/cache/nginx/fastcgi_temp /var/cache/nginx/uwsgi_temp /var/cache/nginx/scgi_temp && \
    chmod -R 755 /usr/share/nginx/html

# Switch to non-root user
USER appuser

# Expose application port
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]