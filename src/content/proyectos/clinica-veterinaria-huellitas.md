---
title: "Clínica Veterinaria Huellitas"
titleEn: "Huellitas Veterinary Clinic"
tag: "EN PRODUCCIÓN · FRONTEND & ARQUITECTURA"
tagEn: "LIVE IN PRODUCTION · FRONTEND & ARCHITECTURE"
category: "frontend"
status: "live"
image: "/projects/veterinaria-preview.png"
order: 2
year: "Nov. 2026"
yearEn: "Nov. 2026"
role: "Desarrollador Frontend & UX/UI"
roleEn: "Frontend & UX/UI Developer"
summary: "Landing médica de alta conversión con portal interactivo de agendamiento en 4 pasos, filtrado dinámico de profesionales por especialidad, validación estricta de domingos y especies, comprobante médico con QR vectorial e impresión limpia, dark mode y 0 frameworks pesados."
summaryEn: "High-conversion medical landing page featuring a 4-step interactive booking portal, dynamic specialist filtering, strict Sunday and pet-species validation, printable medical voucher with vector QR code, dark mode, and 0 heavy frameworks."
problem: "Las clínicas veterinarias suelen depender de páginas estáticas poco claras o widgets externos lentos para agendar horas, provocando abandono de usuarios en dispositivos móviles, citas mal asignadas (por ejemplo, exóticos asignados a veterinarios generales o agendamientos en días cerrados) y tiempos de carga elevados."
problemEn: "Veterinary clinics often rely on unclear static pages or slow third-party booking widgets, causing mobile user drop-off, misassigned appointments (e.g., exotic pets booked with general vets or appointments on closed days), and slow load times."
solution: "Diseñé y construí una plataforma web ultra rápida en Astro 5 y Tailwind CSS v4 sin frameworks pesados de JavaScript. Implementé un asistente interactivo de reserva de horas en 4 pasos con validación en tiempo real, asignación inteligente de especialistas según el servicio y especie de la mascota, bloqueo automático de domingos y generación de un comprobante médico imprimible con código QR vectorial."
solutionEn: "I designed and built an ultra-fast web platform in Astro 5 and Tailwind CSS v4 without heavy JS frameworks. I implemented a 4-step interactive appointment wizard with real-time validation, smart specialist matching by service and pet species, automatic Sunday blocking, and a printable medical voucher with a vector QR code."
architecture:
  - "Generación estática (SSG) con Astro 5 para lograr carga instantánea (< 500ms) y puntuación perfecta en Lighthouse."
  - "Asistente de reserva en 4 pasos construido en JavaScript nativo modular, manteniendo el bundle de cliente al mínimo."
  - "Filtrado cruzado entre especialidad médica, especie de la mascota y disponibilidad horaria con bloqueo de días inhábiles."
  - "Sistema de tema claro/oscuro con script inline anti-FOUC y hoja de estilos de impresión (@media print) dedicada para el comprobante de cita."
architectureEn:
  - "Static Site Generation (SSG) with Astro 5 achieving instant loads (< 500ms) and top Lighthouse scores."
  - "4-step booking wizard built with modular vanilla JavaScript, keeping the client bundle minimal."
  - "Cross-filtering between medical specialty, pet species, and schedule availability with non-business day blocking."
  - "Light/dark theme system with inline anti-FOUC script and dedicated @media print stylesheet for appointment vouchers."
results:
  - "Puntuación >= 95 en Lighthouse (Performance, Accessibility, Best Practices y SEO)."
  - "0 dependencias de frameworks de UI externos y $0 USD de costo operativo en Cloudflare Pages."
  - "Flujo completo de agendamiento validado en móvil y escritorio con generación instantánea de comprobante QR."
resultsEn:
  - "Lighthouse score >= 95 across Performance, Accessibility, Best Practices, and SEO."
  - "0 external UI framework dependencies and $0 USD operating cost on Cloudflare Pages."
  - "End-to-end booking flow validated on mobile and desktop with instant QR voucher generation."
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

<div data-lang-block="es">

## Enfoque del Caso de Estudio

El objetivo principal de **Clínica Veterinaria Huellitas** fue demostrar cómo una arquitectura moderna orientada al rendimiento (*Zero-JS by default* con Astro 5) puede ofrecer al mismo tiempo una experiencia altamente interactiva usando únicamente las APIs nativas del navegador.

### Desafíos Técnicos Resueltos

1. **Lógica de negocio en el agendamiento:** El formulario multipaso valida dinámicamente que si un tutor selecciona una mascota exótica o una cirugía especializada, solo se habiliten los médicos veterinarios acreditados en esa área y se bloqueen automáticamente los domingos y horas fuera de turno.
2. **Accesibilidad y Modo Oscuro sin parpadeos:** Se implementó navegación completa por teclado, atributos `aria-live` para anunciar errores de validación y un script síncrono en el `<head>` que evita el destello blanco (*FOUC*) al recargar en modo oscuro.
3. **Comprobante Médico Imprimible:** Al confirmar la hora, el usuario obtiene un resumen estructurado con un código QR vectorial generado en SVG y reglas `@media print` que ocultan la navegación y el pie de página al imprimir o guardar como PDF.

</div>

<div data-lang-block="en" class="hidden">

## Case Study Focus

The primary goal of **Huellitas Veterinary Clinic** was to demonstrate how a performance-first modern architecture (*Zero-JS by default* with Astro 5) can simultaneously deliver a rich interactive experience using only native browser APIs.

### Technical Challenges Solved

1. **Business Logic in Appointment Booking:** The multi-step wizard dynamically validates that when a pet owner selects an exotic animal or specialized surgery, only accredited veterinarians in that field are enabled while Sundays and off-hours are automatically blocked.
2. **Accessibility & Flicker-Free Dark Mode:** Full keyboard navigation, `aria-live` regions for validation feedback, and a synchronous `<head>` script preventing white flashes (*FOUC*) on dark mode reloads.
3. **Printable Medical Voucher:** Upon confirming an appointment, users receive a structured summary with an SVG vector QR code and `@media print` rules that hide navigation and footer elements when printing or saving as PDF.

</div>
