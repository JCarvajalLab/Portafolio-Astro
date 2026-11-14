---
title: "E-commerce Full Stack — Proyecto Final"
titleEn: "Full Stack E-commerce — Capstone Project"
tag: "PROYECTO FINAL · FULL STACK PYTHON & DJANGO"
tagEn: "CAPSTONE PROJECT · FULL STACK PYTHON & DJANGO"
category: "fullstack"
status: "completed"
image: "/projects/ecommerce-django-preview.svg"
order: 3
year: "Jul. 2026"
yearEn: "Jul. 2026"
role: "Desarrollador Full Stack Python"
roleEn: "Python Full Stack Developer"
summary: "Plataforma completa de comercio electrónico desarrollada con Django y PostgreSQL. Integra catálogo de productos, autenticación de usuarios, carrito de compras dinámico y gestión de pedidos para simular un flujo real de compra con panel de administración y roles."
summaryEn: "Complete e-commerce platform built with Django and PostgreSQL. Integrates product catalog, user authentication, dynamic shopping cart, and order management to simulate a real-world purchase flow with role-based administration."
problem: "Construir un comercio electrónico escalable requiere mucho más que mostrar productos en pantalla: exige garantizar la integridad transaccional entre el catálogo, las sesiones de usuario autenticado, el estado del carrito de compras y la persistencia relacional de las órdenes generadas."
problemEn: "Building a scalable e-commerce platform requires much more than displaying products: it demands transactional integrity across the catalog, authenticated user sessions, shopping cart state, and relational persistence of generated orders."
solution: "Desarrollé una aplicación web Full Stack bajo la arquitectura MVT (Model-View-Template) de Django conectada a una base de datos relacional PostgreSQL. Implementé autenticación segura de usuarios, gestión de carrito persistente en sesión y base de datos, validación de stock y un panel administrativo protegido por permisos."
solutionEn: "I developed a Full Stack web application using Django's MVT (Model-View-Template) architecture connected to a PostgreSQL relational database. I implemented secure user authentication, session/database cart management, stock validation, and a permission-protected admin panel."
architecture:
  - "Modelado relacional en PostgreSQL gestionado mediante Django ORM (Usuarios, Categorías, Productos, Carrito, Órdenes y Detalle de Orden)."
  - "Sistema de autenticación nativo de Django con protección CSRF en todos los formularios, hash seguro de contraseñas y control de acceso por roles."
  - "Lógica de carrito de compras sincronizada que calcula subtotales, impuestos y disponibilidad antes de confirmar el pedido."
  - "Interfaz responsiva construida con HTML5 semántico, CSS3 y Bootstrap 5 adaptada para navegación fluida en móviles y escritorio."
architectureEn:
  - "Relational data modeling in PostgreSQL managed through Django ORM (Users, Categories, Products, Cart, Orders, and Order Items)."
  - "Django native authentication with CSRF protection across all forms, secure password hashing, and role-based access control."
  - "Synchronized shopping cart logic calculating subtotals, taxes, and stock availability prior to order confirmation."
  - "Responsive interface built with semantic HTML5, CSS3, and Bootstrap 5 tailored for smooth mobile and desktop browsing."
results:
  - "Flujo extremo a extremo funcional: registro, inicio de sesión, filtrado de catálogo, armado de carrito y generación de orden."
  - "Integridad referencial garantizada en PostgreSQL mediante claves foráneas y validaciones en servidor."
  - "Administración centralizada de inventario y pedidos a través de Django Admin personalizado."
resultsEn:
  - "Functional end-to-end flow: user registration, login, catalog filtering, cart building, and order generation."
  - "Referential integrity guaranteed in PostgreSQL via foreign keys and strict server-side validations."
  - "Centralized inventory and order management through a customized Django Admin interface."
stack:
  - "PYTHON"
  - "DJANGO"
  - "POSTGRESQL"
  - "SQL"
  - "BOOTSTRAP"
  - "GIT & GITHUB"
demoUrl: null
repoUrl: "https://github.com/JCarvajalLab"
highlight: true
---

<div data-lang-block="es">

## Enfoque del Caso de Estudio

Este proyecto consolida la especialización **Full Stack Python** integrando todas las capas de una aplicación web empresarial: desde el diseño del esquema relacional en **PostgreSQL** hasta las vistas protegidas y la experiencia de compra del cliente final.

### Decisiones de Ingeniería

1. **Seguridad y Validación en Servidor:** Ningún dato enviado desde el navegador se asume como válido. Los precios y totales se recalculan íntegramente en el backend usando las entidades de `Django ORM` antes de registrar una orden.
2. **Separación de Responsabilidades:** La lógica de negocio del carrito y el procesamiento de pedidos se estructuró de forma modular para facilitar el mantenimiento y la escalabilidad del código.
3. **Flujo de trabajo con Git:** Desarrollo organizado mediante ramas por funcionalidad (*feature branches*) y commits descriptivos siguiendo buenas prácticas de control de versiones.

</div>

<div data-lang-block="en" class="hidden">

## Case Study Focus

This project consolidates my **Full Stack Python** specialization by integrating every layer of an enterprise web application: from relational schema design in **PostgreSQL** to protected views and the end-user shopping experience.

### Engineering Decisions

1. **Server-Side Security & Validation:** No data sent from the browser is trusted by default. Prices and totals are recalculated entirely on the backend using `Django ORM` entities before recording any order.
2. **Separation of Concerns:** Shopping cart business logic and order processing were structured modularly to ensure code maintainability and scalability.
3. **Git Workflow:** Development organized through feature branches and descriptive commits following version control best practices.

</div>
