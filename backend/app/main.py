from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print(f"🎚️  VisionMob API — {settings.environment.upper()}")
    yield
    # Shutdown
    print("👋  VisionMob API shutting down")


app = FastAPI(
    title=settings.app_name,
    version="0.0.1",
    description="Mix & Master para artistas emergentes — La calle hecha studio",
    docs_url="/docs" if settings.debug else None,
    redoc_url="/redoc" if settings.debug else None,
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", tags=["health"])
async def health_check() -> dict:
    return {"status": "ok", "service": "visionmob-api"}