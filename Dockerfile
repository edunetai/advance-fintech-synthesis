# =============================================================================
# Stage 1: Build the React frontend
# =============================================================================
FROM node:20-alpine AS frontend-build

WORKDIR /app/frontend

# Copy frontend package files
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY index.html ./

# Copy source files
COPY src/ ./src/
COPY public/ ./public/

# Install dependencies
RUN npm install

# Rebuild native modules for Alpine Linux
RUN npm rebuild lightningcss

# Build the React application
RUN npm run build

# =============================================================================
# Stage 2: Set up production environment with nginx and backend
# =============================================================================
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Install nginx and supervisor for process management
RUN apk add --no-cache nginx supervisor python3 make g++

# Copy package files for backend
COPY package*.json ./
COPY tsconfig.json ./

# Install all dependencies
RUN npm install

# Rebuild native modules for Alpine Linux
RUN npm rebuild better-sqlite3

# Install tsx for running TypeScript in production
RUN npm install -g tsx

# Copy backend source files
COPY backend/ ./backend/

# Create data directory for SQLite
RUN mkdir -p /app/backend/data

# Copy the built frontend from stage 1
COPY --from=frontend-build /app/frontend/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/http.d/default.conf

# Copy supervisor configuration
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Create nginx directories
RUN mkdir -p /run/nginx

# Create supervisord log directory
RUN mkdir -p /var/log/supervisor

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3002

# Expose port 80 for nginx
EXPOSE 80

# Expose backend port (for direct access if needed)
EXPOSE 3002

# Start supervisor which manages both nginx and node
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
