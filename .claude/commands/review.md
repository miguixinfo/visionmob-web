---
description: Revisión completa del código actual antes de un PR.
---

Usa el agente `code-reviewer` para revisar todos los archivos modificados en la rama actual comparados con main. 
Al terminar, lista los problemas bloqueantes (❌) que deben resolverse antes de abrir el PR.
```

---

### Paso 4 — Workflow diario con Antigravity + Claude Code

El flujo que te recomiendo para cada historia de usuario es este:
```
1. PLANIFICACIÓN (Antigravity — Manager View)
   → "Implementa US-15: formulario de contacto básico con email, nombre y nombre artístico"
   → Antigravity planifica la tarea, identifica archivos a crear/modificar

2. DISEÑO (Claude Code → agente architect)
   → /new-story US-15
   → Claude delega a `architect` → produce especificación antes de tocar código

3. IMPLEMENTACIÓN (Claude Code → agentes backend-dev / frontend-dev)
   → Los agentes implementan en su contexto aislado
   → El agente principal recibe resúmenes, no el código completo (ahorra contexto)

4. TESTS (Claude Code → agente tester)
   → Automático si usas /new-story
   → O manual: "usa el agente tester para cubrir el endpoint de submissions"

5. REVISIÓN + PR (Claude Code → agente code-reviewer)
   → /review
   → /pr-summary
   → Abre el PR en GitHub