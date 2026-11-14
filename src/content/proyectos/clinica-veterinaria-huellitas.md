---
title: "Clínica Veterinaria Huellitas"
tag: "EN PRODUCCIÓN · FRONTEND & ARQUITECTURA"
category: "frontend"
status: "live"
image: "/projects/veterinaria-preview.png"
order: 2
year: "Nov. 2026"
role: "Desarrollador Frontend & UX/UI"
summary: "Landing médica de alta conversión con portal interactivo de agendamiento en 4 pasos, filtrado dinámico de profesionales por especialidad, validación estricta de domingos y especies, comprobante médico con QR vectorial e impresión limpia, dark mode y 0 frameworks pesados."
problem: "Las clínicas veterinarias suelen depender de páginas estáticas poco claras o widgets externos lentos para agendar horas, provocando abandono de usuarios en dispositivos móviles, citas mal asignadas (por ejemplo, exóticos asignados a veterinarios generales o agendamientos en días cerrados) y tiempos de carga elevados."
solution: "Diseñé y construí una plataforma web ultra rápida en Astro 5 y Tailwind CSS v4 sin frameworks pesados de JavaScript. Implementé un asistente interactivo de reserva de horas en 4 pasos con validación en tiempo real, asignación inteligente de especialistas según el servicio y especie de la mascota, bloqueo automático de domingos y generación de un comprobante médico imprimible con código QR vectorial."
architecture:
  - "Generación estática (SSG) con Astro 5 para lograr carga instantánea (< 500ms) y puntuación perfecta en Lighthouse."
  - "Asistente de reserva en 4 pasos construido en JavaScript nativo modular, manteniendo el bundle de cliente al mínimo."
  - "Filtrado cruzado entre especialidad médica, especie de la mascota y disponibilidad horaria con bloqueo de días inhábiles."
  - "Sistema de tema claro/oscuro con script inline anti-FOUC y hoja de estilos de impresión (@media print) dedicada para el comprobante de cita."
results:
  - "Puntuación >= 95 en Lighthouse (Performance, Accessibility, Best Practices y SEO)."
  - "0 dependencias de frameworks de UI externos y $0 USD de costo operativo en Cloudflare Pages."
  - "Flujo completo de agendamiento validado en móvil y escritorio con generación instantánea de comprobante QR."
stack:
  - "ASTRO"
  - "TAILWIND CSS"
  - "JAVASCRIPT"
  - "HTML5 & CSS3"
  - "CLOUDFLARE PAGES"
  - "GIT & GITHUB"
demoUrl: "https://huellitas-vet.pages.dev"
repoUrl: "https://github.com/JCarvajalLab/astro-landing-veterinaria"
highlight: true
---

## Enfoque del Caso de Estudio

El objetivo principal de **Clínica Veterinaria Huellitas** fue demostrar cómo una arquitectura moderna orientada al rendimiento (*Zero-JS by default* con Astro 5) puede ofrecer al mismo tiempo una experiencia altamente interactiva usando únicamente las APIs nativas del navegador.

### Desafíos Técnicos Resueltos

1. **Lógica de negocio en el agendamiento:** El formulario multipaso valida dinámicamente que si un tutor selecciona una mascota exótica o una cirugía especializada, solo se habiliten los médicos veterinarios acreditados en esa área y se bloqueen automáticamente los domingos y horas fuera de turno.
2. **Accesibilidad y Modo Oscuro sin parpadeos:** Se implementó navegación completa por teclado, atributos `aria-live` para anunciar errores de validación y un script síncrono en el `<head>` que evita el destello blanco (*FOUC*) al recargar en modo oscuro.
3. **Comprobante Médico Imprimible:** Al confirmar la hora, el usuario obtiene un resumen estructurado con un código QR vectorial generado en SVG y reglas `@media print` que ocultan la navegación y el pie de página al imprimir o guardar como PDF.
