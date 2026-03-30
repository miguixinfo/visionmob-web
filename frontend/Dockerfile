# ── VisionMob Frontend — Dockerfile ─────────────────────────
# Multi-stage: development (Vite HMR) + production (Nginx)

FROM node:22-alpine AS base

WORKDIR /app

# ── Dependencias ─────────────────────────────────────────────
FROM base AS dependencies

COPY package.json package-lock.json* ./
RUN npm ci

# ── Development (Vite con HMR) ───────────────────────────────
FROM dependencies AS development

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ── Build ────────────────────────────────────────────────────
FROM dependencies AS builder

COPY . .
RUN npm run build

# ── Production (Nginx) ───────────────────────────────────────
FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80