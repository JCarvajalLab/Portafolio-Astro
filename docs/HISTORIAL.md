# Historial del proyecto

> **Para la IA:** lee primero la secciÃ³n **1. Estado actual** y solo si hace falta la **2. Decisiones importantes**. No necesitas revisar todo el repositorio. Las secciones 3 y 4 son consulta puntual.
>
> **Regla de actualizaciÃ³n:** este archivo se actualiza antes de cada push o merge a GitHub mediante un commit atÃ³mico (`docs(historial): registra <cambio>`). Si el cambio no estÃ¡ aquÃ­, para la IA no existe.

---

## 1. Estado actual

_MÃ¡ximo ~15 lÃ­neas. Se reescribe en cada actualizaciÃ³n, no se acumula._

- **Proyecto:** portafolio (casos de estudio) â€” Portafolio con casos de estudio
- **Repositorio:** https://github.com/JCarvajalLab/Portafolio-Astro
- **Ãšltima actualizaciÃ³n:** 2026-11-11
- **Fase activa:** `phase/01-setup`
- **Rama de trabajo:** `phase/01-setup`
- **Ãšltimo commit relevante:** Plantilla base inicializada para Gemini (Antigravity)
- **Despliegue:** aÃºn sin desplegar
- **QuÃ© funciona:** Estructura documental (`PLAN.md`, `HISTORIAL.md`), `AGENTS.md`, CI de GitHub Actions y 6 Skills en `.agents/skills/`
- **QuÃ© estÃ¡ en progreso:** PreparaciÃ³n del entorno base de Astro
- **Bloqueos o problemas conocidos:** ninguno
- **Siguiente paso concreto:** Inicializar proyecto Astro 5 + Tailwind v4 en la rama phase/01-setup

## 2. Decisiones importantes

_Una lÃ­nea por decisiÃ³n. Evita que la IA proponga de nuevo algo ya descartado._

| Fecha | DecisiÃ³n | Motivo | Alternativas descartadas |
|-------|----------|--------|--------------------------|
| 2026-11-11 | Usar Astro 5+ con JavaScript y Tailwind CSS v4 | Sitios rÃ¡pidos, costo cero de despliegue y menor complejidad sin TypeScript ni frameworks extra | React/Next.js, Vue/Nuxt, Django |
| 2026-11-11 | Adaptar especialistas a `.agents/skills/*/SKILL.md` | Descubrimiento automÃ¡tico y carga bajo demanda (Progressive Disclosure) en Gemini / Antigravity | Archivos planos sin autodescubrimiento |

## 3. Registro de cambios (mÃ¡s reciente arriba)

_Una entrada por cada push o cierre de tarea._

### 2026-11-11 Â· `phase/01-setup` Â· inicial
- **QuÃ©:** Configura plantilla base optimizada para Gemini con `AGENTS.md` y 6 skills en `.agents/skills/`
- **Archivos clave:** `AGENTS.md`, `.agents/skills/*/SKILL.md`, `docs/PLAN.md`, `docs/HISTORIAL.md`, `.github/workflows/ci.yml`
- **Agente(s):** orquestador, docs-seo
- **Notas:** El proyecto estÃ¡ listo para inicializar Astro sin perder los archivos de configuraciÃ³n.

<!-- Copiar el bloque anterior para cada nueva entrada, encima de las existentes. -->

## 4. Mapa del cÃ³digo

_DÃ³nde estÃ¡ cada cosa. Se actualiza solo cuando cambia la estructura._

| Ruta | QuÃ© contiene |
|------|--------------|
| `src/pages/` | Rutas del sitio |
| `src/components/` | Componentes reutilizables `.astro` |
| `src/layouts/` | Layouts base |
| `src/assets/` | ImÃ¡genes descargadas localmente y optimizadas con `astro:assets` |
| `src/content.config.js` | ConfiguraciÃ³n de Content Collections (Astro 5+) |
| `src/content/` | Datos y contenido de las colecciones (Markdown/MDX/JSON) |
| `.agents/skills/` | Skills de especialistas para Gemini (`desarrollo`, `ux-ui`, `backend`, `seguridad`, `qa`, `docs-seo`) |
| `docs/PLAN.md` | Plan general y checklist de fases |

## 5. Convenciones que la IA debe respetar

- Responder y comentar en espaÃ±ol.
- Commits atÃ³micos con Conventional Commits.
- Nunca commitear directo a `main`.
- Sin dependencias ni servicios de pago.
- Sin secretos en el repositorio (nunca usar `PUBLIC_` para claves secretas).

## 6. Archivo y lÃ­mites

- Si la secciÃ³n 3 supera ~40 entradas, mover las mÃ¡s antiguas a `docs/historial/archivo-AAAA-MM.md` y dejar aquÃ­ solo un enlace.
- Mantener la secciÃ³n 1 corta: es lo Ãºnico que la IA lee siempre.
