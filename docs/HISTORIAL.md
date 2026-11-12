# Historial del proyecto

> **Para la IA:** lee primero la secciÃ³n **1. Estado actual** y solo si hace falta la **2. Decisiones importantes**. No necesitas revisar todo el repositorio. Las secciones 3 y 4 son consulta puntual.
>
> **Regla de actualizaciÃ³n:** este archivo se actualiza antes de cada push o merge a GitHub mediante un commit atÃ³mico (`docs(historial): registra <cambio>`). Si el cambio no estÃ¡ aquÃ­, para la IA no existe.

---

## 1. Estado actual

_Máximo ~15 líneas. Se reescribe en cada actualización, no se acumula._

- **Proyecto:** portafolio (casos de estudio) — Portafolio con casos de estudio
- **Repositorio:** https://github.com/JCarvajalLab/Portafolio-Astro
- **Última actualización:** 2026-11-12
- **Fase activa:** `phase/02-base` (Fase 2 completada al 100%)
- **Rama de trabajo:** `phase/02-base`
- **Último commit relevante:** `feat(base): incorpora navbar con toggle dark mode, footer y pagina 404 personalizada`
- **Despliegue:** servidor local de desarrollo activo en `http://localhost:4321/`
- **Qué funciona:** Layout base con Glassmorphism, Navbar flotante con toggle Sol/Luna accesible en JS nativo (persistencia en `localStorage`), menú móvil accesible con escape y aria-expanded, navegación suave sin hashes residuales, Footer completo con enlaces sociales y arquitectura técnica, página personalizada `404.astro` con SVG animado y home estructurada con secciones `#proyectos`, `#stack`, `#sobre-mi` y `#contacto`
- **Qué está en progreso:** Cierre de Fase 2 e inicio de Fase 3 (Content Collections para casos de estudio)
- **Bloqueos o problemas conocidos:** ninguno (0 errores en build, lint y format, 0 vulnerabilidades en audit)
- **Siguiente paso concreto:** Integrar `phase/02-base` en `develop` e iniciar `phase/03-content`

## 2. Decisiones importantes

_Una línea por decisión. Evita que la IA proponga de nuevo algo ya descartado._

| Fecha | Decisión | Motivo | Alternativas descartadas |
|-------|----------|--------|--------------------------|
| 2026-11-11 | Usar Astro 5+ con JavaScript y Tailwind CSS v4 | Sitios rápidos, costo cero de despliegue y menor complejidad sin TypeScript ni frameworks extra | React/Next.js, Vue/Nuxt, Django |
| 2026-11-11 | Adaptar especialistas a `.agents/skills/*/SKILL.md` | Descubrimiento automático y carga bajo demanda (Progressive Disclosure) en Gemini / Antigravity | Archivos planos sin autodescubrimiento |
| 2026-11-12 | Usar Cloudflare Pages para despliegue de sitios estáticos | Costo $0, CDN global, enlace público rápido `.pages.dev` y CI/CD continuo conectado a GitHub | GitHub Pages (rutas base rígidas), Vercel o Netlify |
| 2026-11-12 | Implementar Dark Mode con script anti-FOUC y `@custom-variant dark` | Probado en Veterinaria: previene parpadeos en recargas y sincroniza preferencia de OS y localStorage | Implementaciones reactivas lentas o sin persistencia |
| 2026-11-12 | Incluir página personalizada `src/pages/404.astro` | Retención de usuarios y experiencia visual consistente ante rutas inexistentes | Página 404 genérica del hosting |
| 2026-11-12 | Menú móvil accesible y navegación suave sin hashes residuales | Experiencia nativa fluida, control WCAG de `aria-expanded` y URLs visualmente limpias | Librerías pesadas o frameworks de UI |

## 3. Registro de cambios (más reciente arriba)

_Una entrada por cada push o cierre de tarea._

### 2026-11-12 · `phase/02-base` · layout, navbar con modo oscuro, footer y pagina 404
- **Qué:** Creación de componentes `Navbar.astro` flotante con efecto Glassmorphism, botón toggle Sol/Luna para Dark Mode en desktop y móvil con persistencia en `localStorage`, menú móvil accesible, navegación suave que limpia el hash de la URL; componente `Footer.astro` con enlaces rápidos y notas técnicas; creación de `src/pages/404.astro` con ilustración vectorial SVG animada y soporte dark mode; e integración en `Layout.astro` y estructuración semántica de secciones en `src/pages/index.astro`.
- **Archivos clave:** `src/components/Navbar.astro`, `src/components/Footer.astro`, `src/layouts/Layout.astro`, `src/pages/404.astro`, `src/pages/index.astro`, `docs/PLAN.md`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, desarrollo, ux-ui, qa, docs-seo
- **Notas:** `npm run build` genera 2 páginas en 538ms con 0 errores; ESLint y Prettier limpios; 0 vulnerabilidades en audit. Verificado en servidor local en `http://localhost:4321/`.

### 2026-11-12 · `phase/01-setup` · inicialización de proyecto base
- **Qué:** Inicialización de proyecto Astro 5+, Tailwind CSS v4 (@tailwindcss/vite), ESLint v9 LTS, Prettier con plugins de Astro y Tailwind, configuración de scripts de calidad en `package.json`, layout base con script anti-FOUC para Dark Mode y página de inicio de presentación.
- **Archivos clave:** `package.json`, `astro.config.mjs`, `eslint.config.mjs`, `.prettierrc.mjs`, `.prettierignore`, `src/styles/global.css`, `src/layouts/Layout.astro`, `src/pages/index.astro`, `public/favicon.svg`, `public/robots.txt`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, desarrollo, qa, docs-seo
- **Notas:** `npm run build` genera en ~800ms con 0 errores; `npm run lint` y `npm run format:check` pasando limpios; 0 vulnerabilidades en `npm audit`. Servidor local levantado en `http://localhost:4321/`.

### 2026-11-12 · `phase/01-setup` · incorporación de mejoras de veterinaria a la planificación
- **Qué:** Actualización de `PLAN.md` e `HISTORIAL.md` incorporando las lecciones y mejoras de arquitectura validadas en el proyecto de veterinaria: adopción de Cloudflare Pages como hosting de costo $0, inclusión explícita de página `404.astro` y modo oscuro anti-FOUC en la hoja de ruta.
- **Archivos clave:** `docs/PLAN.md`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, docs-seo
- **Notas:** Se alinea la planificación del Portafolio con las soluciones exitosas del proyecto anterior.

### 2026-11-11 · `phase/01-setup` · inicial
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
