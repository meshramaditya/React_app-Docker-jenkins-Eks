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
RUN apk add --no-cache bash && \
    addgroup -S appgroup && \
    adduser -S appuser -G appgroup

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy build files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Assign permissions
RUN chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    chown -R appuser:appgroup /etc/nginx/conf.d && \
    chmod -R 755 /usr/share/nginx/html

# Create nginx pid directory permission
RUN touch /var/run/nginx.pid && \
    chown appuser:appgroup /var/run/nginx.pid

# Switch to non-root user
USER appuser

# Expose application port
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]