# Dockerfile for a Next.js application

# Prerequisites:
# In `next.config.js`, add the following line to enable standalone output:
#   output: 'standalone',
# This creates a minimal server, drastically reducing the image size.

# ---- Dependencies Stage ----
# Install dependencies in a separate stage to leverage Docker's layer caching.
FROM node:18-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package.json and lock file
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# ---- Builder Stage ----
# Build the application.
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependencies from the previous stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application source code
COPY . .

# Build the Next.js application
RUN npm run build

# ---- Runner Stage ----
# Create the final, minimal production image.
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy required files from the builder stage
# This includes the standalone server, public assets, and static assets
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user
USER nextjs

EXPOSE 3000
ENV PORT 3000

# Start the Next.js server
CMD ["node", "server.js"]