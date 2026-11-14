---
title: "Tienda de Mascotas — E-commerce SSR"
tag: "PENDIENTE · PRÓXIMO DESARROLLO · FULL STACK SSR"
category: "fullstack"
status: "pending"
image: "/projects/tienda-mascotas-preview.svg"
order: 1
year: "Próximamente (2026)"
role: "Desarrollador Full Stack (Astro SSR & PostgreSQL)"
summary: "Próximo proyecto del portafolio (en etapa de planificación): tienda de artículos para mascotas (alimento, juguetes, accesorios e higiene) con categorías por especie, carrito persistente en JavaScript nativo, servidor Astro SSR con base de datos PostgreSQL para stock/órdenes y checkout en modo sandbox."
problem: "Construir un comercio electrónico moderno sin el peso ni el costo de infraestructura de los frameworks tradicionales, resolviendo tanto la velocidad de navegación en el catálogo como la consistencia transaccional del stock y las órdenes en el servidor."
solution: "Arquitectura híbrida en Astro 5 combinando páginas estáticas ultrarrápidas para el catálogo con renderizado en servidor (SSR), endpoints/Actions seguros, consultas SQL parametrizadas sobre PostgreSQL y flujo de pago en modo sandbox."
architecture:
  - "Catálogo estructurado por especie animal (perros, gatos, exóticos) y tipo de producto con Content Collections."
  - "Carrito de compras reactivo en cliente desarrollado con JavaScript nativo y sincronización en localStorage."
  - "Backend en Astro SSR conectado a PostgreSQL mediante consultas parametrizadas para control real de inventario y órdenes."
  - "Integración de pasarela de pago en entorno sandbox con validación estricta en servidor y endurecimiento de seguridad (CSP, rate limiting)."
results:
  - "Proyecto 3 del plan de ingeniería actualmente pendiente de inicio tras finalizar este portafolio."
  - "Diseñado bajo regla de costo $0 USD y 0 frameworks de UI externos."
  - "Unificará las competencias Frontend (Astro + Tailwind) con Backend y Datos (PostgreSQL + SSR)."
stack:
  - "ASTRO"
  - "TAILWIND CSS"
  - "JAVASCRIPT"
  - "POSTGRESQL"
  - "SQL"
  - "GIT & GITHUB"
demoUrl: null
repoUrl: "https://github.com/JCarvajalLab"
highlight: true
---

## Estado del Proyecto: Pendiente (Próximo Desarrollo)

Este proyecto corresponde a la **tercera etapa de mi hoja de ruta en Astro**, planificada para iniciarse inmediatamente después del lanzamiento de este portafolio.

### Fases Planificadas

1. **Diseño y Catálogo:** Modelado de productos, categorías por tipo de mascota y vistas de detalle.
2. **Carrito con JS Nativo:** Gestión de estado en el navegador con persistencia en `localStorage` y validación de cantidades.
3. **Servidor Astro SSR y PostgreSQL:** Persistencia de órdenes, control de stock con consultas parametrizadas y Astro Actions.
4. **Checkout Sandbox y Hardening:** Integración de pagos de prueba y auditoría completa de seguridad antes de pasar a producción.
