# ---- Step 1: Build React App ----
FROM node:20-alpine AS builder

WORKDIR /app

# Only copy the package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy the rest of the source code
COPY . .

# Build the React production bundle
RUN npm run build


# ---- Step 2: Serve with NGINX ----
FROM nginx:stable-alpine

# Remove default NGINX website
RUN rm -rf /usr/share/nginx/html/*

# Copy the React build from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# If you have a custom nginx.conf for SPA fallback, use this:
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP
EXPOSE 80

# Run NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]
    