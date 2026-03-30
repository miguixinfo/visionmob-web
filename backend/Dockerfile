# ── VisionMob Backend — Dockerfile ──────────────────────────
# Multi-stage: development (hot-reload) + production (gunicorn)

FROM python:3.12-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /app

# Dependencias del sistema (psycopg2 necesita libpq)
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev gcc curl \
    && rm -rf /var/lib/apt/lists/*

# ── Dependencias Python ──────────────────────────────────────
FROM base AS dependencies

COPY pyproject.toml .
RUN pip install --upgrade pip setuptools wheel && \
    pip install -e ".[dev]"

# ── Development (hot-reload con uvicorn) ────────────────────
FROM dependencies AS development

EXPOSE 8000

CMD ["uvicorn", "app.main:app", \
    "--host", "0.0.0.0", \
    "--port", "8000", \
    "--reload", \
    "--reload-dir", "/app/app"]

# ── Production ───────────────────────────────────────────────
FROM dependencies AS production

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", \
    "--host", "0.0.0.0", \
    "--port", "8000", \
    "--workers", "2"]