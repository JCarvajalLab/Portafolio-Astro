# Historial del proyecto

> **Para la IA:** lee primero la secciÃ³n **1. Estado actual** y solo si hace falta la **2. Decisiones importantes**. No necesitas revisar todo el repositorio. Las secciones 3 y 4 son consulta puntual.
>
> **Regla de actualizaciÃ³n:** este archivo se actualiza antes de cada push o merge a GitHub mediante un commit atÃ³mico (`docs(historial): registra <cambio>`). Si el cambio no estÃ¡ aquÃ­, para la IA no existe.

---

## 1. Estado actual

_Máximo ~15 líneas. Se reescribe en cada actualización, no se acumula._

- **Proyecto:** portafolio (casos de estudio) — Portafolio con casos de estudio
- **Repositorio:** https://github.com/JCarvajalLab/Portafolio-Astro
- **Última actualización:** 2026-11-13
- **Fase activa:** `phase/02-base` (Fase 2 completada al 100%)
- **Rama de trabajo:** `phase/02-base`
- **Último commit relevante:** `feat(hero): rediseña portada con cuadricula de fondo, stacks animados en naranja y layout editorial`
- **Despliegue:** servidor local de desarrollo activo en `http://localhost:4321/`
- **Qué funciona:** Identidad visual 60-30-10 (`#0E0E0E`, `#FFFFFF`, `#FF5A1F`), Hero editorial con cuadrícula arquitectónica de fondo (`.bg-hero-grid`), eyebrow superior técnico (`DISPONIBLE PARA OPORTUNIDADES LABORALES | INGENIERO EN INFORMÁTICA`), titular gigante con `Jordan Carvajal.` en blanco y línea naranja interactiva con animación typewriter de stacks (`Python & Django`, `Astro & Tailwind CSS`, `JavaScript & Vue.js`, `PostgreSQL & SQL`, `Git & GitHub`), píldoras de stack clicables y pie de portada dividido en dos columnas con botones redondeados (`Ver mi trabajo ->` y `Hablemos`)
- **Qué está en progreso:** Cierre de Fase 2 para avanzar a Fase 3 (Content Collections)
- **Bloqueos o problemas conocidos:** ninguno (0 errores en build, lint y format, 0 vulnerabilidades en audit)
- **Siguiente paso concreto:** Integrar `phase/02-base` hacia `develop` e iniciar `phase/03-content`

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
| 2026-11-13 | Paleta 60-30-10 (#0E0E0E, #FFFFFF, #FF5A1F) con datos del CV | Identidad potente, tecnológica y diferenciada de proyectos anteriores; contenido real de Jordan Carvajal | Paletas genéricas o pastelosas de landing comercial |
| 2026-11-13 | Logotipo con llaves `{ }`, marca JCarvajalLab y botón maquetado ES/EN | Identidad developer limpia, remoción de botones redundantes y preparación para i18n en fase futura | Iniciales JC y botones repetidos |

## 3. Registro de cambios (más reciente arriba)

_Una entrada por cada push o cierre de tarea._

### 2026-11-13 · `phase/02-base` · portada editorial con cuadrícula de fondo y animación de stacks en naranja
- **Qué:** Rediseño de la portada (Hero) inspirado en la referencia visual del usuario: fondo con patrón de cuadrícula arquitectónica sutil (`.bg-hero-grid`), encabezado técnico en fuente monoespaciada (`DISPONIBLE PARA OPORTUNIDADES LABORALES | INGENIERO EN INFORMÁTICA · DESARROLLO WEB & SOPORTE TI`), titular de alto impacto con `Jordan Carvajal.` en blanco puro y frase naranja animada (`Construyendo soluciones con [Stack] |`) que alterna dinámicamente entre los stacks activos y en aprendizaje (`Python & Django.`, `Astro & Tailwind CSS.`, `JavaScript & Vue.js.`, `PostgreSQL & SQL.`, `Git, GitHub & Clean Code.`), barra interactiva de píldoras de stack clicables al instante, línea divisoria horizontal de ancho completo y sección inferior en dos columnas con descripción a la izquierda y botones tipo píldora (`Ver mi trabajo ->` y `Hablemos`) a la derecha.
- **Archivos clave:** `src/pages/index.astro`, `src/styles/global.css`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, ux-ui, desarrollo, docs-seo
- **Notas:** `npm run build` en 458ms con 0 errores y 0 vulnerabilidades.

### 2026-11-13 · `phase/02-base` · simplificación de nombre y expansión de hero a ancho completo
- **Qué:** Simplificación del nombre en todo el sitio a "Jordan Carvajal" en una sola línea y un único color sólido (`#0E0E0E` / `#FFFFFF`) para no distraer de la información inferior; expansión del contenedor del Hero de `max-w-4xl` a `max-w-6xl` sin restricción de ancho en el párrafo descriptivo (distribución tipo jumbotron alineada con Navbar y secciones inferiores); eliminación de las menciones restantes a "Santiago, Chile" en `experienceList` y actualización de todos los enlaces de LinkedIn a `https://www.linkedin.com/in/jcarvajallab/`.
- **Archivos clave:** `src/pages/index.astro`, `src/components/Footer.astro`, `src/layouts/Layout.astro`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, ux-ui, desarrollo, docs-seo
- **Notas:** `npm run build` en 493ms con 0 errores y 0 vulnerabilidades.

### 2026-11-13 · `phase/02-base` · refinamiento de navbar, hero y selector de idioma
- **Qué:** Actualización del logo en Navbar y Footer a `{ } JCarvajalLab`, remoción de badge "Disponible" en header, remoción del botón duplicado de contacto ("Contactar ->") dejando solo el enlace normal de navegación, incorporación del botón de cambio de idioma maquetado `ES / EN` al lado del modo nocturno, remoción de la tarjeta lateral de resumen del Hero para darle mayor amplitud al contenido principal y eliminación de la mención a ubicación física en resguardo de privacidad.
- **Archivos clave:** `src/components/Navbar.astro`, `src/components/Footer.astro`, `src/pages/index.astro`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, ux-ui, desarrollo, docs-seo
- **Notas:** `npm run build` en 649ms con 0 vulnerabilidades.

### 2026-11-13 · `phase/02-base` · identidad 60-30-10 y contenido real del cv
- **Qué:** Implementación de la paleta solicitada por el usuario bajo la regla 60-30-10 (60% Negro `#0E0E0E`, 30% Blanco `#FFFFFF`, 10% Acento Naranja `#FF5A1F`). Integración completa del contenido verídico del CV: Ingeniería en Informática (INACAP), 4 años de soporte TI en Entel Connect Center, especializaciones en Talento Digital para Chile (Full Stack Python/Django y Frontend Vue.js), certificaciones de Git & GitHub y proyectos de e-commerce.
- **Archivos clave:** `src/styles/global.css`, `src/layouts/Layout.astro`, `src/components/Navbar.astro`, `src/components/Footer.astro`, `src/pages/index.astro`, `src/pages/404.astro`, `docs/HISTORIAL.md`
- **Agente(s):** orquestador, ux-ui, desarrollo, docs-seo
- **Notas:** Compilación estática limpia en 559ms; 0 vulnerabilidades en audit; servidor de desarrollo activo en `http://localhost:4321/`.

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
