# VisionMob 🎚️

> La calle hecha studio — Mix & Master para artistas emergentes

Plataforma web de VisionMob: servicios de mixing y mastering lowcost
con formulario de reserva, portfolio de trabajos y newsletter musical.

---

## Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | React + Vite |
| Backend | Python + FastAPI (monolito modular) |
| Base de datos | PostgreSQL |
| Storage audio | Cloudflare R2 |
| Contenedores | Docker + Docker Compose |
| CI/CD | GitHub Actions |
| DNS / CDN | Cloudflare |
| Servidor | Hetzner Cloud |

---

## Estructura del repositorio
```
visionmob-web/
├── frontend/          # React + Vite (SPA)
├── backend/           # FastAPI (monolito modular)
├── docker-compose.yml # Entorno local completo
├── .env.example       # Variables de entorno (plantilla)
├── .gitignore
├── .editorconfig
└── README.md
```

---

## Setup local

### Requisitos previos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (incluye Docker Compose)
- [Git](https://git-scm.com/)
- Node.js 20+ (solo si quieres correr el frontend sin Docker)
- Python 3.12+ (solo si quieres correr el backend sin Docker)

### 1. Clonar el repositorio
```bash
git clone https://github.com/miguixinfo/visionmob-web.git
cd visionmob-web
```

### 2. Configurar variables de entorno
```bash
cp .env.example .env
# Edita .env con tus valores locales
```

### 3. Levantar el entorno completo con Docker
```bash
docker compose up --build
```

Servicios disponibles:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API Docs (Swagger): http://localhost:8000/docs
- PostgreSQL: localhost:5432

### 4. Parar el entorno
```bash
docker compose down
```

Para borrar los volúmenes (reset de base de datos):
```bash
docker compose down -v
```

---

## Flujo de trabajo con Git

Trabajamos con **trunk-based development** simplificado:

- `main` → rama protegida, siempre desplegable. Requiere PR + review.
- `develop` → rama de desarrollo, siempre desplegable. Requiere PR + review.
- `feature/US-XX-descripcion` → ramas de trabajo por historia de usuario
- `fix/descripcion` → para correcciones puntuales

### Ejemplo de flujo
```bash
git checkout -b feature/US-05-docker-compose
# ... trabajas ...
git add .
git commit -m "feat(infra): add docker-compose for local dev [US-05]"
git push origin feature/US-05-docker-compose
# Abres Pull Request en GitHub hacia main
```

### Convención de commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

| Prefijo | Uso |
|---------|-----|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `docs` | Documentación |
| `style` | Formato, sin cambio de lógica |
| `refactor` | Refactoring sin nueva funcionalidad |
| `test` | Añadir o modificar tests |
| `chore` | Tareas de mantenimiento (deps, config) |
| `infra` | Cambios de infraestructura / DevOps |

---

## Equipo

VisionMob — La calle hecha studio 🎵