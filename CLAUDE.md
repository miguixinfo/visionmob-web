# VisionMob — Claude Code Context

## Proyecto
Plataforma web para VisionMob: estudio de mix & mastering lowcost para artistas emergentes.
La calle hecha studio. Precio: 10€–30€ por tema.

## Stack
- **Frontend:** React + Vite (SPA, puerto 5173)
- **Backend:** Python + FastAPI — monolito modular (puerto 8000)
- **Base de datos:** PostgreSQL (puerto 5432)
- **Storage audio:** Cloudflare R2 (SDK S3-compatible)
- **Contenedores:** Docker + Docker Compose
- **CI/CD:** GitHub Actions → Hetzner VPS
- **DNS/CDN:** Cloudflare

## Estructura del repositoriovisionmob-web/
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── lib/
├── backend/           # FastAPI monolito modular
│   ├── app/
│   │   ├── api/       # Routers por módulo
│   │   ├── core/      # Config, seguridad, dependencias
│   │   ├── models/    # Modelos SQLAlchemy
│   │   ├── schemas/   # Pydantic schemas
│   │   └── services/  # Lógica de negocio
│   ├── alembic/       # Migraciones
│   └── tests/
└── .claude/

## Módulos del backend (monolito modular)
- `auth` — autenticación y usuarios
- `submissions` — formulario de contacto/reserva
- `portfolio` — trabajos y audios antes/después
- `newsletter` — suscriptores y envíos
- `incidents` — soporte e incidencias
- `storage` — integración Cloudflare R2

## Convenciones de código

### Python / FastAPI
- Python 3.12+
- Tipado estricto en todo (type hints obligatorios)
- Pydantic v2 para schemas
- SQLAlchemy 2.x con async
- Nombres: snake_case para funciones/variables, PascalCase para clases
- Cada módulo tiene su propio router, models, schemas y service
- Tests con pytest + httpx (async)

### React / TypeScript
- TypeScript estricto (no `any`)
- Componentes funcionales con hooks
- Nombres: PascalCase para componentes, camelCase para hooks/utils
- CSS: Tailwind utility classes
- Estado global: Zustand (si se necesita)
- Fetching: TanStack Query

### Git
- Ramas: `feature/US-XX-descripcion`, `fix/descripcion`
- Commits: Conventional Commits (`feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `infra`)
- Todo merge a `main` requiere PR + review
- Referencia siempre la US en el commit: `feat(submissions): add contact form endpoint [US-15]`

## Identidad de marca (para UI/copy)
- Nombre: VisionMob
- Slogan: "La calle hecha studio"
- Paleta: onyx #0D0D12, indigo #1A1A2E, slate #7F77DD, almond #EA8951, linen #F1EFE8
- Tipografías: Syne (títulos, 800), DM Sans (cuerpo, 300/400)
- Tono: cercano, urbano, directo. Nunca corporativo.
- Idiomas: español e inglés (i18n desde el principio)

## Reglas globales para todos los agentes
- Nunca microservicios. Monolito modular hasta que un módulo necesite escalar.
- Nunca `any` en TypeScript.
- Siempre escribir tests para nuevos endpoints.
- Siempre validación server-side además de client-side.
- Variables de entorno: nunca hardcodeadas, siempre desde `.env`.
- Archivos de audio: nunca al repo, siempre a Cloudflare R2.
- Antes de crear un archivo nuevo, verificar si ya existe algo similar.

## Delegación de subagentes
Durante la implementación, delega tareas a los siguientes subagentes según su especialidad:
- Usa `architect` para decisiones de diseño, estructura de módulos y ERD.
- Usa `backend-dev` para endpoints FastAPI, modelos, schemas y migraciones.
- Usa `frontend-dev` para componentes React, páginas y estilos.
- Usa `code-reviewer` para revisar código antes de cualquier PR.
- Usa `tester` para generar y ejecutar tests.